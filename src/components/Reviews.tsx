"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const reviews = [
  {
    name: "Sarah M.",
    context: "Corporate Event",
    text: "Birdiez2Go was the highlight of our company retreat. Everyone from beginners to avid golfers had an amazing time. The setup was seamless and the team was incredibly professional.",
  },
  {
    name: "James T.",
    context: "Birthday Party",
    text: "We hired Birdiez2Go for my 40th birthday and it was a huge hit! The simulator was top-notch and the competitions kept everyone entertained all night.",
  },
  {
    name: "Michelle R.",
    context: "Wedding Reception",
    text: "Such a unique addition to our reception. Our guests couldn't stop talking about it. The Birdiez2Go team handled everything perfectly — we didn't have to worry about a thing.",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-dark-grey uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest mb-4">
            What Our Clients Say
          </h2>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="w-7 h-7 text-forest"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              variants={fadeInUp}
              className="bg-sand border border-dark-grey/10 rounded-2xl p-6 sm:p-8 flex flex-col"
            >
              {/* Quote icon */}
              <svg
                className="w-10 h-10 text-forest/30 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609L9.978 5.151c-2.432.917-3.995 3.638-3.995 5.849H10v10H0z" />
              </svg>

              <p className="text-dark-grey text-base leading-relaxed mb-6 flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              <div>
                <p className="text-forest font-semibold">{review.name}</p>
                <p className="text-dark-grey text-sm">{review.context}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
