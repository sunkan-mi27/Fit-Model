import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <main className="register-page">
      {/* Background Effects */}

      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>
      <div className="bg-grid"></div>

      {/* ================= LEFT ================= */}

      <section className="register-left">
        <header className="brand">
          <div className="brand-dot"></div>

          <h2>FitModel OS</h2>
        </header>

        <span className="hero-tag">ELITE FITNESS PLATFORM</span>

        <h1>
          Build your
          <br />
          fitness identity.
        </h1>

        <p className="hero-text">
          Join a premium ecosystem where athletes, fitness creators and fitness
          brands connect, collaborate and grow together.
        </p>

        {/* Identity Card */}

        <div className="identity-card">
          <div className="identity-bg"></div>

          <div className="identity-circle">
            <div className="pulse pulse-one"></div>

            <div className="pulse pulse-two"></div>

            <div className="identity-avatar">FM</div>
          </div>

          <div className="identity-badge badge-top">🛡 Verified Identity</div>

          <div className="identity-badge badge-right">💼 Portfolio Ready</div>

          <div className="identity-badge badge-bottom">✨ AI Performance</div>
        </div>

        {/* Stats */}

        <div className="stats">
          <div className="stat-card">
            <div className="stat-icon">👤</div>

            <h3>12K+</h3>

            <span>Athletes</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🌍</div>

            <h3>82</h3>

            <span>Countries</span>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⭐</div>

            <h3>325+</h3>

            <span>Brands</span>
          </div>
        </div>
      </section>

      {/* ================= RIGHT ================= */}

      <section className="register-right">
        <div className="register-card">
          <span className="secure-tag">🛡 Secure Registration</span>

          <h2>Create Account</h2>

          <p>
            Create your FitModel OS account and start building your professional
            fitness presence.
          </p>

          <form>
            <div className="form-grid">
              <div className="input-group">
                <label>Full Name</label>

                <div className="input-box">
                  <span className="icon">👤</span>

                  <input type="text" placeholder="Sunkanmi Ibrahim" />
                </div>
              </div>

              <div className="input-group">
                <label>Username</label>

                <div className="input-box">
                  <span className="icon">@</span>

                  <input type="text" placeholder="sunkanmi27" />
                </div>
              </div>

              <div className="input-group full">
                <label>Email Address</label>

                <div className="input-box">
                  <span className="icon">📧</span>

                  <input type="email" placeholder="example@email.com" />
                </div>
              </div>

              <div className="input-group full">
                <label>Password</label>

                <div className="input-box">
                  <span className="icon">🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create Password"
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>

                <div className="password-strength">
                  <div className="strength-track">
                    <div className="strength-fill"></div>
                  </div>

                  <small>
                    Use at least 8 characters, including letters and numbers.
                  </small>
                </div>
              </div>

              <div className="input-group full">
                <label>Confirm Password</label>

                <div className="input-box">
                  <span className="icon">🔒</span>

                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                  />

                  <button
                    type="button"
                    className="eye-btn"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>
            </div>

            <label className="terms">
              <input type="checkbox" />

              <span>
                I agree to the
                <strong> Terms of Service </strong>
                and
                <strong> Privacy Policy.</strong>
              </span>
            </label>

            <button type="submit" className="register-btn">
              Create Account
              <span>→</span>
            </button>
          </form>

          <div className="divider">
            <span>or</span>
          </div>

          <div className="login-link">
            Already have an account?
            <Link to="/login">Sign In</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
