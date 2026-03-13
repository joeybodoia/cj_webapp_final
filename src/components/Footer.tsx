import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const openOurStoryModal = () => {
    window.dispatchEvent(new Event('open-our-story'));
  };

  const scrollToContact = () => {
    if (location.pathname === '/') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate({ pathname: '/', hash: '#contact' });
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#0a3d35] px-4 py-14 text-white md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">D&apos;s Outdoor Living</p>
            <h3 className="mt-3 text-4xl font-bold leading-tight text-white">Arizona Spa Experts</h3>
            <p className="mt-4 text-lg leading-relaxed text-teal-100/80">
              Premium hot tubs, swim spas, and contrast therapy spas serving Phoenix, Surprise, and Mesa.
            </p>
            <div className="mt-5 space-y-3 text-lg text-teal-100/90">
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-teal-300" />
                <a href="tel:+14809979447" className="hover:text-white transition-colors">(480) 997-9447</a>
              </p>
              <p className="flex items-center gap-2 break-all">
                <Mail size={16} className="text-teal-300" />
                <a href="mailto:CJ@ds-outdoorliving.com" className="hover:text-white transition-colors">CJ@ds-outdoorliving.com</a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-white">Our Locations</h4>
            <div className="mt-4 space-y-4 text-teal-100/85">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-teal-300" />
                <div>
                  <p className="font-semibold text-white">North Phoenix</p>
                  <p>3106 W Blue Eagle Lane</p>
                  <p>Phoenix, AZ 85086</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-teal-300" />
                <div>
                  <p className="font-semibold text-white">Surprise</p>
                  <p>11304 North Dysart Road, Suite 104</p>
                  <p>Surprise, AZ 85379</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 text-teal-300" />
                <div>
                  <p className="font-semibold text-white">Mesa</p>
                  <p>10550 E Baseline Rd, Booth #C1-19</p>
                  <p>Mesa, AZ 85209</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-3 text-lg text-teal-100/85">
              <li>
                <a href="/hot-tubs" className="transition-colors hover:text-white">
                  Hot Tubs
                </a>
              </li>
              <li>
                <a href="/swim-spas" className="transition-colors hover:text-white">
                  Swim Spas
                </a>
              </li>
              <li>
                <a href="/contrast-therapy-spas" className="transition-colors hover:text-white">
                  Contrast Therapy Spas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-2xl font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-lg text-teal-100/85">
              <li>
                <button onClick={openOurStoryModal} className="text-left transition-colors hover:text-white">
                  Our Story
                </button>
              </li>
              <li>
                <button onClick={scrollToContact} className="text-left transition-colors hover:text-white">
                  Contact
                </button>
              </li>
              <li>
                <a href="/get-a-quote" className="transition-colors hover:text-white">
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-teal-100/70 md:text-base">
          © 2026 D&apos;s Outdoor Living. All rights reserved. Serving Phoenix, Surprise, Mesa, and surrounding Arizona areas.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
