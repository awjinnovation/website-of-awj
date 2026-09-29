# AWJ Website

React + TypeScript implementation of the AWJ Group website, served by Laravel. Laravel owns the URLs, the page shell and the contact form; React renders every page in the browser.

## Routes

- `/` — landing page (Hero, Stats, Pillars stack, Services, Projects, News, Contact, Footer)
- `/about` — about page
- `/news` — news archive
- `/pillars/{academy|sustain|innovation|systems}` — pillar pages
- `POST /contact` — contact form endpoint, emails the enquiry to `CONTACT_RECIPIENT`

Any other URL gets the React app with a 404 status, and React shows its NotFound page. The page routes are declared in [routes/web.php](routes/web.php) and matched again client-side in [resources/js/main.tsx](resources/js/main.tsx), so a new page needs both.

## Stack

- Laravel 13 (PHP 8.3+)
- Vite 8 with `laravel-vite-plugin`
- React 18
- TypeScript 5
- No CSS framework — all styling is in [resources/js/styles-v2.css](resources/js/styles-v2.css) and [resources/js/news-page.css](resources/js/news-page.css).

## Run

```bash
composer setup   # first time: composer + npm install, .env, app key, build
composer dev     # Laravel + Vite with hot reload (Laravel prints its URL, usually :8000)
php artisan test # route and contact form tests
```

`composer dev` runs `php artisan serve` and `npm run dev` together; running those two in separate terminals works too. Open the Laravel URL, not Vite's.

Locally, mail uses the `log` mailer, so contact form emails are written to `storage/logs/laravel.log` instead of being sent.

## Project layout

```
routes/web.php                      # page routes + POST /contact
app/Http/Controllers/
  ContactController.php             # contact form → email (replaces send.php)
resources/
  views/app.blade.php               # page shell: <head>, meta, analytics, @vite
  js/
    main.tsx                        # entry + client-side router
    App.tsx                         # landing page shell
    base-path.ts                    # sub-folder prefix, read from <meta name="base-path">
    components/  hooks/  i18n/
    sections/                       # NavPill, Hero, Stats, PillarsStack, Services, ...
    pages/                          # AboutPage, NewsPage, PillarPage, NotFound
    data/                           # pillars, news, company
public/
  .htaccess                         # HTTPS + apex redirects, caching, → index.php
  assets/  brand/  Fonts/  news-media/  team/
  build/                            # Vite output (generated, not committed)
tests/Feature/                      # PagesTest, ContactTest
awj-website/                        # Original Claude Design handoff bundle
```

## Deploy (Plesk)

1. Set the domain's document root to the project's `public/` folder.
2. On the server: `composer install --no-dev --optimize-autoloader` and `npm ci && npm run build` (or build locally and upload `public/build/`).
3. Create `.env` from `.env.example`, then set `APP_ENV=production`, `APP_DEBUG=false`, `APP_URL=https://awj.om`, `MAIL_MAILER=sendmail` (or SMTP settings), and run `php artisan key:generate`.
4. Make `storage/` and `bootstrap/cache/` writable by the web server.
5. `php artisan optimize` after each deploy.

No database is needed: sessions and cache use files, and mail is sent immediately rather than queued.

## Notes

- The custom cursor uses `cursor: none` on desktop. Move the mouse to see the dot/ring.
- Images and fonts are referenced by root-relative strings (`/team/x.jpg`) and served straight from `public/`, so they are not processed by Vite.
- `scripts/deploy-preview.mjs` (the GitHub Pages preview) predates the move to Laravel and no longer works: it expects a static `index.html` build.
