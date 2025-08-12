"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { SlArrowUp } from 'react-icons/sl';

const FloatingButtons: React.FC = () => {
  const [showSocials, setShowSocials] = useState(false);

  const toggleSocials = () => setShowSocials(prev => !prev);
  const closeSocials = () => setShowSocials(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col items-end gap-4">
      {/* Social Icons */}
      {showSocials && (
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 text-white flex items-center justify-center rounded-full text-lg hover:bg-gray-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 text-white flex items-center justify-center rounded-full text-lg hover:bg-gray-600 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 text-white flex items-center justify-center rounded-full text-lg hover:bg-gray-600 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 bg-gray-800 text-white flex items-center justify-center rounded-full text-lg hover:bg-gray-600 transition"
          >
            <FaYoutube />
          </a>
          <span
            className="w-11 h-11 bg-red-600 text-white flex items-center justify-center rounded-full text-sm cursor-pointer hover:bg-red-500 transition"
            title="Close"
            onClick={closeSocials}
          >
            ❌
          </span>
        </motion.div>
      )}

      {/* Scroll-to-top */}
      <motion.button
        className="w-14 h-14 rounded-full bg-[#f9a826] flex items-center justify-center text-white text-xl shadow-lg hover:brightness-110 transition"
        onClick={scrollToTop}
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
      >
        <SlArrowUp />
      </motion.button>

      {/* Pandit Contact Toggle */}
      <motion.div
        className="flex items-center gap-2 bg-purple-700 text-white rounded-full px-4 py-2 cursor-pointer shadow-lg hover:brightness-110 transition"
        onClick={toggleSocials}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src="https://kamleshyadav.com/html/astrology/version-1/images/content/timer_2.png"
          alt="Pandit Raj"
          className="w-6 h-6"
        />
        <span className="font-semibold whitespace-nowrap">Master Krishna Contact</span>
      </motion.div>
    </div>
  );
};

export default FloatingButtons;
