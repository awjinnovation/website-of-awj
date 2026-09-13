import { useEffect, useMemo, useRef, useState } from 'react';
import { AwjMarkAnimation } from '../components/AwjMarkAnimation';
import { PillarMarkAnimation } from '../components/PillarMarkAnimation';
import { Cursor } from '../components/Cursor';
import { PillarLogo } from '../components/PillarLogo';
import { useReveal } from '../hooks/useReveal';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { PILLARS, type PillarId } from '../data/pillars';
import { getPillarContent } from '../data/pillar-content';
import { PILLAR_ORGS, type OrgLogo } from '../data/pillar-partners';
import { useLang } from '../i18n/LangContext';
import type { TranslationKey } from '../i18n/dict';
import { withBase } from '../base-path';

/**
 * Core-services groups that render as a panel with a photographic backdrop,
 * keyed by pillar then by the group's index in `coreServices`. The value is
 * the `data-backdrop` slug the stylesheet keys the image off; groups with no
 * entry render plain, as they do on the other pillars.
 *
 * Indexed rather than keyed on the group heading so the Arabic pages, whose
 * services sit in a single untitled group, still get a backdrop.
 */
const SERVICE_BACKDROPS: Partial<Record<PillarId, Record<number, string>>> = {};

/**
 * Core Services backdrops that are a looping video rather than still bands.
 * Muted and inline so browsers allow autoplay; the poster covers the first
 * paint and is what shows when the visitor prefers reduced motion.
 */
const SERVICE_VIDEOS: Partial<Record<PillarId, { src: string; poster: string; slug: string }>> = {
  systems: {
    src: '/assets/video/systems-services.mp4',
    poster: '/assets/video/systems-services.jpg',
    slug: 'systems-services-poster',
  },
  innovation: {
    src: '/assets/video/innovation-services.mp4',
    poster: '/assets/video/innovation-services.jpg',
    slug: 'innovation-services-poster',
  },
  sustain: {
    src: '/assets/video/sustain-services.mp4',
    poster: '/assets/video/sustain-services.jpg',
    slug: 'sustain-services-poster',
  },
  academy: {
    src: '/assets/video/academy-services.mp4',
    poster: '/assets/video/academy-services.jpg',
    slug: 'academy-services-poster',
  },
};

/** Value Proposition backdrop per pillar, same `data-backdrop` mechanism as the
 *  services bands. Pillars with no entry render the section plain. */
const VALUE_BACKDROPS: Partial<Record<PillarId, string>> = {
  innovation: 'innovation-value',
};

/**
 * Core-service icons, as Font Awesome classes from the CDN stylesheet linked in
 * index.html. Keyed by the exact service name, so only the services listed here
 * show an icon and every one is distinct within its pillar.
 */
const SERVICE_ICONS: Record<string, string> = {
  // Innovation
  'Designing and managing innovative programs': 'fa-pen-ruler',
  'Transferring and localizing science, knowledge, and technology': 'fa-right-left',
  'Operating incubators and accelerators': 'fa-rocket',
  'Developing technology transfer offices': 'fa-building',
  'Organizing hackathons and challenges': 'fa-laptop-code',
  'Building national capacities': 'fa-people-group',
  'Strategic consulting': 'fa-chess-knight',
  'Intellectual property management': 'fa-copyright',
  'Developing corporate innovation ecosystems': 'fa-network-wired',

  // Systems
  Advise: 'fa-compass',
  Build: 'fa-code',
  Augment: 'fa-robot',
  'Venture Builder': 'fa-seedling',
  'Product Portfolio': 'fa-layer-group',
  'Advanced Research': 'fa-microscope',
  Commercialization: 'fa-money-bill-trend-up',

  // Sustain
  'Sustainability Strategy & Consulting': 'fa-leaf',
  'CSR Impact Measurement & Evaluation': 'fa-hand-holding-heart',
  'AI & Sustainability Data Tools': 'fa-brain',
  'Sustainability Reporting & Disclosure': 'fa-file-contract',
  'Renewable Energy & Climate Strategies': 'fa-solar-panel',
  'ISO Standards & International Certification': 'fa-certificate',
  'Sustainability Training & Capability Building': 'fa-chalkboard-user',
  'Change Management & Professional Accreditation': 'fa-arrows-spin',
  'Strategic Performance & Continuous Improvement': 'fa-gauge-simple-high',
  'Leadership Development & Executive Training': 'fa-user-tie',
  'Risk Management & Governance Frameworks': 'fa-scale-balanced',
  'Lean Six Sigma & Kaizen': 'fa-recycle',
  'Corporate Culture Assessment': 'fa-building-flag',

  // Academy
  'Training Programs': 'fa-person-chalkboard',
  'Knowledge Services': 'fa-book-open',
  'Scientific Events': 'fa-calendar-days',
  'Consulting Services': 'fa-clipboard-list',

  // The map is keyed on the rendered service name, so the Arabic names need
  // their own entries: without them every Arabic card loses its icon and the
  // icon column the card grid reserves, so the Arabic cards lay out
  // differently from the English ones. Each Arabic service carries the icon
  // of its English counterpart.
  // innovation (AR)
  'تصميم وإدارة البرامج الابتكارية': 'fa-pen-ruler',
  'نقل وتوطين العلوم والمعرفة والتكنولوجيا': 'fa-right-left',
  'تشغيل الحاضنات والمسرعات': 'fa-rocket',
  'تطوير مكاتب نقل التكنولوجيا': 'fa-building',
  'تنظيم الهاكاثونات والتحديات': 'fa-laptop-code',
  'بناء القدرات الوطنية': 'fa-people-group',
  'الاستشارات الاستراتيجية': 'fa-chess-knight',
  'إدارة الملكية الفكرية': 'fa-copyright',
  'تطوير منظومات الابتكار المؤسسي': 'fa-network-wired',

  // sustain (AR)
  'الاستراتيجية والاستشارات في الاستدامة': 'fa-leaf',
  'قياس وتقييم أثر المسؤولية الاجتماعية': 'fa-hand-holding-heart',
  'الذكاء الاصطناعي وأدوات بيانات الاستدامة': 'fa-brain',
  'إعداد تقارير الاستدامة والإفصاح': 'fa-file-contract',
  'الاستشارات في الطاقة المتجددة واستراتيجيات المناخ': 'fa-solar-panel',
  'تطبيق معايير الأيزو والاعتماد الدولي': 'fa-certificate',
  'التدريب وبناء القدرات في الاستدامة': 'fa-chalkboard-user',
  'إدارة التغيير والاعتماد المهني': 'fa-arrows-spin',
  'الأداء الاستراتيجي والتحسين المستمر': 'fa-gauge-simple-high',
  'تطوير القيادة والتدريب التنفيذي': 'fa-user-tie',
  'إدارة المخاطر وأطر الحوكمة': 'fa-scale-balanced',
  'Lean Six Sigma وكايزن': 'fa-recycle',
  'تقييم الثقافة المؤسسية': 'fa-building-flag',

  // academy (AR)
  'البرامج التدريبية': 'fa-person-chalkboard',
  'خدمات المعرفة': 'fa-book-open',
  'الفعاليات العلمية': 'fa-calendar-days',
  'خدمات الاستشارات': 'fa-clipboard-list',

  // systems (AR)
  'الاستشارة': 'fa-compass',
  'البناء': 'fa-code',
  'التعزيز': 'fa-robot',
  'بناء المشاريع': 'fa-seedling',
  'محفظة المنتجات': 'fa-layer-group',
  'البحث المتقدم': 'fa-microscope',
  'تحويل نتائج البحث': 'fa-money-bill-trend-up',
};

/**
 * Value-proposition icons, as Font Awesome classes served by the CDN
 * stylesheet already linked in index.html.
 *
 * Assigned per line rather than guessed from keywords: the old keyword rules
 * matched several lines to the same icon (Users three times on Academy,
 * ShieldCheck twice on Systems). Every line in a pillar gets a distinct icon.
 */
const VALUE_ICONS: Record<string, string> = {
  // Academy
  'A blend of local expertise and global practices': 'fa-globe',
  'An elite group of widely experienced experts and consultants': 'fa-user-tie',
  'A commitment to tangible, measurable results': 'fa-bullseye',
  'Accredited programs aligned with future jobs and labor-market needs': 'fa-graduation-cap',
  'An interactive environment combining international expertise and local context': 'fa-comments',
  'Sustainable strategic partnerships': 'fa-handshake',

  // Innovation
  'Enabling entities to build sustainable innovation ecosystems': 'fa-diagram-project',
  'Accelerating the transformation of ideas into actionable projects': 'fa-arrows-rotate',
  'Enhancing future readiness': 'fa-rocket',
  "Upgrading national talents' efficiency": 'fa-users-gear',
  'Achieving tangible economic and developmental impact': 'fa-arrow-trend-up',

  // Sustain
  'Transforming sustainability into a competitive advantage': 'fa-trophy',
  'Enhancing compliance and risk management': 'fa-shield-halved',
  'Improving institutional and operational performance': 'fa-gauge-high',
  'Supporting data-driven decision making': 'fa-database',
  'Boosting reputation and investment attractiveness': 'fa-award',

  // Systems
  'Systems that withstand rigorous scrutiny': 'fa-shield-halved',
  'Rapid delivery without compromising institutional stability': 'fa-bolt',
  'Locally engineered national infrastructure that respects digital data residency laws':
    'fa-server',
  'A cumulative technical advantage from R&D that puts clients at the frontier of what is possible':
    'fa-lightbulb',
  // innovation (AR)
  'تمكين الجهات من بناء منظومات ابتكار مستدامة': 'fa-diagram-project',
  'تسريع تحويل الأفكار إلى مشاريع قابلة للتنفيذ': 'fa-arrows-rotate',
  'تعزيز الجاهزية المستقبلية': 'fa-rocket',
  'رفع كفاءة الكفاءات الوطنية': 'fa-users-gear',
  'تحقيق أثر اقتصادي وتنموي ملموس': 'fa-arrow-trend-up',

  // sustain (AR)
  'تحويل الاستدامة إلى ميزة تنافسية': 'fa-trophy',
  'تعزيز الامتثال وإدارة المخاطر': 'fa-shield-halved',
  'تحسين الأداء المؤسسي والتشغيلي': 'fa-gauge-high',
  'دعم اتخاذ القرار المبني على البيانات': 'fa-database',
  'تعزيز السمعة والجاذبية الاستثمارية': 'fa-award',

  // academy (AR)
  'مزيج من الخبرات المحلية والممارسات العالمية': 'fa-globe',
  'نخبة من الخبراء والاستشاريين ذوي الخبرة الواسعة': 'fa-user-tie',
  'التزام بتحقيق نتائج ملموسة وقابلة للقياس': 'fa-bullseye',
  'برامج معتمدة متوائمة مع وظائف المستقبل واحتياجات سوق العمل': 'fa-graduation-cap',
  'بيئة تفاعلية تجمع بين الخبرة الدولية والسياق المحلي': 'fa-comments',
  'بناء شراكات استراتيجية مستدامة': 'fa-handshake',

  // systems (AR)
  'أنظمة تصمد أمام التدقيق الصارم': 'fa-shield-halved',
  'سرعة في الإنجاز دون المساس بالاستقرار المؤسسي': 'fa-bolt',
  'بنية تحتية وطنية مهندَسة محليًا تحترم قوانين الإقامة الرقمية للبيانات': 'fa-server',
  'ميزة تقنية تراكمية من البحث والتطوير تضع العملاء على حدود ما هو ممكن': 'fa-lightbulb',
};

/** Drawn on for lines not in the map above, and to break any collision, so a
 *  pillar never shows the same icon twice even if the copy changes. */
const VALUE_ICON_POOL = [
  'fa-star',
  'fa-circle-check',
  'fa-compass',
  'fa-gears',
  'fa-chart-line',
  'fa-cube',
  'fa-layer-group',
  'fa-seedling',
];

/** Resolve one icon per line, guaranteeing no repeats within the list. */
const assignValueIcons = (items: string[]): string[] => {
  const used = new Set<string>();
  return items.map((text) => {
    let icon = VALUE_ICONS[text];
    if (!icon || used.has(icon)) icon = VALUE_ICON_POOL.find((c) => !used.has(c)) ?? 'fa-star';
    used.add(icon);
    return icon;
  });
};

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

/** A wall of client or partner logos, each plated on a light card so marks with
 *  transparent backgrounds and marks baked onto white both read on the dark
 *  page. The organisation name is the accessible label, not visible text. */
const OrgWall = ({ title, logos }: { title: string; logos: OrgLogo[] }) => (
  <div className="pillar-org-group">
    <h3 className="pillar-group-title">{title}</h3>
    <div className="pillar-org-grid reveal-stagger">
      {logos.map((o) => (
        <div key={o.src} className="pillar-org-card" title={o.name}>
          <img src={o.src} alt={o.name} loading="lazy" decoding="async" />
        </div>
      ))}
    </div>
  </div>
);

/**
 * A paragraph that shows its opening lines and expands in place for the rest,
 * behind a Read more toggle with a chevron.
 *
 * The toggle only appears when the text actually overflows its clamp, measured
 * from the rendered element rather than from a character count, so it stays
 * correct across viewport widths and translations. Nothing is truncated in the
 * markup: the full text is always present for search and screen readers.
 *
 * Renders a fragment so the caller decides the surrounding element, letting
 * both the impact cards and the service-card descriptions share it.
 */
const ExpandableText = ({ text, className }: { text: string; className?: string }) => {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Only meaningful while clamped; expanding makes the two heights equal.
    const measure = () => {
      if (!open) setOverflows(el.scrollHeight > el.clientHeight + 2);
    };
    measure();
    // Web fonts change the line count after first paint, and the clamped box
    // keeps its height throughout, so ResizeObserver alone never re-fires and
    // text that fit in the fallback font would stay silently truncated.
    document.fonts?.ready.then(measure).catch(() => {});
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  return (
    <>
      <p ref={ref} className={[className, open ? '' : 'is-clamped'].filter(Boolean).join(' ')}>
        {text}
      </p>
      {(overflows || open) && (
        <button
          type="button"
          className="pillar-readmore"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {t(open ? 'pillarPage.showLess' : 'pillarPage.readMore')}
        </button>
      )}
    </>
  );
};

/** Impact note: the copy is fixed and can run long (the Jadeer note is 615
 *  characters), so it collapses to its opening lines. */
const ImpactCard = ({ text }: { text: string }) => (
  <div className="pillar-impact-card">
    <ExpandableText text={text} />
  </div>
);

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
  const content = getPillarContent(pillarId, lang);

  useEffect(() => {
    if (pillar) document.title = `AWJ ${pillar.name}`;
  }, [pillar]);

  if (!pillar || !content) return null;

  const fullName = t(`pillar.${pillarId}.fullName` as TranslationKey);

  // Clients & Partners is a logo wall only. The `clients` text list in
  // pillar-content is intentionally not rendered here.
  const orgs = PILLAR_ORGS[pillarId];
  const valueIcons = assignValueIcons(content.valueProposition ?? []);

  // One backdrop band per core-services group that has an image. Rendered as a
  // full-bleed layer behind the whole section rather than inside each group, so
  // the imagery reads as the section's background.
  const serviceBands = content.coreServices
    .map((_, gi) => SERVICE_BACKDROPS[pillarId]?.[gi])
    .filter((slug): slug is string => Boolean(slug));
  const serviceVideo = SERVICE_VIDEOS[pillarId];

  return (
    <>
      <Cursor />
      <NavPill />
      <main
        className={`pillar-page${lang === 'ar' ? ' pillar-page--rtl' : ''}`}
        data-pillar={pillar.id}
      >
        {/* ===== Hero: definition ===== */}
        <section className="pillar-hero" data-pillar={pillar.id}>
          <div className="pillar-hero-mesh" />
          <div className="container">
            <div className="pillar-hero-top">
              <a href={withBase('/')} className="news-back">
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

            <div className="pillar-hero-grid has-visual">
              <div className="pillar-hero-content">
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

              <div className="pillar-hero-visual" aria-hidden="true">
                <div className="pillar-hero-mark-wrap">
                  {pillar.id === 'academy' ? (
                    <AwjMarkAnimation />
                  ) : (
                    <PillarMarkAnimation pillarId={pillar.id} />
                  )}
                </div>
              </div>
            </div>
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
                <div className="pillar-impact-notes reveal-stagger">
                  {content.impactNotes.map((p, i) => (
                    <ImpactCard key={i} text={p} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ===== Core Services ===== */}
        <section
          className="pillar-section pillar-services reveal"
          data-has-backdrop={serviceVideo || serviceBands.length > 0 ? '' : undefined}
        >
          {serviceVideo ? (
            <div className="pillar-section-backdrop" aria-hidden="true">
              {/* Poster sits underneath so there is never a blank frame before
                  the video decodes, and it is what remains when the video is
                  suppressed for reduced motion. */}
              <div className="pillar-section-band" data-backdrop={serviceVideo.slug} />
              <video
                className="pillar-section-video"
                src={serviceVideo.src}
                poster={serviceVideo.poster}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                tabIndex={-1}
              />
            </div>
          ) : (
            serviceBands.length > 0 && (
              <div className="pillar-section-backdrop" aria-hidden="true">
                {serviceBands.map((slug) => (
                  <div key={slug} className="pillar-section-band" data-backdrop={slug} />
                ))}
              </div>
            )
          )}
          <div className="container">
            <div className="pillar-section-head">
              <h2 className="pillar-section-title">{t('pillarPage.coreServices')}</h2>
            </div>
            <div className="pillar-service-groups">
              {content.coreServices.map((group, gi) => (
                <div key={group.group ?? gi} className="pillar-service-group">
                  {group.group && <h3 className="pillar-group-title">{group.group}</h3>}
                  <div className="pillar-service-grid reveal-stagger">
                    {group.items.map((it) => (
                      <div key={it.name} className="pillar-service-card">
                        {SERVICE_ICONS[it.name] && (
                          <span className="pillar-service-icon">
                            <i className={`fa-solid ${SERVICE_ICONS[it.name]}`} aria-hidden="true" />
                          </span>
                        )}
                        <h4 className="pillar-service-title">{it.name}</h4>
                        {it.desc && <ExpandableText text={it.desc} className="pillar-service-body" />}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Value Proposition ===== */}
        {content.valueProposition && content.valueProposition.length > 0 && (
          <section
            className="pillar-section pillar-value reveal"
            data-has-backdrop={VALUE_BACKDROPS[pillarId] ? '' : undefined}
          >
            {VALUE_BACKDROPS[pillarId] && (
              <div className="pillar-section-backdrop" aria-hidden="true">
                <div className="pillar-section-band" data-backdrop={VALUE_BACKDROPS[pillarId]} />
              </div>
            )}
            <div className="container">
              <div className="pillar-section-head">
                <h2 className="pillar-section-title">{t('pillarPage.value')}</h2>
              </div>
              <ul className="pillar-value-list reveal-stagger">
                {content.valueProposition.map((v, i) => (
                  <li key={v}>
                    <span className="pillar-value-icon">
                      <i className={`fa-solid ${valueIcons[i]}`} aria-hidden="true" />
                    </span>
                    <span>{v}</span>
                  </li>
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
        {(orgs.clients?.length || orgs.partners?.length) && (
          <section className="pillar-section pillar-clients reveal">
            <div className="container">
              <div className="pillar-section-head">
                <h2 className="pillar-section-title">{t('pillarPage.clients')}</h2>
              </div>
              {orgs.clients && orgs.clients.length > 0 && (
                <OrgWall title={t('pillarPage.clients.clients')} logos={orgs.clients} />
              )}
              {orgs.partners && orgs.partners.length > 0 && (
                <OrgWall title={t('pillarPage.clients.partners')} logos={orgs.partners} />
              )}
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
