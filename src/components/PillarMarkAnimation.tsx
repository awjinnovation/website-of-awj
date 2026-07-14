import { useMemo } from 'react';
import type { PillarId } from '../data/pillars';

import sustainAngle from '../../public/assets/brand/Sustain-angle-asset.svg?raw';
import innovationAngle from '../../public/assets/brand/Innovation-angle-asset.svg?raw';
import systemsAngle from '../../public/assets/brand/Systems-angle-asset.svg?raw';

/**
 * Renders a pillar's angle asset spanning the hero, with the same looping
 * outline-draw + fill animation as the academy mark. The asset SVG is parsed at
 * runtime: each path is given a matching stroke and pathLength so the CSS draw
 * loop (.angle-mark path) can run, and the original markup (clip paths, groups
 * and colours) is injected as-is. Academy uses its own hardcoded component.
 */
const ANGLE_RAW: Partial<Record<PillarId, string>> = {
  sustain: sustainAngle,
  innovation: innovationAngle,
  systems: systemsAngle,
};

/** Per-pillar viewBox override to frame the visible content (some assets carry
 *  large empty margins in their native viewBox). Falls back to the asset's own
 *  viewBox when absent. */
const VIEWBOX: Partial<Record<PillarId, string>> = {
  innovation: '15 333 609 549',
};

type Parsed = { viewBox: string; inner: string };

const parseAngle = (raw: string): Parsed => {
  const doc = new DOMParser().parseFromString(raw, 'image/svg+xml');
  const svg = doc.querySelector('svg');
  const viewBox = svg?.getAttribute('viewBox') ?? '0 0 100 100';
  const vbWidth = parseFloat(viewBox.split(/\s+/)[2]) || 250;
  const strokeW = vbWidth / 250;

  // Resolve .cls-N { fill: #xxx } rules from the asset's <style> block, so the
  // stroke can match each path's fill regardless of how the colour is set.
  const classFill: Record<string, string> = {};
  const styleText = doc.querySelector('style')?.textContent ?? '';
  const re = /\.([\w-]+)\s*\{[^}]*fill:\s*([^;}\s]+)/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(styleText))) classFill[m[1]] = m[2];

  svg?.querySelectorAll('path').forEach((p) => {
    const cls = p.getAttribute('class');
    const styleFill = /fill:\s*(#[0-9a-fA-F]+)/.exec(p.getAttribute('style') ?? '')?.[1];
    const fill = styleFill || p.getAttribute('fill') || (cls ? classFill[cls] : '') || '#ffffff';
    if (fill === 'none') return;
    p.setAttribute('stroke', fill);
    p.setAttribute('stroke-width', String(strokeW));
    p.setAttribute('pathLength', '1');
  });

  return { viewBox, inner: svg?.innerHTML ?? '' };
};

export const PillarMarkAnimation = ({
  pillarId,
  className,
}: {
  pillarId: PillarId;
  className?: string;
}) => {
  const raw = ANGLE_RAW[pillarId];
  const parsed = useMemo(() => (raw ? parseAngle(raw) : null), [raw]);
  if (!parsed) return null;
  return (
    <svg
      className={`angle-mark${className ? ' ' + className : ''}`}
      viewBox={VIEWBOX[pillarId] ?? parsed.viewBox}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: parsed.inner }}
    />
  );
};
