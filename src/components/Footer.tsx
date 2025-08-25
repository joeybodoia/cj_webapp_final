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
    <footer className="bg-teal-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">D's Outdoor Living</h3>
            <div className="flex space-x-4">
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
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#spas" className="hover:text-white transition-colors">Spas</a></li>
              <li><a href="#swim-spas" className="hover:text-white transition-colors">Swim Spas</a></li>
              <li><a href="#gazebos" className="hover:text-white transition-colors">Gazebos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
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
      </div>
    </footer>
  );
};

export default Footer;