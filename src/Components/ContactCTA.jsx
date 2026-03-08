import React from "react";
import "../Assets/CSS/Components/ContactCTA.css";
import man from "../Assets/Images/man.png"


export default function ContactCtaBanner() {
  return (
    <section className="cc-wrap">
      <div className="cc-card">
        {/* LEFT */}
        <div className="cc-left">
          <h2 className="cc-title">
            Contact Us Today for a{" "}
            <span className="cc-green">Free Consultation</span> 
          </h2>

          {/* <p className="cc-sub">
           Request a Free Quote for Your Tiling Project
          </p> */}

          <a className="cc-btn" href="/contact">
            Get Free Quote <span className="cc-btnIcon">↗</span>
          </a>
        </div>

        {/* RIGHT (OVERLAPPING IMAGE LIKE THE SCREENSHOT) */}
        <div className="cc-right" aria-hidden="true">
          <img
            className="cc-worker"
            src={man}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}