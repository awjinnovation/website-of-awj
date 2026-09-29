<!doctype html>
<html lang="en" class="h-full">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <title>@yield('title', 'Admin') · AWJ</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800" rel="stylesheet" />
    @vite(['resources/css/admin.css', 'resources/js/admin/admin.js'])
</head>
<body class="h-full bg-slate-100 text-slate-800 antialiased" x-data="{ sidebar: false }">
<div class="min-h-full lg:grid lg:grid-cols-[17rem_1fr]">

    {{-- Sidebar --}}
    <aside
        class="fixed inset-y-0 left-0 z-40 w-68 -translate-x-full transform bg-ink text-slate-300 transition-transform duration-200 lg:static lg:translate-x-0"
        :class="sidebar && 'translate-x-0'"
        style="width:17rem"
    >
        <div class="flex h-16 items-center gap-2.5 px-6">
            <span class="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 text-sm font-extrabold text-white">A</span>
            <span class="text-[15px] font-semibold tracking-tight text-white">AWJ Admin</span>
        </div>

        <nav class="mt-2 space-y-0.5 px-3 text-sm">
            @php
                $nav = [
                    ['admin.dashboard', 'Dashboard', 'M4 6h16M4 12h16M4 18h7'],
                    ['admin.news.index', 'News', 'M12 8h9M3 8h.01M12 12h9M3 12h.01M12 16h9M3 16h.01'],
                    ['admin.projects.index', 'Projects', 'M3 7l9-4 9 4-9 4-9-4zM3 7v10l9 4 9-4V7M12 11v10'],
                    ['admin.pillars.index', 'Pillar pages', 'M4 21V10l8-6 8 6v11M9 21v-6h6v6'],
                    ['admin.partners.index', 'Partners', 'M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4z'],
                    ['admin.team.index', 'Team', 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM3 21v-2a6 6 0 0112 0v2'],
                    ['admin.stats.edit', 'Stats', 'M4 20V10M10 20V4M16 20v-6M22 20H2'],
                    ['admin.translations.index', 'Site text', 'M4 5h7M9 3v2c0 4-2 7-5 9m1-4c0 3 3 5 5 6m4 3l4-9 4 9m-6.5-2h5'],
                    ['admin.settings.edit', 'Settings', 'M10.3 3.3a2 2 0 013.4 0l.6 1a2 2 0 002 .9l1.1-.1a2 2 0 011.9 3.1l-.6.9a2 2 0 000 2.2l.6.9a2 2 0 01-1.9 3.1l-1.1-.1a2 2 0 00-2 .9l-.6 1a2 2 0 01-3.4 0l-.6-1a2 2 0 00-2-.9l-1.1.1a2 2 0 01-1.9-3.1l.6-.9a2 2 0 000-2.2l-.6-.9a2 2 0 011.9-3.1l1.1.1a2 2 0 002-.9zM12 12h.01'],
                ];
            @endphp
            @foreach ($nav as [$route, $label, $icon])
                @php $active = request()->routeIs(str_replace('.index', '', $route).'*') || request()->routeIs($route); @endphp
                <a href="{{ route($route) }}"
                   class="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium transition
                          {{ $active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white' }}">
                    <svg class="h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="{{ $icon }}" /></svg>
                    {{ $label }}
                </a>
            @endforeach
        </nav>

        <div class="absolute inset-x-0 bottom-0 border-t border-white/10 p-3">
            <a href="/" target="_blank" class="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 hover:text-white">
                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                View live site
            </a>
        </div>
    </aside>

    {{-- Backdrop for mobile sidebar --}}
    <div x-show="sidebar" x-cloak @click="sidebar = false" class="fixed inset-0 z-30 bg-slate-900/40 lg:hidden"></div>

    {{-- Main --}}
    <div class="flex min-h-full flex-col">
        <header class="sticky top-0 z-20 flex h-16 items-center gap-4 border-b border-slate-200 bg-white/80 px-4 backdrop-blur sm:px-6">
            <button @click="sidebar = true" class="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden">
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round"/></svg>
            </button>
            <h1 class="text-[15px] font-semibold text-slate-900">@yield('heading', View::yieldContent('title', 'Admin'))</h1>
            <div class="ml-auto flex items-center gap-3">
                @yield('actions')
                <div class="flex items-center gap-2 border-l border-slate-200 pl-3">
                    <span class="hidden text-sm text-slate-500 sm:inline">{{ auth()->user()->name }}</span>
                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button class="rounded-lg px-2.5 py-1.5 text-sm font-medium text-slate-500 hover:bg-slate-100 hover:text-slate-900">Sign out</button>
                    </form>
                </div>
            </div>
        </header>

        <main class="flex-1 p-4 sm:p-6 lg:p-8">
            @if (session('status'))
                <div x-data="{ show: true }" x-show="show" x-init="setTimeout(() => show = false, 4000)"
                     class="mb-5 flex items-center gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                    {{ session('status') }}
                </div>
            @endif

            @if ($errors->any())
                <div class="mb-5 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800">
                    <p class="font-semibold">Please fix the following:</p>
                    <ul class="mt-1 list-disc pl-5">
                        @foreach ($errors->all() as $error)<li>{{ $error }}</li>@endforeach
                    </ul>
                </div>
            @endif

            @yield('content')
        </main>
    </div>
</div>
<style>[x-cloak]{display:none!important}</style>
</body>
</html>
