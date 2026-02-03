import React from 'react';
import { useLocation } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';

const SpasPage = () => {
  const location = useLocation();
  const initialBrandFilter = location.state?.filterBrand;

  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      <ProductGrid
        productType="Spa"
        title="Premium Hot Tubs"
        description="Indulge in luxury with our collection of premium hot-tubs. From intimate models to spacious retreats, each hot-tub is designed for ultimate relaxation and therapeutic benefits."
        initialBrandFilter={initialBrandFilter}
      />
      <Footer />
    </div>
  );
};

export default SpasPage;
