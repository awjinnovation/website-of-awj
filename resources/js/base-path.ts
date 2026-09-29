/**
 * Sub-path helpers.
 *
 * The site normally lives at the domain root, but Laravel can also be served
 * from a folder. Only the server knows which, so the Blade view writes the
 * prefix into `<meta name="base-path">`: empty at the root, `/folder` otherwise.
 * (Vite's `import.meta.env.BASE_URL` is no help here: under laravel-vite-plugin
 * it is where the bundles live, `/build/`, not where the pages are.)
 *
 * Every internal link is written root-relative (`/about`), so each one has to be
 * prefixed, and the router has to strip the prefix back off before matching.
 */

/** The configured prefix, without its trailing slash. Empty at the root. */
const BASE = (
  document.querySelector<HTMLMetaElement>('meta[name="base-path"]')?.content ?? ''
).replace(/\/$/, '');

/** Prefix an internal, root-relative path for the current deployment. */
export const withBase = (path: string): string => {
  if (!BASE) return path;
  // Bare hash targets on the current page carry no path to prefix.
  if (path.startsWith('#')) return path;
  return BASE + path;
};

/** Strip the deployment prefix off a pathname so routes can match on `/about`. */
export const stripBase = (pathname: string): string => {
  if (!BASE || !pathname.startsWith(BASE)) return pathname;
  return pathname.slice(BASE.length) || '/';
};
