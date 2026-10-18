{{-- Reusable "choose image" trigger. Pass $onclick = an Alpine expression that
     calls openMediaPicker(u => <assign u>, '<folder>'). --}}
<button type="button" @click="{{ $onclick }}"
        class="mt-1.5 inline-flex items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-brand hover:text-brand">
    <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 16V5m0 0L8 9m4-4l4 4M5 16v2a2 2 0 002 2h10a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    Upload / choose
</button>
