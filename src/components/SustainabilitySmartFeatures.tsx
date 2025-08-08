"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaSolarPanel,
  FaWater,
  FaRecycle,
  FaWifi,
  FaRobot,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf className="text-green-600 w-10 h-10" />,
    title: "Green Spaces & Biodiversity",
    description:
      "Extensive parks and green corridors to promote ecological balance.",
  },
  {
    icon: <FaSolarPanel className="text-green-600 w-10 h-10" />,
    title: "Solar Energy",
    description:
      "Harnessing clean, renewable energy through state-of-the-art solar panels.",
  },
  {
    icon: <FaWater className="text-green-600 w-10 h-10" />,
    title: "Water Conservation",
    description:
      "Efficient rainwater harvesting and recycling systems for sustainable use.",
  },
  {
    icon: <FaRecycle className="text-green-600 w-10 h-10" />,
    title: "Waste Management",
    description:
      "Integrated waste segregation and recycling to minimize landfill impact.",
  },
  {
    icon: <FaWifi className="text-green-600 w-10 h-10" />,
    title: "Smart Connectivity",
    description:
      "High-speed internet and IoT devices for a connected lifestyle.",
  },
  {
    icon: <FaRobot className="text-green-600 w-10 h-10" />,
    title: "Automation & AI",
    description:
      "Smart traffic systems, energy management, and safety powered by AI.",
  },
];

export default function SustainabilitySmartFeatures() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
      {/* Decorative glow elements */}
      <div className="absolute top-[10%] right-[-5%] w-[200px] h-[200px] bg-green-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[5%] left-[-10%] w-[220px] h-[220px] bg-green-300 opacity-10 rounded-full blur-2xl z-0" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Sustainability &{" "}
          <span className="text-green-600">Smart City Features</span>
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true }}
        >
          Giga City embraces a future-forward vision combining ecological
          responsibility and cutting-edge technology to create a sustainable,
          livable urban environment.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map(({ icon, title, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/30 backdrop-blur-lg p-6 rounded-2xl shadow-md border border-white/20 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
