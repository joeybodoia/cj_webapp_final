import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const ContrastTherapySpasPage = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      <ProductGrid
        productType="Contrast Therapy Spa"
        title="Contrast Therapy Spas"
        description="Experience the restorative benefits of contrast therapy with our cold plunge and hot spa combinations, designed for recovery, circulation, and everyday wellness."
      />
      <Footer />
    </div>
  );
};

export default ContrastTherapySpasPage;
