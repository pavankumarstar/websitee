'use client'
import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

const poojaData = [
    {
        title: "Kali Maa Pooja",
        duration: "2.5 Hours",
        description:
            " Master Krishna Sai performs powerful rituals to invoke Goddess Kali for protection, strength, and the removal of negative energies—bringing peace, power, and transformation to your life.",
        tags: ["Protection", "Transformation"],
        image: "/images/pooja/Kalli.jpg",
    },
    {
        title: "Hanuman Pooja",
        duration: "2 Hours",
        description:
            " Master Krishna Sai invokes Lord Hanuman’s blessings to bring immense strength, courage, and protection from evil forces and harmful planetary influences.",
        tags: ["Strength", "Courage"],
        image: "/images/pooja/Hanmnau.jpg",
    },
    {
        title: "Ganesh Pooja",
        duration: "3 Hours",
        description:
            " Master Krishna Sai calls upon Lord Ganesha to remove life’s obstacles and to attract success, wisdom, and good fortune through divine rituals.",
        tags: ["Wisdom", "Success", "Prosperity"],
        image: "/images/pooja/Gansh.jpg",
    },
    {
        title: "Shiva Pooja",
        duration: "3 Hours",
        description:
            " Master Krishna Sai invokes Lord Shiva’s energy for spiritual awakening, inner peace, and destruction of negativity—bringing deep transformation and mental clarity.",
        tags: ["Peace", "Clarity", "Spiritual Growth"],
        image: "/images/pooja/Shiva.jpg",
    },
    {
        title: "Krishna Pooja",
        duration: "3 Hours",
        description:
            " Master Krishna Sai invokes Lord Krishna’s grace to bring love, joy, emotional healing, and harmony in personal relationships through sacred rituals.",
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

const SacredPooja = () => {

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-center mb-3 text-black text-3xl font-bold">
                <span>Sacred Pooja Services</span>
            </h2>
            <p className="text-center text-gray-500 mb-6">
                Vedic rituals to align your stars and remove obstacles
            </p>

            {/* Cards container */}
            <div className="flex md:grid md:grid-cols-3 md:grid-rows-2 gap-4 overflow-x-auto md:overflow-visible scrollbar-hide">
                {poojaData.map((pooja, index) => (
                    <div
                        key={index}
                        className="flex-none md:flex-auto w-[600px] md:w-auto bg-[#1a1a1a] rounded-lg shadow-md text-white flex flex-col"
                    >
                        <img
                            src={pooja.image}
                            alt={pooja.title}
                            className="h-[300px] w-[600px] md:w-full object-cover rounded-t-lg"
                        />
                        <div className="p-4 flex flex-col flex-1">
                            <h5 className="text-lg font-semibold">{pooja.title}</h5>
                            <p className="text-white text-sm mt-2">{pooja.description}</p>

                            <div className="flex flex-wrap gap-1 mt-2">
                                {pooja.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className="text-gray-400 text-xs mt-2">{pooja.duration}</p>

                            <div className="flex items-center gap-4 p-4  rounded-lg">
                                {/* Book Ritual Button */}
                                <Link
                                    href="/contact"
                                    className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold text-center"
                                >
                                    Book Ritual
                                </Link>

                                {/* Phone Icon */}
                                <Link
                                    href="tel:+1(929) 513-3283"
                                    className="flex items-center justify-center w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full"
                                >
                                    <FaPhoneAlt className="text-white text-lg" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SacredPooja;
