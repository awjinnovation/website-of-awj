import { Magnetic } from '../components/Magnetic';

const PILLAR_LOGOS = [
  { id: 'academy', name: 'Academy', logo: '/assets/logo-academy-onDark.svg' },
  { id: 'sustain', name: 'Sustain', logo: '/assets/logo-sustain-onDark.svg' },
  { id: 'innovation', name: 'Innovation', logo: '/assets/logo-innovation-onDark.svg' },
  { id: 'systems', name: 'Systems', logo: '/assets/logo-systems-onDark.svg' },
] as const;

export const Hero = () => {
  return (
    <section className="hero-v3" data-screen-label="01 Hero">
      <div className="hero-mesh"></div>
      <div className="hero-grain"></div>

      <div className="hero-v3-inner">
        <div className="hero-v3-left">
          <div className="hero-eyebrow reveal-up">
            <span className="dot"></span>
            Sustainable technologies & innovation development Co.
          </div>
          <h1 className="hero-headline">
            <span className="line reveal-up" style={{ animationDelay: '0.1s' }}>
              Bridge,
            </span>
            <span className="line reveal-up" style={{ animationDelay: '0.2s' }}>
              Empower,
            </span>
            <span className="line reveal-up ital" style={{ animationDelay: '0.3s' }}>
              Accelerate.
            </span>
          </h1>
          <p className="hero-lede reveal-up" style={{ animationDelay: '0.45s' }}>
            AWJ bridges the gaps in Oman's innovation ecosystem — accelerating sustainable
            technologies, empowering young Omani talent, and building the institutions that
            turn opportunity into national wealth.
          </p>
          <div className="hero-ctas reveal-up" style={{ animationDelay: '0.55s' }}>
            <Magnetic strength={0.3}>
              <a href="#contact" className="hero-cta-primary">
                Get in touch
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </Magnetic>
            <a href="#pillars" className="hero-cta-secondary">
              Explore the group
            </a>
          </div>
        </div>

        <div className="hero-v3-right">
          <svg
            className="hero-watermark"
            viewBox="0 0 876.22 539.3"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <polygon
              className="awj-chev awj-chev-1"
              fill="rgba(255,255,255,0.06)"
              points="-7.42 214.36 -7.42 274.18 160.4 274.18 525.95 500.86 716.89 500.86 858.21 334.94 990.48 471.02 1033.37 429.32 855.29 246.11 689.26 441.04 542.99 441.04 177.44 214.36 -7.42 214.36"
            />
            <polygon
              className="awj-chev awj-chev-2"
              fill="rgba(255,255,255,0.10)"
              points="691.05 262.56 623.08 214.36 381.78 214.36 156.48 441.04 -3.09 441.04 -3.09 500.86 181.37 500.86 406.66 274.18 604.02 274.18 700.17 342.36 959.45 50.48 914.73 10.75 691.05 262.56"
            />
            <polygon
              className="awj-chev awj-chev-3"
              fill="rgba(255,255,255,0.14)"
              points="834.22 -46.35 495.86 327.7 155.03 327.7 -.56 187.72 -40.57 232.19 132.08 387.52 522.36 387.52 878.53 -6.16 834.22 -46.35"
            />
          </svg>
          <div className="hero-pillar-chips">
            <div className="chips-label">Pillars</div>
            <div className="chips-row">
              {PILLAR_LOGOS.map((p, i) => (
                <a
                  key={p.id}
                  href={'#' + p.id}
                  className="chip chip-logo reveal-up"
                  style={{ animationDelay: `${0.6 + i * 0.08}s` }}
                >
                  <img src={p.logo} alt={`AWJ ${p.name}`} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
