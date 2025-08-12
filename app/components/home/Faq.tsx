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
      className="relative min-h-screen overflow-hidden px-4 py-16 text-black"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/30/24/a9/3024a9c76ff279250a602dfabfebfa57.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.h1
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Astrologer Progress
        </motion.h1>

        <div className="flex flex-wrap gap-8 mt-8">
          {/* Left Image */}
          <motion.div
            className="flex-1 min-w-[300px] max-w-[500px]"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src="/images/home/faq.jpg"
              alt="Astrology"
              className="w-full rounded-lg shadow-lg"
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
            <h2 className="text-lg font-extrabold">Questions (FAQ’s)</h2>
            <div className="mt-4 space-y-4">
              {faqData.map((faq, index) => (
                <motion.div
                  key={index}
                  className="rounded-md bg-white/90 p-4 cursor-pointer shadow-sm hover:shadow-md transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <div
                    className="flex justify-between items-center font-bold"
                    onClick={() => toggleAccordion(index)}
                  >
                    {faq.question}
                    <motion.span
                      className="ml-2 text-xl font-bold"
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        className="mt-2 text-sm leading-relaxed"
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
