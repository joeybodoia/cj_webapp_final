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

  // Single JSON-LD script using @graph (Store + FAQPage) + parentOrganization
    const phoenixStructuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Store",
          "@id": "https://dsoutdoorliving.com/phoenix#location",
          "name": "D's Outdoor Living",
          "url": "https://dsoutdoorliving.com/phoenix",
          "telephone": "+1-480-997-9447",
          "priceRange": "$$",
          "image": "https://i.imgur.com/MPo7FDY.png",
          "parentOrganization": {
            "@id": "https://dsoutdoorliving.com/#organization"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3106 W Blue Eagle Ln",
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
            "https://share.google/TQk5eNca3M5ZrCuMZ",
            "https://www.google.com/maps?cid=0x4ca9f1b83643a675"
          ],
          "hasMap": "https://www.google.com/maps?cid=0x4ca9f1b83643a675",
          "areaServed": {
            "@type": "City",
            "name": "Phoenix",
            "addressRegion": "AZ",
            "addressCountry": "US"
          }
        },
        {
          "@type": "FAQPage",
          "@id": "https://dsoutdoorliving.com/phoenix#faq",
          "name": "D's Outdoor Living Phoenix FAQ",
          "about": {
            "@id": "https://dsoutdoorliving.com/phoenix#location"
          },
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you have hot tubs in stock at your Phoenix showroom?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our Phoenix showroom maintains a rotating inventory of in-stock hot tubs, typically 10-15 models per brand. Availability changes frequently, so we recommend contacting us to confirm current inventory."
              }
            },
            {
              "@type": "Question",
              "name": "Can I buy a hot tub directly from the Phoenix showroom?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Customers may purchase any in-stock model directly from our Phoenix showroom. If your preferred model is not available, we can special-order it."
              }
            },
            {
              "@type": "Question",
              "name": "Do you provide hot tub delivery and installation in Phoenix?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer full hot tub delivery and installation throughout Phoenix and surrounding areas, including placement, setup, water fill, and startup guidance."
              }
            },
            {
              "@type": "Question",
              "name": "How long does hot tub delivery take in Phoenix?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In-stock hot tubs are typically delivered within days to a couple of weeks. Special-order models vary by brand and usually take several weeks."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer hot tub maintenance plans in Phoenix?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our Phoenix maintenance plans include drain and refill service, chemical balancing, filter cleaning, and cover cleaning. One-time service visits are also available."
              }
            },
            {
              "@type": "Question",
              "name": "Do your hot tubs include warranties and financing options?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "All hot tubs include manufacturer warranties, which vary by model and brand. Financing options are also available through our Phoenix showroom."
              }
            }
          ]
        }
      ]
    };


  const faqItems = [
    {
      question: 'Do you have hot tubs in stock at the Phoenix showroom?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — our Phoenix showroom carries a rotating selection of in-stock hot tubs from each of our brands.
            Typically, we have 10-15 models available per brand that can be purchased directly from the showroom for
            faster delivery.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            Availability changes frequently, so we recommend visiting the showroom or contacting us to confirm current
            inventory.
          </p>
        </>
      )
    },
    {
      question: 'Can I buy a hot tub directly from the showroom?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Absolutely. You can purchase any in-stock model directly at our Phoenix location. Once purchased, we
            coordinate delivery, placement, and installation.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            If the model you want is not currently in stock, we can special-order it for you.
          </p>
        </>
      )
    },
    {
      question: 'What if the model I want is not available in Phoenix?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            No problem — while we display all models from the brands we carry on our website, not every model is
            physically on the showroom floor.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            If your preferred model is not in stock, we will place a factory order and handle everything from shipping
            to installation once it arrives.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer delivery and installation?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes. We provide full delivery and installation services for all hot tub purchases, including:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Transportation to your home</li>
            <li>Placement in your desired location</li>
            <li>Electrical coordination (if needed)</li>
            <li>Setup and water fill</li>
            <li>Initial startup guidance</li>
          </ul>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            Our team walks you through proper operation so you are comfortable using your spa from day one.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer maintenance or service plans?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — we offer ongoing maintenance plans for Phoenix customers that include:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Drain &amp; refill service</li>
            <li>Chemical balancing and administration</li>
            <li>Filter cleaning</li>
            <li>Cover cleaning</li>
          </ul>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            These plans are designed to keep your spa running perfectly without the hassle.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            One-time service visits are also available.
          </p>
        </>
      )
    },
    {
      question: 'Can I see the hot tubs in person before buying?',
      answer: (
        <p className="text-base md:text-lg leading-relaxed">
          Definitely — we encourage visiting the Phoenix showroom to see models firsthand, compare features, and speak
          with our specialists. Seeing the spas in person helps with sizing, seating layout, and feature selection.
        </p>
      )
    },
    {
      question: 'Do you help with choosing the right hot tub?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes. Our showroom team will help you select the best model based on:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Number of users</li>
            <li>Space requirements</li>
            <li>Budget</li>
            <li>Jet configuration</li>
            <li>Therapeutic needs</li>
          </ul>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            We take a consultative approach so you end up with the right spa for your lifestyle.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer financing?',
      answer: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes, financing options are available. Ask our Phoenix showroom staff for current programs and qualification
          details.
        </p>
      )
    },
    {
      question: 'Do you provide warranties?',
      answer: (
        <p className="text-base md:text-lg leading-relaxed">
          All hot tubs we sell come with manufacturer warranties. Coverage varies by brand and model, and we will
          explain the specifics during your visit.
        </p>
      )
    }
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-custom-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(phoenixStructuredData) }}
      />
      <Header />
      <div className="pt-32 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            D's Outdoorliving - Phoenix, AZ
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold text-teal-200 text-center">
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
                className="text-teal-200 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
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
                className="text-teal-200 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
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
                className="text-teal-200 hover:text-white transition-colors text-center text-lg md:text-xl lg:text-2xl"
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
                <h3 className="text-xl md:text-2xl font-semibold text-teal-200 mb-4 text-center">
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
                <h3 className="text-xl md:text-2xl font-semibold text-teal-200 mb-4 text-center">
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

          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Phoenix Showroom – Frequently Asked Questions
            </h2>

            <div className="mt-8 max-w-4xl mx-auto space-y-4 text-teal-200">
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
                        className={`text-2xl text-teal-200 transition-transform duration-200 ${
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

export default PhoenixPage;
