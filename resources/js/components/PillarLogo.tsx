/**
 * Renders the pillar lockup.
 *
 *   EN + light surface  : the brand H-lockup SVG as authored, via <img>.
 *                         No filter, no class overrides, no recoloring.
 *
 *   EN + dark  surface  : the same brand H-lockup, but INLINED so the one
 *                         sanctioned Case-C recolor can apply: only the
 *                         "AWJ" letter paths (the path elements without a
 *                         class attribute in the authored artwork) flip to
 *                         white. The icon and pillar wordmark keep their
 *                         authored colors. See BRAND_GUIDE.txt → Case C.
 *
 *   AR (any surface)    : composed lockup. The unmodified brand icon SVG
 *                         + the localized Arabic pillar name as styled
 *                         text in Proxima Nova Arabic. The shipped lockup
 *                         is Latin script and isn't appropriate for an
 *                         Arabic context; no Arabic H-lockup is shipped.
 *
 * The SVG files in /assets/brand are FINAL and may not be modified,
 * redrawn, or filtered. The single CSS rule
 *   .pillar-logo.on-dark path:not([class]) { fill: #fff }
 * is the one exception, sanctioned by the brand guide.
 */

import { useLang } from '../i18n/LangContext';
import { PILLARS, type PillarId } from '../data/pillars';
import type { TranslationKey } from '../i18n/dict';

import academyH from '../../../public/assets/brand/awj-academy-logo-h.svg?raw';
import sustainH from '../../../public/assets/brand/awj-sustain-logo-h.svg?raw';
import innovationH from '../../../public/assets/brand/awj-innovation-logo-h.svg?raw';
import systemsH from '../../../public/assets/brand/awj-systems-logo-h.svg?raw';

import academyIcon from '../../../public/assets/brand/awj-academy-icon.svg?raw';
import sustainIcon from '../../../public/assets/brand/awj-sustain-icon.svg?raw';
import innovationIcon from '../../../public/assets/brand/awj-innovation-icon.svg?raw';
import systemsIcon from '../../../public/assets/brand/awj-systems-icon.svg?raw';

const LOGO_RAW: Record<PillarId, string> = {
  academy: academyH,
  sustain: sustainH,
  innovation: innovationH,
  systems: systemsH,
};

/** Icon marks, inlined so the dark-surface recolor below can reach their paths
 *  the same way it reaches the H-lockup's. */
const ICON_RAW: Record<PillarId, string> = {
  academy: academyIcon,
  sustain: sustainIcon,
  innovation: innovationIcon,
  systems: systemsIcon,
};

type Props = {
  pillarId: PillarId;
  /** "onDark" enables the Case-C selective AWJ-only whitening on the
   *  inlined SVG. "light" renders the authored SVG as-is via <img>. */
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
    const onDark = variant === 'onDark';
    const textCls = `pillar-logo-text pillar-logo-${pillarId}` +
      (onDark ? ' on-dark' : '');
    return (
      <span
        className={`${wrapperCls} pillar-logo-composed${onDark ? ' on-dark' : ''}`}
        role="img"
        aria-label={ariaLabel ?? label}
      >
        {onDark ? (
          // Inlined rather than an <img> so the Case-C whitening applies to the
          // mark exactly as it does on the English lockup, which the rule
          // already renders entirely white on a dark surface. An <img> cannot
          // be recolored without a filter, and the brand assets are never
          // filtered.
          <span
            className="pillar-logo-icon"
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: ICON_RAW[pillarId] }}
          />
        ) : (
          <img
            src={pillar.icon}
            alt=""
            aria-hidden="true"
            className="pillar-logo-icon"
          />
        )}
        <span className={`${textCls} pillar-logo-ar`}>{label}</span>
      </span>
    );
  }

  if (variant === 'onDark') {
    // Inline the authored SVG so the Case-C rule can target AWJ paths.
    return (
      <span
        className={`${wrapperCls} on-dark`}
        role="img"
        aria-label={ariaLabel ?? `AWJ ${pillar.name}`}
        dangerouslySetInnerHTML={{ __html: LOGO_RAW[pillarId] }}
      />
    );
  }

  return (
    <span className={wrapperCls}>
      <img src={pillar.logo} alt={ariaLabel ?? `AWJ ${pillar.name}`} />
    </span>
  );
};
