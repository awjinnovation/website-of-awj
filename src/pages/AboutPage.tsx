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
