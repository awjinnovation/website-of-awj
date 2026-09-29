<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\News;
use App\Services\ContentService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class NewsController extends Controller
{
    /** Cover art exists for these; anything else falls back to a default cover. */
    public const CATEGORIES = [
        'Healthcare', 'Digital Transformation', 'Social Responsibility', 'Logistics',
        'Aviation', 'Training', 'Digital Economy', 'Urban Development', 'Sustainability',
    ];

    public const PILLARS = ['AWJ Innovation', 'AWJ Sustain', 'AWJ Systems', 'AWJ Academy'];

    public function __construct(private ContentService $content) {}

    public function index(): View
    {
        return view('admin.news.index', [
            'items' => News::orderByDesc('date')->get(),
        ]);
    }

    public function create(): View
    {
        return view('admin.news.create', [
            'item' => new News(['date' => now()->toDateString(), 'body' => [''], 'body_ar' => ['']]),
            'categories' => self::CATEGORIES,
            'pillars' => self::PILLARS,
        ]);
    }

    public function store(Request $request): RedirectResponse
    {
        $data = $this->validated($request, null);
        $item = News::create($data);
        $this->content->forget();

        return redirect()->route('admin.news.index')->with('status', "“{$item->title}” created.");
    }

    public function edit(News $news): View
    {
        return view('admin.news.edit', [
            'item' => $news,
            'categories' => self::CATEGORIES,
            'pillars' => self::PILLARS,
        ]);
    }

    public function update(Request $request, News $news): RedirectResponse
    {
        $news->update($this->validated($request, $news));
        $this->content->forget();

        return redirect()->route('admin.news.index')->with('status', "“{$news->title}” updated.");
    }

    public function destroy(News $news): RedirectResponse
    {
        $title = $news->title;
        $news->delete();
        $this->content->forget();

        return redirect()->route('admin.news.index')->with('status', "“{$title}” deleted.");
    }

    /** Validate the request and shape it into the columns News expects. */
    private function validated(Request $request, ?News $existing): array
    {
        $validated = $request->validate([
            'slug' => ['nullable', 'string', 'max:120', 'regex:/^[a-z0-9-]+$/',
                'unique:news,slug'.($existing ? ",{$existing->id}" : '')],
            'title' => ['required', 'string', 'max:255'],
            'dek' => ['required', 'string'],
            'body' => ['array'],
            'body.*' => ['nullable', 'string'],
            'title_ar' => ['nullable', 'string', 'max:255'],
            'dek_ar' => ['nullable', 'string'],
            'body_ar' => ['array'],
            'body_ar.*' => ['nullable', 'string'],
            'category' => ['required', 'string', 'max:80'],
            'pillar' => ['required', 'string', 'max:80'],
            'date' => ['required', 'date'],
            'featured' => ['nullable', 'boolean'],
            'image' => ['nullable', 'string', 'max:255'],
            'image_file' => ['nullable', 'image', 'mimes:jpg,jpeg,png,webp', 'max:6144'],
        ]);

        // Keep an existing article's slug when the field is left blank, so an
        // edit never silently changes its permalink; only generate for new ones.
        $slug = ($validated['slug'] ?? '') ?: ($existing->slug ?? Str::slug($validated['title']));

        $bodyAr = $this->cleanParagraphs($request->input('body_ar', []));

        return [
            'slug' => $slug,
            'title' => $validated['title'],
            'dek' => $validated['dek'],
            'body' => $this->cleanParagraphs($request->input('body', [])),
            'title_ar' => $validated['title_ar'] ?? null,
            'dek_ar' => $validated['dek_ar'] ?? null,
            'body_ar' => $bodyAr === [] ? null : $bodyAr,
            'category' => $validated['category'],
            'pillar' => $validated['pillar'],
            'date' => $validated['date'],
            'featured' => $request->boolean('featured'),
            'image' => $this->resolveImage($request, $slug, $existing),
        ];
    }

    /** Drop blank paragraphs and normalise whitespace. */
    private function cleanParagraphs(array $paragraphs): array
    {
        return array_values(array_filter(array_map(
            fn ($p) => trim((string) $p),
            $paragraphs,
        ), fn ($p) => $p !== ''));
    }

    /** An uploaded file wins; otherwise keep the typed path or the existing one. */
    private function resolveImage(Request $request, string $slug, ?News $existing): ?string
    {
        if ($request->hasFile('image_file')) {
            $ext = $request->file('image_file')->getClientOriginalExtension() ?: 'jpg';
            $name = $slug.'-'.substr(md5((string) microtime(true)), 0, 6).'.'.$ext;
            $request->file('image_file')->move(public_path('news-media'), $name);

            return '/news-media/'.$name;
        }

        return $request->input('image') ?: $existing?->image;
    }
}
