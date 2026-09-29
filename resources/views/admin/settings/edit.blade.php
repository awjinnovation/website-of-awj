@extends('layouts.admin')
@section('title', 'Settings')

@section('content')
    <form method="POST" action="{{ route('admin.settings.update') }}" class="max-w-2xl space-y-5">
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

        <button class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save settings</button>
    </form>
@endsection
