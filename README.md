# AWJ Website

React + TypeScript website with a Laravel backend and a custom admin panel. Laravel owns the URLs, stores the content, and renders the page shell; React renders every public page in the browser; editors manage the content at `/admin`.

## Routes

Public (React):

- `/` — landing page
- `/about` — about page
- `/news` — news archive
- `/pillars/{academy|sustain|innovation|systems}` — pillar pages
- `POST /contact` — contact form endpoint

Admin (Blade):

- `/login` — sign in
- `/admin` — dashboard, then News, Pillar pages, Partners, Site text and Settings

Any other URL gets the React app with a 404 status. The public page routes are declared in [routes/web.php](routes/web.php) and matched again client-side in [resources/js/main.tsx](resources/js/main.tsx), so a new public page needs both.

## How content works

All editable content lives in the database and is managed from the admin panel. On each page load Laravel assembles it into one payload and injects it as `window.__AWJ__` in [app.blade.php](resources/views/app.blade.php); the React data modules read that payload and fall back to their built-in copy when it is absent (a standalone `npm run dev`, tests, or a static export). So the design never changes — only where the words come from.

- [app/Services/ContentService.php](app/Services/ContentService.php) — builds and caches the payload; the cache is cleared whenever the admin saves.
- [resources/js/content.ts](resources/js/content.ts) — reads the payload on the React side.
- `database/content/*.json` — the seed content, exported from the original hard-coded React modules by [scripts/export-content.ts](scripts/export-content.ts) (`npm run content:export`). The seeder loads it into the database.

What is editable: news, site text (every UI string, English + Arabic), pillar-page bodies, partner logos, and the company address. What stays in code: pillar brand assets and colours, the SVG news-cover generator, and layout.

## Stack

- Laravel 13 (PHP 8.3+), SQLite — no database server required
- Admin UI: Blade + Tailwind v4 + Alpine.js
- Public site: React 18 + TypeScript 5, built with Vite 8 (`laravel-vite-plugin`)
- No CSS framework on the public site — its styling is in [resources/js/styles-v2.css](resources/js/styles-v2.css) and [resources/js/news-page.css](resources/js/news-page.css).

## Run

```bash
composer setup   # first time: install, .env, key, migrate + seed, build assets
composer dev     # Laravel + Vite with hot reload (Laravel prints its URL)
php artisan test # route, contact form and admin tests
```

`composer setup` seeds a first admin — `admin@awj.om` / `change-me-please` by default (override with `ADMIN_EMAIL` / `ADMIN_PASSWORD` in `.env`). **Change the password after the first sign-in.**

Locally, mail uses the `log` mailer, so contact form emails are written to `storage/logs/laravel.log`.

## Project layout

```
routes/web.php                       # admin + public routes, POST /contact
app/
  Http/Controllers/
    ContactController.php             # contact form → email
    Auth/LoginController.php          # admin sign in/out
    Admin/                            # Dashboard, News, Pillar, Partner, Translation, Setting
  Http/Middleware/EnsureAdmin.php     # protects /admin
  Models/                             # News, Translation, PillarContent, PillarOrg, Setting, User
  Services/ContentService.php         # assembles window.__AWJ__
database/
  migrations/                         # users + content tables
  seeders/ContentSeeder.php           # loads database/content/*.json
  content/*.json                      # seed content (source of truth for the seed)
resources/
  views/
    app.blade.php                     # public page shell (injects content, loads React)
    layouts/admin.blade.php           # admin shell
    auth/login.blade.php
    admin/                            # admin screens
  css/admin.css                       # Tailwind entry (admin only)
  js/
    main.tsx                          # React entry + client-side router
    content.ts                        # reads the injected payload
    admin/admin.js                    # Alpine
    data/  i18n/  sections/  pages/   # the React app
public/
  .htaccess                           # HTTPS + apex redirects, caching, → index.php
  build/                              # Vite output (generated, not committed)
  news-media/                         # news images (uploads land here)
```

## Deploy (Plesk)

1. Set the domain's document root to the project's `public/` folder.
2. `composer install --no-dev --optimize-autoloader`, then `npm ci && npm run build` (or build locally and upload `public/build/`).
3. Create `.env` from `.env.example`; set `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://awj.om`, `MAIL_MAILER=sendmail` (or SMTP), and a strong `ADMIN_PASSWORD`; run `php artisan key:generate`.
4. `php artisan migrate --seed --force` to create the SQLite database and load the initial content.
5. Make `storage/`, `bootstrap/cache/`, `database/` (for the SQLite file) and `public/news-media/` (for image uploads) writable by the web server.
6. `php artisan optimize` after each deploy.

Prefer MySQL? Create a database in Plesk, set `DB_CONNECTION=mysql` and the `DB_*` values in `.env`, then run step 4.

## Notes

- Sessions, cache and the queue use the filesystem, so only content needs the database.
- Public-site images and fonts are referenced by root-relative strings (`/team/x.jpg`) served straight from `public/`, so Vite does not process them.
- `scripts/deploy-preview.mjs` (the old GitHub Pages preview) predates Laravel and no longer works.
