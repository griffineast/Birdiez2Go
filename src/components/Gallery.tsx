"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { BASE_PATH } from "@/lib/prefix";

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 sm:py-32 bg-sand">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-dark-grey uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-forest">
            See It in Action
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="max-w-sm mx-auto rounded-2xl overflow-hidden border border-whisper/10"
        >
          <video
            src={`${BASE_PATH}/videos/birdiez2go-in-action.mp4`}
            controls
            autoPlay
            muted
            playsInline
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
