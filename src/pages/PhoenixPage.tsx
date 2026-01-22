import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixPage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://dsoutdoorliving.com/phoenix#location",
    "name": "D's Outdoorliving - Phoenix",
    "url": "https://dsoutdoorliving.com/phoenix",
    "telephone": "+1-480-997-9447",
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
      "latitude": 33.8297721,
      "longitude": -112.1265575
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps?cid=0x4ca9f1b83643a675"
    ],
    "hasMap": "https://www.google.com/maps?cid=0x4ca9f1b83643a675",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Phoenix, AZ"
    }
  };

  return (
    <div className="min-h-screen bg-custom-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <Header />
      <div className="pt-24 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            D's Outdoorliving - Phoenix, AZ
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-teal-100 text-center">
            Your Local Hot Tub &amp; Swim Spa Destination Serving Phoenix and the North Valley
          </h2>
          <h3 className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
            Products Available at Our Phoenix Location
          </h3>
          <div className="mt-4 flex flex-col items-center gap-2 text-teal-100">
            <a href="/phoenix/hot-tubs" className="hover:text-white transition-colors">
              Hot tubs available at our Phoenix showroom
            </a>
            <a href="/phoenix/swim-spas" className="hover:text-white transition-colors">
              Swim spas in Phoenix, AZ
            </a>
            <a href="/phoenix/contrast-therapy-spas" className="hover:text-white transition-colors">
              Contrast therapy spas in Phoenix
            </a>
          </div>
          <div className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Location Details
            </h2>
            <div className="mt-8 flex flex-col items-center gap-10">
              <div className="w-full max-w-xl flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-semibold text-teal-100 mb-4 text-center">
                  Store Details
                </h3>
                <div className="bg-white/95 rounded-2xl shadow-2xl px-6 py-6 md:px-8 md:py-8 w-fit">
                  <div className="space-y-6 text-gray-700 text-center">
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Address</p>
                      <p className="text-lg font-medium">3106 W Blue Eagle Lane</p>
                      <p className="text-lg font-medium">Phoenix AZ 85086</p>
                      <p className="text-sm text-gray-600 font-medium mt-2">
                        **by appointment only, call to arrange**
                      </p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Phone Number</p>
                      <p className="text-lg font-medium">(480) 997-9447</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Hours</p>
                      <p className="text-lg font-medium">Mon-Sat: 10am-5pm</p>
                      <p className="text-lg font-medium">Sunday: 11am-4pm</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full max-w-4xl">
                <h3 className="text-xl md:text-2xl font-semibold text-teal-100 mb-4 text-center">
                  Directions
                </h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.3233041527756!2d-112.12913242332463!3d33.82977207324146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b623a36116041%3A0x4ca9f1b83643a675!2s3106%20W%20Blue%20Eagle%20Ln%2C%20Desert%20Hills%2C%20AZ%2085086!5e0!3m2!1sen!2sus!4v1769036376021!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-2xl shadow-2xl"
                  title="Phoenix showroom location map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhoenixPage;
