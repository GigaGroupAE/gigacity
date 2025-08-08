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
        "Awarded the “Best High-rise Development Award 2008” in Dubai, Giga Group is proud to bring the upgraded version of the Icon of Dubai to DHA Islamabad. Goldcrest Views comprises seven 40-story stunning high-risers having penthouses, studio apartments, 1, 2, 3, and 4 bedroom ultra-luxury modern apartments, catering to all your needs for a luxurious life.",
      button: "Learn More",
      image: "/goldcrestviewsProject.webp",
    },
    {
      title: "Goldcrest Commercial",
      description:
        "A nine-story commercial project in Giga City, DHA Phase 2, Islamabad, offering premium retail and medical spaces. It features a dedicated Medical Hub, the Kapra Center, a mobile market, and a vibrant food court, designed to serve a diverse range of businesses. With smart amenities, 24/7 security, and high rental yields, it's a prime investment. Located along Main GT Road, near Giga Mall, it ensures heavy footfall and easy access. Booking starts at just 20% in this pre-launch opportunity.",
      button: "Learn More",
      image: "/goldcrest-commerical.webp",
    },
    {
      title: "Giga Business Complex",
      description:
        "The best gift one can present to their loved ones is a promising future. Giga Group is coming up with a massive opportunity for you to secure the future of those you love the most. A launching pad for dreams to take flight and ambitions to soar. This time it’s not about corporate investments – this time, its about the investment you make for your heart!",
      button: "Learn More",
      image: "/Giga_BusinessC.webp",
    },
    {
      title: "Giga Mall and its Extension",
      description:
        "After the success of Giga Mall, the Giga Mall Extension will rise 30 floors and include shopping, entertainment, leisure, hotels, a mosque with skyline views, cinema, kids’ play areas, and more, becoming the urban hub of the twin cities.",
      button: "Learn More",
      image: "/GME.webp",
    },
    {
      title: "Central Palace Residence",
      description:
        "An affordable residential project in the heart of Islamabad. Located at the prime location of Giga City, DHA Phase 2, right next to the main GT road and in the center of 2000+ delivered apartments. Apartments in Central Palace Residence are dream luxury homes with luxury fixtures & finishes. The unique style and decorative details will distinguish the luxury apartments of Central Palace Residence from other projects.",
      button: "Learn More",
      image: "/Central-Palace-Residence-2.webp",
    },
    {
      title: "Goldcrest Highlife",
      description:
        "Giga Group is proud to bring another farsighted residential project, Goldcrest Highlife. Centrally located in DHA 2 Islamabad, Goldcrest Highlife is a planned 3-tower residential development offering exceptional views of the verdant greens surrounding the locality. The project provides excellent features, fixtures, and lifestyle choices that were previously unheard of in Pakistan.",
      button: "Learn More",
      image: "/highlife.webp",
    },
    {
      title: "World Trade Center Islamabad",
      description:
        "Give your business a “Home” at a prestigious business location. Giga Group is now offering office space in the World Trade Center Islamabad. You can get your office space in very flexible layouts and an easy 18-month installment plan.",
      button: "Learn More",
      image: "/GME.webp",
    },
  ];
  const truncateText = (text: string, limit: number): string =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="max-w-7xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-green-800"
        >
          Ongoing Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              {/* Background Image */}
              <div className="relative w-full h-[500px]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent text-white p-4 transition-all duration-500 group-hover:top-0 group-hover:via-black/90 group-hover:from-black/90 flex flex-col justify-end">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200">
                  {truncateText(project.description, 200)}
                </p>

                <div className="hidden group-hover:block mt-2 text-sm text-gray-200">
                  {project.description}
                </div>
                {/* 
                <button className="mt-3 inline-block px-4 py-2 bg-green-700 rounded-full hover:bg-green-800 transition">
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
