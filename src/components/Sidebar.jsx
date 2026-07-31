import { Link, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar({ open, setOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setOpen(false);
    navigate("/login");
  };

  return (
    <>
      <aside className={open ? "sidebar open" : "sidebar"}>
        <h2 className="sidebar-logo">
          FitModel<span>OS</span>
        </h2>

        <nav>
          <Link to="/dashboard" onClick={() => setOpen(false)}>
            🏠 Dashboard
          </Link>
          <Link to="/profile" onClick={() => setOpen(false)}>
            👤 Profile
          </Link>
          <Link to="/workouts" onClick={() => setOpen(false)}>
            💪 Workouts
          </Link>
          <Link to="/nutrition" onClick={() => setOpen(false)}>
            🥗 Nutrition
          </Link>
          <Link to="/portfolio" onClick={() => setOpen(false)}>
            📁 Portfolio
          </Link>
          <Link to="/settings" onClick={() => setOpen(false)}>
            ⚙️ Settings
          </Link>
          <Link to="/discover" onClick={() => setOpen(false)}>
            🌍 Discover
          </Link>
          <Link to="/messages" onClick={() => setOpen(false)}>
            💬 Messages
          </Link>
          <Link to="/wallet" onClick={() => setOpen(false)}>
            💳 Wallet
          </Link>
          <Link to="/analytics" onClick={() => setOpen(false)}>
            📊 Analytics
          </Link>
          <button className="sidebar-logout" onClick={handleLogout}>
            <strong>🚪 Logout</strong>
          </button>
        </nav>
      </aside>
    </>
  );
}
