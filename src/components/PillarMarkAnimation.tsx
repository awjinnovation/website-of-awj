import { useMemo, type CSSProperties } from 'react';
import type { PillarId } from '../data/pillars';

import academyIcon from '../../public/assets/brand/awj-academy-icon.svg?raw';
import sustainIcon from '../../public/assets/brand/awj-sustain-icon.svg?raw';
import innovationIcon from '../../public/assets/brand/awj-innovation-icon.svg?raw';
import systemsIcon from '../../public/assets/brand/awj-systems-icon.svg?raw';

/**
 * Animates a pillar's own brand icon with the same outline-draw + fill effect
 * as the academy hero mark. The icon SVG is parsed at runtime: fills come from
 * its `.cls-*` <style> rules, then each path traces its outline and fills in,
 * staggered. One-shot on mount.
 */
const ICON_RAW: Record<PillarId, string> = {
  academy: academyIcon,
  sustain: sustainIcon,
  innovation: innovationIcon,
  systems: systemsIcon,
};

const SPEED = 1;
const DRAW = 2.2 / SPEED; // outline draw time per piece
const FILL = 0.9 / SPEED; // fill fade time
const STEP = 0.55 / SPEED; // stagger between pieces

type Parsed = { viewBox: string; strokeWidth: number; paths: { d: string; fill: string }[] };

const parseIcon = (raw: string): Parsed => {
  const doc = new DOMParser().parseFromString(raw, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  const viewBox = svg?.getAttribute('viewBox') ?? '0 0 100 100';
  const width = parseFloat(viewBox.split(/\s+/)[2]) || 190;

  // Resolve the .cls-N { fill: #xxx } rules from the icon's <style> block.
  const classFill: Record<string, string> = {};
  const styleText = doc.querySelector('style')?.textContent ?? '';
  const re = /\.([\w-]+)\s*\{[^}]*fill:\s*([^;}\s]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(styleText))) classFill[m[1]] = m[2];

  const paths = Array.from(svg?.querySelectorAll('path') ?? [])
    .map((p) => {
      const cls = p.getAttribute('class');
      const inline = p.getAttribute('fill');
      const fill = inline || (cls ? classFill[cls] : '') || '#ffffff';
      return { d: p.getAttribute('d') ?? '', fill };
    })
    .filter((p) => p.d && p.fill !== 'none');

  return { viewBox, strokeWidth: width / 190, paths };
};

export const PillarMarkAnimation = ({
  pillarId,
  className,
}: {
  pillarId: PillarId;
  className?: string;
}) => {
  const { viewBox, strokeWidth, paths } = useMemo(
    () => parseIcon(ICON_RAW[pillarId]),
    [pillarId],
  );

  return (
    <svg
      className={`awj-mark-anim${className ? ' ' + className : ''}`}
      viewBox={viewBox}
      style={{ width: '100%', height: 'auto', overflow: 'visible', display: 'block' }}
      aria-hidden="true"
    >
      {paths.map((p, i) => (
        <path
          key={i}
          d={p.d}
          fill={p.fill}
          fillOpacity={0}
          pathLength={1}
          stroke={p.fill}
          strokeWidth={strokeWidth}
          style={
            {
              strokeDasharray: 1,
              strokeDashoffset: 1,
              animation:
                `awjOutline ${DRAW}s cubic-bezier(.45,.1,.35,.95) ${i * STEP}s forwards, ` +
                `awjFill ${FILL}s ease ${i * STEP + DRAW * 0.85}s forwards`,
            } as CSSProperties
          }
        />
      ))}
    </svg>
  );
};
