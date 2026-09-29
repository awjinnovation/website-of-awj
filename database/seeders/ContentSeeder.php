<?php

namespace Database\Seeders;

use App\Models\News;
use App\Models\PillarContent;
use App\Models\PillarOrg;
use App\Models\Setting;
use App\Models\Translation;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;

/**
 * Loads the website content from database/content/*.json (exported from the
 * original React modules by scripts/export-content.ts) into the database.
 *
 * Idempotent: it upserts by natural key, so re-running never duplicates rows
 * and is safe to run against an existing database.
 */
class ContentSeeder extends Seeder
{
    public function run(): void
    {
        $this->seedNews();
        $this->seedTranslations();
        $this->seedPillarContent();
        $this->seedPillarOrgs();
        $this->seedSettings();
    }

    private function read(string $name): array
    {
        $path = database_path("content/{$name}.json");

        return json_decode(file_get_contents($path), true, flags: JSON_THROW_ON_ERROR);
    }

    private function seedNews(): void
    {
        foreach ($this->read('news') as $item) {
            News::updateOrCreate(
                ['slug' => $item['id']],
                [
                    'category' => $item['category'],
                    'pillar' => $item['pillar'],
                    'date' => Carbon::parse($item['date']),
                    'featured' => $item['featured'] ?? false,
                    'image' => $item['image'] ?? null,
                    'title' => $item['title'],
                    'dek' => $item['dek'],
                    'body' => $item['body'] ?? [],
                    'title_ar' => $item['titleAr'] ?? null,
                    'dek_ar' => $item['dekAr'] ?? null,
                    'body_ar' => $item['bodyAr'] ?? null,
                ],
            );
        }
    }

    private function seedTranslations(): void
    {
        $dict = $this->read('dict');
        $keys = array_unique(array_merge(array_keys($dict['en']), array_keys($dict['ar'])));

        foreach ($keys as $key) {
            Translation::updateOrCreate(
                ['key' => $key],
                [
                    'group' => Translation::groupFor($key),
                    'en' => $dict['en'][$key] ?? null,
                    'ar' => $dict['ar'][$key] ?? null,
                ],
            );
        }
    }

    private function seedPillarContent(): void
    {
        foreach ($this->read('pillar-content') as $pillar => $content) {
            PillarContent::updateOrCreate(['pillar' => $pillar], ['content' => $content]);
        }
    }

    private function seedPillarOrgs(): void
    {
        foreach ($this->read('pillar-orgs') as $pillar => $orgs) {
            PillarOrg::updateOrCreate(
                ['pillar' => $pillar],
                [
                    'clients' => $orgs['clients'] ?? null,
                    'partners' => $orgs['partners'] ?? null,
                ],
            );
        }
    }

    private function seedSettings(): void
    {
        Setting::put('company_address', $this->read('company'));
    }
}
