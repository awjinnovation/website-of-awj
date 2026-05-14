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

import academyH from '../../public/assets/brand/awj-academy-logo-h.svg?raw';
import sustainH from '../../public/assets/brand/awj-sustain-logo-h.svg?raw';
import innovationH from '../../public/assets/brand/awj-innovation-logo-h.svg?raw';
import systemsH from '../../public/assets/brand/awj-systems-logo-h.svg?raw';

const LOGO_RAW: Record<PillarId, string> = {
  academy: academyH,
  sustain: sustainH,
  innovation: innovationH,
  systems: systemsH,
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
    const fullLabel = t(`pillar.${pillarId}.fullName` as TranslationKey);
    const pillarName = fullLabel.replace(/أوج\s*/g, '').trim();
    const textCls = `pillar-logo-text pillar-logo-${pillarId}` +
      (variant === 'onDark' ? ' on-dark' : '');
    return (
      <span
        className={`${wrapperCls} pillar-logo-composed`}
        role="img"
        aria-label={ariaLabel ?? fullLabel}
      >
        <img
          src={pillar.icon}
          alt=""
          aria-hidden="true"
          className="pillar-logo-icon"
        />
        <span className={`${textCls} pillar-logo-ar`}>{pillarName}</span>
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
