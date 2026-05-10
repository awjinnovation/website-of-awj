const PARTNERS = [
  'MERIDIAN',
  'NORTHWIND',
  'Lumen Capital',
  'ATLAS Group',
  'VOLTA Energy',
  'Helix Labs',
];

export const Partners = () => (
  <section className="partners" data-screen-label="09 Partners">
    <div className="container">
      <div className="partners-head reveal">
        <div className="eyebrow">Partners &amp; clients</div>
        <h3>
          Working alongside{' '}
          <em style={{ fontStyle: 'italic', fontWeight: 200 }}>institutions</em>,
          governments, and industry leaders.
        </h3>
      </div>
      <div className="partners-row reveal">
        {PARTNERS.map((p) => (
          <div key={p}>{p}</div>
        ))}
      </div>
    </div>
  </section>
);
