import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './styles/globals.css';

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Products onAddToCart={handleAddToCart} />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}