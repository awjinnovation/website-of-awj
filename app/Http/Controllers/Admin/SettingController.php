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
    public function __construct(private ContentService $content) {}

    public function edit(): View
    {
        return view('admin.settings.edit', [
            'address' => Setting::get('company_address', ['en' => '', 'ar' => '']),
        ]);
    }

    public function update(Request $request): RedirectResponse
    {
        $data = $request->validate([
            'address_en' => ['required', 'string', 'max:255'],
            'address_ar' => ['required', 'string', 'max:255'],
        ]);

        Setting::put('company_address', [
            'en' => $data['address_en'],
            'ar' => $data['address_ar'],
        ]);
        $this->content->forget();

        return back()->with('status', 'Settings saved.');
    }
}
