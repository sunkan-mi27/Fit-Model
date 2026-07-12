import DashboardLayout from "../layouts/DashboardLayout";
import "./AICoach.css";

export default function AICoach() {
  return (
    <DashboardLayout>
      <h1 className="dashboard-title">🤖 AI Performance Command Center</h1>

      <div className="ai-dashboard">
        <div className="ai-overview">
          <div className="ai-avatar">
            <div className="ai-core"></div>
          </div>

          <div>
            <h2>FitModel AI</h2>

            <p>
              Your performance has improved by 14% this month. Recovery score is
              excellent. You are ready for today's workout.
            </p>
          </div>
        </div>

        <div className="ai-grid">
          <div className="ai-metric">
            <span>❤️ Recovery</span>
            <h2>96%</h2>
          </div>

          <div className="ai-metric">
            <span>⚡ Energy</span>
            <h2>91%</h2>
          </div>

          <div className="ai-metric">
            <span>💪 Muscle Readiness</span>
            <h2>94%</h2>
          </div>

          <div className="ai-metric">
            <span>🧠 Focus</span>
            <h2>88%</h2>
          </div>

          <div className="ai-metric">
            <span>😴 Sleep</span>
            <h2>8h 22m</h2>
          </div>

          <div className="ai-metric">
            <span>🔥 Calories Today</span>
            <h2>642</h2>
          </div>
        </div>

        <div className="prediction-card">
          <h2>📈 Weekly Prediction</h2>

          <p>
            AI predicts a<strong> 3.8% increase </strong>
            in strength if consistency continues.
          </p>
        </div>

        <div className="ai-live-panel">
          <h2>🛰️ Live AI Analysis</h2>

          <div className="live-grid">
            <div className="live-card">
              <span>❤️ Heart Rate</span>
              <h2>72 BPM</h2>

              <div className="pulse-line">
                <span></span>
              </div>
            </div>

            <div className="live-card">
              <span>🫁 Oxygen</span>
              <h2>98%</h2>

              <div className="meter">
                <div className="meter-fill oxygen"></div>
              </div>
            </div>

            <div className="live-card">
              <span>⚡ Fatigue</span>
              <h2>Low</h2>

              <div className="meter">
                <div className="meter-fill fatigue"></div>
              </div>
            </div>

            <div className="live-card">
              <span>🧬 Muscle Load</span>
              <h2>82%</h2>

              <div className="meter">
                <div className="meter-fill muscle"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="coach-advice">
          <h2>Today's Recommendations</h2>

          <ul>
            <li>✔️ Increase protein intake by 15g</li>

            <li>✔️ Stretch hamstrings for 12 minutes</li>

            <li>✔️ Sleep before 10:30 PM</li>

            <li>✔️ Complete Chest & Triceps workout</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
}
