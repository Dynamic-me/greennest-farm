import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import Counter from '../components/Counter.jsx';
import { stats, homeRows, brand } from '../data/site.js';

const Arrow = () => (
  <svg className="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function Home() {
  const [heroProgress, setHeroProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const hero = document.querySelector('.hero');
      if (!hero) return;

      const distance = Math.max(hero.offsetHeight * 0.8, 420);
      const progress = Math.min(Math.max(window.scrollY / distance, 0), 1);
      setHeroProgress(progress);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const heroMotion = {
    '--hero-copy-y': `${heroProgress * -150}px`,
    '--hero-copy-scale': `${1 - heroProgress * 0.18}`,
    '--hero-copy-fade': `${1 - heroProgress * 0.9}`,
    '--hero-media-y': `${heroProgress * -92}px`,
    '--hero-media-scale': `${1 + heroProgress * 0.09}`,
    '--hero-media-fade': `${1 - heroProgress * 0.28}`,
  };

  return (
    <main>
      {/* HERO */}
      <header className="hero" style={heroMotion}>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">A Family Farm</p>
            <h1>Raised on <em>our</em> soil, not in a factory.</h1>
            <p className="hero-lead">
              {brand.name} is a small family farm where desi hens roam on open ground,
              chicks are raised by hand, and goats graze on natural fodder, and every Eid,
              we arrange your qurbani the way it should be: honest, clean and personal.
            </p>
            <div className="hero-ctas">
              <Link className="btn btn-solid" to="/products">Shop the Farm <Arrow /></Link>
              <Link className="btn btn-outline" to="/sacrifice">Arrange an Eid Sacrifice</Link>
            </div>
            <p className="hero-note">Hand-delivered locally · Booked qurbani with photo &amp; video updates</p>
          </div>
          <figure className="hero-media">
            <Placeholder
              src="/goats-farm.jpeg"
              alt="Goats and farm animals at Green Nest Farm"
              ariaLabel="Green Nest Farm"
            />
          </figure>
        </div>
      </header>

      {/* ROWS */}
      <section className="rows">
        <div className="wrap">
          <div className="rows-head">
            <p className="eyebrow">From Our Farm</p>
            <h2>Three things, done properly.</h2>
          </div>
          {homeRows.map(r => (
            <Link key={r.n} className="row" to={r.to}>
              <span className="row-num">{r.n}</span>
              <div className="row-copy">
                <span className="row-title">{r.title}</span>
                <span className="row-text">{r.text}</span>
              </div>
              <span className="row-link">{r.cta} <Arrow /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="manifesto">
        <div className="wrap">
          <blockquote>
            &ldquo;We don&rsquo;t rush an egg, a chick or a goat.&nbsp;
            <span className="gold-i">Good things take their season</span>&nbsp;, and so do we.&rdquo;
            <cite> The family of {brand.name}</cite>
          </blockquote>
        </div>
      </section>

      <section className="stats">
        <div className="wrap stats-grid">
          {stats.map(s => (
            <div key={s.label} className="stat">
              <Counter n={s.n} suffix={s.suffix} />
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
