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
import Pricing from "../components/Pricing";
import Footer from "../components/Footer.jsx";

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

        <div className="hero-visual">
          <div className="orb orb1"></div>
          <div className="orb orb2"></div>
          <div className="grid-lines"></div>

          <div className="hero-card">
            <div className="hero-profile">
              <div className="hero-avatar">
                S<span className="online-dot"></span>
              </div>

              <div>
                <h2>SUNKANMI IBRAHIM</h2>
                <p>Elite Fitness Model ✔️</p>
                <small>ID : FM-8891-ELITE</small>
              </div>
            </div>

            <div className="system-status">
              <span className="pulse"></span>
              SYSTEM ONLINE
            </div>

            <div className="hero-stats">
              <div className="glass-stat">
                <small>⚖️ Weight</small>
                <p className="stat-change positive">▲ +0.6kg</p>
                <h2>78.4kg</h2>
              </div>

              <div className="glass-stat">
                <small>🔥 Body Fat</small>
                <p className="stat-change negative">▼ -0.3%</p>
                <h2>12.6%</h2>
              </div>

              <div className="glass-stat">
                <small>💪 Muscle</small>
                <p className="stat-change positive">▲ +1.2kg</p>
                <h2>68.7kg</h2>
              </div>

              <div className="glass-stat">
                <small>📈 Growth</small>
                <p className="stat-change positive">▲ +2.4%</p>
                <h2>+18.2%</h2>
              </div>
            </div>

            <div className="goal-card">
              <div className="goal-left">
                <h4>Weekly Goal</h4>
                <p>Performance Score</p>
              </div>

              <div className="progress-ring">
                <svg width="90" height="90">
                  <circle className="ring-bg" cx="45" cy="45" r="36" />
                  <circle className="ring-progress" cx="45" cy="45" r="36" />
                </svg>
                <div className="ring-text">92%</div>
              </div>
            </div>

            <div className="coach-box">
              <div className="coach-header">
                <div className="ai-avatar">🤖</div>
                <div>
                  <h4>FITMODEL AI</h4>

                  <small>
                    <span className="ai-online"></span>ONLINE
                  </small>
                </div>
              </div>
              <div className="coach-message">
                Excellent recovery detected. Protein absorption is optimal.
                Tomorrow's recommended training intensity:<strong>HIGH</strong>
              </div>
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
      <div id="pricing">
        <Pricing />
      </div>

      <Footer />
    </>
  );
}
