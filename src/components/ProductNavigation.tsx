import React from 'react';
import { useNavigate } from 'react-router';

const ProductNavigation = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'spa',
      title: 'Hot Tubs',
      image: 'https://i.imgur.com/DhGg8Q9.png',
      route: '/hot-tubs'
    },
    {
      id: 'swim-spa',
      title: 'Swim Spas',
      image: 'https://i.imgur.com/G4nM8Hz.png',
      route: '/swim-spas'
    },
    {
      id: 'gazebo',
      title: 'Contrast Therapy Spas',
      image: 'https://i.imgur.com/J4mylLL.jpeg',
      route: '/contrast-therapy-spas'
    }
  ];

  return (
    <section className="bg-[#0a3d35] py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">What We Offer</p>
          <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Find Your Perfect Spa</h2>
          <p className="mt-5 text-lg font-medium text-teal-100/65 md:text-2xl">
            Built to handle Arizona&apos;s heat. Designed for your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(product.route)}
              className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)] cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(8,84,78,0.35)] group"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                    {product.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductNavigation;
