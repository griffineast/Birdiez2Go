"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const faqs = [
  {
    question: "How much does it cost?",
    answer:
      "Pricing varies based on event details such as date, duration, number of simulators, and overall setup requirements. Because availability and demand fluctuate throughout the year, we recommend contacting us directly for a customized quote tailored to your event.",
  },
  {
    question: "How much space is required?",
    answer:
      "Outdoor minimum dimensions: 16 ft (D) x 15 ft (W) x 11 ft (H). Indoor minimum dimensions: 15 ft (D) x 13 ft (W) x 9 ft (H).",
  },
  {
    question: "Is the simulator suitable for indoor and outdoor events?",
    answer:
      "Yes. We offer fully enclosed simulator bays that are ideal for outdoor events, providing protection from sun glare and weather elements. We also offer more compact, open-format setups that work well in tighter indoor spaces.",
  },
  {
    question: "How long does setup and breakdown take?",
    answer:
      "We typically require approximately 60 minutes for setup prior to your event and 60 minutes for breakdown afterward. Our team handles everything efficiently to ensure a seamless experience from start to finish.",
  },
  {
    question: "Do you require access to power?",
    answer:
      "Yes. We require access to a standard 20-amp outlet to operate the simulator. If electricity is unavailable at your event location, we can provide a generator upon request.",
  },
  {
    question: "How far do you travel? Is there a travel fee?",
    answer:
      "We primarily service all of Long Island and are happy to accommodate events outside the area upon request. We do not charge a separate travel fee within our primary service area.",
  },
  {
    question: "Are you insured?",
    answer: "Yes, we are fully insured.",
  },
  {
    question: "How does the simulator work?",
    answer:
      "Our premium golf simulator uses advanced launch monitor technology to track your real golf swing and ball flight. Players hit real golf balls into a projection screen, and the system instantly captures data such as ball speed, distance, launch angle, and direction. The shot is then displayed on a virtual golf course, creating a realistic and immersive playing experience. Upon request, we also provide safe, indoor-friendly golf balls that look, feel, and track just like a real golf ball \u2014 ensuring the same high-quality experience with added peace of mind.",
  },
  {
    question: "Is it beginner-friendly?",
    answer:
      "Absolutely. Our simulator is designed for golfers of all skill levels \u2014 from first-time players to experienced golfers. Our onsite staff guides each guest through their first swing, explains how the technology works, and ensures everyone feels comfortable and confident participating.",
  },
  {
    question: "Can you run tournaments or competitions?",
    answer:
      "Yes. We offer tournament-style play, including full tournaments, closest-to-the-pin contests, and long drive competitions. Our team manages scoring and leaderboards throughout the event to create a fun, competitive, and engaging experience for your guests.",
  },
  {
    question: "Do you provide staff during the event?",
    answer:
      "Yes. We provide onsite staff for every event. Most events are supported by 1\u20132 team members, depending on the size and scale. Larger events or those with multiple simulators may require additional staff to ensure a smooth, well-managed experience.",
  },
  {
    question: "How many guests can participate?",
    answer:
      "Participation depends on your vision for the event. We can structure the experience to accommodate small, intimate gatherings or larger groups by organizing rotations, tournament-style play, or open participation throughout the event. We\u2019ll work with you to design a format that best fits your guest count and goals.",
  },
  {
    question: "Do you provide golf clubs, or can guests bring their own?",
    answer:
      "We provide a selection of golf clubs for men, women, and juniors so all guests can comfortably participate. Players are also welcome to bring their own clubs for a more personalized experience.",
  },
  {
    question: "Is it safe for indoor use?",
    answer:
      "Yes. Our simulator setup includes high-quality impact screens, protective surroundings, and professional installation to ensure a safe experience for guests. For added peace of mind, we can also provide indoor-friendly golf balls upon request.",
  },
  {
    question: "What happens if there's bad weather (for outdoor events)?",
    answer:
      "Our fully enclosed simulator bays are designed to provide protection from sun glare and light weather conditions. In the event of severe weather, we work closely with you to determine the best solution, whether that means adjusting placement, moving indoors if possible, or rescheduling if necessary.",
  },
  {
    question: "What surfaces can it be set up on?",
    answer:
      "We can install the simulator on grass, concrete, carpet, and other flat, stable surfaces. As long as the area is level and meets space requirements, we can create a safe and seamless setup.",
  },
  {
    question: "How much noise is there?",
    answer:
      "Not at all. The simulator runs quietly, and the only noticeable sound is the momentary impact of the golf ball against the screen. It\u2019s suitable for indoor venues, corporate events, restaurants, and weddings without disrupting the overall atmosphere.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Yes. A 25% deposit is required to confirm and reserve your event date. The remaining balance will be due prior to or on the day of your event.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Deposits are non-refundable. Cancellations made at least 14 days prior to the event may be eligible to transfer the deposit to a future date, subject to availability. Cancellations made within 14 days of the event may forfeit the deposit.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 sm:py-32 bg-dark-card">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-bright uppercase tracking-[0.2em] text-sm mb-4 font-medium">
            FAQ
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-whisper">
            Common Questions
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="border border-dark-grey/20 rounded-xl overflow-hidden bg-dark-bg"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-dark-card transition-colors"
              >
                <span className="text-whisper font-medium text-base">
                  {faq.question}
                </span>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-5 h-5 text-bright shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-4 text-dark-grey/80 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
