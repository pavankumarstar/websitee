"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/love1.jpg", alt: "Love Black" },
  { src: "/images/palm1.jpg", alt: "Palm Reading" },
  { src: "/images/black1.jpg", alt: "Spiritual Healing" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = next, -1 = prev
  const intervalRef = useRef(null);
  const isHovered = useRef(false);

  const changeSlide = (dir) => {
    setCurrent((prev) =>
      dir === 1
        ? prev === slides.length - 1
          ? 0
          : prev + 1
        : prev === 0
        ? slides.length - 1
        : prev - 1
    );
    setDirection(dir);
  };

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) changeSlide(direction);
    }, 3000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [direction]);

  const handleMouseEnter = (e) => {
    isHovered.current = true;
    stopAutoplay();

    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setDirection(x > width / 2 ? 1 : -1); // Right side = next, left side = prev
  };

  const handleMouseMove = (e) => {
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    setDirection(x > width / 2 ? 1 : -1);
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    startAutoplay();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-full flex-shrink-0 h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px]"
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={idx === 0}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Manual buttons */}
      <button
        onClick={() => changeSlide(-1)}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition"
      >
        ❮
      </button>
      <button
        onClick={() => changeSlide(1)}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition"
      >
        ❯
      </button>
    </div>
  );
}
