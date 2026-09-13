/**
 * Sub-path helpers.
 *
 * The site normally lives at the domain root, but a preview host can serve it
 * from a folder (GitHub Pages serves a project site from `/<repo>/`). Vite puts
 * that prefix in `import.meta.env.BASE_URL`, always with a trailing slash, and
 * it is `/` for the root deployment and for `npm run dev`.
 *
 * Every internal link is written root-relative (`/about`), so each one has to be
 * prefixed, and the router has to strip the prefix back off before matching.
 */

/** The configured prefix, without its trailing slash. Empty at the root. */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

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
