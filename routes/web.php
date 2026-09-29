<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PartnerController;
use App\Http\Controllers\Admin\PillarController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Admin panel
|--------------------------------------------------------------------------
*/
Route::get('/login', [LoginController::class, 'show'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->middleware('throttle:10,1');
Route::post('/logout', [LoginController::class, 'destroy'])->name('logout');

Route::middleware(['auth', 'admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('news', NewsController::class)->except('show');

    Route::get('site-text', [TranslationController::class, 'index'])->name('translations.index');
    Route::put('site-text', [TranslationController::class, 'update'])->name('translations.update');

    Route::get('pillars', [PillarController::class, 'index'])->name('pillars.index');
    Route::get('pillars/{pillar}', [PillarController::class, 'edit'])->name('pillars.edit');
    Route::put('pillars/{pillar}', [PillarController::class, 'update'])->name('pillars.update');

    Route::get('partners', [PartnerController::class, 'index'])->name('partners.index');
    Route::get('partners/{pillar}', [PartnerController::class, 'edit'])->name('partners.edit');
    Route::put('partners/{pillar}', [PartnerController::class, 'update'])->name('partners.update');

    Route::get('settings', [SettingController::class, 'edit'])->name('settings.edit');
    Route::put('settings', [SettingController::class, 'update'])->name('settings.update');
});

/*
|--------------------------------------------------------------------------
| Public site (React)
|--------------------------------------------------------------------------
| Laravel owns the URLs and injects content; React renders every page. A new
| page needs a route here and a matching branch in resources/js/main.tsx.
*/
Route::view('/', 'app');
Route::view('/about', 'app');
Route::view('/news', 'app');
Route::view('/pillars/{pillar}', 'app')
    ->whereIn('pillar', ['academy', 'sustain', 'innovation', 'systems']);

Route::post('/contact', ContactController::class)->middleware('throttle:5,1');

Route::fallback(fn () => response()->view('app', status: 404));
