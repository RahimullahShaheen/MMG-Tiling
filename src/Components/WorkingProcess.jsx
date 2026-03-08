// WorkingProcessSection.jsx
import React from "react";
import "../Assets/CSS/Components/WorkingProcess.css";
import talk from "../Assets/Images/icons/talk.png";
import building from "../Assets/Images/icons/building.png";
import hammer from "../Assets/Images/icons/hammer.png";
import results from "../Assets/Images/icons/results.png";

export default function WorkingProcessSection() {
  const steps = [
    {
      num: 1,
      title: "Consultation & Site Assessment",
      desc: "Inspect site, measure space, provide detailed transparent quote.",
      img: talk,
    },
    {
      num: 2,
      title: "Surface Preparation & Waterproofing",
      desc: "Level surfaces, apply compliant waterproof membrane system.",
      img: building,
    },
    {
      num: 3,
      title: "Precision Tile Installation",
      desc: "Lay tiles accurately with perfect alignment and spacing.",
      img: hammer,
    },
    {
      num: 4,
      title: "Grouting, Sealing & Final Inspection",
      desc: "Seal joints, clean thoroughly, ensure flawless finished result.",
      img: results,
    },
  ];

  return (
    <section className="wp-wrap">
      {/* background image (replace URL) */}
      <div
        className="wp-bg"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80)",
        }}
        aria-hidden="true"
      />
      <div className="wp-overlay" aria-hidden="true" />

      <div className="wp-container">
        <div className="wp-top">
          <div className="wp-left">
            <span className="wp-accentLine" aria-hidden="true" />
            <h2 className="wp-title">
              Our working process - how we
              <br />
              work for our customers
            </h2>
          </div>

          <a className="wp-cta" href="/contact">
            GET IN TOUCH
          </a>
        </div>

        <div className="wp-steps">
          <div className="wp-connector" aria-hidden="true" />

          {steps.map((s) => (
            <article className="wp-step" key={s.num}>
              <div className="wp-circle">
                <div className="wp-icon" aria-hidden="true">
                  <img src={s.img} alt="" />
                </div>
                <div className="wp-badge" aria-hidden="true">
                  {s.num}
                </div>
              </div>

              <h3 className="wp-stepTitle">{s.title}</h3>
              <p className="wp-stepDesc">{s.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
