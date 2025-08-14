"use client";

import React, { useRef } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";

const items = [
	{
		title: "Love Marriage",
		img: "/images/service/Lovemarriage.jpg",
		link: "/services/love-marriage",
		desc: "Expert guidance on love marriage and relationship alignment.",
	},
	{
		title: "Love Problem",
		img: "/images/service/Loveproblem.jpg",
		link: "/services/love-problem",
		desc: "Resolve misunderstandings and restore harmony in love life.",
	},
	{
		title: "Black Magic Removal",
		img: "/images/service/Black.jpg",
		link: "/services/black-magic",
		desc: "Expert guidance on black magic removal.",
	},
	{
		title: "Black Eye",
		img: "/images/service/evil.jpg",
		link: "/services/evil-eye",
		desc: "Expert guidance on evil eye removal.",
	},
	{
		title: "Business Problem",
		img: "/images/service/Business.jpg",
		link: "/services/business-problem",
		desc: "Expert guidance on business problems.",
	},
	{
		title: "Family Problem",
		img: "/images/service/family.jpg",
		link: "/services/family-problem",
		desc: "Expert guidance on family problems.",
	},
	{
		title: "Negative Energy",
		img: "/images/service/Negative.jpg",
		link: "/services/negative-energy",
		desc: "Expert guidance on negative energy.",
	},
	{
		title: "Palm Reading",
		img: "/images/service/palm.jpg",
		link: "/services/Plam-reading",
		desc: "Expert guidance on palm reading.",
	},
	{
		title: "Tarot Reading",
		img: "/images/service/taro.jpg",
		link: "/services/tarot-reading",
		desc: "Expert guidance on tarot reading.",
	},
	{
		title: "Health Problem",
		img: "/images/service/Helath.jpg",
		link: "/services/health-problem",
		desc: "Expert guidance on health problems.",
	},
];

export default function Cards() {
	const swiperRef = useRef<SwiperType | null>(null);

	return (
		<div className="relative z-10 bg-gradient-to-b from-orange-50 to-white py-14 px-4 md:px-8">
			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
					Feature Services
				</h1>
				<p className="text-gray-600 mt-3 text-sm md:text-base">
					Astrology is a map to your destiny — let’s explore it.
				</p>
			</div>

			{/* Swiper */}
			<Swiper
				modules={[Autoplay]}
				spaceBetween={24}
				loop
				autoplay={{ delay: 1000, disableOnInteraction: false }}
				speed={3000}
				grabCursor
				onSwiper={(swiper) => (swiperRef.current = swiper)}
				breakpoints={{
					320: { slidesPerView: 1.2 },
					640: { slidesPerView: 2.2 },
					1024: { slidesPerView: 4 },
				}}
			>
				{items.map((item, index) => (
					<SwiperSlide key={index}>
						<motion.div
							className="relative rounded-3xl p-[2px] bg-gradient-to-tr from-yellow-300 via-orange-400 to-pink-400 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-yellow-200/40 transition"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							viewport={{ once: true }}
							onMouseEnter={() => swiperRef.current?.autoplay.stop()}
							onMouseLeave={() => swiperRef.current?.autoplay.start()}
						>
							<div className="bg-white/60 backdrop-blur-xl rounded-3xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-transform duration-300 shadow-xl border-l-4 border-yellow-400">
								{/* Image */}
								<div className="relative w-full h-48">
									<Image
										src={item.img}
										alt={item.title}
										fill
										className="object-cover rounded-t-3xl"
										sizes="(max-width: 768px) 100vw, 33vw"
										loading="lazy"
									/>
								</div>

								{/* Text */}
								<div className="flex flex-col flex-grow p-5">
									<h2 className="text-lg font-bold text-gray-900">
										{item.title}
									</h2>
									<p className="text-sm text-gray-600 flex-grow mt-2">
										{item.desc}
									</p>

									{/* Buttons */}
									<div className="mt-4 flex items-center justify-between">
										<Link
											href={item.link}
											className="px-4 py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 text-white rounded-full text-sm font-semibold shadow-md hover:from-yellow-500 hover:to-pink-600 transition"
										>
											Learn More →
										</Link>

										<div className="flex gap-3">
											<a
												href="tel:19295133283"
												className="bg-white text-yellow-600 w-8 h-8 rounded-full flex items-center justify-center text-lg shadow ring-1 ring-yellow-200 hover:bg-yellow-50 hover:text-yellow-700 transition"
											>
												<FaPhoneAlt />
											</a>
											<a
												href="https://wa.me/19295133283"
												target="_blank"
												rel="noopener noreferrer"
												className="bg-white text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-lg shadow ring-1 ring-green-200 hover:bg-green-50 hover:text-green-700 transition"
											>
												<FaWhatsapp />
											</a>
										</div>
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
