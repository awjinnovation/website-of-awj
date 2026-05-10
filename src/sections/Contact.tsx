import { useState, type ReactNode } from 'react';
import { Magnetic } from '../components/Magnetic';

type FormData = {
  pillar: string;
  area: string;
  name: string;
  email: string;
  org: string;
  message: string;
};

const PILLARS_OPT = [
  { id: 'academy', label: 'AWJ Academy', sub: 'Capability building', color: '#9674ce' },
  { id: 'sustain', label: 'AWJ Sustain', sub: 'Climate & ESG', color: '#00a19d' },
  {
    id: 'innovation',
    label: 'AWJ Innovation',
    sub: 'Ventures & R&D',
    color: '#ff6b00',
  },
  { id: 'systems', label: 'AWJ Systems', sub: 'Engineering & infra', color: '#0069c8' },
];

const AREAS = [
  { id: 'advisory', label: 'Strategic advisory', sub: 'Group-level mandates' },
  { id: 'delivery', label: 'Project delivery', sub: 'Infrastructure / programs' },
  { id: 'partnership', label: 'Partnership / JV', sub: 'Co-build with us' },
  { id: 'press', label: 'Press / Media', sub: 'Editorial enquiry' },
];

export const Contact = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({
    pillar: '',
    area: '',
    name: '',
    email: '',
    org: '',
    message: '',
  });
  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const steps: { title: string; body: ReactNode }[] = [
    {
      title: 'Which pillar are you interested in?',
      body: (
        <div className="wizard-options">
          {PILLARS_OPT.map((p) => (
            <button
              key={p.id}
              className={`wizard-option ${data.pillar === p.id ? 'selected' : ''}`}
              onClick={() => {
                update('pillar', p.id);
                setTimeout(() => setStep(1), 180);
              }}
            >
              <span className="swatch" style={{ background: p.color }}></span>
              <span>
                <div className="label">{p.label}</div>
                <div className="sub">{p.sub}</div>
              </span>
            </button>
          ))}
        </div>
      ),
    },
    {
      title: "What's the area of engagement?",
      body: (
        <div className="wizard-options">
          {AREAS.map((a) => (
            <button
              key={a.id}
              className={`wizard-option ${data.area === a.id ? 'selected' : ''}`}
              onClick={() => {
                update('area', a.id);
                setTimeout(() => setStep(2), 180);
              }}
            >
              <span>
                <div className="label">{a.label}</div>
                <div className="sub">{a.sub}</div>
              </span>
            </button>
          ))}
        </div>
      ),
    },
    {
      title: 'Tell us about you.',
      body: (
        <div style={{ display: 'grid', gap: 8 }}>
          <input
            placeholder="Full name"
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
          />
          <input
            placeholder="Organisation (optional)"
            value={data.org}
            onChange={(e) => update('org', e.target.value)}
          />
          <textarea
            placeholder="Briefly, what would you like to discuss?"
            value={data.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>
      ),
    },
    {
      title: 'Ready to send.',
      body: (
        <div className="wizard-summary">
          <div className="row">
            <div>Pillar</div>
            <div className="v">
              {PILLARS_OPT.find((p) => p.id === data.pillar)?.label || '—'}
            </div>
          </div>
          <div className="row">
            <div>Area</div>
            <div className="v">
              {AREAS.find((a) => a.id === data.area)?.label || '—'}
            </div>
          </div>
          <div className="row">
            <div>Name</div>
            <div className="v">{data.name || '—'}</div>
          </div>
          <div className="row">
            <div>Email</div>
            <div className="v">{data.email || '—'}</div>
          </div>
          <div className="row">
            <div>Organisation</div>
            <div className="v">{data.org || '—'}</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="contact" id="contact" data-screen-label="10 Contact">
      <div className="container contact-grid">
        <div className="reveal">
          <h2 style={{ marginTop: 24 }}>Contact us</h2>
          <p className="lede">
            A short, structured intake helps us route your enquiry to the right pillar and
            partner. Most replies within two business days.
          </p>
        </div>
        <div className="reveal">
          <div className="wizard">
            <div className="wizard-progress">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`step ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`}
                >
                  <div className="fill"></div>
                </div>
              ))}
              <div className="wizard-step-label">
                {String(step + 1).padStart(2, '0')} /{' '}
                {String(steps.length).padStart(2, '0')}
              </div>
            </div>
            <h3>{steps[step].title}</h3>
            {steps[step].body}
            <div className="wizard-controls">
              <button
                className="wizard-back"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 12H5M12 19l-7-7 7-7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>
              <Magnetic strength={0.2}>
                <button
                  className="wizard-next"
                  onClick={() => {
                    if (step < steps.length - 1) setStep((s) => s + 1);
                    else {
                      alert("Thanks — we'll be in touch.");
                      setStep(0);
                      setData({
                        pillar: '',
                        area: '',
                        name: '',
                        email: '',
                        org: '',
                        message: '',
                      });
                    }
                  }}
                >
                  {step < steps.length - 1 ? 'Continue' : 'Send enquiry'}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
