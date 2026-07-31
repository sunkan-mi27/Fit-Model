import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../utils/api";
import "./Register.css";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !formData.name ||
      !formData.username ||
      !formData.email ||
      !formData.password
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    if (!agreedToTerms) {
      setError("Please agree to the Terms of Service and Privacy Policy");
      return;
    }

    setLoading(true);

    try {
      const { token, user } = await registerUser({
        name: formData.name,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="register-page">
      <div className="bg-glow glow-one"></div>
      <div className="bg-glow glow-two"></div>
      <div className="bg-grid"></div>

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

      <section className="register-right">
        <div className="register-card">
          <span className="secure-tag">🛡 Secure Registration</span>

          <h2>Create Account</h2>

          <p>
            Create your FitModel OS account and start building your professional
            fitness presence.
          </p>

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
            <div className="form-grid">
              <div className="input-group">
                <label>Full Name</label>
                <div className="input-box">
                  <span className="icon">👤</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Sunkanmi Ibrahim"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Username</label>
                <div className="input-box">
                  <span className="icon">@</span>
                  <input
                    type="text"
                    name="username"
                    placeholder="sunkanmi27"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group full">
                <label>Email Address</label>
                <div className="input-box">
                  <span className="icon">📧</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group full">
                <label>Password</label>
                <div className="input-box">
                  <span className="icon">🔒</span>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create Password"
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
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
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
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <span>
                I agree to the
                <strong> Terms of Service </strong>
                and
                <strong> Privacy Policy.</strong>
              </span>
            </label>

            <button type="submit" className="register-btn" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
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
