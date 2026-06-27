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
        <div className="dashboard-content">{children}</div>

        <Notifications />
      </main>
    </div>
  );
}
