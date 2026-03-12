import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router';
import { Check, Star } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabase';

const CATEGORY_TO_TYPE: Record<string, string> = {
  'hot-tubs': 'Spa',
  'swim-spas': 'Swim Spa',
  'contrast-therapy-spas': 'Contrast Therapy Spa',
};

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestedIn: string;
  productName: string;
  preferredLocation: string;
  message: string;
};

const GetAQuotePage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialProduct = searchParams.get('product') || '';

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interestedIn: initialCategory,
    productName: initialProduct,
    preferredLocation: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Product search
  const [productOptions, setProductOptions] = useState<string[]>([]);
  const [productLoading, setProductLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fetch products when category changes
  useEffect(() => {
    if (!form.interestedIn) {
      setProductOptions([]);
      return;
    }
    const productType = CATEGORY_TO_TYPE[form.interestedIn];
    if (!productType) return;

    setProductLoading(true);
    supabase
      .from('inventory')
      .select('product_name')
      .eq('product_type', productType)
      .then(({ data, error }) => {
        if (!error && data) {
          setProductOptions(data.map(d => d.product_name));
        }
        setProductLoading(false);
      });
  }, [form.interestedIn]);

  // Close dropdown on outside click
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    // When the user manually changes the category, clear the product selection
    if (e.target.name === 'interestedIn') {
      setForm(prev => ({ ...prev, interestedIn: e.target.value, productName: '' }));
    } else {
      setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  const filteredProducts = productOptions.filter(name =>
    name.toLowerCase().includes(form.productName.toLowerCase())
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('success');
      setForm({ firstName: '', lastName: '', email: '', phone: '', interestedIn: '', productName: '', preferredLocation: '', message: '' });
    } catch {
      setErrorMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

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
              {status === 'success' ? (
                <div className="success-state">
                  <div className="success-icon">
                    <Check size={32} strokeWidth={3} />
                  </div>
                  <h2>You&apos;re all set!</h2>
                  <p>
                    Thanks for reaching out. Our team will contact you within <strong>1 business hour</strong> to
                    discuss your options. Check your inbox for a confirmation email.
                  </p>
                  <button className="btn-submit" onClick={() => setStatus('idle')}>
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2>Get Your Free Quote</h2>
                  <p>Fill out the form and our team will reach out within 1 business hour to discuss your options.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="first-name">First Name*</label>
                        <input
                          id="first-name"
                          name="firstName"
                          type="text"
                          placeholder="Chris"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="last-name">Last Name*</label>
                        <input
                          id="last-name"
                          name="lastName"
                          type="text"
                          placeholder="Johnson"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address*</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@email.com"
                        required
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number*</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="(480) 000-0000"
                        required
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="interested-in">Product Category I&apos;m Interested In</label>
                      <select
                        id="interested-in"
                        name="interestedIn"
                        value={form.interestedIn}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select a category...
                        </option>
                        <option value="hot-tubs">Hot Tubs</option>
                        <option value="swim-spas">Swim Spas</option>
                        <option value="contrast-therapy-spas">Contrast Therapy Spas</option>
                      </select>
                    </div>

                    {form.interestedIn && (
                      <div className="form-group" ref={dropdownRef}>
                        <label htmlFor="product-name">Product I&apos;m Interested In (optional)</label>
                        <div style={{ position: 'relative' }}>
                          <input
                            id="product-name"
                            name="productName"
                            type="text"
                            placeholder={productLoading ? 'Loading products...' : 'Search by product name...'}
                            value={form.productName}
                            onChange={handleChange}
                            onFocus={() => setDropdownOpen(true)}
                            autoComplete="off"
                            disabled={productLoading}
                          />
                          {dropdownOpen && filteredProducts.length > 0 && (
                            <ul style={{
                              position: 'absolute',
                              top: '100%',
                              left: 0,
                              right: 0,
                              zIndex: 50,
                              maxHeight: '200px',
                              overflowY: 'auto',
                              margin: '4px 0 0',
                              padding: 0,
                              listStyle: 'none',
                              background: '#0f5b53',
                              border: '1px solid rgba(255,255,255,0.15)',
                              borderRadius: '8px',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
                            }}>
                              {filteredProducts.map(name => (
                                <li
                                  key={name}
                                  onMouseDown={() => {
                                    setForm(prev => ({ ...prev, productName: name }));
                                    setDropdownOpen(false);
                                  }}
                                  style={{
                                    padding: '10px 14px',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    color: 'rgba(255,255,255,0.9)',
                                    borderBottom: '1px solid rgba(255,255,255,0.07)'
                                  }}
                                  onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                                >
                                  {name}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="form-group">
                      <label htmlFor="preferred-location">Preferred Location</label>
                      <select
                        id="preferred-location"
                        name="preferredLocation"
                        value={form.preferredLocation}
                        onChange={handleChange}
                      >
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
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Tell us a little about what you're looking for..."
                        value={form.message}
                        onChange={handleChange}
                      />
                    </div>

                    {status === 'error' && (
                      <p className="form-error">{errorMessage}</p>
                    )}

                    <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
                      {status === 'submitting' ? 'Sending...' : 'Get My Free Quote →'}
                    </button>

                    <p className="form-reassure">
                      🔒 <strong>100% Private</strong> - We never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GetAQuotePage;
