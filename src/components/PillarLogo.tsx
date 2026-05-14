/**
 * Inline pillar lockup ("AWJ {Pillar}") rendered as SVG so CSS can reach
 * inside it. The brand SVG files are NOT modified, just embedded.
 *
 * Color cases handled (per AWJ brand guide):
 *  - variant="light" (default): render exactly as authored. Icon in its
 *    three palette colors, "AWJ" in AWJ black, pillar wordmark in mid color.
 *  - variant="onDark": icon and pillar wordmark KEEP their authored colors;
 *    only the "AWJ" text turns white. This is enforced via the CSS rule
 *    `.pillar-logo.on-dark path:not([class]) { fill: #fff }` in styles-v2.css
 *    (AWJ letters are the only paths in the artwork that carry no class).
 *
 * Raw SVG content is imported at build time via Vite's ?raw query. No
 * runtime fetch.
 */

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
  const svg = LOGO_H[pillarId];
  const cls = `pillar-logo${variant === 'onDark' ? ' on-dark' : ''}${className ? ' ' + className : ''}`;
  return (
    <span
      className={cls}
      role={ariaLabel ? 'img' : undefined}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};
