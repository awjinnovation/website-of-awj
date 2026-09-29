<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PillarOrg;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class PartnerController extends Controller
{
    private const LABELS = [
        'innovation' => 'AWJ Innovation',
        'sustain' => 'AWJ Sustain',
        'systems' => 'AWJ Systems',
        'academy' => 'AWJ Academy',
    ];

    public function __construct(private ContentService $content) {}

    public function index(): View
    {
        return view('admin.partners.index', [
            'orgs' => PillarOrg::all()->keyBy('pillar'),
            'labels' => self::LABELS,
        ]);
    }

    public function edit(string $pillar): View
    {
        $model = PillarOrg::firstOrNew(['pillar' => $pillar]);

        return view('admin.partners.edit', [
            'pillar' => $pillar,
            'label' => self::LABELS[$pillar] ?? $pillar,
            'clients' => $model->clients ?? [],
            'partners' => $model->partners ?? [],
        ]);
    }

    public function update(Request $request, string $pillar): RedirectResponse
    {
        $clients = $this->clean($request->input('clients', []));
        $partners = $this->clean($request->input('partners', []));

        PillarOrg::updateOrCreate(
            ['pillar' => $pillar],
            [
                'clients' => $clients === [] ? null : $clients,
                'partners' => $partners === [] ? null : $partners,
            ],
        );
        $this->content->forget();

        return redirect()->route('admin.partners.index')
            ->with('status', (self::LABELS[$pillar] ?? $pillar).' partners updated.');
    }

    /** Keep only rows that have both a name and a logo path. */
    private function clean(array $rows): array
    {
        return array_values(array_filter(array_map(fn ($r) => [
            'name' => trim((string) ($r['name'] ?? '')),
            'src' => trim((string) ($r['src'] ?? '')),
        ], $rows), fn ($r) => $r['name'] !== '' && $r['src'] !== ''));
    }
}
