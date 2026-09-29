@extends('layouts.admin')
@section('title', 'Projects')

@section('actions')
    <a href="{{ route('admin.projects.create') }}" class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95">+ Add project</a>
@endsection

@section('content')
    <p class="mb-5 text-sm text-slate-500">The project showcase on the homepage. Drag order follows the sort you set; newest additions go last.</p>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        @foreach ($projects as $project)
            @php $d = $project->data; @endphp
            <div class="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div class="relative grid h-32 place-items-center" style="background: {{ $d['bgGrad'] ?? '#1a1f3a' }}">
                    @if (!empty($d['image']))
                        <img src="{{ $d['image'] }}" alt="" class="absolute inset-0 h-full w-full object-cover opacity-60" onerror="this.remove()" />
                    @endif
                    <img src="{{ $d['icon'] ?? '' }}" alt="" class="relative h-10 w-10" onerror="this.style.visibility='hidden'" />
                </div>
                <div class="flex flex-1 flex-col p-4">
                    <div class="mb-1 flex items-center gap-1.5">
                        <span class="rounded bg-slate-100 px-1.5 py-0.5 text-xs text-slate-500">{{ $d['pillar'] ?? '—' }}</span>
                        @if (!empty($d['ar']['name']))<span class="rounded bg-emerald-50 px-1.5 py-0.5 text-xs text-emerald-600">AR</span>@endif
                    </div>
                    <h3 class="line-clamp-2 flex-1 font-semibold text-slate-800">{{ str_replace("\n", ' ', $d['name'] ?? 'Untitled') }}</h3>
                    <div class="mt-3 flex items-center gap-1">
                        <a href="{{ route('admin.projects.edit', $project) }}" class="flex-1 rounded-lg border border-slate-200 px-3 py-1.5 text-center text-sm font-medium text-slate-600 hover:bg-slate-50">Edit</a>
                        <form method="POST" action="{{ route('admin.projects.destroy', $project) }}" onsubmit="return confirm('Delete this project?')">
                            @csrf @method('DELETE')
                            <button class="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
    @if ($projects->isEmpty())
        <p class="rounded-2xl border border-dashed border-slate-300 bg-white py-12 text-center text-sm text-slate-400">No projects yet. <a href="{{ route('admin.projects.create') }}" class="text-brand">Add the first one.</a></p>
    @endif
@endsection
