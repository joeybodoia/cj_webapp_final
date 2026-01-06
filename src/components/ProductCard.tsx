import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { InventoryItem } from '../lib/supabase';

interface ProductCardProps {
  product: InventoryItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  // Debug logging to see the actual data structure
  console.log('Product:', product.product_name);
  console.log('Product specifications:', product.product_specifications);
  console.log('Full product object:', product);

  const handleProductClick = () => {
    // Create a URL-friendly slug from the product name
    const slug = product.product_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    console.log('Navigating to product:', product.product_name, 'with slug:', slug);
    console.log('Product data being passed:', product);
    navigate(`/product/${slug}`, { state: { product } });
  };

  // Extract the primary image from the image_urls object
  const getPrimaryImage = () => {
    if (product.image_urls && typeof product.image_urls === 'object') {
      // Try to get "image 1" first, then fall back to the first available image
      const imageUrls = product.image_urls as Record<string, string>;
      return imageUrls['image 1'] || Object.values(imageUrls)[0] || 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
    }
    return 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
  };

  const primaryImage = getPrimaryImage();

  // Extract capacity and measurements from product specifications
  const getCapacity = () => {
    if (product.product_specifications && Array.isArray(product.product_specifications)) {
      const generalSpecs = product.product_specifications.find(spec => spec['General Specifications']);
      if (generalSpecs && generalSpecs['General Specifications']['Capacity']) {
        return `${generalSpecs['General Specifications']['Capacity']} People`;
      }
    }
    return null;
  };

  const getMeasurements = () => {
    if (product.product_specifications && Array.isArray(product.product_specifications)) {
      const generalSpecs = product.product_specifications.find(spec => spec['General Specifications']);
      if (generalSpecs && generalSpecs['General Specifications']['Measurements (inch)']) {
        return generalSpecs['General Specifications']['Measurements (inch)'];
      }
    }
    return null;
  };

  const capacity = getCapacity();
  const measurements = getMeasurements();

  return (
    <div 
      onClick={handleProductClick}
      className="bg-teal-700 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer mx-auto max-w-sm w-full h-full"
    >
      <div className="relative overflow-hidden flex flex-col h-full">
        <div className="h-48 md:h-64 bg-teal-700 pt-4 md:pt-6 px-3 md:px-4 pb-4 md:pb-6">
          <div className="h-full flex items-center justify-center">
            <div className="relative inline-block">
              <img 
                src={primaryImage} 
                alt={product.product_name}
                loading="lazy"
                decoding="async"
                className={`max-w-60 max-h-44 md:max-w-72 md:max-h-60 border-2 md:border-4 border-black rounded-lg transition-transform duration-300 hover:scale-105 ${
                  product.product_company === 'Aspen Spas' 
                    ? 'object-cover' 
                    : 'object-contain'
                }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
                }}
              />
            </div>
          </div>
        </div>
        <div className="p-4 md:p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-white mb-2">{product.product_name}</h3>
        {product.product_company && (
          <p className="text-sm text-teal-200 font-medium mb-2">by {product.product_company}</p>
        )}
        
        <div className="space-y-3 mb-6">
          {capacity && (
            <div className="text-teal-100 text-sm md:text-base">
              <span className="font-semibold text-white">Capacity:</span> {capacity}
            </div>
          )}
          {measurements && (
            <div className="text-teal-100 text-sm md:text-base">
              <span className="font-semibold text-white">Measurements:</span> {measurements}
            </div>
          )}
        </div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleProductClick();
          }}
          className="mt-auto w-full bg-white hover:bg-gray-100 text-teal-700 py-2 md:py-3 rounded-lg font-semibold text-sm md:text-base transition-colors duration-300 flex items-center justify-center space-x-2"
        >
          <span>View Product</span>
          <ArrowRight size={16} />
        </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
