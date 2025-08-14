"use client";
import React from "react";
import { motion } from "framer-motion";
import Breadcrumb from "../Breadcrumb";
import Image from "next/image";

interface SectionItem {
  header: string;
  paragraph1: string;
  imageSrc: string;
  paragraph2?: string;
  paragraph3?: string;
}

interface SectionServiceProps {
  contentData: SectionItem[];
  title: string;
  bannerImage: string;
}

const SectionService: React.FC<SectionServiceProps> = ({
  contentData,
  title,
  bannerImage,
}) => {
  return (
    <div>
      {/* Banner with Title Overlay */}
      <section
        className="relative bg-center bg-cover bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('/images/Service.jpg')`, // <-- Add your image path here
          height: "320px",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          {/* Breadcrumb with glass effect */}
          <div className="mb-4">
            <div className="backdrop-blur-md bg-white/20 rounded-full px-6 py-2 shadow-lg flex items-center gap-2">
              <Breadcrumb />
            </div>
          </div>
          {/* Decorative accent */}
          <span className="text-yellow-400 text-3xl mb-2">✦</span>
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-2 text-center">
            {title}
          </h1>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-gradient-to-b from-[#1c1c1c] to-[#2a2a2a] py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {contentData.map((item, index) => {
            const reverse = index % 2 !== 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${
                  reverse ? "md:flex-row-reverse" : ""
                } items-center gap-8 md:gap-16`}
              >
                {/* Image */}
                <div className="md:w-1/2 w-full">
                  <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500">
                    <img
                      src={item.imageSrc}
                      alt={item.header}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                </div>
                {/* Content Card */}
                <div className="md:w-1/2 w-full">
                  <div className="bg-white/10 rounded-2xl shadow-lg p-8 border-l-8 border-yellow-500">
                    <h2 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-4">
                      {item.header}
                    </h2>
                    <p className="text-gray-200 mb-4 text-lg">{item.paragraph1}</p>
                    {item.paragraph2 && (
                      <p className="text-gray-300 mb-3">{item.paragraph2}</p>
                    )}
                    {item.paragraph3 && (
                      <p className="text-gray-400">{item.paragraph3}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default SectionService;
