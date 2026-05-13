import { useEffect, type CSSProperties } from 'react';
import { Cursor } from '../components/Cursor';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { PILLARS, type PillarId } from '../data/pillars';
import { PILLAR_CONTENT } from '../data/pillar-content';

export const PillarPage = ({ pillarId }: { pillarId: PillarId }) => {
  useReveal();
  const pillar = PILLARS.find((p) => p.id === pillarId);
  const content = PILLAR_CONTENT[pillarId];
  const num = pillar ? PILLARS.indexOf(pillar) + 1 : 0;

  useEffect(() => {
    if (pillar) document.title = `AWJ ${pillar.name}`;
  }, [pillar]);

  // Apply lang + dir on <html> for the duration of the page so fonts +
  // text alignment behave correctly for Arabic content. Reset on unmount
  // so the landing page comes back as ltr/English.
  useEffect(() => {
    if (!content) return;
    const html = document.documentElement;
    const prevLang = html.lang;
    const prevDir = html.dir;
    html.lang = content.lang;
    html.dir = content.lang === 'ar' ? 'rtl' : 'ltr';
    return () => {
      html.lang = prevLang || 'en';
      html.dir = prevDir || 'ltr';
    };
  }, [content]);

  if (!pillar || !content) return null;

  const heroStyle: CSSProperties = {
    ['--pillar-accent' as string]: pillar.accent,
    ['--pillar-deep' as string]: pillar.deep,
  };
  const isRtl = content.lang === 'ar';

  return (
    <>
      <Cursor />
      <NavPill />
      <main className={`pillar-page${isRtl ? ' pillar-page--rtl' : ''}`} style={heroStyle}>
        <section className="pillar-hero" data-pillar={pillar.id}>
          <div className="pillar-hero-mesh" />
          <div className="container">
            <div className="pillar-hero-top">
              <a href="/" className="news-back">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d={isRtl ? 'M5 12h14M13 6l6 6-6 6' : 'M19 12H5M11 18l-6-6 6-6'}
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {isRtl ? 'العودة إلى أوج' : 'Back to AWJ'}
              </a>
              <div className="pillar-hero-meta">
                {isRtl
                  ? `الركيزة · 0${num} / 04`
                  : `Pillar · 0${num} / 04`}
              </div>
            </div>

            <h1 className="pillar-hero-title">
              <span className="awj">AWJ</span>
              <span className="sub">{pillar.name}</span>
            </h1>
            <p className="pillar-hero-lede">{content.aboutTitle}</p>

            <div className="pillar-hero-cta-row">
              <a
                className="pillar-cta-primary"
                href={content.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.labels.cta} AWJ {pillar.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M7 17L17 7M17 7H8M17 7V16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              {content.contact.email && (
                <a className="pillar-cta-secondary" href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </a>
              )}
            </div>
          </div>
        </section>

        <section className="pillar-section pillar-about reveal">
          <div className="container">
            <div className="pillar-section-head">
              <div className="eyebrow">— {content.labels.about}</div>
            </div>
            <div className="pillar-about-body">
              {content.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="pillar-section pillar-services reveal">
          <div className="container">
            <div className="pillar-section-head">
              <div className="eyebrow">— {content.labels.whatWeDo}</div>
            </div>
            <div className="pillar-service-grid reveal-stagger">
              {content.services.map((s, i) => (
                <div key={i} className="pillar-service-card">
                  <div className="pillar-service-num">/ 0{i + 1}</div>
                  <h3 className="pillar-service-title">{s.title}</h3>
                  <p className="pillar-service-body">{s.body}</p>
                  {s.items && (
                    <ul className="pillar-service-items">
                      {s.items.map((it, j) => (
                        <li key={j}>{it}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pillar-section pillar-contact reveal">
          <div className="container">
            <div className="pillar-section-head">
              <div className="eyebrow">— {content.labels.contact}</div>
            </div>
            <div className="pillar-contact-grid">
              <div className="pillar-contact-info">
                {content.contact.email && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{content.labels.email}</div>
                    <a className="pillar-contact-val" href={`mailto:${content.contact.email}`}>
                      {content.contact.email}
                    </a>
                  </div>
                )}
                {content.contact.phone && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{content.labels.phone}</div>
                    <a
                      className="pillar-contact-val"
                      href={`tel:${content.contact.phone.replace(/\s+/g, '')}`}
                    >
                      {content.contact.phone}
                    </a>
                  </div>
                )}
                {content.contact.location && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{content.labels.location}</div>
                    <div className="pillar-contact-val">{content.contact.location}</div>
                  </div>
                )}
                {content.contact.social && content.contact.social.length > 0 && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{content.labels.social}</div>
                    <div className="pillar-contact-val">
                      {content.contact.social.map((s, i) => (
                        <span key={i} className="pillar-social-item">
                          {i > 0 && <span className="dot">·</span>}
                          {s.label}: <strong>{s.handle}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="pillar-contact-cta-block">
                <a
                  className="pillar-cta-primary"
                  href={content.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content.labels.cta} AWJ {pillar.name}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
