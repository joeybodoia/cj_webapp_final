import React from 'react';
import { Filter, X } from 'lucide-react';

export interface FilterOptions {
  brand: string[];
  capacity: string[];
  size: string[];
  jets: string[];
}

interface ProductFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filterType: keyof FilterOptions, value: string) => void;
  onClearFilters: () => void;
  availableBrands: string[];
  isOpen: boolean;
  onToggle: () => void;
  productType?: string;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  availableBrands,
  isOpen,
  onToggle,
  productType
}) => {
  const capacityOptions = [
    { value: '2-3', label: '2-3 People' },
    { value: '4-6', label: '4-6 People' },
    { value: '6+', label: '6+ People' }
  ];

  const sizeOptions = [
    { value: 'small', label: 'Small (< 80")' },
    { value: 'medium', label: 'Medium (80-95")' },
    { value: 'large', label: 'Large (> 95")' }
  ];

  const jetOptions = [
    { value: '1-20', label: '1-20 Jets' },
    { value: '21-40', label: '21-40 Jets' },
    { value: '41-60', label: '41-60 Jets' },
    { value: '60+', label: '60+ Jets' }
  ];

  const hasActiveFilters = Object.values(filters).some(filterArray => filterArray.length > 0);

  return (
    <div className="mb-8">
      {/* Filter Toggle Button */}
      <button
        onClick={onToggle}
        className="flex items-center space-x-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-300 mb-4"
      >
        <Filter size={20} />
        <span>Filters</span>
        {hasActiveFilters && (
          <span className="bg-white text-teal-700 px-2 py-1 rounded-full text-xs font-bold">
            {Object.values(filters).reduce((total, filterArray) => total + filterArray.length, 0)}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Filter Products</h3>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="flex items-center space-x-1 text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                <X size={16} />
                <span>Clear All</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Filter */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {availableBrands.map((brand) => (
                  <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand)}
                      onChange={() => onFilterChange('brand', brand)}
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-gray-700">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Capacity Filter */}
            {productType !== 'Gazebo' && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Capacity</h4>
                <div className="space-y-2">
                  {capacityOptions.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.capacity.includes(option.value)}
                        onChange={() => onFilterChange('capacity', option.value)}
                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Size Filter */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Size (Length)</h4>
              <div className="space-y-2">
                {sizeOptions.map((option) => (
                  <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={filters.size.includes(option.value)}
                      onChange={() => onFilterChange('size', option.value)}
                      className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                    />
                    <span className="text-gray-700">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Jets Filter */}
            {productType !== 'Gazebo' && (
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Number of Jets</h4>
                <div className="space-y-2">
                  {jetOptions.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={filters.jets.includes(option.value)}
                        onChange={() => onFilterChange('jets', option.value)}
                        className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                      />
                      <span className="text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilters;