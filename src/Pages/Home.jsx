//Home page section will be imported as a component below

import Navbar from "../Components/Navbar";
import HeroSlider from "../Components/HeroSlider";
import Servicescardsection  from "../Components/ServicesCardsSection";
import ProjectSection from "../Components/ProjectSection";
import WorkingProcess from "../Components/WorkingProcess"
import WhyChooseUsSection from "../Components/WhyChooseUsSection";
import TestimonialsSection from "../Components/TestimonialsSection";
import FAQ from "../Components/FAQ";
import ContactCTA from "../Components/ContactCTA";
import Footer from "../Components/Footer"
import Seo from "../Components/Seo"
import AboutSection from "../Components/AboutSection";

//then the imported commponent name will be called in the return statement of the Home function as a Tag </>
export default function Home() {
  return (
    <>
      <Seo
        title="Master Mowers Brisbane"
        description="Professional lawn mower and equipment repair specialists across Brisbane and Logan. Fast turnaround, honest pricing, servicing, tune-ups & quality second-hand mowers."
      />
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <Servicescardsection/>
      <WhyChooseUsSection/>
      <TestimonialsSection/>
      <ProjectSection/>
      <FAQ />
      <WorkingProcess/>
      <ContactCTA/>
      <Footer />
    </>
  );
}

