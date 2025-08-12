"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-white/70 to-green-100/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left: Contact Form */}
        <motion.div
          className="bg-white/40 backdrop-blur-md rounded-2xl p-8 shadow-md border border-white/30 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition"
              >
                Send Message
              </button>
            </form>
          ) : (
            <motion.div
              className="text-green-800 font-semibold text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Thank you for reaching out! We will get back to you shortly.
            </motion.div>
          )}
        </motion.div>

        {/* Right: Heading + Description */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
            Let’s Talk About <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Giga City
            </span>
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you’re ready to invest, need more details, or just want to
            speak with an expert — we’re here to help. Fill out the form and our
            team will get in touch with you shortly.
          </p>
          <ul className="text-gray-700 space-y-2">
            <li>📍 On-ground team ready to assist</li>
            <li>📞 +92 51 111 786 123</li>
            <li>📧 sales@gigagroup.com</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
