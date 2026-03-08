import React, { useEffect, useRef, useState } from "react";
import "../Assets/CSS/Components/aboutSection.css";
import hammer from "../Assets/Images/icons/hammer.png";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`ab-wrap ${inView ? "isInView" : ""}`}>
      <div className="ab-container">
        {/* LEFT COLLAGE */}
        <div className="ab-left">
          {/* Big left person */}
          <div className="ab-card ab-leftPerson" aria-hidden="true">
            <img
              className="ab-img"
              src="https://plus.unsplash.com/premium_photo-1661902279643-b027d844cc78?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* Top image */}
          <div className="ab-card ab-topImage" aria-hidden="true">
            <img
              className="ab-img"
              src="https://plus.unsplash.com/premium_photo-1674773520273-babb8edad6fa?q=80&w=725&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>

          {/* Icon circle */}
          <div className="ab-iconCircle" aria-hidden="true">
            <img 
              src={hammer} 
              alt="Tools icon" 
              className="ab-icon"
               />
          </div>

          {/* Stats card */}
          <div className="ab-statCard" aria-hidden="true">
            <div className="ab-statNum">20+</div>
            <div className="ab-statText">best awards wining</div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="ab-right">
          <div className="ab-kickerRow">
            <span className="ab-kickerLine" aria-hidden="true" />
            <span className="ab-kicker">About Us</span>
          </div>

          <h2 className="ab-title">MMG Solutions For Your Every Needs</h2>

          <p className="ab-desc">
            MMG Tiling is a Melbourne-based tiling and renovation team delivering high-quality bathroom tiling, kitchen tiling, and wall and floor tiling for homes and commercial spaces across Melbourne. We specialise in bathroom renovations, shower tiling, feature wall tiling, and splashback tiling, with clean lines, precise levels, and a premium finish on every job.
            If you’re searching for trusted tilers in Melbourne, MMG Tiling is here for quality tiling, that look sharp and perform for years.
          </p>

          <ul className="ab-list">
            <li>Reliable with premium results.</li>
            <li>Fully compliant waterproofing</li>
            <li>Licensed and experienced</li>
            
          </ul>

          <button className="ab-moreBtn" onClick={to =>(window.location.href = "/about")}>
            More About <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

