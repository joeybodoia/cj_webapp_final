import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LocationsPage = () => {
  return (
    <div className="min-h-screen bg-custom-dark">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-32 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Locations
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              D's Outdoor Living proudly serves Phoenix and Surprise, Arizona with premium spas, hot tubs, swim spas, and gazebos. Visit our showrooms to experience our quality outdoor living products firsthand and discover why we're Arizona's trusted choice for backyard luxury.
            </p>
          </div>
          
          {/* Location Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* North Phoenix Location */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin size={24} className="text-teal-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">North Phoenix</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-700 font-medium">3106 W Blue Eagle Lane</p>
                  <p className="text-gray-700">Phoenix AZ 85086</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone size={18} className="text-teal-600" />
                  <a 
                    href="tel:(480) 997-9447" 
                    className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  >
                    (480) 997-9447
                  </a>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p className="mb-2">Visit our North Phoenix showroom to explore our full collection of premium spas, hot tubs, and outdoor living products.</p>
              </div>
            </div>

            {/* Surprise Location */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin size={24} className="text-teal-600" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">Surprise</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-700 font-medium">11304 North Dysart Road</p>
                  <p className="text-gray-700">Surprise AZ 85379 Suite 104</p>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone size={18} className="text-teal-600" />
                  <a 
                    href="tel:(480) 997-9447" 
                    className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
                  >
                    (480) 997-9447
                  </a>
                </div>
              </div>
              
              <div className="text-sm text-gray-600">
                <p className="mb-2">Our Surprise location features an extensive selection of swim spas, gazebos, and luxury outdoor living solutions.</p>
              </div>
            </div>

            {/* Tucson Location - Coming Soon */}
            <div className="bg-gray-100 rounded-xl shadow-lg p-6 md:p-8 opacity-75">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin size={24} className="text-gray-400" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-600">Tucson</h2>
              </div>
              
              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-gray-500 italic text-lg">Coming Soon</p>
                </div>
              </div>
              
              <div className="text-sm text-gray-500">
                <p className="mb-2">We're expanding to serve the Tucson area with the same quality spas, hot tubs, and gazebos that Phoenix and Surprise customers love.</p>
              </div>
            </div>
          </div>
          
          {/* Additional SEO Content */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <div className="bg-teal-700 rounded-xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Arizona's Premier Hot Tub & Spa Destination
              </h2>
              <p className="text-teal-100 leading-relaxed">
                Whether you're in Phoenix, Surprise, or the surrounding Arizona areas, D's Outdoor Living is your trusted source for premium hot tubs, therapeutic spas, fitness swim spas, and beautiful gazebos. Our experienced team is dedicated to helping you create the perfect outdoor living space with quality products and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LocationsPage;