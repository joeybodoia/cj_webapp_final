import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurprisePage = () => {
  const locationSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    "@id": "https://dsoutdoorliving.com/surprise#location",
    "name": "D's Outdoorliving - Surprise",
    "url": "https://dsoutdoorliving.com/surprise",
    "telephone": "+1-480-997-9447",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "11304 N Dysart Rd Suite 104",
      "addressLocality": "Surprise",
      "addressRegion": "AZ",
      "postalCode": "85379",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.5864133,
      "longitude": -112.3425823
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
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "11:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps?cid=0xa23ee5256ec83e84"
    ],
    "hasMap": "https://www.google.com/maps?cid=0xa23ee5256ec83e84",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Surprise, AZ"
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
            D's Outdoorliving - Surprise, AZ
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-teal-100 text-center">
            Your Local Hot Tub &amp; Swim Spa Destination Serving Surprise and the West Valley
          </h2>
          <h3 className="mt-6 text-lg md:text-xl lg:text-2xl font-semibold text-white text-center">
            Products Available at Our Surprise Location
          </h3>
          <div className="mt-4 flex flex-col items-center gap-2 text-teal-100">
            <a href="/surprise/hot-tubs" className="hover:text-white transition-colors">
              Hot tubs available at our Surprise showroom
            </a>
            <a href="/surprise/swim-spas" className="hover:text-white transition-colors">
              Swim spas in Surprise, AZ
            </a>
            <a href="/surprise/contrast-therapy-spas" className="hover:text-white transition-colors">
              Contrast therapy spas in Surprise
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
                      <p className="text-lg font-medium">11304 North Dysart Road</p>
                      <p className="text-lg font-medium">Surprise AZ 85379 Suite 104</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Phone Number</p>
                      <p className="text-lg font-medium">(480) 997-9447</p>
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wide text-gray-500 font-semibold">Hours</p>
                      <p className="text-lg font-medium">Mon-Sat: 10am-6pm</p>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7279058790396!2d-112.34515722324868!3d33.58641327333595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b44731f907da9%3A0xa23ee5256ec83e84!2s11304%20N%20Dysart%20Rd%2C%20Surprise%2C%20AZ%2085379!5e0!3m2!1sen!2sus!4v1769045991333!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-2xl shadow-2xl"
                  title="Surprise showroom location map"
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

export default SurprisePage;
