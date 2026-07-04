import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scroll, setScroll] = useState();

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

      <div className="nav-links">
        <ScrollLink
          className="nav-link"
          to="features"
          smooth={true}
          duration={500}
        >
          Features
        </ScrollLink>
        <ScrollLink
          className="nav-link"
          to="models"
          smooth={true}
          duration={500}
        >
          Models
        </ScrollLink>
        <ScrollLink
          className="nav-link"
          to="pricing"
          smooth={true}
          duration={500}
        >
          Pricing
        </ScrollLink>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <button className="btn-primary magnetic">Get Started</button>
    </nav>
  );
}
