import React from "react";
import "../Assets/CSS/Pages/TileServiceDetailSection.css";

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
      title: "Wall Tiling",
      desc: "On-time project completion and clean worksites",
      img: "https://plus.unsplash.com/premium_photo-1676321046695-a23b1d9f576e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "02",
      title: "Floor Tiling",
      desc: "We confirm layout, grout color, trims, waterproofing ",
      img: "https://plus.unsplash.com/premium_photo-1705479742168-09fa0f1e55c4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "03",
      title: "Indoor Tiling",
      desc: "Professional prep, straight lines, clean cuts.",
      img: "https://plus.unsplash.com/premium_photo-1661963780428-c8f19d7c2ced?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "04",
      title: "Outdoor Tiling",
      desc: "A crisp, modern finish that lasts forever ",
      img: "https://images.unsplash.com/photo-1630699376682-84df40131d22?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      num: "05",
      title: "Repairs & Finishing",
      desc: "Final checks, touch-ups, and clean handover so.",
      img: "https://plus.unsplash.com/premium_photo-1683121250314-f5e3bb80aa75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                  "url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80)",
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
              Tile Installation Services Melbourne
            </h2>

            <p className="sd-leadV2">
              MMG Tiling provides professional tile installation services in Melbourne for residential and commercial projects. Our experienced Melbourne tilers specialise in wall and 
              floor tiling, bathroom tile installation,kitchen splashback tiling, and feature wall tiling, delivering precise alignment, clean grout lines, and long-lasting finishes.
               Whether you are renovating a bathroom, upgrading kitchen tiles, or installing new floor tiles, we ensure every project is completed with high-quality materials and expert workmanship.
            </p>

            <p className="sd-textV2">
              We handle every stage of the tiling process including surface preparation, waterproofing, floor screeding, and professional tile installation to guarantee durable and compliant results.
              Our team works with porcelain tiles, ceramic tiles, mosaic tiles, and large-format tiles, providing modern designs and reliable installation that meets Australian building standards.
            </p>

               <p className="sd-textV2">
              If you are searching for trusted tile installation experts in Melbourne, MMG Tiling delivers quality craftsmanship, reliable service, and premium tile finishes for homes, bathrooms, kitchens,
               and commercial spaces.
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
              Professional Tile Installation Services in Melbourne
            </h2>
            <p className="ts-sub">
              MMG Tiling provides expert tile installation services in Melbourne for residential and commercial projects.
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
