<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Project;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Illuminate\View\View;

class ProjectController extends Controller
{
    /** Sensible defaults for a new card, matching the frontend Project shape. */
    private const BLANK = [
        'name' => '', 'stat' => '', 'statLabel' => '', 'partner' => '',
        'pillar' => 'Innovation', 'color' => 'var(--innovation)',
        'bgGrad' => 'linear-gradient(135deg, #a13418, #ee6c11)',
        'icon' => '/assets/brand/awj-innovation-icon.svg', 'size' => 'p-med',
        'image' => '', 'summary' => '', 'impact' => '',
        'achievements' => [['value' => '', 'label' => '']],
        'ar' => ['name' => '', 'statLabel' => '', 'partner' => '', 'summary' => '', 'impact' => '', 'achievements' => []],
    ];

    public function __construct(private ContentService $content) {}

    public function index(): View
    {
        return view('admin.projects.index', [
            'projects' => Project::orderBy('sort')->orderBy('id')->get(),
        ]);
    }

    public function create(): View
    {
        return view('admin.projects.create', ['project' => new Project(['data' => self::BLANK])]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->payload($request);
        Project::create(['data' => $data, 'sort' => (Project::max('sort') ?? -1) + 1]);
        $this->content->forget();

        return redirect()->route('admin.projects.index')->with('status', "“{$data['name']}” created.");
    }

    public function edit(Project $project): View
    {
        return view('admin.projects.edit', ['project' => $project]);
    }

    public function update(Request $request, Project $project): RedirectResponse
    {
        $data = $this->payload($request);
        $project->update(['data' => $data]);
        $this->content->forget();

        return redirect()->route('admin.projects.index')->with('status', "“{$data['name']}” updated.");
    }

    public function destroy(Project $project): RedirectResponse
    {
        $name = $project->data['name'] ?? 'Project';
        $project->delete();
        $this->content->forget();

        return redirect()->route('admin.projects.index')->with('status', "“{$name}” deleted.");
    }

    private function payload(Request $request): array
    {
        $decoded = json_decode((string) $request->input('data'), true);

        if (! is_array($decoded) || trim((string) ($decoded['name'] ?? '')) === '') {
            throw ValidationException::withMessages(['data' => 'The project needs at least a name.']);
        }

        return $decoded;
    }
}
