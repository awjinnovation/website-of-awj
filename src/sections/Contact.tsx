import { useState, type ReactNode } from 'react';
import { Magnetic } from '../components/Magnetic';
import { useLang } from '../i18n/LangContext';

type FormData = {
  pillar: string;
  name: string;
  email: string;
  org: string;
  message: string;
};

export const Contact = () => {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  // Honeypot: real users never see or fill this; bots do.
  const [botField, setBotField] = useState('');
  const [data, setData] = useState<FormData>({
    pillar: '',
    name: '',
    email: '',
    org: '',
    message: '',
  });
  const update = <K extends keyof FormData>(k: K, v: FormData[K]) =>
    setData((d) => ({ ...d, [k]: v }));

  const reset = () =>
    setData({ pillar: '', name: '', email: '', org: '', message: '' });

  const submit = async () => {
    setStatus('sending');
    setErrorMsg('');
    try {
      const res = await fetch('/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, company_website: botField }),
      });
      const json = await res.json().catch(() => ({ ok: res.ok }));
      if (res.ok && json.ok) {
        setStatus('sent');
        reset();
        setStep(0);
      } else {
        setStatus('error');
        setErrorMsg(json.error || t('contact.error'));
      }
    } catch {
      setStatus('error');
      setErrorMsg(t('contact.error'));
    }
  };

  const pillarOpts = [
    { id: 'academy', label: t('contact.pillar.academy.label'), color: '#9674ce' },
    { id: 'sustain', label: t('contact.pillar.sustain.label'), color: '#00a19d' },
    { id: 'innovation', label: t('contact.pillar.innovation.label'), color: '#ff6b00' },
    { id: 'systems', label: t('contact.pillar.systems.label'), color: '#0069c8' },
  ];
  const steps: { title: string; body: ReactNode }[] = [
    {
      title: t('contact.step1'),
      body: (
        <div className="wizard-options">
          {pillarOpts.map((p) => (
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
              </span>
            </button>
          ))}
        </div>
      ),
    },
    {
      title: t('contact.step3'),
      body: (
        <div className="wizard-fields">
          <input
            placeholder={t('contact.field.name')}
            value={data.name}
            onChange={(e) => update('name', e.target.value)}
          />
          <input
            placeholder={t('contact.field.email')}
            type="email"
            value={data.email}
            onChange={(e) => update('email', e.target.value)}
          />
          <input
            placeholder={t('contact.field.org')}
            value={data.org}
            onChange={(e) => update('org', e.target.value)}
          />
          <textarea
            placeholder={t('contact.field.message')}
            value={data.message}
            onChange={(e) => update('message', e.target.value)}
          />
        </div>
      ),
    },
    {
      title: t('contact.step4'),
      body: (
        <div className="wizard-summary">
          <div className="row">
            <div>{t('contact.summary.pillar')}</div>
            <div className="v">
              {pillarOpts.find((p) => p.id === data.pillar)?.label || t('contact.summary.dash')}
            </div>
          </div>
          <div className="row">
            <div>{t('contact.summary.name')}</div>
            <div className="v">{data.name || t('contact.summary.dash')}</div>
          </div>
          <div className="row">
            <div>{t('contact.summary.email')}</div>
            <div className="v">{data.email || t('contact.summary.dash')}</div>
          </div>
          <div className="row">
            <div>{t('contact.summary.org')}</div>
            <div className="v">{data.org || t('contact.summary.dash')}</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="contact" id="contact" data-screen-label="10 Contact">
      <div className="container contact-grid">
        <div className="reveal">
          <h2 className="contact-title">{t('contact.title')}</h2>
          <p className="lede">{t('contact.lede')}</p>
          <div className="contact-direct">
            <span className="contact-direct-label">{t('contact.callUs')}</span>
            <a className="contact-direct-phone" href="tel:+96893909693" dir="ltr">
              +968 9390 9693
            </a>
          </div>
        </div>
        <div className="reveal">
          <div className="wizard">
            {status === 'sent' ? (
              <div className="wizard-sent">
                <div className="wizard-sent-check" aria-hidden="true">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>{t('contact.thanks')}</h3>
                <p>{t('contact.sent.body')}</p>
                <button className="wizard-next" onClick={() => setStatus('idle')}>
                  {t('contact.title')}
                </button>
              </div>
            ) : (
              <>
                <div className="wizard-progress">
                  {steps.map((s, i) => (
                    <div
                      key={s.title}
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

                {/* Honeypot - hidden from real users. */}
                <input
                  type="text"
                  name="company_website"
                  className="honeypot"
                  tabIndex={-1}
                  autoComplete="off"
                  value={botField}
                  onChange={(e) => setBotField(e.target.value)}
                  aria-hidden="true"
                />

                {status === 'error' && <p className="wizard-error">{errorMsg}</p>}

                <div className="wizard-controls">
                  <button
                    className="wizard-back"
                    onClick={() => setStep((s) => Math.max(0, s - 1))}
                    disabled={step === 0 || status === 'sending'}
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
                    {t('contact.back')}
                  </button>
                  <Magnetic strength={0.2}>
                    <button
                      className="wizard-next"
                      disabled={status === 'sending'}
                      onClick={() => {
                        if (step < steps.length - 1) setStep((s) => s + 1);
                        else submit();
                      }}
                    >
                      {status === 'sending'
                        ? t('contact.sending')
                        : step < steps.length - 1
                          ? t('contact.continue')
                          : t('contact.send')}
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
