@extends('layouts.admin')
@section('title', 'Settings')

@section('content')
    <form method="POST" action="{{ route('admin.settings.update') }}" x-data="{}" class="max-w-2xl space-y-5">
        @csrf @method('PUT')

        <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
                <h2 class="font-semibold text-slate-900">Company address</h2>
                <p class="text-sm text-slate-500">Shown in the footer, the contact section and every pillar page.</p>
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">English</label>
                <input name="address_en" value="{{ old('address_en', $address['en'] ?? '') }}" required
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">العربية</label>
                <input name="address_ar" lang="ar" dir="rtl" value="{{ old('address_ar', $address['ar'] ?? '') }}" required
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
        </div>

        <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
                <h2 class="font-semibold text-slate-900">Brand assets</h2>
                <p class="text-sm text-slate-500">Paths (under <code>public/</code>) to the corporate logo and marks.</p>
            </div>
            <div class="grid gap-3 sm:grid-cols-2">
                @foreach ($brandFields as $key => $label)
                    <div class="flex items-center gap-3">
                        <div class="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
                            <img x-ref="prev_{{ $key }}" src="{{ $brand[$key] ?? '' }}" alt="" class="h-full w-full object-contain p-1.5" onerror="this.style.visibility='hidden'" />
                        </div>
                        <div class="min-w-0 flex-1">
                            <label class="mb-1 block text-xs font-medium text-slate-500">{{ $label }}</label>
                            <div class="flex items-center gap-2">
                                <input x-ref="brand_{{ $key }}" name="brand[{{ $key }}]" value="{{ old('brand.'.$key, $brand[$key] ?? '') }}" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                                <button type="button" title="Upload / choose" @click="openMediaPicker(u => { $refs.brand_{{ $key }}.value = u; $refs.prev_{{ $key }}.src = u; $refs.prev_{{ $key }}.style.visibility='visible' }, 'brand')" class="shrink-0 rounded-lg border border-slate-300 p-2 text-slate-500 hover:border-brand hover:text-brand">
                                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 16V5m0 0L8 9m4-4l4 4M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div>
                <h2 class="font-semibold text-slate-900">News cover styles</h2>
                <p class="text-sm text-slate-500">Colours for the generated cover art of each news category.</p>
            </div>
            <div class="space-y-2">
                @foreach ($categoryStyles as $category => $style)
                    <div class="grid grid-cols-[10rem_1fr] items-center gap-3 border-t border-slate-100 pt-2 first:border-0 first:pt-0">
                        <span class="text-sm font-medium text-slate-700">{{ $category }}</span>
                        <div class="grid grid-cols-4 gap-2">
                            @foreach (['ink' => 'Ink', 'a' => 'A', 'b' => 'B', 'accent' => 'Accent'] as $k => $lbl)
                                <div class="flex items-center gap-1.5">
                                    <span class="h-6 w-6 shrink-0 rounded border border-slate-200" style="background: {{ $style[$k] ?? '#fff' }}"></span>
                                    <input name="category_styles[{{ $category }}][{{ $k }}]" value="{{ $style[$k] ?? '' }}" title="{{ $lbl }}" class="w-full rounded-lg border border-slate-300 px-2 py-1.5 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                                </div>
                            @endforeach
                        </div>
                    </div>
                @endforeach
            </div>
        </div>

        <button class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save settings</button>
    </form>
@endsection
