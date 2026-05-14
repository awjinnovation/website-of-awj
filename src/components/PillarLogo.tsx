/**
 * Pillar lockup ("AWJ {Pillar}").
 *
 * Brand rule: never recolor or modify the authored SVG lockup. So we
 * only show the SVG file when it renders correctly as-is:
 *   - EN + light background: render the SVG (brand colors as authored).
 * For any other case we render the localized name as styled text:
 *   - AR (any background): show the Arabic name (e.g. "أكاديمية أوج").
 *   - EN + dark background: show "AWJ {Pillar}" as text in white, since
 *     the SVG's black "AWJ" letters would be invisible on dark and we
 *     refuse to recolor the artwork.
 *
 * The SVG is inlined via Vite's build-time ?raw import so we can include
 * it without a runtime fetch. Brand SVG files on disk are unchanged.
 */

import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';
import type { PillarId } from '../data/pillars';

import academyH from '../../public/assets/brand/awj-academy-logo-h.svg?raw';
import sustainH from '../../public/assets/brand/awj-sustain-logo-h.svg?raw';
import innovationH from '../../public/assets/brand/awj-innovation-logo-h.svg?raw';
import systemsH from '../../public/assets/brand/awj-systems-logo-h.svg?raw';

const LOGO_H: Record<PillarId, string> = {
  academy: academyH,
  sustain: sustainH,
  innovation: innovationH,
  systems: systemsH,
};

type Props = {
  pillarId: PillarId;
  /** Background context. 'onDark' triggers text rendering since the SVG can't
   * be displayed faithfully on dark backgrounds without recoloring. */
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
  const onDark = variant === 'onDark';
  const useText = lang === 'ar' || onDark;

  if (useText) {
    const name = t(`pillar.${pillarId}.fullName` as TranslationKey);
    const cls =
      'pillar-logo pillar-logo-text' +
      ` pillar-logo-${pillarId}` +
      (onDark ? ' on-dark' : '') +
      (className ? ' ' + className : '');
    return (
      <span className={cls} aria-label={ariaLabel ?? name}>
        {name}
      </span>
    );
  }

  // EN + light: render the authored SVG as-is, no overrides.
  const cls = 'pillar-logo' + (className ? ' ' + className : '');
  return (
    <span
      className={cls}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      dangerouslySetInnerHTML={{ __html: LOGO_H[pillarId] }}
    />
  );
};
