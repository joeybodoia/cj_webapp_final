import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandLogos = () => {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  const brands = [
    {
      name: 'Aspen Spas',
      logo: `${baseUrl}imgs/aspen.png`,
      company: 'Aspen Spas'
    },
    {
      name: 'Nordic Hot Tubs', 
      logo: `${baseUrl}imgs/nordic.png`,
      company: 'Nordic Hot Tubs'
    },
    {
      name: 'Coast Spas',
      logo: `${baseUrl}imgs/coast_spas.png`,
      company: 'Coast Spas'
    }
  ];

  const handleBrandClick = (company: string) => {
    // Navigate to spas page and pass the brand filter in state
    navigate('/spas', { 
      state: { 
        filterBrand: company 
      } 
    });
  };

  return (
    <section className="py-12 md:py-16 bg-custom-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-5">
            Trusted Brand Partners
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We proudly represent these premium spa manufacturers
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 lg:space-x-16">
          {brands.map((brand, index) => (
            <div
              key={index}
              onClick={() => handleBrandClick(brand.company)}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-white p-1 sm:p-2 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain rounded-full"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
