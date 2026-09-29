<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\TeamMember;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\View\View;

class TeamController extends Controller
{
    public function __construct(private ContentService $content) {}

    public function index(): View
    {
        return view('admin.team.index', [
            'grouped' => TeamMember::orderBy('sort')->orderBy('id')->get()->groupBy('group'),
            'groups' => TeamMember::GROUPS,
        ]);
    }

    public function create(): View
    {
        return view('admin.team.create', [
            'member' => new TeamMember(['group' => request('group', 'members')]),
            'groups' => TeamMember::GROUPS,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $member = TeamMember::create($this->validated($request));
        $this->content->forget();

        return redirect()->route('admin.team.index')->with('status', "{$member->name} added.");
    }

    public function edit(TeamMember $team): View
    {
        return view('admin.team.edit', ['member' => $team, 'groups' => TeamMember::GROUPS]);
    }

    public function update(Request $request, TeamMember $team): RedirectResponse
    {
        $team->update($this->validated($request));
        $this->content->forget();

        return redirect()->route('admin.team.index')->with('status', "{$team->name} updated.");
    }

    public function destroy(TeamMember $team): RedirectResponse
    {
        $name = $team->name;
        $team->delete();
        $this->content->forget();

        return redirect()->route('admin.team.index')->with('status', "{$name} removed.");
    }

    private function validated(Request $request): array
    {
        return $request->validate([
            'group' => ['required', 'in:'.implode(',', array_keys(TeamMember::GROUPS))],
            'name' => ['required', 'string', 'max:120'],
            'title' => ['required', 'string', 'max:160'],
            'department' => ['nullable', 'string', 'max:120'],
            'description' => ['nullable', 'string', 'max:500'],
            'image' => ['nullable', 'string', 'max:255'],
            'accent_color' => ['nullable', 'string', 'max:32'],
            'pillar_id' => ['nullable', 'in:academy,sustain,innovation,systems'],
            'sort' => ['nullable', 'integer', 'min:0'],
        ]);
    }
}
