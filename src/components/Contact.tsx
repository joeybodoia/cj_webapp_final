import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-custom-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Phone */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <Phone size={24} className="text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Phone</h3>
            </div>
            <p className="text-xl text-gray-300">(480) 997-9447</p>
          </div>

          {/* Emails */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Mail size={24} className="text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Emails</h3>
            </div>
            <div className="space-y-2">
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-white">Sales:</span> CJ@ds-outdoorliving.com
              </p>
              <p className="text-lg text-gray-300">
                <span className="font-semibold text-white">Service:</span> service@ds-outdoorliving.com
              </p>
            </div>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Location 1 */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin size={20} className="text-teal-600" />
                <h4 className="text-lg md:text-xl font-bold text-gray-900">North Phoenix</h4>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-700">3106 W Blue Eagle Lane</p>
                <p className="text-sm md:text-base text-gray-700">Phoenix AZ 85086</p>
                <div className="flex items-center space-x-2 mt-3">
                  <Phone size={16} className="text-teal-600" />
                  <p className="text-sm md:text-base text-gray-700">(480) 997-9781</p>
                </div>
              </div>
            </div>

            {/* Location 2 */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin size={20} className="text-teal-600" />
                <h4 className="text-lg md:text-xl font-bold text-gray-900">Surprise</h4>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-700">11304 North Dysart Road</p>
                <p className="text-sm md:text-base text-gray-700">Surprise AZ 85379 Suite 104</p>
                <div className="flex items-center space-x-2 mt-3">
                  <Phone size={16} className="text-teal-600" />
                  <p className="text-sm md:text-base text-gray-700">(480) 571-1692</p>
                </div>
              </div>
            </div>

            {/* Location 3 */}
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg opacity-75">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin size={20} className="text-gray-400" />
                <h4 className="text-lg md:text-xl font-bold text-gray-600">Tucson</h4>
              </div>
              <div className="space-y-2">
                <p className="text-sm md:text-base text-gray-500 italic">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;