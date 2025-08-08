// components/Gallery.tsx
import Image from "next/image";

const galleryImages = [
  { src: "/goldcrestviewsProject.webp", alt: "Modern Apartments" },
  { src: "/goldcrest-commerical.webp", alt: "Luxury Interiors" },
  { src: "/Giga_BusinessC.webp", alt: "Community Spaces" },
  { src: "/Central-Palace-Residence-2.webp", alt: "Green Parks" },
  { src: "/highlife.webp", alt: "Shopping & Dining" },
  { src: "/GME.webp", alt: "Skyline Views" },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-white" id="gallery">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Experience Giga City
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A glimpse into the lifestyle, architecture, and community spaces.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
