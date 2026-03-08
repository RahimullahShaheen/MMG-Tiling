import React from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/CSS/Components/servicesCardsSection.css";
import talk from "../Assets/Images/icons/talk.png";
import building from "../Assets/Images/icons/building.png";
import hammer from "../Assets/Images/icons/hammer.png";
import results from "../Assets/Images/icons/results.png";

export default function ServicesCardsSection() {
  const navigate = useNavigate();

  const services = [
    {
      title: "Tilling Services",
      desc:
        "Professional wall and floor tiling for modern homes with high-quality ceramic, porcelain and mosaic tiling ",
      img: "https://plus.unsplash.com/premium_photo-1661931013258-9295e33affce?q=80&w=1540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: talk,
      linkText: "Learn More",
      link: "/services/TileInstallation",
    },
    {
      title: "Waterproofing & screeding",
      desc:
        "Residential and commercial waterproofing experts with expert levelling screed.",
      img: "https://images.unsplash.com/photo-1706249591846-a8e421063585?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: building,
      linkText: "Learn More",
      link: "/services/WaterProofing",
    },
    {
      title: "Bathroom Services",
      desc:
        "Modern bathroom tiling with premium waterproof installation retiling and tile replacement services",
      img: "https://plus.unsplash.com/premium_photo-1673015653127-835bb43a4115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: hammer,
      linkText: "Learn More",
      link: "/services/BathroomTilling",
    },
    {
      title: "Renovation",
      desc:
        "Professional renovation and remodeling full house and expert wall and floor tile installation across Melbourne. ",
      img: "https://plus.unsplash.com/premium_photo-1661928005866-864c961775ee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      icon: results,
      linkText: "Learn More",
      link: "/services/Renovation",
    },
  ];

  return (
    <section className="sc-wrap" aria-label="Services">
      <div className="sc-container">
        <h2 className="sc-title">Construction Services</h2>

        <div className="sc-grid">
          {services.map((s, idx) => (
            <article key={idx} className="sc-card">
              <div className="sc-imageWrap">
                <img className="sc-image" src={s.img} alt={s.title} loading="lazy" />
              </div>

              <div className="sc-panel">
                <div className="sc-icon" aria-hidden="true">
                  <img src={s.icon} alt="" loading="lazy" />
                </div>

                <h3 className="sc-cardTitle">{s.title}</h3>
                <p className="sc-desc">{s.desc}</p>

                <button className="sc-link" onClick={() => navigate(s.link)}>
                  {s.linkText}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
