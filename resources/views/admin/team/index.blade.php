@extends('layouts.admin')
@section('title', 'Team')

@section('content')
    <p class="mb-5 text-sm text-slate-500">The people shown on the About page, in three groups.</p>

    <div class="space-y-6">
        @foreach ($groups as $key => $label)
            <section class="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <div class="flex items-center justify-between border-b border-slate-100 px-5 py-3.5">
                    <h2 class="font-semibold text-slate-900">{{ $label }}
                        <span class="ml-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">{{ optional($grouped->get($key))->count() ?? 0 }}</span>
                    </h2>
                    <a href="{{ route('admin.team.create', ['group' => $key]) }}" class="rounded-lg bg-ink px-3 py-1.5 text-sm font-medium text-white hover:opacity-90">+ Add</a>
                </div>
                <div class="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
                    @forelse ($grouped->get($key, collect()) as $member)
                        <div class="flex items-center gap-3 rounded-xl border border-slate-200 p-3">
                            <div class="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                                <img src="{{ $member->image }}" alt="" class="h-full w-full object-cover" onerror="this.style.visibility='hidden'" />
                            </div>
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium text-slate-800">{{ $member->name }}</div>
                                <div class="truncate text-xs text-slate-500">{{ $member->title }}</div>
                            </div>
                            <div class="flex items-center gap-0.5">
                                <a href="{{ route('admin.team.edit', $member) }}" class="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4v16h16v-7M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4z" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </a>
                                <form method="POST" action="{{ route('admin.team.destroy', $member) }}" onsubmit="return confirm('Remove {{ addslashes($member->name) }}?')">
                                    @csrf @method('DELETE')
                                    <button class="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    @empty
                        <p class="col-span-full py-4 text-center text-sm text-slate-400">No one in this group yet.</p>
                    @endforelse
                </div>
            </section>
        @endforeach
    </div>
@endsection
