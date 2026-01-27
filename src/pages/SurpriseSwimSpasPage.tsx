import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SurpriseSwimSpasPage = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dsoutdoorliving.com/surprise/swim-spas#service",
    "name": "Swim Spas in Surprise, AZ",
    "serviceType": "Swim Spa Sales",
    "areaServed": {
      "@type": "City",
      "name": "Surprise",
      "addressRegion": "AZ"
    },
    "provider": {
      "@id": "https://dsoutdoorliving.com/surprise#location"
    },
    "availableAtOrFrom": {
      "@id": "https://dsoutdoorliving.com/surprise#location"
    },
    "url": "https://dsoutdoorliving.com/surprise/swim-spas"
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
            Surprise Showroom Swim Spas
          </h1>
          <p className="mt-4 text-center text-teal-100 text-lg md:text-xl lg:text-2xl">
            Visit our <a href="/surprise" className="text-white underline hover:text-teal-200 transition-colors">Surprise showroom</a> to see swim spas in person
          </p>
          <section className="mt-10 text-center text-teal-100">
            <p className="text-base md:text-lg leading-relaxed">
              See swim spas in person at <strong>11304 North Dysart Road, Surprise, AZ 85379 Suite 104</strong>
              <br />
              Call{' '}
              <a href="tel:+14809979447" className="text-white underline hover:text-teal-200 transition-colors">
                (480) 997-9447
              </a>{' '}
              for availability and delivery timelines
            </p>
            <p className="mt-4 text-base md:text-lg">
              View our entire selection here{' '}
              <a href="/swim-spas" className="text-white underline hover:text-teal-200 transition-colors">
                View all swim spas
              </a>
              .
            </p>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=11304+North+Dysart+Road,+Surprise,+AZ+85379+Suite+104"
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

export default SurpriseSwimSpasPage;
