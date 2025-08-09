"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactUsPage() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   subject: "",
  //   message: "",
  // });

  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   console.log("Form Submitted:", formData);
  // };

  return (
    <section>
      <div className="relative w-full h-[90vh] flex justify-end items-end text-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/gigacity9.webp')`,
          }}
        ></div>

        <div className="z-10 relative md:right-20 right-10 bottom-8 md:bottom-20 w-10/12 md:w-1/3 bg-white/30 backdrop-blur-md bg-opacity-50 p-6 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-start md:text-4xl font-bold text-white font-poppins"
          >
            About <span className="text-green-300">Giga City</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-4 text-start text-gray-300 font-poppins"
          >
            Giga City is more than just a place — it’s a vision for the future.
            Designed as a thriving hub where{" "}
            <strong>innovation meets sustainability</strong>, we blend
            cutting-edge urban planning with eco-conscious practices to create a
            city that grows with its people, not at the cost of the planet.
            Here, modern living, community spirit, and environmental care exist
            in perfect harmony.
          </motion.p>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}
