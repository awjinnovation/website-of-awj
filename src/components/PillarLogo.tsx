/**
 * Renders the pillar lockup.
 *
 *   English (any bg) : the brand H-lockup SVG as authored, via <img>.
 *                      No filter, no inline-SVG class overrides, no path
 *                      recoloring, no composed fallback. The SVG file is
 *                      the artwork and is rendered as-is on every surface.
 *                      If the AWJ wordmark is hard to read on a dark
 *                      background, the brand team should ship a dark-bg
 *                      variant — that's not for the front-end to invent.
 *
 *   Arabic (any bg)  : composed lockup — the unmodified pillar icon SVG
 *                      from the brand kit + the localized Arabic name as
 *                      styled text. The shipped lockup is Latin script and
 *                      doesn't belong in an Arabic context, and no Arabic
 *                      H-lockup is shipped. Per the brand-guide implementer
 *                      notes, a text-alongside fallback is the documented
 *                      path when an authored variant isn't available.
 *
 * Per brand guideline: the SVG files in /assets/brand/ are FINAL and
 * may not be modified, redrawn, recolored, or filtered.
 */

import { useLang } from '../i18n/LangContext';
import { PILLARS, type PillarId } from '../data/pillars';
import type { TranslationKey } from '../i18n/dict';

type Props = {
  pillarId: PillarId;
  /** Kept for backwards compatibility with the existing call sites. In
   *  English mode the variant is ignored (we always render the authored
   *  SVG as-is). In Arabic mode it only toggles the on-dark text color. */
  variant?: 'light' | 'onDark';
  className?: string;
  ariaLabel?: string;
};

export const PillarLogo = ({
  pillarId,
  variant = 'light',
  className = '',
  ariaLabel,
}: Props) => {
  const { lang, t } = useLang();
  const pillar = PILLARS.find((p) => p.id === pillarId);
  if (!pillar) return null;

  const wrapperCls = `pillar-logo${className ? ' ' + className : ''}`;

  if (lang === 'ar') {
    const label = t(`pillar.${pillarId}.fullName` as TranslationKey);
    const textCls =
      `pillar-logo-text pillar-logo-${pillarId}` +
      (variant === 'onDark' ? ' on-dark' : '');
    return (
      <span
        className={`${wrapperCls} pillar-logo-composed`}
        role="img"
        aria-label={ariaLabel ?? label}
      >
        <img
          src={pillar.icon}
          alt=""
          aria-hidden="true"
          className="pillar-logo-icon"
        />
        <span className={textCls}>{label}</span>
      </span>
    );
  }

  // English: render the brand H-lockup exactly as authored, on every surface.
  return (
    <span className={wrapperCls}>
      <img src={pillar.logo} alt={ariaLabel ?? `AWJ ${pillar.name}`} />
    </span>
  );
};
