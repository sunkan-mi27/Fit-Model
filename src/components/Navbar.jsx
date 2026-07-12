import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scroll ? "navbar navbar-scroll" : "navbar"}>
      <div className="logo">
        FitModel<span>OS</span>
      </div>

      <div className={menuOpen ? "nav-links active" : "nav-links"}>
        <ScrollLink
          className="nav-link"
          to="features"
          smooth
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Features
        </ScrollLink>

        <ScrollLink
          className="nav-link"
          to="models"
          smooth
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Models
        </ScrollLink>

        <ScrollLink
          className="nav-link"
          to="pricing"
          smooth
          duration={500}
          onClick={() => setMenuOpen(false)}
        >
          Pricing
        </ScrollLink>

        <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
          Dashboard
        </Link>

        <button className="btn-primary">Get Started</button>
      </div>

      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}
