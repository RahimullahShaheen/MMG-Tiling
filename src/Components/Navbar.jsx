import { useEffect, useRef, useState } from "react";
import Logo from "../Assets/Images/Logo.png";
import { NavLink } from "react-router-dom";
import "../Assets/CSS/Components/Navbar.css";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapRef = useRef(null);

  // ✅ Services dropdown (ONLY)
  const [servicesOpen, setServicesOpen] = useState(false);
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false);
  const servicesRef = useRef(null);

  // close everything on Esc
  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setServicesOpen(false);
        setServicesMobileOpen(false);
      }
    }
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  // lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // close mobile if resized to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 900) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // close services dropdown on outside click
  useEffect(() => {
    function onDocDown(e) {
      if (!servicesRef.current) return;
      if (servicesRef.current.contains(e.target)) return;
      setServicesOpen(false);
    }
    document.addEventListener("mousedown", onDocDown);
    return () => document.removeEventListener("mousedown", onDocDown);
  }, []);

  function closeMobile() {
    setMobileOpen(false);
    setServicesMobileOpen(false);
  }

  return (
    <>
      <header className="mm-header">
        <div className="mm-container-nav">
          <a href="/" className="mm-brand">
            <img src={Logo} alt="Master Mowers Logo" className="mm-logo" />
            <span className="mm-brandText">MMG  Tilling</span>
          </a>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="mm-hamburger"
          >
            ☰
          </button>

          {/* Desktop nav */}
          <nav className="mm-desktop-nav" ref={wrapRef}>
            <NavLink to="/" className="mm-link">
              Home
            </NavLink>

            {/* ✅ Services dropdown (4 items) */}
            <div className="mm-dd" ref={servicesRef}>
              <button
                type="button"
                className="mm-link mm-ddTrigger"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen((v) => !v)}
              >
                Services <span className="mm-ddArrow">▾</span>
              </button>

              {servicesOpen && (
                <div className="mm-ddMenu" role="menu">
                  <NavLink
                    to="/services/TileInstallation"
                    className="mm-ddItem"
                    onClick={() => setServicesOpen(false)}
                  >
                    Tiling Services
                  </NavLink>
                  <NavLink
                    to="/services/BathroomTilling"
                    className="mm-ddItem"
                    onClick={() => setServicesOpen(false)}
                  >
                    Bathroom Services
                  </NavLink>
                  <NavLink
                    to="/services/WaterProofing"
                    className="mm-ddItem"
                    onClick={() => setServicesOpen(false)}
                  >
                    Waterproofing & Screeding
                  </NavLink>
                  <NavLink
                    to="/services/Renovation"
                    className="mm-ddItem"
                    onClick={() => setServicesOpen(false)}
                  >
                    Renovation
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/about" className="mm-link">
              About
            </NavLink>

            <NavLink to="/contact" className="mm-link">
              Contact
            </NavLink>

            <a href="/contact" className="mm-cta">
              Get a Quote <span className="mm-ctaArrow">›</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <>
          <div className="mm-overlay" onClick={closeMobile} />

          <div className="mm-mobilePanel" role="dialog" aria-modal="true">
            <div className="mm-mobileInner">
              <div className="mm-mobileTopRow">
                <div className="mm-mobileBrand">
                  <img
                    src={Logo}
                    alt="Master Mowers Logo"
                    className="mm-logo mm-logo--sm"
                  />
                  <span className="mm-brandText mm-brandText--sm">
                    MASTER MOWERS
                  </span>
                </div>

                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobile}
                  className="mm-closeBtn"
                >
                  ✕
                </button>
              </div>

              <div className="mm-mobileLinks">
                <NavLink to="/" className="mm-mobileLink" onClick={closeMobile}>
                  <span>Home</span>
                </NavLink>

                {/* ✅ Mobile Services dropdown (4 items) */}
                <button
                  type="button"
                  className="mm-mobileLink mm-mobileDdTrigger"
                  aria-expanded={servicesMobileOpen}
                  onClick={() => setServicesMobileOpen((v) => !v)}
                >
                  <span>Services</span>
                  <span className="mm-ddArrow">▾</span>
                </button>

                {servicesMobileOpen && (
                  <div className="mm-mobileDdMenu">
                    <NavLink
                      to="/services/TileInstallation"
                      className="mm-mobileSubLink"
                      onClick={closeMobile}
                    >
                      Tiling Services
                    </NavLink>
                    <NavLink
                      to="/services/BathroomTilling"
                      className="mm-mobileSubLink"
                      onClick={closeMobile}
                    >
                      Bathroom Services
                    </NavLink>
                    <NavLink
                      to="/services/WaterProofing"
                      className="mm-mobileSubLink"
                      onClick={closeMobile}
                    >
                      Waterproofing & Screeding
                    </NavLink>
                    <NavLink
                      to="/services/Renovation"
                      className="mm-mobileSubLink"
                      onClick={closeMobile}
                    >
                      Renovation
                    </NavLink>
                  </div>
                )}

                <NavLink
                  to="/about"
                  className="mm-mobileLink"
                  onClick={closeMobile}
                >
                  <span>About</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className="mm-mobileLink"
                  onClick={closeMobile}
                >
                  <span>Contact</span>
                </NavLink>

                <a
                  href="/contact"
                  className="mm-mobileCTA"
                  onClick={closeMobile}
                >
                  Get a Quote <span className="mm-ctaArrow">›</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
