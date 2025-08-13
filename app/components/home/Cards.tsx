"use client";

import React, { useRef } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const items = [
  { title: "Love Marriage", img: "/images/service/Lovemarriage.jpg", link: "/services/love-marriage", desc: "Expert guidance on love marriage and relationship alignment." },
  { title: "Love Problem", img: "/images/service/Loveproblem.jpg", link: "/services/love-problem", desc: "Resolve misunderstandings and restore harmony in love life." },
  { title: "Black Magic Removal", img: "/images/service/Black.jpg", link: "/services/black-magic", desc: "Expert guidance on black magic removal." },
  { title: "Black Eye", img: "/images/service/evil.jpg", link: "/services/evil-eye", desc: "Expert guidance on evil eye removal." },
  { title: "Business Problem", img: "/images/service/Business.jpg", link: "/services/business-problems", desc: "Expert guidance on business problems." },
  { title: "Family Problem", img: "/images/service/family.jpg", link: "/services/family-problems", desc: "Expert guidance on family problems." },
  { title: "Negative Energy", img: "/images/service/Negative.jpg", link: "/services/negative-energy", desc: "Expert guidance on negative energy." },
  { title: "Palm Reading", img: "/images/service/palm.jpg", link: "/services/palm-reading", desc: "Expert guidance on palm reading." },
  { title: "Tarot Reading", img: "/images/service/taro.jpg", link: "/services/tarot-reading", desc: "Expert guidance on tarot reading." },
  { title: "Health Problem", img: "/images/service/Helath.jpg", link: "/services/health-problem", desc: "Expert guidance on health problems." },
];

export default function Cards() {
  const swiperRef = useRef(null);

  return (
    <div className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-12 px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Feature Services</h1>
        <p className="text-gray-600 mt-2 text-sm md:text-base">
          Astrology is just a finger pointing at reality.
        </p>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        grabCursor={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col transition-transform hover:-translate-y-1 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
            >
              {/* Image */}
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col flex-grow p-5">
                <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
                <p className="text-sm text-gray-600 flex-grow mt-2">{item.desc}</p>

                {/* Button Row */}
                <div className="mt-4 flex items-center justify-between">
                  <Link
                    href={item.link}
                    className="px-4 py-2 bg-orange-500 text-white rounded-full text-sm font-medium hover:bg-orange-600 transition"
                  >
                    Learn More →
                  </Link>

                  {/* Social icons */}
                  <div className="hidden md:flex gap-3">
                    <a
                      href="tel:647-471-3459"
                      className="bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-orange-100 hover:text-orange-500"
                    >
                      <FaPhoneAlt />
                    </a>
                    <a
                      href="https://wa.me/16474713459"
                      className="bg-gray-100 text-gray-800 w-8 h-8 rounded-full flex items-center justify-center text-lg hover:bg-green-100 hover:text-green-500"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
