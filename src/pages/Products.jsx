import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Placeholder from '../components/Placeholder.jsx';
import { products, contact } from '../data/site.js';

const Arrow = () => (
  <svg className="i-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M13 5l7 7-7-7" />
  </svg>
);

export default function Products() {
  const [whatsappProduct, setWhatsappProduct] = useState(null);

  const openWhatsApp = () => {
    if (!whatsappProduct) return;
    const message = `Assalam o Alaikum, I would like to order ${whatsappProduct.title} from Green Nest Farm.`;
    const url = `${contact.whatsappHref}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setWhatsappProduct(null);
  };

  return (
    <main>
      <header className="page-head">
        <div className="wrap">
          <p className="eyebrow">Products</p>
          <h1>From our land, to your table and your <em>Eid</em>.</h1>
          <p className="lead">Everything below is raised on the farm by the family. Collected, packed and delivered by our own hands.</p>
        </div>
      </header>

      <section className="products-list wrap">
        {products.map(p => (
          <article key={p.id} id={p.id} className="product">
            <div>
              <p className="eyebrow">{p.eyebrow}</p>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              <p className="p-meta">{p.meta}</p>
              <div className="p-actions">
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => setWhatsappProduct(p)}
                >
                  Order on WhatsApp <Arrow />
                </button>
              </div>
            </div>
            <figure>
              <Placeholder src={p.image} alt={p.alt.replace(' placeholder', '')} ariaLabel={p.title} />
              <figcaption className="p-cap">{p.caption}</figcaption>
            </figure>
          </article>
        ))}
      </section>

      <section className="teaser">
        <div className="wrap teaser-grid">
          <div>
            <p className="eyebrow">For Eid ul-Adha</p>
            <h2>Need a sacrificial animal instead?</h2>
            <p>Book your Eid qurbani with us and we handle everything. Raising, choosing, sacrificing and distribution, with updates at every step.</p>
          </div>
          <Link className="btn btn-solid" to="/sacrifice">
            Arrange an Eid Sacrifice <Arrow />
          </Link>
        </div>
      </section>

      {whatsappProduct && (
        <div className="whatsapp-modal-backdrop" role="presentation" onMouseDown={() => setWhatsappProduct(null)}>
          <div
            className="whatsapp-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-modal-title"
            onMouseDown={e => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close WhatsApp order dialog"
              onClick={() => setWhatsappProduct(null)}
            >
              ×
            </button>
            <p className="eyebrow">WhatsApp Order</p>
            <h2 id="whatsapp-modal-title">Order {whatsappProduct.title}?</h2>
            <p>
              This will open a WhatsApp chat with Green Nest Farm at {contact.phoneLabel},
              with your product name already filled into the message.
            </p>
            <div className="modal-actions">
              <button type="button" className="btn btn-gold" onClick={openWhatsApp}>
                Continue to WhatsApp <Arrow />
              </button>
              <button type="button" className="btn btn-paper" onClick={() => setWhatsappProduct(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
