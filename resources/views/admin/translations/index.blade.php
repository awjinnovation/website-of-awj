@extends('layouts.admin')
@section('title', 'Site text')

@section('content')
<form method="POST" action="{{ route('admin.translations.update') }}" x-data="{ q: '' }">
    @csrf @method('PUT')

    <div class="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
            <p class="text-sm text-slate-500">Every word on the public site, in English and Arabic. Editing a key changes it everywhere it appears.</p>
        </div>
        <div class="flex items-center gap-3">
            <input x-model="q" type="search" placeholder="Filter by key or text…"
                   class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 sm:w-64" />
            <button class="shrink-0 rounded-lg bg-gradient-to-br from-brand to-brand-2 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save changes</button>
        </div>
    </div>

    <div class="space-y-4">
        @foreach ($groups as $group => $rows)
            <section x-data="{ open: true }" class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                     x-show="$el.querySelectorAll('[data-row]:not([style*=none])').length > 0 || q === ''">
                <button type="button" @click="open = !open" class="flex w-full items-center justify-between px-5 py-3.5 text-left">
                    <span class="flex items-center gap-2 font-semibold text-slate-800">
                        <span class="capitalize">{{ $group }}</span>
                        <span class="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">{{ $rows->count() }}</span>
                    </span>
                    <svg class="h-4 w-4 text-slate-400 transition" :class="open && 'rotate-180'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <div x-show="open" class="divide-y divide-slate-100 border-t border-slate-100">
                    @foreach ($rows as $t)
                        <div data-row data-s="{{ Str::lower($t->key.' '.$t->en.' '.$t->ar) }}"
                             x-show="q === '' || $el.dataset.s.includes(q.toLowerCase())"
                             class="grid gap-3 px-5 py-3.5 md:grid-cols-[16rem_1fr_1fr]">
                            <code class="self-center text-xs break-all text-slate-500">{{ $t->key }}</code>
                            <div>
                                <span class="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">English</span>
                                <textarea name="t[{{ $t->id }}][en]" rows="1"
                                          class="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20">{{ $t->en }}</textarea>
                            </div>
                            <div>
                                <span class="mb-1 block text-[10px] font-semibold uppercase tracking-wide text-slate-400 md:hidden">العربية</span>
                                <textarea name="t[{{ $t->id }}][ar]" lang="ar" dir="rtl" rows="1"
                                          class="w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-sm outline-none focus:border-brand focus:bg-white focus:ring-2 focus:ring-brand/20">{{ $t->ar }}</textarea>
                            </div>
                        </div>
                    @endforeach
                </div>
            </section>
        @endforeach
    </div>

    <div class="mt-6 flex justify-end">
        <button class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save changes</button>
    </div>
</form>
@endsection
