@php
    $d = $project->data ?? [];
    $data = [
        'name' => $d['name'] ?? '',
        'stat' => $d['stat'] ?? '',
        'statLabel' => $d['statLabel'] ?? '',
        'partner' => $d['partner'] ?? '',
        'summary' => $d['summary'] ?? '',
        'impact' => $d['impact'] ?? '',
        'achievements' => array_values($d['achievements'] ?? [['value' => '', 'label' => '']]),
        'pillar' => $d['pillar'] ?? 'Innovation',
        'color' => $d['color'] ?? 'var(--innovation)',
        'bgGrad' => $d['bgGrad'] ?? 'linear-gradient(135deg, #a13418, #ee6c11)',
        'icon' => $d['icon'] ?? '/assets/brand/awj-innovation-icon.svg',
        'image' => $d['image'] ?? '',
        'size' => $d['size'] ?? 'p-med',
        'statCompact' => (bool) ($d['statCompact'] ?? false),
        'light' => (bool) ($d['light'] ?? false),
        'imageZoom' => $d['imageZoom'] ?? '',
        'ar' => [
            'name' => $d['ar']['name'] ?? '',
            'stat' => $d['ar']['stat'] ?? '',
            'statLabel' => $d['ar']['statLabel'] ?? '',
            'partner' => $d['ar']['partner'] ?? '',
            'summary' => $d['ar']['summary'] ?? '',
            'impact' => $d['ar']['impact'] ?? '',
            'partnerCompact' => (bool) ($d['ar']['partnerCompact'] ?? false),
            'achievements' => array_values($d['ar']['achievements'] ?? []),
        ],
    ];
@endphp

<form method="POST" action="{{ $action }}"
      x-data="{ tab: 'en', data: {{ Illuminate\Support\Js::from($data) }} }"
      @submit="$refs.payload.value = JSON.stringify(data)"
      class="grid gap-6 lg:grid-cols-[1fr_20rem]">
    @csrf
    @if (($method ?? 'POST') === 'PUT') @method('PUT') @endif
    <input type="hidden" name="data" x-ref="payload" />

    <div class="space-y-5">
        <div class="inline-flex rounded-lg border border-slate-200 bg-white p-1 text-sm shadow-sm">
            <button type="button" @click="tab='en'" :class="tab==='en' ? 'bg-ink text-white' : 'text-slate-500'" class="rounded-md px-4 py-1.5 font-medium transition">English</button>
            <button type="button" @click="tab='ar'" :class="tab==='ar' ? 'bg-ink text-white' : 'text-slate-500'" class="rounded-md px-4 py-1.5 font-medium transition">العربية</button>
        </div>

        {{-- English --}}
        <div x-show="tab==='en'" class="space-y-5">
            <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div>
                    <label class="mb-1.5 block text-sm font-medium text-slate-700">Name <span class="text-slate-400">(use a line break for two lines)</span></label>
                    <textarea x-model="data.name" rows="2" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea>
                </div>
                <div class="grid grid-cols-2 gap-3">
                    <div><label class="mb-1.5 block text-sm font-medium text-slate-700">Stat</label><input x-model="data.stat" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" placeholder="6,600+" /></div>
                    <div><label class="mb-1.5 block text-sm font-medium text-slate-700">Stat label</label><input x-model="data.statLabel" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" placeholder="Participants empowered" /></div>
                </div>
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">Partner / secondary line</label><input x-model="data.partner" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
                <label class="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" x-model="data.statCompact" class="rounded border-slate-300 text-brand focus:ring-brand/30" /> Stat is a phrase, not a figure (smaller display)</label>
            </div>
            <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">Summary</label><textarea x-model="data.summary" rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea></div>
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">Impact</label><textarea x-model="data.impact" rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea></div>
            </div>
            @include('admin.projects._achievements', ['bind' => 'data.achievements'])
        </div>

        {{-- Arabic --}}
        <div x-show="tab==='ar'" x-cloak dir="rtl" class="space-y-5">
            <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">الاسم</label><textarea x-model="data.ar.name" lang="ar" rows="2" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea></div>
                <div class="grid grid-cols-2 gap-3">
                    <div><label class="mb-1.5 block text-sm font-medium text-slate-700">الإحصائية</label><input x-model="data.ar.stat" lang="ar" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
                    <div><label class="mb-1.5 block text-sm font-medium text-slate-700">وصف الإحصائية</label><input x-model="data.ar.statLabel" lang="ar" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
                </div>
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">الشريك / السطر الثانوي</label><input x-model="data.ar.partner" lang="ar" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
                <p class="text-xs text-slate-400">Leave Arabic blank to fall back to the English text.</p>
            </div>
            <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">الملخص</label><textarea x-model="data.ar.summary" lang="ar" rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea></div>
                <div><label class="mb-1.5 block text-sm font-medium text-slate-700">الأثر</label><textarea x-model="data.ar.impact" lang="ar" rows="3" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea></div>
            </div>
            @include('admin.projects._achievements', ['bind' => 'data.ar.achievements'])
        </div>
    </div>

    {{-- Sidebar: meta --}}
    <div class="space-y-5">
        <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Pillar</label>
                <select x-model="data.pillar" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                    @foreach (['Innovation', 'Sustain', 'Systems', 'Academy'] as $p)<option>{{ $p }}</option>@endforeach
                </select>
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Card size</label>
                <select x-model="data.size" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                    <option value="p-big">Big</option><option value="p-med">Medium</option><option value="p-sm">Small</option>
                </select>
            </div>
            <label class="flex items-center gap-2 text-sm text-slate-600"><input type="checkbox" x-model="data.light" class="rounded border-slate-300 text-brand focus:ring-brand/30" /> Light card (dark text)</label>
        </div>

        <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
                <label class="mb-2 block text-sm font-medium text-slate-700">Preview</label>
                <div class="grid h-28 place-items-center overflow-hidden rounded-lg" :style="'background:'+data.bgGrad">
                    <img :src="data.image" alt="" class="absolute h-28 w-full object-cover opacity-60" x-show="data.image" onerror="this.style.display='none'" />
                    <img :src="data.icon" alt="" class="relative h-10 w-10" x-show="data.icon" />
                </div>
            </div>
            <div><label class="mb-1.5 block text-xs font-medium text-slate-500">Background gradient (CSS)</label><input x-model="data.bgGrad" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
            <div><label class="mb-1.5 block text-xs font-medium text-slate-500">Accent colour (CSS)</label><input x-model="data.color" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
            <div><label class="mb-1.5 block text-xs font-medium text-slate-500">Icon path</label><input x-model="data.icon" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" /></div>
            <div><label class="mb-1.5 block text-xs font-medium text-slate-500">Image path</label><input x-model="data.image" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" placeholder="/assets/brand/…" /></div>
            <div>
                <label class="mb-1.5 block text-xs font-medium text-slate-500">Image crop</label>
                <select x-model="data.imageZoom" class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                    <option value="">Default</option><option value="trim">Trim edge</option><option value="portrait">Portrait (face)</option>
                </select>
            </div>
        </div>

        <div class="flex items-center gap-2">
            <button class="flex-1 rounded-lg bg-gradient-to-br from-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">{{ $submit }}</button>
            <a href="{{ route('admin.projects.index') }}" class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</a>
        </div>
    </div>
</form>
