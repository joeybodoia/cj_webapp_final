import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductNavigation = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 'spa',
      title: 'Spas',
      image: 'https://i.imgur.com/DhGg8Q9.png',
      route: '/spas'
    },
    {
      id: 'swim-spa',
      title: 'Swim Spas',
      image: 'https://i.imgur.com/G4nM8Hz.png',
      route: '/swim-spas'
    },
    {
      id: 'gazebo',
      title: 'Gazebos',
      image: 'https://i.imgur.com/ef9gG9n.png',
      route: '/gazebos'
    }
  ];

  return (
    <section className="py-16 bg-custom-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => navigate(product.route)}
              className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 brightness-125"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-30"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
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