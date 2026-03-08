import React from "react";
import "../Assets/CSS/Pages/RenovationServicesDetail.css";

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
      title: "Kitchen Renovation",
      desc: "Modern kitchen renovations in Melbourne with tiling, splashbacks, expert installation, and durable finishes.",
      img: "https://images.unsplash.com/photo-1760545813135-fbda9423e448?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2l0Y2hlbiUyMHJlbm92YXRpb24lMjB0aWxlfGVufDB8fDB8fHww",
    },
    {
      num: "02",
      title: "Laundry Renovation",
      desc: "Functional laundry renovations with tiling, waterproofing, and practical storage upgrades.",
      img: "https://images.unsplash.com/photo-1722858955896-bb92b5b82512?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  "url(https://images.unsplash.com/photo-1669236948247-270268c2d172?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
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
              Renovation Services Melbourne
            </h2>

            <p className="sd-leadV2">
              MMG Tiling provides professional renovation services in Melbourne, specialising in bathroom renovations, kitchen renovations, laundry renovations, and complete home 
              tiling upgrades. Our experienced team delivers high-quality wall and floor tiling, waterproofing, floor screeding, and tile installation for modern residential and 
              commercial renovation projects.
            </p>

            <p className="sd-textV2">
            We manage every stage of the renovation process including surface preparation, certified waterproofing, precision tile installation, and finishing, ensuring durable
             and long-lasting results. Whether you are upgrading a bathroom, renovating a kitchen, or improving wet areas, our Melbourne renovation specialists combine expert 
             craftsmanship with premium materials to create stylish and functional spaces.
            </p>
             <p className="sd-textV2">
             If you are searching for trusted renovation and tiling experts in Melbourne, MMG Tiling delivers reliable workmanship, compliant waterproofing, and modern renovation 
             solutions designed to increase both comfort and property value.
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
              Complete Home, Bathroom & Kitchen Renovation Solutions
            </h2>
            <p className="ts-sub">
              Professional renovation services in Melbourne including bathroom, kitchen, and laundry renovations with expert tiling, waterproofing, and modern finishes.
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
