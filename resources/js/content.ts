/**
 * Content injected by the Laravel backend as `window.__AWJ__` (see the Blade
 * view and App\Services\ContentService). Each data module keeps its original
 * literal as a fallback and overrides it from here, so the app still renders
 * when the payload is absent — a standalone `npm run dev`, tests, or a static
 * export — and the database wins whenever Laravel serves the page.
 */
import type { NewsItem } from './data/news';
import type { PillarContentBundle } from './data/pillar-content';
import type { PillarOrgs } from './data/pillar-partners';
import type { PillarId } from './data/pillars';
import type { Lang } from './i18n/dict';

type Payload = {
  news?: NewsItem[];
  dict?: Record<Lang, Record<string, string>>;
  pillarContent?: Record<PillarId, PillarContentBundle>;
  pillarOrgs?: Record<PillarId, PillarOrgs>;
  companyAddress?: Record<Lang, string>;
};

const PAYLOAD: Payload =
  (typeof window !== 'undefined' && (window as unknown as { __AWJ__?: Payload }).__AWJ__) || {};

/** Use the injected value when present, otherwise the compiled-in fallback. */
export const fromPayload = <K extends keyof Payload>(
  key: K,
  fallback: NonNullable<Payload[K]>,
): NonNullable<Payload[K]> => (PAYLOAD[key] ?? fallback) as NonNullable<Payload[K]>;

export const payloadDict = (): Payload['dict'] => PAYLOAD.dict;
