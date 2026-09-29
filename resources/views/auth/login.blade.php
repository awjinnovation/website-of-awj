<!doctype html>
<html lang="en" class="h-full">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Sign in · AWJ Admin</title>
    <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.bunny.net" />
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700,800" rel="stylesheet" />
    @vite('resources/css/admin.css')
</head>
<body class="grid h-full place-items-center bg-slate-100 p-4 text-slate-800">
    <div class="w-full max-w-sm">
        <div class="mb-6 flex flex-col items-center gap-3 text-center">
            <span class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-brand-2 text-lg font-extrabold text-white shadow-lg shadow-brand/30">A</span>
            <div>
                <h1 class="text-lg font-semibold text-slate-900">AWJ Admin</h1>
                <p class="text-sm text-slate-500">Sign in to manage the website</p>
            </div>
        </div>

        <form method="POST" action="{{ route('login') }}" class="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            @csrf

            @if ($errors->any())
                <div class="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                    {{ $errors->first() }}
                </div>
            @endif

            <div>
                <label for="email" class="mb-1.5 block text-sm font-medium text-slate-700">Email</label>
                <input id="email" name="email" type="email" value="{{ old('email') }}" required autofocus
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>

            <div>
                <label for="password" class="mb-1.5 block text-sm font-medium text-slate-700">Password</label>
                <input id="password" name="password" type="password" required
                       class="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20" />
            </div>

            <label class="flex items-center gap-2 text-sm text-slate-600">
                <input type="checkbox" name="remember" class="rounded border-slate-300 text-brand focus:ring-brand/30" />
                Keep me signed in
            </label>

            <button class="w-full rounded-lg bg-gradient-to-br from-brand to-brand-2 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95">
                Sign in
            </button>
        </form>
    </div>
</body>
</html>
