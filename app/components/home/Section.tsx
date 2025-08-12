"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Section() {
  return (
    <main>
      <section className="bg-gradient-to-b from-[#0b0420] to-[#0f0a2a] py-16 px-4 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center  relative">

          {/* Left - Layered Images */}
          <div className="relative flex justify-center md:justify-end items-center">

            {/* Decorative background lines */}
            <div className="absolute inset-0 bg-[url('/images/home/section.png')] rotate-90 bg-no-repeat bg-center opacity-20 pointer-events-none"></div>

            {/* Large Image - Bottom Left */}
            <motion.img
              src="https://images.unsplash.com/photo-1505685296765-3a2736de412f"
              alt="Main portrait"
              className="w-64 sm:w-72 md:w-80 h-auto object-cover shadow-lg rounded-md transform -rotate-6 z-10 "
              initial={{ opacity: 0, x: -50, rotate: -8 }}
              animate={{ opacity: 1, x: 0, rotate: -6 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Smaller Image - Top Right */}
            <motion.img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
              alt="Side portrait"
              className="absolute top--20 right-0 w-52 sm:w-56 h-50 object-cover shadow-lg rounded-md transform rotate-3 z-20"
              initial={{ opacity: 0, x: 50, y: -40, rotate: 8 }}
              animate={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
            />

            {/* Experience Box */}
            <motion.div
              className="absolute bg-[#1c1240] px-6 py-4 mr-4 text-center  rounded shadow-lg z-30"
              style={{ bottom: "30%", left: "45%" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-4xl sm:text-5xl font-bold text-white">
                65<span className="text-purple-400">+</span>
              </span>
              <p className="text-sm text-gray-300">Year Experience</p>
            </motion.div>
          </div>

          {/* Right - Text */}
          <div className="text-center md:text-left">
            <p className="text-purple-400 text-2xl mb-2">About Master Krishna Sai</p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              We Can Help Find Your <br /> Future With Master Krishna Sai
            </h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Under the divine guidance of <strong>Master Krishna Sai</strong>, we embrace wisdom, compassion, and spiritual growth.
              His teachings inspire us to walk the path of positivity, discipline, and self-discovery.
              Through his profound knowledge and kindness, countless lives have been touched,
              bringing harmony and purpose to the journey of every seeker.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm font-medium">
              {[
                "Black Magic",
                "Love Marriage",
                "Love Problem",
                "Tarot Reading",
                "Palm Reading",
                "Business Problem"
              ].map((service, idx) => (
                <p key={idx} className="flex items-center gap-2">
                  <span className="text-purple-400">⟡</span> {service}
                </p>
              ))}
            </div>

            {/* Read More Button */}
            <Link href="/about">
              <motion.button
                className="mt-6 px-6 py-3 bg-purple-500 hover:bg-purple-600 transition rounded text-white font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
