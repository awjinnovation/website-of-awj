@extends('layouts.admin')
@section('title', 'Pillar pages')

@section('content')
    <p class="mb-5 text-sm text-slate-500">The body content of each pillar page — services, value points, numbers, clients and contact details, in English and Arabic.</p>
    <div class="grid gap-4 sm:grid-cols-2">
        @foreach ($labels as $pillar => $label)
            @php $c = $pillars->get($pillar)?->content['en'] ?? []; @endphp
            <a href="{{ route('admin.pillars.edit', $pillar) }}"
               class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
                <div class="flex items-center justify-between">
                    <h2 class="font-semibold text-slate-900">{{ $label }}</h2>
                    <svg class="h-5 w-5 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </div>
                <p class="mt-1.5 line-clamp-2 text-sm text-slate-500">{{ $c['definition'] ?? '—' }}</p>
            </a>
        @endforeach
    </div>
@endsection
