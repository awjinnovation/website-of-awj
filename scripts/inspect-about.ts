/**
 * Phase 1: Discovery only.
 *
 * awj.om/about returns server-404 to direct requests but renders fine via
 * client-side routing. So this script:
 *   1. Loads https://awj.om/ (200)
 *   2. Clicks the "About Us" link to client-side-route to /about
 *   3. Waits for content to settle
 *   4. Prints container candidates, heading outline, images, cleanup stats
 *
 * No files written. Pick a container selector from the output, tell me,
 * I'll write the actual downloader.
 */

import { chromium, type Page } from 'playwright';

const HOME = 'https://awj.om/';

const MAIN_CANDIDATES = [
  'main',
  '[role="main"]',
  '#main',
  '.main',
  '.main-content',
  '.page-content',
  '.content',
  '.about',
  '.about-page',
  '#about',
  '.about-section',
  '.page-about',
  '.about-wrapper',
  '.about-container',
  'section.about',
  '.about-hero',
];

const cyan = (s: string) => `\x1b[36m${s}\x1b[0m`;
const dim = (s: string) => `\x1b[2m${s}\x1b[0m`;
const green = (s: string) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s: string) => `\x1b[33m${s}\x1b[0m`;
const red = (s: string) => `\x1b[31m${s}\x1b[0m`;
const bold = (s: string) => `\x1b[1m${s}\x1b[0m`;
const trimLine = (s: string, max = 80) =>
  s.replace(/\s+/g, ' ').trim().slice(0, max);

async function navigateToAbout(page: Page) {
  console.log(dim(`Loading homepage ${HOME}`));
  await page.goto(HOME, { waitUntil: 'networkidle', timeout: 45000 });

  console.log(dim(`Clicking the first /about link`));
  const link = page.locator('a[href$="/about"]').first();
  await link.click({ timeout: 10000 });
  await page.waitForURL(/\/about$/, { timeout: 15000 });
  await page.waitForLoadState('networkidle', { timeout: 30000 });
  // Extra settle for any post-route data fetch
  await page.waitForTimeout(2000);
  console.log(`Now at: ${page.url()}`);
}

async function inspect(page: Page) {
  // Containers
  const containerHits = await page.evaluate((sels: string[]) => {
    return sels.map((sel) => {
      const nodes = document.querySelectorAll(sel);
      if (nodes.length === 0) return { selector: sel, matches: 0 };
      const first = nodes[0] as HTMLElement;
      return {
        selector: sel,
        matches: nodes.length,
        tag: first.tagName.toLowerCase(),
        childCount: first.children.length,
        textLen: (first.textContent ?? '').trim().length,
        imgCount: first.querySelectorAll('img').length,
      };
    });
  }, MAIN_CANDIDATES);

  console.log(bold('\nContainer candidates:'));
  for (const c of containerHits) {
    if (c.matches === 0) {
      console.log(`  ${dim(c.selector.padEnd(24))} ${dim('no match')}`);
    } else {
      console.log(
        `  ${c.selector.padEnd(24)} ${green('×' + c.matches)} ${dim(`<${c.tag}> children=${c.childCount}, text=${c.textLen}c, imgs=${c.imgCount}`)}`,
      );
    }
  }

  // Top-level body structure: list direct children of <body> and their text+img counts.
  const bodyChildren = await page.evaluate(() => {
    return Array.from(document.body.children).map((el, i) => ({
      i,
      tag: el.tagName.toLowerCase(),
      id: (el as HTMLElement).id || undefined,
      classes: (el as HTMLElement).className || undefined,
      textLen: (el.textContent ?? '').trim().length,
      imgCount: el.querySelectorAll('img').length,
    }));
  });
  console.log(bold('\nBody children:'));
  bodyChildren.forEach((c) => {
    const sel = c.id ? `#${c.id}` : c.classes ? '.' + c.classes.split(/\s+/).slice(0, 2).join('.') : `<${c.tag}>`;
    console.log(`  [${String(c.i).padStart(2)}] ${c.tag.padEnd(8)} ${sel.padEnd(40)} ${dim(`text=${c.textLen}c, imgs=${c.imgCount}`)}`);
  });

  // Heading hierarchy
  const headings = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('h1, h2, h3, h4')).map((h) => {
      const el = h as HTMLElement;
      return {
        level: parseInt(el.tagName.slice(1), 10),
        text: (el.textContent ?? '').replace(/\s+/g, ' ').trim(),
      };
    }).filter((h) => h.text);
  });
  console.log(bold('\nHeading outline:'));
  if (!headings.length) console.log(dim('  (none)'));
  else
    headings.forEach((h) => {
      console.log(`  ${'  '.repeat(h.level - 1)}h${h.level}  ${trimLine(h.text, 100)}`);
    });

  // Images
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map((img) => ({
      src: (img as HTMLImageElement).currentSrc || (img as HTMLImageElement).src,
      alt: (img as HTMLImageElement).alt || '',
      w: (img as HTMLImageElement).naturalWidth,
      h: (img as HTMLImageElement).naturalHeight,
    })).filter((i) => i.src && !i.src.startsWith('data:'));
  });
  console.log(bold(`\nImages on page (${images.length}):`));
  images.slice(0, 30).forEach((i) => {
    const file = i.src.split('/').slice(-1)[0].split('?')[0];
    console.log(`  ${file.padEnd(46)} ${dim(`${i.w}x${i.h}`)} ${dim(i.alt ? `"${trimLine(i.alt, 50)}"` : '')}`);
  });
  if (images.length > 30) console.log(dim(`  ... + ${images.length - 30} more`));

  // Cleanup workload
  const cleanup = await page.evaluate(() => ({
    inlineStyle: document.querySelectorAll('[style]').length,
    classed: document.querySelectorAll('[class]').length,
    scripts: document.querySelectorAll('script').length,
    iframes: document.querySelectorAll('iframe').length,
  }));
  console.log(bold('\nCleanup workload:'));
  console.log(`  inline style="" : ${cleanup.inlineStyle}`);
  console.log(`  class=""        : ${cleanup.classed}`);
  console.log(`  <script>        : ${cleanup.scripts}`);
  console.log(`  <iframe>        : ${cleanup.iframes}`);

  const meta = await page.evaluate(() => ({
    lang: document.documentElement.lang || null,
    dir: document.documentElement.dir || null,
    title: document.title,
  }));
  console.log(bold('\nMeta:'));
  console.log(`  lang=${meta.lang || '(none)'}, dir=${meta.dir || '(none)'}`);
  console.log(`  title: ${meta.title}`);
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 ' +
      '(KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    viewport: { width: 1440, height: 900 },
    locale: 'en-US',
    extraHTTPHeaders: { 'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8' },
  });
  const page = await ctx.newPage();

  console.log(bold(cyan('\n=== AWJ /about discovery (via SPA navigation) ===\n')));
  try {
    await navigateToAbout(page);
  } catch (e) {
    console.log(red(`navigation failed: ${(e as Error).message}`));
    await browser.close();
    process.exit(1);
  }
  await inspect(page);

  // Probe AR — try toggling a lang switch on the page (if any), or
  // navigating to /about?lang=ar after a homepage visit.
  console.log(bold(cyan('\n=== AR probe ===\n')));
  const arLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll('a, button'))
      .filter((el) => /ar|عربي|العربية/i.test((el.textContent || '') + ' ' + (el as HTMLElement).getAttribute('href') || ''))
      .slice(0, 10)
      .map((el) => ({
        tag: el.tagName.toLowerCase(),
        text: (el.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 40),
        href: (el as HTMLAnchorElement).href || null,
      })),
  );
  if (arLinks.length === 0) console.log(dim('  No AR switch element found on /about'));
  else {
    console.log(dim('  AR-candidate elements found on /about:'));
    arLinks.forEach((l) => console.log(`    ${l.tag.padEnd(8)} ${('"' + l.text + '"').padEnd(30)} ${l.href ?? ''}`));
  }

  await browser.close();
  console.log(
    '\n' +
      dim('Pick one container selector from "Container candidates" above and tell me. ') +
      dim('Then I will write scrape-about.ts to download all images + emit content/about.md.'),
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
