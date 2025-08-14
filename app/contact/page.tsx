"use client";
import { useState } from "react";
import ContactInfo from "../components/ContactInfo";
import Breadcrumb from "../components/Breadcrumb";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const phoneNumber = "19295133283";
    const text = `Name: ${form.name}%0ASubject: ${form.subject}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="bg-gradient-to-br from-[#f5ecd6] via-[#f8fafc] to-[#e7e3d4] min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-center min-h-[340px] md:min-h-[420px] bg-center bg-cover"
        style={{
          backgroundImage: "url('/images/Contact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full flex flex-col items-center justify-center py-12">
          <Breadcrumb />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-lg md:text-2xl text-yellow-200 mb-4 text-center max-w-2xl">
            Reach out for guidance, appointments, or any questions. We’re here to
            help you!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 mt-10 px-4">
        {/* Left - Contact Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-2xl p-8 border-l-8 border-yellow-400">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Leave A Message
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              ></textarea>
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:from-green-600 hover:to-green-800 transition"
              >
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>

        {/* Right - Map & Contact Card */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl flex items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.867358540147!2d-74.0885688241567!3d40.720936371392305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2512f9d218b05%3A0x84d5aca66c558957!2s213%20Lexington%20Ave%2C%20Jersey%20City%2C%20NJ%2007304%2C%20USA!5e0!3m2!1sen!2sin!4v1755001356242!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* Contact Card Overlay */}
          <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-lg p-6 shadow-xl rounded-xl w-80 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-gray-800 mb-1">
              Master Krishna
            </h3>
            <p className="text-sm text-yellow-700 mb-3 font-semibold">
              Astrology
            </p>
            <p className="text-gray-700 mb-2">
              📍 213 Lexington Ave, Jersey City, NJ 07304
            </p>
            <p className="text-gray-700 mb-2">
              ✉️ psychicsaikrishna46@gmail.com
            </p>
            <a
              href="tel:+19295133283"
              className="text-green-700 font-bold hover:underline"
            >
              📞 +1 (929) 513-3283
            </a>
          </div>
        </div>
      </div>
      <ContactInfo />
    </main>
  );
}
