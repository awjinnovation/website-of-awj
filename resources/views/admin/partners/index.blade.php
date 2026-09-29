@extends('layouts.admin')
@section('title', 'Partners')

@section('content')
    <p class="mb-5 text-sm text-slate-500">Client and partner logo walls shown on each pillar page.</p>
    <div class="grid gap-4 sm:grid-cols-2">
        @foreach ($labels as $pillar => $label)
            @php $org = $orgs->get($pillar); @endphp
            <a href="{{ route('admin.partners.edit', $pillar) }}"
               class="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div>
                    <h2 class="font-semibold text-slate-900">{{ $label }}</h2>
                    <p class="mt-1 text-sm text-slate-500">
                        {{ $org?->clients ? count($org->clients) : 0 }} clients ·
                        {{ $org?->partners ? count($org->partners) : 0 }} partners
                    </p>
                </div>
                <svg class="h-5 w-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
        @endforeach
    </div>
@endsection
