"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do Master Krishna Sai astrology help?",
    answer:
      "Master Krishna Sai provide insights through birth chart analysis, helping with relationships, life decisions, emotional well-being, and career guidance.",
  },
  {
    question: "Can Master Krishna Sai astrology predict marriage?",
    answer:
      "Yes, by analyzing planetary positions, dashas, and transits in your birth chart, particularly focusing on Jupiter's influence.",
  },
  {
    question: "How does Master Krishna Sai astrology predict marriage timing?",
    answer:
      "Through examination of dasha periods, planetary transits, and specific marriage yogas in the birth chart.",
  },
  {
    question: "Is Master Krishna Sai service accurate in USA?",
    answer:
      "Absolutely, with numerous satisfied clients in USA benefiting from his accurate readings and spiritual guidance.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 py-16 text-white "
      style={{
        backgroundImage:
          "url('/images/home/faqbk.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Astrologer Progress
        </motion.h1>
        <p className="text-center max-w-2xl mx-auto text-gray-200 text-sm sm:text-base">
          Guided by deep spiritual knowledge and years of experience, Master Krishna Sai offers
          transformative solutions that change lives for the better.
        </p>

        <div className="flex flex-wrap gap-10 mt-12 items-start">
          {/* Left Image */}
          <motion.div
            className="flex-1 min-w-[300px] max-w-[500px]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src="/images/faq.jpg"
              alt="Astrology"
              className="w-full rounded-lg shadow-xl border border-white/20"
            />
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="flex-1 min-w-[300px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-xl font-extrabold mb-4">Questions (FAQ’s)</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-4 cursor-pointer shadow-lg hover:bg-white/15 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="flex justify-between items-center font-semibold text-white">
                    {faq.question}
                    <motion.span
                      className="ml-2 text-xl font-bold text-orange-400"
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="mt-2 text-sm text-gray-200 leading-relaxed"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
