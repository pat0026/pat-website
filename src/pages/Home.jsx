import React, { useState, useRef, useEffect } from "react";

import {
  HeroSection,
  AboutSection,
  SkillsSection,
  BackgroundSection,
  PortfolioSection,
  ServicesSection,
  ContactSection,
} from "../components/Home";
import Sidebar from "../components/Sidebar";
import DrawerLayout from "../components/DrawerLayout";

function Home() {
  return (
    <DrawerLayout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <BackgroundSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </DrawerLayout>
  );
}

export default Home;
