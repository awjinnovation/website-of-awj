@extends('layouts.admin')
@section('title', 'Stats')

@section('content')
@php
    $rows = old('rows', $stats->map(fn ($s) => ['end' => $s->end, 'suffix' => $s->suffix, 'label_key' => $s->label_key])->values()->all());
@endphp
<form method="POST" action="{{ route('admin.stats.update') }}"
      x-data="{ rows: {{ Illuminate\Support\Js::from($rows) }}, keys: {{ Illuminate\Support\Js::from($labelKeys) }} }"
      class="max-w-3xl space-y-5">
    @csrf @method('PUT')

    <div class="flex items-center justify-between">
        <p class="text-sm text-slate-500">The animated counters on the homepage. The label comes from a Site-text key so it stays translated.</p>
        <button type="button" @click="rows.push({ end: 0, suffix: '+', label_key: keys[0] ?? '' })" class="shrink-0 text-sm font-medium text-brand hover:underline">+ Add stat</button>
    </div>

    <div class="space-y-3">
        <template x-for="(row, i) in rows" :key="i">
            <div class="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div class="w-28 shrink-0">
                    <label class="mb-1 block text-xs font-medium text-slate-500">Number</label>
                    <input type="number" min="0" x-model.number="row.end" :name="'rows['+i+'][end]'" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </div>
                <div class="w-20 shrink-0">
                    <label class="mb-1 block text-xs font-medium text-slate-500">Suffix</label>
                    <input x-model="row.suffix" :name="'rows['+i+'][suffix]'" placeholder="+" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </div>
                <div class="flex-1">
                    <label class="mb-1 block text-xs font-medium text-slate-500">Label (Site-text key)</label>
                    <input x-model="row.label_key" :name="'rows['+i+'][label_key]'" list="stat-keys" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                </div>
                <button type="button" @click="rows.splice(i,1)" class="mt-5 rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>
        </template>
    </div>
    <datalist id="stat-keys">@foreach ($labelKeys as $k)<option value="{{ $k }}">@endforeach</datalist>

    <button class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save stats</button>
</form>
@endsection
