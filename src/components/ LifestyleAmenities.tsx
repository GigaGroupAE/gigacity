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
    icon: <FaSwimmer className="text-4xl text-blue-500" />,
    title: "Swimming Pools",
    desc: "Relax and refresh in state-of-the-art pools.",
  },
  {
    icon: <FaDumbbell className="text-4xl text-red-500" />,
    title: "Fitness Centers",
    desc: "Stay active with world-class gym facilities.",
  },
  {
    icon: <FaBasketballBall className="text-4xl text-orange-500" />,
    title: "Sports Complex",
    desc: "Play, train, and enjoy competitive sports.",
  },
  {
    icon: <FaPalette className="text-4xl text-purple-500" />,
    title: "Art & Cultural Centers",
    desc: "Immerse yourself in art, music, and culture.",
  },
  {
    icon: <FaStore className="text-4xl text-pink-500" />,
    title: "Shopping Malls",
    desc: "Experience luxury and convenience in shopping.",
  },
  {
    icon: <FaUtensils className="text-4xl text-yellow-500" />,
    title: "Dining Experiences",
    desc: "Taste the world’s flavors in one place.",
  },
  {
    icon: <FaTree className="text-4xl text-green-500" />,
    title: "Parks & Trails",
    desc: "Reconnect with nature in lush green spaces.",
  },
  {
    icon: <FaSchool className="text-4xl text-indigo-500" />,
    title: "Top-Tier Schools",
    desc: "Quality education within walking distance.",
  },
  {
    icon: <FaRunning className="text-4xl text-teal-500" />,
    title: "Jogging Tracks",
    desc: "Stay fit with dedicated running paths.",
  },
];

export default function LifestyleAmenities() {
  return (
    <section className="py-28 bg-gray-50 bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Lifestyle & Amenities
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover world-class facilities that make life in Giga City
          extraordinary.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-30 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
