/**
 * Renders the pillar lockup.
 *
 * - In English: the original AWJ brand SVG (the H-lockup) is shown as
 *   an <img>. The SVG file is used exactly as authored. No CSS filters,
 *   no inline-style overrides, no class-level fill rewrites.
 * - In Arabic: the lockup is rendered as translated text (the SVG is
 *   the English wordmark, which doesn't belong in an Arabic context).
 *   "أوج" is the brand portion; the pillar word uses the pillar's
 *   mid color. AWJ-black on light surfaces, white on dark surfaces.
 *
 * Per brand guideline: the SVG files are FINAL and may not be modified,
 * redrawn, or recolored via any means. This component never reaches
 * inside the SVG markup.
 */

import { useLang } from '../i18n/LangContext';
import { PILLARS, type PillarId } from '../data/pillars';

type Variant = 'light' | 'onDark';

type Props = {
  pillarId: PillarId;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

type ArParts = { awj: string; pillar: string; order: 'awj-first' | 'pillar-first' };

const AR_PARTS: Record<PillarId, ArParts> = {
  academy: { awj: 'أوج', pillar: 'أكاديمية', order: 'pillar-first' },
  sustain: { awj: 'أوج', pillar: 'الاستدامة', order: 'awj-first' },
  innovation: { awj: 'أوج', pillar: 'الابتكار', order: 'awj-first' },
  systems: { awj: 'أوج', pillar: 'الأنظمة', order: 'awj-first' },
};

export const PillarLogo = ({
  pillarId,
  variant = 'light',
  className = '',
  ariaLabel,
}: Props) => {
  const { lang } = useLang();
  const pillar = PILLARS.find((p) => p.id === pillarId);
  if (!pillar) return null;

  if (lang === 'ar') {
    const { awj, pillar: pword, order } = AR_PARTS[pillarId];
    const wrapperCls =
      `pillar-wordmark-ar pw-${pillarId}` +
      (variant === 'onDark' ? ' on-dark' : '') +
      (className ? ' ' + className : '');
    const awjSpan = <span className="pw-awj" key="awj">{awj}</span>;
    const pillarSpan = <span className="pw-pillar" key="pillar">{pword}</span>;
    const children = order === 'pillar-first' ? [pillarSpan, awjSpan] : [awjSpan, pillarSpan];
    return (
      <span className={wrapperCls} role="img" aria-label={ariaLabel}>
        {children}
      </span>
    );
  }

  return (
    <img
      className={`pillar-logo-img${className ? ' ' + className : ''}`}
      src={pillar.logo}
      alt={ariaLabel ?? `AWJ ${pillar.name}`}
    />
  );
};
