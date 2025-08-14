"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";

const zodiacSigns = [
  { label: "Pisces", symbol: "♓" },
  { label: "Virgo", symbol: "♍" },
  { label: "Aquarius", symbol: "♒" },
  { label: "Leo", symbol: "♌" },
];

export default function AboutSection() {
  return (
    <section className="flex flex-col mt-3 mb-3 md:flex-row h-auto md:h-screen bg-gray-50 bg-zoom-pan">
      {/* Left Side (Image) */}
      <div
        className="md:w-1/2 h-[300px] md:h-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/about/shiva.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-10 left-6 text-white text-4xl md:text-5xl font-bold"
        >
          PSYCHIC <br /> KRISHNA SAI
        </motion.h2>
      </div>

      {/* Right Side (Content) */}
      <div className="md:w-1/2 p-8 md:p-14 flex flex-col gap-8 overflow-y-auto">
        {/* Zodiac Icons */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-4 overflow-x-auto pb-3"
        >
          {zodiacSigns.map((z) => (
            <div
              key={z.label}
              className="flex flex-col items-center min-w-[80px] bg-white rounded-lg shadow p-3 hover:shadow-lg transition"
            >
              <span className="text-2xl">{z.symbol}</span>
              <span className="text-xs mt-1">{z.label}</span>
            </div>
          ))}
        </motion.div> */}
        <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-4xl md:text-6xl font-extrabold text-white tracking-wider"
      >
        <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
          ABOUT MASTER KRISHNA SAI
        </span>
      </motion.h1>
        {/* Main Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 leading-relaxed"
        >
         psychic krishna sai in USA with 25 years of experience in Astrology, Vastu-Shastra & Spiritualism. Astro means Astrology or Jyotisha and Science means its study. This study of science is completely based on the impact of planetary forces on the life on earth. Astro means Astrology or Jyotisha and Science means its study. This study of science is completely based on the impact of planetary forces on the life on earth. Be it human beings, or animals, or trees and plants, whoever has life on planet earth for them there is a certain astrological impact. Astroscience is in depth study and research of Planets, Zodiac signs from Aries to Pisces.
        </motion.p>

        {/* Quote */}
        

        {/* Additional Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 leading-relaxed"
        >
          Many areas of our life like our Personality, Characteristics, our Taste, Behavior and Looks can be easily derived by analyzing these things in the Horoscope. Infact, Astrology can also reveal many things from your Past, Present and Future. Vedic Astrology or Jyotisha can play a very important role for providing guidance about your Career field, Relationships, Education, Finance, and astrology also precisely predicts about your Health matters.
            
        </motion.p>

        

        {/* Social Icons */}
        <div className="flex gap-4 mt-2">
          {[
            { icon: <FaTwitter />, href: "https://twitter.com" },
            { icon: <FaFacebookF />, href: "https://facebook.com" },
            { icon: <FaYoutube />, href: "https://youtube.com" },
            { icon: <FaInstagram />, href: "https://instagram.com" },
          ].map((s, idx) => (
            <a
              key={idx}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white transition"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
