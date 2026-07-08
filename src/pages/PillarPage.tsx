import { useEffect, useMemo, useRef, useState, type CSSProperties } from 'react';
import { Cursor } from '../components/Cursor';
import { PillarLogo } from '../components/PillarLogo';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { PILLARS, type PillarId } from '../data/pillars';
import { PILLAR_CONTENT } from '../data/pillar-content';
import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';

/** Split a stat like "6,600+", "95%" or "1st" into a number + trailing text.
 *  Returns null for non-numeric values ("Best Award") so they render as-is. */
const parseStat = (value: string) => {
  const m = value.match(/^\s*([\d.,]+)(.*)$/s);
  if (m) {
    const numeric = Number(m[1].replace(/,/g, ''));
    if (Number.isFinite(numeric)) {
      return { numeric, suffix: m[2], grouped: m[1].includes(',') };
    }
  }
  return null;
};

/** Count-up + idle pulse number, mirroring the home Stats band behaviour. */
const PillarStat = ({ value, index }: { value: string; index: number }) => {
  const parsed = useMemo(() => parseStat(value), [value]);
  const [v, setV] = useState(0);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!parsed) {
      setDone(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const startDelay = Math.max(0, index) * 220;

    let raf = 0;
    let timer: number | undefined;
    const cancel = () => {
      if (timer) clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
      timer = undefined;
      raf = 0;
    };
    const startCount = () => {
      let t0: number | undefined;
      const step = (t: number) => {
        if (t0 === undefined) t0 = t;
        const k = Math.min(1, (t - t0) / 1500);
        setV(Math.round(parsed.numeric * (1 - Math.pow(1 - k, 3))));
        if (k < 1) raf = requestAnimationFrame(step);
        else setDone(true);
      };
      raf = requestAnimationFrame(step);
    };

    // Restart the count-up each time the grid re-enters view.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            cancel();
            setV(0);
            setDone(false);
            timer = window.setTimeout(startCount, startDelay);
          } else {
            cancel();
          }
        });
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancel();
    };
  }, [parsed, index]);

  return (
    <div className={'pillar-num-value' + (done ? ' is-pulsing' : '')} ref={ref}>
      {parsed ? (parsed.grouped ? v.toLocaleString('en-US') : String(v)) : value}
      {parsed &&
        parsed.suffix &&
        (/^(st|nd|rd|th)$/i.test(parsed.suffix.trim()) ? (
          <sup className="pillar-num-ord">{parsed.suffix}</sup>
        ) : (
          <span className="pillar-num-suffix">{parsed.suffix}</span>
        ))}
    </div>
  );
};

export const PillarPage = ({ pillarId }: { pillarId: PillarId }) => {
  const { t, lang } = useLang();
  useReveal();
  const pillar = PILLARS.find((p) => p.id === pillarId);
  const content = PILLAR_CONTENT[pillarId]?.[lang];

  useEffect(() => {
    if (pillar) document.title = `AWJ ${pillar.name}`;
  }, [pillar]);

  if (!pillar || !content) return null;

  const pillarStyle: CSSProperties = {
    ['--pillar-accent' as string]: pillar.accent,
    ['--pillar-deep' as string]: pillar.deep,
  };

  const fullName = t(`pillar.${pillarId}.fullName` as TranslationKey);

  return (
    <>
      <Cursor />
      <NavPill />
      <main
        className={`pillar-page${lang === 'ar' ? ' pillar-page--rtl' : ''}`}
        style={pillarStyle}
        data-pillar={pillar.id}
      >
        {/* ===== Hero: definition ===== */}
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
                ariaLabel={fullName}
              />
            </h1>
            <p className="pillar-hero-lede">{content.definition}</p>
          </div>
        </section>

        {/* ===== Numbers & Impact ===== */}
        {(content.numbers?.length || content.impactNotes?.length) && (
          <section className="pillar-section pillar-numbers reveal">
            <div className="container">
              <div className="pillar-section-head">
                <h2 className="pillar-section-title">{t('pillarPage.numbers')}</h2>
              </div>
              {content.numbers && content.numbers.length > 0 && (
                <div className="pillar-num-grid reveal-stagger">
                  {content.numbers.map((n, i) => (
                    <div key={n.label} className="pillar-num-card">
                      <PillarStat value={n.value} index={i} />
                      <div className="pillar-num-label">{n.label}</div>
                    </div>
                  ))}
                </div>
              )}
              {content.impactNotes && content.impactNotes.length > 0 && (
                <div className="pillar-impact-notes">
                  {content.impactNotes.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===== Core Services ===== */}
        <section className="pillar-section pillar-services reveal">
          <div className="container">
            <div className="pillar-section-head">
              <h2 className="pillar-section-title">{t('pillarPage.coreServices')}</h2>
            </div>
            {content.coreServices.map((group, gi) => (
              <div key={group.group ?? gi} className="pillar-service-group">
                {group.group && <h3 className="pillar-group-title">{group.group}</h3>}
                <div className="pillar-service-grid reveal-stagger">
                  {group.items.map((it) => (
                    <div key={it.name} className="pillar-service-card">
                      <h4 className="pillar-service-title">{it.name}</h4>
                      {it.desc && <p className="pillar-service-body">{it.desc}</p>}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== Value Proposition ===== */}
        {content.valueProposition && content.valueProposition.length > 0 && (
          <section className="pillar-section pillar-value reveal">
            <div className="container">
              <div className="pillar-section-head">
                <h2 className="pillar-section-title">{t('pillarPage.value')}</h2>
              </div>
              <ul className="pillar-value-list reveal-stagger">
                {content.valueProposition.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ===== Reference Works / Projects ===== */}
        {content.referenceWorks && content.referenceWorks.length > 0 && (
          <section className="pillar-section pillar-works reveal">
            <div className="container">
              <div className="pillar-section-head">
                <h2 className="pillar-section-title">{t('pillarPage.projects')}</h2>
              </div>
              <ul className="pillar-works-list reveal-stagger">
                {content.referenceWorks.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ===== Clients & Partners ===== */}
        {content.clients && content.clients.length > 0 && (
          <section className="pillar-section pillar-clients reveal">
            <div className="container">
              <div className="pillar-section-head">
                <h2 className="pillar-section-title">{t('pillarPage.clients')}</h2>
              </div>
              <div className="pillar-clients-grid reveal-stagger">
                {content.clients.map((c) => (
                  <span key={c} className="pillar-client-chip">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ===== Contact ===== */}
        <section className="pillar-section pillar-contact reveal">
          <div className="container">
            <div className="pillar-section-head">
              <h2 className="pillar-section-title">{t('pillarPage.contact')}</h2>
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
