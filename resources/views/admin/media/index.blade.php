@extends('layouts.admin')
@section('title', 'Media')

@section('actions')
    <button type="button" @click="openMediaPicker(() => window.location.reload())"
            class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95">
        + Upload image
    </button>
@endsection

@section('content')
    <p class="mb-4 text-sm text-slate-500">Every image uploaded through the admin. Upload here or from any form; choose one anywhere you see “Upload / choose”.</p>

    <div class="mb-5 flex flex-wrap items-center gap-2">
        <a href="{{ route('admin.media.index') }}"
           class="rounded-full px-3 py-1.5 text-sm {{ ! $filterFolder && ! $mine ? 'bg-ink text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50' }}">All</a>
        <a href="{{ route('admin.media.index', ['mine' => 1]) }}"
           class="rounded-full px-3 py-1.5 text-sm {{ $mine ? 'bg-ink text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50' }}">Mine</a>
        @foreach ($folders as $f)
            <a href="{{ route('admin.media.index', ['folder' => $f]) }}"
               class="rounded-full px-3 py-1.5 text-sm capitalize {{ $filterFolder === $f ? 'bg-ink text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50' }}">{{ $f }}</a>
        @endforeach
    </div>

    @if ($items->isEmpty())
        <div class="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p class="text-sm text-slate-400">No images uploaded yet.</p>
            <button type="button" @click="openMediaPicker(() => window.location.reload())" class="mt-3 text-sm font-medium text-brand hover:underline">Upload the first one</button>
        </div>
    @else
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            @foreach ($items as $m)
                <div x-data="{ copied: false }" class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <div class="grid aspect-square place-items-center overflow-hidden bg-slate-50">
                        <img src="{{ $m->path }}" alt="{{ $m->original_name }}" class="h-full w-full object-contain p-2" loading="lazy" onerror="this.style.opacity=0.2" />
                    </div>
                    <div class="border-t border-slate-100 p-3">
                        <p class="truncate text-xs font-medium text-slate-700" title="{{ $m->original_name }}">{{ $m->original_name ?: $m->path }}</p>
                        <p class="mt-0.5 text-[11px] text-slate-400">
                            {{ $m->human_size }}@if ($m->folder) · {{ $m->folder }} @endif
                            @if ($m->user) · {{ $m->user->name }} @endif
                        </p>
                        <div class="mt-2 flex items-center gap-1">
                            <button type="button"
                                    @click="navigator.clipboard.writeText('{{ $m->path }}'); copied = true; setTimeout(() => copied = false, 1500)"
                                    class="flex-1 rounded-lg border border-slate-200 px-2 py-1.5 text-center text-xs font-medium text-slate-600 hover:bg-slate-50">
                                <span x-show="!copied">Copy path</span>
                                <span x-show="copied" x-cloak class="text-emerald-600">Copied!</span>
                            </button>
                            <form method="POST" action="{{ route('admin.media.destroy', $m) }}" onsubmit="return confirm('Delete this image? Anything using it will fall back to a path that no longer exists.')">
                                @csrf @method('DELETE')
                                <button class="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600" title="Delete">
                                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>

        @if ($items->hasPages())
            <div class="mt-6 flex items-center justify-between text-sm">
                <span class="text-slate-500">{{ $items->firstItem() }}–{{ $items->lastItem() }} of {{ $items->total() }}</span>
                <div class="flex gap-2">
                    @if ($items->onFirstPage())
                        <span class="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-300">Previous</span>
                    @else
                        <a href="{{ $items->previousPageUrl() }}" class="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-50">Previous</a>
                    @endif
                    @if ($items->hasMorePages())
                        <a href="{{ $items->nextPageUrl() }}" class="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-50">Next</a>
                    @else
                        <span class="rounded-lg border border-slate-200 px-3 py-1.5 text-slate-300">Next</span>
                    @endif
                </div>
            </div>
        @endif
    @endif
@endsection
