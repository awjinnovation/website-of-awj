import { Cursor } from '../components/Cursor';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { type PillarId } from '../data/pillars';
import React from 'react';

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
  return (
    <>
      <Cursor />
      <NavPill />
      <main className="about-page">
        {/* Hero Section with Overview */}
        <section className="about-hero">
          <div className="hero-overview-container">
            <div className="hero-graphic">
              <img
                src="/assets/brand/oman-network-map.png"
                alt="Oman Network Visualization"
                className="oman-map"
              />
            </div>
            <div className="hero-content">
              <h1 className="about-title">About AWJ</h1>
              <div className="content-block">
                <p className="about-text highlight">
                  <span className="font-bold">Creating a sustainable future.</span>
                </p>
              </div>
              <div className="content-block with-icon">
                <div className="block-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/>
                  </svg>
                </div>
                <p className="about-text">
                  The grand challenges of our world cannot be solved by resources alone, but by the capacity to innovate. When knowledge meets technology and humanity, ideas become reality, and opportunities transform into sustainable impact.
                </p>
              </div>
              <div className="content-block">
                <p className="about-text highlight">
                  <span className="font-bold">This is why AWJ exists.</span>
                </p>
              </div>
              <div className="content-block with-icon">
                <div className="block-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
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
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <div className="stat-number">98<span>+</span></div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-people-group"></i>
                </div>
                <div className="stat-number">49<span>+</span></div>
                <div className="stat-label">Partner Organizations</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-building"></i>
                </div>
                <div className="stat-number">3</div>
                <div className="stat-label">Business Units</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="stat-number">3<span>+</span></div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="about-section-title">Our Story</h2>
            <div className="story-timeline">
              <div className="timeline-item">
                <h3>The Beginning</h3>
                <p>Founded in 2020 with a vision to transform Oman's innovation landscape through locally-driven solutions that bridge global technology and regional needs.</p>
              </div>
              <div className="timeline-item">
                <h3>Growth & Expansion</h3>
                <p>Evolved into four specialized units - Innovation, Academy, Sustain, and Systems - each addressing specific development needs with excellence.</p>
              </div>
              <div className="timeline-item">
                <h3>Today & Beyond</h3>
                <p>From Knowledge Oasis Muscat, we lead transformation through innovative solutions and strategic partnerships for sustainable impact.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="about-section">
          <div className="container">
            <h2 className="about-section-title">Our Foundation</h2>

            <div className="mission-vision-grid">
              <div className="mission-box">
                <h3>Our Mission</h3>
                <p>AWJ Innovation develops an integrated knowledge ecosystem through capacity development, enhanced knowledge production, and building an interactive scientific community to ignite scientific curiosity, enhance dialogue, and contribute to creating impact, based on global expertise within a local context.</p>
                <div className="mission-pillars">
                  <span>Building Ecosystems</span>
                  <span>Knowledge Transfer</span>
                  <span>National Capabilities</span>
                </div>
              </div>

              <div className="vision-box">
                <h3>Our Vision</h3>
                <p>Leading transformation in capacity building, activating knowledge production, and empowering scientific communities</p>
                <div className="vision-pillars">
                  <span>Innovation Leadership</span>
                  <span>Economic Diversification</span>
                  <span>Regional Excellence</span>
                </div>
              </div>
            </div>

            <div className="values-section">
              <h3>Core Values</h3>
              <div className="values-grid">
                <div className="value-card">
                  <div className="value-letter">A</div>
                  <h4>Authentic</h4>
                  <p>Reflecting Oman's vision by enhancing local talents' capabilities to global standards—a commitment rooted in our heritage</p>
                </div>
                <div className="value-card">
                  <div className="value-letter">P</div>
                  <h4>Pioneering</h4>
                  <p>Breaking new ground, setting industry standards, fostering opportunities for growth, and taking the lead in shaping the future</p>
                </div>
                <div className="value-card">
                  <div className="value-letter">C</div>
                  <h4>Connecting</h4>
                  <p>Leveraging collective expertise to create valuable opportunities and deliver impactful solutions in the consultancy landscape</p>
                </div>
                <div className="value-card">
                  <div className="value-letter">E</div>
                  <h4>Emergent</h4>
                  <p>Leading by embracing emerging technologies to deliver cutting-edge solutions that set industry standards</p>
                </div>
              </div>
              <div className="additional-principles">
                <p>Working with clarity and high transparency</p>
                <p>Kindness in dealing with everyone and respecting their wishes</p>
                <p>Credibility, achieving agreed-upon goals, and delivering the best</p>
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
