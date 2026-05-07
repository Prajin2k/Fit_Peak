import React from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    name: 'Marcus Webb',
    role: 'Powerlifter — 3x National Champion',
    initials: 'MW',
    color: '#e8ff47',
    colorBg: 'rgba(232,255,71,0.12)',
    text: 'The Power Rack X9 is hands-down the most solid rack I\'ve ever trained on. No wobble, no noise, pure confidence under 400kg. IronPeak just gets it.',
    stars: 5,
  },
  {
    name: 'Priya Anand',
    role: 'CrossFit Competitor',
    initials: 'PA',
    color: '#60a5fa',
    colorBg: 'rgba(96,165,250,0.12)',
    text: 'Switched from a big-box brand to IronPeak for the AirBike and I\'ll never look back. The build quality is insane for the price. My conditioning has improved massively.',
    stars: 5,
  },
  {
    name: 'Tom Gallagher',
    role: 'Personal Trainer, 11 years',
    initials: 'TG',
    color: '#f97316',
    colorBg: 'rgba(249,115,22,0.12)',
    text: 'I recommend IronPeak to every single client who asks about home gym equipment. The lifetime warranty alone is worth it — but the quality means you\'ll never need it.',
    stars: 5,
  },
  {
    name: 'Aisha Nkosi',
    role: 'Marathon Runner & Triathlete',
    initials: 'AN',
    color: '#34d399',
    colorBg: 'rgba(52,211,153,0.12)',
    text: 'The compression tights and recovery massager have become non-negotiables in my race prep. Delivery was next-day and customer service is top-tier.',
    stars: 5,
  },
  {
    name: 'Jason Park',
    role: 'Home Gym Enthusiast',
    initials: 'JP',
    color: '#a78bfa',
    colorBg: 'rgba(167,139,250,0.12)',
    text: 'Built my entire home gym with IronPeak. The barbell, the rack, the plates — all excellent. Saved thousands vs a gym membership. 10/10 would buy again.',
    stars: 5,
  },
  {
    name: 'Leila Santos',
    role: 'Olympic Weightlifting Coach',
    initials: 'LS',
    color: '#fb7185',
    colorBg: 'rgba(251,113,133,0.12)',
    text: 'As a coach I need equipment that can handle daily abuse from 20+ athletes. IronPeak barbells have been in my gym for 3 years without a single issue.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-inner">
        <div className="testimonials__header">
          <div className="section-tag">Reviews</div>
          <h2 className="section-title">REAL ATHLETES.<br />REAL RESULTS.</h2>
          <p className="section-sub">Don't take our word for it. Here's what our community has to say.</p>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="tcard">
              <div className="tcard__stars">{'★'.repeat(t.stars)}</div>
              <p className="tcard__text">"{t.text}"</p>
              <div className="tcard__author">
                <div
                  className="tcard__avatar"
                  style={{ background: t.colorBg, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="tcard__name">{t.name}</div>
                  <div className="tcard__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
