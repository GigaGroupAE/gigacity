"use client";
import React from "react";
import { motion } from "framer-motion";

const HeroSectionHome = () => {
  return (
    <>
      <section className="relative w-full h-screen flex justify-start items-end text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/gigaCity.mp4" type="video/mp4" />
        </video>

        <div className="z-10    relative md:left-20 left-10 bottom-8 md:bottom-20 w-10/12 md:w-1/3 bg-white/30 backdrop-blur-md bg-opacity-50  p-6 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-start md:text-4xl font-bold text-white font-poppins"
          >
            GIGACITY a modern urban hub in Islamabad.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-4 text-start text-gray-300 font-poppins"
          >
            A thriving mixed use neighborhood with shops, parks, cultural events
            and sustainable infrastructure all in the heart of DHA Phase 2.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default HeroSectionHome;
