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
      "1 on-site attendant",
      "Access to 40+ courses",
      "Competitions such as closest-to-the-pin and long-drive",
      "Up to 25 rotating players",
      "Additional TV display for simulator gameplay, leaderboard tracking, or live sports viewing",
      "Additional hours available upon request",
    ],
    featured: false,
  },
  {
    name: "Birdie Package",
    tagline: "Best value for events & corporate groups",
    features: [
      "4 hours of simulator time",
      "Everything in the Par package",
      "Tournament mode + leaderboard",
      "Extended play time for larger groups",
      "1-2 on-site attendants",
    ],
    featured: true,
  },
  {
    name: "Eagle Package",
    tagline: "Premium experience for high-end events",
    features: [
      "5 hours of simulator time",
      "Everything in the Birdie package",
      "Priority support & customization",
      "2+ on-site attendants",
    ],
    featured: false,
  },
];

export default function Services({
  onCtaClick,
}: {
  onCtaClick: (source: string) => void;
}) {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-whisper">
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
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(61,148,0,0.15)] ${
                pkg.featured
                  ? "border-whisper/20 bg-forest scale-100 md:scale-105"
                  : "border-whisper/10 bg-forest"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-forest text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full border border-forest">
                  Most Popular
                </div>
              )}

              <h3 className="font-serif text-2xl font-bold text-whisper mb-2">
                {pkg.name}
              </h3>
              <p className="text-gold/80 text-sm mb-6 italic">{pkg.tagline}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-whisper mt-0.5 shrink-0"
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
                    <span className="text-sand/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => onCtaClick(pkg.name)}
                className={`w-full py-3 rounded-full font-semibold uppercase tracking-wider text-sm transition-all duration-300 ${
                  pkg.featured
                    ? "bg-white border border-forest text-forest hover:scale-105"
                    : "bg-white/10 border border-forest/50 text-whisper hover:bg-white hover:text-forest"
                }`}
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
