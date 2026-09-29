@php
    $body = old('body', $item->body ?: ['']);
    $bodyAr = old('body_ar', $item->body_ar ?: ['']);
    $initial = [
        'tab' => 'en',
        'body' => array_values($body),
        'bodyAr' => array_values($bodyAr),
        'image' => old('image', $item->image),
        'preview' => old('image', $item->image),
    ];
@endphp

<form method="POST" action="{{ $action }}" enctype="multipart/form-data"
      x-data="{{ json_encode($initial) }}"
      class="grid gap-6 lg:grid-cols-[1fr_20rem]">
    @csrf
    @if (($method ?? 'POST') === 'PUT') @method('PUT') @endif

    {{-- Main column --}}
    <div class="space-y-5">
        {{-- Language tabs --}}
        <div class="inline-flex rounded-lg border border-slate-200 bg-white p-1 text-sm shadow-sm">
            <button type="button" @click="tab='en'" :class="tab==='en' ? 'bg-ink text-white' : 'text-slate-500'" class="rounded-md px-4 py-1.5 font-medium transition">English</button>
            <button type="button" @click="tab='ar'" :class="tab==='ar' ? 'bg-ink text-white' : 'text-slate-500'" class="rounded-md px-4 py-1.5 font-medium transition">العربية</button>
        </div>

        {{-- English --}}
        <div x-show="tab==='en'" class="space-y-5">
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Title <span class="text-rose-500">*</span></label>
                <input name="title" value="{{ old('title', $item->title) }}" required
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />

                <label class="mt-4 mb-1.5 block text-sm font-medium text-slate-700">Summary (dek) <span class="text-rose-500">*</span></label>
                <textarea name="dek" rows="2" required
                          class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">{{ old('dek', $item->dek) }}</textarea>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="mb-2 flex items-center justify-between">
                    <label class="text-sm font-medium text-slate-700">Body paragraphs</label>
                    <button type="button" @click="body.push('')" class="text-sm font-medium text-brand hover:underline">+ Add paragraph</button>
                </div>
                <div class="space-y-2">
                    <template x-for="(p, i) in body" :key="i">
                        <div class="flex gap-2">
                            <textarea x-model="body[i]" :name="'body['+i+']'" rows="3"
                                      class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea>
                            <button type="button" @click="body.splice(i,1)" x-show="body.length > 1"
                                    class="shrink-0 self-start rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        {{-- Arabic --}}
        <div x-show="tab==='ar'" x-cloak class="space-y-5" dir="rtl">
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <label class="mb-1.5 block text-sm font-medium text-slate-700">العنوان</label>
                <input name="title_ar" lang="ar" value="{{ old('title_ar', $item->title_ar) }}"
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />

                <label class="mt-4 mb-1.5 block text-sm font-medium text-slate-700">الملخص</label>
                <textarea name="dek_ar" lang="ar" rows="2"
                          class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">{{ old('dek_ar', $item->dek_ar) }}</textarea>
                <p class="mt-2 text-xs text-slate-400">Leave Arabic blank to show the English text to Arabic readers.</p>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div class="mb-2 flex items-center justify-between">
                    <label class="text-sm font-medium text-slate-700">فقرات النص</label>
                    <button type="button" @click="bodyAr.push('')" class="text-sm font-medium text-brand hover:underline">+ إضافة فقرة</button>
                </div>
                <div class="space-y-2">
                    <template x-for="(p, i) in bodyAr" :key="i">
                        <div class="flex gap-2">
                            <textarea x-model="bodyAr[i]" :name="'body_ar['+i+']'" lang="ar" rows="3"
                                      class="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"></textarea>
                            <button type="button" @click="bodyAr.splice(i,1)" x-show="bodyAr.length > 1"
                                    class="shrink-0 self-start rounded-lg p-2 text-slate-400 hover:bg-rose-50 hover:text-rose-600">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </button>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>

    {{-- Sidebar --}}
    <div class="space-y-5">
        <div class="space-y-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Category <span class="text-rose-500">*</span></label>
                <input name="category" list="category-list" value="{{ old('category', $item->category) }}" required
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                <datalist id="category-list">@foreach ($categories as $c)<option value="{{ $c }}">@endforeach</datalist>
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Pillar <span class="text-rose-500">*</span></label>
                <select name="pillar" required class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20">
                    @foreach ($pillars as $p)
                        <option value="{{ $p }}" @selected(old('pillar', $item->pillar) === $p)>{{ $p }}</option>
                    @endforeach
                </select>
            </div>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Date <span class="text-rose-500">*</span></label>
                <input type="date" name="date" value="{{ old('date', optional($item->date)->format('Y-m-d')) }}" required
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>
            <label class="flex items-center gap-2.5">
                <input type="checkbox" name="featured" value="1" @checked(old('featured', $item->featured))
                       class="h-4 w-4 rounded border-slate-300 text-brand focus:ring-brand/30" />
                <span class="text-sm font-medium text-slate-700">Feature on the homepage</span>
            </label>
            <div>
                <label class="mb-1.5 block text-sm font-medium text-slate-700">Slug</label>
                <input name="slug" value="{{ old('slug', $item->slug) }}" placeholder="auto from title"
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
                <p class="mt-1 text-xs text-slate-400">Used in the article link. Leave blank to generate it.</p>
            </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <label class="mb-2 block text-sm font-medium text-slate-700">Cover image</label>
            <div class="mb-3 grid aspect-video place-items-center overflow-hidden rounded-lg bg-slate-100 ring-1 ring-slate-200">
                <template x-if="preview">
                    <img :src="preview" alt="" class="h-full w-full object-cover" />
                </template>
                <template x-if="!preview">
                    <span class="text-xs text-slate-400">No image — a generated cover is used</span>
                </template>
            </div>
            <input type="file" name="image_file" accept="image/*"
                   @change="const f=$event.target.files[0]; if(f) preview=URL.createObjectURL(f)"
                   class="block w-full text-xs text-slate-500 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-100 file:px-3 file:py-2 file:text-sm file:font-medium file:text-slate-700 hover:file:bg-slate-200" />
            <div class="mt-3">
                <label class="mb-1.5 block text-xs font-medium text-slate-500">…or path</label>
                <input name="image" x-model="image" @input="preview=image"
                       class="w-full rounded-lg border border-slate-300 px-3 py-2 font-mono text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" placeholder="/news-media/example.jpg" />
            </div>
        </div>

        <div class="flex items-center gap-2">
            <button class="flex-1 rounded-lg bg-gradient-to-br from-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95">
                {{ $submit }}
            </button>
            <a href="{{ route('admin.news.index') }}" class="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50">Cancel</a>
        </div>
    </div>
</form>
