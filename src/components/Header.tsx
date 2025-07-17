import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Green Contact Bar */}
      <div className="bg-custom-dark text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <span className="hidden md:inline">Call to schedule a private appointment to view our showroom</span>
            <span className="md:hidden">Call to schedule an appointment</span>
            <a href="tel:(480) 997-9781" className="font-semibold hover:text-gray-300 transition-colors">
              (480) 997-9781
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
      <div className="bg-teal-700">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Left Navigation */}
          <div className="flex items-center space-x-8">
            {/* Circular Logo */}
            <Link to="/" className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-1">
                <img 
                  src="/hero-banner.png" 
                  alt="D's Outdoor Living Logo"
                  className="w-full h-full object-contain bg-white rounded-full"
                />
              </div>
            </Link>
            
            {/* Left Navigation - Desktop */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                to="/spas"
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                Spas
              </Link>
              <Link 
                to="/swim-spas"
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                Swim Spas
              </Link>
              <Link 
                to="/gazebos"
                className="text-white hover:text-gray-300 transition-colors font-medium"
              >
                Gazebos
              </Link>
            </nav>
          </div>

          {/* Right Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('our-story')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
            >
              Our Story
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-gray-300 transition-colors font-medium"
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
              <Link 
                to="/spas"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium"
              >
                Spas
              </Link>
              <Link 
                to="/swim-spas"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium"
              >
                Swim Spas
              </Link>
              <Link 
                to="/gazebos"
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium"
              >
                Gazebos
              </Link>
              <button 
                onClick={() => scrollToSection('our-story')}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium"
              >
                Our Story
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-gray-300 transition-colors text-left font-medium"
              >
                Contact Us
              </button>
            </div>
          </nav>
        )}
      </div>
      </div>
    </header>
  );
};

export default Header;