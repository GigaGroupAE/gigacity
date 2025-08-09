"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact-us" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bg-white w-full top-0 z-[9999] transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-white/60 backdrop-blur-lg shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-green-800">
          Giga City
        </Link>

        <div className="hidden lg:flex space-x-8">
          {navLinks.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="text-gray-800 font-medium hover:text-green-700 transition"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="lg:hidden flex items-center justify-center w-10 h-10 bg-green-100 text-green-800 rounded-full"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white/40 backdrop-blur-xl z-[9998] flex justify-center items-center lg:hidden"
          >
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-lg w-80 flex flex-col space-y-6"
            >
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg text-gray-900 font-semibold hover:text-green-700 transition"
                >
                  {item.name}
                </Link>
              ))}

              <motion.button
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-6 px-6 py-2 bg-green-700 hover:bg-green-800 text-white rounded-full transition"
              >
                Close Menu
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
