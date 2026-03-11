import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductNavigation from '../components/ProductNavigation';
import WhyDsDifference from '../components/WhyDsDifference';
import ReviewsAndCtaSection from '../components/ReviewsAndCtaSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
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
