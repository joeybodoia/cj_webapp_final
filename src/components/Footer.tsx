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
      {/* Schema.org structured data for local business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "D's Outdoor Living",
            "alternateName": "DS Outdoor Living",
            "url": "https://dsoutdoorliving.com",
            "logo": "https://i.imgur.com/p59g2OD.png",
            "description": "Arizona's premier destination for premium spas, hot tubs, swim spas, and gazebos. Family-owned business serving Phoenix, Surprise, and surrounding areas with quality outdoor living products.",
            "foundingDate": "2023",
            "founders": [
              {
                "@type": "Person",
                "name": "Chris"
              }
            ],
            "slogan": "Drive a little, save a lot",
            "telephone": "(480) 997-9447",
            "email": "CJ@ds-outdoorliving.com",
            "areaServed": [
              {
                "@type": "City",
                "name": "Phoenix",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "City", 
                "name": "Surprise",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Arizona"
                }
              },
              {
                "@type": "State",
                "name": "Arizona"
              }
            ],
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "33.6575",
                "longitude": "-112.2834"
              },
              "geoRadius": "50000"
            },
            "knowsAbout": [
              "Hot Tubs",
              "Spas", 
              "Swim Spas",
              "Gazebos",
              "Outdoor Living",
              "Pool Equipment",
              "Spa Installation",
              "Spa Maintenance"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Outdoor Living Products & Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Premium Spas and Hot Tubs",
                    "category": "Spa Equipment",
                    "brand": ["Aspen Spas", "Nordic Hot Tubs", "Bellagio Spas"]
                  },
                  "availability": "https://schema.org/InStock",
                  "businessFunction": "https://schema.org/Sell"
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Product",
                    "name": "Swim Spas",
                    "category": "Exercise Equipment"
                  },
                  "availability": "https://schema.org/InStock",
                  "businessFunction": "https://schema.org/Sell"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Product", 
                    "name": "Outdoor Gazebos",
                    "category": "Outdoor Structures"
                  },
                  "availability": "https://schema.org/InStock",
                  "businessFunction": "https://schema.org/Sell"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Spa Installation Services",
                    "category": "Installation Services"
                  },
                  "availability": "https://schema.org/InStock",
                  "businessFunction": "https://schema.org/Sell"
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service", 
                    "name": "Spa Maintenance and Repair",
                    "category": "Maintenance Services"
                  },
                  "availability": "https://schema.org/InStock", 
                  "businessFunction": "https://schema.org/Sell"
                }
              ]
            },
            "location": [
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "D's Outdoor Living",
              "alternateName": "D's Outdoor Living - North Phoenix",
              "description": "Premium spas, hot tubs, swim spas, and gazebos in North Phoenix, Arizona. Family-owned business with over 30 years of experience.",
              "url": "https://dsoutdoorliving.com",
              "telephone": "(480) 997-9447",
              "email": "CJ@ds-outdoorliving.com",
              "priceRange": "$$-$$$",
              "paymentAccepted": ["Cash", "Credit Card", "Financing"],
              "currenciesAccepted": "USD",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "3106 W Blue Eagle Lane",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "postalCode": "85086",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6846",
                "longitude": "-112.1962"
              },
              "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00", "Su 10:00-16:00"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification", 
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday", 
                  "opens": "10:00",
                  "closes": "16:00"
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "D's Outdoor Living",
              "alternateName": "D's Outdoor Living - Surprise", 
              "description": "Premium spas, hot tubs, swim spas, and gazebos in Surprise, Arizona. Family-owned business with over 30 years of experience.",
              "url": "https://dsoutdoorliving.com",
              "telephone": "(480) 997-9447",
              "email": "CJ@ds-outdoorliving.com",
              "priceRange": "$$-$$$",
              "paymentAccepted": ["Cash", "Credit Card", "Financing"],
              "currenciesAccepted": "USD",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "11304 North Dysart Road, Suite 104",
                "addressLocality": "Surprise",
                "addressRegion": "AZ",
                "postalCode": "85379",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "33.6303",
                "longitude": "-112.3707"
              },
              "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00", "Su 10:00-16:00"],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00", 
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00", 
                  "closes": "16:00"
                }
              ]
            }
            ],
            "sameAs": [
              "https://www.facebook.com/dsoutdoorliving",
              "https://www.instagram.com/dsoutdoorliving"
            ]
          }, {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "D's Outdoor Living - North Phoenix",
            "description": "Premium spas, hot tubs, swim spas, and gazebos in North Phoenix, Arizona. Family-owned business with over 30 years of experience.",
            "url": "https://dsoutdoorliving.com",
            "telephone": "(480) 997-9447",
            "email": "CJ@ds-outdoorliving.com",
            "priceRange": "$$-$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "3106 W Blue Eagle Lane",
              "addressLocality": "Phoenix",
              "addressRegion": "AZ",
              "postalCode": "85086",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.6846",
              "longitude": "-112.1962"
            },
            "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00", "Su 10:00-16:00"]
          }, {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "D's Outdoor Living - Surprise",
            "description": "Premium spas, hot tubs, swim spas, and gazebos in Surprise, Arizona. Family-owned business with over 30 years of experience.",
            "url": "https://dsoutdoorliving.com",
            "telephone": "(480) 997-9447",
            "email": "CJ@ds-outdoorliving.com",
            "priceRange": "$$-$$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11304 North Dysart Road, Suite 104",
              "addressLocality": "Surprise",
              "addressRegion": "AZ",
              "postalCode": "85379",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.6303",
              "longitude": "-112.3707"
            },
            "openingHours": ["Mo-Fr 09:00-18:00", "Sa 09:00-17:00", "Su 10:00-16:00"]
          }])
        }}
      />
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">D's Outdoor Living</h3>
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
            <h4 className="text-lg font-semibold mb-4">Our Locations</h4>
            <div className="space-y-4">
              {/* North Phoenix Location */}
              <div className="text-teal-100">
                <div className="flex items-start space-x-2 mb-2">
                  <MapPin size={16} className="text-teal-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-white">North Phoenix</p>
                    <p className="text-sm">3106 W Blue Eagle Lane</p>
                    <p className="text-sm">Phoenix, AZ 85086</p>
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
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-teal-100">
              <li><a href="#spas" className="hover:text-white transition-colors">Spas & Hot Tubs</a></li>
              <li><a href="#swim-spas" className="hover:text-white transition-colors">Swim Spas</a></li>
              <li><a href="#gazebos" className="hover:text-white transition-colors">Gazebos</a></li>
            </ul>
          </div>
          
          {/* Company Links */}
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
        
        {/* Copyright */}
        <div className="border-t border-teal-600 mt-8 pt-8 text-center">
          <p className="text-teal-200 text-sm">
            © 2024 D's Outdoor Living. All rights reserved. | Serving Phoenix, Surprise, and surrounding Arizona areas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;