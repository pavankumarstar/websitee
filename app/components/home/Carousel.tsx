"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/love1.jpg", alt: "Love Black" },
  { src: "/images/palm1.jpg", alt: "Palm Reading" },
  { src: "/images/black1.jpg", alt: "Spiritual Healing" },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHovered = useRef(false);

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
    []
  );

  const prevSlide = useCallback(
    () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1)),
    []
  );

  const startAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!isHovered.current) nextSlide();
    }, 3000);
  }, [nextSlide]);

  const stopAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);

  const handleMouseEnter = () => {
    isHovered.current = true;
    stopAutoplay();
  };

  const handleMouseLeave = () => {
    isHovered.current = false;
    startAutoplay();
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
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

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition"
      >
        ❯
      </button>
    </div>
  );
}
