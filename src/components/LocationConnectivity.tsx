"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPlane, FaCar, FaBuilding, FaHospital } from "react-icons/fa";

const connectivityData = [
  {
    icon: FaPlane,
    title: "Proximity to Airport",
    distance: "Only 50 to 60 minutes from the airport",
  },
  {
    icon: FaCar,
    title: "Easy Highway Access",
    distance: "10 minutes to major highway access",
  },
  {
    icon: FaBuilding,
    title: "Business & Education Hub",
    distance: "15 minutes to top schools and colleges",
  },
  {
    icon: FaHospital,
    title: "Nearby Healthcare Facilities",
    distance: "25-30 minutes to top hospitals",
  },
];

export default function LocationConnectivity() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
      {/* Decorative Blurs */}
      <div className="absolute top-[10%] left-[-5%] w-[200px] h-[200px] bg-green-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[220px] h-[220px] bg-green-300 opacity-10 rounded-full blur-2xl z-0" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-white/30 backdrop-blur-lg"
        >
          <iframe
            title="Giga City Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d909.0173188223291!2d73.14927878905658!3d33.52394998535204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfede178763c77%3A0x2b4d9c562617db56!2sBlock%2014%20Giga%20Downtown%20Residency!5e1!3m2!1sen!2s!4v1754672955073!5m2!1sen!2s"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Location & <span className="text-green-600">Connectivity</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Perfectly positioned in the heart of DHA Phase 2, Giga City offers
            seamless access to everything that matters. Whether you’re heading
            to the airport, connecting to major highways, commuting to the
            business district, or enjoying nearby recreational spots, every
            destination is just minutes away. With its strategic location, Giga
            City combines urban convenience with an elevated lifestyle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {connectivityData.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="p-5 rounded-xl bg-white/30 border border-white/20 shadow-lg backdrop-blur-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-4"
                >
                  <Icon className="w-8 h-8 text-green-600" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.distance}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
