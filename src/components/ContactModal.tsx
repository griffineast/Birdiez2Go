"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-forest border border-whisper/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-whisper/40 hover:text-whisper transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-whisper mb-2">
              Get a Quote
            </h3>
            <p className="text-sand/60 text-sm mb-6">
              Tell us about your event and we&apos;ll get back to you within 24
              hours.
            </p>

            {/*
              TODO: Replace this placeholder form with Zoho CRM Web Form embed.
              Generate your Zoho form at: Zoho CRM → Settings → Web Forms
              Then paste the embed code here (iframe or HTML form).
            */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Placeholder — Zoho integration goes here
                alert(
                  "Form submitted! (Placeholder — Zoho CRM integration pending)"
                );
                onClose();
              }}
              className="space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-whisper/80 text-sm mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm placeholder:text-whisper/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-whisper/80 text-sm mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm placeholder:text-whisper/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-whisper/80 text-sm mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm placeholder:text-whisper/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-whisper/80 text-sm mb-1.5">
                    Event Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm placeholder:text-whisper/30 focus:outline-none focus:border-gold/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-whisper/80 text-sm mb-1.5">
                  Event Type
                </label>
                <select className="w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm focus:outline-none focus:border-gold/50 transition-colors">
                  <option value="">Select event type</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="birthday">Birthday Party</option>
                  <option value="wedding">Wedding / Reception</option>
                  <option value="fundraiser">Fundraiser</option>
                  <option value="community">Community Event</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-whisper/80 text-sm mb-1.5">
                  Message
                </label>
                <textarea
                  rows={3}
                  className="w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm placeholder:text-whisper/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                  placeholder="Tell us about your event..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-forest font-bold py-3 rounded-full text-sm uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,209,0,0.3)] hover:scale-[1.02] transition-all duration-300"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
