# AWJ Website

Vite + React + TypeScript implementation of the AWJ Group landing page and news page, ported from a Claude Design HTML/JSX prototype.

## Routes

- `/` — landing page (Hero, Stats, Pillars stack, Services, Projects, News, Success, Partners, Contact, Footer)
- `/news` — news archive (featured cards, topic + pillar filters, article modal with deep-linkable `#<id>` anchors)

## Stack

- Vite 5
- React 18
- TypeScript 5
- No CSS framework — all styling is in [src/styles-v2.css](src/styles-v2.css) and [src/news-page.css](src/news-page.css), copied verbatim from the design prototype.

## Run

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview production build
```

## Project layout

```
src/
  App.tsx              # landing page shell
  main.tsx             # path-based router (/ vs /news)
  components/          # Cursor, Magnetic, AwjMark, AwjLockup
  hooks/useReveal.ts   # IntersectionObserver-based reveal
  sections/            # NavPill, Hero, Stats, PillarsStack, Services,
                       # Projects, News, Success, Partners, Contact, Footer
  pages/NewsPage.tsx   # /news page
  data/                # pillars, news (with cover images)
public/
  assets/              # AWJ logos, pillar icons, watermark
  news/                # 10 news photos (id-keyed JPGs)
awj-website/           # Original Claude Design handoff bundle (HTML/JSX prototype + chats)
```

## Notes

- The custom cursor uses `cursor: none` on desktop. Move the mouse to see the dot/ring.
- Deploying as a static site: configure SPA fallback so `/news` rewrites to `/index.html`.
- Hosts that handle this automatically: Netlify, Vercel, Cloudflare Pages.
