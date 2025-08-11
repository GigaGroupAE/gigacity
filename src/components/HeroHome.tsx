"use client";

import React from "react";
import { motion } from "framer-motion";

const HeroSectionHome = () => {
  return (
    <>
      <section className="relative w-full h-screen flex justify-start items-end text-center">
        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center">
          <video autoPlay loop muted className="w-full h-full object-cover">
            <source src="/your-video-file.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="z-10 relative md:left-20 left-10 bottom-8 md:bottom-20 w-10/12 md:w-1/3 bg-white/30 backdrop-blur-md bg-opacity-50 p-6 rounded-lg">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-start md:text-4xl font-bold text-white font-poppins"
          >
            Giga City Islamabad – The Modern Urban Landmark of Islamabad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-4 text-start text-gray-300 font-poppins"
          >
            Giga City is a vibrant, next-generation urban destination in the
            heart of DHA Phase 2, Islamabad. Designed as a thriving mixed-use
            community, it seamlessly blends premium shopping, lush green parks,
            cultural attractions, and world-class amenities. With a focus on
            sustainability and smart infrastructure, Giga City offers a dynamic
            lifestyle where business, leisure, and community living come
            together in one iconic address.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSectionHome;
