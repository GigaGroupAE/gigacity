"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaSwimmer,
  FaDumbbell,
  FaStore,
  FaTree,
  FaSchool,
  FaPalette,
  FaRunning,
  FaUtensils,
  FaBasketballBall,
} from "react-icons/fa";

const amenities = [
  {
    icon: <FaSwimmer className="w-10 h-10 text-green-600" />,
    title: "Swimming Pools",
    desc: "Relax and refresh in state-of-the-art pools.",
  },
  {
    icon: <FaDumbbell className="w-10 h-10 text-green-600" />,
    title: "Fitness Centers",
    desc: "Stay active with world-class gym facilities.",
  },
  {
    icon: <FaBasketballBall className="w-10 h-10 text-green-600" />,
    title: "Sports Complex",
    desc: "Play, train, and enjoy competitive sports.",
  },
  {
    icon: <FaPalette className="w-10 h-10 text-green-600" />,
    title: "Art & Cultural Centers",
    desc: "Immerse yourself in art, music, and culture.",
  },
  {
    icon: <FaStore className="w-10 h-10 text-green-600" />,
    title: "Shopping Malls",
    desc: "Experience luxury and convenience in shopping.",
  },
  {
    icon: <FaUtensils className="w-10 h-10 text-green-600" />,
    title: "Dining Experiences",
    desc: "Taste the world’s flavors in one place.",
  },
  {
    icon: <FaTree className="w-10 h-10 text-green-600" />,
    title: "Parks & Trails",
    desc: "Reconnect with nature in lush green spaces.",
  },
  {
    icon: <FaSchool className="w-10 h-10 text-green-600" />,
    title: "Top-Tier Schools",
    desc: "Quality education within walking distance.",
  },
  {
    icon: <FaRunning className="w-10 h-10 text-green-600" />,
    title: "Jogging Tracks",
    desc: "Stay fit with dedicated running paths.",
  },
];

export default function LifestyleAmenities() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
      {/* Decorative Blur Effects (Optional) */}
      <div className="absolute top-[15%] left-[-8%] w-[200px] h-[200px] bg-green-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[220px] h-[220px] bg-green-300 opacity-10 rounded-full blur-2xl z-0" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
        >
          Lifestyle & <span className="text-green-600">Amenities</span>
        </motion.h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Discover world-class facilities that make life in Giga City
          extraordinary.
        </p>

        {/* Grid of Amenities */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
