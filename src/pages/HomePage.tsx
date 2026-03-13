import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductNavigation from '../components/ProductNavigation';
import WhyDsDifference from '../components/WhyDsDifference';
import ReviewsAndCtaSection from '../components/ReviewsAndCtaSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductNavigation />
      <WhyDsDifference />
      <ReviewsAndCtaSection />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
