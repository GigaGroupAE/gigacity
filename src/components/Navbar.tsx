"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItemsClient = [
  { name: "Home", path: "/" },
  { name: "View Application", path: "" },
  { name: "Submit Application", path: "" },
  { name: "Blogs", path: "/blogs" },
  { name: "Our Services", path: "/our-services" },
  { name: "About Us", path: "/#about-us" },
];

interface NavbarProps {
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out z-[9999] 
        ${
          isScrolled
            ? "top-0 w-full rounded-3xl bg-pink-100/40 backdrop-blur-lg shadow-lg"
            : "top-0 w-full bg-white shadow-md"
        }`}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        {/* <a
          href="/"
          className={`text-xl font-bold transition ${
            isScrolled ? "text-gray-900" : "text-gray-800 hover:text-pink-500"
          }`}
        >
          PakBritishNikkah
        </a> */}

        {/* Menu for Large Screens */}
        <div className="hidden lg:flex  items-center space-x-6">
          <ul className="flex space-x-6">
            {menuItemsClient.map((item, index) => (
              <li key={index} role="menuitem">
                <div className="transition cursor-pointer relative px-3 py-1 rounded-lg text-gray-900">
                  {item.name}
                  <motion.span
                    className="absolute inset-0 rounded-lg opacity-0"
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button>☰</button>
        {/* </Button> */}
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-white/30 backdrop-blur-md shadow-lg lg:hidden z-50 flex flex-col justify-center items-center"
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-[#F2F2F2] p-6 rounded-2xl shadow-lg w-96 flex flex-col space-y-6"
            >
              {menuItemsClient.map((item, index) => (
                <motion.a
                  key={item?.name}
                  // href={item?.path}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-xl text-gray-900  transition relative px-4 py-2 rounded-xl"
                >
                  {item?.name}
                  <motion.span
                    className="absolute inset-0 bg-white/20 backdrop-blur-md rounded-xl opacity-0"
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              <motion.button
                onClick={() => setIsMenuOpen(false)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full  transition"
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
