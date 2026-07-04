import DashboardLayout from "../layouts/DashboardLayout";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
} from "recharts";

const workoutData = [
  { day: "Mon", workout: 45, calories: 520 },
  { day: "Tue", workout: 60, calories: 680 },
  { day: "Wed", workout: 30, calories: 350 },
  { day: "Thu", workout: 75, calories: 840 },
  { day: "Fri", workout: 50, calories: 610 },
  { day: "Sat", workout: 90, calories: 980 },
  { day: "Sun", workout: 40, calories: 470 },
];

export default function Analytics() {
  return (
    <DashboardLayout>
      <h1 className="dashboard-title">📊 Performance Analytics</h1>

      <div className="analytics-stats">
        <div className="analytics-card">
          <small>Total Workouts</small>
          <h2>124</h2>
        </div>

        <div className="analytics-card">
          <small>Calories Burned</small>
          <h2>18,420</h2>
        </div>

        <div className="analytics-card">
          <small>Followers</small>
          <h2>18.4K</h2>
        </div>

        <div className="analytics-card">
          <small>Brand Deals</small>
          <h2>27</h2>
        </div>
      </div>

      <div className="analytics-grid">
        <div className="chart-card">
          <h3>Workout Duration</h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={workoutData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="workout"
                stroke="#00E5FF"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Calories Burned</h3>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={workoutData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="calories"
                stroke="#00ff88"
                fill="#00ff88"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="analytics-bottom">
        <div className="analytics-card large">
          <h3>🏆 Monthly Performance</h3>

          <div className="performance-list">
            <div className="performance-item">
              <span>Workout Consistency</span>
              <strong>96%</strong>
            </div>

            <div className="performance-item">
              <span>Nutrition Score</span>
              <strong>91%</strong>
            </div>

            <div className="performance-item">
              <span>Recovery Rate</span>
              <strong>89%</strong>
            </div>

            <div className="performance-item">
              <span>Portfolio Growth</span>
              <strong>+24%</strong>
            </div>
          </div>
        </div>

        <div className="analytics-card large">
          <h3>🤖 AI Insights</h3>

          <div className="insight-item">
            💪 Strength increased by <strong>12%</strong>
          </div>

          <div className="insight-item">
            🔥 Calories burned this month:
            <strong>18,420 kcal</strong>
          </div>

          <div className="insight-item">❤️ Recovery score is excellent.</div>

          <div className="insight-item">
            🏆 You're in the Top 5% of athletes.
          </div>
        </div>
      </div>

      <div className="analytics-goal">
        <div className="analytics-card large">
          <h3>🎯 Goals Progress</h3>

          <div className="goal-row">
            <span>Workout Goal</span>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "82%" }}></div>
            </div>

            <strong>82%</strong>
          </div>

          <div className="goal-row">
            <span>Nutrition Goal</span>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "94%" }}></div>
            </div>

            <strong>94%</strong>
          </div>

          <div className="goal-row">
            <span>Sleep Goal</span>

            <div className="progress-bar">
              <div className="progress-fill" style={{ width: "76%" }}></div>
            </div>

            <strong>76%</strong>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
