import React, { useState } from 'react';
import './Products.css';

const CATEGORIES = ['All', 'Strength', 'Cardio', 'Recovery', 'Apparel'];

const PRODUCTS = [
  { id: 1, name: 'Pro Power Rack X9', category: 'Strength', price: 849, oldPrice: 1099, badge: 'Sale', emoji: '🏋️', rating: 4.9, reviews: 312 },
  { id: 2, name: 'Carbon Barbell 20kg', category: 'Strength', price: 199, oldPrice: null, badge: 'New', emoji: '🔩', rating: 4.8, reviews: 187 },
  { id: 3, name: 'Elite Treadmill T7', category: 'Cardio', price: 1299, oldPrice: 1599, badge: 'Sale', emoji: '🏃', rating: 4.7, reviews: 241 },
  { id: 4, name: 'AirBike Pro 500', category: 'Cardio', price: 649, oldPrice: null, badge: null, emoji: '🚴', rating: 4.9, reviews: 98 },
  { id: 5, name: 'Percussion Massager', category: 'Recovery', price: 129, oldPrice: 179, badge: 'Sale', emoji: '💆', rating: 4.8, reviews: 425 },
  { id: 6, name: 'Ice Bath Tub XL', category: 'Recovery', price: 349, oldPrice: null, badge: 'New', emoji: '🧊', rating: 4.6, reviews: 63 },
  { id: 7, name: 'Compression Tights', category: 'Apparel', price: 79, oldPrice: 99, badge: 'Sale', emoji: '🩱', rating: 4.7, reviews: 534 },
  { id: 8, name: 'Training Gloves Pro', category: 'Apparel', price: 39, oldPrice: null, badge: null, emoji: '🥊', rating: 4.5, reviews: 289 },
];

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {'★'.repeat(Math.round(rating))}{'☆'.repeat(5 - Math.round(rating))}
      <span className="star-rating__num">{rating}</span>
    </div>
  );
}

export default function Products({ onAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [added, setAdded] = useState({});

  const filtered = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleAdd = (id) => {
    setAdded(prev => ({ ...prev, [id]: true }));
    onAddToCart();
    setTimeout(() => setAdded(prev => ({ ...prev, [id]: false })), 1500);
  };

  return (
    <section className="products" id="products">
      <div className="section-inner">
        <div className="products__header">
          <div>
            <div className="section-tag">Shop</div>
            <h2 className="section-title">OUR COLLECTION</h2>
          </div>
          <p className="section-sub">Performance gear trusted by professional athletes and weekend warriors alike.</p>
        </div>

        <div className="products__filters">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`products__filter ${activeCategory === cat ? 'products__filter--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products__grid">
          {filtered.map(product => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <div className={`product-card__badge product-card__badge--${product.badge.toLowerCase()}`}>
                  {product.badge}
                </div>
              )}

              <div className="product-card__img">
                <span className="product-card__emoji">{product.emoji}</span>
              </div>

              <div className="product-card__body">
                <div className="product-card__cat">{product.category}</div>
                <h3 className="product-card__name">{product.name}</h3>

                <StarRating rating={product.rating} />
                <div className="product-card__reviews">({product.reviews} reviews)</div>

                <div className="product-card__footer">
                  <div className="product-card__pricing">
                    <span className="product-card__price">${product.price}</span>
                    {product.oldPrice && (
                      <span className="product-card__old-price">${product.oldPrice}</span>
                    )}
                  </div>
                  <button
                    className={`product-card__btn ${added[product.id] ? 'product-card__btn--added' : ''}`}
                    onClick={() => handleAdd(product.id)}
                  >
                    {added[product.id] ? '✓ Added' : '+ Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
