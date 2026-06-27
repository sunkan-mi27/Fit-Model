import Navbar from "../components/Navbar";
import Features from "../components/Features";
import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import useReveal from "../hooks/useReveal";
import DashboardPreview from "../components/DashboardPreview";
import TrustedStats from "../components/TrustedStats";
import FitnessDNA from "../components/FitnessDNA";
import BodyScanner from "../components/BodyScanner";
import Testimonials from "../components/Testimonials";

export default function Home() {
  useReveal();
  return (
    <>
      <Background />
      <MouseGlow />
      <Navbar />
      <section id="home" className="hero reveal">
        <div className="hero-content">
          <span className="tag">Performance • Portfolio • Progress</span>

          <h1>
            Build Your Body.
            <br />
            Own Your Growth
          </h1>

          <p>
            Track your fitness journey, showcase your portfolio and manage your
            growth from one powerful platform. <br />
            Trusted by over 2,000 fitness professionals worldwide♻
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>

            <button className="btn-secondary">Live Demo</button>
          </div>

          <div className="active-models">
            👤 👤 👤 👤 <span>2K+ Active Models</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-header">
            <div className="avatar">S</div>

            <div className="profile-info">
              <h3>SUNKANMI</h3>
              <p>Elite Fitness Model ✔</p>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span>Weight</span>
              <h2>78kg</h2>
              <small>+2.4%</small>
            </div>

            <div className="stat-box">
              <span>Growth</span>
              <h2>+18%</h2>
              <small>This Month</small>
            </div>
          </div>

          <div className="portfolio-progress">
            <h4>Portfolio Score</h4>
            <h2>92%</h2>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>
        </div>
      </section>
      <div id="features">
        <Features />
      </div>
      <div id="models">
        <TrustedStats />
      </div>
      <div id="dashboard">
        <DashboardPreview />
      </div>

      <FitnessDNA />
      <BodyScanner />
      <Testimonials />
      <section id="pricing" className="placeholder-section reveal">
        <h2>Pricing</h2>
      </section>
    </>
  );
}
