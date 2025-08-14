"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useState } from "react";
import Image from "next/image";

const services = [
  { title: "Love Marriage", img: "/images/service/Lovemarriage.jpg" },
  { title: "Black Magic Removal", img: "/images/service/Black.jpg" },
  { title: "Business Problem", img: "/images/service/Business.jpg" },
  { title: "Tarot Reading", img: "/images/service/taro.jpg" },
  { title: "Palm Reading", img: "/images/service/palm.jpg" },
  { title: "Love Problem", img: "/images/service/loveproblem.jpg" },
];

export default function ServicesShowcase() {
  const [mainIndex, setMainIndex] = useState(0);

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 relative overflow-hidden">
      <div
    className="absolute inset-0 flex justify-center items-center pointer-events-none"
  >
    <div
      className="bg-[url('/images/home/section.png')] bg-center bg-no-repeat bg-contain opacity-10 w-full h-full"
    ></div>
  </div>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative">

        {/* LEFT - Layered Carousel */}
        <motion.div
          className="relative flex justify-center md:justify-end items-center w-full"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Decorative background lines */}
          <div className="absolute inset-0 bg-[url('/images/home/section.png')] bg-no-repeat bg-center opacity-10 pointer-events-none"></div>

          {/* Main Carousel */}
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay]}
            onSlideChange={(swiper) => {
              setMainIndex(swiper.realIndex);
            }}
            className="w-72 sm:w-80 md:w-96 rounded-xl overflow-hidden shadow-2xl border-4 border-orange-100 transform -rotate-6 z-10"
          >
            {services.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className="relative w-full h-80">
                  <Image
                    src={service.img}
                    alt={`Service: ${service.title}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Smaller Layered Image */}
          <motion.div
            className="absolute top-[-20px] right-[-30px] w-48 sm:w-56 rounded-lg shadow-lg transform rotate-3 z-20 overflow-hidden"
            initial={{ opacity: 0, x: 50, y: -40, rotate: 8 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img
              src={services[(mainIndex + 1) % services.length].img}
              alt={services[(mainIndex + 1) % services.length].title}
              className="w-full h-48 object-cover"
            />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            className="absolute bg-orange-500 px-6 py-4 text-center rounded-lg shadow-lg z-30"
            style={{ bottom: "15%", left: "55%" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-3xl font-bold text-white">24/7</span>
            <p className="text-sm text-white">Service</p>
          </motion.div>
        </motion.div>

        {/* RIGHT - Text Section */}
        <div className="text-center md:text-left">
          <motion.p
            className="text-lg font-semibold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent animate-pulse"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Master Krishna Sai
          </motion.p>

          <motion.h2
            className="text-3xl sm:text-4xl font-bold leading-tight mb-4 bg-gradient-to-r from-gray-900 via-orange-700 to-gray-900 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We Can Help Find Your <br /> Future With Master Krishna Sai
          </motion.h2>

          <motion.p
            className="text-gray-700 mb-6 text-sm sm:text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Under the divine guidance of <strong>Master Krishna Sai</strong>, we embrace wisdom,
            compassion, and spiritual growth. His teachings inspire us to walk the path of
            positivity, discipline, and self-discovery. Through his profound knowledge and kindness,
            countless lives have been touched, bringing harmony and purpose to every seeker.
          </motion.p>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4 text-sm font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center gap-2 text-gray-800 hover:text-orange-600 transition"
              >
                <span className="text-orange-500">⟡</span> {service.title}
              </Link>
            ))}
          </motion.div>

          {/* Explore Services Button */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Link href="/about">
              <motion.button
                className="mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition rounded text-white font-semibold shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </Link>
          </motion.div>
         {/* Emergency Contact Box */}
<a href="tel:+1(929) 513-3283">
  <motion.div
    className="mt-12 flex items-center gap-4 bg-blue-950 p-4 rounded-lg shadow-lg max-w-sm mx-auto md:mx-0 transition"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 1 }}
  >
    <div className="bg-orange-500 p-3 rounded-full flex items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-white"
      >
        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-.91 1c-9.39.49-17-7.12-16.51-16.51A1 1 0 018 2.5h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
      </svg>
    </div>
    <div className="flex flex-col gap-2">
      <p className="text-white text-sm">Emergency Contact</p>
      <p className="text-white font-bold text-lg">+1(929) 513-3283</p>
      <div className="flex gap-2">
        <a
          href="tel:19295133283"
          className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold hover:bg-blue-700 transition"
        >
          Call Now
        </a>
        <a
          href="https://wa.me/19295133283"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 py-1 bg-green-500 text-white rounded-full text-xs font-semibold hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  </motion.div>
</a>


        </div>
      </div>
    </section>
  );
}
