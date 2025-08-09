import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Giga City. All rights reserved.
        </p>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com/gigacityisb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://x.com/CityGigaIsb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/gigacityisb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/gigacityisb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://www.youtube.com/@GigaCityIslamabadOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.tiktok.com/@gigacityisb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.pinterest.com/gigacityisb/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition text-lg"
            aria-label="LinkedIn"
          >
            <FaPinterest />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
