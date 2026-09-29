<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

// Every page is rendered client-side by the React app (resources/js/main.tsx).
// These routes only decide which URLs exist, so anything else gets the same
// app with a real 404 status and React shows its NotFound page.
Route::view('/', 'app');
Route::view('/about', 'app');
Route::view('/news', 'app');
Route::view('/pillars/{pillar}', 'app')
    ->whereIn('pillar', ['academy', 'sustain', 'innovation', 'systems']);

Route::post('/contact', ContactController::class)->middleware('throttle:5,1');

Route::fallback(fn () => response()->view('app', status: 404));
