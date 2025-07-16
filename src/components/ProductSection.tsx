import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  features: string[];
  rating: number;
}

interface ProductSectionProps {
  id: string;
  title: string;
  description: string;
  products: Product[];
  backgroundColor?: string;
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  id, 
  title, 
  description, 
  products,
  backgroundColor = 'bg-white'
}) => {
  return (
    <section id={id} className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-4">{product.price}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;