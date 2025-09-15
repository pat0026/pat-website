import AboutSection from "@/components/home/about-section";
import BackgroundSection from "@/components/home/background-section";
import ContactSection from "@/components/home/contact-section";
import HeroSection from "@/components/home/hero-section";
import PortfolioSection from "@/components/home/portfolio-section";
import ServicesSection from "@/components/home/service-section";
import SkillsSection from "@/components/home/skills-section";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      {/* <div class="relative -mt-12 bg-white dark:bg-gray-800 rounded-t-4xl"> */}
      <div className=" p-4 mt-4 mx-auto lg:max-w-screen-lg md:max-w-screen-md  sm:max-w-screen-sm flex flex-col gap-2 ">
        <AboutSection />
        <div className="divider" />
        <SkillsSection />
        <div className="divider" />
        <BackgroundSection />
        <div className="divider" />
        <PortfolioSection />
        <div className="divider" />
        <ServicesSection />
        <div className="divider" />
        <ContactSection />
      </div>
    </div>
  );
}
