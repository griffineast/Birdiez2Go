"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const packages = [
  {
    name: "Par Package",
    tagline: "Perfect for private parties & smaller gatherings",
    features: [
      "3 hours of simulator time",
      "Full setup + breakdown",
      "1x on-site attendant",
      "Access to 40+ courses & games",
      "Closest-to-the-pin and long-drive competitions",
      "Up to ~25 rotating players",
    ],
    featured: false,
  },
  {
    name: "Birdie Package",
    tagline: "Best value for events & corporate groups",
    features: [
      "4 hours of simulator time",
      "Everything in Par package",
      "Tournament mode + leaderboard",
      "Extended play time for larger groups",
      "1x-2x on-site attendants",
    ],
    featured: true,
  },
  {
    name: "Eagle Package",
    tagline: "Premium experience for high-end events",
    features: [
      "5 hours of simulator time",
      "Everything in Birdie package",
      "Priority support & customization",
      "2x+ on-site attendants",
    ],
    featured: false,
  },
];

export default function Services({
  onCtaClick,
}: {
  onCtaClick: () => void;
}) {
  return (
    <section id="services" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-dark-grey uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            Choose Your Experience
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(61,148,0,0.15)] border-forest/20 bg-sand ${
                pkg.featured ? "scale-100 md:scale-105" : ""
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-forest text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full border border-forest">
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-forest mb-2">
                {pkg.name}
              </h3>
              <p className="text-dark-grey text-sm mb-6 italic">{pkg.tagline}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-forest mt-0.5 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-dark-grey text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onCtaClick}
                className="w-full py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 bg-white border border-forest text-forest hover:scale-105"
              >
                Get a Quote
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
