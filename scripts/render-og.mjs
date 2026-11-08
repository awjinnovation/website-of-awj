/**
 * Render scripts/og-image.html to public/og-image.png (1200x630), the share
 * preview referenced by the og:image and twitter:image tags in index.html.
 *
 *   node scripts/render-og.mjs
 *
 * Link previews are cached by the apps that show them, so after changing the
 * image bump the ?v= query on those tags too.
 */

import { chromium } from 'playwright';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(pathToFileURL(join(here, 'og-image.html')).href);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: join(here, '..', 'public', 'og-image.png') });
await browser.close();
console.log('wrote public/og-image.png');
