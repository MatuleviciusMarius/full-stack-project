import React from "react";
import MainSection from "../MainSections/MainSection/MainSection";
import SectionAbout from "../MainSections/SectionAbout/SectionAbout";
import CTASection from "../MainSections/CTASection/CTASection";
import AboutMeSection from "../MainSections/AboutMeSection/AboutMeSection";

export default function Main() {
  return (
    <main>
      <MainSection />
      <SectionAbout />
      <CTASection />
    </main>
  );
}
