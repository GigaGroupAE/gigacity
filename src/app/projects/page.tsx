"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

interface Project {
  title: string;
  description: string;
  image: string;
}

const iconicProjects: Project[] = [
  {
    title: "Goldcrest Views Islamabad",
    description:
      "Seven 40-storey towers with penthouses, studios, and 1–4-bedroom apartments, offering award-winning luxury in DHA Phase II.",
    image: "/gigacity9.webp",
  },
  {
    title: "Goldcrest Highlife",
    description:
      "A 3-tower high-rise combining modern design and prime DHA II location, with rooftop amenities and flexible terms.",
    image: "/highlife.webp",
  },
  {
    title: "Giga Mall & Extension",
    description:
      "The largest urban hub—shopping, leisure, hotels, cinema, and a skyline mosque brought together under one roof.",
    image: "/GME.webp",
  },
  {
    title: "Giga Boutique Mall",
    description:
      "An exclusive commercial destination with curated retail spaces in the heart of Giga City.",
    image: "/boutique-mall.webp",
  },
];

const ongoingProjects: Project[] = [
  {
    title: "Goldcrest Commercial",
    description:
      "A nine-story commercial hub with retail, medical facilities, food court, and mobile market, located next to Giga Mall.",
    image: "/goldcrest-commercial.webp",
  },
  {
    title: "Giga Business Complex",
    description:
      "State-of-the-art office spaces designed to launch careers and businesses into success.",
    image: "/Giga_BusinessC.jpeg",
  },
  {
    title: "Central Palace Residence",
    description:
      "Affordable yet luxurious apartments in the heart of Giga City, surrounded by 2000+ delivered units.",
    image: "/Central-Palace-Residence-2.webp",
  },
];

const deliveredProjects: Project[] = [
  {
    title: "El Cielo I & II",
    description:
      "Premium apartment complex with three tiers (premium, plus, executive), nearly complete and highly sought-after.",
    image: "/elcielo.webp",
  },
  {
    title: "Lignum Tower",
    description:
      "Blends modern high-rise living and terrace-style comfort, with elite amenities and sophisticated design.",
    image: "/lignum-tower.webp",
  },
  {
    title: "World Trade Center Islamabad",
    description:
      "Mixed-use hub combining a mall, offices, and hotel, operational since 2016.",
    image: "/wtc.webp",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white/60 via-green-50/40 to-white/60 backdrop-blur-xl text-gray-800">
      <div className="relative w-full h-[90vh] flex justify-end items-end text-center">
        <div
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/nightview-giga-downtown.jpg')`,
          }}
        ></div>

        <div className="z-10 relative md:right-20 right-10 bottom-8 md:bottom-20 w-10/12 md:w-1/3 bg-white/30 backdrop-blur-md bg-opacity-50 p-6 rounded-lg">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-start md:text-4xl font-bold text-white font-poppins"
          >
            <span className="text-green-300">Our Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-lg mt-4 text-start text-gray-300 font-poppins"
          >
            Explore the legacy, innovation, and impact of Giga City&apos;s
            developments.
          </motion.p>
        </div>
      </div>

      <Section title="Iconic Projects" projects={iconicProjects} />
      <Section title="Ongoing Projects" projects={ongoingProjects} />
      <Section title="Delivered Projects" projects={deliveredProjects} />
    </div>
  );
}

function Section({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <section className="relative w-full py-28 px-6 md:px-20 bg-gradient-to-r from-white via-green-50 to-green-100 overflow-hidden">
      <h2 className="text-4xl font-bold text-green-800 mb-12 drop-shadow-md">
        {title}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white/40 border border-white/30 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden hover:shadow-2xl transition cursor-pointer"
          >
            <div className="relative w-full h-52 md:h-48">
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2 drop-shadow-sm">
                {proj.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {proj.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
