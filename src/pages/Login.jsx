import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../utils/api";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);

    try {
      const { token, user } = await loginUser(formData);

      // "Remember me" just decides localStorage (persists) vs sessionStorage (clears on tab close)
      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem("token", token);
      storage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

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

          {error && (
            <div
              style={{
                color: "#ff5c5c",
                marginBottom: "12px",
                fontSize: "14px",
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* EMAIL */}

            <div className="input-group">
              <label>Email Address</label>

              <div className="input-box">
                <span>📧</span>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="input-group">
              <label>Password</label>

              <div className="input-box">
                <span>🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
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
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot Password?</Link>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              <strong>{loading ? "Signing In..." : "Login"}</strong>
            </button>
          </form>

          <div className="register-link">
            Don't have an account?
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
