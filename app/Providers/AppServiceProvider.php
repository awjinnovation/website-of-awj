<?php

namespace App\Providers;

use App\Services\ContentService;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Hand the React app its content. Only the public shell needs it, so it
        // is bound to that view rather than shared globally with the admin.
        View::composer('app', function ($view) {
            $view->with('awjContent', app(ContentService::class)->payload());
        });
    }
}
