import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const SwimSpasPage = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      <ProductGrid
        productType="Swim Spa"
        title="Swim Spas"
        description="Experience the perfect blend of fitness and relaxation with our swim spas. Ideal for year-round exercise, aquatic therapy, and family fun in your own backyard."
      />
      <Footer />
    </div>
  );
};

export default SwimSpasPage;