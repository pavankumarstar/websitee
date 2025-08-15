"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";

const slides = [
  { src: "/images/love1.jpg", alt: "Love Black" },
  { src: "/images/palm1.jpg", alt: "Palm Reading" },
  { src: "/images/black1.jpg", alt: "Spiritual Healing" },
];

const Carousell: React.FC = () => {
  const swiperRef = useRef<SwiperRef | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const mid = rect.width / 2;

    if (x < mid) {
      swiper.slidePrev();
    } else {
      swiper.slideNext();
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
            <Image
              src={slide.src}
              alt={slide.alt}
              width={1920} // native image width
              height={1080} // native image height
              style={{ width: "100%", height: "auto" }}
              priority={index === 0} // first image loads faster
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousell;
