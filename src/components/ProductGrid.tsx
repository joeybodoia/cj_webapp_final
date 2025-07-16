import React from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { useProducts } from '../hooks/useProducts';
import { useProductFilters } from '../hooks/useProductFilters';

interface ProductGridProps {
  productType: string;
  title: string;
  description: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ productType, title, description }) => {
  const { products, loading, error } = useProducts(productType);
  const {
    filters,
    filteredProducts,
    availableBrands,
    isFilterOpen,
    handleFilterChange,
    clearFilters,
    toggleFilterPanel
  } = useProductFilters(products);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center">
            <Loader2 className="animate-spin h-8 w-8 text-blue-600" />
            <span className="ml-2 text-gray-600">Loading products...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center text-red-600">
            <AlertCircle className="h-8 w-8" />
            <span className="ml-2">Error loading products: {error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-custom-dark pt-20">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">{title}</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            {description}
          </p>
        </div>
        
        {/* Filters */}
        {products.length > 0 && (
          <ProductFilters
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={clearFilters}
            availableBrands={availableBrands}
            isOpen={isFilterOpen}
            onToggle={toggleFilterPanel}
            productType={productType}
          />
        )}
        
        {/* Results */}
        {products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products found in this category.</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No products match your current filters.</p>
            <button
              onClick={clearFilters}
              className="mt-4 bg-teal-700 hover:bg-teal-800 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className={`grid gap-8 ${
            filteredProducts.length === 1 
              ? 'grid-cols-1 justify-items-center max-w-sm md:max-w-md mx-auto'
              : filteredProducts.length === 2
              ? 'grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto'
              : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        )}
        
        {/* Results Count */}
        {products.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-400">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;