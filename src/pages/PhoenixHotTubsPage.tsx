import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixHotTubsPage = () => {
  // Service + FAQ schema (cleaned up, richer, and consistent with your location entity)
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dsoutdoorliving.com/phoenix/hot-tubs#service",
        "name": "Hot Tubs in Phoenix, AZ",
        "serviceType": "Hot Tub Sales",
        "url": "https://dsoutdoorliving.com/phoenix/hot-tubs",
        "provider": {
          "@type": "Store",
          "@id": "https://dsoutdoorliving.com/phoenix#location"
        },
        "areaServed": {
          "@type": "City",
          "name": "Phoenix",
          "containedInPlace": {
            "@type": "State",
            "name": "Arizona",
            "containedInPlace": {
              "@type": "Country",
              "name": "US"
            }
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://dsoutdoorliving.com/phoenix/hot-tubs#faq",
        "name": "Phoenix Hot Tubs FAQ",
        "about": {
          "@id": "https://dsoutdoorliving.com/phoenix/hot-tubs#service"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have hot tubs in stock in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We keep a rotating selection of in-stock hot tubs that can be purchased directly. Inventory changes frequently, so call or visit our Phoenix showroom page to confirm what’s available."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you deliver a hot tub in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock hot tubs are often delivered within days to a couple of weeks depending on scheduling and site readiness. Special-order models vary by brand and typically take several weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you coordinate electrical for hot tub installation in Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We coordinate the electrical portion of the install so your spa is powered safely and correctly. We’ll walk you through requirements and timing as part of the delivery process."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver outside Phoenix?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver statewide across Arizona, including the North Valley and surrounding cities. If you’re unsure whether you’re in our service area, call and we’ll confirm."
            }
          },
          {
            "@type": "Question",
            "name": "What is the difference between in-stock and special-order hot tubs?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock hot tubs are available immediately (fastest delivery). Special-order hot tubs allow more customization and exact model selection, but lead times depend on the manufacturer."
            }
          },
          {
            "@type": "Question",
            "name": "Do your hot tubs include warranties and financing options?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Hot tubs include manufacturer warranties that vary by brand and model. Financing options are also available—contact us for current programs and details."
            }
          },
          {
            "@type": "Question",
            "name": "Can I see hot tubs in person before buying?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We recommend visiting the Phoenix showroom to compare seating layouts, jet options, and sizes in person. Phoenix visits are by appointment—call to schedule."
            }
          }
        ]
      }
    ]
  };

  const [openMiniFaqIndex, setOpenMiniFaqIndex] = useState<number | null>(0);

  const miniFaq = [
    {
      q: 'Do you have hot tubs in stock in Phoenix?',
      a: (
        <>
          <p className="text-base md:text-lg leading-relaxed">
            Yes — we keep a rotating selection of <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">hot tubs</a>{' '}
            available for quicker delivery. Inventory changes often, so the fastest way to confirm what’s on the floor is to call{' '}
            <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">(480) 997-9447</a>{' '}
            or visit our <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">Phoenix showroom page</a>.
          </p>
        </>
      )
    },
    {
      q: 'How fast can you deliver in Phoenix?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          If you choose an in-stock spa, delivery is commonly within days to a couple of weeks depending on scheduling and site readiness.
          Special-order models can take several weeks (lead times vary by manufacturer).
        </p>
      )
    },
    {
      q: 'Do you coordinate electrical?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. We coordinate the electrical portion of the install so the spa is powered safely and correctly. We’ll confirm what’s needed,
          help you plan timing, and keep the install process moving smoothly.
        </p>
      )
    },
    {
      q: 'Do you deliver outside Phoenix?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we deliver statewide across Arizona. Many customers come from the North Valley and surrounding cities, and we can confirm
          availability and delivery timelines by phone.
        </p>
      )
    },
    {
      q: 'Are warranties and financing available?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. Hot tubs include manufacturer warranties that vary by brand/model. Financing programs are available — call for current options
          and qualification details.
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
            Hot Tubs in Phoenix, AZ
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Shop hot tubs with delivery &amp; installation coordination from D&apos;s Outdoor Living. Visit our{' '}
            <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
              Phoenix showroom (appointment-only)
            </a>{' '}
            to compare models in person.
          </p>

          {/* CTA BLOCK (above the fold) */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-teal-100 text-base md:text-lg leading-relaxed">
              See hot tubs in person at <strong className="text-white">3106 W Blue Eagle Ln, Phoenix, AZ 85086</strong>. Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              for in-stock availability, pricing, and delivery timelines.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="tel:+14809979447"
                className="inline-flex items-center justify-center rounded-full border border-teal-200/50 px-6 py-2 text-white hover:bg-teal-700/40 transition-colors"
              >
                Call now
              </a>
              <a
                href="/hot-tubs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                View hot tub models
              </a>
              <a
                href="/phoenix"
                className="inline-flex items-center justify-center rounded-full bg-teal-700/40 border border-teal-200/30 px-6 py-2 text-white hover:bg-teal-700/55 transition-colors"
              >
                Schedule a showroom visit (appointment-only)
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
                We deliver across AZ, including Phoenix, the North Valley, and surrounding cities.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Electrical coordination handled</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                We coordinate electrical so your install is safe, compliant, and scheduled efficiently.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">Phoenix visits are appointment-only</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Call ahead and we’ll set a time to walk you through options and availability.
              </p>
            </div>
          </div>

          {/* VISUALS */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/DhGg8Q9.png"
                alt="Hot tubs at D’s Outdoor Living Phoenix showroom"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Compare models in person</p>
                <p className="text-teal-100 text-sm md:text-base">
                  Seating layout, jet feel, and size are easier to choose when you can see the spa up close.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/G4nM8Hz.png"
                alt="Hot tub delivery in Phoenix AZ"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Delivery + setup guidance</p>
                <p className="text-teal-100 text-sm md:text-base">
                  From scheduling to startup, we help you understand what to expect at each step.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT (800–1500 words across sections) */}
          <div className="mt-14 max-w-4xl mx-auto text-teal-100">
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hot Tubs in Phoenix, AZ — What to Know
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Buying a hot tub in Phoenix is different than buying a spa in a mild climate. You’re balancing year-round use,
                hot summer temperatures, and the practical realities of site prep, delivery access, and electrical readiness.
                The good news: when a spa is chosen and installed with Phoenix in mind, it can be one of the most enjoyable
                upgrades you can make to your home — whether you want family time, recovery after workouts, or a relaxing way
                to end the day.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                At D&apos;s Outdoor Living, we help you make the decision with real, local context: what models tend to fit common
                backyards, what features people actually use in Arizona, and how to get from “I want a hot tub” to “it’s installed
                and ready” without surprises. If you&apos;re early in the process, start by browsing our{' '}
                <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tub catalog
                </a>{' '}
                and then schedule an appointment via our{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix showroom page
                </a>{' '}
                to compare options in person.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why a Hot Tub Makes Sense in Phoenix’s Climate
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Phoenix weather gives you more hot-tub months than most places — but the best setup is the one designed for Arizona.
                In the cooler season (roughly fall through spring), a spa becomes an everyday comfort: evenings are mild, the water
                feels perfect, and you can use it consistently without battling rain or freezing temps. Even in the summer, many owners
                still soak by running the spa at a lower temperature and using it at night, or by choosing features that help with comfort
                and water management.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Arizona sun and heat also mean your cover, filtration, and water care plan matter more. We’ll help you think through
                placement (sun exposure vs. shade), how you want the spa to look in your space, and what features make ownership easier
                long-term. If you’re deciding between a classic spa and something more fitness-oriented, compare{' '}
                <a href="/phoenix/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix swim spas
                </a>{' '}
                or consider a recovery-focused setup with{' '}
                <a href="/phoenix/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy spas
                </a>{' '}
                for cold/hot routines.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Delivery &amp; Installation in Phoenix (What the Process Looks Like)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Most customers want to know one thing: “How quickly can this be delivered and set up?” The answer depends on whether you choose
                an in-stock model or a special order. If you select an in-stock spa, delivery is commonly scheduled within days to a couple of
                weeks depending on your site readiness and the delivery calendar. If you special-order, lead times vary by manufacturer and can
                take several weeks.
              </p>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">In-stock</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Fastest path to ownership. Great when you want a spa soon and you’re flexible on exact model/config.
                  </p>
                  <p className="mt-2 text-sm md:text-base text-teal-100">
                    Best next step: call to confirm what’s currently available.
                  </p>
                </div>
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">Special order</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Ideal when you want a specific model, size, or feature set. Lead time depends on brand/manufacturer.
                  </p>
                  <p className="mt-2 text-sm md:text-base text-teal-100">
                    Best next step: browse models and book an appointment to compare options.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Once you’ve chosen a spa, we help you line up the key pieces: confirming placement, delivery access, and the electrical plan.
                On delivery day, the goal is simple — clean placement, proper setup, and startup guidance so you know exactly how your spa works
                and what to do during the first week of ownership.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Electrical Coordination + Site Prep (Phoenix / Maricopa Considerations)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A smooth install usually comes down to site prep and electrical timing. In Phoenix and the surrounding area, your home’s panel
                capacity, distance from the panel to the spa location, and the placement surface all affect how quickly you can go from purchase
                to first soak. We coordinate the electrical portion directly, so you’re not left guessing what needs to happen and when.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Before delivery, we’ll confirm basics like: where the spa will sit, whether the path to the placement area is clear, and whether
                you need any adjustments to accommodate delivery. If you’re unsure, the best move is to start with the showroom visit on our{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix location page
                </a>{' '}
                and we’ll help you plan a setup that works for your property.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Areas We Serve from Phoenix
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Customers visit us from all over the Valley and beyond. Our Phoenix showroom is a common starting point for buyers in the North
                Valley — and we deliver statewide across Arizona. If you’re coming from nearby areas, you can plan a visit through our{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix showroom page
                </a>{' '}
                (appointment-only).
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
                Not sure if you’re in range for delivery or service? Call{' '}
                <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                  (480) 997-9447
                </a>{' '}
                and we’ll confirm logistics and timelines.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Popular Use Cases (Family, Recovery, Entertaining)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Phoenix buyers typically fall into a few common use cases — and the right spa depends on what you’ll actually do with it.
                Families often prioritize seating layout, comfort, and easy controls. Recovery-focused buyers care about targeted jets,
                temperature stability, and a consistent routine. Entertainers look for a layout that keeps people facing each other, plus
                features that make ownership easy when guests are over.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If you want a spa that doubles as a fitness tool, check out{' '}
                <a href="/phoenix/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spas in Phoenix
                </a>{' '}
                for low-impact training. If your priority is hot/cold recovery, explore{' '}
                <a href="/phoenix/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy spas
                </a>{' '}
                for routines that support performance and wellness.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Choose D’s Outdoor Living (Phoenix Showroom)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Choosing the right hot tub isn’t just about picking a model — it’s about knowing you have a team that can guide you through
                selection, delivery planning, and the real-world details that matter in Phoenix. We’ll help you compare options realistically:
                what fits your space, what features are worth paying for, and what you can skip without sacrificing comfort.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Our Phoenix visits are appointment-only, which means you’ll actually get time with a specialist who can walk through your
                goals and help you leave with a plan. Start with our{' '}
                <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tub models
                </a>{' '}
                and then schedule a visit using the{' '}
                <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">
                  Phoenix showroom page
                </a>{' '}
                when you’re ready.
              </p>
            </section>
          </div>

          {/* MINI FAQ (above any future accordion you add) */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Phoenix Hot Tubs — Quick Answers
            </h2>
            <p className="mt-3 text-center text-teal-100 text-base md:text-lg">
              Common questions about buying, delivery, and installation in Phoenix.
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
              Ready to Choose Your Phoenix Hot Tub?
            </h2>
            <p className="mt-3 text-teal-100 text-base md:text-lg leading-relaxed">
              Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              to check in-stock availability, request pricing, and set up an appointment-only showroom visit. Prefer to browse first? View{' '}
              <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                all hot tubs
              </a>{' '}
              or compare{' '}
              <a href="/phoenix/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                swim spas
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
                Schedule a showroom visit (appointment-only)
              </a>
              <a
                href="/hot-tubs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                Request pricing / browse models
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PhoenixHotTubsPage;
