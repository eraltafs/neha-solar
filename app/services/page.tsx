import ServiceHero from "@/components/services/ServiceHero";

import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import ServiceCategories from "@/components/services/ServiceCategories";

export default function AboutPage() {
  return (
    <>
      <ServiceHero />
      <ServiceCategories />
      <CTA />

      <Contact />

      <Footer />
    </>
  );
}
