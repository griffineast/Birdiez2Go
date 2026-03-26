"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_PATH } from "@/lib/prefix";
import { slideInLeft, slideInRight } from "@/lib/animations";

const whiteGloveBullets = [
  "Arrive 60 minutes early, fully self-sufficient",
  "Calibrate system to your space and lighting",
  "Coach every guest through their first swing",
  "Manage competitions including long drive, closest to the pin, and tournament style",
  "Break down and leave the space as we found it",
];

const equipment = [
  {
    label: "Projector",
    detail:
      "Full HD clarity with high lumens of bright, true-to-life color — great for outdoor and indoor use",
  },
  {
    label: "Launch Monitor",
    detail: "Tour-level accuracy",
  },
  {
    label: "Screen",
    detail:
      "High-impact stretch screen with commercial-grade inflatable hitting bay",
  },
  {
    label: "Turf",
    detail:
      "5x5 hitting mat with true-turf feel — cushioned enough for comfort, firm enough for all swing types",
  },
  {
    label: "Software",
    detail: "40+ premium courses",
    courses:
      "Pebble Beach, St. Andrews, Spyglass Hill, Royal Portrush, PGA National, Bethpage Black, Sebonack",
  },
];

function WhiteGloveContent() {
  return (
    <>
      <h3 className="font-serif text-2xl font-bold text-whisper mb-4">
        What <span className="text-gold">White-Glove</span> Means
      </h3>
      <ul className="space-y-3 mb-8">
        {whiteGloveBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3">
            <svg
              className="w-5 h-5 text-bright mt-0.5 shrink-0"
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
            <span className="text-sand/70 text-sm">{bullet}</span>
          </li>
        ))}
      </ul>

      <h3 className="font-serif text-2xl font-bold text-whisper mb-4">
        Fully Equipped{" "}
        <span className="text-gold">Professional Setup</span>
      </h3>
      <div className="space-y-3">
        {equipment.map((item) => (
          <div key={item.label}>
            <p className="text-sand/70 text-sm">
              <span className="text-whisper font-semibold">
                {item.label}
              </span>{" "}
              — {item.detail}
            </p>
            {item.courses && (
              <p className="text-sand/50 text-xs mt-1 ml-0 italic">
                {item.courses}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default function About() {
  const [showDetail, setShowDetail] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="about" className="py-20 sm:py-32 bg-fairway/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left side — desktop: slides between intro and detail */}
          <div className="relative overflow-hidden">
            {/* Desktop slider */}
            <div className="hidden md:block">
              <AnimatePresence mode="wait" custom={showDetail ? 1 : -1}>
                {!showDetail ? (
                  <motion.div
                    key="intro"
                    custom={-1}
                    variants={slideVariants}
                    initial="center"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <motion.div variants={slideInLeft}>
                      <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-medium">
                        About Us
                      </p>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-whisper mb-6 leading-tight">
                        Golf Anytime,
                        <br />
                        <span className="text-gold">Anywhere.</span>
                      </h2>
                      <p className="text-sand/70 text-lg leading-relaxed mb-6">
                        Our team arrives 60 minutes prior to your event fully
                        equipped with everything needed, including screen,
                        projector, premium simulator technology, turf, and clubs.
                      </p>
                      <p className="text-sand/70 text-lg leading-relaxed mb-6">
                        Throughout the event, our staff supports every guest,
                        guiding them through the technology, managing scoring and
                        competitions, and ensuring a seamless, engaging experience
                        from first swing to final leaderboard.
                      </p>
                      <p className="text-sand/70 text-lg leading-relaxed">
                        At the end of the event, we complete breakdown within 60
                        minutes and leave your space exactly as we found it.
                      </p>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="detail"
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <WhiteGloveContent />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile static text */}
            <div className="md:hidden">
              <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-medium">
                About Us
              </p>
              <h2 className="font-serif text-3xl font-bold text-whisper mb-6 leading-tight">
                Golf Anytime,
                <br />
                <span className="text-gold">Anywhere.</span>
              </h2>
              <p className="text-sand/70 text-lg leading-relaxed mb-6">
                Our team arrives 60 minutes prior to your event fully
                equipped with everything needed, including screen,
                projector, premium simulator technology, turf, and clubs.
              </p>
              <p className="text-sand/70 text-lg leading-relaxed mb-6">
                Throughout the event, our staff supports every guest,
                guiding them through the technology, managing scoring and
                competitions, and ensuring a seamless, engaging experience
                from first swing to final leaderboard.
              </p>
              <p className="text-sand/70 text-lg leading-relaxed">
                At the end of the event, we complete breakdown within 60
                minutes and leave your space exactly as we found it.
              </p>
            </div>
          </div>

          {/* Right side — image + button */}
          <motion.div variants={slideInRight} className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-forest/50 border border-whisper/10">
              <Image
                src={`${BASE_PATH}/images/birdiez2go-setup-mock.png`}
                alt="Birdiez2Go mobile golf simulator setup"
                fill
                className="object-cover"
              />
            </div>

            {/* Desktop: slide button */}
            <button
              onClick={() => setShowDetail(!showDetail)}
              className="hidden md:block bg-gold/10 border border-gold/30 text-gold font-semibold px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gold hover:text-forest transition-all duration-300"
            >
              {showDetail
                ? "\u2190 Back to About"
                : "Learn About Our White-Glove Service \u2192"}
            </button>

            {/* Mobile: expand/collapse button */}
            <button
              onClick={() => setMobileExpanded(!mobileExpanded)}
              className="md:hidden bg-gold/10 border border-gold/30 text-gold font-semibold px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-gold hover:text-forest transition-all duration-300"
            >
              {mobileExpanded
                ? "Collapse"
                : "Learn About Our White-Glove Service"}
            </button>

            {/* Mobile: expandable content */}
            <AnimatePresence>
              {mobileExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden"
                >
                  <div className="pt-4">
                    <WhiteGloveContent />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
