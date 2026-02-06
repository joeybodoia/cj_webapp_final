import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurpriseContrastTherapySpasPage = () => {
  // Service + FAQ schema (richer + consistent with your Surprise location entity)
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dsoutdoorliving.com/surprise/contrast-therapy-spas#service",
        "name": "Contrast Therapy Spas in Surprise, AZ",
        "serviceType": "Contrast Therapy Spa Sales",
        "url": "https://dsoutdoorliving.com/surprise/contrast-therapy-spas",
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
        "@id": "https://dsoutdoorliving.com/surprise/contrast-therapy-spas#faq",
        "name": "Surprise Contrast Therapy Spas FAQ",
        "about": {
          "@id": "https://dsoutdoorliving.com/surprise/contrast-therapy-spas#service"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have contrast therapy spas in stock in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We often have a rotating selection available through our Surprise showroom. Inventory changes frequently, so call to confirm current availability and which units can be delivered fastest."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you deliver a contrast therapy spa in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock units are commonly delivered within days to a couple of weeks depending on scheduling and site readiness. Special-order models vary by brand and typically take several weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you coordinate electrical for contrast therapy setups?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our team coordinates electrical planning as part of the installation process so your system is powered safely and correctly."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver outside Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver statewide across Arizona, including Surprise and the West Valley. Call to confirm logistics and timelines for your address."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between an in-stock and special-order unit?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock units are available sooner (fastest delivery). Special-order units let you choose a specific configuration and features, but lead times depend on the manufacturer."
            }
          },
          {
            "@type": "Question",
            "name": "Are warranties and financing available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Units include manufacturer warranties that vary by model and brand. Financing options are also available—contact our Surprise showroom for current programs and details."
            }
          },
          {
            "@type": "Question",
            "name": "Can I see contrast therapy spas in person at the Surprise showroom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Visit our Surprise showroom to compare options and plan your setup. Call ahead to confirm hours, availability, and the best time to stop by."
            }
          }
        ]
      }
    ]
  };

  const [openMiniFaqIndex, setOpenMiniFaqIndex] = useState<number | null>(0);

  const miniFaq = [
    {
      q: 'Do you have contrast therapy spas in stock in Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          We often have a rotating selection available through our{' '}
          <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
            Surprise showroom
          </a>
          . Inventory changes frequently, so call{' '}
          <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
            (480) 997-9447
          </a>{' '}
          to confirm what’s available now and which options can be delivered fastest.
        </p>
      )
    },
    {
      q: 'How fast can you deliver in Surprise / the West Valley?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          In-stock units are commonly delivered within days to a couple of weeks depending on scheduling and site readiness.
          Special-order lead times vary by brand and are usually several weeks.
        </p>
      )
    },
    {
      q: 'Do you coordinate electrical?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. Our team coordinates electrical planning so your contrast therapy setup is powered safely and correctly.
        </p>
      )
    },
    {
      q: 'Do you deliver outside Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we deliver statewide across Arizona. Call and we’ll confirm logistics and timelines for your address.
        </p>
      )
    },
    {
      q: 'Are warranties and financing available?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. Manufacturer warranties vary by model and brand, and financing options are available — call for current programs.
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
            Contrast Therapy Spas in Surprise, AZ
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Build a hot/cold recovery routine with a contrast therapy setup from D&apos;s Outdoor Living. Visit our{' '}
            <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
              Surprise showroom
            </a>{' '}
            to compare options and plan your setup.
          </p>

          {/* CTA BLOCK (above the fold) */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-teal-100 text-base md:text-lg leading-relaxed">
              See options in person at{' '}
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
                href="/contrast-therapy-spas"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                View contrast therapy options
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
                href="https://www.google.com/maps/dir/?api=1&destination=11304+N+Dysart+Rd+Suite+104,+Surprise,+AZ+85379"
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
                We deliver across AZ, including Surprise and the West Valley.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Electrical coordination handled</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Our team coordinates electrical planning so your system is powered safely and correctly.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Compare options in person</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Stop by to review sizes, features, and setup requirements with our team.
              </p>
            </div>
          </div>

          {/* VISUALS */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/J4mylLL.jpeg"
                alt="Contrast therapy spas at D’s Outdoor Living Surprise showroom"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Hot + cold recovery at home</p>
                <p className="text-teal-100 text-sm md:text-base">
                  Plan a contrast routine that fits your space and schedule.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/DhGg8Q9.png"
                alt="Contrast therapy spa delivery in Surprise AZ"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Delivery + setup coordination</p>
                <p className="text-teal-100 text-sm md:text-base">
                  We help coordinate the steps from purchase to first session.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-14 max-w-4xl mx-auto text-teal-100">
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Contrast Therapy Spas in Surprise, AZ — What to Know
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Contrast therapy combines heat exposure (hot spa) with cold exposure (cold plunge) in a repeatable routine. In Surprise and the West
                Valley, where people balance busy schedules with training, outdoor activities, and family life, an at-home setup can turn recovery into
                a consistent habit instead of an occasional appointment.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Start by browsing{' '}
                <a href="/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  all contrast therapy spas
                </a>{' '}
                and then use our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom page
                </a>{' '}
                for NAP details and in-person help. You can also cross-shop{' '}
                <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise hot tubs
                </a>{' '}
                or{' '}
                <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise swim spas
                </a>{' '}
                depending on whether your priority is recovery, relaxation, training, or all of the above.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Contrast Therapy Fits the West Valley Lifestyle
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Surprise is built around active living — neighborhood gyms, weekend sports, golf, hiking, and year-round outdoor time. A contrast
                routine can be a practical way to support recovery and stress relief without adding extra driving or recurring appointments.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If hydrotherapy relaxation is your main goal, compare{' '}
                <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tubs in Surprise
                </a>
                . If you want training + recovery in one unit, explore{' '}
                <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spas in Surprise
                </a>
                .
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Delivery &amp; Installation in Surprise (What the Process Looks Like)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Choosing an in-stock option (when available) is the simplest way to keep timelines short. In-stock units are commonly delivered within
                days to a couple of weeks depending on scheduling and site readiness. Special-order configurations let you choose exact features, but
                lead times vary by brand and typically take several weeks.
              </p>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">In-stock</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Best for speed. Faster delivery and easier scheduling.
                  </p>
                </div>
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">Special order</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Best for precision. Choose the exact configuration you want, with manufacturer lead times.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Once you choose a path, we help coordinate the steps so your delivery arrives to a prepared site and your setup is ready to use quickly.
                For showroom details and help planning, start at{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  our Surprise location page
                </a>
                .
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Electrical Coordination + Site Prep
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Contrast therapy setups vary, but placement and power requirements still matter — panel capacity, run distance, and a stable foundation
                are common factors. Our team coordinates electrical directly so you’re not guessing on requirements or sequencing.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A good starting point is narrowing down the type of experience you want on{' '}
                <a href="/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  our contrast therapy page
                </a>
                . If you’re also considering a dedicated hot spa for relaxation, browse{' '}
                <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tub models
                </a>
                .
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Areas We Serve from Surprise
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Our Surprise showroom supports buyers across the West Valley — and we also deliver statewide across Arizona. For showroom details and
                NAP info, visit our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise location page
                </a>
                .
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Surprise',
                  'Sun City',
                  'Sun City West',
                  'Peoria',
                  'Glendale',
                  'Goodyear',
                  'Litchfield Park',
                  'Waddell'
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
                Popular Use Cases (Recovery, Stress Relief, Performance)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Most buyers look at contrast therapy for one of three goals: recovery after training, stress relief, or performance habits that are easy
                to keep consistent. Some build a simple routine a few times per week; others keep quick sessions as part of their daily schedule.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If you want full-body relaxation and hydrotherapy as the primary experience, compare{' '}
                <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tubs in Surprise
                </a>
                . If you want training + recovery in one unit, explore{' '}
                <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spas in Surprise
                </a>
                .
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Choose D’s Outdoor Living (Surprise Showroom)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Contrast therapy setups are more than a single purchase — it’s a routine you’ll use repeatedly. We help you compare options, plan for
                placement, and coordinate the practical steps so your setup feels straightforward rather than overwhelming.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Browse{' '}
                <a href="/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy options
                </a>{' '}
                and then visit our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom
                </a>{' '}
                to review your best-fit setup.
              </p>
            </section>
          </div>

          {/* MINI FAQ */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Surprise Contrast Therapy — Quick Answers
            </h2>
            <p className="mt-3 text-center text-teal-100 text-base md:text-lg">
              Common questions about inventory, delivery, and setup in Surprise / the West Valley.
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
                        className={`text-2xl text-teal-200 transition-transform duration-200 ${
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
              Ready to Build Your Surprise Contrast Therapy Setup?
            </h2>
            <p className="mt-3 text-teal-100 text-base md:text-lg leading-relaxed">
              Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              to check availability, request pricing, and get a delivery timeline. You can also browse{' '}
              <a href="/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                all contrast therapy options
              </a>{' '}
              or compare{' '}
              <a href="/surprise/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                hot tubs
              </a>{' '}
              and{' '}
              <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                swim spas
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
                href="/contrast-therapy-spas"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                Request pricing / browse options
              </a>
            </div>
          </div>

          {/* SIMPLE DIRECTIONS CTA */}
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=11304+N+Dysart+Rd+Suite+104,+Surprise,+AZ+85379"
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

export default SurpriseContrastTherapySpasPage;
