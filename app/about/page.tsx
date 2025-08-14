import Link from "next/link";
import StatsSection from "../components/about/StatsSection";
import Faq from "../components/home/Faq";
import About from "../components/about/About";

export default function AboutPage() {
  return (
    <div className="">
      <section
        className="relative bg-center bg-cover bg-no-repeat text-white flex flex-col items-center justify-center min-h-[380px] md:min-h-[480px] px-4"
        style={{
          backgroundImage: "url('/images/about/bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center">
          <div className="mb-4">
            <span className="inline-block text-yellow-400 text-4xl mb-2 animate-bounce">✦</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            About Us
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-2xl text-gray-200 mb-6">
            Let the stars speak to you. Our astrology insights reveal the path to love, success, and spiritual growth, offering clarity and inspiration for every step of your journey.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Contact Us
          </Link>
          {/* Breadcrumb navigation */}
          <nav className="mt-6 text-base md:text-lg">
            <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
        </div>

        {/* Decorative SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#fff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,16C960,11,1056,21,1152,32C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
          </svg>
        </div>
      </section>
      <About />


      <StatsSection />


      <Faq />
    </div>
  );
}
