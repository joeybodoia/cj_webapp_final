import React from 'react';
import { Link } from 'react-router';

const reviews = [
  {
    quote:
      "Chris and his team made buying our hot tub completely stress-free. No pushy salespeople, great price, and the spa is perfect for our backyard. Couldn't be happier!",
    author: 'Sarah M.',
    location: 'Surprise, AZ',
  },
  {
    quote:
      "We visited three other spa dealers before finding D's. The difference was night and day - honest advice, better selection, and pricing that beat everyone else. Highly recommend.",
    author: 'Mike T.',
    location: 'North Phoenix, AZ',
  },
  {
    quote:
      "I love my swim spa! CJ helped me find the perfect size for our space. The after-sale service has been excellent. These guys truly care about their customers.",
    author: 'Jennifer K.',
    location: 'Scottsdale, AZ',
  },
];

const ReviewsAndCtaSection = () => {
  return (
    <>
      <section className="bg-[#0a3d35] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-400">Customer Reviews</p>
            <h2 className="mt-4 text-5xl font-bold leading-tight text-white md:text-6xl">What Arizona Homeowners Say</h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-12 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.author}
                className="rounded-lg border border-teal-300/25 bg-[#176f64] p-6 shadow-[0_10px_35px_rgba(0,0,0,0.2)]"
              >
                <p className="text-3xl tracking-tight text-amber-300">★★★★★</p>
                <p className="mt-4 text-lg leading-relaxed text-teal-50/90">&quot;{review.quote}&quot;</p>
                <p className="mt-5 text-base font-semibold text-teal-300">
                  {review.author}
                  <span className="font-medium text-teal-100/60"> - {review.location}</span>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-gradient-to-b from-[#176f64] to-[#0e5b53] px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Ready to <span className="text-teal-300">Save Big</span> on Your Dream Spa?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg font-medium text-teal-100/70 md:text-2xl">
            Get your free, no-obligation quote today. Zero pressure. Just great service.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/get-a-quote"
              className="inline-flex min-w-60 items-center justify-center rounded-md bg-teal-400 px-8 py-4 text-xl font-semibold text-white transition hover:bg-teal-300"
            >
              Get a Free Quote &rarr;
            </Link>
            <a
              href="tel:(480) 997-9447"
              className="inline-flex min-w-60 items-center justify-center rounded-md border border-white/35 bg-transparent px-8 py-4 text-xl font-semibold text-white transition hover:bg-white/10"
            >
              Call (480) 997-9447
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReviewsAndCtaSection;
