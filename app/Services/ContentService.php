<?php

namespace App\Services;

use App\Models\News;
use App\Models\Pillar;
use App\Models\PillarContent;
use App\Models\PillarOrg;
use App\Models\Project;
use App\Models\Setting;
use App\Models\Stat;
use App\Models\TeamMember;
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
            'projects' => Project::orderBy('sort')->orderBy('id')->pluck('data')->all(),
            'team' => $this->team(),
            'stats' => $this->stats(),
            'pillars' => Pillar::orderBy('sort')->pluck('data')->all(),
            'brand' => Setting::get('brand'),
            'categoryStyles' => Setting::get('category_styles'),
        ];
    }

    private function team(): array
    {
        $grouped = TeamMember::orderBy('sort')->orderBy('id')->get()
            ->groupBy('group')
            ->map(fn ($members) => $members->map(fn (TeamMember $m) => array_filter([
                'name' => $m->name,
                'title' => $m->title,
                'department' => $m->department,
                'description' => $m->description,
                'image' => $m->image,
                'accentColor' => $m->accent_color,
                'pillarId' => $m->pillar_id,
            ], fn ($v) => $v !== null && $v !== ''))->values());

        // Always return every group so the frontend shape is stable.
        return [
            'management' => $grouped->get('management', collect())->all(),
            'leaders' => $grouped->get('leaders', collect())->all(),
            'members' => $grouped->get('members', collect())->all(),
        ];
    }

    private function stats(): array
    {
        return Stat::orderBy('sort')->orderBy('id')->get()->map(fn (Stat $s) => [
            'end' => $s->end,
            'suffix' => $s->suffix,
            'labelKey' => $s->label_key,
        ])->all();
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
            'dateLabel' => $n->date->format('M d, Y'),
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
