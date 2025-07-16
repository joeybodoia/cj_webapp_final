import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const GazebosPage = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      <ProductGrid
        productType="Gazebo"
        title="Outdoor Gazebos"
        description="Create a stunning focal point in your outdoor space with our handcrafted gazebos. Perfect for entertaining, dining, or simply enjoying nature in comfort and style."
      />
      <Footer />
    </div>
  );
};

export default GazebosPage;