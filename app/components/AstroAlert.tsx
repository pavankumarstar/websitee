"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const AstroAlert: React.FC = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const router = useRouter();

 useEffect(() => {
  let timer: NodeJS.Timeout;

  if (showAlert) {
    // Only start timer if no input is focused
    const activeElement = document.activeElement;
    if (
      activeElement?.tagName !== "INPUT" &&
      activeElement?.tagName !== "TEXTAREA"
    ) {
      timer = setTimeout(() => {
        setShowAlert(false);
      }, 7000);
    }
  }

  return () => clearTimeout(timer);
}, [showAlert]);


  const handleClose = () => {
    setShowAlert(false);
    router.push("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = () => {
    const { name, phone, subject, message } = formData;
    const text = `🌟 *Astro Assistance Request* 🌟\n\nName: ${name}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/19295133283?text=${encodeURIComponent(
      text
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <AnimatePresence>
      {showAlert && (
        <>
          {/* Blur Background */}
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-black/50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Alert Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                       bg-amber-50 text-gray-800 p-6 rounded-xl shadow-2xl 
                       max-w-md w-full z-50 border border-amber-200"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-red-500 text-2xl font-bold hover:scale-125 transition-transform"
            >
              &times;
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-center mb-2">AstroAlert</h2>
            <p className="text-center text-sm font-medium mb-4">
              🌟 Divine Assistance in USA – Available in All Regions 🌍
            </p>

            {/* Form Fields */}
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              ></textarea>
            </div>

            {/* Send Button */}
            <div className="mt-5 flex justify-center">
              <button
                onClick={handleWhatsAppSend}
                className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-lg shadow-lg 
                           animate-pulse hover:scale-105 transition-transform"
              >
                📩 Send via WhatsApp
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AstroAlert;
