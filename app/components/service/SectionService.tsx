"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface SectionItem {
  header: string;
  paragraph1: string;
  imageSrc: string;
  paragraph2: string;
  paragraph3: string;
}

interface SectionServiceProps {
  buttonLabels: string[];
  contentData: SectionItem[];
}

const SectionService: React.FC<SectionServiceProps> = ({
  buttonLabels,
  contentData,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();
  const { paragraph1, header, imageSrc, paragraph2, paragraph3 } =
    contentData[activeIndex];

  const handleAppointmentClick = () => {
    router.push("/contact");
  };

  return (
    <section className="bg-gradient-to-b from-[#1c1c1c] to-[#2a2a2a] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Tabs */}
        <div className="flex gap-3 mb-8 overflow-x-auto scrollbar-hide pb-2">
          {buttonLabels.map((label, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                activeIndex === index
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Glass Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={header}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image */}
              <motion.div
                key={imageSrc}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={imageSrc}
                  alt={header}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </motion.div>

              {/* Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {header}
                </h2>
                <p className="text-gray-300 mb-4">{paragraph1}</p>
                <p className="text-gray-300 mb-4">{paragraph2}</p>
                <p className="text-gray-300">{paragraph3}</p>

                <button
                  onClick={handleAppointmentClick}
                  className="mt-6 inline-block px-7 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full shadow-md hover:scale-105 transition-transform"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SectionService;
