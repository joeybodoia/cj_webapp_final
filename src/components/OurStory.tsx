import React from 'react';

const OurStory = () => {
  return (
    <section id="our-story" className="py-12 md:py-20 bg-custom-dark px-4 md:px-6">
      <div className="bg-gradient-to-br from-teal-800 via-teal-700 to-teal-700/90 rounded-3xl text-white shadow-[0_18px_50px_rgba(8,84,78,0.35)] border border-white/10">
        <div className="container mx-auto px-4 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 tracking-wide">Our Story</h2>
          
          <div className="space-y-4 md:space-y-6 text-base md:text-lg leading-relaxed text-teal-50/90">
            <p>
              I started in the pool and spa industry in 1987, cleaning pools as a high school student. After years of working in the business and growing my family, my family and I bought one of the largest pool and spa retail businesses in Washington, which I successfully ran for over 30 years. When my children fell in love with Arizona after college, I then sold the business in Washington and moved to Arizona to be closer to my family.
            </p>
            
            <p>
              Along with my decades of experience, myself, along with my kids, launched D's Outdoor Living in Arizona. The new company offers a fresh approach to retailing spas by cutting overhead costs, allowing them to offer high-quality products at better prices while maintaining top-notch customer service. We have partnered with the best manufacturers and designed products that can withstand the Arizona heat, making sure our customers get the best pricing and long-term service.
            </p>
            
            <p>
              D's Outdoor Living stands out by providing direct family involvement with no high-pressure salespeople, and a motto of "Drive a little, Save a Lot." We focus on building long-term customer relationships and rely on referrals for business, aiming to offer personalized service that reflects old-fashioned business values.
            </p>
            
            <div className="text-center mt-4 md:mt-6">
              <p className="font-semibold">Sincerely,</p>
              <p className="text-lg md:text-xl font-bold mt-2">Chris, CJ, & Levi</p>
            </div>
          </div>
        </div>
          </div>
      </div>
    </section>
  );
};

export default OurStory;
