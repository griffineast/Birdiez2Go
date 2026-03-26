"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, fadeInUp } from "@/lib/animations";

const taglines = [
  "Elevate your event, one swing at a time.",
  "Premium simulator technology, white-glove service, zero effort from you.",
];

export default function Hero({ onCtaClick }: { onCtaClick: () => void }) {
  const [taglineIndex, setTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient overlay — replace with image/video when assets ready */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-fairway/40 to-background z-0" />

      {/* Placeholder for background image/video */}
      {/* <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-bg.mp4"
      /> */}
      {/* <div className="absolute inset-0 bg-forest/70 z-[1]" /> */}

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-gold uppercase tracking-[0.3em] text-sm sm:text-base mb-4 sm:mb-6 font-medium"
        >
          Mobile Golf Simulator Experiences
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-5xl md:text-7xl font-bold text-whisper leading-tight mb-4 sm:mb-6"
        >
          The Ultimate Golf Experience
          <span className="block text-gold">&mdash; Delivered</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="h-8 sm:h-10 mb-8 sm:mb-10 relative"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={taglineIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-sand/80 text-lg sm:text-xl md:text-2xl font-light absolute inset-0 text-center"
            >
              {taglines[taglineIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.button
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          onClick={onCtaClick}
          className="bg-gold text-forest font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg uppercase tracking-wider hover:scale-105 hover:shadow-[0_0_30px_rgba(255,209,0,0.3)] transition-all duration-300"
        >
          Book Your Event
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        aria-label="Scroll to About section"
      >
        <div className="animate-bounce-slow">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-whisper/50"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.a>
    </section>
  );
}
