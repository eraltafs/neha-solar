import AboutHero from "@/components/about/AboutHero";
import About from "@/components/sections/About";

// import Story from "@/components/about/Story";
import MissionVision from "@/components/about/MissionVision";
import WhyChoose from "@/components/sections/WhyChooseUs";
import Partners from "@/components/sections/Partners";
import WorkingProcess from "@/components/about/WorkingProcess";
// import Stats from "@/components/about/Stats";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <About />
      <MissionVision />
      <WhyChoose />
      <Partners />
      <WorkingProcess />
      <CTA />
      
            <Contact />
      
            <Footer /> 


</>
  );
}