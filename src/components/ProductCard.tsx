import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { InventoryItem } from '../lib/supabase';

interface ProductCardProps {
  product: InventoryItem;
}

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';

const getGeneralSpecifications = (specifications: InventoryItem['product_specifications']) => {
  if (!Array.isArray(specifications)) return null;

  for (const spec of specifications) {
    if (!spec || typeof spec !== 'object') continue;
    const candidate = spec['General Specifications'];
    if (candidate && typeof candidate === 'object') return candidate as Record<string, unknown>;
  }

  return null;
};

const readSpecString = (specs: Record<string, unknown> | null, key: string) => {
  if (!specs) return null;
  const value = specs[key];
  return typeof value === 'string' && value.trim() ? value.trim() : null;
};

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

  const generalSpecifications = getGeneralSpecifications(product.product_specifications);
  const capacityValue = readSpecString(generalSpecifications, 'Capacity');
  const measurements = readSpecString(generalSpecifications, 'Measurements (inch)');
  const capacity = capacityValue ? `${capacityValue} People` : null;

  return (
    <div
      onClick={handleProductClick}
      className="mx-auto h-full w-full max-w-sm cursor-pointer overflow-hidden rounded-xl border border-teal-300/25 bg-[#176f64] shadow-[0_12px_35px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.35)]"
    >
      <div className="relative overflow-hidden flex flex-col h-full">
        <div className="h-48 bg-[#0f5b53] px-3 pb-4 pt-4 md:h-64 md:px-4 md:pb-6 md:pt-6">
          <div className="h-full flex items-center justify-center">
            <div className="relative inline-block">
              <img
                src={primaryImage}
                alt={product.product_name}
                loading="lazy"
                decoding="async"
                className={`max-h-44 max-w-60 rounded-lg border-2 border-white/15 transition-transform duration-300 hover:scale-105 md:max-h-60 md:max-w-72 md:border-4 ${
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

        <div className="flex flex-1 flex-col p-4 md:p-6">
          <h3 className="mb-2 text-4xl font-bold leading-tight text-white">{product.product_name}</h3>
          {product.product_company && (
            <p className="mb-2 text-sm font-medium text-teal-200">by {product.product_company}</p>
          )}

          <div className="mb-6 space-y-3">
            {capacity && (
              <div className="text-sm text-teal-100 md:text-base">
                <span className="font-semibold text-white">Capacity:</span> {capacity}
              </div>
            )}
            {measurements && (
              <div className="text-sm text-teal-100 md:text-base">
                <span className="font-semibold text-white">Measurements:</span> {measurements}
              </div>
            )}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleProductClick();
            }}
            className="mt-auto flex w-full items-center justify-center space-x-2 rounded-md bg-teal-400 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-teal-300 md:py-3 md:text-base"
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
