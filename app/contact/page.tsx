'use client';

import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-50 px-4 py-10 md:px-20 pt-[100px]">
      {/* Header Text */}
      <div className="w-full max-w-6xl text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">CONTACT</h2>
      </div>

      {/* Address, Phone, Email Section */}
      <div className="w-full max-w-3xl bg-gray-50 p-8 rounded mb-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {/* Address Section */}
          
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-2xl mb-2">📍</div>
            <h3 className="text-lg font-semibold text-gray-800">ADDRESS</h3>
            <p className="text-gray-600">Vancouver, CA</p>
          </div>
         

          {/* Phone Number Section */}
          
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-2xl mb-2">📞</div>
            <h3 className="text-lg font-semibold text-gray-800">PHONE NUMBER</h3>
            <p className="text-gray-600">+1 123 456 7890</p>
          </div>
         

          {/* Email Section */}
          <div className="flex flex-col items-center">
            <div className="text-gray-500 text-2xl mb-2">✉️</div>
            <h3 className="text-lg font-semibold text-gray-800">EMAIL</h3>
            <p className="text-gray-600">info@katec.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-3xl bg-white p-8 rounded shadow-md mt-0">
        <form>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-4 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-gray-200"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-4 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-gray-200"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="p-4 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring focus:ring-gray-200"
          />
          <textarea
            placeholder="Message"
            rows={5}
            className="p-4 border border-gray-300 rounded w-full mb-6 focus:outline-none focus:ring focus:ring-gray-200"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
