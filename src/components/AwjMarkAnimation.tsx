/**
 * The AWJ Academy "angle asset" — the braided ribbon mark — animated: each
 * strand traces its outline (stroke wipe) and then fills in. Same technique,
 * timing and easing as the original AWJ mark animation. One-shot on mount.
 *
 * All styling (sizing, corner offset, and the per-strand draw-in timing) lives
 * in styles-v2.css under `.awj-mark-anim`; only data-driven SVG attributes
 * (path geometry and strand colours) live here. The strand order below must
 * stay in sync with the `nth-of-type` delay rules in the stylesheet.
 *
 * The artwork's paths run well beyond the artboard and are cropped by a clip
 * rect (the diagonal edge). The viewBox is tightened past the raw artboard to
 * trim the empty left column and the ribbon's frayed bottom edge.
 */
type Strand = { d: string; fill: string };

const STRANDS: Strand[] = [
  {
    // Outer ribbon
    d: 'M0,584.12h696.7S348.23,0,348.23,0l-75.81,127.09c-17.3,29.99-20.59,55.87-20.66,79.11,11.3-2.12,21.81-4.25,30.81-7.67.37-.15.74-.28,1.11-.43.84-17.13,4.5-34.78,16.15-55.07l48.4-81.14,292.64,490.52H55.42c18.58-31.49,50.54-85.43,64.1-106.95,15.9-25.25,37.46-42.51,59.59-57.93,5.26-3.66,10.55-7.23,15.81-10.76,4.7-3.16,9.44-6.35,14.14-9.61,22.43-15.51,44.15-32.72,58.81-57.58,16.7-28.33,17.09-53.73,16.26-78.2-10.11,2.95-20.51,4.89-30.47,6.73-.35.07-.71.13-1.06.2.39,18.97-.93,36.32-12.04,55.16-9.83,16.7-24.51,29.6-41.1,41.66-7.12,5.18-14.6,10.22-22.22,15.33-1.58,1.06-3.18,2.14-4.79,3.21-27.5,18.54-57.77,40-79.73,74.88-19.86,31.51-76.31,127.61-78.69,131.68l-14.03,23.89Z',
    fill: '#9d7dd1',
  },
  {
    // Inner ribbon
    d: 'M102,528.4h492.39S348.53,111.31,348.53,111.31l-13.79,22.41s-17.22,27.96-28.69,46.9c-5.09,8.4-12.84,13.71-22.37,17.48-.37.15-.74.28-1.11.43-8.99,3.42-19.51,5.56-30.81,7.67-1.28.24-2.58.48-3.9.72-29.52,5.5-62.99,11.72-82.98,42.05-20.22,30.69-8.19,62.52,2.4,90.62,1.82,4.81,3.59,9.51,5.17,14.08,1.62-1.08,3.21-2.16,4.79-3.21,7.62-5.11,15.11-10.14,22.22-15.33-.84-2.27-1.69-4.5-2.53-6.73-10.46-27.78-16.33-45.63-5.57-61.98,12.41-18.8,36.06-23.43,61.24-28.11.35-.07.71-.13,1.06-.2,9.96-1.84,20.36-3.77,30.47-6.73,19.21-5.63,37.31-14.94,49.05-34.34,4.5-7.43,9.9-16.28,14.79-24.25l190.93,323.89H157.63c13.88-23.47,34.19-57.88,43.03-73.09,11.2-19.29,11.91-38.29,8.4-56.43-4.7,3.25-9.44,6.45-14.14,9.61-5.26,3.53-10.55,7.1-15.81,10.76-.3,6.89-2.04,13.58-5.85,20.12-13.94,23.99-56.65,96.08-57.08,96.82l-14.18,23.93Z',
    fill: '#8f6bca',
  },
  {
    // Triangle
    d: 'M348.24,230.13l141.71,237.55H206.53s141.71-237.55,141.71-237.55ZM348.24,292.03l-85.87,143.95h171.75s-85.87-143.95-85.87-143.95Z',
    fill: '#b9a0de',
  },
  {
    // Accent notch
    d: 'M251.76,206.2c-.06,7.02.2,13.79.46,20.36.15,3.99.3,7.9.37,11.74.35-.07.71-.13,1.06-.2,9.96-1.84,20.36-3.77,30.47-6.73-.07-2.03-.15-4.01-.22-6.02-.35-9.16-.69-18.13-.22-27.26-.37.15-.74.28-1.11.43-8.99,3.42-19.51,5.56-30.81,7.67Z',
    fill: '#b9a0de',
  },
];

export const AwjMarkAnimation = ({ className }: { className?: string }) => (
  <svg
    className={`awj-mark-anim${className ? ' ' + className : ''}`}
    viewBox="82 16 254.45 416"
    aria-hidden="true"
  >
    <defs>
      <clipPath id="academy-angle-clip">
        <rect
          x="5.5"
          y="19.38"
          width="330.95"
          height="413.67"
          transform="translate(341.95 452.43) rotate(-180)"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#academy-angle-clip)">
      {STRANDS.map((s, i) => (
        <path key={i} d={s.d} fill={s.fill} stroke={s.fill} pathLength={1} />
      ))}
    </g>
  </svg>
);
