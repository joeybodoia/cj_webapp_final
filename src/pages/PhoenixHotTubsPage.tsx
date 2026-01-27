import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixHotTubsPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dsoutdoorliving.com/phoenix/hot-tubs#service",
    "name": "Hot Tubs in Phoenix, AZ",
    "serviceType": "Hot Tub Sales",
    "areaServed": {
      "@type": "City",
      "name": "Phoenix",
      "addressRegion": "AZ"
    },
    "provider": {
      "@id": "https://dsoutdoorliving.com/phoenix#location"
    },
    "availableAtOrFrom": {
      "@id": "https://dsoutdoorliving.com/phoenix#location"
    },
    "url": "https://dsoutdoorliving.com/phoenix/hot-tubs"
  };

  return (
    <div className="min-h-screen bg-custom-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <div className="pt-32 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center">
            Phoenix Showroom Hot Tubs
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Visit our <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">Phoenix showroom</a> to see hot tubs in person
          </p>
          <section className="mt-10 text-center text-teal-100">
            <p className="text-base md:text-lg leading-relaxed">
              See hot tubs in person at <strong>3106 W Blue Eagle Lane, Phoenix, AZ 85086</strong>
              <br />
              Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              for availability and delivery timelines
            </p>
            <p className="mt-4 text-base md:text-lg">
              View our entire selection here{' '}
              <a href="/hot-tubs" className="text-white underline hover:text-teal-200 transition-colors">
                View all hot tubs
              </a>
              .
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=3106+W+Blue+Eagle+Lane,+Phoenix,+AZ+85086"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-teal-200/50 px-5 py-2 text-white hover:bg-teal-700/40 transition-colors"
            >
              Get directions
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhoenixHotTubsPage;
