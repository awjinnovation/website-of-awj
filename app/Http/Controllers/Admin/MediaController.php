<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Media;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\View\View;

class MediaController extends Controller
{
    /** The Media Library page: everything that has been uploaded. */
    public function index(Request $request): View
    {
        $query = Media::with('user')->latest();

        if ($request->filled('folder')) {
            $query->where('folder', $request->input('folder'));
        }
        if ($request->boolean('mine')) {
            $query->where('user_id', $request->user()->id);
        }

        return view('admin.media.index', [
            'items' => $query->paginate(60)->withQueryString(),
            'folders' => Media::query()->whereNotNull('folder')->distinct()->orderBy('folder')->pluck('folder'),
            'filterFolder' => $request->input('folder'),
            'mine' => $request->boolean('mine'),
        ]);
    }

    /** JSON list for the in-form picker. */
    public function list(Request $request): JsonResponse
    {
        $items = Media::latest()->limit(200)->get()
            ->map(fn (Media $m) => [
                'id' => $m->id,
                'url' => $m->path,
                'name' => $m->original_name,
                'size' => $m->human_size,
                'folder' => $m->folder,
            ]);

        return response()->json($items);
    }

    /** Receive an upload (AJAX) and return its public URL. */
    public function store(Request $request): JsonResponse
    {
        $request->validate([
            'file' => ['required', 'file', 'mimes:jpg,jpeg,png,webp,gif,svg', 'max:10240'],
            'folder' => ['nullable', 'string', 'max:40'],
        ]);

        $file = $request->file('file');
        $ext = strtolower($file->getClientOriginalExtension() ?: 'jpg');
        $base = Str::slug(pathinfo($file->getClientOriginalName(), PATHINFO_FILENAME)) ?: 'image';
        $name = Str::limit($base, 40, '').'-'.Str::lower(Str::random(6)).'.'.$ext;

        $dir = 'uploads/'.date('Y/m');
        $file->move(public_path($dir), $name);
        $path = '/'.$dir.'/'.$name;

        $media = Media::create([
            'path' => $path,
            'original_name' => $file->getClientOriginalName(),
            'mime' => $file->getClientMimeType(),
            'size' => filesize(public_path(ltrim($path, '/'))),
            'folder' => $request->input('folder'),
            'user_id' => $request->user()->id,
        ]);

        return response()->json([
            'id' => $media->id,
            'url' => $media->path,
            'name' => $media->original_name,
            'size' => $media->human_size,
        ]);
    }

    public function destroy(Media $medium): RedirectResponse
    {
        $full = public_path(ltrim($medium->path, '/'));
        if (is_file($full)) {
            @unlink($full);
        }
        $medium->delete();

        return back()->with('status', 'Image deleted.');
    }
}
