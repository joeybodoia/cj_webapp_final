import React from 'react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('spas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[85vh] bg-custom-dark text-white overflow-visible pt-36 md:pt-32 px-4 md:px-6">
      <div className="bg-gradient-to-br from-teal-700 via-teal-700 to-teal-800 rounded-3xl h-full shadow-[0_20px_60px_rgba(8,84,78,0.45)] border border-white/10">
        <div className="container mx-auto px-4 pt-8 md:pt-12 h-full flex flex-col lg:flex-row items-center justify-between">
        {/* Mobile Layout */}
        <div className="flex-1 max-w-2xl text-center lg:text-left lg:hidden">
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight text-white"
            style={{ textShadow: '0 0 2px rgba(42, 45, 50, 0.7)' }}
          >
            Welcome to D's
            <span className="block">Outdoor Living</span>
          </h1>
          
          {/* Mobile Logo - positioned between title and tagline */}
          <div className="flex justify-center items-center my-6 lg:hidden">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl bg-white p-1">
              <img 
                src="https://i.imgur.com/dVNqGLc.png" 
                alt="D's Outdoor Living Logo"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                className="w-full h-full object-contain bg-white rounded-full"
              />
            </div>
          </div>
          <div className="flex justify-center lg:hidden">
            <a
              href="https://www.bbb.org/us/az/surprise/profile/hot-tub-supplies/ds-outdoor-living-llc-1126-1000155491/#sealclick"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://seal-central-northern-western-arizona.bbb.org/seals/black-seal-120-61-bbb-1000155491.png"
                style={{ border: 0 }}
                alt="D's Outdoor Living LLC BBB Business Review"
                className="h-14 w-auto"
              />
            </a>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-teal-200 leading-relaxed font-medium">
            Drive a little, save a lot
          </p>
          <button 
            onClick={scrollToProducts}
            className="bg-white/95 text-teal-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
          >
            Start Exploring
          </button>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-1 max-w-2xl text-left">
          <div className="flex-1">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 md:mb-6 leading-tight text-white"
              style={{ textShadow: '0 0 2px rgba(42, 45, 50, 0.7)' }}
            >
              Welcome to D's
              <span className="block">Outdoor Living</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-teal-200 leading-relaxed font-medium">
              Drive a little, save a lot
            </p>
            <button 
              onClick={scrollToProducts}
              className="bg-white/95 text-teal-800 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              Start Exploring
            </button>
          </div>
        </div>
        
        {/* Desktop Logo */}
        <div className="hidden lg:flex flex-1 justify-center items-center mt-6 lg:mt-0">
          <div className="flex flex-col items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-2xl bg-white p-1">
              <img 
                src="https://i.imgur.com/dVNqGLc.png" 
                alt="D's Outdoor Living Logo"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                className="w-full h-full object-contain bg-white rounded-full"
              />
            </div>
            <a
              href="https://www.bbb.org/us/az/surprise/profile/hot-tub-supplies/ds-outdoor-living-llc-1126-1000155491/#sealclick"
              className="mt-4"
              target="_blank"
              rel="nofollow"
            >
              <img
                src="https://seal-central-northern-western-arizona.bbb.org/seals/black-seal-120-61-bbb-1000155491.png"
                style={{ border: 0 }}
                alt="D's Outdoor Living LLC BBB Business Review"
                className="h-16 w-auto"
              />
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
