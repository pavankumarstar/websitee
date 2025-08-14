import React from "react";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const ContactInfo: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
      
      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-white text-3xl">
          <GoLocation />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          213 Lexington Ave, Jersey City, NJ 07304
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-white text-3xl">
          <FiPhone />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
        <a
          href="tel:+1(929) 513-3283"
          className="block text-indigo-600 font-medium text-sm hover:underline"
        >
          +1(929) 513-3283
        </a>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
        <div className="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-indigo-600 text-white text-3xl">
          <MdEmail />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
        <a
          href="mailto:psychicsaikrishna46@gmail.com"
          className="block text-indigo-600 font-medium text-sm hover:underline"
        >
          psychicsaikrishna46@gmail.com
        </a>
      </div>
      
    </div>
  );
};

export default ContactInfo;
