import DashboardLayout from "../layouts/DashboardLayout";
import "./Profile.css";
export default function Profile() {
  return (
    <DashboardLayout>
      <div className="profile-banner">
        <div className="profile-overlay">
          <div className="profile-avatar-large">S</div>

          <div>
            <h1>Sunkanmi Ibrahim ✅</h1>

            <p>Elite Fitness Model • Full Stack Developer • Athlete</p>
          </div>
        </div>
      </div>

      <div className="profile-grid">
        <div className="profile-card">
          <h3>About Me</h3>

          <p>
            Passionate fitness model and software developer building FitModel OS
            — a platform combining fitness, portfolio management and AI.
          </p>
        </div>

        <div className="profile-card">
          <h3>Personal Records</h3>

          <div className="record">
            <span>🏋️ Bench Press</span>

            <strong>140kg</strong>
          </div>

          <div className="record">
            <span>💀 Deadlift</span>

            <strong>220kg</strong>
          </div>

          <div className="record">
            <span>🦵 Squat</span>

            <strong>180kg</strong>
          </div>
        </div>

        <div className="profile-card">
          <h3>Achievements</h3>

          <ul>
            <li>🏆 21-Day Workout Streak</li>

            <li>⭐ Elite Member</li>

            <li>🔥 Top 5% Community Rank</li>

            <li>🎯 Portfolio Score 97%</li>
          </ul>
        </div>

        <div className="profile-card">
          <h3>Quick Stats</h3>

          <div className="stats-mini">
            <div>
              <h2>124</h2>
              <p>Workouts</p>
            </div>

            <div>
              <h2>18k</h2>
              <p>Followers</p>
            </div>

            <div>
              <h2>42</h2>
              <p>Projects</p>
            </div>
          </div>
        </div>
      </div>

      <div className="verification-card">
        <div>
          <h2>✅ Verified Athlete</h2>

          <p>Identity Verified • Portfolio Verified • Performance Verified</p>
        </div>

        <button className="btn-primary">View Certificate</button>
      </div>

      <div className="profile-section">
        <br />
        <h2>📸 Transformation Gallery</h2>
        <div className="transformation-grid">
          <div className="transform-card before">
            <div className="transform-label">BEFORE</div>

            <div className="transform-image">📷</div>

            <p>72kg • January 2024</p>
          </div>

          <div className="transform-arrow">➜</div>

          <div className="transform-card after">
            <div className="transform-label">AFTER</div>

            <div className="transform-image">📷</div>

            <p>78kg • June 2026</p>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <br />
        <h2>🏆 Trophy Cabinet</h2>

        <div className="trophy-grid">
          <div className="trophy-card gold">
            <div className="trophy-icon">🥇</div>
            <h3>Elite Athlete</h3>
            <p>Top 1% performance ranking.</p>
          </div>

          <div className="trophy-card silver">
            <div className="trophy-icon">🔥</div>
            <h3>365 Day Streak</h3>
            <p>One year of consistent training.</p>
          </div>

          <div className="trophy-card bronze">
            <div className="trophy-icon">⭐</div>
            <h3>Verified Portfolio</h3>
            <p>Identity and portfolio approved.</p>
          </div>

          <div className="trophy-card diamond">
            <div className="trophy-icon">💎</div>
            <h3>Legend Status</h3>
            <p>Exceptional contribution to FitModel OS.</p>
          </div>
        </div>
      </div>

      <div className="profile-section">
        <br />
        <h2>🌍 Athlete Digital Passport</h2>

        <div className="passport-card">
          <div className="passport-left">
            <div className="passport-photo">S</div>

            <h3>Sunkanmi Ibrahim</h3>

            <p>Verified Elite Athlete</p>

            <span className="passport-id">Athlete ID: FM-2026-001</span>
          </div>

          <div className="passport-right">
            <div className="passport-row">
              <span>🌎 Nationality</span>

              <strong>Nigeria</strong>
            </div>

            <div className="passport-row">
              <span>📍 Current Base</span>

              <strong>Lagos</strong>
            </div>

            <div className="passport-row">
              <span>💬 Languages</span>

              <strong>English • Yoruba</strong>
            </div>

            <div className="passport-row">
              <span>🏋️ Experience</span>

              <strong>5+ Years</strong>
            </div>

            <div className="passport-row">
              <span>✈️ Available</span>

              <strong>Worldwide</strong>
            </div>

            <div className="passport-row">
              <span>⭐ Status</span>

              <strong>Verified</strong>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
