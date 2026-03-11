import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(480) 997-9447',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Sales: CJ@ds-outdoorliving.com',
      secondary: 'Service: service@ds-outdoorliving.com',
    },
  ];

  const locations = [
    {
      name: 'North Phoenix',
      line1: '3106 W Blue Eagle Lane',
      line2: 'Phoenix AZ 85086',
      note: 'By appointment only, call to arrange.',
      phone: '(480) 997-9447',
    },
    {
      name: 'Surprise',
      line1: '11304 North Dysart Road',
      line2: 'Surprise AZ 85379 Suite 104',
      phone: '(480) 997-9447',
    },
    {
      name: 'Mesa',
      line1: '10550 E Baseline Rd',
      line2: 'Mesa AZ 85209 Booth #C1-19',
      phone: '(480) 997-9781',
    },
  ];

  return (
    <section id="contact" className="bg-[#0a3d35] px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Contact Us</p>
          <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">Let&apos;s Talk Spas</h2>
          <p className="mx-auto mt-5 max-w-4xl text-lg font-medium text-teal-100/65 md:text-2xl">
            Call, email, or visit one of our Arizona showrooms. We&apos;re here to help you find the right fit.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-5 md:mt-14 md:grid-cols-2">
          {contactMethods.map((method) => (
            <article
              key={method.title}
              className="rounded-lg border border-teal-300/25 bg-[#176f64] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.2)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-teal-300/50 text-teal-300">
                  <method.icon size={20} />
                </span>
                <h3 className="text-2xl font-semibold text-white md:text-3xl">{method.title}</h3>
              </div>
              <p className="text-lg text-teal-50/90 md:text-xl">{method.content}</p>
              {method.secondary ? <p className="mt-2 text-lg text-teal-50/90 md:text-xl">{method.secondary}</p> : null}
            </article>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-6xl border-t border-white/15 pt-8 md:mt-10 md:pt-10">
          <h3 className="text-center text-3xl font-semibold text-white md:text-4xl">Our Locations</h3>

          <div className="mt-6 grid grid-cols-1 gap-5 md:mt-8 md:grid-cols-3">
            {locations.map((location) => (
              <article
                key={location.name}
                className="rounded-lg border border-teal-300/25 bg-[#176f64] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.2)]"
              >
                <div className="mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-teal-300" />
                  <h4 className="text-2xl font-semibold text-white">{location.name}</h4>
                </div>

                <p className="text-lg text-teal-50/90">{location.line1}</p>
                <p className="mt-1 text-lg text-teal-50/90">{location.line2}</p>
                {location.note ? <p className="mt-3 text-sm font-medium uppercase tracking-wide text-teal-200/80">{location.note}</p> : null}

                <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-3">
                  <Phone size={16} className="text-teal-300" />
                  <p className="text-lg text-teal-50/90">{location.phone}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center md:mt-12">
          <a
            href="tel:(480) 997-9447"
            className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-8 py-4 text-xl font-semibold text-white transition hover:bg-white/10"
          >
            Call (480) 997-9447
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
