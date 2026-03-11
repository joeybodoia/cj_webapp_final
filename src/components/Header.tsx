import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import OurStory from './OurStory';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMaintenanceOpen, setIsMaintenanceOpen] = useState(false);
  const [isOurStoryOpen, setIsOurStoryOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);
  const productsMenuRef = useRef<HTMLDivElement | null>(null);
  const locationsMenuRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const navTextShadow = { textShadow: '0 0 2px rgba(42, 45, 50, 0.7)' };
  const openOurStory = () => {
    setIsMenuOpen(false);
    setIsOurStoryOpen(true);
  };

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
    if (!isMaintenanceOpen && !isOurStoryOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMaintenanceOpen(false);
        setIsOurStoryOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMaintenanceOpen, isOurStoryOpen]);

  useEffect(() => {
    const handleOpenOurStory = () => {
      setIsOurStoryOpen(true);
      setIsMenuOpen(false);
    };

    window.addEventListener('open-our-story', handleOpenOurStory);
    return () => window.removeEventListener('open-our-story', handleOpenOurStory);
  }, []);

  useEffect(() => {
    setIsProductsOpen(false);
    setIsLocationsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!isProductsOpen && !isLocationsOpen) return;
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (isProductsOpen && productsMenuRef.current && !productsMenuRef.current.contains(target)) {
        setIsProductsOpen(false);
      }
      if (isLocationsOpen && locationsMenuRef.current && !locationsMenuRef.current.contains(target)) {
        setIsLocationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [isProductsOpen, isLocationsOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {/* Green Contact Bar */}
      <div className="border-b border-white/10 bg-[#176f64] text-white/90 px-4 py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between text-sm gap-y-1">
          <div className="flex flex-wrap items-center gap-x-2">
            <span className="hidden md:inline">Call to schedule a private appointment to view our showroom</span>
            <span className="md:hidden">Call to schedule an appointment</span>
            <a href="tel:(480) 997-9447" className="font-semibold text-white hover:text-teal-100 transition-colors">
              (480) 997-9447
            </a>
          </div>
          <div className="hidden md:block">
            <a href="mailto:CJ@ds-outdoorliving.com" className="hover:text-teal-100 transition-colors">
              CJ@ds-outdoorliving.com
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Navigation */}
      <div className="border-b border-white/10 bg-[#0a3d35]/95 backdrop-blur-md">
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
                  fetchpriority="high"
                  className="w-full h-full object-contain bg-white rounded-full p-0.5"
                />
              </div>
            </Link>
            
            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <div className="relative" ref={productsMenuRef}>
                <button
                  onClick={() => setIsProductsOpen((prev) => !prev)}
                  className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
                  style={navTextShadow}
                >
                  Products
                </button>
                {isProductsOpen && (
                  <div className="absolute left-0 mt-3 w-56 rounded-xl border border-teal-300/30 bg-[#0f5b53]/95 shadow-2xl backdrop-blur-md">
                    <div className="py-2">
                      <Link
                        to="/hot-tubs"
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-500/25 transition-colors"
                      >
                        Hot Tubs
                      </Link>
                      <Link
                        to="/swim-spas"
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-500/25 transition-colors"
                      >
                        Swim Spas
                      </Link>
                      <Link
                        to="/contrast-therapy-spas"
                        onClick={() => setIsProductsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-500/25 transition-colors"
                      >
                        Contrast Therapy Spas
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="relative" ref={locationsMenuRef}>
                <button
                  onClick={() => setIsLocationsOpen((prev) => !prev)}
                  className="text-white hover:text-gray-300 transition-colors font-medium tracking-wide"
                  style={navTextShadow}
                >
                  Locations
                </button>
                {isLocationsOpen && (
                  <div className="absolute left-0 mt-3 w-48 rounded-xl border border-teal-300/30 bg-[#0f5b53]/95 shadow-2xl backdrop-blur-md">
                    <div className="py-2">
                      <Link
                        to="/phoenix"
                        onClick={() => setIsLocationsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-500/25 transition-colors"
                      >
                        Phoenix
                      </Link>
                      <Link
                        to="/surprise"
                        onClick={() => setIsLocationsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-500/25 transition-colors"
                      >
                        Surprise
                      </Link>
                      <Link
                        to="/mesa"
                        onClick={() => setIsLocationsOpen(false)}
                        className="block px-4 py-2 text-sm font-medium text-white/90 hover:text-white hover:bg-teal-500/25 transition-colors"
                      >
                        Mesa
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
              onClick={openOurStory}
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
            <Link
              to="/get-a-quote"
              className="rounded-md bg-teal-400 px-4 py-2 font-medium tracking-wide text-white transition hover:bg-teal-300"
            >
              Get a Quote
            </Link>
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
          <nav className="md:hidden border-t border-white/15 bg-[#0f5b53]/95 py-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => setIsProductsOpen((prev) => !prev)}
                className="text-white hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Products
              </button>
              {isProductsOpen && (
                <div className="flex flex-col space-y-3 border-l border-teal-300/40 pl-4">
                  <Link
                    to="/hot-tubs"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-white/90 hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                  >
                    Hot Tubs
                  </Link>
                  <Link
                    to="/swim-spas"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-white/90 hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                  >
                    Swim Spas
                  </Link>
                  <Link
                    to="/contrast-therapy-spas"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-white/90 hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                  >
                    Contrast Therapy Spas
                  </Link>
                </div>
              )}
              <button
                onClick={() => setIsLocationsOpen((prev) => !prev)}
                className="text-white hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Locations
              </button>
              {isLocationsOpen && (
                <div className="flex flex-col space-y-3 border-l border-teal-300/40 pl-4">
                  <Link
                    to="/phoenix"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLocationsOpen(false);
                    }}
                    className="text-white/90 hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                  >
                    Phoenix
                  </Link>
                  <Link
                    to="/surprise"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLocationsOpen(false);
                    }}
                    className="text-white/90 hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                  >
                    Surprise
                  </Link>
                  <Link
                    to="/mesa"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsLocationsOpen(false);
                    }}
                    className="text-white/90 hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                  >
                    Mesa
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
                onClick={openOurStory}
                className="text-white hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Our Story
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Contact Us
              </button>
              <Link
                to="/get-a-quote"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-teal-100 transition-colors text-left font-medium tracking-wide"
                style={navTextShadow}
              >
                Get a Quote
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
            className="w-full max-w-4xl rounded-2xl border border-teal-500/35 bg-gradient-to-b from-[#176f64] to-[#0f5b53] text-white shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-white/15 px-6 py-5 md:px-8 md:py-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Service &amp; Care</p>
                <h2 className="mt-2 text-4xl font-bold leading-tight text-white md:text-5xl">
                  What&apos;s Included in a Maintenance Plan?
                </h2>
                <p className="mt-3 text-base font-medium text-teal-100/85 md:text-lg">
                  Call or text today to get a quote: <span className="font-semibold text-white">(480) 997-9781</span>
                </p>
              </div>
              <button
                onClick={() => setIsMaintenanceOpen(false)}
                className="text-white/70 transition-colors hover:text-white"
                aria-label="Close maintenance plan modal"
              >
                <X size={22} />
              </button>
            </div>

            <div className="max-h-[78vh] space-y-5 overflow-y-auto px-6 py-6 md:px-8 md:py-8">
              <div className="rounded-xl border border-white/10 bg-[#0a4b43]/65 p-5">
                <h3 className="text-2xl font-semibold text-white md:text-3xl">Chemical Service &amp; Water Chemistry Balance</h3>
                <p className="mt-3 text-lg leading-relaxed text-teal-50/90 md:text-xl">
                  Our certified technician balances your water and adds the chemicals needed to keep it safe and
                  crystal clear. Depending on bathing load and usage, additional chemicals may be required. If needed,
                  our tech can also provide on-site chemical restocks.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0a4b43]/65 p-5">
                <h3 className="text-2xl font-semibold text-white md:text-3xl">While We Are There, We Also...</h3>
                <p className="mt-3 text-lg leading-relaxed text-teal-50/90 md:text-xl">
                  Perform a full equipment check to ensure everything is operating correctly. We hose off your spa
                  cover, clean the cabinet exterior, and clean filters. Our goal is to keep both water chemistry and
                  overall spa condition at peak performance.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0a4b43]/65 p-5">
                <h3 className="text-2xl font-semibold text-white md:text-3xl">Drain &amp; Refill Includes</h3>
                <p className="mt-3 text-lg leading-relaxed text-teal-50/90 md:text-xl">
                  We fully drain the spa for deep cleaning and run a specialized solution through the entire system to
                  remove buildup, debris, and bacteria that regular cleaning can miss. We then clean the shell and
                  components, refill your spa, and prepare it for safe use. If you&apos;d like the technician to remain
                  on-site through full refill, additional labor may apply based on spa size and fill time.
                </p>
              </div>

              <div className="rounded-xl border border-teal-300/30 bg-[#0a4b43]/75 px-5 py-4 text-base text-teal-50/90">
                <p className="text-lg font-semibold text-white">D&apos;s Outdoor Living</p>
                <p>Office: (480) 997-9447</p>
                <p>Website: dsoutdoorliving.com</p>
                <p>Email: service@dsoutdoorliving.com</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <OurStory isOpen={isOurStoryOpen} onClose={() => setIsOurStoryOpen(false)} />
    </header>
  );
};

export default Header;
