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
			
		</section>
	);
};

export default StatSection;
