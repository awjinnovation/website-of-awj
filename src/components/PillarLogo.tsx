/**
 * Renders the pillar lockup.
 *
 *   EN + light bg : the brand H-lockup SVG as authored, via <img>.
 *                   No filter, no inline-SVG class overrides, no path
 *                   recoloring. The SVG file is the artwork.
 *   EN + dark bg  : composed fallback — the unmodified pillar icon SVG
 *                   from the brand kit + "AWJ {Name}" rendered as styled
 *                   text. The authored H-lockup has black AWJ which
 *                   wouldn't be readable on dark, and the brand rule
 *                   forbids recoloring the SVG. We don't ship a dark
 *                   variant, so this is the substitute.
 *   AR (any bg)   : composed fallback — same brand-kit pillar icon, but
 *                   the wordmark is the localized Arabic name (the SVG
 *                   wordmark is Latin script and doesn't belong in an
 *                   Arabic context).
 *
 * Per brand guideline: the SVG files in /assets/brand/ are FINAL and
 * may not be modified, redrawn, recolored, or filtered. This component
 * uses the icon file as-is and pairs it with text we author ourselves.
 */

import { useLang } from '../i18n/LangContext';
import { PILLARS, type PillarId } from '../data/pillars';
import type { TranslationKey } from '../i18n/dict';

type Props = {
  pillarId: PillarId;
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

  const useTextFallback = lang === 'ar' || variant === 'onDark';
  const wrapperCls = `pillar-logo${className ? ' ' + className : ''}`;

  if (useTextFallback) {
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

  return (
    <span className={wrapperCls}>
      <img src={pillar.logo} alt={ariaLabel ?? `AWJ ${pillar.name}`} />
    </span>
  );
};
