"use client";

import { motion, AnimatePresence, type PanInfo } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { BASE_PATH } from "@/lib/prefix";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

type Slide =
  | { type: "video"; src: string; alt: string }
  | { type: "image"; src: string; alt: string };

const slides: Slide[] = [
  {
    type: "video",
    src: "/videos/birdiez2go-in-action-optimized.mp4",
    alt: "Birdiez2Go in action",
  },
  {
    type: "image",
    src: "/images/big-sim-with-tent-optimized.jpg",
    alt: "Mobile simulator setup with tent",
  },
  {
    type: "image",
    src: "/images/setup-on-lake-optimized.jpg",
    alt: "Simulator setup by the lake",
  },
  {
    type: "image",
    src: "/images/setup-with-monitor.JPEG",
    alt: "Simulator setup with monitor",
  },
];

const AUTO_ADVANCE_MS = 6000;
const SWIPE_THRESHOLD = 60;

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = useCallback((target: number, dir: number) => {
    setDirection(dir);
    setIndex((target + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(index + 1, 1), [index, goTo]);
  const prev = useCallback(() => goTo(index - 1, -1), [index, goTo]);

  useEffect(() => {
    // Let the video play to completion; auto-advance only on image slides.
    if (slides[index].type === "video") return;
    const t = window.setTimeout(next, AUTO_ADVANCE_MS);
    return () => window.clearTimeout(t);
  }, [index, next]);

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  };

  const slide = slides[index];

  return (
    <section id="gallery" className="py-20 sm:py-32 bg-forest">
      <div className="px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            Gallery
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-whisper">
            See It in Action
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className={`mx-auto ${slide.type === "video" ? "max-w-sm" : "max-w-2xl"}`}
        >
          <div
            className={`relative rounded-2xl overflow-hidden border border-whisper/10 bg-black ${
              slide.type === "video" ? "aspect-9/16" : "aspect-4/3"
            }`}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction >= 0 ? 80 : -80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -80 : 80 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={onDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                {slide.type === "video" ? (
                  <video
                    ref={(el) => {
                      if (el) {
                        el.muted = true;
                        el.setAttribute("muted", "");
                      }
                    }}
                    src={`${BASE_PATH}${slide.src}`}
                    controls
                    autoPlay
                    muted
                    playsInline
                    onEnded={next}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={`${BASE_PATH}${slide.src}`}
                    alt={slide.alt}
                    fill
                    sizes="(min-width: 768px) 672px, 100vw"
                    className="object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                )}
              </motion.div>
            </AnimatePresence>

            <button
              type="button"
              aria-label="Previous slide"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-whisper rounded-full p-2 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-black/40 hover:bg-black/60 text-whisper rounded-full p-2 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i, i > index ? 1 : -1)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "bg-gold w-8"
                    : "bg-whisper/30 w-2 hover:bg-whisper/50"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
