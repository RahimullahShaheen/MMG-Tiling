import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import AboutSection from "../Components/AboutSection";
import Footer from "../Components/Footer";
import FAQ from "../Components/FAQ";
import TestimonialsSection from "../Components/TestimonialsSection";
import Seo from "../Components/Seo"


export default function ContactInfo(){
    return(
        <>
        <Seo
                title="About Master Mowers"
                description="Learn about Master Mowers, Brisbane’s trusted lawn mower and small engine repair specialists delivering reliable repairs, servicing, and honest advice across Brisbane and Logan."
              />
                <Navbar/>
                <AboutSection/>
                <TestimonialsSection/>
                <FAQ/>
                <Footer/>
        </>
    )
}

