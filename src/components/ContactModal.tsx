"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BASE_PATH } from "@/lib/prefix";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  eventTown: string;
  guests: string;
  duration: string;
  setupLocation: string;
  heardAbout: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  eventType: "",
  eventDate: "",
  eventTown: "",
  guests: "",
  duration: "",
  setupLocation: "",
  heardAbout: "",
  message: "",
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-background/50 border border-whisper/10 rounded-lg px-4 py-2.5 text-whisper text-sm placeholder:text-whisper/30 focus:outline-none focus:border-gold/50 transition-colors";

export default function ContactModal({
  isOpen,
  onClose,
  source,
}: {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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

  function handleClose() {
    onClose();
    // Reset after close animation finishes
    setTimeout(() => {
      if (status === "success") {
        setFormData(INITIAL_FORM);
        setStatus("idle");
        setErrorMessage("");
      }
    }, 300);
  }

  function update(field: keyof FormData, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, source: source || "" }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please check your connection and try again.");
    }
  }

  const disabled = status === "loading";

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
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-forest border border-whisper/10 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={handleClose}
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

            {status === "success" ? (
              /* ── Success State ── */
              <div className="text-center py-8">
                <img
                  src={`${BASE_PATH}/images/birdiez2go-no-background-2.png`}
                  alt="Birdiez2Go"
                  className="mx-auto w-24 h-24 object-contain mb-4"
                />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-whisper mb-2">
                  Thank You!
                </h3>
                <p className="text-sand/60 text-sm mb-6">
                  We&apos;ve received your inquiry and will get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={handleClose}
                  className="bg-white border border-forest text-forest font-bold py-3 px-8 rounded-full text-sm uppercase tracking-wider hover:scale-[1.02] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            ) : (
              /* ── Form State ── */
              <>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-whisper mb-2">
                  Get a Quote
                </h3>
                <p className="text-sand/60 text-sm mb-6">
                  Tell us about your event and we&apos;ll get back to you
                  within 24 hours.
                </p>

                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3 mb-4 text-red-300 text-sm">
                    {errorMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: First Name / Last Name */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        First Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={disabled}
                        value={formData.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className={inputClass}
                        placeholder="First name"
                      />
                    </div>
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Last Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={disabled}
                        value={formData.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className={inputClass}
                        placeholder="Last name"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email / Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        disabled={disabled}
                        value={formData.email}
                        onChange={(e) => update("email", e.target.value)}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Phone <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        disabled={disabled}
                        value={formData.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className={inputClass}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Row 3: Event Type / Event Date */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Event Type
                      </label>
                      <select
                        disabled={disabled}
                        value={formData.eventType}
                        onChange={(e) => update("eventType", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select event type</option>
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Corporate Event/Conference">
                          Corporate Event / Conference
                        </option>
                        <option value="Gala/Fundraiser">
                          Gala / Fundraiser
                        </option>
                        <option value="Holiday Party">Holiday Party</option>
                        <option value="Product Launch">Product Launch</option>
                        <option value="Wedding">Wedding</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Preferred Event Date
                      </label>
                      <input
                        type="date"
                        disabled={disabled}
                        value={formData.eventDate}
                        onChange={(e) => update("eventDate", e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 4: Event Town / # of Guests */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Event Town
                      </label>
                      <input
                        type="text"
                        disabled={disabled}
                        value={formData.eventTown}
                        onChange={(e) => update("eventTown", e.target.value)}
                        className={inputClass}
                        placeholder="City or town"
                      />
                    </div>
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Estimate # of Guests
                      </label>
                      <input
                        type="number"
                        min="1"
                        disabled={disabled}
                        value={formData.guests}
                        onChange={(e) => update("guests", e.target.value)}
                        className={inputClass}
                        placeholder="e.g. 50"
                      />
                    </div>
                  </div>

                  {/* Row 5: Duration / Setup Location */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Preferred Duration
                      </label>
                      <select
                        disabled={disabled}
                        value={formData.duration}
                        onChange={(e) => update("duration", e.target.value)}
                        className={inputClass}
                      >
                        <option value="">Select duration</option>
                        <option value="3 Hours">3 Hours</option>
                        <option value="4 Hours">4 Hours</option>
                        <option value="5 Hours">5 Hours</option>
                        <option value="All Day">All Day</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-whisper/80 text-sm mb-1.5">
                        Setup Location
                      </label>
                      <select
                        disabled={disabled}
                        value={formData.setupLocation}
                        onChange={(e) =>
                          update("setupLocation", e.target.value)
                        }
                        className={inputClass}
                      >
                        <option value="">Select location</option>
                        <option value="Indoor">Indoor</option>
                        <option value="Outdoor">Outdoor</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 6: How did you hear about us */}
                  <div>
                    <label className="block text-whisper/80 text-sm mb-1.5">
                      How did you hear about us?
                    </label>
                    <select
                      disabled={disabled}
                      value={formData.heardAbout}
                      onChange={(e) => update("heardAbout", e.target.value)}
                      className={inputClass}
                    >
                      <option value="">Select one</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Instagram">Instagram</option>
                      <option value="Referral">Referral</option>
                      <option value="TikTok">TikTok</option>
                      <option value="Website">Website</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Row 7: Message */}
                  <div>
                    <label className="block text-whisper/80 text-sm mb-1.5">
                      Additional Requests
                    </label>
                    <textarea
                      rows={3}
                      disabled={disabled}
                      value={formData.message}
                      onChange={(e) => update("message", e.target.value)}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your event..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={disabled}
                    className="w-full bg-white border border-forest text-forest font-bold py-3 rounded-full text-sm uppercase tracking-wider hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {status === "loading" ? (
                      <span className="inline-flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
