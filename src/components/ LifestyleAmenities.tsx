"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaDumbbell,
  FaStore,
  FaSchool,
  FaUtensils,
  FaFootballBall,
  FaHeartbeat,
  FaShieldAlt,
  FaWifi,
  FaSolarPanel,
  FaBuilding,
  FaSwimmingPool,
  FaUsers,
  FaLeaf,
  FaCity,
} from "react-icons/fa";
import { FaBridge } from "react-icons/fa6";

const amenities = [
  {
    icon: <FaStore className="w-10 h-10 text-green-600" />,
    title: "Shopping Malls",
    description:
      "A premium retail paradise offering local and international brands under one roof.",
  },
  {
    icon: <FaCity className="w-10 h-10 text-green-600" />,
    title: "Mixed-Use Urban Hub",
    description:
      "A dynamic blend of residential, commercial, and leisure spaces for a vibrant lifestyle.",
  },
  {
    icon: <FaLeaf className="w-10 h-10 text-green-600" />,
    title: "Sky Gardens & Rooftop Lounges",
    description: "Elevated green retreats with breathtaking city views.",
  },
  {
    icon: <FaBridge className="w-10 h-10 text-green-600" />,
    title: "Sky Bridge",
    description:
      "An architectural marvel connecting towers with panoramic walkways.",
  },
  {
    icon: <FaUsers className="w-10 h-10 text-green-600" />,
    title: "Family Recreation Halls & Event Spaces",
    description:
      "Perfect venues for gatherings, celebrations, and community bonding.",
  },
  {
    icon: <FaSwimmingPool className="w-10 h-10 text-green-600" />,
    title: "Indoor Waterpark & Skywalk Bridge",
    description: "Year-round aquatic fun with adventurous elevated walkways.",
  },
  {
    icon: <FaBuilding className="w-10 h-10 text-green-600" />,
    title: "Premium Business",
    description:
      "State-of-the-art corporate spaces designed for productivity and prestige.",
  },
  {
    icon: <FaSolarPanel className="w-10 h-10 text-green-600" />,
    title: "Smart Sustainability Systems",
    description:
      "Eco-friendly infrastructure with rain harvesting system, backup power set up and solar power for a cleaner, greener future.",
  },
  {
    icon: <FaUtensils className="w-10 h-10 text-green-600" />,
    title: "Podium-Level Lifestyle Facilities",
    description:
      "Exclusive leisure, dining, and entertainment zones at your doorstep.",
  },
  {
    icon: <FaDumbbell className="w-10 h-10 text-green-600" />,
    title: "Fitness Centers",
    description:
      "Modern gyms with professional trainers and wellness programs.",
  },
  {
    icon: <FaWifi className="w-10 h-10 text-green-600" />,
    title: "High-Speed Connectivity",
    description:
      "Lightning-fast internet for work, play, and everything in between.",
  },
  {
    icon: <FaShieldAlt className="w-10 h-10 text-green-600" />,
    title: "24/7 Security & Automation",
    description:
      "Advanced two-layer surveillance and smart systems ensuring peace of mind.",
  },
  {
    icon: <FaHeartbeat className="w-10 h-10 text-green-600" />,
    title: "Family & Wellness Zones",
    description:
      "Safe, relaxing spaces dedicated to health, happiness, and togetherness.",
  },
  {
    icon: <FaSchool className="w-10 h-10 text-green-600" />,
    title: "Top-Tier Schools",
    description: "Quality education within walking distance of your home.",
  },
  {
    icon: <FaFootballBall className="w-10 h-10 text-green-600" />,
    title: "Sports and Play Areas",
    description: "Dedicated courts, fields, and playgrounds for all ages.",
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
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
