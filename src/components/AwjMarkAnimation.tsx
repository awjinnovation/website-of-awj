/**
 * The AWJ Academy "angle asset" — the braided ribbon mark — animated: each
 * strand traces its outline (stroke wipe) and then fills in, looping. Ported
 * verbatim from public/assets/brand/Academy-angle-asset.svg.
 *
 * All styling (sizing, positioning, and the looping per-strand draw-in timing)
 * lives in styles-v2.css under `.angle-mark`; only data-driven SVG
 * attributes (path geometry and strand colours) live here. The strand order
 * below is the artwork's paint order (triangle behind, ribbons in front) and
 * must stay in sync with the `nth-of-type` delay rules in the stylesheet.
 *
 * The artwork's paths run well beyond the artboard and are cropped by a clip
 * rect (the diagonal edge). The viewBox is tightened past the raw artboard to
 * trim the empty left column.
 */
type Strand = { d: string; fill: string };

const STRANDS: Strand[] = [
  {
    // Triangle
    d: 'M348.74,220.63l147.79,248.68H200.95s147.79-248.68,147.79-248.68ZM348.74,285.42l-89.56,150.69h179.11s-89.56-150.69-89.56-150.69Z',
    fill: '#b9a0de',
  },
  {
    // Outer ribbon
    d: 'M348.73-20.29l-79.06,133.04c-18.04,31.39-21.47,58.49-21.55,82.82,11.78-2.22,22.75-4.45,32.13-8.03.39-.16.78-.29,1.16-.45.87-17.93,4.69-36.41,16.84-57.65l50.48-84.94,305.19,513.5H43.37c19.38-32.97,52.71-89.43,66.85-111.96,16.59-26.43,39.06-44.5,62.14-60.65,5.48-3.83,11.01-7.57,16.49-11.26,4.9-3.31,9.84-6.65,14.75-10.06,23.39-16.24,46.04-34.25,61.33-60.28,17.42-29.66,17.83-56.25,16.96-81.87-10.54,3.09-21.39,5.12-31.78,7.04-.37.08-.74.14-1.1.21.41,19.86-.97,38.03-12.56,57.75-10.25,17.49-25.56,30.98-42.86,43.61-7.42,5.43-15.23,10.7-23.17,16.05-1.65,1.11-3.31,2.24-5,3.36-28.68,19.41-60.24,41.88-83.15,78.39C61.54,461.33,2.68,561.93.2,566.19l-14.63,25.01h726.59L348.73-20.29Z',
    fill: '#9d7dd1',
  },
  {
    // Inner ribbon
    d: 'M349.04,96.24l-14.38,23.46s-17.96,29.27-29.92,49.09c-5.31,8.79-13.39,14.35-23.33,18.3-.39.16-.78.29-1.16.45-9.38,3.58-20.35,5.82-32.13,8.03-1.34.25-2.69.51-4.07.76-30.79,5.76-65.69,12.27-86.54,44.02-21.08,32.13-8.54,65.45,2.5,94.86,1.9,5.04,3.74,9.96,5.39,14.74,1.69-1.13,3.35-2.26,5-3.36,7.94-5.35,15.75-10.62,23.17-16.05-.87-2.37-1.76-4.71-2.64-7.04-10.91-29.08-17.03-47.77-5.81-64.89,12.94-19.68,37.61-24.53,63.87-29.43.37-.08.74-.14,1.1-.21,10.39-1.93,21.24-3.95,31.78-7.04,20.04-5.89,38.91-15.64,51.16-35.94,4.69-7.78,10.33-17.04,15.42-25.38l199.12,339.06H149.96c14.47-24.57,35.65-60.59,44.88-76.52,11.68-20.19,12.42-40.09,8.76-59.07-4.9,3.4-9.84,6.75-14.75,10.06-5.48,3.7-11.01,7.43-16.49,11.26-.31,7.22-2.13,14.22-6.1,21.07-14.53,25.11-59.08,100.58-59.53,101.36l-14.78,25.05h513.52L349.04,96.24Z',
    fill: '#8f6bca',
  },
];

export const AwjMarkAnimation = ({ className }: { className?: string }) => (
  <svg
    className={`angle-mark${className ? ' ' + className : ''}`}
    viewBox="78 0 258.45 431.9"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="academy-angle-clip">
        <rect
          x="77.9"
          y="0"
          width="258.55"
          height="433.05"
          transform="translate(414.35 433.05) rotate(-180)"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#academy-angle-clip)">
      {STRANDS.map((s, i) => (
        <path key={i} d={s.d} fill={s.fill} stroke={s.fill} strokeWidth={1.2} pathLength={1} />
      ))}
    </g>
  </svg>
);
