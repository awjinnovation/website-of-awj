@extends('layouts.admin')
@section('title', $label.' partners')
@section('heading', $label.' — partners')

@section('content')
<form method="POST" action="{{ route('admin.partners.update', $pillar) }}"
      x-data="{ clients: {{ Illuminate\Support\Js::from(old('clients', $clients ?: [])) }}, partners: {{ Illuminate\Support\Js::from(old('partners', $partners ?: [])) }} }"
      class="max-w-3xl space-y-6">
    @csrf @method('PUT')

    @foreach (['clients' => 'Clients', 'partners' => 'Partners'] as $key => $title)
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="mb-3 flex items-center justify-between">
                <h2 class="font-semibold text-slate-900">{{ $title }}</h2>
                <button type="button" @click="{{ $key }}.push({ name: '', src: '' })" class="text-sm font-medium text-brand hover:underline">+ Add {{ Str::singular(Str::lower($title)) }}</button>
            </div>

            <div class="space-y-2">
                <template x-for="(row, i) in {{ $key }}" :key="i">
                    <div class="flex items-center gap-2">
                        <div class="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
                            <img :src="row.src" alt="" class="h-full w-full object-contain p-1" x-show="row.src" onerror="this.style.visibility='hidden'" @load="this.style.visibility='visible'" />
                        </div>
                        <input x-model="row.name" :name="'{{ $key }}['+i+'][name]'" placeholder="Organisation name"
                               class="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                        <input x-model="row.src" :name="'{{ $key }}['+i+'][src]'" placeholder="/assets/partners/…"
                               class="min-w-0 flex-1 rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                        <button type="button" @click="{{ $key }}.splice(i,1)" class="shrink-0 rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                    </div>
                </template>
                <p x-show="{{ $key }}.length === 0" class="py-4 text-center text-sm text-slate-400">None yet.</p>
            </div>
        </div>
    @endforeach

    <div class="flex items-center gap-2">
        <button class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save partners</button>
        <a href="{{ route('admin.partners.index') }}" class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</a>
    </div>
</form>
@endsection
