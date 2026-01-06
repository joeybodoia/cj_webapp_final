import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-teal-800 via-teal-800 to-teal-900 text-white py-12 border-t border-teal-600/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">D's Outdoor Living</h3>
            <p className="text-teal-100 mb-4 text-sm">
              Premium spas, hot tubs, swim spas, and gazebos serving Phoenix and Surprise, Arizona
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span className="text-sm">(480) 997-9447</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span className="text-sm">CJ@ds-outdoorliving.com</span>
              </div>
            </div>
          </div>
          
          {/* Business Locations */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Our Locations</h4>
            <div className="space-y-4">
              {/* North Phoenix Location */}
              <div className="text-teal-100">
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin size={16} className="text-teal-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">North Phoenix</p>
                    <p className="text-sm">3106 W Blue Eagle Lane</p>
                    <p className="text-sm">Phoenix, AZ 85086</p>
                    <p className="text-xs text-teal-200 font-medium mt-1">**by appointment only, call to arrange**</p>
                  </div>
                </div>
              </div>
              
              {/* Surprise Location */}
              <div className="text-teal-100">
                <div className="flex items-start space-x-2">
                  <MapPin size={16} className="text-teal-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">Surprise</p>
                    <p className="text-sm">11304 North Dysart Road</p>
                    <p className="text-sm">Suite 104</p>
                    <p className="text-sm">Surprise, AZ 85379</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Products</h4>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#spas" className="hover:text-white transition-colors">Spas & Hot Tubs</a></li>
              <li><a href="#swim-spas" className="hover:text-white transition-colors">Swim Spas</a></li>
              <li><a href="#gazebos" className="hover:text-white transition-colors">Gazebos</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 tracking-wide">Company</h4>
            <ul className="space-y-2 text-teal-100">
              <li>
                <button 
                  onClick={() => scrollToSection('our-story')}
                  className="hover:text-white transition-colors text-left"
                >
                  Our Story
                </button>
              </li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-teal-600 mt-8 pt-8 text-center">
          <p className="text-teal-200 text-sm">
            © 2026 D's Outdoor Living. All rights reserved. | Serving Phoenix, Surprise, and surrounding Arizona areas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
