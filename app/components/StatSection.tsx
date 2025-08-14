"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FaStar, FaRegStar } from "react-icons/fa";

const testimonials = [
	{
		name: "Jessica Moore",
		location: "Phoenix, AZ",
		image: "https://randomuser.me/api/portraits/women/12.jpg",
		rating: 5,
		text: "The birth chart reading gave me clarity I never expected. It’s like someone finally turned the lights on in my life.",
	},
	{
		name: "Michael Johnson",
		location: "Brooklyn, NY",
		image: "https://randomuser.me/api/portraits/men/44.jpg",
		rating: 4.5,
		text: "I was skeptical, but the monthly horoscope guidance has been incredibly accurate and helped me make better decisions.",
	},
	{
		name: "Samantha Lee",
		location: "Los Angeles, CA",
		image: "https://randomuser.me/api/portraits/women/65.jpg",
		rating: 5,
		text: "Absolutely loved the compatibility reading! It explained so much about my relationship patterns.",
	},
	{
		name: "David Carter",
		location: "Houston, TX",
		image: "https://randomuser.me/api/portraits/men/29.jpg",
		rating: 4,
		text: "Great insights on my Saturn return! It’s helped me embrace this transition with more confidence.",
	},
	{
		name: "Emily Nguyen",
		location: "Seattle, WA",
		image: "https://randomuser.me/api/portraits/women/39.jpg",
		rating: 5,
		text: "My solar return reading was spot on. I’m using it as a blueprint for my year ahead!",
	},
	{
		name: "Brian Anderson",
		location: "Chicago, IL",
		image: "https://randomuser.me/api/portraits/men/17.jpg",
		rating: 4.5,
		text: "The astrology blog is my daily ritual now. It always seems to speak to what I’m going through.",
	},
	{
		name: "Olivia Sanchez",
		location: "Miami, FL",
		image: "https://randomuser.me/api/portraits/women/25.jpg",
		rating: 5,
		text: "So much wisdom in these readings. I’ve grown spiritually and emotionally since I started following this site.",
	},
	{
		name: "Christopher White",
		location: "Denver, CO",
		image: "https://randomuser.me/api/portraits/men/61.jpg",
		rating: 4,
		text: "I finally understand my moon sign! This has helped me process emotions in a healthier way.",
	},
];

const StarRating = ({ rating }: { rating: number }) => {
	const fullStars = Math.floor(rating);
	const halfStar = rating % 1 !== 0;

	return (
		<div className="flex justify-center space-x-1 mt-4 text-yellow-400">
			{[...Array(fullStars)].map((_, i) => (
				<FaStar key={i} />
			))}
			{halfStar && <FaRegStar />}
		</div>
	);
};

const StatSection = () => {
	return (
		<section className="relative bg-[#0A072A] text-white py-20 px-4 overflow-hidden">
			<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-indigo-500 opacity-20 blur-3xl rounded-full pointer-events-none z-0" />
			<div className="text-center max-w-3xl mx-auto mb-16 z-10 relative">
				<p className="text-indigo-300 text-lg font-medium mb-2">
					Testimonial
				</p>
				<h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
					What My Clients Say
				</h2>
				<p className="text-indigo-100 leading-relaxed">
					Through every reading and every sign, the cosmos has whispered
					guidance — and these voices share how it changed their destiny.
				</p>
			</div>

			<Swiper
				aria-label="Client testimonials carousel"
				modules={[Pagination, Navigation, Autoplay]}
				spaceBetween={30}
				pagination={{ clickable: true }}
				navigation={true}
				loop={true}
				autoplay={{
					delay: 1000, // ⏱ Auto slide every 9 seconds
					disableOnInteraction: false, // ⏸ Keeps autoplay even after user swipes
				}}
				breakpoints={{
					0: { slidesPerView: 1 },
					768: { slidesPerView: 2 },
					1024: { slidesPerView: 3 },
				}}
				className="relative max-w-7xl mx-auto z-10"
			>
				{testimonials.map((testimonial, idx) => (
					<SwiperSlide key={idx}>
						<div className="bg-[#0F0C3A] border border-indigo-700 p-6 rounded-lg text-center h-full flex flex-col justify-between">
							<div>
								<div className="text-4xl text-indigo-400 mb-4">“</div>
								<p className="text-sm leading-relaxed text-indigo-100">
									{testimonial.text}
								</p>
							</div>
							<div>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-14 h-14 rounded-full mx-auto mt-6 mb-2 object-cover"
								/>
								<StarRating rating={testimonial.rating} />
								<h3 className="text-lg font-semibold font-serif mt-2">
									{testimonial.name}
								</h3>
								<p className="text-indigo-400 text-sm">
									{testimonial.location}
								</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Contact Bar */}
			<div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 bg-[#18143a] bg-opacity-80 rounded-2xl shadow-lg px-8 py-6 max-w-2xl mx-auto">
				<a
					href="mailto:psychicsaikrishna46@gmail.com"
					className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition font-semibold"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path d="M4 4h16v16H4z" stroke="none" />
						<path d="M4 4l8 8 8-8" />
					</svg>
					psychicsaikrishna46@gmail.com
				</a>
				<a
					href="tel:19295133283"
					className="flex items-center gap-2 text-green-300 hover:text-green-400 transition font-semibold"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path d="M22 16.92V19a2 2 0 0 1-2.18 2A19.72 19.72 0 0 1 3 5.18 2 2 0 0 1 5 3h2.09a2 2 0 0 1 2 1.72c.13 1.13.37 2.23.72 3.28a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c1.05.35 2.15.59 3.28.72A2 2 0 0 1 22 16.92z" />
					</svg>
					+1 (929) 513-3283
				</a>
				<a
					href="https://wa.me/19295133283"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center gap-2 text-green-400 hover:text-green-500 transition font-semibold"
				>
					<svg
						className="w-5 h-5"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M20.52 3.48A12 12 0 0 0 3.48 20.52l-1.32 4.84a1 1 0 0 0 1.22 1.22l4.84-1.32A12 12 0 1 0 20.52 3.48zm-8.52 17a10 10 0 1 1 10-10 10 10 0 0 1-10 10zm5.29-7.71l-2.54-1.09a1 1 0 0 0-1.13.21l-.54.54a7.72 7.72 0 0 1-3.36-3.36l.54-.54a1 1 0 0 0 .21-1.13l-1.09-2.54a1 1 0 0 0-1.13-.54A8.94 8.94 0 0 0 7 12a9 9 0 0 0 9 9 8.94 8.94 0 0 0 3.36-.54 1 1 0 0 0-.54-1.13z" />
					</svg>
					WhatsApp
				</a>
				<a
					href="mailto:psychicsaikrishna46@gmail.com?subject=Suggestion"
					className="flex items-center gap-2 text-indigo-300 hover:text-indigo-400 transition font-semibold"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						viewBox="0 0 24 24"
					>
						<path d="M12 20h9" />
						<path d="M12 4v16" />
						<path d="M4 4h16v16H4z" stroke="none" />
					</svg>
					Send Suggestion
				</a>
			</div>
		</section>
	);
};

export default StatSection;
