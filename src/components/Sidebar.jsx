import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-logo">
        FitModel<span>OS</span>
      </h2>

      <nav>
        <Link to="/dashboard">🏠 Dashboard</Link>

        <Link to="/profile">👤 Profile</Link>

        <Link to="/workouts">💪 Workouts</Link>

        <Link to="/nutrition">🥗 Nutrition</Link>

        <Link to="/portfolio">📁 Portfolio</Link>

        <Link to="/settings">⚙️ Settings</Link>
      </nav>
    </aside>
  );
}
