<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Models\Project;
use App\Models\TeamMember;
use App\Models\Translation;
use Illuminate\View\View;

class DashboardController extends Controller
{
    public function index(): View
    {
        return view('admin.dashboard', [
            'newsCount' => News::count(),
            'projectCount' => Project::count(),
            'teamCount' => TeamMember::count(),
            'translationCount' => Translation::count(),
            'recentNews' => News::orderByDesc('date')->limit(5)->get(),
        ]);
    }
}
