import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurpriseSwimSpasPage = () => {
  // Service + FAQ schema (richer + consistent with your Surprise location entity)
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dsoutdoorliving.com/surprise/swim-spas#service",
        "name": "Swim Spas in Surprise, AZ",
        "serviceType": "Swim Spa Sales",
        "url": "https://dsoutdoorliving.com/surprise/swim-spas",
        "provider": {
          "@type": "Store",
          "@id": "https://dsoutdoorliving.com/surprise#location"
        },
        "areaServed": {
          "@type": "City",
          "name": "Surprise",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dsoutdoorliving.com/surprise/swim-spas#faq",
        "name": "Surprise Swim Spas FAQ",
        "about": {
          "@id": "https://dsoutdoorliving.com/surprise/swim-spas#service"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have swim spas in stock in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We often have a rotating selection of in-stock swim spas at our Surprise showroom. Inventory changes frequently, so call to confirm current availability."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you deliver a swim spa in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock swim spas are commonly delivered within days to a couple of weeks depending on scheduling and site readiness. Special-order models vary by brand and typically take several weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you coordinate electrical for swim spa installation in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our team coordinates electrical as part of the installation planning so your swim spa is powered safely and correctly. We’ll walk you through what your site needs and help align timing with delivery."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver swim spas outside Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver statewide across Arizona, including Surprise and surrounding West Valley areas. Call to confirm logistics and timelines for your address."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between an in-stock and special-order swim spa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock swim spas are available sooner (fastest delivery). Special-order swim spas let you choose a specific model and features, but lead times depend on the manufacturer."
            }
          },
          {
            "@type": "Question",
            "name": "Do swim spas include warranties and financing options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Swim spas include manufacturer warranties that vary by brand and model. Financing options are also available—contact our Surprise showroom for current programs and details."
            }
          },
          {
            "@type": "Question",
            "name": "Can I see swim spas in person before buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Visit our Surprise showroom to compare swim spa sizes, seating layouts, and training features in person. Call ahead to confirm availability."
            }
          }
        ]
      }
    ]
  };

  const [openMiniFaqIndex, setOpenMiniFaqIndex] = useState<number | null>(0);

  const miniFaq = [
    {
      q: 'Do you have swim spas in stock in Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we often have a rotating selection of in-stock{' '}
          <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
            swim spas
          </a>{' '}
          for faster delivery. Inventory changes frequently, so call{' '}
          <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
            (480) 997-9447
          </a>{' '}
          or check our{' '}
          <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
            Surprise showroom page
          </a>{' '}
          for details.
        </p>
      )
    },
    {
      q: 'How fast can you deliver a swim spa in Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          In-stock swim spas are commonly delivered within days to a couple of weeks depending on scheduling and site readiness.
          Special-order models vary by brand and typically take several weeks.
        </p>
      )
    },
    {
      q: 'Do you coordinate electrical?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. We coordinate electrical planning so your swim spa is powered safely and correctly, and we help align timing with delivery.
        </p>
      )
    },
    {
      q: 'Do you deliver outside Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we deliver statewide across Arizona. If you’re outside Surprise/West Valley, call and we’ll confirm logistics and timelines.
        </p>
      )
    },
    {
      q: 'Are warranties and financing available?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. Swim spas include manufacturer warranties (coverage varies by model and brand). Financing options are also available — call for
          current programs and details.
        </p>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-custom-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageStructuredData) }}
      />

      <Header />

      <div className="pt-32 py-16">
        <div className="container mx-auto px-4">
          {/* HERO */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Swim Spas in Surprise, AZ
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Shop swim spas with delivery &amp; installation coordination from D&apos;s Outdoor Living. Visit our{' '}
            <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
              Surprise showroom
            </a>{' '}
            to compare models in person.
          </p>

          {/* CTA BLOCK (above the fold) */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-teal-100 text-base md:text-lg leading-relaxed">
              See swim spas in person at{' '}
              <strong className="text-white">11304 N Dysart Rd Suite #104, Surprise, AZ 85379</strong>. Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              for availability, pricing, and delivery timelines.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+14809979447"
                className="inline-flex items-center justify-center rounded-full border border-teal-200/50 px-6 py-2 text-white hover:bg-teal-700/40 transition-colors"
              >
                Call now
              </a>
              <a
                href="/swim-spas"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                View swim spa models
              </a>
              <a
                href="/surprise"
                className="inline-flex items-center justify-center rounded-full bg-teal-700/40 border border-teal-200/30 px-6 py-2 text-white hover:bg-teal-700/55 transition-colors"
              >
                Visit the Surprise showroom
              </a>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=11304+N+Dysart+Rd+Suite+%23104,+Surprise,+AZ+85379"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-teal-200/30 px-6 py-2 text-white hover:bg-teal-700/40 transition-colors"
              >
                Get directions
              </a>
            </div>
          </div>

          {/* TRUST SIGNALS */}
          <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Statewide delivery in Arizona</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                We deliver across AZ, including Surprise, the West Valley, and beyond.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Electrical coordination handled</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Our team coordinates electrical planning so your swim spa setup stays on schedule.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">West Valley showroom support</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Compare sizes, seating, and training features in person at our Surprise showroom.
              </p>
            </div>
          </div>

          {/* VISUALS */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/G4nM8Hz.png"
                alt="Swim spas at D’s Outdoor Living Surprise showroom"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Swim, soak, recover — in one backyard unit</p>
                <p className="text-teal-100 text-sm md:text-base">
                  Compare sizes, seating, and training features in person.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/DhGg8Q9.png"
                alt="Swim spa delivery in Surprise AZ"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Delivery + setup guidance</p>
                <p className="text-teal-100 text-sm md:text-base">
                  We help coordinate the steps from purchase to first session.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT (800–1500 words across sections) */}
          <div className="mt-14 max-w-4xl mx-auto text-teal-100">
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Swim Spas in Surprise, AZ — What to Know
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A swim spa is one of the most flexible backyard upgrades for Surprise and the West Valley: you get a controlled current for low-impact
                workouts plus warm-water hydrotherapy for recovery and relaxation. Many homeowners choose a swim spa when they want something more
                versatile than a standard hot tub, without taking on the space and maintenance of a full pool.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Start by browsing our{' '}
                <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spa models
                </a>{' '}
                and then visit the{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom page
                </a>{' '}
                for hours, directions, and to plan your visit. You can also compare{' '}
                <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise hot tubs
                </a>{' '}
                and{' '}
                <a href="/surprise/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise contrast therapy spas
                </a>{' '}
                based on your goals.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why a Swim Spa Makes Sense in Surprise’s Climate
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Surprise has long stretches of warm weather that make backyard routines easier to maintain. A swim spa can become a daily-use feature:
                structured training when you want it, and recovery or relaxation whenever you need it. Many owners adjust the temperature seasonally —
                cooler for comfortable workouts during hotter months, warmer for evening recovery when temperatures drop.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                For West Valley households balancing work, family, and fitness, a swim spa is convenient: no commute, no lane schedules, and a consistent
                environment for low-impact movement.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Delivery &amp; Installation in Surprise (What the Process Looks Like)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas are larger than most hot tubs, so planning access and placement is a key part of a smooth install. The fastest path is
                typically an in-stock model (when available), with delivery commonly scheduled within days to a couple of weeks depending on site
                readiness. Special-order swim spas let you choose the exact model and features you want, but lead times vary by manufacturer and can
                take several weeks.
              </p>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">In-stock</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Best for speed. Choose from what’s available now for faster delivery and simpler scheduling.
                  </p>
                </div>
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">Special order</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Best for precision. Choose the exact swim spa configuration you want, with lead times based on the manufacturer.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Once you select a model, we help coordinate the steps from planning to placement and startup. Our goal is to make sure your swim spa
                arrives to a prepared site, gets placed smoothly, and you understand first-week basics.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Electrical Coordination + Site Prep (West Valley Considerations)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas typically require more planning than smaller spas: electrical load, panel capacity, run distance, and a proper pad/foundation
                all matter. Our team coordinates electrical directly so you’re not left guessing on requirements. We’ll help align timing so electrical
                and delivery stay on track.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A good first step is reviewing{' '}
                <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spa sizes and features
                </a>{' '}
                and then visiting our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom page
                </a>{' '}
                so you can talk through placement and next steps.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Areas We Serve from Surprise
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Our Surprise showroom supports buyers across the West Valley and beyond — and we also deliver statewide across Arizona. For showroom
                hours, directions, and NAP details, start on our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise location page
                </a>
                .
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Surprise / West Valley',
                  'Peoria',
                  'Glendale',
                  'El Mirage',
                  'Sun City',
                  'Litchfield Park',
                  'Goodyear'
                ].map((area) => (
                  <div
                    key={area}
                    className="bg-black/20 border border-white/10 rounded-2xl px-4 py-3 text-white"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Not listed? Call{' '}
                <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                  (480) 997-9447
                </a>{' '}
                — we deliver statewide and can confirm timelines for your address.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Popular Use Cases (Training, Recovery, Family Fun)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas are popular in Surprise for three core reasons: structured training, recovery, and easy backyard enjoyment. Training-focused
                buyers often want a consistent way to move without commuting to a gym. Recovery-focused buyers prioritize warm-water routines that
                support mobility and muscle relief.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If relaxation is your primary goal, compare{' '}
                <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise hot tubs
                </a>
                . If you’re building a recovery routine, explore{' '}
                <a href="/surprise/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy spas
                </a>{' '}
                for hot/cold protocols.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Choose D’s Outdoor Living (Surprise Showroom)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas are a bigger decision than a standard spa — sizing, access, electrical, and feature selection all matter. We help you compare
                models with real-world context and coordinate the steps so the process stays straightforward.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Start by browsing{' '}
                <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spa models
                </a>{' '}
                and then visit or contact our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom
                </a>{' '}
                to check availability and next steps.
              </p>
            </section>
          </div>

          {/* MINI FAQ */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Surprise Swim Spas — Quick Answers
            </h2>
            <p className="mt-3 text-center text-teal-100 text-base md:text-lg">
              Common questions about buying, delivery, and installation in Surprise / the West Valley.
            </p>

            <div className="mt-8 space-y-4 text-teal-100">
              {miniFaq.map((item, idx) => {
                const isOpen = openMiniFaqIndex === idx;
                return (
                  <div key={item.q} className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                    <button
                      type="button"
                      onClick={() => setOpenMiniFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left"
                      aria-expanded={isOpen}
                    >
                      <span className="text-lg md:text-xl font-semibold text-white">{item.q}</span>
                      <span
                        className={`text-2xl text-teal-100 transition-transform duration-200 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    {isOpen && <div className="mt-4">{item.a}</div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div className="mt-14 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Ready to Choose Your Surprise Swim Spa?
            </h2>
            <p className="mt-3 text-teal-100 text-base md:text-lg leading-relaxed">
              Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              to check in-stock availability, request pricing, and get a delivery timeline. You can also browse{' '}
              <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                all swim spas
              </a>{' '}
              or compare{' '}
              <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                hot tubs
              </a>{' '}
              and{' '}
              <a href="/surprise/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                contrast therapy spas
              </a>{' '}
              in Surprise.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+14809979447"
                className="inline-flex items-center justify-center rounded-full border border-teal-200/50 px-6 py-2 text-white hover:bg-teal-700/40 transition-colors"
              >
                Call now
              </a>
              <a
                href="/surprise"
                className="inline-flex items-center justify-center rounded-full bg-teal-700/40 border border-teal-200/30 px-6 py-2 text-white hover:bg-teal-700/55 transition-colors"
              >
                Visit the Surprise showroom
              </a>
              <a
                href="/swim-spas"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                Request pricing / browse models
              </a>
            </div>
          </div>

          {/* SIMPLE DIRECTIONS CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=11304+N+Dysart+Rd+Suite+%23104,+Surprise,+AZ+85379"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-teal-200/50 px-5 py-2 text-white hover:bg-teal-700/40 transition-colors"
            >
              Get directions
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SurpriseSwimSpasPage;
