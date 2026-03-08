import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ContactInfoCards from "../Components/ContactInfoCards";
// import ContactForm from "../Components/ContactForm";
import FAQ from "../Components/FAQ";
import Seo from "../Components/Seo"


export default function ContactInfo(){
    return(
        <>
            <Seo
            title="Contact Master Mowers | Brisbane Lawn Mower Repairs"
            description="Contact Master Mowers for fast and reliable lawn mower and small engine repairs in Brisbane. Book a repair, request a quote, or speak with our team today."
            />
            <Navbar/>
            <ContactInfoCards/>
            {/* <ContactForm/> */}
            <FAQ/>
            <Footer/>
        </>
    )
}

