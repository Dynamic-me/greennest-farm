import React, { useEffect, useState, useRef } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { navLinks, brand } from '../data/site.js';

const ArrowRight = () => (
  <svg className="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Header() {
  const navigate = useNavigate();
  const [shrunk, setShrunk] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  const handleBrandClick = (event) => {
    event.preventDefault();

    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
    window.setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0);
  };
  const ticking = useRef(false);

  useEffect(() => {
    const SHRINK_AT = 90;
    const update = () => {
      ticking.current = false;
      const y = window.scrollY || 0;
      if (y > SHRINK_AT && y > lastY.current + 1) setShrunk(true);   // scrolling down -> tighten
      else if (y < lastY.current - 1 || y <= SHRINK_AT) setShrunk(false);  // scrolling up / near top -> open up
      lastY.current = y;
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    update();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [window.location.pathname]);

  return (
    <nav className={`navbar${shrunk ? ' shrunk' : ''}`} aria-label="Main">
      <Link
        className="brand"
        to="/"
        onClick={handleBrandClick}
      >
        <img className="brand-logo" src="/greennestfarm.png" alt="Green Nest Farm" />
        <span className="brand-name">
          <span className="brand-name-green">Green </span>
          <span className="brand-name-nest">Nest</span>
          <span className="brand-name-green"> Farm</span>
        </span>
      </Link>

      <button
        className={`nav-toggle${menuOpen ? ' open' : ''}`}
        aria-expanded={menuOpen ? 'true' : 'false'}
        aria-controls="nav-links"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setMenuOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      <div id="nav-links" className={`nav-links${menuOpen ? ' open' : ''}`}>
        <ul className="nav-main-links">
          {navLinks.filter(l => !l.cta).map(l => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === '/'}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {navLinks.filter(l => l.cta).map(l => (
          <div className="nav-cta-wrapper" key={l.to}>
            <NavLink to={l.to} className="nav-cta" end={l.to === '/'}>
              {l.label}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
}
