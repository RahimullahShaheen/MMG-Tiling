import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import ServiceHero from "./ServiceHero";
import WorkingProcess from "../Components/WorkingProcess";
import ServiceDetailSection from "./TileServiceDetailSection";
import Footer from "../Components/Footer";



export default function ContactInfo(){
    return(
        <>
                <Navbar/>
                <ServiceHero/>
                <ServiceDetailSection/>
                {/* <WorkingProcess/> */}
                <Footer/>
        </>
    )
}

