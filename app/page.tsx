
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Partners from "@/components/sections/Partners";
import WhyChoose from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import About from "@/components/sections/About";
import CTA from "@/components/sections/CTA"
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import FloatingButtons from "@/components/common/FloatingButtons";

export default function Home() {
  return (
    <>

      <Hero />
      <Features />
      <About />
      <Partners />
      <Services />
      <Products />
      <WhyChoose />
      <Testimonials />
      <CTA />
      <Contact />
      {/* Google Map */}

<div className="mt-20">

<div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-xl">

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.7683842239794!2d74.52224727408499!3d28.426244893421188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3914f5130e6c93dd%3A0xff3bdc9132fb5952!2sNeha%20solar%20suppliers%20%7C%20Solar%20Panel%20%7C%20Solar%20Inverter%20%7C%20Solar%20Inverter%20Battery%20%7C%20Agriculture%20Solar%20Pump%20%7C%20Solar%20energy%20Company!5e0!3m2!1sen!2sin!4v1782896967335!5m2!1sen!2sin"
    width="100%"
    height="500"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="border-0"
  />
 

</div>

</div>
      <Footer /> 
      <FloatingButtons />
    </>
  );
}