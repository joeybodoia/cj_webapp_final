import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { InventoryItem } from '../lib/supabase';

interface ProductCardProps {
  product: InventoryItem;
}

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';

const toSlug = (name: string) =>
  String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/(^-|-$)/g, '');

const getPrimaryImageFromImageUrls = (imageUrls: unknown): string => {
  if (!imageUrls) return FALLBACK_IMAGE;

  // Case 1: array of urls
  if (Array.isArray(imageUrls)) {
    const first = imageUrls.find((u) => typeof u === 'string' && u.trim().length > 0);
    return first ? first.trim() : FALLBACK_IMAGE;
  }

  // Case 2: object map { "image 1": "...", ... }
  if (typeof imageUrls === 'object') {
    const obj = imageUrls as Record<string, unknown>;

    const image1 = obj['image 1'];
    if (typeof image1 === 'string' && image1.trim()) return image1.trim();

    const first = Object.values(obj).find((v) => typeof v === 'string' && v.trim().length > 0);
    return typeof first === 'string' ? first.trim() : FALLBACK_IMAGE;
  }

  return FALLBACK_IMAGE;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();

  // Optional: keep logs only in dev
  // if (import.meta.env.DEV) {
  //   console.log('Product:', product.product_name);
  //   console.log('Product specifications:', product.product_specifications);
  //   console.log('Full product object:', product);
  // }

  const handleProductClick = () => {
    const slug = toSlug(product.product_name);
    navigate(`/product/${slug}`, { state: { product } });
  };

  const primaryImage = getPrimaryImageFromImageUrls(product.image_urls);

  const getCapacity = () => {
    if (product.product_specifications && Array.isArray(product.product_specifications)) {
      const generalSpecs = product.product_specifications.find((spec: any) => spec?.['General Specifications']);
      const cap = generalSpecs?.['General Specifications']?.['Capacity'];
      if (cap) return `${cap} People`;
    }
    return null;
  };

  const getMeasurements = () => {
    if (product.product_specifications && Array.isArray(product.product_specifications)) {
      const generalSpecs = product.product_specifications.find((spec: any) => spec?.['General Specifications']);
      const m = generalSpecs?.['General Specifications']?.['Measurements (inch)'];
      if (m) return m;
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
                  product.product_company === 'Aspen Spas' ? 'object-cover' : 'object-contain'
                }`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = FALLBACK_IMAGE;
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

