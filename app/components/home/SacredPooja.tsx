"use client";

import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa"; // Add this import

const poojaData = [
  {
    title: "Kali Maa Pooja",
    duration: "2.5 Hours",
    description:
      "Master Krishna Sai performs powerful rituals to invoke Goddess Kali for protection, strength, and the removal of negative energies—bringing peace, power, and transformation to your life.",
    tags: ["Protection", "Transformation"],
    image: "/images/pooja/Kalli.jpg",
  },
  {
    title: "Hanuman Pooja",
    duration: "2 Hours",
    description:
      "Master Krishna Sai invokes Lord Hanuman’s blessings to bring immense strength, courage, and protection from evil forces and harmful planetary influences.",
    tags: ["Strength", "Courage"],
    image: "/images/pooja/Hanmnau.jpg",
  },
  {
    title: "Ganesh Pooja",
    duration: "3 Hours",
    description:
      "Master Krishna Sai calls upon Lord Ganesha to remove life’s obstacles and to attract success, wisdom, and good fortune through divine rituals.",
    tags: ["Wisdom", "Success", "Prosperity"],
    image: "/images/pooja/Gansh.jpg",
  },
  {
    title: "Shiva Pooja",
    duration: "3 Hours",
    description:
      "Master Krishna Sai invokes Lord Shiva’s energy for spiritual awakening, inner peace, and destruction of negativity—bringing deep transformation and mental clarity.",
    tags: ["Peace", "Clarity", "Spiritual Growth"],
    image: "/images/pooja/Shiva.jpg",
  },
  {
    title: "Krishna Pooja",
    duration: "3 Hours",
    description:
      "Master Krishna Sai invokes Lord Krishna’s grace to bring love, joy, emotional healing, and harmony in personal relationships through sacred rituals.",
    tags: ["Love", "Joy", "Harmony"],
    image: "/images/pooja/Krishna.jpg",
  },
  {
    title: "Lakshmi Maa Pooja",
    duration: "2.5 Hours",
    description:
      "Master Krishna Sai performs sacred rituals to invoke Goddess Lakshmi for wealth, abundance, financial growth, and harmony in both personal and professional life.",
    tags: ["Wealth", "Abundance", "Harmony"],
    image: "/images/pooja/Lakashmi.jpg",
  },
];

export default function SacredPooja() {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-600">
          Sacred Pooja Services
        </h2>
        <p className="text-gray-600 mt-2">
          Vedic rituals to align your stars and remove obstacles
        </p>
      </div>

      {/* Cards Wrapper */}
      <div
        className="
          flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide
          md:grid md:grid-cols-3 md:gap-6 md:overflow-visible
        "
      >
        {poojaData.map((pooja, index) => (
          <div
            key={index}
            className="
              snap-center flex-none w-full 
              sm:w-[80%] 
              md:w-auto 
              bg-white rounded-xl shadow-lg overflow-hidden 
              hover:shadow-2xl transition duration-300 flex flex-col
            "
          >
            {/* Image with overlay */}
            <div className="relative h-56">
              <img
                src={pooja.image}
                alt={pooja.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-lg font-semibold text-white">
                  {pooja.title}
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1">
              <p className="text-gray-700 text-sm flex-1">
                {pooja.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {pooja.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-500 text-xs mt-3">⏳ {pooja.duration}</p>

              {/* Buttons */}
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold text-center text-sm transition"
                >
                  Book Ritual
                </Link>
                <Link
                  href="tel:19295133283"
                  className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition"
                  aria-label="Call"
                >
                  <FaPhoneAlt className="text-white text-sm" />
                </Link>
                <Link
                  href="https://wa.me/19295133283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white text-lg" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
