'use client';

import React from 'react';
import Image from 'next/image';

const servicesLeft = [
  {
    title: 'Astrology Tips',
    desc: 'Daily insights based on planetary positions and zodiac signs to guide your decisions.',
    icon: '/icons/health.svg',
  },
  {
    title: 'Gem Stone',
    desc: 'Discover the best gemstones for your birth chart to attract positivity and success.',
    icon: '/icons/gem.svg',
  },
  {
    title: 'Vastu Tips',
    desc: 'Improve energy flow in your home or office using ancient Vastu Shastra principles.',
    icon: '/icons/vastu.svg',
  },
];

const servicesRight = [
  {
    title: 'Health Tips',
    desc: 'Astrological remedies and diet suggestions based on your moon sign and doshas.',
    icon: '/icons/kundli.svg',
  },
  {
    title: 'Numerology Tips',
    desc: 'Decode the power of numbers in your life — from name vibrations to lucky dates.',
    icon: '/icons/number.svg',
  },
  {
    title: 'Kundli Dosha',
    desc: 'Identify and neutralize planetary doshas like Mangal or Kaal Sarp in your Kundli.',
    icon: '/icons/astro.svg',
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#110321] text-white text-center font-serif">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Services</h2>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto">
          Reveal your destiny through the power of ancient astrology.
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {servicesLeft.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#1a0d2e] border border-[#4a3a67] p-5 rounded-lg min-w-[280px] max-w-xs hover:-translate-y-1 transition-transform"
            >
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image with Rotating Circle */}
        <div className="relative flex justify-center items-center">
          {/* Rotating Circle */}
          <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.07)_10%,transparent_70%)] border border-white/10 shadow-[0_0_30px_10px_rgba(255,255,255,0.05)] animate-spin-slow z-0" />

          {/* Main Image */}
          <Image
            src="/images/hand.png"
            alt="Palm Reading"
            width={280}
            height={280}
            className="relative z-10 rounded-tl-[100px] rounded-br-[100px] rounded-tr-none rounded-bl-none"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {servicesRight.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-[#1a0d2e] border border-[#4a3a67] p-5 rounded-lg min-w-[280px] max-w-xs hover:-translate-y-1 transition-transform"
            >
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <div className="text-left">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
