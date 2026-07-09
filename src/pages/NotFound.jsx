import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <main className="notfound-page">
      {/* Background */}

      <div className="bg-grid"></div>

      <div className="bg-glow glow-left"></div>
      <div className="bg-glow glow-right"></div>

      {/* Top 404 */}

      <h1 className="bg-404 top">404</h1>

      <div className="notfound-content">
        {/* AI CARD */}

        <div className="ai-panel">
          <div className="ai-left">
            <div className="ai-avatar">FM</div>
          </div>

          <div className="ai-center">
            <span className="ai-tag">🟢 AI ASSISTANT</span>

            <h3>Route Analysis Complete</h3>

            <p>
              I searched every available route inside FitModel OS, but the page
              you're looking for doesn't exist or may have been moved.
            </p>
          </div>

          <div className="ai-menu">•••</div>
        </div>

        {/* TITLE */}

        <span className="page-tag">PAGE NOT FOUND</span>

        <h2>
          Looks like this page
          <br />
          <span>skipped leg day.</span>
        </h2>

        <p className="description">
          Don't worry. Everything else is still working perfectly. Let's get you
          back to your fitness workspace.
        </p>

        {/* STATUS */}

        <div className="status-grid">
          <div className="status-card">
            <div className="status-icon">🧠</div>

            <h4>AI Engine</h4>

            <small>🟢 Online</small>
          </div>

          <div className="status-card">
            <div className="status-icon">⚡</div>

            <h4>Server</h4>

            <small>🟢 Stable</small>
          </div>

          <div className="status-card">
            <div className="status-icon">🛡️</div>

            <h4>Security</h4>

            <small>🟢 Protected</small>
          </div>
        </div>

        {/* BUTTONS */}

        <div className="action-buttons">
          <Link to="/" className="btn-dark">
            ← Back Home
          </Link>

          <Link to="/dashboard" className="btn-green">
            Dashboard →
          </Link>
        </div>
      </div>

      {/* Bottom 404 */}

      <h1 className="bg-404 bottom">404</h1>
    </main>
  );
}
