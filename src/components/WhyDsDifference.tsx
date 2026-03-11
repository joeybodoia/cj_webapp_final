import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router';

const highlights = [
  {
    lead: 'No High-Pressure Salespeople',
    text: 'Just honest conversations and real recommendations based on your needs.',
  },
  {
    lead: 'Drive a Little, Save a Lot',
    text: 'Our lower overhead means better prices passed directly to you.',
  },
  {
    lead: '35+ Years of Industry Experience',
    text: 'Founded in 1987. We know spas inside and out.',
  },
  {
    lead: 'Premium Brand Partners',
    text: 'Aspen Spas, Nordic Hot Tubs, Coast Spas - only the best brands.',
  },
];

const WhyDsDifference = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;
  const brands = [
    {
      name: 'Aspen Spas',
      logo: `${baseUrl}imgs/aspen.png`,
      company: 'Aspen Spas',
    },
    {
      name: 'Nordic Hot Tubs',
      logo: `${baseUrl}imgs/nordic.png`,
      company: 'Nordic Hot Tubs',
    },
    {
      name: 'Coast Spas',
      logo: `${baseUrl}imgs/coast_spas.png`,
      company: 'Coast Spas',
    },
  ];

  const handleBrandClick = (company: string) => {
    navigate('/hot-tubs', {
      state: {
        filterBrand: company,
      },
    });
  };

  return (
    <section className="bg-[#176f64] px-4 pb-14 pt-8 md:px-6 md:pb-16 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Why D&apos;s Outdoor Living</p>
          <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">The D&apos;s Difference</h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg font-medium text-teal-100/65 md:text-2xl">
            We&apos;re not a chain. We&apos;re a family and we treat every customer like one.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl border-y border-white/15 md:mt-14">
          {highlights.map((item, idx) => (
            <div
              key={item.lead}
              className={`flex items-start gap-3 py-5 md:items-center md:gap-4 md:py-6 ${idx < highlights.length - 1 ? 'border-b border-white/15' : ''}`}
            >
              <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-teal-400/70 text-teal-400 md:mt-0 md:h-9 md:w-9">
                <Check size={16} strokeWidth={2.6} />
              </span>
              <p className="text-lg leading-snug text-teal-100/90 md:text-[2rem]">
                <strong className="font-semibold text-white">{item.lead}</strong>
                <span className="text-teal-100/85"> - {item.text}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-7 md:mt-12 md:gap-10">
          {brands.map((brand) => (
            <button
              key={brand.name}
              type="button"
              onClick={() => handleBrandClick(brand.company)}
              className="group cursor-pointer rounded-full transition-transform duration-300 hover:scale-105"
              aria-label={`View ${brand.name} hot tubs`}
            >
              <div className="h-[88px] w-[88px] overflow-hidden rounded-full bg-white p-1 shadow-lg transition-shadow duration-300 group-hover:shadow-xl sm:h-[106px] sm:w-[106px] md:h-[124px] md:w-[124px]">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full rounded-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDsDifference;
