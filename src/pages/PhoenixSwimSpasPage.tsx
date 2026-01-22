import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PhoenixSwimSpasPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dsoutdoorliving.com/phoenix/swim-spas#service",
    "name": "Swim Spas in Phoenix, AZ",
    "serviceType": "Swim Spa Sales",
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
    "url": "https://dsoutdoorliving.com/phoenix/swim-spas"
  };

  return (
    <div className="min-h-screen bg-custom-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <div className="pt-24 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center">
            new page
          </h1>
          <p className="mt-4 text-center text-teal-100">
            Visit our <a href="/phoenix" className="text-white underline hover:text-teal-200 transition-colors">Phoenix showroom</a> to see swim spas in person.
          </p>
          <section className="mt-10 text-center text-teal-100">
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Visit Our Phoenix Swim Spa Showroom
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              See swim spas in person at <strong>3106 W Blue Eagle Lane, Phoenix, AZ 85086</strong>. Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              for availability and delivery timelines.
            </p>
            <p className="mt-4 text-base md:text-lg">
              View our entire selection here{' '}
              <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                View all swim spas
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

export default PhoenixSwimSpasPage;
