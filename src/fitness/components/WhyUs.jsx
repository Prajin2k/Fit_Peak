import React from 'react';
import './WhyUs.css';

const PERKS = [
  {
    icon: '🏆',
    title: 'Pro-Grade Quality',
    desc: 'Every product is tested by certified trainers and professional athletes before hitting our shelves.',
  },
  {
    icon: '🔬',
    title: 'Science-Backed',
    desc: 'Engineered using sports science research to maximize performance gains and minimize injury risk.',
  },
  {
    icon: '🛡️',
    title: 'Lifetime Warranty',
    desc: 'We stand behind every product with a lifetime structural warranty. No fine print, no hassle.',
  },
  {
    icon: '🚀',
    title: 'Ships in 24hrs',
    desc: 'Order before 2pm and your gear ships same day. Free delivery on all orders over $99.',
  },
];

const NUMBERS = [
  { val: '50,000+', label: 'Happy Athletes' },
  { val: '8 Years', label: 'In Business' },
  { val: '120+', label: 'Products' },
  { val: '98%', label: 'Satisfaction Rate' },
];

export default function WhyUs() {
  return (
    <section className="whyus" id="whyus">
      <div className="section-inner">
        <div className="whyus__top">
          <div className="whyus__left">
            <div className="section-tag">Why IronPeak</div>
            <h2 className="section-title">WE DON'T CUT<br />CORNERS</h2>
            <p className="section-sub">
              Built for people who are serious about their performance. Our gear doesn't just look good — it delivers measurable results.
            </p>
            <a href="#products" className="btn-primary" style={{ marginTop: '2rem' }}>
              Shop Now →
            </a>
          </div>

          <div className="whyus__right">
            {PERKS.map((perk, i) => (
              <div key={i} className="whyus__perk">
                <div className="whyus__perk-icon">{perk.icon}</div>
                <div>
                  <h3 className="whyus__perk-title">{perk.title}</h3>
                  <p className="whyus__perk-desc">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="whyus__numbers">
          {NUMBERS.map((n, i) => (
            <div key={i} className="whyus__number">
              <div className="whyus__number-val">{n.val}</div>
              <div className="whyus__number-lbl">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
