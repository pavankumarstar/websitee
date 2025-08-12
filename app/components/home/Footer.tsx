import Link from "next/link";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1e1e28] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-4">

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-[#f9a826] mb-4">
            About Us
          </h3>
          <p className="text-sm leading-relaxed">
            Master Krishna Sai offering love marriage, love problem, and palm reading
            services with trusted guidance grounded in Vedic wisdom.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-[#f9a826] mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/love-marriage" className="hover:text-white">
                Love Marriage
              </Link>
            </li>
            <li>
              <Link href="/services/black-magic" className="hover:text-white">
                Black Magic
              </Link>
            </li>
            <li>
              <Link href="/services/love-problem" className="hover:text-white">
                Love Problem
              </Link>
            </li>
            <li>
              <Link href="/services/family-problems" className="hover:text-white">
                Family Problem
              </Link>
            </li>
            <li>
              <Link href="/services/negative-energy" className="hover:text-white">
                Negative Energy
              </Link>
            </li>
            <li>
              <Link href="/services/business-problems" className="hover:text-white">
                Business Problem
              </Link>
            </li>
            <li>
              <Link href="/services/evil-eye" className="hover:text-white">
                Evil Eye
              </Link>
            </li>
            <li>
              <Link href="/services/health-problem" className="hover:text-white">
                Health Problem
              </Link>
            </li>
            <li>
              <Link href="/services/palm-reading" className="hover:text-white">
                Palm Reading
              </Link>
            </li>
            <li>
              <Link href="/services/tarot-reading" className="hover:text-white">
                Tarot Reading
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-[#f9a826] mb-4">
            Contact
          </h3>
          <ul className="text-sm space-y-2">
            <li>
              📞{" "}
              <a href="tel:+1(929) 513-3283" className="hover:text-white">
                +1(929) 513-3283
              </a>
            </li>
            <li>
              📍  213 Lexington Ave, Jersey City, NJ 07304
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-semibold text-[#f9a826] mb-4">
            Follow
          </h3>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#f9a826] rounded-full text-[#f9a826] hover:bg-[#f9a826] hover:text-white transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#f9a826] rounded-full text-[#f9a826] hover:bg-[#f9a826] hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#f9a826] rounded-full text-[#f9a826] hover:bg-[#f9a826] hover:text-white transition"
            >
              <FaYoutube />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center border-2 border-[#f9a826] rounded-full text-[#f9a826] hover:bg-[#f9a826] hover:text-white transition"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 border-t border-gray-700 mt-8 pt-4">
        © {new Date().getFullYear()} Astrology Expert. All rights reserved.
      </div>
    </footer>
  );
}
