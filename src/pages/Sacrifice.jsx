import React, { useEffect, useRef, useState } from 'react';
import Placeholder from '../components/Placeholder.jsx';
import { qurbaniSteps, qurbaniAnimalOptions, qurbaniPromises, contact } from '../data/site.js';

const Arrow = () => (
  <svg className="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7-7" />
  </svg>
);

function AnimalDropdown({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (ref.current && !ref.current.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className={`custom-select${open ? ' is-open' : ''}`} ref={ref}>
      <button
        type="button"
        className="custom-select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span>{value}</span>
        <span className="custom-select-chevron" aria-hidden="true">⌄</span>
      </button>
      <div className="custom-select-menu" role="listbox" aria-label="Choose an animal">
        {qurbaniAnimalOptions.map(option => (
          <button
            type="button"
            role="option"
            aria-selected={value === option}
            className={`custom-select-option${value === option ? ' is-selected' : ''}`}
            key={option}
            onClick={() => {
              onChange(option);
              setOpen(false);
            }}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Sacrifice() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    animal: qurbaniAnimalOptions[0],
    city: '',
    notes: '',
  });

  const update = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));
  const updateAnimal = (animal) => setForm(f => ({ ...f, animal }));

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured yet. Add the EmailJS values from the project setup instructions, then try again.');
      return;
    }

    setSending(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      animal: form.animal,
      city: form.city || '—',
      notes: form.notes || '—',
      title: `Eid qurbani booking — ${form.animal}`,
      message:
        `I would like to arrange an Eid sacrifice.\n\n` +
        `Name: ${form.name}\n` +
        `Email: ${form.email}\n` +
        `Phone / WhatsApp: ${form.phone}\n` +
        `Booking: ${form.animal}\n` +
        `City: ${form.city || '—'}\n\n` +
        `Notes: ${form.notes || '—'}`,
      to_email: contact.email,
    };

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams,
        }),
      });

      if (!response.ok) {
        const details = await response.text();
        throw new Error(details || 'Email could not be sent.');
      }

      setSubmitted(true);
    } catch (err) {
      setError('We could not send the booking right now. Please try again or contact us on WhatsApp.');
      console.error('Qurbani booking email failed:', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Eid ul-Adha · Qurbani Service</p>
          <h1>Your qurbani, arranged with <em>care</em> and dignity.</h1>
          <p className="lead">
            Reserve your animal weeks before Eid. We raise it, sacrifice it on your
            behalf on the day of Eid with proper Islamic handling, and give you full
            photo and video proof. Or distribute the meat on your behalf.
          </p>
        </div>
      </header>

      <section className="book-list wrap">
        {qurbaniSteps.map(s => (
          <div key={s.n} className="step">
            <span className="row-num">{s.n}</span>
            <div className="row-copy">
              <span className="row-title">{s.title}</span>
              <span className="row-text">{s.text}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="booking" id="booking">
        <div className="wrap booking-grid">
          <div>
            <p className="eyebrow">Booking</p>
            <h2>Reserve for this Eid.</h2>
            <p className="lead">
              Fill this in and we will send your request to Green Nest Farm. You will
              also receive a confirmation email at the address you provide.
            </p>

            <form id="qurbani-form" className="form-grid" onSubmit={onSubmit} noValidate>
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" autoComplete="name"
                  placeholder="Full name" required value={form.name} onChange={update('name')} />
              </div>
              <div className="field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" type="email" autoComplete="email"
                  placeholder="you@example.com" required value={form.email} onChange={update('email')} />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone / WhatsApp</label>
                <input id="phone" name="phone" type="tel" autoComplete="tel"
                  placeholder="+92 3XX XXXXXXX" required value={form.phone} onChange={update('phone')} />
              </div>
              <div className="field">
                <label htmlFor="animal">Booking</label>
                <AnimalDropdown value={form.animal} onChange={updateAnimal} />
                <input type="hidden" name="animal" value={form.animal} />
              </div>
              <div className="field">
                <label htmlFor="city">City for delivery</label>
                <input id="city" name="city" type="text" placeholder="e.g. Lahore"
                  value={form.city} onChange={update('city')} />
              </div>
              <div className="field field--full">
                <label htmlFor="notes">Notes (optional)</label>
                <textarea id="notes" name="notes"
                  placeholder="Meat distribution preference, visit date, anything else…"
                  value={form.notes} onChange={update('notes')} />
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-gold" disabled={sending}>
                  {sending ? 'Sending Request…' : 'Send Booking Request'} <Arrow />
                </button>
                <span className={`form-note${error ? ' form-note--error' : ''}${submitted ? ' form-note--success' : ''}`}>
                  {error || (submitted
                    ? 'Request sent. Check your email for the confirmation.'
                    : 'No payment needed to reserve. We confirm everything with you first.')}
                </span>
              </div>
            </form>
          </div>

          <aside className="booking-side">
            <Placeholder
              src="/eid-stock.jpeg"
              alt="Eid livestock at Green Nest Farm"
              ariaLabel="Eid livestock"
            />
            <ul className="r-list">
              {qurbaniPromises.map(p => <li key={p}>{p}</li>)}
            </ul>
          </aside>
        </div>
      </section>
    </main>
  );
}
