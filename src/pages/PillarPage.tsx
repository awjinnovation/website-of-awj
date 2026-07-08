import { useEffect, type CSSProperties } from 'react';
import { Cursor } from '../components/Cursor';
import { PillarLogo } from '../components/PillarLogo';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { PILLARS, type PillarId } from '../data/pillars';
import { PILLAR_CONTENT } from '../data/pillar-content';
import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';

export const PillarPage = ({ pillarId }: { pillarId: PillarId }) => {
  const { t, lang } = useLang();
  useReveal();
  const pillar = PILLARS.find((p) => p.id === pillarId);
  const content = PILLAR_CONTENT[pillarId]?.[lang];

  useEffect(() => {
    if (pillar) document.title = `AWJ ${pillar.name}`;
  }, [pillar]);

  if (!pillar || !content) return null;

  const heroStyle: CSSProperties = {
    ['--pillar-accent' as string]: pillar.accent,
    ['--pillar-deep' as string]: pillar.deep,
  };

  return (
    <>
      <Cursor />
      <NavPill />
      <main className="pillar-page" style={heroStyle}>
        <section className="pillar-hero" data-pillar={pillar.id}>
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
                {t('pillarPage.back')}
              </a>
            </div>

            <h1 className="pillar-hero-title">
              <PillarLogo
                pillarId={pillar.id}
                variant="onDark"
                className="pillar-hero-logo"
                ariaLabel={t(`pillar.${pillarId}.fullName` as TranslationKey)}
              />
            </h1>
            <p className="pillar-hero-lede">{content.aboutTitle}</p>

            {content.contact.email && (
              <div className="pillar-hero-cta-row">
                <a className="pillar-cta-secondary" href={`mailto:${content.contact.email}`}>
                  {content.contact.email}
                </a>
              </div>
            )}
          </div>
        </section>

        <section className="pillar-section pillar-about reveal">
          <div className="container">
            <div className="pillar-section-head">
              <div className="eyebrow">{t('pillarPage.about')}</div>
            </div>
            <div className="pillar-about-body">
              {content.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <section className="pillar-section pillar-services reveal">
          <div className="container">
            <div className="pillar-section-head">
              <div className="eyebrow">{t('pillarPage.whatWeDo')}</div>
            </div>
            <div className="pillar-service-grid reveal-stagger">
              {content.services.map((s) => (
                <div key={s.title} className="pillar-service-card">
                  <h3 className="pillar-service-title">{s.title}</h3>
                  <p className="pillar-service-body">{s.body}</p>
                  {s.items && (
                    <ul className="pillar-service-items">
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
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
              <div className="eyebrow">{t('pillarPage.contact')}</div>
            </div>
            <div className="pillar-contact-grid">
              <div className="pillar-contact-info">
                {content.contact.email && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{t('pillarPage.contact.email')}</div>
                    <a className="pillar-contact-val" href={`mailto:${content.contact.email}`}>
                      {content.contact.email}
                    </a>
                  </div>
                )}
                {content.contact.phone && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{t('pillarPage.contact.phone')}</div>
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
                    <div className="pillar-contact-key">{t('pillarPage.contact.location')}</div>
                    <div className="pillar-contact-val">{content.contact.location}</div>
                  </div>
                )}
                {content.contact.social && content.contact.social.length > 0 && (
                  <div className="pillar-contact-row">
                    <div className="pillar-contact-key">{t('pillarPage.contact.social')}</div>
                    <div className="pillar-contact-val">
                      {content.contact.social.map((s, idx) => (
                        <span key={s.handle} className="pillar-social-item">
                          {idx > 0 && <span className="dot">·</span>}
                          {s.label}:{' '}
                          {s.url ? (
                            <a href={s.url} target="_blank" rel="noopener noreferrer">
                              <strong>{s.handle}</strong>
                            </a>
                          ) : (
                            <strong>{s.handle}</strong>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
