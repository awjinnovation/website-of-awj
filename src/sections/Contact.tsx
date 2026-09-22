import { useState, type ChangeEvent, type ReactNode } from 'react';
import { Magnetic } from '../components/Magnetic';
import { useLang } from '../i18n/LangContext';
import { COMPANY_ADDRESS } from '../data/company';

type FormData = {
  pillar: string;
  name: string;
  email: string;
  org: string;
  message: string;
};

/** Good enough to catch a typo before the round trip; send.php still has the
 *  final say via filter_var, so this never rejects an address the server
 *  would have taken. */
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

/**
 * One wizard field.
 *
 * The label is a real <label>, and it sits over the input until there is
 * something in it, at which point it floats above as a caption. The old
 * placeholder-only version left a filled field with no visible name at all,
 * so anyone returning to the step (typically after a validation error) saw
 * two bare strings and had to guess which was which.
 *
 * `placeholder=" "` is load-bearing: the float is driven by
 * `:placeholder-shown`, so the single space must stay.
 *
 * Declared at module scope, not inside Contact: a component defined during
 * render is a new type every keystroke, which would remount the input and
 * drop focus mid-word.
 */
const Field = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = 'text',
  textarea = false,
  invalid = false,
  error,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  type?: string;
  textarea?: boolean;
  invalid?: boolean;
  error?: string;
  autoComplete?: string;
}) => {
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: id,
    value,
    placeholder: ' ',
    autoComplete,
    onBlur,
    'aria-invalid': invalid || undefined,
    'aria-describedby': invalid ? errorId : undefined,
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
  };
  return (
    <div className={`wizard-field${invalid ? ' is-invalid' : ''}`}>
      {textarea ? <textarea {...shared} /> : <input type={type} {...shared} />}
      <label htmlFor={id}>{label}</label>
      {invalid && error && (
        <p className="wizard-field-error" id={errorId}>
          {error}
        </p>
      )}
    </div>
  );
};

export const Contact = () => {
  const { t, lang } = useLang();
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
  // Which fields the visitor has actually left, so nothing is marked wrong
  // while they are still part-way through typing it.
  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean }>({});

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    // A stale "please provide a valid email" sitting under the form while the
    // visitor is fixing exactly that reads as though the fix did not register.
    if (errorMsg) {
      setErrorMsg('');
      setStatus('idle');
    }
  };

  const invalid = {
    name: data.name.trim() === '',
    email: !isEmail(data.email),
  };
  const detailsIncomplete = invalid.name || invalid.email;

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
    { id: 'innovation', label: t('contact.pillar.innovation.label') },
    { id: 'sustain', label: t('contact.pillar.sustain.label') },
    { id: 'systems', label: t('contact.pillar.systems.label') },
    { id: 'academy', label: t('contact.pillar.academy.label') },
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
              <span className="swatch" data-pillar={p.id}></span>
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
          <Field
            id="name"
            label={t('contact.field.name')}
            value={data.name}
            onChange={(v) => update('name', v)}
            onBlur={() => setTouched((s) => ({ ...s, name: true }))}
            invalid={Boolean(touched.name) && invalid.name}
            error={t('contact.err.name')}
            autoComplete="name"
          />
          <Field
            id="email"
            type="email"
            label={t('contact.field.email')}
            value={data.email}
            onChange={(v) => update('email', v)}
            onBlur={() => setTouched((s) => ({ ...s, email: true }))}
            invalid={Boolean(touched.email) && invalid.email}
            error={t('contact.err.email')}
            autoComplete="email"
          />
          <Field
            id="org"
            label={t('contact.field.org')}
            value={data.org}
            onChange={(v) => update('org', v)}
            autoComplete="organization"
          />
          <Field
            id="message"
            textarea
            label={t('contact.field.message')}
            value={data.message}
            onChange={(v) => update('message', v)}
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
          <div className="contact-direct">
            <span className="contact-direct-label">{t('contact.address')}</span>
            <address className="contact-direct-address">{COMPANY_ADDRESS[lang]}</address>
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
                        // Stop here rather than carrying bad details to the
                        // summary, which has nothing to edit: the visitor
                        // would have to guess their way back.
                        if (step === 1 && detailsIncomplete) {
                          setTouched({ name: true, email: true });
                          document
                            .querySelector<HTMLElement>('.wizard-field.is-invalid input')
                            ?.focus();
                          return;
                        }
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
