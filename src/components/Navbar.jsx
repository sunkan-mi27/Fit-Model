import { useEffect, useState } from "react";

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
        <a href="#features">Features</a>
        <a href="#models">Models</a>
        <a href="#pricing">Pricing</a>
        <a href="#dashboard">Dashboard</a>
      </div>

      <button className="btn-primary magnetic">Get Started</button>
    </nav>
  );
}
