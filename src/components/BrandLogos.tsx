import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandLogos = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: 'Aspen Spas',
      logo: 'https://i.imgur.com/sBU8bR4.png',
      company: 'Aspen Spas'
    },
    {
      name: 'Nordic Hot Tubs', 
      logo: 'https://i.imgur.com/rtVjFJJ.png',
      company: 'Nordic Hot Tubs'
    },
    {
      name: 'Bellagio Spas',
      logo: 'https://i.imgur.com/R1VMD4b.png',
      company: 'Bellagio Spas'
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
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted Brand Partners
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
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
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-white p-4 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={brand.logo}
                  alt={brand.name}
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