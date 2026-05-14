/**
 * Phase 2: Actual scrape.
 *
 * 1. Navigates to https://awj.om/about via SPA routing (homepage -> click).
 * 2. Strips inline style/class attributes and scripts inside <main>.
 * 3. Converts the cleaned DOM to Markdown.
 * 4. Downloads every <img> inside <main> to public/about/<slugified-name>.
 * 5. Rewrites image refs in the Markdown to the local /about/* paths.
 * 6. Writes content/about.md.
 *
 * Run: npm run scrape:about
 */

import { chromium, type APIRequestContext, type Page } from 'playwright';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const HOME = 'https://awj.om/';
const PUBLIC_DIR = path.resolve('public/about');
const OUTPUT_MD = path.resolve('content/about.md');

const log = (s: string) => console.log(s);
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;
const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;

async function ensureDir(p: string) {
  await fs.mkdir(p, { recursive: true });
}

function slugifyFilename(rawUrl: string): string {
  const u = new URL(rawUrl);
  const decoded = decodeURIComponent(u.pathname.split('/').pop() || '');
  const dot = decoded.lastIndexOf('.');
  const stem = dot >= 0 ? decoded.slice(0, dot) : decoded;
  const ext = dot >= 0 ? decoded.slice(dot).toLowerCase() : '';
  const cleanStem = stem
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60) || 'image';
  return cleanStem + ext;
}

async function downloadImages(
  request: APIRequestContext,
  imgs: { src: string; alt: string }[],
): Promise<Map<string, string>> {
  const mapping = new Map<string, string>();
  await ensureDir(PUBLIC_DIR);
  const seenNames = new Set<string>();
  for (const { src } of imgs) {
    let filename = slugifyFilename(src);
    let n = 2;
    while (seenNames.has(filename)) {
      const dot = filename.lastIndexOf('.');
      const stem = dot >= 0 ? filename.slice(0, dot) : filename;
      const ext = dot >= 0 ? filename.slice(dot) : '';
      filename = `${stem}-${n}${ext}`;
      n++;
    }
    seenNames.add(filename);
    const dest = path.join(PUBLIC_DIR, filename);
    try {
      const res = await request.get(src, { failOnStatusCode: false });
      if (!res.ok()) {
        log(red(`  ✗ ${res.status()}  ${src}`));
        continue;
      }
      await fs.writeFile(dest, await res.body());
      const stat = await fs.stat(dest);
      mapping.set(src, `/about/${filename}`);
      log(green(`  ✓ ${filename}`) + dim(` (${Math.round(stat.size / 1024)}kb)`));
    } catch (e) {
      log(red(`  ✗ ${(e as Error).message.split('\n')[0]}  ${src}`));
    }
  }
  return mapping;
}

/**
 * Returns the cleaned <main> HTML structure as a simplified JSON tree, plus the
 * list of image sources (so the calling code can download them). Strips all
 * inline style/class attributes, scripts, comments, and any nav/header/footer
 * descendants. Runs in the browser context.
 */
async function extractStructure(page: Page) {
  return await page.evaluate(() => {
    type Node =
      | { type: 'heading'; level: number; text: string }
      | { type: 'paragraph'; runs: Run[] }
      | { type: 'list'; ordered: boolean; items: Run[][] }
      | { type: 'image'; src: string; alt: string }
      | { type: 'rule' };
    type Run = { text: string; bold?: boolean; href?: string };

    const main = document.querySelector('main') as HTMLElement | null;
    if (!main) return { nodes: [] as Node[], images: [] as { src: string; alt: string }[] };

    // Clone and strip undesired descendants + attributes from the clone.
    const clone = main.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('script, style, noscript, iframe').forEach((el) => el.remove());
    clone.querySelectorAll('header, nav, footer, [role="banner"], [role="navigation"], [role="contentinfo"]')
      .forEach((el) => el.remove());
    clone.querySelectorAll('*').forEach((el) => {
      el.removeAttribute('style');
      el.removeAttribute('class');
      el.removeAttribute('data-aos');
      el.removeAttribute('data-aos-duration');
      el.removeAttribute('data-aos-delay');
      // strip empty attrs
    });

    // Collect rich text runs from a node.
    const runsFrom = (el: Node | any): Run[] => {
      const runs: Run[] = [];
      const walk = (n: ChildNode, bold = false, href?: string) => {
        if (n.nodeType === Node.TEXT_NODE) {
          const t = (n.textContent || '').replace(/\s+/g, ' ');
          if (t.trim()) runs.push({ text: t, bold, href });
          return;
        }
        if (n.nodeType !== Node.ELEMENT_NODE) return;
        const el = n as HTMLElement;
        const tag = el.tagName.toLowerCase();
        if (tag === 'br') { runs.push({ text: '\n' }); return; }
        const nextBold = bold || tag === 'strong' || tag === 'b';
        const nextHref = href || (tag === 'a' ? (el as HTMLAnchorElement).href : undefined);
        el.childNodes.forEach((c) => walk(c, nextBold, nextHref));
      };
      el.childNodes.forEach((c: ChildNode) => walk(c));
      return runs;
    };

    const out: Node[] = [];
    const images: { src: string; alt: string }[] = [];

    const visit = (root: Element) => {
      Array.from(root.children).forEach((child) => {
        const el = child as HTMLElement;
        const tag = el.tagName.toLowerCase();

        if (/^h[1-6]$/.test(tag)) {
          const level = parseInt(tag.slice(1), 10);
          const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
          if (text) out.push({ type: 'heading', level, text });
          return;
        }
        if (tag === 'p') {
          const runs = runsFrom(el);
          if (runs.some((r) => r.text.trim())) out.push({ type: 'paragraph', runs });
          return;
        }
        if (tag === 'ul' || tag === 'ol') {
          const items: Run[][] = [];
          el.querySelectorAll(':scope > li').forEach((li) => {
            const runs = runsFrom(li);
            if (runs.length) items.push(runs);
          });
          if (items.length) out.push({ type: 'list', ordered: tag === 'ol', items });
          return;
        }
        if (tag === 'img') {
          const src = (el as HTMLImageElement).currentSrc || (el as HTMLImageElement).src;
          if (src && !src.startsWith('data:')) {
            const alt = (el as HTMLImageElement).alt || '';
            out.push({ type: 'image', src, alt });
            images.push({ src, alt });
          }
          return;
        }
        if (tag === 'hr') { out.push({ type: 'rule' }); return; }

        // Recurse into wrappers (div, section, article, span, etc.) but also
        // collect any <img> directly inside as standalone images, plus any
        // free text as a paragraph.
        // Plain text inside container
        const directText = Array.from(el.childNodes)
          .filter((n) => n.nodeType === Node.TEXT_NODE)
          .map((n) => (n.textContent || '').replace(/\s+/g, ' '))
          .join('')
          .trim();
        if (directText && !el.children.length) {
          out.push({ type: 'paragraph', runs: [{ text: directText }] });
          return;
        }
        // descend
        visit(el);
      });
    };

    visit(clone);
    return { nodes: out, images };
  });
}

type ExtractedNode =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; runs: { text: string; bold?: boolean; href?: string }[] }
  | { type: 'list'; ordered: boolean; items: { text: string; bold?: boolean; href?: string }[][] }
  | { type: 'image'; src: string; alt: string }
  | { type: 'rule' };

function renderRuns(runs: { text: string; bold?: boolean; href?: string }[]): string {
  let out = '';
  for (const r of runs) {
    let txt = r.text;
    if (r.bold) txt = `**${txt.trim()}**`;
    if (r.href) txt = `[${txt}](${r.href})`;
    out += txt;
  }
  return out.replace(/\s+/g, ' ').trim();
}

function toMarkdown(nodes: ExtractedNode[], imageMap: Map<string, string>): string {
  const lines: string[] = [];
  for (const n of nodes) {
    if (n.type === 'heading') {
      lines.push('');
      lines.push('#'.repeat(n.level) + ' ' + n.text.trim());
      lines.push('');
    } else if (n.type === 'paragraph') {
      const txt = renderRuns(n.runs);
      if (txt) {
        lines.push(txt);
        lines.push('');
      }
    } else if (n.type === 'list') {
      n.items.forEach((item) => {
        const marker = n.ordered ? '1.' : '-';
        lines.push(`${marker} ${renderRuns(item)}`);
      });
      lines.push('');
    } else if (n.type === 'image') {
      const local = imageMap.get(n.src) ?? n.src;
      const alt = n.alt.replace(/[\[\]]/g, '').trim();
      lines.push(`![${alt}](${local})`);
      lines.push('');
    } else if (n.type === 'rule') {
      lines.push('');
      lines.push('---');
      lines.push('');
    }
  }
  // Collapse runs of blank lines
  const collapsed: string[] = [];
  for (const l of lines) {
    if (l.trim() === '' && collapsed.length && collapsed[collapsed.length - 1].trim() === '') continue;
    collapsed.push(l);
  }
  return collapsed.join('\n').trim() + '\n';
}

async function main() {
  console.log('\n=== Scraping awj.om/about ===\n');
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
  });
  // tsx/esbuild injects a `__name` keepNames helper into transpiled code;
  // when Playwright serializes a page.evaluate callback the helper call
  // travels with it and ReferenceErrors in the browser. Polyfill it as an
  // identity function on every page load.
  await ctx.addInitScript(() => {
    if (typeof (globalThis as any).__name === 'undefined') {
      (globalThis as any).__name = (fn: any) => fn;
    }
  });

  const page = await ctx.newPage();

  log(dim(`Loading homepage ${HOME}`));
  await page.goto(HOME, { waitUntil: 'networkidle', timeout: 45000 });
  log(dim('Clicking About Us link to client-side route into /about'));
  await page.locator('a[href$="/about"]').first().click({ timeout: 10000 });
  await page.waitForURL(/\/about$/, { timeout: 15000 });
  await page.waitForLoadState('networkidle', { timeout: 30000 });
  await page.waitForTimeout(2000);
  log(`At: ${page.url()}\n`);

  log('Extracting cleaned structure...');
  const { nodes, images } = (await extractStructure(page)) as { nodes: ExtractedNode[]; images: { src: string; alt: string }[] };
  log(`  ${nodes.length} structural nodes  ${images.length} images`);

  log(`\nDownloading ${images.length} images to ${path.relative(process.cwd(), PUBLIC_DIR)}/`);
  const mapping = await downloadImages(ctx.request, images);

  log(`\nDownloaded ${mapping.size}/${images.length}`);
  if (mapping.size < images.length) {
    log(yellow(`  ${images.length - mapping.size} failed to download (left as original URLs in the .md)`));
  }

  const md = toMarkdown(nodes, mapping);
  await ensureDir(path.dirname(OUTPUT_MD));
  await fs.writeFile(
    OUTPUT_MD,
    '<!-- Scraped from https://awj.om/about. Edit before wiring into a React page. -->\n\n' + md,
    'utf-8',
  );
  log(`\n${green('✓')} Wrote ${path.relative(process.cwd(), OUTPUT_MD)} (${md.length} chars)`);

  await browser.close();
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
