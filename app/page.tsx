
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Partners from "@/components/sections/Partners";
import WhyChoose from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>

      <Hero />
      <Features />
      <About />
      <Services />
      <Products />
      <WhyChoose />
      <Testimonials />
      <Partners />
      <Footer /> 
    </>
  );
}