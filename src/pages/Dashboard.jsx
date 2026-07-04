import { Link } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardHero from "../components/DashboardHero";
import QuickActions from "../components/QuickActions";
import LiveStatus from "../components/LiveStatus";
import DailyMission from "../components/DailyMission";
import WorkoutCalendar from "../components/WorkoutCalendar";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", workout: 30 },
  { day: "Tue", workout: 45 },
  { day: "Wed", workout: 20 },
  { day: "Thu", workout: 60 },
  { day: "Fri", workout: 80 },
  { day: "Sat", workout: 70 },
  { day: "Sun", workout: 90 },
];

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="back-home">
        <Link to="/" className="back-btn">
          ←Back to Home
        </Link>
      </div>
      <DashboardHero />
      <QuickActions />
      <LiveStatus />
      <>
        <h1 className="dashboard-title">Welcome Back, Sunkanmi 👋</h1>

        <div className="dashboard-grid">
          <div className="dash-card">
            <h3>Workout Progress</h3>

            <div className="circle-progress">
              <div className="circle-value">92%</div>
            </div>
          </div>

          <div className="dash-card">
            <h3>Weekly Streak 🔥</h3>

            <h1>21 Days</h1>

            <p>No missed workouts.</p>
          </div>

          <div className="dash-card">
            <h3>Water Intake 💧</h3>

            <div className="water-bar">
              <div className="water-fill"></div>
            </div>

            <p>3.5 / 4 Litres</p>
          </div>

          <div className="dash-card">
            <h3>Sleep Recovery 😴</h3>

            <div className="sleep-bar">
              <div className="sleep-fill"></div>
            </div>

            <p>8h 12m</p>
          </div>

          <div className="chart-card">
            <h3>Weekly Performance</h3>

            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={data}>
                <XAxis dataKey="day" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="workout"
                  stroke="#22c55e"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="ai-card">
            <h3>🤖Today's Coach</h3>

            <p>Great consistency this week.</p>

            <p>Increase protein intake by 8%.</p>

            <button className="btn-primary">View Advice</button>
          </div>
          <WorkoutCalendar />
        </div>
      </>
      <DailyMission />
    </DashboardLayout>
  );
}
