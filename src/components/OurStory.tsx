import React from 'react';
import { X } from 'lucide-react';

type OurStoryProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OurStory = ({ isOpen, onClose }: OurStoryProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-8" onClick={onClose}>
      <div
        className="w-full max-w-4xl rounded-2xl border border-teal-500/35 bg-gradient-to-b from-[#176f64] to-[#0f5b53] text-white shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-white/15 px-6 py-5 md:px-8 md:py-6">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Why D&apos;s Outdoor Living</p>
            <h2 className="mt-2 text-4xl font-bold leading-tight text-white md:text-5xl">Our Story</h2>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 transition-colors hover:text-white"
            aria-label="Close our story modal"
          >
            <X size={22} />
          </button>
        </div>

        <div className="max-h-[78vh] overflow-y-auto px-6 py-6 md:px-8 md:py-8">
          <div className="space-y-5 text-lg leading-relaxed text-teal-50/90 md:text-2xl">
            <p>
              I started in the pool and spa industry in 1987, cleaning pools as a high school student. After years of
              working in the business and growing my family, my family and I bought one of the largest pool and spa
              retail businesses in Washington, which I successfully ran for over 30 years. When my children fell in
              love with Arizona after college, I then sold the business in Washington and moved to Arizona to be
              closer to my family.
            </p>

            <p>
              Along with my decades of experience, myself, along with my kids, launched D&apos;s Outdoor Living in
              Arizona. The new company offers a fresh approach to retailing spas by cutting overhead costs, allowing
              them to offer high-quality products at better prices while maintaining top-notch customer service. We
              have partnered with the best manufacturers and designed products that can withstand the Arizona heat,
              making sure our customers get the best pricing and long-term service.
            </p>

            <p>
              D&apos;s Outdoor Living stands out by providing direct family involvement with no high-pressure
              salespeople, and a motto of &quot;Drive a little, Save a Lot.&quot; We focus on building long-term
              customer relationships and rely on referrals for business, aiming to offer personalized service that
              reflects old-fashioned business values.
            </p>

            <div className="mt-6 border-t border-white/15 pt-5 text-center">
              <p className="font-semibold text-teal-100/85">Sincerely,</p>
              <p className="mt-2 text-2xl font-bold text-white md:text-3xl">Chris, CJ, &amp; Levi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
