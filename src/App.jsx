import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Preloader from "./Components/preLoader";
import "./App.css";

/** Lazy pages */
const Home = lazy(() => import("./Pages/Home"));
const ContactUs = lazy(() => import("./Pages/ContactInfo"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const TileInstallation = lazy(() => import("./services/TileInstallation"));
const BathroomTilling = lazy(() => import("./services/BathroomTilling"));
const WaterProofing = lazy(() => import("./services/WaterProofing"));
const Renovation = lazy(() => import("./services/Renovation"));


export default function App() {
  return (
    <Router>

      <main className="main-content">
        <Suspense fallback={<Preloader />}>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/contact" element={<ContactUs />} />
           <Route path="/about" element={<AboutUs />} />
           <Route path="/services/TileInstallation" element={<TileInstallation />} />
           <Route path="/services/BathroomTilling" element={<BathroomTilling />} />
           <Route path="/services/WaterProofing" element={<WaterProofing />} />
           <Route path="/services/Renovation" element={<Renovation />} />

          <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}
