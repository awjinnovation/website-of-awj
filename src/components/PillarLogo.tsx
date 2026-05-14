/**
 * Renders the pillar lockup.
 *
 *   EN + light bg : the brand H-lockup SVG as authored, via <img>.
 *                   No filter, no inline-SVG class overrides, no path
 *                   recoloring. The SVG file is the artwork.
 *   EN + dark bg  : localized name rendered as styled text. The authored
 *                   black AWJ wouldn't be readable on dark, and the brand
 *                   rule forbids recoloring the SVG. Text fallback instead.
 *   AR (any bg)   : localized Arabic name rendered as styled text. The SVG
 *                   wordmark is Latin script and doesn't belong in an
 *                   Arabic context.
 *
 * Per brand guideline: the SVG files are FINAL and may not be modified,
 * redrawn, recolored, or filtered.
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
      <span className={wrapperCls} role="img" aria-label={ariaLabel ?? label}>
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
