import React from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import { brand, contact, principles } from '../data/site.js';

const Arrow = () => (
  <svg className="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export default function About() {
  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Our Story</p>
          <h1>A farm built by <em>one family</em>, one season at a time.</h1>
        </div>
      </header>

      <section className="about-grid wrap">
        <div className="prose">
          <p>
            {brand.name} began in 2001 with six desi hens, a hand-dug water well and a
            patch of land our grandfather refused to sell. In the beginning the eggs were
            only for our own kitchen, but neighbours kept asking, then their relatives,
            then their friends. What started as a backyard flock slowly became the farm
            you see today, without a single shortcut along the way.
          </p>
          <p>
            We are a family in the truest sense: two generations work this land daily.
            Father manages the goats and their fodder; the hens and the egg deliveries are
            mother's kingdom; the younger ones handle the chicks, the packing and, these
            days, this website. Nobody here wears a uniform. Everybody here knows every
            animal by sight.
          </p>
          <blockquote>
            &ldquo;Sell an egg you would serve your own children, or don&rsquo;t sell it at all.&rdquo;
            <span> A rule written on the farm's first wall, still followed</span>
          </blockquote>
          <p>
            When Eid approaches, the farm changes rhythm. We reserve the strongest goats,
            feed them for weeks, and arrange each qurbani personally, from the animal you
            choose to the moment it is handled with proper care and respect. Families who
            book with us get updates, photos, and meat they can trust was treated humanely.
            That trust took twenty-five years to build, and we spend every day keeping it.
          </p>
        </div>

        <aside className="about-media">
          <Placeholder
            className="ph-sm"
            src="/desi-eggs.jpg"
            alt="Fresh farm eggs"
            ariaLabel="Fresh eggs from Green Nest Farm"
          />
          <p className="about-cap">Raised, collected and packed by the family.</p>
        </aside>
      </section>

      <section className="principles wrap">
        <div className="rows-head">
          <p className="eyebrow">How We Work</p>
          <h2>Three promises we don't break.</h2>
        </div>
        {principles.map(p => (
          <div key={p.n} className="step">
            <span className="row-num">{p.n}</span>
            <div className="row-copy">
              <span className="row-title">{p.title}</span>
              <span className="row-text">{p.text}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="visit">
        <div className="wrap visit-grid">
          <div>
            <h2>Come see the farm yourself.</h2>
            <p>Families are welcome to visit before booking. Meet the hens, the goats, and the people behind it all.</p>
            <p className="f-addr">{brand.name} · {contact.address}</p>
          </div>
          <Link className="btn btn-solid" to="/sacrifice">Plan Your Visit <Arrow /></Link>
        </div>
      </section>
    </main>
  );
}
