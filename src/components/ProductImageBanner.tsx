import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductImageBannerProps {
  productName: string;
  imageUrls: Record<string, string>;
  description?: string;
  product: any;
}

const ProductImageBanner: React.FC<ProductImageBannerProps> = ({ 
  productName, 
  imageUrls, 
  description,
  product
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  
  // Convert image URLs object to array
  const images = Object.values(imageUrls || {});
  
  console.log('ProductImageBanner - Full product object:', product);
  console.log('ProductImageBanner - product_description:', product?.product_description);
  console.log('ProductImageBanner - product_specifications:', product?.product_specifications);
  
  // Extract description from product_description.Description - this should be the main description
  const getProductDescription = () => {
    if (product?.product_description && typeof product.product_description === 'object') {
      const desc = product.product_description as Record<string, any>;
      console.log('Extracting description:', desc.Description);
      return desc.Description;
    }
    console.log('No description found, using fallback');
    return null; // Return null instead of fallback text
  };
  
  // Extract specifications from product_specifications array
  const getSpecification = (category: string, field: string) => {
    if (product?.product_specifications && Array.isArray(product.product_specifications)) {
      const categorySpec = product.product_specifications.find((spec: any) => spec[category]);
      const value = categorySpec?.[category]?.[field];
      console.log(`Extracting ${category} -> ${field}:`, value);
      return value;
    }
    console.log(`No specification found for ${category} -> ${field}`);
    return null;
  };
  
  const productDescription = getProductDescription();
  const capacity = getSpecification('General Specifications', 'Capacity');
  const measurements = getSpecification('General Specifications', 'Measurements (inch)');
  const seats = getSpecification('General Specifications', 'Seats');
  const dryWeight = getSpecification('General Specifications', 'Dry Weight (lbs)');
  
  // Extract gallons from product_description
  const getGallons = () => {
    if (product?.product_description && typeof product.product_description === 'object') {
      const desc = product.product_description as Record<string, any>;
      return desc.Gallons;
    }
    return null;
  };
  
  const gallons = getGallons();
  
  console.log('Final values:');
  console.log('- Description:', productDescription);
  console.log('- Capacity:', capacity);
  console.log('- Measurements:', measurements);
  console.log('- Seats:', seats);
  console.log('- Dry Weight:', dryWeight);
  console.log('- Gallons:', gallons);
  
  if (images.length === 0) {
    return (
      <div className="bg-custom-dark py-12">
        <div className="container mx-auto px-4">
          <div className="bg-teal-600 rounded-2xl p-8 shadow-2xl">
            <div className="text-white text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{productName}</h1>
              <div className="h-1 w-24 bg-white mb-6 mx-auto"></div>
              
              {/* Product Specifications */}
              <div className="space-y-3">
                {capacity && (
                  <div className="flex items-center justify-center">
                    <span className="text-white font-semibold w-32">Capacity:</span>
                    <span className="text-teal-100">{capacity} People</span>
                  </div>
                )}
                {measurements && (
                  <div className="flex items-center justify-center">
                    <span className="text-white font-semibold w-32">Measurements:</span>
                    <span className="text-teal-100">{measurements}</span>
                  </div>
                )}
                {seats && (
                  <div className="flex items-center justify-center">
                    <span className="text-white font-semibold w-32">Number of Seats:</span>
                    <span className="text-teal-100">{seats}</span>
                  </div>
                )}
                {dryWeight && (
                  <div className="flex items-center justify-center">
                    <span className="text-white font-semibold w-32">Dry Weight:</span>
                    <span className="text-teal-100">{dryWeight} lbs</span>
                  </div>
                )}
                {gallons && (
                  <div className="flex items-center justify-center">
                    <span className="text-white font-semibold w-32">Gallons:</span>
                    <span className="text-teal-100">{gallons}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-custom-dark py-12">
      <div className="container mx-auto px-4">
        <div className="bg-teal-700 rounded-2xl p-4 md:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Image Gallery Section */}
            <div className="space-y-3 md:space-y-4">
              {/* Main Image */}
              <div className="relative bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src={images[selectedImageIndex]}
                  alt={`${productName} - Image ${selectedImageIndex + 1}`}
                  className={`w-full h-64 md:h-80 bg-black ${
                    product?.product_company === 'Aspen Spas' 
                      ? 'object-cover' 
                      : 'object-contain'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
                  }}
                />
                
                {/* Navigation Arrows */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 md:p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronLeft size={16} className="md:w-5 md:h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-1 md:p-2 rounded-full transition-all duration-200"
                    >
                      <ChevronRight size={16} className="md:w-5 md:h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {images.length > 1 && (
                <div className="flex justify-center space-x-1 md:space-x-2 overflow-x-auto pb-2">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImageIndex === index
                          ? 'border-white shadow-lg'
                          : 'border-transparent hover:border-white hover:border-opacity-50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${productName} thumbnail ${index + 1}`}
                        className={`w-full h-full bg-black ${
                          product?.product_company === 'Aspen Spas' 
                            ? 'object-cover' 
                            : 'object-contain'
                        }`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="text-white">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">{productName}</h1>
              <div className="h-1 w-24 bg-white mb-4 md:mb-6 mx-auto lg:mx-0"></div>
              
              {/* Product Description */}
              {product?.product_description?.Description && (
                <p className="text-lg md:text-xl text-teal-100 leading-relaxed mb-6 md:mb-8 text-center lg:text-left">
                  {product.product_description.Description}
                </p>
              )}
              
              {/* Product Specifications */}
              <div className="space-y-2 md:space-y-3">
                {capacity && (
                  <div className="flex items-center">
                    <span className="text-white font-semibold w-32">Capacity:</span>
                    <span className="text-teal-100">{capacity} People</span>
                  </div>
                )}
                {measurements && (
                  <div className="flex items-center">
                    <span className="text-white font-semibold w-32">Measurements:</span>
                    <span className="text-teal-100">{measurements} inches</span>
                  </div>
                )}
                {seats && (
                  <div className="flex items-center">
                    <span className="text-white font-semibold w-32">Number of Seats:</span>
                    <span className="text-teal-100">{seats}</span>
                  </div>
                )}
                {dryWeight && (
                  <div className="flex items-center">
                    <span className="text-white font-semibold w-32">Dry Weight:</span>
                    <span className="text-teal-100">{dryWeight} lbs</span>
                  </div>
                )}
                {gallons && (
                  <div className="flex items-center">
                    <span className="text-white font-semibold w-32">Gallons:</span>
                    <span className="text-teal-100">{gallons}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImageBanner;