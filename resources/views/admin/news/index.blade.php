@extends('layouts.admin')
@section('title', 'News')

@section('actions')
    <a href="{{ route('admin.news.create') }}" class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95">
        + Add article
    </a>
@endsection

@section('content')
    <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
         x-data="{ q: '' }">
        <div class="border-b border-slate-100 p-3">
            <input x-model="q" type="search" placeholder="Search articles…"
                   class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 sm:max-w-xs" />
        </div>
        <table class="w-full text-sm">
            <thead class="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">
                <tr>
                    <th class="px-5 py-3 font-medium">Article</th>
                    <th class="hidden px-3 py-3 font-medium sm:table-cell">Pillar</th>
                    <th class="hidden px-3 py-3 font-medium md:table-cell">Date</th>
                    <th class="px-3 py-3 font-medium"></th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
                @foreach ($items as $item)
                    <tr x-show="q === '' || $el.dataset.s.includes(q.toLowerCase())"
                        data-s="{{ Str::lower($item->title.' '.$item->category.' '.$item->pillar) }}"
                        class="group hover:bg-slate-50">
                        <td class="px-5 py-3">
                            <div class="flex items-center gap-3">
                                @if ($item->image)
                                    <img src="{{ $item->image }}" alt="" class="h-10 w-14 shrink-0 rounded-md object-cover ring-1 ring-slate-200" onerror="this.style.visibility='hidden'" />
                                @else
                                    <span class="grid h-10 w-14 shrink-0 place-items-center rounded-md bg-slate-100 text-slate-300">—</span>
                                @endif
                                <div class="min-w-0">
                                    <a href="{{ route('admin.news.edit', $item) }}" class="block truncate font-medium text-slate-800 hover:text-brand">{{ $item->title }}</a>
                                    <div class="flex items-center gap-1.5 text-xs text-slate-400">
                                        <span class="rounded bg-slate-100 px-1.5 py-0.5">{{ $item->category }}</span>
                                        @if ($item->featured)<span class="rounded bg-amber-100 px-1.5 py-0.5 text-amber-700">Featured</span>@endif
                                        @if ($item->title_ar)<span class="rounded bg-emerald-50 px-1.5 py-0.5 text-emerald-600">AR</span>@endif
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td class="hidden px-3 py-3 text-slate-500 sm:table-cell">{{ $item->pillar }}</td>
                        <td class="hidden px-3 py-3 text-slate-500 tabular-nums md:table-cell">{{ $item->date->format('M j, Y') }}</td>
                        <td class="px-3 py-3 text-right">
                            <div class="flex items-center justify-end gap-1">
                                <a href="{{ route('admin.news.edit', $item) }}" class="rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700" title="Edit">
                                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M11 4H4v16h16v-7M18.5 2.5a2.1 2.1 0 013 3L12 15l-4 1 1-4z" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </a>
                                <form method="POST" action="{{ route('admin.news.destroy', $item) }}"
                                      onsubmit="return confirm('Delete “{{ addslashes($item->title) }}”? This cannot be undone.')">
                                    @csrf @method('DELETE')
                                    <button class="rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600" title="Delete">
                                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    </button>
                                </form>
                            </div>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        @if ($items->isEmpty())
            <p class="px-5 py-12 text-center text-sm text-slate-400">No articles yet. <a href="{{ route('admin.news.create') }}" class="text-brand">Add the first one.</a></p>
        @endif
    </div>
@endsection
