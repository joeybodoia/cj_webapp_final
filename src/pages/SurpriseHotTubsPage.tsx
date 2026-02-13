import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurpriseHotTubsPage = () => {
  // Service + FAQ schema (richer + consistent with your Surprise location entity)
  const pageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://dsoutdoorliving.com/surprise/hot-tubs#service",
        "name": "Hot Tubs in Surprise, AZ",
        "serviceType": "Hot Tub Sales",
        "url": "https://dsoutdoorliving.com/surprise/hot-tubs",
        "provider": {
          "@type": "Store",
          "@id": "https://dsoutdoorliving.com/surprise#location"
        },
        "areaServed": {
          "@type": "City",
          "name": "Surprise",
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
        "@id": "https://dsoutdoorliving.com/surprise/hot-tubs#faq",
        "name": "Surprise Hot Tubs FAQ",
        "about": {
          "@id": "https://dsoutdoorliving.com/surprise/hot-tubs#service"
        },
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Do you have hot tubs in stock in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We keep a rotating selection of in-stock hot tubs that can be purchased directly. Inventory changes frequently, so call or visit our Surprise showroom page to confirm what’s available."
            }
          },
          {
            "@type": "Question",
            "name": "How fast can you deliver a hot tub in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "In-stock hot tubs are often delivered within days to a couple of weeks depending on scheduling and site readiness. Special-order models vary by brand and typically take several weeks."
            }
          },
          {
            "@type": "Question",
            "name": "Do you coordinate electrical for hot tub installation in Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We coordinate the electrical portion of the install so your spa is powered safely and correctly. We’ll walk you through requirements and timing as part of the delivery process."
            }
          },
          {
            "@type": "Question",
            "name": "Do you deliver outside Surprise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. We deliver statewide across Arizona, including Surprise and surrounding West Valley communities. If you’re unsure whether you’re in our service area, call and we’ll confirm."
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
              "text": "Yes. Visit our Surprise showroom to compare seating layouts, jet options, and sizes in person. Call ahead to confirm availability and schedule your visit."
            }
          }
        ]
      }
    ]
  };

  const [openMiniFaqIndex, setOpenMiniFaqIndex] = useState<number | null>(0);

  const miniFaq = [
    {
      q: 'Do you have hot tubs in stock in Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we keep a rotating selection of in-stock{' '}
          <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
            hot tubs
          </a>{' '}
          for faster delivery. Inventory changes frequently, so call{' '}
          <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
            (480) 997-9447
          </a>{' '}
          or visit our{' '}
          <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
            Surprise showroom page
          </a>{' '}
          to confirm what’s available.
        </p>
      )
    },
    {
      q: 'How fast can you deliver in Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          In-stock hot tubs are commonly delivered within days to a couple of weeks depending on scheduling and site readiness.
          Special-order models vary by brand and typically take several weeks.
        </p>
      )
    },
    {
      q: 'Do you coordinate electrical?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. We coordinate the electrical portion of the install so the spa is powered safely and correctly, and we’ll help you plan timing
          as part of the overall delivery process.
        </p>
      )
    },
    {
      q: 'Do you deliver outside Surprise?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes — we deliver statewide across Arizona, including Surprise and surrounding West Valley communities. Call and we’ll confirm
          logistics and delivery timelines for your address.
        </p>
      )
    },
    {
      q: 'Are warranties and financing available?',
      a: (
        <p className="text-base md:text-lg leading-relaxed">
          Yes. Hot tubs include manufacturer warranties (coverage varies by model and brand). Financing options are also available — call for
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
            Hot Tubs in Surprise, AZ
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Shop hot tubs with delivery &amp; installation coordination from D&apos;s Outdoor Living. Visit our{' '}
            <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
              Surprise showroom
            </a>{' '}
            to compare models in person.
          </p>

          {/* CTA BLOCK (above the fold) */}
          <div className="mt-10 max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 text-center">
            <p className="text-teal-100 text-base md:text-lg leading-relaxed">
              See hot tubs in person at{' '}
              <strong className="text-white">11304 N Dysart Rd Suite #104, Surprise, AZ 85379</strong>. Call{' '}
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
                We coordinate electrical so your install is safe, compliant, and scheduled efficiently.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-white font-semibold">In-stock + special order options</p>
              <p className="mt-2 text-teal-100 text-sm md:text-base">
                Choose faster delivery with in-stock, or get the exact model you want via special order.
              </p>
            </div>
          </div>

          {/* VISUALS */}
          <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/DhGg8Q9.png"
                alt="Hot tubs at D’s Outdoor Living Surprise showroom"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Compare models in person</p>
                <p className="text-teal-100 text-sm md:text-base">
                  See seating layouts, sizes, and features before you buy.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <img
                src="https://i.imgur.com/G4nM8Hz.png"
                alt="Hot tub delivery in Surprise AZ"
                loading="lazy"
                decoding="async"
                className="w-full h-72 md:h-full object-cover brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-semibold text-lg">Delivery + setup guidance</p>
                <p className="text-teal-100 text-sm md:text-base">
                  We help coordinate the steps from purchase to first soak.
                </p>
              </div>
            </div>
          </div>

          {/* CONTENT (800–1500 words across sections) */}
          <div className="mt-14 max-w-4xl mx-auto text-teal-100">
            <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Hot Tubs in Surprise, AZ — What to Know
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Buying a hot tub in Surprise is all about choosing a spa that fits Arizona living: warm weather, lots of outdoor time, and the
                kind of backyard lifestyle that makes a hot tub more than a “nice-to-have.” Whether you want a place to unwind after work,
                recover from training, or create a weekend hangout space, a well-chosen spa becomes a daily-use feature — not just something you
                use a few times a year.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Our goal is to help you make the decision with real local context — model sizing, placement and access, delivery planning, and
                the practical details that matter in the West Valley. Start by browsing our{' '}
                <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tub catalog
                </a>{' '}
                and then visit our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom page
                </a>{' '}
                for location details and in-person shopping.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why a Hot Tub Makes Sense in Surprise’s Climate
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Surprise offers extended “spa season” compared to many parts of the country. In the cooler months, hot tubs are a perfect fit
                for evenings outside — you get the relaxation and hydrotherapy benefits without dealing with freezing temps. In the warmer months,
                plenty of owners still use their spa by soaking later in the day or running a slightly lower temperature. The result is a year-round
                wellness and lifestyle tool, not a seasonal purchase.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Sun exposure and heat also influence ownership in Arizona: where you place the spa, how you plan for cover use, and how you approach
                water care all matter. If you’re considering a more active or recovery-focused setup, compare{' '}
                <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  swim spas in Surprise
                </a>{' '}
                or explore{' '}
                <a href="/surprise/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy spas
                </a>{' '}
                for cold/hot routines.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Delivery &amp; Installation in Surprise (What the Process Looks Like)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                The quickest path to ownership is typically an in-stock hot tub. If you pick a model that’s available now, delivery is commonly
                scheduled within days to a couple of weeks depending on site readiness and the delivery calendar. If you want a specific model or
                configuration, a special order is the way to go — lead times vary by manufacturer and can take several weeks.
              </p>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">In-stock</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Best for speed. Choose from what’s available now for faster delivery and a simpler timeline.
                  </p>
                </div>
                <div className="bg-black/20 border border-white/10 rounded-2xl p-5">
                  <p className="text-white font-semibold text-lg">Special order</p>
                  <p className="mt-2 text-base md:text-lg leading-relaxed">
                    Best for precision. Get the exact model and feature set you want, with lead times depending on the manufacturer.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-base md:text-lg leading-relaxed">
                Once you’ve chosen a spa, we help coordinate key steps like confirming placement, delivery access, and electrical planning. On
                delivery day, we aim for a smooth placement and straightforward startup guidance so you understand operation and first-week basics.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Electrical Coordination + Site Prep (West Valley Considerations)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                A smooth install starts with site prep and electrical readiness. Your home’s panel capacity, the run distance to the spa, and your
                placement surface all affect timing and cost. We coordinate electrical directly, so you’re not left piecing together the requirements
                on your own.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If you’re not sure what’s needed, we can help you plan it as part of your purchase process. A simple first step is reviewing our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise location page
                </a>{' '}
                and then calling to confirm availability and your preferred install timeline.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Areas We Serve from Surprise
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Our Surprise showroom serves buyers across the West Valley, and we also deliver statewide across Arizona. If you’re planning a showroom
                visit, start on our{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise location page
                </a>{' '}
                for address, hours, and directions.
              </p>

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  'Surprise',
                  'Peoria',
                  'Glendale',
                  'Goodyear',
                  'Avondale',
                  'Litchfield Park',
                  'Sun City / Sun City West',
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
                Not sure if we can deliver to you? Call{' '}
                <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                  (480) 997-9447
                </a>{' '}
                and we’ll confirm.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Popular Use Cases (Family, Recovery, Entertaining)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Many Surprise buyers want a hot tub for a specific lifestyle outcome: family time, recovery and stress relief, or hosting friends.
                Families often prioritize seating comfort and easy operation. Recovery-focused buyers care about targeted jets and consistent routines.
                Entertaining buyers tend to value open layouts that keep conversation easy and features that simplify ownership.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                If you want something that blends spa enjoyment with fitness, check out{' '}
                <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise swim spas
                </a>{' '}
                for low-impact training. If you’re building a recovery-focused setup, explore{' '}
                <a href="/surprise/contrast-therapy-spas" className="text-white underline hover:text-teal-200 transition-colors">
                  contrast therapy spas in Surprise
                </a>{' '}
                for cold/hot routines.
              </p>
            </section>

            <section className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Why Choose D’s Outdoor Living (Surprise Showroom)
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Choosing a spa is easier when you can compare models in person and talk through the real-world details: how it fits your space,
                what features you’ll actually use, and what timeline makes the most sense for in-stock vs special order. Our team helps you plan
                the entire process — from selection to delivery scheduling and electrical coordination.
              </p>
              <p className="mt-4 text-base md:text-lg leading-relaxed">
                Start with our{' '}
                <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                  hot tub models
                </a>{' '}
                and then visit the{' '}
                <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">
                  Surprise showroom page
                </a>{' '}
                for directions and details. If you’re ready to move quickly, call to confirm what’s currently in stock.
              </p>
            </section>
          </div>

          {/* MINI FAQ */}
          <div className="mt-14 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center">
              Surprise Hot Tubs — Quick Answers
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
              Ready to Choose Your Surprise Hot Tub?
            </h2>
            <p className="mt-3 text-teal-100 text-base md:text-lg leading-relaxed">
              Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              to check in-stock availability, request pricing, and get a delivery timeline. You can also browse{' '}
              <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                all hot tubs
              </a>{' '}
              or compare{' '}
              <a href="/surprise/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                swim spas
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
                href="/hot-tubs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2 text-white hover:bg-white/10 transition-colors"
              >
                Request pricing / browse models
              </a>
            </div>
          </div>

          {/* SIMPLE DIRECTIONS CTA (keeps parity with your original page) */}
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

export default SurpriseHotTubsPage;
