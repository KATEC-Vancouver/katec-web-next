'use client';

import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setIsSuccess(null);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      console.log('Email sent:', result);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

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
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-4 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-gray-200"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded w-full mb-4 focus:outline-none focus:ring focus:ring-gray-200"
            required
          />
          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded w-full mb-6 focus:outline-none focus:ring focus:ring-gray-200"
            required
          ></textarea>
          <button
            type="submit"
            className={`w-full py-3 ${isSending ? 'bg-gray-400' : 'bg-black'} text-white font-semibold rounded hover:bg-gray-800 transition`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
        {isSuccess === true && (
          <p className="text-green-500 mt-4">Email sent successfully!</p>
        )}
        {isSuccess === false && (
          <p className="text-red-500 mt-4">Failed to send email. Please try again later.</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
