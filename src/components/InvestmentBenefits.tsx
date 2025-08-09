"use client";

import { motion } from "framer-motion";
import {
  FaChartLine,
  FaDollarSign,
  FaBuilding,
  FaShieldAlt,
  FaGlobeAmericas,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaChartLine className="text-green-600 w-6 h-6" />,
    title: "High ROI Potential",
    description:
      "Strategically located for strong capital appreciation and rental yields.",
  },
  {
    icon: <FaDollarSign className="text-green-600 w-6 h-6" />,
    title: "Affordable Payment Plans",
    description: "Flexible installment options designed to fit every budget.",
  },
  {
    icon: <FaBuilding className="text-green-600 w-6 h-6" />,
    title: "Trusted Developer",
    description:
      "Developed by Giga Group with a proven track record of successful projects.",
  },
  {
    icon: <FaShieldAlt className="text-green-600 w-6 h-6" />,
    title: "Secure Investment",
    description:
      "Legal protections and transparent processes to safeguard your investment.",
  },
  {
    icon: <FaGlobeAmericas className="text-green-600 w-6 h-6" />,
    title: "Prime Location",
    description:
      "Situated in a rapidly developing urban hub with excellent connectivity.",
  },
];

export default function InvestmentBenefits() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
      {/* Decorative blurred glow */}
      <div className="absolute -top-20 right-0 w-72 h-72 bg-green-200 opacity-20 rounded-full blur-3xl z-0" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        {/* Left: Title and list */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-800 mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            Why Invest in Giga City?
          </motion.h2>

          <motion.p
            className="text-gray-700 text-lg mb-10 max-w-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Discover the compelling reasons that make Giga City an ideal
            investment opportunity in Pakistan’s real estate market.
          </motion.p>

          <div className="space-y-6">
            {benefits.map(({ icon, title, description }, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mt-1">{icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right: Floating Card */}
        <motion.div
          className="relative w-full h-[400px] bg-white/30 backdrop-blur-xl border border-white/20 shadow-lg rounded-3xl p-10 flex flex-col justify-center items-start"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* <FaChartLine className=" text-green-600 mb-4" /> */}
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Portfolio Diversification
          </h3>
          <p className="text-gray-600 text-base mb-4">
            Giga City Islamabad presents a unique opportunity for portfolio
            diversification, offering a mix of residential, commercial, and
            leisure investments within one master-planned community. From luxury
            apartments and premium business centers to high-footfall shopping
            malls and entertainment hubs, investors can spread risk while
            tapping into multiple revenue streams. This diverse asset mix
            ensures long-term stability, consistent returns, and growth
            potential in one of Islamabad’s most sought-after urban
            destinations.
          </p>

          <button className="mt-auto px-5 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
