<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\PillarContent;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class PillarController extends Controller
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
        return view('admin.pillars.index', [
            'pillars' => PillarContent::all()->keyBy('pillar'),
            'labels' => self::LABELS,
        ]);
    }

    public function edit(string $pillar): View
    {
        $model = PillarContent::findOrFail($pillar);

        return view('admin.pillars.edit', [
            'pillar' => $pillar,
            'label' => self::LABELS[$pillar] ?? $pillar,
            'content' => $model->content,
        ]);
    }

    public function update(Request $request, string $pillar): RedirectResponse
    {
        $model = PillarContent::findOrFail($pillar);

        $decoded = json_decode((string) $request->input('content'), true);
        if (! is_array($decoded) || ! isset($decoded['en'], $decoded['ar'])) {
            throw ValidationException::withMessages([
                'content' => 'The content could not be read. Please try again.',
            ]);
        }

        $model->update(['content' => $decoded]);
        $this->content->forget();

        return redirect()->route('admin.pillars.index')
            ->with('status', (self::LABELS[$pillar] ?? $pillar).' page updated.');
    }
}
