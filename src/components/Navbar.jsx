import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>FitModel</span>
        <small>OS</small>
      </div>

      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#models">Models</a>
        <a href="#pricing">Pricing</a>
        <Link to="/dashboard">Dashboard</Link>
      </div>

      <button className="nav-btn">Get Started</button>
    </nav>
  );
}
