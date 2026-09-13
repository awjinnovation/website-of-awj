/**
 * Publish a preview build to the GitHub Pages branch.
 *
 *   node scripts/deploy-preview.mjs            build + publish
 *   node scripts/deploy-preview.mjs --dry-run  build + rewrite, skip the push
 *
 * The live site is served from the domain root, so the app is written that way.
 * A Pages project site is served from /<repo>/ instead, which needs three
 * things doing:
 *
 *  1. `base`, so the bundler emits its own URLs under the prefix. Passed as
 *     DEPLOY_BASE and read by vite.config.ts.
 *  2. A rewrite of the asset paths written as plain strings in components, for
 *     example `<img src="/team/x.jpg">`. The bundler leaves those alone because
 *     it cannot tell a URL from any other string, so they are patched in the
 *     emitted JS here rather than threaded through 119 call sites in source.
 *  3. `404.html` and `.nojekyll`. Pages has no rewrite rules, so a deep link
 *     like /pillars/systems is a miss; serving the app from 404.html lets the
 *     client router take over. `.nojekyll` stops Pages ignoring `_`-prefixed
 *     files.
 */

import { execSync } from 'node:child_process';
import { readdirSync, readFileSync, writeFileSync, copyFileSync, existsSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const REPO = 'website-of-awj';
const BASE = `/${REPO}/`;
const BRANCH = 'gh-pages';
const DIST = 'dist';
const DRY = process.argv.includes('--dry-run');

/** Root-relative folders that components reference as plain strings. */
const ASSET_ROOTS = ['assets', 'team', 'news-media', 'Fonts', 'brand'];

const run = (cmd, opts = {}) =>
  execSync(cmd, { stdio: 'inherit', ...opts });

const capture = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

console.log(`\n[1/4] building with base ${BASE}`);
run('npm run build', { env: { ...process.env, DEPLOY_BASE: BASE } });

console.log('\n[2/4] rewriting runtime asset paths in the bundle');
let patched = 0;
const jsDir = join(DIST, 'assets');
for (const file of readdirSync(jsDir).filter((f) => f.endsWith('.js'))) {
  const path = join(jsDir, file);
  let src = readFileSync(path, 'utf8');
  const before = src;
  for (const root of ASSET_ROOTS) {
    // Only where the path opens a string, so we never touch a substring that
    // merely happens to contain the same characters.
    for (const quote of ['"', "'", '`']) {
      src = src.split(`${quote}/${root}/`).join(`${quote}${BASE}${root}/`);
    }
  }
  if (src !== before) {
    writeFileSync(path, src);
    patched += 1;
  }
}
console.log(`      patched ${patched} bundle file(s)`);

// Deep links: Pages serves 404.html for anything it cannot find on disk.
copyFileSync(join(DIST, 'index.html'), join(DIST, '404.html'));
writeFileSync(join(DIST, '.nojekyll'), '');
console.log('      wrote 404.html and .nojekyll');

console.log('\n[3/4] verifying no root-relative asset paths remain');
let leftovers = 0;
for (const file of readdirSync(jsDir).filter((f) => f.endsWith('.js'))) {
  const src = readFileSync(join(jsDir, file), 'utf8');
  for (const root of ASSET_ROOTS) {
    for (const quote of ['"', "'", '`']) {
      leftovers += src.split(`${quote}/${root}/`).length - 1;
    }
  }
}
if (leftovers) {
  console.error(`      FAIL: ${leftovers} unprefixed path(s) left`);
  process.exit(1);
}
console.log('      ok');

if (DRY) {
  console.log('\n[4/4] --dry-run, not pushing\n');
  process.exit(0);
}

console.log(`\n[4/4] publishing ${DIST} to ${BRANCH}`);
const sha = capture('git rev-parse --short HEAD');

// Built with a throwaway index and commit-tree, so the checked-out branch, the
// working tree and HEAD are all left exactly as they were. Nothing here can
// touch uncommitted work, which `git checkout --orphan` followed by a forced
// checkout back would have destroyed.
const indexFile = join(process.cwd(), '.git', `deploy-index-${Date.now()}`);
const gitEnv = { ...process.env, GIT_INDEX_FILE: indexFile };

run(`git --work-tree=${DIST} add --all`, { env: gitEnv });
const tree = execSync('git write-tree', { env: gitEnv, encoding: 'utf8' }).trim();
const commit = execSync(
  `git commit-tree ${tree} -m "Preview build from ${sha}"`,
  { encoding: 'utf8' },
).trim();
run(`git push origin ${commit}:refs/heads/${BRANCH} --force`);
if (existsSync(indexFile)) rmSync(indexFile);

console.log(`\ndone: https://awjinnovation.github.io${BASE}\n`);
