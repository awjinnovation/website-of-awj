<?php

namespace App\Services;

use App\Models\News;
use App\Models\PillarContent;
use App\Models\PillarOrg;
use App\Models\Setting;
use App\Models\Translation;
use Illuminate\Support\Facades\Cache;

/**
 * Assembles all editable content into the single payload the React app reads
 * from `window.__AWJ__`. The shape here must match the fallback literals in the
 * frontend data modules (resources/js/data/*, resources/js/i18n/dict.ts).
 *
 * The payload is cached and rebuilt only when the admin panel saves a change
 * (see forget()), so normal page loads never touch the database for content.
 */
class ContentService
{
    private const CACHE_KEY = 'awj.content.payload';

    public function payload(): array
    {
        return Cache::rememberForever(self::CACHE_KEY, fn () => $this->build());
    }

    /** Drop the cached payload so the next page load rebuilds it. */
    public function forget(): void
    {
        Cache::forget(self::CACHE_KEY);
    }

    private function build(): array
    {
        return [
            'news' => $this->news(),
            'dict' => $this->dict(),
            'pillarContent' => $this->pillarContent(),
            'pillarOrgs' => $this->pillarOrgs(),
            'companyAddress' => Setting::get('company_address'),
        ];
    }

    private function news(): array
    {
        // Ordered by id to preserve the original authored order; the client
        // re-sorts by date where it needs to (NEWS_BY_DATE).
        return News::orderBy('id')->get()->map(fn (News $n) => [
            'id' => $n->slug,
            'image' => $n->image,
            'category' => $n->category,
            'title' => $n->title,
            'titleAr' => $n->title_ar,
            'date' => $n->date->format('Y-m-d'),
            'dateLabel' => $n->date->format('M j, Y'),
            'pillar' => $n->pillar,
            'dek' => $n->dek,
            'dekAr' => $n->dek_ar,
            'featured' => $n->featured,
            'body' => $n->body ?? [],
            'bodyAr' => $n->body_ar,
        ])->all();
    }

    private function dict(): array
    {
        $rows = Translation::all();

        return [
            'en' => $rows->pluck('en', 'key')->filter(fn ($v) => $v !== null)->all(),
            'ar' => $rows->pluck('ar', 'key')->filter(fn ($v) => $v !== null)->all(),
        ];
    }

    private function pillarContent(): array
    {
        return PillarContent::all()->mapWithKeys(
            fn (PillarContent $p) => [$p->pillar => $p->content],
        )->all();
    }

    private function pillarOrgs(): array
    {
        return PillarOrg::all()->mapWithKeys(fn (PillarOrg $p) => [
            $p->pillar => array_filter([
                'clients' => $p->clients,
                'partners' => $p->partners,
            ], fn ($v) => $v !== null),
        ])->all();
    }
}
