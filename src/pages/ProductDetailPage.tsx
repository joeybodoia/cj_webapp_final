import React from 'react';
import { useLocation, useParams, Navigate, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductImageBanner from '../components/ProductImageBanner';
import ProductSchema from '../components/ProductSchema';
import { InventoryItem } from '../lib/supabase';

const ProductDetailPage = () => {
  const [openDropdowns, setOpenDropdowns] = React.useState<Record<string, boolean>>({});
  const location = useLocation();
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Get product data from navigation state
  const product = location.state?.product as InventoryItem;
  
  // Debug logging
  console.log('Product Detail Page - Location state:', location.state);
  console.log('Product Detail Page - Product:', product);
  console.log('Product Detail Page - Slug:', slug);
  
  // Debug logging
  console.log('Product Detail Page - Location state:', location.state);
  console.log('Product Detail Page - Product:', product);
  console.log('Product Detail Page - Slug:', slug);
  
  const toggleDropdown = (key: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // If no product data, show error message instead of redirect
  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="pt-20 py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for could not be found.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get description from product_description object
  const getDescription = () => {
    if (product.product_description && typeof product.product_description === 'object') {
      const desc = product.product_description as Record<string, any>;
      return desc.Description || null;
    }
    return null;
  };

  // Ensure image_urls is properly formatted
  const imageUrls = product.image_urls && typeof product.image_urls === 'object' 
    ? product.image_urls as Record<string, string> 
    : {};

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Product Schema Markup */}
      <ProductSchema product={product} />
      
      {/* Product Image Banner */}
      <div className="pt-20">
        <ProductImageBanner
          productName={product.product_name}
          imageUrls={imageUrls}
          description={getDescription()}
          product={product}
        />
      </div>

      {/* Product Details Section - Coming Soon */}
      <div className="py-12 md:py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">Product Features</h2>
            
            {/* Product Features Grid */}
            {product.product_features && Array.isArray(product.product_features) && product.product_features.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {product.product_features.map((feature: any, index: number) => (
                  <div key={index} className="bg-teal-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    {/* Feature Title */}
                    <div className="p-4 md:p-6 pb-3 md:pb-4">
                      <h3 className="text-lg md:text-xl font-bold text-white text-center mb-3 md:mb-4">
                        {feature.title}
                      </h3>
                    </div>
                    
                    {/* Feature Image */}
                    <div className="px-4 md:px-6 pb-3 md:pb-4">
                      <div className="w-full h-40 md:h-48 bg-gray-50 rounded-lg overflow-hidden">
                        <img
                          src={feature.image_url}
                          alt={feature.title}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';
                          }}
                        />
                      </div>
                    </div>
                    
                    {/* Feature Description */}
                    <div className="p-4 md:p-6 pt-0">
                      <p className="text-sm md:text-base text-teal-100 leading-relaxed text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-teal-700 rounded-xl shadow-lg p-6 md:p-8">
                <p className="text-teal-100 text-center py-12">
                  No product features available.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Specifications Section */}
      <div className="py-12 md:py-20 bg-custom-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 text-center">Product Specifications</h2>
            
            {product.product_specifications && Array.isArray(product.product_specifications) ? (
              <div className="space-y-3 md:space-y-4">
                {/* General Specifications */}
                {(() => {
                  const generalSpec = product.product_specifications.find((spec: any) => spec['General Specifications']);
                  if (!generalSpec) return null;
                  
                  return (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleDropdown('general')}
                        className="w-full px-4 md:px-6 py-3 md:py-4 bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-between text-left transition-colors duration-200"
                      >
                        <span className="text-base md:text-lg font-semibold">General Specs</span>
                        {openDropdowns['general'] ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </button>
                      {openDropdowns['general'] && (
                        <div className="px-4 md:px-6 py-3 md:py-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(generalSpec['General Specifications']).map(([key, value]) => (
                              <div key={key} className="flex flex-col md:flex-row md:justify-between md:items-center py-2 border-b border-gray-100 last:border-b-0">
                                <span className="font-medium text-gray-700 text-sm md:text-base">{key}:</span>
                                <span className="text-gray-900 text-sm md:text-base">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Jets Specifications */}
                {(() => {
                  const jetSpec = product.product_specifications.find((spec: any) => spec['Jets Specifications']);
                  if (!jetSpec) return null;
                  
                  return (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleDropdown('jets')}
                        className="w-full px-6 py-4 bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-between text-left transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold">Jet Specs</span>
                        {openDropdowns['jets'] ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </button>
                      {openDropdowns['jets'] && (
                        <div className="px-6 py-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(jetSpec['Jets Specifications']).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <span className="font-medium text-gray-700">{key}:</span>
                                <span className="text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Standard Pumps Configuration */}
                {(() => {
                  const pumpSpec = product.product_specifications.find((spec: any) => spec['Standard Pumps Configuration']);
                  if (!pumpSpec) return null;
                  
                  return (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleDropdown('pumps')}
                        className="w-full px-6 py-4 bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-between text-left transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold">Standard Pumps Configuration</span>
                        {openDropdowns['pumps'] ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </button>
                      {openDropdowns['pumps'] && (
                        <div className="px-6 py-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(pumpSpec['Standard Pumps Configuration']).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <span className="font-medium text-gray-700">{key}:</span>
                                <span className="text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Control System Selection */}
                {(() => {
                  const controlSpec = product.product_specifications.find((spec: any) => spec['Control System Selection']);
                  if (!controlSpec) return null;
                  
                  return (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleDropdown('control')}
                        className="w-full px-6 py-4 bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-between text-left transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold">Control System Selection</span>
                        {openDropdowns['control'] ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </button>
                      {openDropdowns['control'] && (
                        <div className="px-6 py-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(controlSpec['Control System Selection']).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <span className="font-medium text-gray-700">{key}:</span>
                                <span className="text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}

                {/* Filtration and Purification */}
                {(() => {
                  const filtrationSpec = product.product_specifications.find((spec: any) => spec['Filtration and Purification']);
                  if (!filtrationSpec) return null;
                  
                  return (
                    <div className="border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleDropdown('filtration')}
                        className="w-full px-6 py-4 bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-between text-left transition-colors duration-200"
                      >
                        <span className="text-lg font-semibold">Filtration and Purification</span>
                        {openDropdowns['filtration'] ? (
                          <ChevronUp className="h-5 w-5 text-white" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-white" />
                        )}
                      </button>
                      {openDropdowns['filtration'] && (
                        <div className="px-6 py-4 bg-white">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.entries(filtrationSpec['Filtration and Purification']).map(([key, value]) => (
                              <div key={key} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <span className="font-medium text-gray-700">{key}:</span>
                                <span className="text-gray-900">{value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <p className="text-gray-600 text-center py-12">
                  No product specifications available.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Accessories Section */}
      {/* Accessories Section - Only show for non-Gazebo products */}
      {product.product_type !== 'Gazebo' && (
        <div className="py-20 bg-custom-dark">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Accessories</h2>
              
              {/* Product Accessories Grid */}
              {product.product_accessories && Array.isArray(product.product_accessories) && product.product_accessories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {product.product_accessories.map((accessory: any, index: number) => (
                    <div key={index} className="bg-teal-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                      {/* Accessory Title */}
                      <div className="p-6 pb-4">
                        <h3 className="text-xl font-bold text-white text-center mb-4">
                          {accessory.title}
                        </h3>
                      </div>
                      
                      {/* Accessory Image */}
                      <div className="px-6 pb-4">
                        <div className="w-full h-48 bg-gray-50 rounded-lg overflow-hidden">
                          <img
                            src={accessory.image_url}
                            alt={accessory.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';
                            }}
                          />
                        </div>
                      </div>
                      
                      {/* Accessory Description */}
                      <div className="p-6 pt-0">
                        <p className="text-teal-100 leading-relaxed text-center">
                          {accessory.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <p className="text-gray-600 text-center py-12">
                    No accessories available for this product.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;