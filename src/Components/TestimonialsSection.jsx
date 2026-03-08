// testimonialsSection.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import "../Assets/CSS/Components/testimonialsSection.css";

export default function TestimonialsSection() {
  const reviews = useMemo(
    () => [
      {
        name: "James R.",
        suburb: "Melbourne VIC",
        rating: 5,
        text:
          "MMG Tilling did an unreal job on our bathroom. Clean edges, perfectly level, and they kept the place spotless. Finished on schedule and the result looks premium.",
        service: "Bathroom Tiling",
      },
      {
        name: "Ayesha K.",
        suburb: "Craigieburn",
        rating: 5,
        text:
          "From quote to finish, communication was clear and professional. Grout lines are super consistent and cuts are flawless. Highly recommend MMG.",
        service: "Kitchen Splashback",
      },
      {
        name: "Liam P.",
        suburb: "Southbank",
        rating: 5,
        text:
          "We had cracked tiles replaced and the match is perfect. Fast, careful, and respectful in our apartment building. Would book again.",
        service: "Tile Repairs",
      },
      {
        name: "Noah T.",
        suburb: "Footscray",
        rating: 5,
        text:
          "Great attention to detail and really clean grout work. They were on time, explained everything clearly, and the finish looks high-end.",
        service: "Floor Tiling",
      },
      {
        name: "Sara M.",
        suburb: "Coburg",
        rating: 5,
        text:
          "Waterproofing and tiling were done properly and the layout was perfect. Very professional team and a smooth experience.",
        service: "Bathroom Renovation",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1); // 1 next, -1 prev
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const go = (nextIndex, direction) => {
    setDir(direction);
    setActive(nextIndex);
  };

  const next = () => go((active + 1) % reviews.length, 1);
  const prev = () => go((active - 1 + reviews.length) % reviews.length, -1);

  // ✅ auto slide
  useEffect(() => {
    if (paused) return;

    timerRef.current = setInterval(() => {
      setDir(1);
      setActive((p) => (p + 1) % reviews.length);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, [paused, reviews.length]);

  const review = reviews[active];
  const initials = `${review.name.split(" ")[0][0]}${review.name.split(" ")[1]?.[0] || ""}`;

  return (
    <section className="tst-wrap" aria-label="Client testimonials">
      <div className="tst-container">
        <header className="tst-head">
          <p className="tst-kicker">CLIENT REVIEWS</p>
          <h2 className="tst-title">What Melbourne Clients Say About MMG Tilling</h2>
          <p className="tst-sub">Precision tiling. Clean finishes. Professional workmanship.</p>
        </header>

        {/* ✅ single main card (no aside) */}
        <div
          className="tst-card"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="tst-topRow">
            <div className="tst-leftMeta">
              <div className="tst-avatar" aria-hidden="true">{initials}</div>
              <div>
                <div className="tst-name">{review.name}</div>
                <div className="tst-loc">{review.suburb}</div>
              </div>
            </div>

            <div className="tst-stars" aria-label={`${review.rating} star rating`}>
              {"★★★★★".slice(0, review.rating)}
            </div>
          </div>

          <div className="tst-quoteMark" aria-hidden="true">“</div>

          {/* ✅ fixed height + smooth transition (no jumping) */}
          <div className="tst-swapFrame">
            <div key={active} className={`tst-swapCard ${dir === 1 ? "isNext" : "isPrev"}`}>
              <div className="tst-chip">{review.service}</div>
              <p className="tst-text">{review.text}</p>
            </div>
          </div>

          <div className="tst-footer">
            <button className="tst-btn" onClick={prev} aria-label="Previous review">
              ←
            </button>

            <div className="tst-dots" role="tablist" aria-label="Reviews">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  className={`tst-dot ${i === active ? "isActive" : ""}`}
                  onClick={() => go(i, i > active ? 1 : -1)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button className="tst-btn" onClick={next} aria-label="Next review">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}