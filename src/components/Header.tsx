import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navTextShadow = { textShadow: '0 0 2px rgba(42, 45, 50, 0.7)' };
  const modalGreenShadow = { textShadow: '0 0 2px rgba(15, 118, 110, 0.7)' };
  const modalWhiteShadow = { textShadow: '0 0 2px rgba(255, 255, 255, 0.7)' };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page with hash
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!isMaintenanceOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMaintenanceOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMaintenanceOpen]);

  useEffect(() => {
    setIsProductsOpen(false);
    setIsLocationsOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {/* Green Contact Bar */}
      <div className="bg-custom-dark/90 backdrop-blur-md text-white/90 py-2 px-4 border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline">Call to schedule a private appointment to view our showroom</span>
            <span className="md:hidden">Call to schedule an appointment</span>
            <a href="tel:(480) 997-9447" className="font-semibold hover:text-gray-300 transition-colors">
              (480) 997-9447
            </a>
          </div>
          <div className="hidden md:block">
            <a href="mailto:CJ@ds-outdoorliving.com" className="hover:text-gray-300 transition-colors">
              CJ@ds-outdoorliving.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="bg-teal-800/90 backdrop-blur-md border-b border-teal-600/40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Left Navigation */}
          <div className="flex items-center space-x-8">
            {/* Circular Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                <img 
                  src="https://i.imgur.com/p59g2OD.png" 
                  alt="D's Outdoor Living Logo"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-contain bg-white rounded-full p-0.5"
                />
              </div>
            </Link>
            
            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <button
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
                  style={navTextShadow}
                >
                  Products
                </button>
                {isProductsOpen && (
                  <div className="absolute left-0 mt-3 w-56 rounded-xl border border-teal-600/40 bg-custom-dark/95 shadow-2xl backdrop-blur-md">
                    <div className="py-2">
                      <Link
                        to="/hot-tubs"
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-700/70 transition-colors"
                      >
                        Hot Tubs
                      </Link>
                      <Link
                        to="/swim-spas"
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-700/70 transition-colors"
                      >
                        Swim Spas
                      </Link>
                      <Link
                        to="/contrast-therapy-spas"
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-700/70 transition-colors"
                      >
                        Contrast Therapy Spas
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setIsLocationsOpen((prev) => !prev)}
                  className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
                  style={navTextShadow}
                >
                  Locations
                </button>
                {isLocationsOpen && (
                  <div className="absolute left-0 mt-3 w-48 rounded-xl border border-teal-600/40 bg-custom-dark/95 shadow-2xl backdrop-blur-md">
                    <div className="py-2">
                      <Link
                        to="/phoenix"
                        onClick={() => setIsLocationsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-700/70 transition-colors"
                      >
                        Phoenix
                      </Link>
                      <Link
                        to="/surprise"
                        onClick={() => setIsLocationsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-700/70 transition-colors"
                      >
                        Surprise
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <button
                onClick={() => setIsMaintenanceOpen(true)}
                className="text-amber-200 hover:text-amber-100 transition-colors font-medium tracking-wide"
                style={{ textShadow: '0 0 2px rgba(0, 0, 0, 0.75)' }}
              >
                Maintenance Plans
              </button>
            </nav>
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('our-story')}
              className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              style={navTextShadow}
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
              style={navTextShadow}
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-teal-600">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setIsProductsOpen((prev) => !prev)}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Products
              </button>
              {isProductsOpen && (
                <div className="flex flex-col space-y-3 border-l border-teal-600/60 pl-4">
                  <Link
                    to="/hot-tubs"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-white/90 hover:text-white transition-colors text-left font-medium tracking-wide"
                  >
                    Hot Tubs
                  </Link>
                  <Link
                    to="/swim-spas"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-white/90 hover:text-white transition-colors text-left font-medium tracking-wide"
                  >
                    Swim Spas
                  </Link>
                  <Link
                    to="/contrast-therapy-spas"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-white/90 hover:text-white transition-colors text-left font-medium tracking-wide"
                  >
                    Contrast Therapy Spas
                  </Link>
                </div>
              )}
              <button
                onClick={() => setIsLocationsOpen((prev) => !prev)}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Locations
              </button>
              {isLocationsOpen && (
                <div className="flex flex-col space-y-3 border-l border-teal-600/60 pl-4">
                  <Link
                    to="/phoenix"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLocationsOpen(false);
                    }}
                    className="text-white/90 hover:text-white transition-colors text-left font-medium tracking-wide"
                  >
                    Phoenix
                  </Link>
                  <Link
                    to="/surprise"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLocationsOpen(false);
                    }}
                    className="text-white/90 hover:text-white transition-colors text-left font-medium tracking-wide"
                  >
                    Surprise
                  </Link>
                </div>
              )}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsMaintenanceOpen(true);
                }}
                className="text-amber-200 hover:text-amber-100 transition-colors text-left font-medium tracking-wide"
                style={{ textShadow: '0 0 2px rgba(0, 0, 0, 0.75)' }}
              >
                Maintenance Plans
              </button>
              <button 
                onClick={() => scrollToSection('our-story')}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Contact Us
              </button>
              <Link 
                to="/locations"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Locations
              </Link>
            </div>
          </nav>
        )}
      </div>
      </div>

      {isMaintenanceOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8"
          onClick={() => setIsMaintenanceOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-2xl border border-teal-600/40 bg-custom-dark text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-teal-600/40 px-6 py-5">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold" style={modalGreenShadow}>
                  What's included in a Maintenance Plan?
                </h2>
                <p className="text-base md:text-lg font-semibold text-teal-700">
                  Call or text today to get a quote! 480-997-9781
                </p>
              </div>
              <button
                onClick={() => setIsMaintenanceOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close maintenance plan modal"
              >
                <X size={22} />
              </button>
            </div>
            <div className="max-h-[80vh] overflow-y-auto px-6 py-6 space-y-6">
              <div className="space-y-3 text-gray-200 leading-relaxed">
                <h3 className="text-lg md:text-xl font-semibold text-teal-700">
                  Chemical Service &amp; Water Chemistry Balance:
                </h3>
                <p>
                  Our certified technician will balance the water and add any chemicals needed to ensure
                  your water is safe and crystal clear. Additional chemicals may be required depending
                  on the bathing load and how often the unit is used. Customers can be sold chemicals if
                  they run out, as all chemicals will be stocked by the technician if the customer needs.
                </p>
              </div>

              <div className="space-y-3 text-gray-200 leading-relaxed">
                <h3 className="text-lg md:text-xl font-semibold text-teal-700">
                  While we are there, we will also..
                </h3>
                <p>
                  Do a comprehensive check to ensure all equipment is in good working condition. We will
                  hose off your spa cover, clean the exterior cabinet, as well as clean the filters. Our
                  job is not only to make sure the water chemistry is perfect, but also that your hot tub
                  is looking good as new.
                </p>
              </div>

              <div className="space-y-3 text-gray-200 leading-relaxed">
                <h3 className="text-lg md:text-xl font-semibold text-teal-700">
                  Drain &amp; Refill Include:
                </h3>
                <p>
                  Completely drain the water to prepare for thorough cleaning. We will provide a solution
                  that will run though the entire unit, removing all build-up, gunk, and bacteria that does
                  not get removed with standard cleaning. This will ensure every part of your hot tub is
                  clean and functioning correctly for its next use! While empty, our tech will clean the
                  entire hot tub getting rid of any metal build-up or debris in the unit. Once your hot tub
                  or swim spa is clean, our technician will begin the refill for you. There is an extra
                  labor charge if you would like him to stay until it's full. The cost depends on the size
                  of your hot tub or swim spa and how long it will take to fill.
                </p>
              </div>

              <div
                className="rounded-xl border border-teal-600/30 bg-teal-700/20 px-5 py-4 text-sm md:text-base text-gray-100"
                style={modalGreenShadow}
              >
                <p className="font-semibold text-white">D's Outdoor Living</p>
                <p>Office: (480)997-9447</p>
                <p>Website: dsoutdoorliving.com</p>
                <p>Email: service@dsoutdoorliving.com</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
