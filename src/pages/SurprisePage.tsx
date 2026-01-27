import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurprisePage = () => {
  const showroomImages = [
    'https://i.imgur.com/c1dC4tx.png',
    'https://i.imgur.com/wxOzh55.png',
    'https://i.imgur.com/INhPWfq.png'
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "about": {
      "@id": "https://dsoutdoorliving.com/surprise#location"
    },
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you have hot tubs in stock at your Surprise showroom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Surprise showroom carries rotating in-stock hot tub inventory across all brands we sell, typically 10-15 models per brand."
        }
      },
      {
        "@type": "Question",
        "name": "Can I purchase a hot tub directly from the Surprise showroom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Customers may purchase any in-stock model directly from our Surprise location, or special-order any spa shown on our website."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide hot tub delivery and installation in Surprise, AZ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We offer professional hot tub delivery and installation throughout Surprise and nearby areas, including placement, setup, water fill, and startup."
        }
      },
      {
        "@type": "Question",
        "name": "How long does hot tub delivery take in Surprise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In-stock spas are usually delivered within days to a couple of weeks. Special orders depend on model and brand and typically take several weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer hot tub maintenance plans in Surprise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our Surprise maintenance plans include drain and refill service, chemical balancing, filter cleaning, and cover cleaning. One-time service visits are also available."
        }
      },
      {
        "@type": "Question",
        "name": "Are warranties and financing available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "All hot tubs come with manufacturer warranties, which vary by model. Financing options are also available through our Surprise showroom."
        }
      }
    ]
  };
  const faqItems = [
    {
      question: 'Do you have hot tubs in stock at the Surprise showroom?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — our Surprise showroom maintains a rotating inventory of in-stock hot tubs from each brand we carry.
            We typically stock 10-15 models per brand that are available for immediate purchase.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            Inventory changes frequently, so we recommend visiting the showroom or calling ahead to confirm
            availability.
          </p>
        </>
      )
    },
    {
      question: 'Can I purchase a hot tub directly from the Surprise showroom?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes. You can buy any in-stock model directly at our Surprise location. After purchase, our team handles
            delivery, placement, and installation.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            If the model you want is not currently available in Surprise, we are happy to special-order it for you.
          </p>
        </>
      )
    },
    {
      question: 'What if the hot tub I want is not in stock?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Our website displays all models from the brands we carry, even if they are not physically on the showroom
            floor.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            If your preferred spa is not currently in stock, we will place a factory order and manage the entire
            process — from shipping to delivery and setup.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer delivery and installation in Surprise?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — we provide complete delivery and installation services throughout Surprise and surrounding areas,
            including:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Transportation to your home</li>
            <li>Spa placement</li>
            <li>Electrical coordination (if required)</li>
            <li>Water fill and startup</li>
            <li>Walkthrough of features and operation</li>
          </ul>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            We make sure everything is ready so you can enjoy your spa right away.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer maintenance or service plans?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — we offer professional maintenance plans for Surprise customers, including:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Drain and refill service</li>
            <li>Chemical balancing and administration</li>
            <li>Filter cleaning</li>
            <li>Spa cover cleaning</li>
          </ul>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            These plans help extend the life of your hot tub while keeping water crystal clear. One-time service visits
            are also available.
          </p>
        </>
      )
    },
    {
      question: 'Can I visit the Surprise showroom to see models in person?',
      answer: (
        <p className="text-base md:text-lg leading-relaxed">
          Absolutely. Visiting our Surprise showroom allows you to compare seating layouts, jet configurations, and
          features in person while speaking directly with our spa specialists.
        </p>
      )
    },
    {
      question: 'Do you help customers choose the right hot tub?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — our team will help match you with the right spa based on:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Space and layout</li>
            <li>Number of users</li>
            <li>Budget</li>
            <li>Therapeutic goals</li>
            <li>Feature preferences</li>
          </ul>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            We focus on finding the best fit for your lifestyle.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer financing?',
      answer: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. Financing options are available. Please ask our Surprise showroom staff about current programs.
        </p>
      )
    },
    {
      question: 'Do your hot tubs come with warranties?',
      answer: (
        <p className="text-base md:text-lg leading-relaxed">
          All hot tubs include manufacturer warranties. Coverage varies by model and brand, and our team will walk you
          through the details.
        </p>
      )
    }
  ];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-custom-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <div className="pt-32 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            D's Outdoorliving - Surprise, AZ
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-teal-100 text-center">
            Your Local Hot Tub &amp; Swim Spa Destination Serving Surprise and the West Valley
          </h2>
          <h3 className="mt-24 text-xl md:text-2xl lg:text-3xl font-semibold text-white text-center">
            Products Available at Our Surprise Location
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-56">
                  <img
                    src="https://i.imgur.com/DhGg8Q9.png"
                    alt="Surprise Hot Tubs"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                      Surprise Hot Tubs
                    </h3>
                  </div>
                </div>
              </div>
              <a
                href="/surprise/hot-tubs"
                className="text-teal-100 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
              >
                Hot Tubs at our Surprise showroom
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-56">
                  <img
                    src="https://i.imgur.com/G4nM8Hz.png"
                    alt="Surprise Swim Spas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                      Surprise Swim Spas
                    </h3>
                  </div>
                </div>
              </div>
              <a
                href="/surprise/swim-spas"
                className="text-teal-100 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
              >
                Swim Spas at our Surprise showroom
              </a>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                <div className="relative h-56">
                  <img
                    src="https://i.imgur.com/J4mylLL.jpeg"
                    alt="Surprise Contrast Therapy Spas"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center drop-shadow-lg tracking-wide">
                      Surprise Contrast Therapy Spas
                    </h3>
                  </div>
                </div>
              </div>
              <a
                href="/surprise/contrast-therapy-spas"
                className="text-teal-100 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
              >
                Contrast Therapy Spas at our Surprise showroom
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
                    <div className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl border border-white/70 bg-white/70">
                      <img
                        src={showroomImages[activeImageIndex]}
                        alt="Surprise showroom"
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
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Surprise Showroom - Frequently Asked Questions
            </h2>
            <div className="mt-8 max-w-4xl mx-auto space-y-4 text-teal-100">
              {faqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div key={item.question} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg md:text-xl font-semibold text-white">{item.question}</span>
                      <span
                        className={`text-2xl text-teal-100 transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    {isOpen && <div className="mt-4">{item.answer}</div>}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SurprisePage;
