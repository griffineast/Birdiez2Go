"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BASE_PATH } from "@/lib/prefix";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";

const locations = [
  {
    name: "Long Island",
    description:
      "Our home base. We proudly serve all of Long Island, from Nassau to Suffolk.",
  },
  {
    name: "The Hamptons",
    description:
      "Bringing premium golf entertainment to the East End — perfect for estate events and private parties.",
  },
  {
    name: "New York City",
    description:
      "From corporate events in Manhattan to backyards in Brooklyn, we bring the simulator experience to all five boroughs.",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-20 sm:py-32 bg-forest">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image placeholder — will be replaced with Long Island tee logo */}
          <motion.div
            variants={slideInLeft}
            className="relative aspect-square rounded-2xl overflow-hidden bg-forest/50 border border-whisper/10"
          >
            <Image
              src={`${BASE_PATH}/images/birdiez2go-no-background-2.png`}
              alt="Birdiez2Go logo"
              fill
              className="object-contain p-8"
            />
          </motion.div>

          {/* Text */}
          <motion.div variants={slideInRight}>
            <p className="text-bright uppercase tracking-[0.2em] text-sm mb-4 font-medium">
              Locations
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-whisper mb-8 leading-tight">
              Where We
              <br />
              <span className="text-bright">Bring the Game</span>
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              {locations.map((loc) => (
                <motion.div
                  key={loc.name}
                  variants={fadeInUp}
                  className="border-l-2 border-whisper/30 pl-5"
                >
                  <h3 className="font-serif text-xl font-bold text-whisper mb-1">
                    {loc.name}
                  </h3>
                  <p className="text-dark-grey/80 text-sm leading-relaxed">
                    {loc.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
