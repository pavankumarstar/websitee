"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [poojaOpen, setPoojaOpen] = useState(false);


    const services = [
        { name: "Palm Reading", path: "/services/Plam-reading" },
        { name: "Black Magic", path: "/services/black-magic" },
        { name: "Love Marriage", path: "/services/love-marriage" },
        { name: "Love Problem", path: "/services/love-problem" },
        { name: "Family Problem", path: "/services/family-problem" },
        { name: "Business Problem", path: "/services/business-problem" },
        { name: "Spiritual Healing", path: "/services/spiritual-healing" },
        { name: "Evil Eye", path: "/services/evil-eye"},
        { name: "Negative Energy", path:"/services/negative-energy"},
        { name: "Health Problem", path:"/services/health-problem"}
    ];

    const poojaServices = [
        { name: "Shiva Pooja", path: "/pooja/shiva" },
        { name: "Ganesh Pooja", path: "/pooja/ganesh" },
        { name: "Kali Pooja", path: "/pooja/kali" },
        { name: "Krishna Pooja", path: "/pooja/krishna" },
    ];

    return (
        <header className="bg-white shadow-md fixed w-full top-[40px] left-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-8">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold text-yellow-600">
                    🔮 MyAstro
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <Link href="/" className="hover:text-yellow-600">Home</Link>
                    <Link href="/about" className="hover:text-yellow-600">About us</Link>

                    {/* Services Dropdown */}
                    <div className="group relative">
                        <button className="hover:text-yellow-600 transition-colors duration-200">
                            Services
                        </button>
                        <div className="absolute right-0 hidden group-hover:grid grid-cols-4 gap-x-8 gap-y-3 p-3 bg-white shadow-lg w-[650px] text-left direction-rtl">
                            {services.map((s) => (
                                <Link
                                    key={s.name}
                                    href={s.path}
                                    className="hover:text-yellow-600 transition-colors duration-200 block"
                                >
                                    {s.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Pooja Services Dropdown */}
                    <div className="group relative">
                        <button className="hover:text-yellow-600 transition-colors duration-200">
                            Pooja Services
                        </button>
                        <div className="absolute right-0 hidden group-hover:grid grid-cols-4 gap-x-8 gap-y-3 p-6 bg-white shadow-lg w-[650px] text-left direction-rtl">
                            {poojaServices.map((p) => (
                                <Link
                                    key={p.name}
                                    href={p.path}
                                    className="hover:text-yellow-600 transition-colors duration-200 block"
                                >
                                    {p.name}
                                </Link>
                            ))}
                        </div>
                    </div>


                    <Link href="/contact" className="hover:text-yellow-600">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div
                    className="fixed top-0 left-0 h-full w-[70%] bg-white shadow-md p-4 space-y-4 z-50 transition-transform duration-300"
                    style={{ transform: menuOpen ? "translateX(0)" : "translateX(-100%)" }}
                >
                    {/* Home */}
                    <Link
                        href="/"
                        onClick={() => setMenuOpen(false)}
                        className="block"
                    >
                        Home
                    </Link>

                    {/* About */}
                    <Link
                        href="/about"
                        onClick={() => setMenuOpen(false)}
                        className="block"
                    >
                        About
                    </Link>

                    {/* Services Accordion */}
                    <div>
                        <button
                            className="font-semibold w-full text-left"
                            onClick={() => setServicesOpen(!servicesOpen)}
                        >
                            Services {servicesOpen ? "▲" : "▼"}
                        </button>
                        {servicesOpen && (
                            <div className="pl-4 space-y-2 mt-2">
                                {services.map((s) => (
                                    <Link
                                        key={s.name}
                                        href={s.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="block"
                                    >
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Pooja Services Accordion */}
                    <div>
                        <button
                            className="font-semibold w-full text-left"
                            onClick={() => setPoojaOpen(!poojaOpen)}
                        >
                            Pooja Services {poojaOpen ? "▲" : "▼"}
                        </button>
                        {poojaOpen && (
                            <div className="pl-4 space-y-2 mt-2">
                                {poojaServices.map((p) => (
                                    <Link
                                        key={p.name}
                                        href={p.path}
                                        onClick={() => setMenuOpen(false)}
                                        className="block"
                                    >
                                        {p.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Contact */}
                    <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="block"
                    >
                        Contact
                    </Link>
                </div>
            )}

        </header>
    );
}
