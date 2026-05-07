import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-grid"></div>
      <div className="hero__noise"></div>

      <div className="hero__inner section-inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__dot"></span>
            New Collection — 2026
          </div>

          <h1 className="hero__headline">
            GEAR BUILT<br />
            FOR <span className="hero__headline--accent">CHAMPIONS</span>
          </h1>

          <p className="hero__sub">
            Premium fitness equipment and sports gear engineered for athletes who refuse to compromise. Train harder. Recover faster. Perform better.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">50K+</span>
              <span className="hero__stat-lbl">Athletes</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">4.9★</span>
              <span className="hero__stat-lbl">Average Rating</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-num">120+</span>
              <span className="hero__stat-lbl">Products</span>
            </div>
          </div>

          <div className="hero__btns">
            <a href="#products" className="btn-primary">Shop Collection →</a>
            <a href="#whyus" className="btn-ghost">Our Story</a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--main">
            <div className="hero__card-tag">BESTSELLER</div>
            <div className="hero__product-img">
              <div className="hero__product-icon">🏋️</div>
            </div>
            <div className="hero__card-info">
              <span className="hero__card-name">Pro Power Rack X9</span>
              <span className="hero__card-price">$849</span>
            </div>
          </div>

          <div className="hero__card hero__card--float1">
            <span className="hero__float-icon">⚡</span>
            <div>
              <div className="hero__float-val">−23%</div>
              <div className="hero__float-lbl">Limited Offer</div>
            </div>
          </div>

          <div className="hero__card hero__card--float2">
            <span className="hero__float-icon">🚚</span>
            <div>
              <div className="hero__float-val">Free</div>
              <div className="hero__float-lbl">Shipping Today</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint">
        <span>SCROLL</span>
        <div className="hero__scroll-line"></div>
      </div>
    </section>
  );
}
