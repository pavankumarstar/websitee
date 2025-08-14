"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Palm Reading", path: "/services/Plam-reading" },
    { name: "Black Magic", path: "/services/black-magic" },
    { name: "Love Marriage", path: "/services/love-marriage" },
    { name: "Love Problem", path: "/services/love-problem" },
    { name: "Family Problem", path: "/services/family-problem" },
    { name: "Business Problem", path: "/services/business-problem" },
    { name: "Evil Eye", path: "/services/evil-eye" },
    { name: "Negative Energy", path: "/services/negative-energy" },
    { name: "Health Problem", path: "/services/health-problem" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md bg-white/70 backdrop-blur-sm">
      {/* Top Contact Bar */}
      <div className="hidden md:block bg-gradient-to-r from-[#0b0730] to-[#0d093f] text-white text-xs md:text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-purple-400" />
              <span>213 Lexington Ave, Jersey City, NJ 07304</span>
            </div>
            <div className="flex items-center gap-1">
              <MdEmail className="text-purple-400" />
              <a href="mailto:psychicsaikrishna46@gmail.com" className="hover:underline">
                psychicsaikrishna46@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <FaPhoneAlt className="text-purple-400" />
              <a href="tel:+1(929) 513-3283" className="hover:underline">
                +1(929) 513-3283
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="sm:hidden md:inline">Social Media :</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaYoutube />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/70 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center">
  <Image
    src="/images/logo.png"
    alt="Logo"
    width={927}
    height={269}
    priority
    className="
      w-full max-w-[200px] h-auto object-contain md:h-20   /* desktop size */
      sm:w-full sm:max-w-none sm:object-left      /* mobile: full width, align left */
    "
  />
</Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="hover:text-yellow-600">Home</Link>
            <Link href="/about" className="hover:text-yellow-600">About us</Link>

            <div className="group relative">
              <button className="hover:text-yellow-600 transition-colors duration-200">Services</button>
              <div className="absolute right-0 hidden group-hover:grid grid-cols-4 gap-x-8 gap-y-3 p-3 bg-white shadow-lg w-[650px]">
                {services.map((s) => (
                  <Link key={s.name} href={s.path} className="hover:text-yellow-600 block">{s.name}</Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="hover:text-yellow-600">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-yellow-600">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[99] transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
      ></div>

      {/* Menu panel */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white shadow-lg p-4 z-[100] overflow-y-auto border-b border-gray-300 transition-transform duration-300 transform ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="flex flex-col gap-3 mt-14">
          <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2">Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="block py-2">About</Link>
          {/* Services Accordion */}
          <div>
            <button
              className="font-semibold w-full text-left py-2"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services {servicesOpen ? "▲" : "▼"}
            </button>
            {servicesOpen && (
              <div className="pl-4 flex flex-col gap-2 mt-2">
                {services.map((s) => (
                  <Link key={s.name} href={s.path} onClick={() => setMenuOpen(false)} className="block py-1">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="block py-2">Contact</Link>
        </div>
      </div>
    </header>
  );
}
