import { Cursor } from '../components/Cursor';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { type PillarId } from '../data/pillars';
import React, { useEffect } from 'react';

type TeamMember = {
  name: string;
  title: string;
  department: string;
  description?: string;
  image: string;
  accentColor?: string;
  pillarId?: PillarId;
};

const MANAGEMENT_TEAM: TeamMember[] = [
  { name: 'Dr. Yousuf Al-Bulushi', title: 'Chief Executive Officer', department: 'Management', description: "Leading AWJ's strategic vision and fostering innovation across all business units", image: '/team/dr-yousef-albulushi.jpg' },
  { name: 'Dr. Nathan Pike', title: 'Senior Projects Director', department: 'Management', description: 'Technical leadership across all verticals and complex project solutions', image: '/team/nathan-pike.jpg' },
  { name: 'Ahmed Al Busaidi', title: 'Senior Director for Corporate Affairs', department: 'Management', description: "Managing partnerships and strengthening AWJ's market presence", image: '/team/ahmed-albusaidi.jpg' },
];

const BUSINESS_UNIT_LEADERS: TeamMember[] = [
  { name: 'Talib Al Abri', title: 'Head of AWJ Academy', department: 'Academy', description: 'Capacity Building & Training Programs', image: '/team/talib-alabri.jpg', accentColor: '#9674ce', pillarId: 'academy' },
  { name: 'Eng. Rawan Al Salmi', title: 'Head of AWJ Sustain', department: 'Sustain', description: 'Sustainability & Business Excellence', image: '/team/rawan-alsalmi.jpg', accentColor: '#00a19d', pillarId: 'sustain' },
  { name: 'Eng. Yousuf Al Ibrahim', title: 'Head of AWJ Innovation', department: 'Innovation', description: 'Strategic Innovation Consulting', image: '/team/yousef-alibrahim.jpg', accentColor: '#ff6b00', pillarId: 'innovation' },
  { name: 'Eng. Yousuf Al Mawali', title: 'Head of AWJ Systems', department: 'Systems', description: 'Technology Solutions & Platforms', image: '/team/placeholder.svg', accentColor: '#0069c8', pillarId: 'systems' },
];

const AWJ_TEAM: TeamMember[] = [
  { name: 'Mohammed Al Amri', title: 'Software Developer', department: 'Technical', image: '/team/mohammed-01.jpg' },
  { name: 'Zainab Al Musawi', title: 'Software Engineer', department: 'Technical', image: '/team/zainab-almawaswi.jpg' },
  { name: 'Mohammed Al Hashmi', title: 'Business Development Manager', department: 'Business Development', image: '/team/mohammed-alhashmi.jpg' },
  { name: 'Shahad Al Raisi', title: 'Business Development Executive', department: 'Business Development', image: '/team/shahed.jpg' },
  { name: 'Jawaher Al Kharusi', title: 'Business Development Coordinator', department: 'Business Development', image: '/team/jawaher-alkharusi.jpg' },
  { name: 'Maitha Al Wahaibi', title: 'Operations Coordinator', department: 'Operations', image: '/team/maitha-02.jpg' },
];

export const AboutPage = () => {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    // Observe timeline orbs
    const orbs = document.querySelectorAll('.timeline-orb-positioned');
    orbs.forEach((orb) => observer.observe(orb));

    // Observe case cards
    const caseCards = document.querySelectorAll('.case-card');
    caseCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <NavPill />
      <main className="about-page">
        {/* Hero Section with Overview */}
        <section className="about-hero">
          <div className="hero-overview-container">
            <div className="hero-content">
              <h1 className="about-title">About AWJ</h1>
              <div className="content-block">
                <p className="about-text highlight">
                  <span className="font-bold">Creating a sustainable future.</span>
                </p>
              </div>
              <div className="content-block">
                <p className="about-text">
                  The grand challenges of our world cannot be solved by resources alone, but by the capacity to innovate. When knowledge meets technology and humanity, ideas become reality, and opportunities transform into sustainable impact.
                </p>
              </div>
              <div className="content-block">
                <p className="about-text highlight">
                  <span className="font-bold">This is why AWJ exists.</span>
                </p>
              </div>
              <div className="content-block">
                <p className="about-text">
                  We work with governments, academic, and industrial institutions to build innovation ecosystems, develop capabilities, accelerate institutional transformation, and enable sustainability. By linking science, technology, and innovation with practical application, we help our partners achieve sustainable growth and create long-term value.
                </p>
              </div>
              <div className="content-block">
                <p className="about-text">
                  We believe that the future is not to be awaited, but to be created.
                </p>
              </div>
            </div>
            <div className="hero-graphic">
              <img
                src="/assets/brand/oman-network-map.png"
                alt="Oman Network Visualization"
                className="oman-map"
              />
            </div>
          </div>
        </section>

        {/* Our Journey Timeline Section */}
        <section className="about-section timeline-section timeline-dark">
          <div className="timeline-bg-asset">
            <img src="/assets/brand/bg-asset.png" alt="" className="bg-corner-asset" />
          </div>
          <div className="container timeline-container">
            <h2 className="about-section-title timeline-title">AWJ Evolution</h2>

            <nav className="journey-timeline-curve" aria-label="AWJ Company Timeline">
              <svg className="timeline-arrow-svg" viewBox="0 0 1000 350" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#c8d9a0" stopOpacity="1" />
                    <stop offset="50%" stopColor="#a0c8b8" stopOpacity="1" />
                    <stop offset="100%" stopColor="#6dd9e6" stopOpacity="1" />
                  </linearGradient>
                  <filter id="arrowGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M 50 280 Q 300 180, 550 120 T 950 80"
                      stroke="url(#arrowGradient)"
                      strokeWidth="28"
                      fill="none"
                      strokeLinecap="round"
                      filter="url(#arrowGlow)"
                      opacity="0.9"/>
                <polygon points="980,70 950,50 960,90"
                         fill="url(#arrowGradient)"
                         filter="url(#arrowGlow)"
                         opacity="0.9"/>
              </svg>

              <div className="timeline-curve-wrapper">
                <article className="timeline-orb-positioned orb-pos-2016" role="region" aria-label="2016: Foundation">
                  <div className="timeline-orb" aria-label="Year 2016">
                    <div className="orb-year">2016</div>
                  </div>
                  <div className="orb-label label-2016">
                    <p>Ministry of Foreign Affairs, Science & Technology Council</p>
                  </div>
                </article>

                <article className="timeline-orb-positioned orb-pos-2020" role="region" aria-label="2020: Founding and Growth">
                  <div className="timeline-orb" aria-label="Year 2020">
                    <div className="orb-year">2020</div>
                  </div>
                  <div className="orb-label label-2020">
                    <h3>AWJ Corporation Founded</h3>
                    <p>Dr. Yousuf Al Bulushi (Founder)</p>
                    <p>Hamoud Al Shikiri (Co-founder)</p>
                    <div className="pillars-compact" aria-label="Four Specialized Sectors">
                      <span>AWJ Systems</span>
                      <span>AWJ Innovation</span>
                      <span>AWJ Sustain</span>
                      <span>AWJ Academy</span>
                    </div>
                    <p className="endowment-compact"><strong>Endowment Fund:</strong> Sustainable technology & innovation</p>
                  </div>
                </article>

                <article className="timeline-orb-positioned orb-pos-2023" role="region" aria-label="2023: Transition">
                  <div className="timeline-orb" aria-label="Year 2023">
                    <div className="orb-year">2023</div>
                  </div>
                  <div className="orb-label label-2023">
                    <p>Administrative Transition to Private Company Structure</p>
                  </div>
                </article>

                <article className="timeline-orb-positioned orb-pos-2026" role="region" aria-label="2026: Future Vision">
                  <div className="timeline-orb" aria-label="Year 2026">
                    <div className="orb-year">2026</div>
                  </div>
                  <div className="orb-label label-2026">
                    <p>Continued growth and innovation leadership</p>
                  </div>
                </article>
              </div>
            </nav>
          </div>
        </section>

        {/* Our Competitive Advantages Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="about-section-title">Our Competitive Advantages</h2>
            <div className="advantages-list">
              <div className="advantage-item">
                <p>Deep understanding of local and regional market needs in innovation and tech entrepreneurship.</p>
              </div>
              <div className="advantage-item">
                <p>International advisory team.</p>
              </div>
              <div className="advantage-item">
                <p>Innovative solutions and services customized to the needs of each institution.</p>
              </div>
              <div className="advantage-item">
                <p>Global expertise in deploying the latest technologies.</p>
              </div>
              <div className="advantage-item">
                <p>Sustainable growth through world-class strategies and plans.</p>
              </div>
              <div className="advantage-item">
                <p>Transforming ideas into tangible reality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="about-section-title">Our Values</h2>
            <div className="values-list">
              <div className="value-item">
                <h3 className="value-name">Authenticity</h3>
                <p className="value-description">We reflect Oman's vision by enhancing local talent capabilities according to international standards, a commitment deeply rooted in our heritage.</p>
              </div>
              <div className="value-item">
                <h3 className="value-name">Collaboration & Communication</h3>
                <p className="value-description">We leverage collective expertise to create valuable opportunities and deliver impactful solutions in the consulting landscape.</p>
              </div>
              <div className="value-item">
                <h3 className="value-name">Innovation & Progress</h3>
                <p className="value-description">We embrace emerging technologies to stay ahead and deliver cutting-edge solutions that set industry benchmarks.</p>
              </div>
              <div className="value-item">
                <h3 className="value-name">Leadership</h3>
                <p className="value-description">We open new horizons, set industry benchmarks, and take the initiative to shape the future.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our People Section */}
        <section className="about-section about-people">
          <div className="container">
            <h2 className="about-section-title">Our People</h2>

            {/* Management Team */}
            <div className="team-group">
              <div className="team-group-container">
                <h3 className="team-group-title">Management Team</h3>
                <div className="team-grid">
                  {MANAGEMENT_TEAM.map((member) => (
                    <div key={member.name} className="team-card">
                      <div className="team-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">{member.name}</h4>
                        <p className="team-title">{member.title}</p>
                        {member.description && <p className="team-description">{member.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillars Leaders */}
            <div className="team-group">
              <div className="team-group-container team-group-leaders">
                <h3 className="team-group-title">Pillars Leaders</h3>
                <div className="team-grid team-grid-leaders">
                  {BUSINESS_UNIT_LEADERS.map((member) => (
                    <div key={member.name} className={`team-card team-card-accent team-card-${member.pillarId}`} style={{ '--accent': member.accentColor } as React.CSSProperties}>
                      <div className="team-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">{member.name}</h4>
                        <p className="team-title">{member.title}</p>
                        {member.description && <p className="team-description">{member.description}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AWJ Team */}
            <div className="team-group">
              <div className="team-group-container">
                <h3 className="team-group-title">AWJ Team</h3>
                <div className="team-grid">
                  {AWJ_TEAM.map((member) => (
                    <div key={member.name} className="team-card">
                      <div className="team-image">
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className="team-info">
                        <h4 className="team-name">{member.name}</h4>
                        <p className="team-title">{member.title}</p>
                        <p className="team-dept">{member.department}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
