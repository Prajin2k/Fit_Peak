import React from 'react';
import './Footer.css';

export default function Footer() {
  const links = {
    Shop: ['Strength', 'Cardio', 'Recovery', 'Apparel', 'Bundles'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Support: ['FAQ', 'Shipping', 'Returns', 'Warranty', 'Track Order'],
  };

  return (
    <footer className="footer">
      <div className="section-inner">
        <div className="footer__top">
          <div className="footer__brand">
            <div className="footer__logo">Fitness<span>Peak</span></div>
            <p className="footer__tagline">
              Premium fitness gear for athletes who refuse to settle.
            </p>
            <div className="footer__socials">
              {['Instagram', 'TikTok', 'YouTube', 'X'].map(s => (
                <a key={s} href="#" className="footer__social">{s[0]}</a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="footer__col">
              <div className="footer__col-title">{category}</div>
              <ul className="footer__col-links">
                {items.map(item => (
                  <li key={item}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer__bottom">
          <p>© 2026 FitnessPeak Sports Ltd. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
