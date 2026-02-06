import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixSwimSpasPage = () => {
  // Service + FAQ schema (richer + consistent with your Phoenix location entity)
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dsoutdoorliving.com/phoenix/swim-spas#service",
        "name": "Swim Spas in Phoenix, AZ",
        "serviceType": "Swim Spa Sales",
        "url": "https://dsoutdoorliving.com/phoenix/swim-spas",
        "provider": {
          "@type": "Store",
          "@id": "https://dsoutdoorliving.com/phoenix#location"
        },
        "areaServed": {
          "@type": "City",
          "name": "Phoenix",
          "addressRegion": "AZ",
          "addressCountry": "US"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dsoutdoorliving.com/phoenix/swim-spas#faq",
        "name": "Phoenix Swim Spas FAQ",
        "about": {
          "@id": "https://dsoutdoorliving.com/phoenix/swim-spas#service"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have swim spas in stock in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We often have a rotating selection of in-stock swim spas. Inventory changes frequently, so call or visit our Phoenix showroom page to confirm what’s available."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you deliver a swim spa in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock swim spas are often delivered within days to a couple of weeks depending on scheduling and site readiness. Special-order models vary by brand and typically take several weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you coordinate electrical for swim spa installation in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Our team coordinates electrical as part of the install planning so your swim spa is powered safely and correctly. We’ll walk you through requirements and timing based on your site."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver swim spas outside Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver statewide across Arizona, including Phoenix and surrounding communities like Anthem, Cave Creek, Scottsdale, and more."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between an in-stock and special-order swim spa?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock swim spas are available sooner (fastest delivery). Special-order swim spas allow you to choose the exact model and features, but lead times depend on the manufacturer."
            }
          },
          {
            "@type": "Question",
            "name": "Do swim spas include warranties and financing options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Swim spas include manufacturer warranties that vary by brand and model. Financing options are also available—contact us for current programs and details."
            }
          },
          {
            "@type": "Question",
            "name": "Can I see swim spas in person before buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Visit our Phoenix showroom (appointment only) to compare swim spa sizes, seating, and training features in person. Call to arrange a visit."
            }
          }
        ]
      }
    ]
  };

  const [openMiniFaqIndex, setOpenMiniFaqIndex] = useState<number | null>(0);

  const miniFaq = [
    {
      q: 'Do you have swim spas in stock in Phoenix?',
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
          or visit our{' '}
          <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
            Phoenix showroom page
          </a>{' '}
          to confirm what’s available.
        </p>
      )
    },
    {
      q: 'How fast can you deliver a swim spa in Phoenix?',
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
          Yes. We coordinate the electrical portion of the install so the swim spa is powered safely and correctly, and we’ll help you plan timing
          as part of the overall delivery process.
        </p>
      )
    },
    {
      q: 'Do you deliver outside Phoenix?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we deliver statewide across Arizona. If you’re outside Phoenix, call and we’ll confirm logistics and delivery timelines for your address.
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
            Swim Spas in Phoenix, AZ
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Shop swim spas with delivery &amp; installation coordination from D&apos;s Outdoor Living. Visit our{' '}
            <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
              Phoenix showroom
            </a>{' '}
            (appointment only) to compare models in person.
          </p>

          {/* CTA BLOCK (above the fold) */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-teal-100 text-base md:text-lg leading-relaxed">
              See swim spas in person at{' '}
              <strong className="text-white">3106 W Blue Eagle Ln, Phoenix, AZ 85086</strong>. Visits are{' '}
              <strong className="text-white">appointment only</strong> — call{' '}
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
                href="/phoenix"
                className="inline-flex items-center justify-center rounded-full bg-teal-700/40 border border-teal-200/30 px-6 py-2 text-white hover:bg-teal-700/55 transition-colors"
              >
                Schedule a Phoenix showroom visit
              </a>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=3106+W+Blue+Eagle+Ln,+Phoenix,+AZ+85086"
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
                We deliver across AZ, including Phoenix, the North Valley, and beyond.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Electrical coordination handled</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Our team coordinates electrical planning so your swim spa setup stays on schedule.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Appointment-only Phoenix visits</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Call ahead to arrange time to compare models and talk through site prep.
              </p>
            </div>
          </div>

          {/* VISUALS */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/G4nM8Hz.png"
                alt="Swim spas at D’s Outdoor Living Phoenix showroom"
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
                alt="Swim spa delivery in Phoenix AZ"
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
                Swim Spas in Phoenix, AZ — What to Know
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A swim spa is one of the most practical “two-in-one” backyard upgrades for Phoenix: you get a controlled current for low-impact
                workouts, plus warm-water hydrotherapy for recovery and relaxation. For many Arizona homeowners, it’s the sweet spot between a
                traditional pool and a hot tub — smaller footprint than a pool, more versatile than a standard spa, and useful across more months
                of the year.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If you’re comparing options, start by browsing our{' '}
                <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spa models
                </a>{' '}
                and then visit the{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix showroom page
                </a>{' '}
                for NAP details and to schedule an appointment-only visit. You can also cross-shop{' '}
                <a href="/phoenix/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix hot tubs
                </a>{' '}
                and{' '}
                <a href="/phoenix/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix contrast therapy spas
                </a>{' '}
                depending on your goals.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why a Swim Spa Makes Sense in Phoenix’s Climate
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Phoenix weather is ideal for consistent backyard routines — especially when you want something you’ll use frequently, not just on
                weekends. Swim spas support year-round consistency: warm-water training when you want it, recovery whenever you need it, and a
                comfortable environment even when the air cools down in winter evenings.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                In the hotter months, many owners adjust temperature setpoints for comfort and use swim spas later in the day. If your primary use
                case is performance and recovery (instead of lounging), a swim spa can be a powerful “home base” for low-impact conditioning in a
                city where outdoor heat can disrupt training consistency.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Delivery &amp; Installation in Phoenix (What the Process Looks Like)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas are larger and heavier than most hot tubs, so planning delivery access and placement is a key part of the process. The
                fastest path is typically an in-stock model (when available), with delivery commonly scheduled within days to a couple of weeks
                depending on site readiness. Special-order swim spas give you the most control over exact model and features, but lead times vary by
                manufacturer and can take several weeks.
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
                Once you select a model, we help coordinate the important steps: confirming placement, planning delivery access, and coordinating
                electrical. On delivery day, the goal is a smooth placement and clear startup guidance so you’re comfortable with operation and
                first-week basics.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Electrical Coordination + Site Prep (Phoenix/Maricopa Considerations)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas typically require more planning than smaller spas: electrical load, panel capacity, run distance, and a proper pad/foundation
                all matter. Our team coordinates electrical directly so you’re not left guessing on requirements. We’ll help you plan the timeline so
                delivery and electrical stay aligned.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A good first step is scheduling an appointment-only visit via our{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix location page
                </a>{' '}
                and then reviewing models on{' '}
                <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  our swim spa catalog
                </a>{' '}
                so you can compare sizes and features with context.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Areas We Serve from Phoenix
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Our Phoenix location supports buyers across the North Valley and beyond, and we also deliver statewide across Arizona. For appointments,
                address, and hours, start on our{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix showroom page
                </a>
                .
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Desert Hills / North Phoenix',
                  'Anthem',
                  'Cave Creek',
                  'Deer Valley',
                  'Peoria',
                  'Scottsdale',
                  'Glendale'
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
                Outside these areas? Call{' '}
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
                Swim spas are popular in Phoenix for three core reasons: consistent training, recovery, and easy backyard enjoyment for families.
                Training-focused buyers often want a predictable way to get low-impact conditioning without driving to a gym or dealing with outdoor
                heat. Recovery-focused buyers prioritize warm-water hydrotherapy and routines that support mobility and muscle relief.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                For families, swim spas can be the “do-it-all” backyard feature: a place to move, play, and relax without the scale of a full pool.
                If your priority is primarily relaxation, compare{' '}
                <a href="/phoenix/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix hot tubs
                </a>
                . If your routine is more recovery-centric, explore{' '}
                <a href="/phoenix/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy spas
                </a>{' '}
                for hot/cold protocols.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Choose D’s Outdoor Living (Phoenix Showroom)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Swim spas are a bigger decision than a standard hot tub — sizing, access, electrical planning, and feature selection all matter.
                We help you compare models with real-world context and coordinate the install steps so the process stays simple.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Start by browsing{' '}
                <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spa models
                </a>{' '}
                and then schedule an appointment using our{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix showroom page
                </a>
                . If you want faster delivery, call to check what’s currently in stock.
              </p>
            </section>
          </div>

          {/* MINI FAQ */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Phoenix Swim Spas — Quick Answers
            </h2>
            <p className="mt-3 text-center text-teal-100 text-base md:text-lg">
              Common questions about buying, delivery, and installation in Phoenix / the North Valley.
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
              Ready to Choose Your Phoenix Swim Spa?
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
              <a href="/phoenix/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                hot tubs
              </a>{' '}
              and{' '}
              <a href="/phoenix/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                contrast therapy spas
              </a>{' '}
              in Phoenix.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+14809979447"
                className="inline-flex items-center justify-center rounded-full border border-teal-200/50 px-6 py-2 text-white hover:bg-teal-700/40 transition-colors"
              >
                Call now
              </a>
              <a
                href="/phoenix"
                className="inline-flex items-center justify-center rounded-full bg-teal-700/40 border border-teal-200/30 px-6 py-2 text-white hover:bg-teal-700/55 transition-colors"
              >
                Schedule a Phoenix showroom visit
              </a>
              <a
                href="/swim-spas"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                Request pricing / browse models
              </a>
            </div>
          </div>

          {/* SIMPLE DIRECTIONS CTA (keeps parity with your original page) */}
          <div className="mt-10 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3106+W+Blue+Eagle+Ln,+Phoenix,+AZ+85086"
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

export default PhoenixSwimSpasPage;
