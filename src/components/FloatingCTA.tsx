"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA({ onClick }: { onClick: () => void }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          onClick={onClick}
          className="fixed bottom-6 right-6 z-40 bg-white border border-forest text-forest font-bold px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform text-sm uppercase tracking-wider"
        >
          Get a Quote
        </motion.button>
      )}
    </AnimatePresence>
  );
}
