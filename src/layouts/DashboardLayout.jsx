import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ThemeToggle from "../components/ThemeToggle";
import Notifications from "../components/Notifications";
import "./DashboardLayout.css";

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="dashboard-main">
        <div className="dashboard-header">
          <button
            className="menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>

          <Topbar />
          <ThemeToggle />
        </div>

        <div className="dashboard-content">
          <div className="dashboard-back">
            <Link to="/" className="ai-home-btn">
              <div className="ai-home-core">🏡</div>
              <div className="ai-home-text">Back Home</div>

              <span className="pulse pulse1"></span>
              <span className="pulse pulse2"></span>
              <span className="pulse pulse3"></span>
            </Link>
          </div>

          {children}
        </div>

        <Notifications />
      </main>
    </div>
  );
}
