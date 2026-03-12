import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router';

interface ProductImageBannerProps {
  productName: string;
  imageUrls: Record<string, string>;
  description?: string;
  product: any;
}

const TYPE_TO_CATEGORY: Record<string, string> = {
  'Spa': 'hot-tubs',
  'Swim Spa': 'swim-spas',
  'Contrast Therapy Spa': 'contrast-therapy-spas',
};

const ProductImageBanner: React.FC<ProductImageBannerProps> = ({
  productName,
  imageUrls,
  product,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const navigate = useNavigate();

  const images = Object.values(imageUrls || {});

  const getSpecification = (category: string, field: string) => {
    if (product?.product_specifications && Array.isArray(product.product_specifications)) {
      const categorySpec = product.product_specifications.find((spec: any) => spec[category]);
      return categorySpec?.[category]?.[field] ?? null;
    }
    return null;
  };

  const capacity = getSpecification('General Specifications', 'Capacity');
  const measurements = getSpecification('General Specifications', 'Measurements (inch)');
  const seats = getSpecification('General Specifications', 'Seats');
  const dryWeight = getSpecification('General Specifications', 'Dry Weight (lbs)');
  const gallons =
    product?.product_description && typeof product.product_description === 'object'
      ? (product.product_description as Record<string, any>).Gallons ?? null
      : null;

  const category = TYPE_TO_CATEGORY[product?.product_type] ?? '';
  const quoteUrl = `/get-a-quote?category=${category}&product=${encodeURIComponent(productName)}`;

  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const fallbackImage =
    'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop';

  const specRows = [
    capacity && { label: 'Capacity', value: `${capacity} People` },
    measurements && { label: 'Measurements', value: `${measurements} inches` },
    seats && { label: 'Number of Seats', value: seats },
    dryWeight && { label: 'Dry Weight', value: `${dryWeight} lbs` },
    gallons && { label: 'Gallons', value: gallons },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <section className="bg-[#0f5b53] px-4 py-12 md:px-6 md:py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-3 md:space-y-4">
            <div className="relative overflow-hidden rounded-xl bg-white shadow-lg">
              <img
                src={images[selectedImageIndex] ?? fallbackImage}
                alt={`${productName} - Image ${selectedImageIndex + 1}`}
                loading="eager"
                decoding="async"
                fetchpriority="high"
                className={`h-64 w-full bg-black md:h-80 ${
                  product?.product_company === 'Aspen Spas' ? 'object-cover' : 'object-contain'
                }`}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = fallbackImage;
                }}
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white transition hover:bg-black/70 md:left-4 md:p-2"
                  >
                    <ChevronLeft size={16} className="md:h-5 md:w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1 text-white transition hover:bg-black/70 md:right-4 md:p-2"
                  >
                    <ChevronRight size={16} className="md:h-5 md:w-5" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex justify-center space-x-1 overflow-x-auto pb-2 md:space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 md:h-20 md:w-20 ${
                      selectedImageIndex === index
                        ? 'border-white shadow-lg'
                        : 'border-transparent hover:border-white/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${productName} thumbnail ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className={`h-full w-full bg-black ${
                        product?.product_company === 'Aspen Spas' ? 'object-cover' : 'object-contain'
                      }`}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = fallbackImage;
                      }}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="text-white">
            {product?.product_type && (
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">
                {product.product_type}
              </p>
            )}
            <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {productName}
            </h1>
            <div className="mt-4 h-1 w-24 bg-teal-400" />

            {product?.product_description?.Description && (
              <p className="mt-5 text-lg font-medium leading-relaxed text-teal-100/80 md:text-xl">
                {product.product_description.Description}
              </p>
            )}

            {specRows.length > 0 && (
              <div className="mt-6 space-y-2 md:mt-8 md:space-y-3">
                {specRows.map(({ label, value }) => (
                  <div key={label} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
                    <span className="w-40 font-semibold text-white">{label}:</span>
                    <span className="text-teal-100/80">{value}</span>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => navigate(quoteUrl)}
              className="mt-8 rounded-md bg-teal-400 px-7 py-3 text-lg font-semibold text-white transition hover:bg-teal-300"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductImageBanner;
