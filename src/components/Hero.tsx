import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('spas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-[85vh] bg-custom-dark text-white overflow-hidden pt-36 md:pt-32 px-4 md:px-6">
      <div className="bg-teal-700 rounded-2xl h-full">
        <div className="container mx-auto px-4 h-full flex flex-col lg:flex-row items-center justify-between">
        <div className="flex-1 max-w-2xl text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white">
            Welcome to D's
            <span className="block">Outdoor Living</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-teal-200 leading-relaxed font-medium">
            Drive a little, save a lot
          </p>
          <button 
            onClick={scrollToProducts}
            className="bg-white text-teal-700 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Start Exploring
          </button>
        </div>
        
        {/* Circular Logo */}
        <div className="flex flex-1 justify-center items-center mt-6 lg:mt-0">
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-2xl bg-white p-1">
            <img 
              src="/hero-banner.png" 
              alt="D's Outdoor Living Logo"
              className="w-full h-full object-contain bg-white rounded-full"
            />
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;