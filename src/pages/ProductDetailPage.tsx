import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductImageBanner from '../components/ProductImageBanner';
import ProductSchema from '../components/ProductSchema';
import { InventoryItem } from '../lib/supabase';

type SpecSection = {
  id: string;
  key: string;
  title: string;
};

const SPEC_SECTIONS: SpecSection[] = [
  { id: 'general', key: 'General Specifications', title: 'General Specs' },
  { id: 'jets', key: 'Jets Specifications', title: 'Jet Specs' },
  { id: 'pumps', key: 'Standard Pumps Configuration', title: 'Standard Pumps Configuration' },
  { id: 'control', key: 'Control System Selection', title: 'Control System Selection' },
  { id: 'filtration', key: 'Filtration and Purification', title: 'Filtration and Purification' },
];

const FALLBACK_IMAGE =
  'https://images.pexels.com/photos/261327/pexels-photo-261327.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop';

const asNonEmptyString = (value: unknown) => (typeof value === 'string' && value.trim() ? value.trim() : null);

const asObjectRecord = (value: unknown): Record<string, unknown> | null => {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
};

const ProductDetailPage = () => {
  const [openDropdowns, setOpenDropdowns] = React.useState<Record<string, boolean>>({});
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product as InventoryItem | undefined;

  const toggleDropdown = (key: string) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a3d35]">
        <Header />
        <div className="py-24 pt-32">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-2xl rounded-xl border border-teal-300/20 bg-[#176f64] p-8 shadow-[0_14px_35px_rgba(0,0,0,0.25)] md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Product Detail</p>
              <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Product Not Found</h1>
              <p className="mt-5 text-lg font-medium text-teal-100/75 md:text-2xl">
                The product you&apos;re looking for could not be found.
              </p>
              <button
                onClick={() => navigate('/')}
                className="mt-8 rounded-md bg-teal-400 px-7 py-3 text-lg font-semibold text-white transition hover:bg-teal-300"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const description = (() => {
    const desc = asObjectRecord(product.product_description);
    return asNonEmptyString(desc?.Description) ?? null;
  })();

  const imageUrls = asObjectRecord(product.image_urls) as Record<string, string> | null;

  const productFeatures = Array.isArray(product.product_features) ? product.product_features : [];
  const productSpecifications = Array.isArray(product.product_specifications) ? product.product_specifications : [];
  const productAccessories = Array.isArray(product.product_accessories) ? product.product_accessories : [];

  const findSpecSection = (sectionKey: string) => {
    for (const spec of productSpecifications) {
      const container = asObjectRecord(spec);
      const sectionData = asObjectRecord(container?.[sectionKey]);
      if (sectionData) return sectionData;
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-[#0a3d35]">
      <Header />

      <ProductSchema product={product} />

      <div className="pt-20">
        <ProductImageBanner
          productName={product.product_name}
          imageUrls={imageUrls ?? {}}
          product={product}
        />
      </div>

      <section className="bg-[#0a3d35] px-4 py-12 md:px-6 md:py-16">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Product Details</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Product Features</h2>
          </div>

          {productFeatures.length > 0 ? (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 md:mt-12">
              {productFeatures.map((feature, index) => {
                const featureRecord = asObjectRecord(feature);
                const title = asNonEmptyString(featureRecord?.title) ?? 'Feature';
                const featureDescription = asNonEmptyString(featureRecord?.description) ?? 'Description unavailable.';
                const featureImage = asNonEmptyString(featureRecord?.image_url) ?? FALLBACK_IMAGE;

                return (
                  <article
                    key={`${title}-${index}`}
                    className="overflow-hidden rounded-xl border border-teal-300/25 bg-[#176f64] shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
                  >
                    <div className="p-4 pb-3 md:p-6 md:pb-4">
                      <h3 className="text-center text-3xl font-semibold text-white md:text-4xl">{title}</h3>
                    </div>

                    <div className="px-4 pb-3 md:px-6 md:pb-4">
                      <div className="h-40 w-full overflow-hidden rounded-lg bg-white/95 md:h-48">
                        <img
                          src={featureImage}
                          alt={title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = FALLBACK_IMAGE;
                          }}
                        />
                      </div>
                    </div>

                    <div className="p-4 pt-0 md:p-6 md:pt-0">
                      <p className="text-center text-base leading-relaxed text-teal-50/90 md:text-lg">{featureDescription}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-xl border border-teal-300/20 bg-[#176f64] p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.25)] md:mt-12">
              <p className="text-lg text-teal-100/80">No product features available.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#0f5b53] px-4 py-12 md:px-6 md:py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Technical Details</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Product Specifications</h2>
          </div>

          {productSpecifications.length > 0 ? (
            <div className="mt-10 space-y-3 md:mt-12 md:space-y-4">
              {SPEC_SECTIONS.map((section) => {
                const sectionData = findSpecSection(section.key);
                if (!sectionData) return null;

                return (
                  <div key={section.id} className="overflow-hidden rounded-lg border border-teal-300/30 bg-[#176f64]">
                    <button
                      onClick={() => toggleDropdown(section.id)}
                      className="flex w-full items-center justify-between bg-[#176f64] px-4 py-3 text-left text-white transition-colors duration-200 hover:bg-[#1c7a6d] md:px-6 md:py-4"
                    >
                      <span className="text-base font-semibold md:text-lg">{section.title}</span>
                      {openDropdowns[section.id] ? (
                        <ChevronUp className="h-5 w-5 text-white" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-white" />
                      )}
                    </button>

                    {openDropdowns[section.id] && (
                      <div className="border-t border-teal-300/20 bg-[#125f56] px-4 py-3 md:px-6 md:py-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {Object.entries(sectionData).map(([key, value]) => (
                            <div
                              key={key}
                              className="flex flex-col justify-between border-b border-white/10 py-2 last:border-b-0 md:flex-row md:items-center"
                            >
                              <span className="text-sm font-medium text-teal-100/90 md:text-base">{key}:</span>
                              <span className="text-sm text-white md:text-base">{String(value)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-10 rounded-xl border border-teal-300/20 bg-[#176f64] p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.25)] md:mt-12">
              <p className="text-lg text-teal-100/80">No product specifications available.</p>
            </div>
          )}
        </div>
      </section>

      {product.product_type !== 'Gazebo' && (
        <section className="bg-[#0a3d35] px-4 py-12 md:px-6 md:py-16">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Accessories</p>
              <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Complete Your Setup</h2>
            </div>

            {productAccessories.length > 0 ? (
              <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {productAccessories.map((accessory, index) => {
                  const accessoryRecord = asObjectRecord(accessory);
                  const title = asNonEmptyString(accessoryRecord?.title) ?? 'Accessory';
                  const accessoryDescription =
                    asNonEmptyString(accessoryRecord?.description) ?? 'Description unavailable.';
                  const accessoryImage = asNonEmptyString(accessoryRecord?.image_url) ?? FALLBACK_IMAGE;

                  return (
                    <article
                      key={`${title}-${index}`}
                      className="overflow-hidden rounded-xl border border-teal-300/25 bg-[#176f64] shadow-[0_12px_35px_rgba(0,0,0,0.25)]"
                    >
                      <div className="p-4 pb-3 md:p-6 md:pb-4">
                        <h3 className="text-center text-3xl font-semibold text-white md:text-4xl">{title}</h3>
                      </div>

                      <div className="px-4 pb-3 md:px-6 md:pb-4">
                        <div className="h-40 w-full overflow-hidden rounded-lg bg-white/95 md:h-48">
                          <img
                            src={accessoryImage}
                            alt={title}
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = FALLBACK_IMAGE;
                            }}
                          />
                        </div>
                      </div>

                      <div className="p-4 pt-0 md:p-6 md:pt-0">
                        <p className="text-center text-base leading-relaxed text-teal-50/90 md:text-lg">{accessoryDescription}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <div className="mt-10 rounded-xl border border-teal-300/20 bg-[#176f64] p-8 text-center shadow-[0_12px_35px_rgba(0,0,0,0.25)] md:mt-12">
                <p className="text-lg text-teal-100/80">No accessories available for this product.</p>
              </div>
            )}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
