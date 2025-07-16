import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const SpasPage = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      <ProductGrid
        productType="Spa"
        title="Premium Spas"
        description="Indulge in luxury with our collection of premium spas. From intimate models to spacious retreats, each spa is designed for ultimate relaxation and therapeutic benefits."
      />
      <Footer />
    </div>
  );
};

export default SpasPage;