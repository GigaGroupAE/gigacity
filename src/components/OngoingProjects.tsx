"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  button: string;
  image: string;
}

const OngoingProjects = () => {
  const projects: Project[] = [
    {
      title: "Goldcrest Views Islamabad",
      description:
        "Winner of the Best High-Rise Development Award 2008 in Dubai, the Giga Group now brings an enhanced edition of this iconic project to Giga City Islamabad. Goldcrest Views features seven striking towers, each soaring 40 stories high, offering a variety of residences, from stylish studios to expansive 1, 2, 3, and 4-bedroom apartments, as well as lavish penthouses. Designed to meet every demand of upscale living, these modern luxury homes set a new benchmark for residential elegance in the city.",
      button: "Learn More",
      image: "/goldcrestviewsProject.webp",
    },
    {
      title: "Goldcrest Commercial",
      description: `Goldcrest Commercial is a dynamic nine-story development in Giga City, DHA Phase 2, Islamabad, offering premium retail outlets and specialized medical spaces. Featuring a dedicated Medical Hub, Kapra Center, mobile market, and a lively food court, it is designed to cater to a wide variety of businesses. With smart facilities, 24/7 security, and strong rental potential, it stands as a prime investment choice. Perfectly positioned along Main GT Road, just steps away from Giga Mall, it guarantees maximum visibility, high footfall, and seamless accessibility. Pre-launch bookings start from just 20%, making it the ideal time to invest in this high-growth commercial hub.`,
      button: "Learn More",
      image: "/goldcrest-commerical.webp",
    },
    {
      title: "Giga Mall and Its Extension",
      description: `After the outstanding success of Giga Mall, the Giga Group is unveiling the Giga Mall Extension, a 30-story landmark poised to become the ultimate mixed-use hub of Islamabad and Rawalpindi. The development will house retail, entertainment, lifestyle, and workspaces all under one roof. A stunning mosque, perched atop the building, will offer sweeping views of the twin cities. Other highlights include a next-generation cinema, children’s play zones, expansive food courts, fine dining venues, luxury hotels, and unique tourist attractions, making it a destination unlike any other in the region.`,
      button: "Learn More",
      image: "/GME.webp",
    },
    {
      title: "Central Palace Residence",
      description: `Strategically located in the heart of Giga City Islamabad, DHA Phase 2, adjacent to the Main GT Road and surrounded by more than 2,000 delivered apartments, Central Palace Residence presents an affordable yet refined residential option. These apartments are designed as dream luxury homes, complete with premium fixtures and finishes. Their distinctive architecture and intricate detailing set them apart, offering a sophisticated living experience that rivals the city’s top developments.`,
      button: "Learn More",
      image: "/Central-Palace-Residence-2.webp",
    },
    {
      title: "Goldcrest Highlife",
      description: ` Goldcrest Highlife is Giga Group’s latest luxury residential vision, set in the prime locale of Giga City Islamabad, DHA Phase 2. This elegant three-tower project offers sweeping views of lush greenery while introducing world-class features and finishes rarely seen in Pakistan. Each tower is designed with modern architecture, multi-level vehicle parking, rooftop leisure spaces, and a range of well-planned apartment layouts to suit various budgets and preferences. Goldcrest Highlife delivers a seamless blend of elegance, convenience, and elevated urban living.`,
      button: "Learn More",
      image: "/highlife.webp",
    },
    {
      title: "Giga Business Complex",
      description: ` Located on the top four floors of Giga Mall in Giga City Islamabad, DHA Phase 2, the Giga Business Complex offers premium corporate office spaces ranging from 360 to over 1,000 sq. ft. As part of the prestigious World Trade Center, it provides a strategic business address with a flexible four-quarter payment plan. Backed by the Giga Group’s trusted name, the complex is ideal for enterprises seeking strong returns, modern amenities, and an influential commercial presence in one of Islamabad’s most connected business hubs.`,
      button: "Learn More",

      image: "/Giga_BusinessC.webp",
    },
  ];

  // const truncateText = (text: string, limit: number): string =>
  //   text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
      {/* Optional floating glow background */}
      <div className="absolute top-[10%] left-[-10%] w-[300px] h-[300px] bg-green-200 opacity-20 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-[5%] right-[-10%] w-[250px] h-[250px] bg-green-300 opacity-10 rounded-full blur-2xl z-0" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-800"
        >
          Ongoing Projects
        </motion.h2>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl bg-white/30 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Image */}
              <div className="relative w-full h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Overlay Info Box */}
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white transition-all duration-500 group-hover:top-0 group-hover:via-black/90 group-hover:from-black/90 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>

                {/* Optional button - uncomment if needed */}
                {/* <button className="mt-4 inline-block self-start px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
                  {project.button}
                </button> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
