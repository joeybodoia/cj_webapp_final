import { useState, useMemo } from 'react';
import { InventoryItem } from '../lib/supabase';
import { FilterOptions } from '../components/ProductFilters';

export const useProductFilters = (products: InventoryItem[], initialBrandFilter?: string) => {
  const [filters, setFilters] = useState<FilterOptions>({
    brand: initialBrandFilter ? [initialBrandFilter] : [],
    capacity: [],
    size: [],
    jets: []
  });

  const [isFilterOpen, setIsFilterOpen] = useState(!!initialBrandFilter);

  // Get available brands from products
  const availableBrands = useMemo(() => {
    const brands = products
      .map(product => product.product_company)
      .filter((brand): brand is string => Boolean(brand))
      .filter((brand, index, array) => array.indexOf(brand) === index)
      .sort();
    return brands;
  }, [products]);

  // Helper functions to extract data from products
  const getCapacityCategory = (product: InventoryItem): string | null => {
    if (product.product_description && typeof product.product_description === 'object') {
      const desc = product.product_description as Record<string, any>;
      const capacity = desc['Number of People'] || desc.Capacity;
      
      if (typeof capacity === 'number') {
        if (capacity <= 3) return '2-3';
        if (capacity <= 6) return '4-6';
        return '6+';
      }
    }
    return null;
  };

  const getSizeCategory = (product: InventoryItem): string | null => {
    if (product.product_description && typeof product.product_description === 'object') {
      const desc = product.product_description as Record<string, any>;
      const length = desc.Length;
      
      if (typeof length === 'number') {
        if (length < 80) return 'small';
        if (length <= 95) return 'medium';
        return 'large';
      }
    }
    return null;
  };

  const getJetsCategory = (product: InventoryItem): string | null => {
    if (product.product_specifications && Array.isArray(product.product_specifications)) {
      const jetSpec = product.product_specifications.find((spec: any) => spec['Jets Specifications']);
      if (jetSpec && jetSpec['Jets Specifications']) {
        const totalJets = jetSpec['Jets Specifications']['Total Jets (without blower)'];
        
        if (typeof totalJets === 'number') {
          if (totalJets <= 20) return '1-20';
          if (totalJets <= 40) return '21-40';
          if (totalJets <= 60) return '41-60';
          return '60+';
        }
      }
    }
    return null;
  };

  // Filter products based on active filters
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Brand filter
      if (filters.brand.length > 0) {
        if (!product.product_company || !filters.brand.includes(product.product_company)) {
          return false;
        }
      }

      // Capacity filter
      if (filters.capacity.length > 0) {
        const capacityCategory = getCapacityCategory(product);
        if (!capacityCategory || !filters.capacity.includes(capacityCategory)) {
          return false;
        }
      }

      // Size filter
      if (filters.size.length > 0) {
        const sizeCategory = getSizeCategory(product);
        if (!sizeCategory || !filters.size.includes(sizeCategory)) {
          return false;
        }
      }

      // Jets filter
      if (filters.jets.length > 0) {
        const jetsCategory = getJetsCategory(product);
        if (!jetsCategory || !filters.jets.includes(jetsCategory)) {
          return false;
        }
      }

      return true;
    });
  }, [products, filters]);

  const handleFilterChange = (filterType: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(item => item !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilters = () => {
    setFilters({
      brand: [],
      capacity: [],
      size: [],
      jets: []
    });
  };

  const toggleFilterPanel = () => {
    setIsFilterOpen(prev => !prev);
  };

  return {
    filters,
    filteredProducts,
    availableBrands,
    isFilterOpen,
    handleFilterChange,
    clearFilters,
    toggleFilterPanel
  };
};