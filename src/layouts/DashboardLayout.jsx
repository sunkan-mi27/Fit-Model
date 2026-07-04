import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import ThemeToggle from "../components/ThemeToggle";
import Notifications from "../components/Notifications";
export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <main className="dashboard-main">
        <Topbar />

        <ThemeToggle />
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
