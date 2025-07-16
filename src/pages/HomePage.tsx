import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductNavigation from '../components/ProductNavigation';
import OurStory from '../components/OurStory';
import ProductSection from '../components/ProductSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { spas, swimSpas, gazebos } from '../data/products';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductNavigation />
      <OurStory />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;