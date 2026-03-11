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
        className="mb-4 flex items-center space-x-2 rounded-md border border-teal-300/40 bg-[#176f64] px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-[#1c7a6d]"
      >
        <Filter size={20} />
        <span>Filters</span>
        {hasActiveFilters && (
          <span className="rounded-full bg-teal-300 px-2 py-1 text-xs font-bold text-[#0a3d35]">
            {Object.values(filters).reduce((total, filterArray) => total + filterArray.length, 0)}
          </span>
        )}
      </button>

      {/* Filter Panel */}
      {isOpen && (
        <div className="rounded-xl border border-teal-300/25 bg-[#176f64] p-6 shadow-[0_14px_35px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-3xl font-semibold text-white">Filter Products</h3>
            {hasActiveFilters && (
              <button
                onClick={onClearFilters}
                className="flex items-center space-x-1 font-medium text-teal-200 transition-colors hover:text-white"
              >
                <X size={16} />
                <span>Clear All</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Brand Filter */}
            <div>
              <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-teal-100">Brand</h4>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {availableBrands.map((brand) => (
                  <label key={brand} className="flex cursor-pointer items-center space-x-2 text-teal-50/90">
                    <input
                      type="checkbox"
                      checked={filters.brand.includes(brand)}
                      onChange={() => onFilterChange('brand', brand)}
                      className="rounded border-teal-200/60 bg-transparent text-teal-300 focus:ring-teal-300"
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Capacity Filter */}
            {productType !== 'Gazebo' && (
              <div>
                <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-teal-100">Capacity</h4>
                <div className="space-y-2">
                  {capacityOptions.map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-center space-x-2 text-teal-50/90">
                      <input
                        type="checkbox"
                        checked={filters.capacity.includes(option.value)}
                        onChange={() => onFilterChange('capacity', option.value)}
                        className="rounded border-teal-200/60 bg-transparent text-teal-300 focus:ring-teal-300"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Size Filter */}
            <div>
              <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-teal-100">Size (Length)</h4>
              <div className="space-y-2">
                {sizeOptions.map((option) => (
                  <label key={option.value} className="flex cursor-pointer items-center space-x-2 text-teal-50/90">
                    <input
                      type="checkbox"
                      checked={filters.size.includes(option.value)}
                      onChange={() => onFilterChange('size', option.value)}
                      className="rounded border-teal-200/60 bg-transparent text-teal-300 focus:ring-teal-300"
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Jets Filter */}
            {productType !== 'Gazebo' && (
              <div>
                <h4 className="mb-3 text-base font-semibold uppercase tracking-wide text-teal-100">Number of Jets</h4>
                <div className="space-y-2">
                  {jetOptions.map((option) => (
                    <label key={option.value} className="flex cursor-pointer items-center space-x-2 text-teal-50/90">
                      <input
                        type="checkbox"
                        checked={filters.jets.includes(option.value)}
                        onChange={() => onFilterChange('jets', option.value)}
                        className="rounded border-teal-200/60 bg-transparent text-teal-300 focus:ring-teal-300"
                      />
                      <span>{option.label}</span>
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
