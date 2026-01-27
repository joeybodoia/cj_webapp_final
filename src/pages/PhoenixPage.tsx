import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixPage = () => {
  const showroomImages = [
    'https://i.imgur.com/cjTb9Nn.png',
    'https://i.imgur.com/qHMDfnU.png',
    'https://i.imgur.com/OkrSzTF.png'
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
      <div className="pt-32 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            D's Outdoorliving - Phoenix, AZ
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-teal-100 text-center">
            Your Local Hot Tub &amp; Swim Spa Destination Serving Phoenix and the North Valley
          </h2>
          <h3 className="mt-24 text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center">
            Products Available at Our Phoenix Location
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-56">
                  <img
                    src="https://i.imgur.com/DhGg8Q9.png"
                    alt="Phoenix Hot Tubs"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                      Phoenix Hot Tubs
                    </h3>
                  </div>
                </div>
              </div>
              <a
                href="/phoenix/hot-tubs"
                className="text-teal-100 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
              >
                Hot Tubs at our Phoenix showroom
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-56">
                  <img
                    src="https://i.imgur.com/G4nM8Hz.png"
                    alt="Phoenix Swim Spas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                      Phoenix Swim Spas
                    </h3>
                  </div>
                </div>
              </div>
              <a
                href="/phoenix/swim-spas"
                className="text-teal-100 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
              >
                Swim Spas at our Phoenix showroom
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-56">
                  <img
                    src="https://i.imgur.com/J4mylLL.jpeg"
                    alt="Phoenix Contrast Therapy Spas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                      Phoenix Contrast Therapy Spas
                    </h3>
                  </div>
                </div>
              </div>
              <a
                href="/phoenix/contrast-therapy-spas"
                className="text-teal-100 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
              >
                Contrast Therapy Spas at our Phoenix showroom
              </a>
            </div>
          </div>
          <div className="mt-32">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center">
              Location Details
            </h2>
            <div className="mt-8 flex flex-col items-center gap-10">
              <div className="w-full max-w-4xl flex flex-col items-center">
                <h3 className="text-xl md:text-2xl font-semibold text-teal-100 mb-4 text-center">
                  Store Details
                </h3>
                <div className="bg-white/95 rounded-2xl shadow-2xl px-6 py-6 md:px-8 md:py-8 w-full">
                  <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
                    <div className="space-y-6 text-gray-700 text-center md:text-left md:w-1/2">
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
                    <div className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl border border-white/70 bg-white/70">
                      <img
                        src={showroomImages[activeImageIndex]}
                        alt="Phoenix showroom"
                        className="w-full h-64 md:h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>
                      <button
                        type="button"
                        aria-label="Previous showroom image"
                        onClick={() =>
                          setActiveImageIndex((prev) =>
                            prev === 0 ? showroomImages.length - 1 : prev - 1
                          )
                        }
                        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-gray-700 w-9 h-9 flex items-center justify-center shadow-md hover:bg-white"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        aria-label="Next showroom image"
                        onClick={() =>
                          setActiveImageIndex((prev) => (prev + 1) % showroomImages.length)
                        }
                        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 text-gray-700 w-9 h-9 flex items-center justify-center shadow-md hover:bg-white"
                      >
                        ›
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {showroomImages.map((image, index) => (
                          <button
                            key={image}
                            type="button"
                            aria-label={`Showroom image ${index + 1}`}
                            onClick={() => setActiveImageIndex(index)}
                            className={`h-2.5 w-2.5 rounded-full transition ${
                              index === activeImageIndex ? 'bg-white' : 'bg-white/50'
                            }`}
                          />
                        ))}
                      </div>
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
