import React, { useEffect, useRef, useState } from "react";
import "../Assets/CSS/Components/whyChooseUsSection.css";

export default function WhyChooseUsSection() {
  const points = ["Built to Australian Standards", "Professional and expert tilers", "Licensed Waterproofing Specialists"];

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`wc-wrap ${inView ? "isInView" : ""}`}
      aria-label="Why choose us"
    >
      <div className="wc-container">
        {/* LEFT IMAGES */}
        <div className="wc-left">
          <div className="wc-mainImg wc-reveal1">
            <img
              src="https://plus.unsplash.com/premium_photo-1661962943980-f5296449770c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Construction building"
              loading="lazy"
            />
          </div>

          <div className="wc-floatImg wc-reveal2" aria-hidden="true">
            <img
              src="https://plus.unsplash.com/premium_photo-1661878457631-2315d911d42c?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              loading="lazy"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="wc-right">
          <p className="wc-kicker wc-reveal1">WHY CHOOSE US</p>

          <h2 className="wc-title wc-reveal2">
            Why Do Melbourne<br />
            Homeowners Trust <br />
            MMG Tiling?
          </h2>

          <p className="wc-desc wc-reveal3">
            Homeowners trust MMG Tiling because every project is built to Australian Standards with compliant waterproofing and precision tile installation quality, safety, and durability.
          </p>

          <ul className="wc-list wc-reveal4">
            {points.map((t, i) => (
              <li key={i} className="wc-item">
                <span className="wc-check" aria-hidden="true">✓</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="wc-actions wc-reveal4">
            <button className="wc-btn" onClick={() => (window.location.href = "/contact")}>
              Get a Quote
            </button>
            <button className="wc-btn wc-btnGhost" onClick={() => alert("Learn more clicked")}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}