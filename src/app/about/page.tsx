import AboutMain from "@/components/AboutMain";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "About Giga City Islamabad: Sustainability, Innovation & Modern Living",
  description:
    "Learn about Giga City Islamabad, a cutting-edge urban destination blending eco-friendly designs, smart technology, and sustainable living. Discover its mission, vision, journey, and commitment to creating a future-ready, thriving community in the heart of DHA Phase 2.",
};

const page = () => {
  return (
    <main>
      <AboutMain />
    </main>
  );
};

export default page;
