import type { CSSProperties } from 'react';

type Props = { className?: string; style?: CSSProperties };

export const AwjMark = ({ className = '', style }: Props) => (
  <svg
    className={className}
    style={style}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 388 243"
    preserveAspectRatio="xMidYMid meet"
  >
    <polygon className="awj-line awj-line-1" points="262.28 242.85 207.99 168.24 154.17 242.83 .49 242.6 .51 221.6 143.44 221.81 204.26 137.52 211.6 137.52 288.27 242.85 262.28 242.85" />
    <polygon className="awj-line awj-line-2" points="311.53 242.85 207.99 100.61 133.71 203.56 72.34 162.98 .5 162.98 .5 141.97 78.66 141.97 128.48 174.91 204.26 69.88 211.6 69.88 337.52 242.85 311.53 242.85" />
    <polygon className="awj-line awj-line-3" points="361.97 242.85 208.06 31.42 86.54 202.55 .5 202.55 .5 181.54 75.7 181.54 204.25 .5 211.53 .5 387.96 242.85 361.97 242.85" />
  </svg>
);
