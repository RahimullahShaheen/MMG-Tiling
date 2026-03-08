import React, { useEffect, useMemo, useState } from "react";
import "../Assets/CSS/Components/heroSlider.css";

export default function HeroSlider() {
  const slides = useMemo(
    () => [
      {
        tag: "Melbourne’s Trusted Tiling Experts",
        title: "MMG Tiling - Crafted to Impress. Built to Last",
        desc:
          "Transform your space with MMG Tiling Melbourne — experts in bathroom tiling, waterproofing, floor screeding, and complete renovations. We deliver precision wall and floor tiling, flawless grout lines, and premium finishes built to last.",
        cta: "DISCOVER MORE",
        img:
          "https://images.unsplash.com/photo-1688469625388-e6f8d43df357?q=80&w=767&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        tag: "INDUSTRY SOLUTIONS",
        title: "Quality work\nthat lasts longer.",
        desc:
          "Upgrade your home with Melbourne’s trusted tiling specialists. We combine quality materials, precision workmanship, and durable finishes built for Australian standards.",
        cta: "VIEW SERVICES",
        img:
          "https://plus.unsplash.com/premium_photo-1661875124229-5201914a77b7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);

  const goNext = () => setActive((p) => (p + 1) % slides.length);
  const goPrev = () => setActive((p) => (p - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((p) => (p + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="hs-wrap" aria-label="Hero slider">
      <button className="hs-arrow hs-arrowLeft" onClick={goPrev} aria-label="Previous slide">
        <span aria-hidden="true">‹</span>
      </button>

      <button className="hs-arrow hs-arrowRight" onClick={goNext} aria-label="Next slide">
        <span aria-hidden="true">›</span>
      </button>

      <div className="hs-inner">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <article
              key={i}
              className={`hs-slide ${isActive ? "isActive" : ""}`}
              aria-hidden={!isActive}
            >
              {/* LEFT */}
              <div className="hs-left">
                <div className="hs-kickerRow">
                  <span className="hs-kickerDots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <i />
                  </span>
                  <p className="hs-kicker">{s.tag}</p>
                </div>

                <h1 className="hs-title">{s.title}</h1>
                <p className="hs-desc">{s.desc}</p>

                <div className="hs-ctaRow">
                  <button className="hs-cta" onClick={() => alert(`CTA: ${s.cta}`)}>
                    {s.cta}
                  </button>
                </div>
              </div>

              {/* RIGHT */}
              <div className="hs-right">
                <div className="hs-imgFrame">
                  <div className="hs-imgMask">
                    <img src={s.img} alt="Construction hero" className="hs-img" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="hs-dots" role="tablist" aria-label="Slide dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hs-dot ${i === active ? "isActive" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === active}
            role="tab"
          />
        ))}
      </div>
    </section>
  );
}