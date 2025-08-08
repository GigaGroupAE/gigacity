"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCity } from "react-icons/fa";
import { HiOutlineMap } from "react-icons/hi";
import { GiGreenPower } from "react-icons/gi";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function MasterPlan() {
  return (
    <section className="bg-gradient-to-b from-white via-[#f9fafb] to-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Master Plan of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Giga City
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              The Master Plan of Giga City creates a balanced mix of modern
              living, business opportunities, and lush landscapes. Designed for
              seamless connectivity and a sustainable future.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-2xl shadow-2xl"
          >
            <Image
              src="/giga-city-masterplan.jpg"
              alt="Giga City Master Plan"
              width={600}
              height={400}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          <FeatureCard
            icon={<FaCity className="w-10 h-10 text-yellow-500" />}
            title="Mixed-Use Zones"
            description="Residential, commercial, and leisure areas in perfect balance."
          />
          <FeatureCard
            icon={<HiOutlineMap className="w-10 h-10 text-yellow-500" />}
            title="Seamless Connectivity"
            description="Integrated transport networks for effortless travel."
          />
          <FeatureCard
            icon={<GiGreenPower className="w-10 h-10 text-yellow-500" />}
            title="Eco-Friendly Design"
            description="Green energy solutions and sustainable living."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white border border-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
