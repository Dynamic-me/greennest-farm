import React from 'react';
import { brand, contact } from '../data/site.js';

const Icon = {
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  Pin: () => (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="f-col--right">
          <p className="f-title">Visit Us</p>
          <div>
            <iframe className="footer-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1703.882421174665!2d74.1331481194172!3d31.33786685839511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391855c8cd7c0673%3A0x94e41c3f4a33f8e2!2sGreen%20Nest%20Farm!5e0!3m2!1sen!2s!4v1790160950173!5m2!1sen!2s"
              width="400px"
              height="300px"
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin" 
            ></iframe>
          </div>

          <a
            className="f-item"
            href={contact.addressUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '10px', display: 'flex' }}
          >
            <span>{contact.address}</span>
          </a>
        </div>

        <div className="f-brand">
          <img
            src="/greennestfarm.png"
            alt={`${brand.name} logo`}
            className="nav-logo"
          />
          <span className="f-name">{brand.name}</span>
          <span className="f-tag">{brand.short}</span>
        </div>

        <div className="f-col">
          <p className="f-title">Contact Us</p>
          <a className="f-item" href={contact.instagram.url} target="_blank" rel="noopener noreferrer">
            <Icon.Instagram />{contact.instagram.handle}
          </a>
          <a className="f-item" href={`mailto:${contact.email}`}>
            <Icon.Mail />{contact.email}
          </a>
          <a className="f-item" href={contact.phoneHref}>
            <Icon.Phone />{contact.phoneLabel}
          </a>
        </div>
      </div>

      <div className="wrap f-bottom">
        <span>© {year} {brand.name}. All rights reserved.</span>
        <span>{brand.tagline}</span>
      </div>
    </footer>
  );
}
