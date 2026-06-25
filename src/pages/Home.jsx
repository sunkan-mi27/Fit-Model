import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">
          <span className="tag">Performance • Portfolio • Progress</span>

          <h1>
            Build Your Body.
            <br />
            Build Your Brand.
            <br />
            Own Your Growth
          </h1>

          <p>
            Track your fitness journey, showcase your portfolio and manage your
            growth from one powerful platform.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Get Started</button>

            <button className="btn-secondary">Live Demo</button>
          </div>

          <div className="ative-models">
            👤 👤 👤 👤 <span>2K+ Active Models</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="profile-header">
            <div className="avatar">S</div>

            <div>
              <h3>Sunkanmi</h3>
              <p>Elite Fitness Model</p>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <h4>Weight</h4>
              <span>78kg</span>
            </div>

            <div className="stat">
              <h4>Body Fat</h4>
              <span>12%</span>
            </div>

            <div className="stat">
              <h4>Growth</h4>
              <span>+18%</span>
            </div>
          </div>

          <div className="portfolio-score">
            <h4>Portfolio Score</h4>

            <div className="progress-bar">
              <div className="progress"></div>
            </div>

            <span>92%</span>
          </div>
        </div>
      </section>
    </>
  );
}
