"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHandshake,
  FaUsers,
  FaGlobe,
  FaWater,
  FaSolarPanel,
  FaAward,
  FaTree,
} from "react-icons/fa";
import Image from "next/image";
import { JSX, ReactNode } from "react";

export default function AboutPage(): JSX.Element {
  return (
    <section className="bg-gradient-to-br from-white/60 via-green-50/40 to-white/60 backdrop-blur-xl">
      {/* <div className="relative w-full  flex items-center justify-center">
        <Image
          src="/gigacity9.webp"
          alt="About Giga City"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
          ></motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow"
          ></motion.p>
        </div>
      </div> */}
      <div className="relative w-full h-[90vh] flex justify-end items-end text-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/gigacity9.webp')`,
          }}
        ></div>

        <div className="z-10 relative md:right-20 right-10 bottom-8 md:bottom-20 w-10/12 md:w-1/3 bg-white/30 backdrop-blur-md bg-opacity-50 p-6 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-start md:text-4xl font-bold text-white font-poppins"
          >
            About <span className="text-green-300">Giga City</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-4 text-start text-gray-300 font-poppins"
          >
            Giga City is more than just a place — it’s a vision for the future.
            Designed as a thriving hub where{" "}
            <strong>innovation meets sustainability</strong>, we blend
            cutting-edge urban planning with eco-conscious practices to create a
            city that grows with its people, not at the cost of the planet.
            Here, modern living, community spirit, and environmental care exist
            in perfect harmony.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <FeatureCard
          icon={<FaLeaf className="w-10 h-10 text-green-600" />}
          title="Our Mission"
          description="To design a city that doesn’t just stand tall, but stands for something — sustainability, innovation, and human connection. Every road, building, and park is created with purpose."
        />
        <FeatureCard
          icon={<FaGlobe className="w-10 h-10 text-green-600" />}
          title="Our Vision"
          description="To become the world’s most admired eco-smart city, where technology and nature co-exist, and every resident feels proud to call it home."
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800"
        >
          Sustainability at Giga City
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          From renewable energy to water conservation, our sustainable practices
          are built into the very DNA of Giga City — ensuring that progress
          doesn’t come at the planet’s expense.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          <FeatureCard
            icon={<FaSolarPanel className="w-10 h-10 text-green-600" />}
            title="Green Energy"
            description="Our buildings and public spaces harness solar power and other renewable energy sources, reducing dependency on fossil fuels."
          />
          <FeatureCard
            icon={<FaWater className="w-10 h-10 text-green-600" />}
            title="Water Conservation"
            description="We implement rainwater harvesting, greywater recycling, and efficient irrigation to preserve every drop."
          />
          <FeatureCard
            icon={<FaTree className="w-10 h-10 text-green-600" />}
            title="Fragrant Green Spaces"
            description="Lush parks filled with aromatic plants provide relaxation, wellness, and a constant connection to nature."
          />
          <FeatureCard
            icon={<FaLeaf className="w-10 h-10 text-green-600" />}
            title="Eco-Friendly Infrastructure"
            description="From low-energy lighting to sustainable materials, every detail is chosen with the environment in mind."
          />
          <FeatureCard
            icon={<FaAward className="w-10 h-10 text-green-600" />}
            title="Award-Winning"
            description="Our sustainability efforts have earned global recognition, setting a benchmark for modern cities."
          />
          <FeatureCard
            icon={<FaUsers className="w-10 h-10 text-green-600" />}
            title="Community Engagement"
            description="We host events and workshops to encourage eco-conscious living among our residents."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800"
        >
          Why Choose Giga City?
        </motion.h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Choosing Giga City means choosing a better lifestyle — one that’s
          future-proof, community-focused, and environmentally responsible.
        </p>
        <div className="grid md:grid-cols-3 gap-10 mt-12">
          <FeatureCard
            icon={<FaHandshake className="w-10 h-10 text-green-600" />}
            title="Trusted Developers"
            description="We deliver on promises with world-class quality and transparency."
          />
          <FeatureCard
            icon={<FaUsers className="w-10 h-10 text-green-600" />}
            title="Community First"
            description="Our designs put people at the center, fostering vibrant, inclusive spaces."
          />
          <FeatureCard
            icon={<FaLeaf className="w-10 h-10 text-green-600" />}
            title="Sustainable Living"
            description="Live in harmony with nature without sacrificing comfort or technology."
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800 text-center mb-16"
        >
          Our Journey & Core Values
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 space-y-12">
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-6">
                Our Journey
              </h3>
              <div className="space-y-8">
                {journeyEvents.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="border-l-4 border-green-400 pl-6 relative"
                  >
                    <div className="absolute -left-3 top-2 bg-green-600 rounded-full w-5 h-5 border-4 border-white"></div>
                    <time className="font-semibold text-green-800">
                      {event.year}
                    </time>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-6">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white/50 border border-white/30 p-5 rounded-2xl shadow-md hover:shadow-xl transition duration-300 backdrop-blur-md cursor-default"
                  >
                    <div className="text-green-600 text-3xl flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/gigacity8.webp"
              alt="Our Journey and Values"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        <div className="mt-24 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg order-2 md:order-1">
            <Image
              src="/gigcity6.webp"
              alt="Community Engagement"
              width={600}
              height={400}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          <div className="md:w-1/2 order-1 md:order-2">
            <h3 className="text-3xl font-bold text-green-800 mb-6">
              Why This Matters
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At Giga City, our journey and core values shape everything we do.
              They ensure we grow sustainably, innovate responsibly, and create
              a community where every resident thrives.
            </p>
            <p className="mt-4 text-gray-600">
              Join us in building the future — one where technology, nature, and
              people exist in perfect harmony.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-green-800 text-center mb-16"
        >
          Meet the Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <TeamMember
            image="/team/alex.webp"
            name="Alex Johnson"
            role="Lead Architect"
            description="Visionary behind the city's master plan, blending modern design with sustainability."
          />
          <TeamMember
            image="/team/rita.webp"
            name="Rita Singh"
            role="Sustainability Director"
            description="Passionate about green initiatives and ensuring every project honors the environment."
          />
          <TeamMember
            image="/team/michael.webp"
            name="Michael Lee"
            role="Community Manager"
            description="Fostering connections, organizing events, and building the heart of Giga City."
          />
        </div>
      </div> */}
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white/50 border border-white/30 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 backdrop-blur-md cursor-default"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </motion.div>
  );
}

// function TeamMember({
//   image,
//   name,
//   role,
//   description,
// }: {
//   image: string;
//   name: string;
//   role: string;
//   description: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//       viewport={{ once: true }}
//       className="bg-white/50 border border-white/30 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 backdrop-blur-md cursor-default text-center"
//     >
//       <div className="overflow-hidden rounded-full w-32 h-32 mx-auto mb-4 shadow-lg">
//         <Image
//           src={image}
//           alt={name}
//           width={128}
//           height={128}
//           className="object-cover w-full h-full"
//           priority
//         />
//       </div>
//       <h4 className="text-xl font-semibold text-green-800">{name}</h4>
//       <p className="text-green-600 italic mb-4">{role}</p>
//       <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
//     </motion.div>
//   );
// }

const journeyEvents = [
  {
    year: "2020",
    title: "Conceptualization",
    description:
      "The idea of Giga City was born from a desire to rethink urban living.",
  },
  {
    year: "2022",
    title: "Planning & Design",
    description:
      "Collaborations with architects and environmentalists shaped the blueprint.",
  },
  {
    year: "2024",
    title: "Construction Begins",
    description:
      "Groundbreaking ceremony marked the start of our sustainable city build.",
  },
  {
    year: "2026",
    title: "Community Launch",
    description:
      "Opening of first residential areas with eco-friendly amenities.",
  },
];

const coreValues = [
  {
    icon: <FaLeaf />,
    title: "Sustainability",
    description: "We put the planet first in everything we do.",
  },
  {
    icon: <FaHandshake />,
    title: "Integrity",
    description: "Transparency and honesty guide our development.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    description: "Fostering inclusive, connected neighborhoods.",
  },
  {
    icon: <FaGlobe />,
    title: "Innovation",
    description: "Using smart technology to enhance lives responsibly.",
  },
];
