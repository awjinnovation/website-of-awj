/* AWJ v2 — App root */
const App = () => {
  useReveal();

  // Drive --scroll-p (0..1) across the hero→stats handoff for the
  // chevron exit / stat column entry choreography.
  React.useEffect(() => {
    let raf = 0;
    const tick = () => {
      const hero = document.querySelector('.hero-v3');
      if (hero) {
        const h = hero.offsetHeight || 1;
        const y = window.scrollY;
        const p = Math.max(0, Math.min(1, y / h));
        document.documentElement.style.setProperty('--scroll-p', p.toFixed(4));
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <>
      <Cursor />
      <NavPill />
      <div id="top" />
      <div className="hero-stats-bridge">
        <Hero />
        <Stats />
      </div>
      <Marquee />
      <PillarsStack />
      <Services />
      <Projects />
      <News />
      <Success />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
};
ReactDOM.createRoot(document.getElementById('root')).render(<App />);
