import React from "react";
import "../Assets/CSS/Pages/WaterProofingDetail.css";

const Icon = ({ name }) => {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24" };

  if (name === "shield") {
    return (
      <svg {...common}>
        <path
          d="M12 2 20 6v6c0 5-3.4 9.4-8 10-4.6-.6-8-5-8-10V6l8-4Zm0 4.2L6 8.8V12c0 3.7 2.4 7 6 7.8 3.6-.8 6-4.1 6-7.8V8.8l-6-2.6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "badge") {
    return (
      <svg {...common}>
        <path
          d="M12 2a6 6 0 0 1 3 11.2V22l-3-2-3 2v-8.8A6 6 0 0 1 12 2Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (name === "tool") {
    return (
      <svg {...common}>
        <path
          d="M21 7.5 16.8 11.7l-2.5-2.5L18.5 5A5 5 0 0 0 12 9.9l-6.7 6.7a2.5 2.5 0 1 0 3.5 3.5L15.5 13A5 5 0 0 0 21 7.5Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 5h16v14H4V5Z" fill="currentColor" />
    </svg>
  );
};

export default function TileServicesDetail() {
 const cards = [
    {
      icon: "tool",
      title: "Clean Install & Low Mess",
      desc: "We protect floors and clean up properly after the job.",
    },
    {
      icon: "badge",
      title: "Premium Finish",
      desc: "Building the modern look that lifts the whole room.",
    },
    {
      icon: "shield",
      title: "Reliable & On-Time",
      desc: "Clear communication, scheduled work, and dependable delivery.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Waterproofing",
      desc: "Certified wet area waterproofing for bathrooms, showers, and balconies to prevent leaks.",
      img: "https://images.unsplash.com/photo-1635899669228-dbb4fba49ebb?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "02",
      title: "Screeding",
      desc: "Professional floor screeding and levelling to create a smooth, tile-ready surface with Australian building standards.",
      img: "https://images.unsplash.com/photo-1700237073358-a63887bffd68?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    
  ];

  return (
    <>
      <section className="sd-wrapV2">
        <div className="sd-containerV2">
          <div className="sd-leftV2">
            <div
              className="sd-heroImageV2"
              role="img"
              aria-label="Tiling service"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1609859419208-8993ee324600?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRpbGUlMjB3YXRlciUyMHByb29maW5nfGVufDB8fDB8fHww)",
              }}
            />

            <div className="sd-floatCardV2">
              {cards.map((c) => (
                <div className="sd-miniInfoV2" key={c.title}>
                  <span className="sd-miniIconV2" aria-hidden="true">
                    <Icon name={c.icon} />
                  </span>
                  <div className="sd-miniTextV2">
                    <div className="sd-miniTitleV2">{c.title}</div>
                    <div className="sd-miniDescV2">{c.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sd-rightV2">
            <h2 className="sd-titleV2">
              Waterproofing Services Melbourne
            </h2>

            <p className="sd-leadV2">
              MMG Tiling provides professional waterproofing services in Melbourne for bathrooms, showers, balconies, and other wet areas.
               Our experienced team applies high-quality waterproof membranes to protect surfaces from leaks, moisture damage, and structural issues.
               Proper waterproofing is essential before bathroom tiling, shower tiling, and floor tile installation, ensuring long-lasting durability
               and compliance with Australian waterproofing standards.
            </p>

            <p className="sd-textV2">
              We follow a complete process including surface preparation, membrane application, and waterproof sealing to create a reliable barrier against
              water penetration. Our Melbourne waterproofing specialists work on residential renovations and new builds, delivering safe and durable solutions
              for bathrooms, laundries, and wet areas.
            </p>
            <p className="sd-textV2">
              <p className="sd-textV2">
              If you are looking for trusted waterproofing contractors in Melbourne, MMG Tiling delivers compliant waterproofing systems designed to protect your property
              and support long-lasting tile installation.
            </p>
            </p>

            <div className="sd-actionsV2">
              <a className="sd-btnPrimaryV2" href="/contact">
                Get a Free Quote <span className="sd-arrowV2">{">"}</span>
              </a>
              <a className="sd-btnGhostV2" href="/services">
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ts-wrap">
        <div className="ts-container">
          <div className="ts-head">
            <div className="ts-kicker">Services Included</div>
            <h2 className="ts-title">
              Professional Waterproofing Services in Melbourne
            </h2>
            <p className="ts-sub">
              Professional waterproofing in Melbourne for bathrooms, showers, balconies, and wet areas, ensuring leak protection.
            </p>
          </div>

          <div className="ts-grid">
            {steps.map((s) => (
              <article className="ts-card" key={`${s.num}-${s.title}`}>
                <div className="ts-media">
                  <img className="ts-img" src={s.img} alt="" loading="lazy" />
                  <span className="ts-stepPill">{s.num}</span>
                </div>

                <div className="ts-body">
                  <h3 className="ts-h3">{s.title}</h3>
                  <p className="ts-text">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
