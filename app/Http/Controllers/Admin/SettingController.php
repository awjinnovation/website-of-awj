<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Setting;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SettingController extends Controller
{
    /** Corporate brand asset slots (paths under public/). */
    public const BRAND_FIELDS = [
        'logo' => 'Horizontal logo',
        'logoV' => 'Vertical logo',
        'icon' => 'Icon / mark',
        'asset1' => 'Decorative asset 1',
        'asset2' => 'Decorative asset 2',
    ];

    public function __construct(private ContentService $content) {}

    public function edit(): View
    {
        return view('admin.settings.edit', [
            'address' => Setting::get('company_address', ['en' => '', 'ar' => '']),
            'brand' => Setting::get('brand', []),
            'brandFields' => self::BRAND_FIELDS,
            'categoryStyles' => Setting::get('category_styles', []),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'address_en' => ['required', 'string', 'max:255'],
            'address_ar' => ['required', 'string', 'max:255'],
            'brand' => ['array'],
            'brand.*' => ['nullable', 'string', 'max:255'],
            'category_styles' => ['array'],
            'category_styles.*.ink' => ['nullable', 'string', 'max:32'],
            'category_styles.*.a' => ['nullable', 'string', 'max:32'],
            'category_styles.*.b' => ['nullable', 'string', 'max:32'],
            'category_styles.*.accent' => ['nullable', 'string', 'max:32'],
        ]);

        Setting::put('company_address', [
            'en' => $data['address_en'],
            'ar' => $data['address_ar'],
        ]);

        Setting::put('brand', array_filter(
            $data['brand'] ?? [],
            fn ($v) => $v !== null && $v !== '',
        ));

        Setting::put('category_styles', $data['category_styles'] ?? []);

        $this->content->forget();

        return back()->with('status', 'Settings saved.');
    }
}
