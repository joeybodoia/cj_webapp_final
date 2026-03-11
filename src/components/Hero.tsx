import React from 'react';
import { Check, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="home-hero-page">
      <div className="hero">
        <div className="hero-bg" />

        <div className="hero-inner">
          <div className="hero-text">
            <span className="hero-badge">
              <Star size={14} className="fill-amber-300 text-amber-300" />
              Arizona&apos;s Trusted Spa Dealers
            </span>

            <h1>
              Welcome to <span>D&apos;s Outdoor Living</span>
            </h1>

            <p className="home-tagline">Drive a Little, Save a Lot</p>

            <p className="hero-sub">
              No high-pressure salespeople. No inflated prices. Just family-owned expertise and the best spas built
              for Arizona&apos;s heat at factory-direct savings.
            </p>

            <div className="trust-row">
              {['No Pressure Sales', 'BBB Accredited', 'Arizona Heat-Ready', '35+ Yrs Experience'].map((item) => (
                <div key={item} className="trust-item">
                  <span className="check">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  {item}
                </div>
              ))}
            </div>

            <div className="hero-stats">
              <div>
                <p className="stat-num">35+</p>
                <p className="stat-label">Years in Business</p>
              </div>
              <div>
                <p className="stat-num">1,000+</p>
                <p className="stat-label">Hot Tubs Sold</p>
              </div>
              <div>
                <p className="stat-num">
                  <Star size={30} className="fill-amber-300 text-amber-300" />
                  5.0
                </p>
                <p className="stat-label">Star Rating</p>
              </div>
            </div>
          </div>

          <div className="home-logo-card">
            <div className="home-logo-wrap">
              <img
                src="https://i.imgur.com/dVNqGLc.png"
                alt="D's Outdoor Living Logo"
                loading="eager"
                decoding="async"
                fetchpriority="high"
                className="home-logo"
              />
            </div>
            <a
              href="https://www.bbb.org/us/az/surprise/profile/hot-tub-supplies/ds-outdoor-living-llc-1126-1000155491/#sealclick"
              target="_blank"
              rel="nofollow"
              className="home-bbb-link"
            >
              <img
                src="https://seal-central-northern-western-arizona.bbb.org/seals/black-seal-120-61-bbb-1000155491.png"
                style={{ border: 0 }}
                alt="D's Outdoor Living LLC BBB Business Review"
                className="home-bbb"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
