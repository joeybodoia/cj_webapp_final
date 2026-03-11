import React from 'react';
import { Check, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GetAQuotePage = () => {
  return (
    <div className="quote-page">
      <Header />

      <main className="quote-main">
        <section className="hero">
          <div className="hero-bg" />

          <div className="hero-inner">
            <div className="hero-text">
              <span className="hero-badge">
                <Star size={14} className="fill-amber-300 text-amber-300" />
                Arizona&apos;s Trusted Spa Dealers
              </span>

              <h1>
                Premium Spas &amp; <span>Hot Tubs</span> at Prices You&apos;ll Love
              </h1>

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

            <div className="form-card">
              <h2>Get Your Free Quote</h2>
              <p>Fill out the form and our team will reach out within 1 business hour to discuss your options.</p>

              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="first-name">First Name*</label>
                    <input id="first-name" name="firstName" type="text" placeholder="Chris" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="last-name">Last Name*</label>
                    <input id="last-name" name="lastName" type="text" placeholder="Johnson" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input id="email" name="email" type="email" placeholder="you@email.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number*</label>
                  <input id="phone" name="phone" type="tel" placeholder="(480) 000-0000" required />
                </div>

                <div className="form-group">
                  <label htmlFor="interested-in">I&apos;m Interested In</label>
                  <select id="interested-in" name="interestedIn" defaultValue="">
                    <option value="" disabled>
                      Select a product...
                    </option>
                    <option value="hot-tubs">Hot Tubs</option>
                    <option value="swim-spas">Swim Spas</option>
                    <option value="contrast-therapy-spas">Contrast Therapy Spas</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="preferred-location">Preferred Location</label>
                  <select id="preferred-location" name="preferredLocation" defaultValue="">
                    <option value="" disabled>
                      Select nearest showroom...
                    </option>
                    <option value="phoenix">Phoenix</option>
                    <option value="mesa">Mesa</option>
                    <option value="surprise">Surprise</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message (optional)</label>
                  <textarea id="message" name="message" placeholder="Tell us a little about what you're looking for..." />
                </div>

                <button type="submit" className="btn-submit">
                  Get My Free Quote &rarr;
                </button>

                <p className="form-reassure">
                  🔒 <strong>100% Private</strong> - We never share your information.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetAQuotePage;
