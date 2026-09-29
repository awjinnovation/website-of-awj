import { Cursor } from '../components/Cursor';
import { NavPill } from '../sections/NavPill';
import { Footer } from '../sections/Footer';
import { TimelineSection } from '../sections/TimelineSection';
import { AdvantagesValuesSection } from '../sections/AdvantagesValuesSection';
import { TEAM } from '../data/team';
import { useLang } from '../i18n/LangContext';
import { useEffect } from 'react';



export const AboutPage = () => {
  const { t } = useLang();

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
              <h1 className="about-title">{t('about.title')}</h1>
              <p className="hero-lede">{t('about.lede')}</p>
              <p className="about-hero-quote">{t('about.quote')}</p>
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

        {/* AWJ Evolution Timeline Section */}
        <TimelineSection accent="#7fe0d8" roadWidth={16} />

        {/* Our Competitive Advantages & Values Section */}
        <AdvantagesValuesSection />

        {/* Our People Section */}
        <section className="about-section about-people">
          <div className="container">
            <h2 className="about-section-title">Our People</h2>

            {/* Management Team */}
            <div className="team-group">
              <div className="team-group-container">
                <h3 className="team-group-title">Management Team</h3>
                <div className="team-grid">
                  {TEAM.management.map((member) => (
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
                  {TEAM.leaders.map((member) => (
                    <div key={member.name} className={`team-card team-card-accent team-card-${member.pillarId}`}>
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
                  {TEAM.members.map((member) => (
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
