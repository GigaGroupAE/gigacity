"use client";

import { FaMapMarkerAlt, FaCity, FaLeaf, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutGigaDowntown() {
  const highlights = [
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: "Prime Location",
      desc: "Located in the heart of Giga City, connecting you to business, leisure, and lifestyle effortlessly.",
    },
    {
      icon: <FaCity size={30} />,
      title: "Modern Urban Design",
      desc: "Future-ready planning meets sleek, contemporary architecture.",
    },
    {
      icon: <FaLeaf size={30} />,
      title: "Green & Sustainable",
      desc: "Eco-conscious living with green spaces and clean energy practices.",
    },
    {
      icon: <FaMicrochip size={30} />,
      title: "Smart City Infrastructure",
      desc: "Technology-integrated for convenience, safety, and efficiency.",
    },
  ];

  return (
    <section className="relative w-full py-28 px-6 md:px-20 bg-gradient-to-r from-white via-green-50 to-green-100 overflow-hidden">
      {/* Optional Background Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-green-200 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            animate={{ opacity: [0, 1], y: [20, 0] }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-green-600">Giga City</span>
          </motion.h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Giga City blends innovation, sustainability, and smart design in the
            heart of DHA — a future-ready community where living, working, and
            thriving come together.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 rounded-xl bg-white/30 backdrop-blur-lg border border-transparent hover:border-green-400 hover:shadow-green-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-green-600 mb-3 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
