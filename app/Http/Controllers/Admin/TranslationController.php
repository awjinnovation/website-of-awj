<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Translation;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class TranslationController extends Controller
{
    public function __construct(private ContentService $content) {}

    public function index(): View
    {
        return view('admin.translations.index', [
            'groups' => Translation::orderBy('key')->get()->groupBy('group'),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $rows = $request->input('t', []); // t[id][en], t[id][ar]

        $changed = 0;
        foreach (Translation::whereIn('id', array_keys($rows))->get() as $translation) {
            $new = $rows[$translation->id];
            $en = $new['en'] ?? null;
            $ar = $new['ar'] ?? null;

            if ($en !== $translation->en || $ar !== $translation->ar) {
                $translation->update([
                    'en' => $en === '' ? null : $en,
                    'ar' => $ar === '' ? null : $ar,
                ]);
                $changed++;
            }
        }

        if ($changed > 0) {
            $this->content->forget();
        }

        return back()->with('status', $changed === 0
            ? 'No changes to save.'
            : 'Saved '.$changed.' '.str('entry')->plural($changed).' of site text.');
    }
}
