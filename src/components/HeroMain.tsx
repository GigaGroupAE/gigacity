import React from "react";
import Navbar from "./Navbar";
import HeroSectionHome from "./HeroHome";
import AboutHome from "./AboutHome";
import OngoingProjects from "./OngoingProjects";
import MasterPlan from "./MasterPlan";
import LifestyleAmenities from "./ LifestyleAmenities";
import Gallery from "./Gallery";

const HeroMain = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <HeroSectionHome />
      <AboutHome />
      <OngoingProjects />
      <MasterPlan />
      <LifestyleAmenities />
      <Gallery />
    </section>
  );
};

export default HeroMain;
