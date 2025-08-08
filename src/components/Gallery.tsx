"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    id: 1,
    src: "/Goldcrest-Highlife1.jpeg",
    alt: "Modern Apartments",
  },
  {
    id: 2,
    src: "/Goldcrest-Highlife2.jpeg",
    alt: "Luxury Interiors",
  },
  {
    id: 3,
    src: "/GMEPost7.jpeg",
    alt: "Community Spaces",
  },
  {
    id: 4,
    src: "/gigacity5.webp",
    alt: "Green Parks",
  },
  {
    id: 5,
    src: "/gigcity6.webp",
    alt: "Shopping & Dining",
  },
  {
    id: 6,
    src: "/GME.webp",
    alt: "Skyline Views",
    description: "Enjoy breathtaking views from the top.",
    price: "$35.99",
  },
  {
    id: 7,
    src: "/gigacity7.webp",
    alt: "Skyline Views",
    description: "Enjoy breathtaking views from the top.",
    price: "$35.99",
  },
  {
    id: 8,
    src: "/gigacity8.webp",
    alt: "Skyline Views",
    description: "Enjoy breathtaking views from the top.",
    price: "$35.99",
  },
  {
    id: 9,
    src: "/gigacity9.webp",
    alt: "Skyline Views",
    description: "Enjoy breathtaking views from the top.",
    price: "$35.99",
  },
];

export default function Gallery() {
  return (
    <section className="relative py-24  bg-gradient-to-br from-white via-green-50 to-green-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800"
        >
          Exploring Magnificence and
          <span className="text-green-600"> Elegance of Our Gallery</span>
        </motion.h2>

        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Prepare to be mesmerized as you embark on a journey through the
          magnificence and elegance of our gallery. Immerse yourself in a world
          where beauty meets luxury.
        </p>

        <div className="flex flex-col md:flex-row-reverse gap-6 mt-12">
          <div className="w-full md:w-1/2">
            <motion.div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src={galleryItems[0].src}
                alt={galleryItems[0].alt}
                width={600}
                height={300}
                className="object-cover w-full h-[300px] md:h-[370px]"
              />
            </motion.div>

            <motion.div className="relative rounded-xl overflow-hidden">
              <Image
                src={galleryItems[4].src}
                alt={galleryItems[4].alt}
                width={600}
                height={300}
                className="object-cover w-full h-[300px] md:h-[370px]"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {galleryItems.slice(1, 3).map((item, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}

              <motion.div className="relative rounded-xl overflow-hidden col-span-2">
                <Image
                  src={galleryItems[3].src}
                  alt={galleryItems[3].alt}
                  width={600}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mt-12">
          <div className="w-full md:w-1/2">
            <motion.div className="relative rounded-xl overflow-hidden mb-6">
              <Image
                src={galleryItems[6].src}
                alt={galleryItems[6].alt}
                width={600}
                height={300}
                className="object-cover w-full h-[300px] md:h-[370px]"
              />
            </motion.div>

            <motion.div className="relative rounded-xl overflow-hidden">
              <Image
                src={galleryItems[8].src}
                alt={galleryItems[8].alt}
                width={600}
                height={300}
                className="object-cover w-full h-[300px] md:h-[370px]"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {galleryItems.slice(1, 3).map((item, index) => (
                <motion.div
                  key={index}
                  className="relative rounded-xl overflow-hidden"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              ))}

              <motion.div className="relative rounded-xl overflow-hidden col-span-2">
                <Image
                  src={galleryItems[7]?.src}
                  alt={galleryItems[7]?.alt}
                  width={600}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="w-full rounded-2xl mx-auto">
            <iframe
              src="https://www.youtube.com/embed/lxOWww4vfmY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[300px] md:h-[600px] rounded-2xl"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
