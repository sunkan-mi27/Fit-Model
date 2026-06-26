import TiltCard from "./TiltCard";

export default function DashboardPreview() {
  return (
    <section className="dashboard-preview">
      <div className="dashboard-window">
        <div className="dashboard-top">
          <div>
            <small>Good Morning 👋</small>
            <h2>Sunkanmi</h2>
          </div>

          <div className="online"></div>
        </div>

        <div className="dashboard-grid">
          <TiltCard className="dash-card">
            <span>Calories</span>
            <h3>2145</h3>
            <small>🔥 Today</small>
          </TiltCard>

          <TiltCard className="dash-card">
            <span>Water</span>
            <h3>3.4L</h3>
            <small>💧 Goal</small>
          </TiltCard>

          <TiltCard className="dash-card">
            <span>Workout</span>
            <h3>Done</h3>
            <small>✅ Completed</small>
          </TiltCard>

          <TiltCard className="dash-card">
            <span>Brand Score</span>
            <h3>92%</h3>
            <small>📈 +8%</small>
          </TiltCard>
        </div>

        <div className="growth">
          <div className="growth-head">
            <h4>Weekly Growth</h4>

            <span>+18%</span>
          </div>

          <div className="growth-bar">
            <div className="growth-fill"></div>
          </div>
        </div>

        <div className="today">
          <h4>Today's Tasks</h4>

          <ul>
            <li>✅ Gym Session</li>

            <li>✅ Photoshoot</li>

            <li>🟢 Nutrition Plan</li>

            <li>📸 Upload Portfolio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
