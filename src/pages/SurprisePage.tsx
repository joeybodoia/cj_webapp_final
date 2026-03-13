import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurprisePage = () => {
  const showroomImages = [
    'https://i.imgur.com/c1dC4tx.png',
    'https://i.imgur.com/wxOzh55.png',
    'https://i.imgur.com/INhPWfq.png'
  ];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const surpriseStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Store",
        "@id": "https://dsoutdoorliving.com/surprise#location",
        "name": "D's Outdoor Living",
        "url": "https://dsoutdoorliving.com/surprise",
        "telephone": "+1-480-997-9447",
        "priceRange": "$$",
        "image": "https://i.imgur.com/s4AjJS1.png",
        "parentOrganization": {
          "@id": "https://dsoutdoorliving.com/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "11304 N Dysart Rd Suite #104",
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
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
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
          "https://share.google/8grytKvdosxplP7Tk",
          "https://www.google.com/maps?cid=0xa23ee5256ec83e84"
        ],
        "hasMap": "https://www.google.com/maps?cid=0xa23ee5256ec83e84",
        "areaServed": {
          "@type": "City",
          "name": "Surprise",
          "containedInPlace": {
            "@type": "State",
            "name": "Arizona",
            "containedInPlace": { "@type": "Country", "name": "US" }
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dsoutdoorliving.com/surprise#faq",
        "name": "D's Outdoor Living Surprise FAQ",
        "about": { "@id": "https://dsoutdoorliving.com/surprise#location" },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have hot tubs in stock at your Surprise showroom?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — our Surprise showroom maintains rotating in-stock inventory across all brands we carry." }
          },
          {
            "@type": "Question",
            "name": "Can I purchase a hot tub directly from the Surprise showroom?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Customers may purchase any in-stock model directly at our Surprise location." }
          },
          {
            "@type": "Question",
            "name": "What if the hot tub I want is not in stock?",
            "acceptedAnswer": { "@type": "Answer", "text": "If your preferred model isn't in stock, we can special-order it and coordinate delivery once it arrives." }
          },
          {
            "@type": "Question",
            "name": "Do you offer delivery and installation in Surprise?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. We provide delivery, electrical coordination, placement, setup, water fill, and a walkthrough at startup." }
          },
          {
            "@type": "Question",
            "name": "Do you offer maintenance or service plans?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes — Surprise customers can enroll in maintenance plans or schedule one-time service visits." }
          },
          {
            "@type": "Question",
            "name": "Can I visit the Surprise showroom to see models in person?",
            "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. Visiting our Surprise showroom lets you compare seating layouts, jet configurations, and features in person." }
          },
          {
            "@type": "Question",
            "name": "Do you help customers choose the right hot tub?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Our team will help match you with the right spa based on space, budget, seating, and therapeutic goals." }
          },
          {
            "@type": "Question",
            "name": "Do you offer financing?",
            "acceptedAnswer": { "@type": "Answer", "text": "Yes. Financing options are available — ask our Surprise showroom staff about current programs." }
          },
          {
            "@type": "Question",
            "name": "Do your hot tubs come with warranties?",
            "acceptedAnswer": { "@type": "Answer", "text": "All hot tubs include manufacturer warranties. Coverage varies by model and brand." }
          }
        ]
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
            Inventory changes frequently, so we recommend visiting the showroom or calling ahead to confirm availability.
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
            Our website displays all models from the brands we carry, even if they are not physically on the showroom floor.
          </p>
          <p className="mt-3 text-base md:text-lg leading-relaxed">
            If your preferred spa is not currently in stock, we will place a factory order and manage the entire process
            — from shipping to delivery and setup.
          </p>
        </>
      )
    },
    {
      question: 'Do you offer delivery and installation in Surprise?',
      answer: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — we provide complete delivery and installation services throughout Surprise and surrounding areas, including:
          </p>
          <ul className="mt-3 space-y-2 text-base md:text-lg list-disc list-inside">
            <li>Transportation to your home</li>
            <li>Spa placement</li>
            <li>Electrical coordination (handled by our team)</li>
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

  const surpriseAreas = [
    'Surprise', 'Peoria', 'Glendale', 'Sun City',
    'Goodyear', 'Avondale', 'Waddell', 'Litchfield Park',
  ];

  const whyUsItems = [
    'Local Arizona team with a consultative, no-pressure showroom experience',
    'Rotating in-stock inventory plus full special-order options',
    'Statewide delivery with coordinated installation support',
    'Premium brands and model selection for different budgets and goals',
    'Professional walkthrough and startup guidance at installation',
    'Ongoing maintenance plans and service support available',
    'Financing and manufacturer warranties available',
  ];

  return (
    <div className="min-h-screen bg-[#0a3d35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surpriseStructuredData) }}
      />

      <Header />

      {/* Hero / Intro */}
      <section className="bg-[#0a3d35] px-4 pb-16 pt-32 md:px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Surprise Showroom</p>
          <h1 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
            D&apos;s Outdoor Living — Surprise, AZ
          </h1>
          <div className="mx-auto mt-5 h-1 w-24 bg-teal-400" />
          <h2 className="mt-5 text-xl font-medium text-teal-100/80 md:text-2xl">
            Hot Tubs, Swim Spas &amp; Contrast Therapy Spas Serving Surprise and the West Valley
          </h2>
          <div className="mx-auto mt-10 max-w-4xl space-y-4 text-left text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
            <p>
              Welcome to <strong className="text-white">D&apos;s Outdoor Living in Surprise</strong> — your West Valley
              destination for premium hot tubs, swim spas, and contrast therapy spas. Our Surprise showroom features
              rotating in-stock inventory for faster delivery and a complete catalog of special-order models for
              customers who want specific sizes, seating layouts, or feature packages.
            </p>
            <p>
              If you&apos;re comparing options, you can browse our location-specific pages for{' '}
              <a href="/surprise/hot-tubs" className="text-teal-300 underline hover:text-white">Surprise hot tubs</a>,{' '}
              <a href="/surprise/swim-spas" className="text-teal-300 underline hover:text-white">Surprise swim spas</a>, and{' '}
              <a href="/surprise/contrast-therapy-spas" className="text-teal-300 underline hover:text-white">Surprise contrast therapy spas</a>.{' '}
              We also offer statewide delivery, and our team coordinates installation and electrical requirements as
              part of the end-to-end process.
            </p>
            <p>
              Visiting the showroom is the best way to compare real seating depth, jet placement, and overall build
              quality in person. Our specialists will help narrow down models based on space, budget, wellness goals,
              and long-term ownership needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products Available */}
      <section className="bg-[#0f5b53] px-4 py-16 md:px-6 md:py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Browse Our Products</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
              Products at Our Surprise Location
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
            {[
              {
                href: '/surprise/hot-tubs',
                src: 'https://i.imgur.com/DhGg8Q9.png',
                alt: "Hot tubs available at D's Outdoor Living Surprise showroom",
                label: 'Surprise Hot Tubs',
                linkText: 'Hot Tubs at our Surprise showroom',
              },
              {
                href: '/surprise/swim-spas',
                src: 'https://i.imgur.com/G4nM8Hz.png',
                alt: "Swim spas available at D's Outdoor Living Surprise showroom",
                label: 'Surprise Swim Spas',
                linkText: 'Swim Spas at our Surprise showroom',
              },
              {
                href: '/surprise/contrast-therapy-spas',
                src: 'https://i.imgur.com/J4mylLL.jpeg',
                alt: "Contrast therapy spas available at D's Outdoor Living Surprise showroom",
                label: 'Surprise Contrast Therapy Spas',
                linkText: 'Contrast Therapy Spas at our Surprise showroom',
              },
            ].map((card) => (
              <div key={card.href} className="flex flex-col items-center gap-3">
                <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
                  <div className="relative h-56">
                    <img
                      src={card.src}
                      alt={card.alt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-center text-2xl font-bold tracking-wide text-white drop-shadow-lg md:text-3xl">
                        {card.label}
                      </h3>
                    </div>
                  </div>
                </div>
                <a href={card.href} className="text-center text-lg text-teal-300 transition-colors hover:text-white md:text-xl lg:text-2xl">
                  {card.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-[#0a3d35] px-4 py-16 md:px-6 md:py-20">
        <div className="container mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Service Area</p>
          <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Areas We Serve</h2>
          <div className="mx-auto mt-5 h-1 w-24 bg-teal-400" />
          <p className="mx-auto mt-8 max-w-3xl text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
            Our Surprise location serves homeowners throughout the West Valley, and we also deliver statewide across
            Arizona. Many customers visit us from nearby areas including:
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {surpriseAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-teal-300/40 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="mt-8 text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
            Not in the West Valley? No problem — contact us and we&apos;ll coordinate delivery anywhere in Arizona.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-[#0f5b53] px-4 py-16 md:px-6 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">The Process</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">What to Expect</h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-teal-400" />
          </div>
          <div className="mx-auto mt-10 max-w-4xl space-y-5 text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
            <p>
              Buying a spa from D&apos;s Outdoor Living includes end-to-end support — from selecting the right model to
              professional delivery and installation. If you choose an in-stock spa, delivery is typically within days
              to a couple of weeks. Special-order timelines vary by model and brand.
            </p>
            <p>
              On installation day, we coordinate placement, setup, water fill, and startup. Our team also coordinates
              electrical requirements as needed, so your installation is smooth and predictable. After setup, we walk
              you through operation, care, and best practices for long-term ownership.
            </p>
            <p>
              We also offer maintenance plans and one-time service visits for Surprise customers — helping with drain
              and refill service, chemical balancing, filter cleaning, and cover cleaning. If you&apos;re exploring options,
              start with our local pages for{' '}
              <a href="/surprise/hot-tubs" className="text-teal-300 underline hover:text-white">hot tubs</a>,{' '}
              <a href="/surprise/swim-spas" className="text-teal-300 underline hover:text-white">swim spas</a>, and{' '}
              <a href="/surprise/contrast-therapy-spas" className="text-teal-300 underline hover:text-white">contrast therapy spas</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#0a3d35] px-4 py-16 md:px-6 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Why Us</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
              Why West Valley Homeowners Choose D&apos;s
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-teal-400" />
          </div>
          <ul className="mx-auto mt-10 max-w-3xl space-y-3">
            {whyUsItems.map((item) => (
              <li key={item} className="flex items-start gap-3 text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
                <span className="mt-1 flex-shrink-0 text-teal-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
            Our goal is to help Surprise and West Valley customers find the right spa, install it correctly, and keep
            it running perfectly for years.
          </p>
        </div>
      </section>

      {/* Location Details */}
      <section className="bg-[#0f5b53] px-4 py-16 md:px-6 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Visit Us</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Location Details</h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-teal-400" />
          </div>

          <div className="mt-12 flex flex-col items-center gap-10">
            <div className="w-full max-w-4xl">
              <div className="rounded-2xl bg-white/95 px-6 py-6 shadow-2xl md:px-8 md:py-8">
                <div className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
                  <div className="space-y-6 text-center text-gray-700 md:w-1/2 md:text-left">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Address</p>
                      <p className="text-lg font-medium">11304 N Dysart Rd Suite #104</p>
                      <p className="text-lg font-medium">Surprise AZ 85379</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Phone Number</p>
                      <a href="tel:+14809979447" className="text-lg font-medium hover:text-white transition-colors">(480) 997-9447</a>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">Hours</p>
                      <p className="text-lg font-medium">Mon-Sat: 10am-6pm</p>
                      <p className="text-lg font-medium">Sunday: 11am-4pm</p>
                    </div>
                  </div>

                  <div className="relative w-full overflow-hidden rounded-2xl border border-white/70 bg-white/70 shadow-xl md:w-1/2">
                    <img
                      src={showroomImages[activeImageIndex]}
                      alt="Inside D's Outdoor Living Surprise showroom"
                      className="h-64 w-full object-cover md:h-full"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    <button
                      type="button"
                      aria-label="Previous showroom image"
                      onClick={() => setActiveImageIndex((prev) => (prev === 0 ? showroomImages.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-md hover:bg-white"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      aria-label="Next showroom image"
                      onClick={() => setActiveImageIndex((prev) => (prev + 1) % showroomImages.length)}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-700 shadow-md hover:bg-white"
                    >
                      ›
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                      {showroomImages.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          aria-label={`Showroom image ${index + 1}`}
                          onClick={() => setActiveImageIndex(index)}
                          className={`h-2.5 w-2.5 rounded-full transition ${index === activeImageIndex ? 'bg-white' : 'bg-white/50'}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full max-w-4xl">
              <h3 className="mb-4 text-center text-xl font-semibold text-teal-200 md:text-2xl">Directions</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.7279058790396!2d-112.34515722324868!3d33.58641327333595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b44731f907da9%3A0xa23ee5256ec83e84!2s11304%20N%20Dysart%20Rd%2C%20Surprise%2C%20AZ%2085379!5e0!3m2!1sen!2sus!4v1769045991333!5m2!1sen!2sus"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-2xl shadow-2xl"
                title="Directions to D's Outdoor Living Surprise showroom"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a3d35] px-4 py-16 md:px-6 md:py-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Got Questions?</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">
              Surprise Showroom FAQ
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-teal-400" />
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-3 text-base font-medium leading-relaxed text-teal-100/80 md:text-lg">
            <p>
              <strong className="text-white">Do you stock hot tubs in Surprise?</strong>{' '}
              Yes — we maintain rotating in-stock inventory across our brands.
            </p>
            <p>
              <strong className="text-white">How soon can delivery happen?</strong>{' '}
              In-stock models are typically delivered within days to a couple of weeks.
            </p>
            <p>
              <strong className="text-white">Do you offer maintenance plans?</strong>{' '}
              Yes — we provide ongoing service options to keep your spa running perfectly.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4 text-teal-100/80">
            {faqItems.map((item, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={item.question} className="overflow-hidden rounded-xl border border-teal-300/20 bg-[#176f64]">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-[#1c7a6d]"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-white md:text-lg">{item.question}</span>
                    <span
                      className={`flex-shrink-0 text-2xl text-teal-400 transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="border-t border-teal-300/20 px-6 py-4">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SurprisePage;
