// components/Location.tsx
import Image from "next/image";
import Faq from "../components/home/Faq";
import Link from "next/link";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const locations = [
  {
    city: "Astrologer in New Jersey",
    image: "/images/location/one1.jpg",
    description:
      "Experience personalized astrology consultations in New Jersey, guiding you through life’s challenges and opportunities.",
  },
  {
    city: "Astrologer in New York",
    image: "/images/location/second1.jpeg",
    description:
      "Offering expert astrological guidance in the heart of New York, blending tradition with modern insight.",
  },
  {
    city: "Astrologer in Boston",
    image: "/images/location/three1.jpeg",
    description:
      "Navigate your destiny with our trusted astrology services in Boston, tailored to your unique path.",
  },
  {
    city: "Astrologer in Texas",
    image: "/images/location/four1.jpeg",
    description:
      "From career choices to relationships, our Texas astrology services illuminate your journey ahead.",
  },
  {
    city: "Astrologer in California",
    image: "/images/location/five1.jpeg",
    description:
      "Find cosmic clarity under California skies with our comprehensive astrology readings.",
  },
  {
    city: "Astrologer in Alabama",
    image: "/images/location/six1.jpeg",
    description:
      "Discover the wisdom of the stars with our Alabama astrology sessions, offering clarity and guidance.",
  },
];

export default function Location() {
  return (
    <section className="bg-gradient-to-b from-[#0b0730] via-[#140d4f] to-[#0b0730] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
          Our Locations
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Wherever you are, our astrology guidance is just a visit away. Explore
          our services across multiple locations.
        </p>
      </div>

      {/* Locations Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => (
          <div
            key={loc.city}
            className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-yellow-400/20 hover:border-yellow-400/40 transition"
          >
            {/* Image */}
            <div className="relative h-56 sm:h-48 w-full overflow-hidden">
              <Image
                src={loc.image}
                alt={loc.city}
                fill
                className="object-cover transform scale-105 group-hover:scale-110 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-yellow-300">
                  {loc.city}
                </h3>
                <p className="text-gray-300 text-sm">{loc.description}</p>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/contact"
                  className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-lg font-semibold text-center text-sm transition"
                >
                  Book Consultation
                </Link>
                <Link
                  href="tel:19295133283"
                  className="flex items-center justify-center w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full transition"
                  aria-label="Call"
                >
                  <FaPhoneAlt className="text-white text-sm" />
                </Link>
                <Link
                  href="https://wa.me/19295133283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-700 rounded-full transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="text-white text-lg" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Faq />
    </section>
  );
}
