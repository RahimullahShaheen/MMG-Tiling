// ServiceHero.jsx
import React from "react";
import "../Assets/CSS/Components/ServiceHero.css";

export default function ServiceHero({
  title = "MMG Services",
  subtitle = "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official modeserunt mollit anim id est 20 years experience.",
  bgImage = "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2400&q=80",
}) {
  return (
    <section className="sp-hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="sp-heroOverlay" />

      <div className="sp-heroInner">
        <span className="sp-heroAccent" aria-hidden="true" />

        <h1 className="sp-heroTitle">{title}</h1>

        <p className="sp-heroSub">{subtitle}</p>
      </div>
    </section>
  );
}