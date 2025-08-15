"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const slides = [
  { src: "/images/love1.jpg", alt: "Love Black" },
  { src: "/images/palm1.jpg", alt: "Palm Reading" },
  { src: "/images/black1.jpg", alt: "Spiritual Healing" },
];

const Carousell: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const mid = rect.width / 2;

    if (x < mid) {
      swiper.slidePrev(); // hover left → go left
    } else {
      swiper.slideNext(); // hover right → go right
    }
  };

  return (
    <div
      onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
      onMouseMove={handleMouseMove}
    >
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousell;
