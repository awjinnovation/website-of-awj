<form method="POST" action="{{ $action }}" x-data="{ image: '{{ addslashes(old('image', $member->image)) }}' }" class="grid max-w-3xl gap-6 lg:grid-cols-[1fr_16rem]">
    @csrf
    @if (($method ?? 'POST') === 'PUT') @method('PUT') @endif

    <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div class="grid gap-4 sm:grid-cols-2">
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Name <span class="text-rose-500">*</span></label>
                <input name="name" value="{{ old('name', $member->name) }}" required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Title <span class="text-rose-500">*</span></label>
                <input name="title" value="{{ old('title', $member->title) }}" required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
        </div>
        <div>
            <label class="mb-1.5 block text-sm font-medium text-slate-700">Description</label>
            <textarea name="description" rows="2" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">{{ old('description', $member->description) }}</textarea>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Department</label>
                <input name="department" value="{{ old('department', $member->department) }}" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Linked pillar</label>
                <select name="pillar_id" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                    <option value="">None</option>
                    @foreach (['academy' => 'Academy', 'sustain' => 'Sustain', 'innovation' => 'Innovation', 'systems' => 'Systems'] as $id => $name)
                        <option value="{{ $id }}" @selected(old('pillar_id', $member->pillar_id) === $id)>{{ $name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Accent colour</label>
                <input name="accent_color" value="{{ old('accent_color', $member->accent_color) }}" placeholder="#00a19d" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Order</label>
                <input name="sort" type="number" min="0" value="{{ old('sort', $member->sort ?? 0) }}" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
        </div>
    </div>

    <div class="space-y-5">
        <div class="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <label class="block text-sm font-medium text-slate-700">Group</label>
            <select name="group" class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                @foreach ($groups as $key => $label)
                    <option value="{{ $key }}" @selected(old('group', $member->group) === $key)>{{ $label }}</option>
                @endforeach
            </select>

            <label class="block text-sm font-medium text-slate-700">Photo</label>
            <div class="mx-auto h-24 w-24 overflow-hidden rounded-full bg-slate-100 ring-1 ring-slate-200">
                <template x-if="image"><img :src="image" alt="" class="h-full w-full object-cover" /></template>
            </div>
            <input name="image" x-model="image" placeholder="/team/name.jpg" class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
        </div>

        <div class="flex items-center gap-2">
            <button class="flex-1 rounded-lg bg-gradient-to-br from-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">{{ $submit }}</button>
            <a href="{{ route('admin.team.index') }}" class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</a>
        </div>
    </div>
</form>
