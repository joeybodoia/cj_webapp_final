import React, { useMemo } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import { useProducts } from '../hooks/useProducts';
import { useProductFilters } from '../hooks/useProductFilters';
import { InventoryItem } from '../lib/supabase';

interface ProductGridProps {
  productType: string;
  title: string;
  description: string;
  initialBrandFilter?: string;
}

/**
 * Slugify product names into your /product/:productName format.
 * Must match whatever you use in ProductCard navigation so URLs stay consistent.
 */
const toProductSlug = (name: string) =>
  String(name || '')
    .trim()
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');

const getProductUrl = (product: InventoryItem) => {
  const slug = toProductSlug(product.product_name);
  return `https://dsoutdoorliving.com/product/${slug}`;
};

const ProductGrid: React.FC<ProductGridProps> = ({
  productType,
  title,
  description,
  initialBrandFilter
}) => {
  const { products, loading, error } = useProducts(productType);

  const {
    filters,
    filteredProducts,
    availableBrands,
    isFilterOpen,
    handleFilterChange,
    clearFilters,
    toggleFilterPanel
  } = useProductFilters(products, initialBrandFilter);

  /**
   * SEO: ItemList JSON-LD for category pages.
   * Note: With your current architecture (client-side fetch), this will be injected
   * after products load. Still useful, but best if products are SSR-rendered.
   */
  const itemListJsonLd = useMemo(() => {
    if (!filteredProducts || filteredProducts.length === 0) return null;

    return {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: title,
      numberOfItems: filteredProducts.length,
      itemListElement: filteredProducts.map((p, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: getProductUrl(p),
        name: p.product_name
      }))
    };
  }, [filteredProducts, title]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a3d35] pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center rounded-lg border border-teal-300/20 bg-[#176f64] px-6 py-5">
            <Loader2 className="h-8 w-8 animate-spin text-teal-300" />
            <span className="ml-2 text-lg text-teal-50/90">Loading products...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a3d35] pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="flex items-center justify-center rounded-lg border border-rose-300/35 bg-[#176f64] px-6 py-5 text-rose-100">
            <AlertCircle className="h-8 w-8" />
            <span className="ml-2 text-lg">Error loading products: {error}</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#0a3d35] pt-20"
      data-ssr="true"
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* SEO: ItemList schema */}
        {itemListJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
          />
        )}

        <div className="mb-14 text-center md:mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">What We Offer</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
            {title}
          </h1>

          <p className="mx-auto mt-5 max-w-4xl px-4 text-lg font-medium leading-relaxed text-teal-100/65 md:text-2xl">
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
            <p className="text-lg text-teal-100/80">No products found in this category.</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-teal-100/80">No products match your current filters.</p>
            <button
              onClick={clearFilters}
              className="mt-4 rounded-md bg-teal-400 px-6 py-2 font-semibold text-white transition hover:bg-teal-300"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div
            className={`grid gap-8 items-stretch ${
              filteredProducts.length === 1
                ? 'grid-cols-1 justify-items-center max-w-sm md:max-w-md mx-auto'
                : filteredProducts.length === 2
                ? 'grid-cols-1 md:grid-cols-2 justify-items-center max-w-4xl mx-auto'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={`${product.product_name}-${index}`} product={product} />
            ))}
          </div>
        )}

        {/* Results Count */}
        {products.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-teal-100/65">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
