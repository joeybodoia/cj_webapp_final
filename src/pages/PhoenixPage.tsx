import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixPage = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      <div className="pt-24 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            D's Outdoorliving - Phoenix, AZ
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhoenixPage;
