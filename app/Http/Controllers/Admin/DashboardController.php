<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\PillarContent;
use App\Models\Translation;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        return view('admin.dashboard', [
            'newsCount' => News::count(),
            'featuredCount' => News::where('featured', true)->count(),
            'translationCount' => Translation::count(),
            'pillarCount' => PillarContent::count(),
            'recentNews' => News::orderByDesc('date')->limit(5)->get(),
        ]);
    }
}
