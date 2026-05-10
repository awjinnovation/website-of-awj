/* Animated AWJ chevron mark — used in hero */
const AwjMark = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 388 243" preserveAspectRatio="xMidYMid meet">
    <polygon className="awj-line awj-line-1" points="262.28 242.85 207.99 168.24 154.17 242.83 .49 242.6 .51 221.6 143.44 221.81 204.26 137.52 211.6 137.52 288.27 242.85 262.28 242.85"></polygon>
    <polygon className="awj-line awj-line-2" points="311.53 242.85 207.99 100.61 133.71 203.56 72.34 162.98 .5 162.98 .5 141.97 78.66 141.97 128.48 174.91 204.26 69.88 211.6 69.88 337.52 242.85 311.53 242.85"></polygon>
    <polygon className="awj-line awj-line-3" points="361.97 242.85 208.06 31.42 86.54 202.55 .5 202.55 .5 181.54 75.7 181.54 204.25 .5 211.53 .5 387.96 242.85 361.97 242.85"></polygon>
  </svg>
);

/* Full AWJ lockup — chevron icon + AWJ wordmark, single color via currentColor */
const AwjLockup = ({ className = "", style = {} }) => (
  <svg className={className} style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 145.01" preserveAspectRatio="xMidYMid meet" fill="currentColor">
    <g>
      <path d="M112.28,110.65h-51.62l25.81-45.46,25.81,45.46ZM74.18,102.78h24.58l-12.29-21.64-12.29,21.64Z"/>
      <path d="M109.55,53.58c-2.52-.46-4.89-.91-6.95-1.57-.02,1.31-.07,2.62-.12,3.94-.05,1.38-.1,2.76-.11,4.16,1.92.5,3.87.86,5.75,1.2.72.13,1.44.27,2.14.4-.05-1.77.02-3.58.09-5.47.03-.82.06-1.65.09-2.5-.3-.06-.6-.11-.89-.17Z"/>
      <path d="M139.92,121.86c-.1-.17-9.88-16.67-13.07-22.17-1.02-1.76-1.38-3.59-1.29-5.49-.33-.22-.65-.44-.98-.66-2.07-1.39-4.16-2.8-6.19-4.3-1.08,4.57-1.19,9.5,1.66,14.41,1.97,3.39,6.42,10.93,9.59,16.29H43.38l43.2-73.28c1.05,1.71,2.17,3.55,3.12,5.12,3.01,4.96,7.75,7.08,12.67,8.34,1.92.5,3.87.86,5.75,1.2.72.13,1.44.27,2.14.4,5.12,1,9.45,2.2,11.93,5.95,2.35,3.57,1.09,7.53-1.2,13.65,2.06,1.65,4.31,3.2,6.61,4.76.21-.57.43-1.13.65-1.72,2.46-6.5,5.23-13.87.52-21.03-4.46-6.75-11.72-8.36-18.32-9.6-.3-.06-.6-.11-.89-.17-2.52-.46-4.89-.91-6.95-1.57-2.68-.87-4.84-2.13-6.16-4.31-2.63-4.34-6.57-10.74-6.57-10.74l-3.42-5.57L29.61,127.8h113.83l-3.52-5.94Z"/>
      <path d="M172.96,145.01H0L86.51,0l18.82,31.56c4.94,8.56,5.28,15.77,5.11,22.19-.3-.06-.6-.11-.89-.17-2.52-.46-4.89-.91-6.95-1.57.04-5.16-.53-10.34-4.07-16.5l-12.02-20.14L13.86,137.14h145.34c-4.61-7.82-12.55-21.21-15.92-26.55-4.65-7.38-11.25-12.01-17.73-16.39-.33-.22-.65-.44-.98-.66-2.07-1.39-4.16-2.8-6.19-4.3-4.59-3.38-8.87-7.21-11.92-12.38-3.54-6.01-4.12-11.48-4.09-16.74,1.92.5,3.87.86,5.75,1.2.72.13,1.44.27,2.14.4.1,3.75.73,7.33,2.98,11.14,1.94,3.3,4.64,5.99,7.74,8.46,2.06,1.65,4.31,3.2,6.61,4.76.46.31.91.61,1.37.92,7.13,4.79,15.22,10.23,20.99,19.39,4.93,7.82,18.94,31.68,19.54,32.69l3.48,5.93Z"/>
    </g>
    <g>
      <path d="M179.29,103.7l21.03-62.51c.09-.22.31-.35.53-.35h17.67c.22,0,.44.13.53.35l21.03,62.51c.09.31-.04.49-.35.49h-15.02c-.22,0-.44-.13-.53-.35l-3.09-9.98c-.09-.22-.31-.35-.53-.35h-21.69c-.22,0-.44.13-.53.35l-3.09,9.98c-.09.22-.31.35-.53.35h-15.07c-.31,0-.44-.18-.35-.49ZM202.8,81.25h13.78c.31,0,.44-.18.35-.49l-6.98-22.35c-.13-.44-.4-.44-.53,0l-6.98,22.35c-.09.31.04.49.35.49Z"/>
      <path d="M251.79,103.78l-12.02-62.47c-.04-.27.09-.49.4-.49h14.75c.27,0,.44.13.49.4l7.6,43.52c.09.4.4.4.49,0l9.41-43.52c.04-.27.22-.4.49-.4h13.61c.26,0,.44.13.49.4l9.32,43.25c.09.4.4.4.49,0l7.64-43.25c.04-.27.22-.4.49-.4h14.76c.31,0,.44.22.4.49l-12.02,62.47c-.04.27-.22.4-.49.4h-20.1c-.26,0-.44-.13-.49-.4l-7.07-36.49c-.09-.4-.44-.4-.53,0l-7.02,36.49c-.04.27-.22.4-.49.4h-20.1c-.26,0-.44-.13-.49-.4Z"/>
      <path d="M321.63,103.74v-12.33c0-.27.18-.44.44-.44h8.92c4.28,0,6.58-1.19,6.58-7.02v-42.68c0-.27.18-.44.44-.44h14.22c.27,0,.44.18.44.44v45.64c0,12.41-6.45,17.27-17.36,17.27h-13.25c-.27,0-.44-.18-.44-.44Z"/>
    </g>
  </svg>
);

const PILLARS = [
  {
    id: "academy",
    name: "Academy",
    accent: "var(--academy)",
    accent2: "var(--academy-2)",
    deep: "var(--academy-deep)",
    desc: "Knowledge, training, and capability building for the next generation of leaders.",
    blurb: "Education partnerships, accredited programs, and executive learning across disciplines.",
    icon: "assets/icon-academy.svg?v=3",
    logo: "assets/logo-academy.svg",
  },
  {
    id: "sustain",
    name: "Sustain",
    accent: "var(--sustain)",
    accent2: "var(--sustain-2)",
    deep: "var(--sustain-deep)",
    desc: "Environmental stewardship, ESG strategy, and regenerative infrastructure.",
    blurb: "Climate-positive solutions, carbon advisory, and sustainable supply chains.",
    icon: "assets/icon-sustain.svg",
    logo: "assets/logo-sustain.svg",
  },
  {
    id: "innovation",
    name: "Innovation",
    accent: "var(--innovation)",
    accent2: "var(--innovation-2)",
    deep: "var(--innovation-deep)",
    desc: "Venture building, R&D, and emerging technology incubated for real-world impact.",
    blurb: "Innovation labs, applied AI, deeptech ventures, and cross-sector partnerships.",
    icon: "assets/icon-innovation.svg",
    logo: "assets/logo-innovation.svg",
  },
  {
    id: "systems",
    name: "Systems",
    accent: "var(--systems)",
    accent2: "var(--systems-2)",
    deep: "var(--systems-deep)",
    desc: "Engineering, integration, and large-scale infrastructure delivery.",
    blurb: "Smart infrastructure, systems integration, mission-critical engineering.",
    icon: "assets/icon-systems.svg",
    logo: "assets/logo-systems.svg",
  },
];

window.AwjMark = AwjMark;
window.AwjLockup = AwjLockup;
window.PILLARS = PILLARS;
