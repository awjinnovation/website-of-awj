# Website Plan & Component Map

> **Reusable template.** Copy this file into any project, wipe the example rows,
> and fill in your own. Keep it short — one line per page/section/component.
>
> **Status:** 🔲 planned · 🚧 in progress · ✅ done

---

## 1. Overview

| | |
|---|---|
| **Site** | AWJ Corporate |
| **Stack** | React + Vite + TypeScript |
| **Routing** | Path-based (`main.tsx`), no router lib |
| **Languages** | English (LTR) · Arabic (RTL) — toggle in nav |
| **Styling** | `styles-v2.css` (global) · `news-page.css` · CSS Modules (About sections) |

---

## 2. Pages

| Route | Page | Purpose | Sections used | Status |
|---|---|---|---|---|
| `/` | Home | Landing / company overview | Nav · Hero · Stats · Pillars · Services · Projects · News · Contact · Footer | ✅ |
| `/about` | About | Story, timeline, advantages, values, team | Nav · About hero · Timeline · Advantages & Values · People · Footer | ✅ |
| `/news` | News | News & announcements list + article modal | Nav · News hero · Featured · All news (filters) · Footer | ✅ |
| `/pillars/:id` | Pillar | Per-pillar detail (academy · sustain · innovation · systems) | Nav · Pillar hero · content · Footer | ✅ |

---

## 3. Sections / Blocks

| Section | Purpose | Used on | Status |
|---|---|---|---|
| NavPill | Top nav, pillars dropdown, language toggle | All pages | ✅ |
| Hero | Home hero headline + lede + CTAs | Home | ✅ |
| Stats | Stat band (numbers + labels) | Home | ✅ |
| PillarsStack | Pillars carousel (4 pillar cards) | Home | ✅ |
| Services | Services bento grid | Home | ✅ |
| Projects | Projects bento + detail modal | Home | ✅ |
| News | News preview / recent list | Home | ✅ |
| Contact | Multi-step contact form | Home | ✅ |
| Footer | Footer (brand, links, address) | All pages | ✅ |
| TimelineSection | Company timeline | About | ✅ |
| AdvantagesValuesSection | Competitive advantages + values | About | ✅ |
| Partners | Partners / clients logos | — (built, not placed) | 🔲 |
| Success | Success stories / case cards | — (built, not placed) | 🔲 |

---

## 4. Shared components

| Component | Purpose | Status |
|---|---|---|
| Cursor | Custom cursor dot + ring | ✅ |
| Magnetic | Magnetic-hover wrapper | ✅ |
| PillarLogo | Renders a pillar logo (light / on-dark) | ✅ |

---

## 5. Global / cross-cutting

- **Fonts** — Proxima Nova Arabic for all text; Magnetik reserved for logos (SVG only).
- **Type rule** — line-height is always `font-size + 2px` (global `calc(1em + 2px)`).
- **i18n** — `LangContext` + `dict.ts` (en / ar). Arabic is RTL. **Arabic = approved content only — never machine-translate** (see `content/approved-content-ar.md`).
- **Hooks** — `useReveal` (scroll reveal), `useAutoScroll`.
- **Data** — `data/pillars.ts`, `data/pillar-content.ts`, `data/news.tsx`.
- **Assets** — `public/assets/brand/` (logos, icons, cards, backgrounds).

---

## 6. Backlog / TODO

- [ ] Place Partners and Success sections (built but not on any page).
- [ ] Approved Arabic for remaining fallbacks: stats descriptions, contact lede, news-page lede.
- [ ] Wire About page + Advantages/Values to i18n (currently English-only).
