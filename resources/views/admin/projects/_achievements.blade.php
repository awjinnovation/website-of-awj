<div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
    <div class="mb-3 flex items-center justify-between">
        <h2 class="font-semibold text-slate-900">Achievements</h2>
        <button type="button" @click="{{ $bind }}.push({ value: '', label: '' })" class="text-sm font-medium text-brand hover:underline">+ Add</button>
    </div>
    <div class="space-y-2">
        <template x-for="(a, i) in {{ $bind }}" :key="i">
            <div class="flex items-center gap-2">
                <input x-model="a.value" placeholder="6,600+" class="w-32 shrink-0 rounded-lg border border-slate-300 px-3 py-2 text-sm font-semibold outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                <input x-model="a.label" placeholder="Participants" class="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                <button type="button" @click="{{ $bind }}.splice(i,1)" class="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                    <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
            </div>
        </template>
        <p x-show="{{ $bind }}.length === 0" class="py-2 text-center text-sm text-slate-400">None.</p>
    </div>
</div>
