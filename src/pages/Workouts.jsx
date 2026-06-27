import DashboardLayout from "../layouts/DashboardLayout";

export default function Workouts() {
  return (
    <DashboardLayout>
      <h1 className="dashboard-title">💪 Workout Center</h1>

      <div className="dashboard-grid">
        <div className="dash-card">
          <h3>Today's Workout</h3>

          <h1>Chest & Triceps</h1>

          <p>Duration: 70 Minutes</p>

          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "72%" }}></div>
          </div>

          <small>72% Completed</small>
        </div>

        <div className="dash-card">
          <h3>Calories Burned</h3>

          <h1>642 kcal</h1>

          <p>Excellent Progress 🔥</p>
        </div>

        <div className="dash-card">
          <h3>Weekly Goal</h3>

          <h1>5 / 6</h1>

          <p>One workout remaining</p>
        </div>

        <div className="dash-card">
          <h3>Current Streak</h3>

          <h1>21 Days</h1>

          <p>Don't break it 💪</p>
        </div>

        <div className="chart-card">
          <h3>This Week</h3>

          <div className="fake-chart">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="ai-card">
          <h3>🤖Today's Coach</h3>

          <p>
            Recovery is excellent.
            <br />
            Increase your chest volume by one extra set today.
          </p>

          <button className="btn-primary">Start Workout</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
