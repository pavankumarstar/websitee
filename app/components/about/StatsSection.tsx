'use client';

import React from 'react';
import { FaBuilding, FaUserTie, FaGlobe, FaBullseye } from 'react-icons/fa';

const stats = [
  { icon: <FaBuilding />, number: '200', label: 'Offices Worldwide' },
  { icon: <FaUserTie />, number: '800', label: 'Skilled Astrologers' },
  { icon: <FaGlobe />, number: '60', label: 'Countries Covered' },
  { icon: <FaBullseye />, number: '30', label: 'Years Of Experiences' },
];

const StatsSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-fixed bg-center bg-no-repeat text-white py-20 font-serif overflow-hidden"
      style={{ backgroundImage: "url('/images/timer_bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Now <span className="text-orange-500">We Have</span>
        </h2>
        <p className="mt-4 mb-10 max-w-3xl mx-auto text-base md:text-lg text-gray-200">
          Astrology is used for birth chart analysis, prediction, and gaining insights into personality, relationships, and life events.
        </p>
      </div>

      {/* Mobile swipe / Desktop grid */}
      <div className="relative z-10">
        <div className="flex overflow-x-auto snap-x snap-mandatory md:flex-wrap md:overflow-x-visible scrollbar-hide md:justify-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center flex-shrink-0 w-full min-w-full snap-center px-10 md:w-auto md:min-w-[220px] md:snap-none"
            >
              <div className="text-white text-5xl border-2 border-dotted border-white p-5 rounded-full mb-4">
                {item.icon}
              </div>
              <h3 className="text-orange-500 text-3xl font-bold mb-1">{item.number}</h3>
              <p className="text-lg font-semibold">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
