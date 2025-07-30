import React from 'react';

const BrandLogos = () => {
  const brands = [
    {
      name: 'Brand 1',
      logo: 'https://i.imgur.com/XkLcjuG.png'
    },
    {
      name: 'Brand 2', 
      logo: 'https://i.imgur.com/rtVjFJJ.png'
    },
    {
      name: 'Brand 3',
      logo: 'https://i.imgur.com/R1VMD4b.png'
    }
  ];

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
              className="group cursor-pointer transform transition-all duration-300 hover:scale-110"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full overflow-hidden bg-white p-2 shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
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