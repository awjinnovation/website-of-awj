@extends('layouts.admin')
@section('title', $label)
@section('heading', $label.' — page content')

@php
    $fields = fn ($c) => [
        'websiteUrl' => $c['websiteUrl'] ?? '',
        'definition' => $c['definition'] ?? '',
        'coreServices' => array_values($c['coreServices'] ?? []),
        'valueProposition' => array_values($c['valueProposition'] ?? []),
        'referenceWorks' => array_values($c['referenceWorks'] ?? []),
        'numbers' => array_values($c['numbers'] ?? []),
        'impactNotes' => array_values($c['impactNotes'] ?? []),
        'clients' => array_values($c['clients'] ?? []),
        'contact' => [
            'email' => $c['contact']['email'] ?? '',
            'phone' => $c['contact']['phone'] ?? '',
            'location' => $c['contact']['location'] ?? '',
            'social' => array_values($c['contact']['social'] ?? []),
        ],
    ];
    $data = ['en' => $fields($content['en'] ?? []), 'ar' => $fields($content['ar'] ?? [])];
@endphp

@section('content')
<form method="POST" action="{{ route('admin.pillars.update', $pillar) }}"
      x-data="{ tab: 'en', data: {{ Illuminate\Support\Js::from($data) }} }"
      @submit="$refs.payload.value = JSON.stringify(data)"
      class="max-w-3xl space-y-5">
    @csrf @method('PUT')
    <input type="hidden" name="content" x-ref="payload" />

    <div class="flex items-center justify-between">
        <div class="inline-flex rounded-lg border border-slate-200 bg-white p-1 text-sm shadow-sm">
            <button type="button" @click="tab='en'" :class="tab==='en' ? 'bg-ink text-white' : 'text-slate-500'" class="rounded-md px-4 py-1.5 font-medium transition">English</button>
            <button type="button" @click="tab='ar'" :class="tab==='ar' ? 'bg-ink text-white' : 'text-slate-500'" class="rounded-md px-4 py-1.5 font-medium transition">العربية</button>
        </div>
    </div>

    <div :dir="tab==='ar' ? 'rtl' : 'ltr'" class="space-y-5">
        {{-- Definition + website --}}
        <section class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Definition (hero lede)</label>
                <textarea x-model="data[tab].definition" rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea>
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Website URL</label>
                <input x-model="data[tab].websiteUrl" placeholder="https://…" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
        </section>

        {{-- Core services --}}
        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="mb-3 flex items-center justify-between">
                <h2 class="font-semibold text-slate-900">Core services</h2>
                <button type="button" @click="data[tab].coreServices.push({ group:'', items:[{name:'',desc:''}] })" class="text-sm font-medium text-brand hover:underline">+ Add group</button>
            </div>
            <div class="space-y-4">
                <template x-for="(grp, gi) in data[tab].coreServices" :key="gi">
                    <div class="rounded-xl border border-slate-200 bg-slate-50/60 p-3">
                        <div class="mb-2 flex items-center gap-2">
                            <input x-model="grp.group" placeholder="Group label (optional)" class="flex-1 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                            <button type="button" @click="data[tab].coreServices.splice(gi,1)" class="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                        <div class="space-y-2">
                            <template x-for="(it, ii) in grp.items" :key="ii">
                                <div class="flex items-start gap-2">
                                    <div class="flex-1 space-y-1">
                                        <input x-model="it.name" placeholder="Service name" class="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                                        <input x-model="it.desc" placeholder="Description (optional)" class="w-full rounded-lg border border-slate-200 px-3 py-1.5 text-xs text-slate-500 outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                                    </div>
                                    <button type="button" @click="grp.items.splice(ii,1)" class="mt-1 rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 12h12" stroke-linecap="round"/></svg>
                                    </button>
                                </div>
                            </template>
                            <button type="button" @click="grp.items.push({name:'',desc:''})" class="text-xs font-medium text-brand hover:underline">+ Add service</button>
                        </div>
                    </div>
                </template>
                <p x-show="data[tab].coreServices.length === 0" class="py-2 text-center text-sm text-slate-400">No services.</p>
            </div>
        </section>

        {{-- Simple string lists --}}
        @foreach (['valueProposition' => 'Value proposition', 'referenceWorks' => 'Reference works', 'impactNotes' => 'Impact notes', 'clients' => 'Clients & partners'] as $key => $title)
            <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="mb-3 flex items-center justify-between">
                    <h2 class="font-semibold text-slate-900">{{ $title }}</h2>
                    <button type="button" @click="data[tab].{{ $key }}.push('')" class="text-sm font-medium text-brand hover:underline">+ Add</button>
                </div>
                <div class="space-y-2">
                    <template x-for="(v, i) in data[tab].{{ $key }}" :key="i">
                        <div class="flex items-start gap-2">
                            <textarea x-model="data[tab].{{ $key }}[i]" rows="1" class="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea>
                            <button type="button" @click="data[tab].{{ $key }}.splice(i,1)" class="mt-1 shrink-0 rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </template>
                    <p x-show="data[tab].{{ $key }}.length === 0" class="py-2 text-center text-sm text-slate-400">None.</p>
                </div>
            </section>
        @endforeach

        {{-- Numbers --}}
        <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="mb-3 flex items-center justify-between">
                <h2 class="font-semibold text-slate-900">Headline numbers</h2>
                <button type="button" @click="data[tab].numbers.push({value:'',label:''})" class="text-sm font-medium text-brand hover:underline">+ Add number</button>
            </div>
            <div class="space-y-2">
                <template x-for="(n, i) in data[tab].numbers" :key="i">
                    <div class="flex items-center gap-2">
                        <input x-model="n.value" placeholder="6,600+" class="w-32 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                        <input x-model="n.label" placeholder="Participants empowered" class="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                        <button type="button" @click="data[tab].numbers.splice(i,1)" class="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                            <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                    </div>
                </template>
                <p x-show="data[tab].numbers.length === 0" class="py-2 text-center text-sm text-slate-400">None.</p>
            </div>
        </section>

        {{-- Contact --}}
        <section class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 class="font-semibold text-slate-900">Contact</h2>
            <div class="grid gap-3 sm:grid-cols-3">
                <input x-model="data[tab].contact.email" placeholder="Email" class="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                <input x-model="data[tab].contact.phone" placeholder="Phone" class="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                <input x-model="data[tab].contact.location" placeholder="Location" class="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
            <div>
                <div class="mb-2 flex items-center justify-between">
                    <span class="text-sm font-medium text-slate-700">Social links</span>
                    <button type="button" @click="data[tab].contact.social.push({label:'',handle:'',url:''})" class="text-sm font-medium text-brand hover:underline">+ Add link</button>
                </div>
                <div class="space-y-2">
                    <template x-for="(s, i) in data[tab].contact.social" :key="i">
                        <div class="flex items-center gap-2">
                            <input x-model="s.label" placeholder="LinkedIn" class="w-32 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                            <input x-model="s.handle" placeholder="@handle" class="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                            <input x-model="s.url" placeholder="https://…" class="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                            <button type="button" @click="data[tab].contact.social.splice(i,1)" class="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </template>
                </div>
            </div>
        </section>
    </div>

    <div class="flex items-center gap-2">
        <button class="rounded-lg bg-gradient-to-br from-brand to-brand-2 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">Save page</button>
        <a href="{{ route('admin.pillars.index') }}" class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</a>
    </div>
</form>
@endsection
