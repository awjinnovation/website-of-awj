import { useEffect, type CSSProperties } from 'react';
import { Cursor } from '../components/Cursor';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { PILLARS, type PillarId } from '../data/pillars';

export const PillarPage = ({ pillarId }: { pillarId: PillarId }) => {
  useReveal();
  const pillar = PILLARS.find((p) => p.id === pillarId);
  const num = pillar ? PILLARS.indexOf(pillar) + 1 : 0;

  useEffect(() => {
    if (pillar) document.title = `AWJ ${pillar.name} — Coming soon`;
  }, [pillar]);

  if (!pillar) return null;

  const heroStyle: CSSProperties = {
    ['--pillar-accent' as string]: pillar.accent,
    ['--pillar-deep' as string]: pillar.deep,
  };

  return (
    <>
      <Cursor />
      <NavPill />
      <section className="pillar-hero" data-pillar={pillar.id} style={heroStyle}>
        <div className="pillar-hero-mesh" />
        <div className="container">
          <div className="pillar-hero-top">
            <a href="/" className="news-back">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M11 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to AWJ
            </a>
            <div className="pillar-hero-meta">
              Pillar · 0{num} / 04
            </div>
          </div>

          <h1 className="pillar-hero-title">
            <span className="awj">AWJ</span>
            <span className="sub">{pillar.name}</span>
          </h1>
          <p className="pillar-hero-lede">{pillar.desc}</p>

          <div className="pillar-soon">
            <div className="pillar-soon-tag">Pillar page</div>
            <div>
              <div className="pillar-soon-title">Coming soon.</div>
              <p className="pillar-soon-body">{pillar.blurb}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
