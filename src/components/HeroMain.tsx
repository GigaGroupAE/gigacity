import React from "react";
import HeroSectionHome from "./HeroHome";
import AboutHome from "./AboutHome";
import OngoingProjects from "./OngoingProjects";
import MasterPlan from "./MasterPlan";
import LifestyleAmenities from "./ LifestyleAmenities";
import Gallery from "./Gallery";
import LocationConnectivity from "./LocationConnectivity";
import SustainabilitySmartFeatures from "./SustainabilitySmartFeatures";
import InvestmentBenefits from "./InvestmentBenefits";
import ContactForm from "./ContactForm";
import FAQ from "./FAQ";

const HeroMain = () => {
  return (
    <section>
      {/* <Navbar /> */}
      <HeroSectionHome />
      <AboutHome />
      <OngoingProjects />
      <MasterPlan />
      <LocationConnectivity />
      <LifestyleAmenities />
      <Gallery />

      <SustainabilitySmartFeatures />
      <InvestmentBenefits />
      <ContactForm />
      <FAQ />
    </section>
  );
};

export default HeroMain;
