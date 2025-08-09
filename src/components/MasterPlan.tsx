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
    <section className="relative py-24 px-6 bg-gradient-to-b from-white via-green-50 to-green-100 overflow-hidden">
      {/* Decorative glows (optional) */}
      <div className="absolute top-[10%] left-[-5%] w-[250px] h-[250px] bg-green-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[200px] h-[200px] bg-green-300 opacity-10 rounded-full blur-2xl z-0" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Title + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Master Plan of
              <span className="text-green-600"> Giga City Islamabad</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              The Master Plan of Giga City is a visionary blueprint that
              harmoniously combines luxury apartments, dynamic business centers,
              and world-class shopping malls with lush green spaces and modern
              infrastructure. Situated in the heart of DHA Phase 2, it offers a
              vibrant mixed-use environment where residents enjoy premium
              living, thriving commercial opportunities, and endless retail and
              entertainment options. Designed with smart connectivity,
              sustainable practices, and a focus on community well-being, Giga
              City sets a new standard for urban living in Islamabad, where
              life, work, and leisure come together seamlessly.
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
              src="/master-plan.jpeg"
              alt="Giga City Master Plan"
              width={600}
              height={400}
              className="w-full h-auto transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
          <FeatureCard
            icon={<FaCity className="w-10 h-10 text-green-600" />}
            title="Mixed-Use Zones"
            description=" A harmonious blend of residential, commercial, business, and leisure spaces, creating a vibrant and self-sustaining community.
"
          />
          <FeatureCard
            icon={<HiOutlineMap className="w-10 h-10 text-green-600" />}
            title="Seamless Connectivity"
            description=" Well-planned transport networks ensure smooth and effortless access to every part of the city and beyond.
"
          />
          <FeatureCard
            icon={<GiGreenPower className="w-10 h-10 text-green-600" />}
            title="Eco-Friendly Design"
            description=" Built with green energy solutions and sustainable practices to promote healthier, environmentally conscious living.
"
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
      className="p-6 rounded-xl bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
    >
      <div className="mb-4 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
