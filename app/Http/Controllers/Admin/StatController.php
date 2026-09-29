<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Stat;
use App\Models\Translation;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class StatController extends Controller
{
    public function __construct(private ContentService $content) {}

    public function edit(): View
    {
        return view('admin.stats.edit', [
            'stats' => Stat::orderBy('sort')->orderBy('id')->get(),
            // Offer the stats.* label keys so the number ties to real site text.
            'labelKeys' => Translation::where('key', 'like', 'stats.%')->orderBy('key')->pluck('key'),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $rows = $request->validate([
            'rows' => ['array'],
            'rows.*.end' => ['required', 'integer', 'min:0'],
            'rows.*.suffix' => ['nullable', 'string', 'max:8'],
            'rows.*.label_key' => ['required', 'string', 'max:120'],
        ])['rows'] ?? [];

        Stat::query()->delete();
        foreach (array_values($rows) as $i => $row) {
            Stat::create([
                'sort' => $i,
                'end' => $row['end'],
                'suffix' => $row['suffix'] ?? '',
                'label_key' => $row['label_key'],
            ]);
        }
        $this->content->forget();

        return redirect()->route('admin.stats.edit')->with('status', 'Stats saved.');
    }
}
