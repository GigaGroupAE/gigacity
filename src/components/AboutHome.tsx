"use client";
import { FaMapMarkerAlt, FaCity, FaLeaf, FaMicrochip } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutGigaDowntown() {
  const highlights = [
    {
      icon: <FaMapMarkerAlt size={30} />,
      title: "Prime Location",
      desc: "Situated at the heart of Giga City, connecting business & lifestyle.",
    },
    {
      icon: <FaCity size={30} />,
      title: "Modern Urban Design",
      desc: "Blending contemporary architecture with future-ready planning.",
    },
    {
      icon: <FaLeaf size={30} />,
      title: "Green & Sustainable",
      desc: "Eco-friendly practices for a cleaner, healthier environment.",
    },
    {
      icon: <FaMicrochip size={30} />,
      title: "Smart City Infrastructure",
      desc: "Integrated technology for convenience, safety, and efficiency.",
    },
  ];

  return (
    <section className="w-full py-28 px-6 md:px-20 bg-gradient-to-r from-white via-green-50 to-green-100">
      <div className="   container mx-auto grid md:grid-cols-2 gap-12 items-center">
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
          <p className="text-gray-600 leading-relaxed">
            Located at the heart of DHA, Giga City is a world-class mixed-use
            development blending business, retail, leisure, and residential
            spaces into a single thriving community. Designed for the future,
            it’s where architecture, sustainability, and technology come
            together.
          </p>
        </motion.div>

        {/* Right Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-green-600 mb-3">{item.icon}</div>
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
