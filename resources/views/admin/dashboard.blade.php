@extends('layouts.admin')
@section('title', 'Dashboard')

@section('content')
    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
        @php
            $cards = [
                ['News articles', $newsCount, 'admin.news.index', 'from-violet-500 to-indigo-500'],
                ['Featured', $featuredCount, 'admin.news.index', 'from-amber-500 to-orange-500'],
                ['Pillar pages', $pillarCount, 'admin.pillars.index', 'from-emerald-500 to-teal-500'],
                ['Site-text entries', $translationCount, 'admin.translations.index', 'from-sky-500 to-blue-500'],
            ];
        @endphp
        @foreach ($cards as [$label, $value, $route, $grad])
            <a href="{{ route($route) }}" class="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div class="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br {{ $grad }} text-white">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M12 5v14" stroke-linecap="round"/></svg>
                </div>
                <div class="text-3xl font-bold tracking-tight text-slate-900">{{ $value }}</div>
                <div class="mt-0.5 text-sm text-slate-500">{{ $label }}</div>
            </a>
        @endforeach
    </div>

    <div class="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div class="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <h2 class="font-semibold text-slate-900">Latest news</h2>
            <a href="{{ route('admin.news.create') }}" class="rounded-lg bg-ink px-3 py-1.5 text-sm font-medium text-white hover:opacity-90">Add article</a>
        </div>
        <ul class="divide-y divide-slate-100">
            @forelse ($recentNews as $item)
                <li>
                    <a href="{{ route('admin.news.edit', $item) }}" class="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50">
                        <span class="text-xs font-medium text-slate-400 tabular-nums">{{ $item->date->format('M j, Y') }}</span>
                        <span class="min-w-0 flex-1 truncate font-medium text-slate-800">{{ $item->title }}</span>
                        @if ($item->featured)
                            <span class="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">Featured</span>
                        @endif
                        <span class="rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-500">{{ $item->pillar }}</span>
                    </a>
                </li>
            @empty
                <li class="px-5 py-8 text-center text-sm text-slate-400">No news yet.</li>
            @endforelse
        </ul>
    </div>
@endsection
