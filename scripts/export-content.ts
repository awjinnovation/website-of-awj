/**
 * One-off: read the current hard-coded content modules and dump them to JSON,
 * so the database seeder starts from exactly what the site ships today.
 * Run with: npx tsx scripts/export-content.ts
 */
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { NEWS, CATEGORY_STYLES } from '../resources/js/data/news';
import { PILLAR_CONTENT } from '../resources/js/data/pillar-content';
import { PILLAR_ORGS } from '../resources/js/data/pillar-partners';
import { COMPANY_ADDRESS } from '../resources/js/data/company';
import { PILLARS, AWJ_BRAND } from '../resources/js/data/pillars';
import { TEAM } from '../resources/js/data/team';
import { DICT } from '../resources/js/i18n/dict';
import { PROJECTS } from '../resources/js/sections/Projects';
import { STAT_ROWS } from '../resources/js/sections/Stats';

const out = (name: string, data: unknown) => {
  const p = join('database/content', name + '.json');
  writeFileSync(p, JSON.stringify(data, null, 2) + '\n');
  console.log('wrote', p);
};

out('news', NEWS);
out('pillar-content', PILLAR_CONTENT);
out('pillar-orgs', PILLAR_ORGS);
out('company', COMPANY_ADDRESS);
out('dict', DICT);
out('projects', PROJECTS);
out('team', TEAM);
out('stats', STAT_ROWS);
out('pillars', PILLARS);
out('brand', AWJ_BRAND);
out('category-styles', CATEGORY_STYLES);
