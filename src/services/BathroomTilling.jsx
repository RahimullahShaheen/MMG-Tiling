import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Components/Navbar";
import ServiceHero from "./ServiceHero";
import WorkingProcess from "../Components/WorkingProcess";
import ServiceDetailSection from "./TileServiceDetailSection";
import Bathroom from "../services/BathroomServicesDetail";
import Footer from "../Components/Footer";



export default function ContactInfo(){
    return(
        <>
                <Navbar/>
                <ServiceHero/>
                <Bathroom/>
                <Footer/>
        </>
    )
}

