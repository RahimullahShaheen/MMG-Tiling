// LatestProjectsSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../Assets/CSS/Components/ProjectsSection.css";

/* ---------- Counter Hook ---------- */
function useCountUp(end = 50, duration = 1600, trigger = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let raf;
    const start = performance.now();

    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      setValue(Math.round(eased * end));

      if (progress < 1) raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [trigger, end, duration]);

  return value;
}


/* ---------- Component ---------- */
export default function LatestClientsProject() {
  const projects = [
    {
      name: "Modern Pool Villa",
      location: "Gold Coast, QLD",
      img: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Forest Cabin House",
      location: "Byron Bay, NSW",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80",
    },
    {
      name: "Minimal Living Room",
      location: "Brisbane, QLD",
      img: "https://plus.unsplash.com/premium_photo-1661878377816-28dd94fe92bb?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Luxury White Villa",
      location: "Melbourne, VIC",
      img: "https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  const [index, setIndex] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  /* ----- Smooth Auto Slide ----- */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [projects.length]);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);

  /* ----- Trigger counters when visible ----- */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const stat1 = useCountUp(10, 1400, inView);
  const stat2 = useCountUp(20, 1600, inView);
  const stat3 = useCountUp(15, 1800, inView);

  return (
    <section className="project-section" ref={sectionRef}>
      <div className="container">
        <div className="top-row">
          <div>
            <p className="kicker">PROJECTS</p>
            <h2 className="title">Latest Client's Project.</h2>
          </div>

          <div className="buttons">
            <button onClick={prev}>←</button>
            <button onClick={next}>→</button>
          </div>
        </div>

        {/* Slider */}
        <div className="slider-wrapper">
          <div
            className="slider-track"
            style={{
              transform: `translateX(-${index * 420}px)`,
            }}
          >
            {projects.map((item, i) => (
              <div className="card" key={i}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <div className="overlay">
                    <h4>{item.name}</h4>
                    <p>{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div>
            <h3>{stat1}K</h3>
            <p>Client Satisfaction</p>
          </div>

          <div>
            <h3>{stat2}k+</h3>
            <p>Project Complete</p>
          </div>

          <div>
            <h3>{stat3}Years</h3>
            <p>Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}