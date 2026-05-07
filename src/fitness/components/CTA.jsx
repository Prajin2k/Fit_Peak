import React, { useState } from 'react';
import './CTA.css';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="cta" id="cta">
      <div className="section-inner">
        <div className="cta__box">
          <div className="cta__glow"></div>
          <div className="cta__content">
            <div className="section-tag">Join the Team</div>
            <h2 className="cta__title">READY TO TRAIN<br />LIKE A PRO?</h2>
            <p className="cta__sub">
              Get 15% off your first order plus exclusive access to new drops, athlete tips, and training programs — straight to your inbox.
            </p>

            {submitted ? (
              <div className="cta__success">
                <span>✓</span> You're in! Check your inbox for your discount code.
              </div>
            ) : (
              <div className="cta__form">
                <input
                  type="email"
                  className="cta__input"
                  placeholder="Your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                />
                <button className="btn-primary" onClick={handleSubmit}>
                  Claim 15% Off →
                </button>
              </div>
            )}

            <p className="cta__legal">No spam. Unsubscribe any time. We respect your inbox.</p>
          </div>

          <div className="cta__perks">
            <div className="cta__perk">
              <span className="cta__perk-icon">🚚</span>
              <span>Free shipping over $99</span>
            </div>
            <div className="cta__perk">
              <span className="cta__perk-icon">↩️</span>
              <span>30-day easy returns</span>
            </div>
            <div className="cta__perk">
              <span className="cta__perk-icon">🛡️</span>
              <span>Lifetime warranty</span>
            </div>
            <div className="cta__perk">
              <span className="cta__perk-icon">💬</span>
              <span>24/7 support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
