import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      {/* Background Glow */}
      <div className="bg-glow glow1"></div>
      <div className="bg-glow glow2"></div>

      {/* LEFT SIDE */}

      <div className="login-left">
        <div className="brand-logo">
          <span className="logo-dot"></span>
          <h2>FitModel OS</h2>
        </div>

        <span className="login-tag">AI POWERED FITNESS PLATFORM</span>

        <h1>Welcome Back.</h1>

        <p className="hero-text">
          Your AI fitness ecosystem awaits. Build your portfolio, grow your
          audience, connect with premium brands and manage everything from one
          place.
        </p>

        {/* AI Athlete */}

        <div className="ai-showcase">
          <div className="scan-ring ring1"></div>
          <div className="scan-ring ring2"></div>
          <div className="scan-ring ring3"></div>

          <div className="athlete-body">
            <div className="scan-line"></div>
          </div>

          <div className="ai-chip chip1">
            AI Score
            <strong>98%</strong>
          </div>

          <div className="ai-chip chip2">Verified Athlete</div>

          <div className="ai-chip chip3">Portfolio Ready</div>

          <div className="ai-chip chip4">Body Analysis Complete</div>
        </div>

        {/* Stats */}

        <div className="hero-stats">
          <div className="hero-stat">
            <h3>12K+</h3>
            <p>Verified Athletes</p>
          </div>

          <div className="hero-stat">
            <h3>82</h3>
            <p>Countries</p>
          </div>

          <div className="hero-stat">
            <h3>4.9★</h3>
            <p>Community Rating</p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="login-right">
        <div className="login-card">
          <span className="secure-tag">🟢 Secure Connection</span>

          <h2>Sign In</h2>

          <p>Login to continue your fitness journey.</p>

          {/* EMAIL */}

          <div className="input-group">
            <label>Email Address</label>

            <div className="input-box">
              <span>📧</span>

              <input type="email" placeholder="Enter your email" />
            </div>
          </div>

          {/* PASSWORD */}

          <div className="input-group">
            <label>Password</label>

            <div className="input-box">
              <span>🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <div className="login-options">
            <label className="remember">
              <input type="checkbox" />
              Remember me
            </label>

            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button className="login-btn">
            <strong>Login</strong>
          </button>
          <div className="register-link">
            Don't have an account?
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
