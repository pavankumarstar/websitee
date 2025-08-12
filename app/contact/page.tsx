"use client";
import { useState } from "react";

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
    const phoneNumber = "19295133283"; // WhatsApp format without + or spaces
    const text = `Name: ${form.name}%0ASubject: ${form.subject}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <main className="bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        
        
        {/* Left - Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Leave A Message</h2>
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Right - Map */}
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
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
          <div className="absolute top-6 left-6 bg-white p-4 shadow-lg rounded-lg w-68">
            <h3 className="text-lg font-bold">Master Krishna</h3>
            <p className="text-sm text-gray-500 mb-3">Astrology</p>
            <p className="text-gray-700 mb-2">📍 213 Lexington Ave, Jersey City, NJ 07304</p>
            <p className="text-gray-700 mb-2">✉️ psychicsaikrishna46@gmail.com</p>
            <a href="tel:+12034788920" className="text-blue-600 hover:underline">
              📞 +1(929) 513-3283
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}
