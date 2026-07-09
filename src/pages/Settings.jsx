import DashboardLayout from "../layouts/DashboardLayout";
import "./Settings.css";

export default function Settings() {
  return (
    <DashboardLayout>
      <div className="settings-header">
        <span className="settings-badge">SYSTEM SETTINGS</span>

        <h1>⚙️ Settings</h1>

        <p>
          Manage your FitModel OS account, security, preferences and AI
          experience.
        </p>
      </div>

      <div className="settings-grid">
        {/* ACCOUNT */}

        <div className="settings-card">
          <h2>👤 Account</h2>

          <div className="setting-row">
            <span>Full Name</span>
            <strong>Sunkanmi Ibrahim</strong>
          </div>

          <div className="setting-row">
            <span>Email</span>
            <strong>sunkanmi@email.com</strong>
          </div>

          <div className="setting-row">
            <span>Username</span>
            <strong>@sunkanmi</strong>
          </div>

          <button className="btn-primary">Edit Profile</button>
        </div>

        {/* SECURITY */}

        <div className="settings-card">
          <h2>🔒 Security</h2>

          <div className="setting-row">
            <span>Password</span>
            <button className="btn-secondary">Change</button>
          </div>

          <div className="setting-row">
            <span>Two Factor Authentication</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Login Alerts</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* NOTIFICATIONS */}

        <div className="settings-card">
          <h2>🔔 Notifications</h2>

          <div className="setting-row">
            <span>Workout Reminders</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Brand Messages</span>
            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Email Updates</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* APPEARANCE */}

        <div className="settings-card">
          <h2>🎨 Appearance</h2>

          <div className="setting-row">
            <span>Dark Mode</span>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Accent Color</span>

            <strong>💚 Green</strong>
          </div>

          <button className="btn-secondary">Change Theme</button>
        </div>

        {/* AI */}

        <div className="settings-card">
          <h2>🤖 AI Preferences</h2>

          <div className="setting-row">
            <span>AI Coach</span>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Weekly Reports</span>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>

          <div className="setting-row">
            <span>Performance Suggestions</span>

            <label className="switch">
              <input type="checkbox" defaultChecked />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        {/* MEMBERSHIP */}

        <div className="settings-card">
          <h2>💎 Membership</h2>

          <div className="setting-row">
            <span>Current Plan</span>

            <strong>Elite PRO</strong>
          </div>

          <div className="setting-row">
            <span>Status</span>

            <strong className="active-plan">Active</strong>
          </div>

          <button className="btn-primary">Manage Plan</button>
        </div>
      </div>

      {/* DANGER ZONE */}

      <div className="danger-zone">
        <h2>⚠️ Danger Zone</h2>

        <p>These actions are permanent and cannot be undone.</p>

        <div className="danger-buttons">
          <button className="btn-secondary">Logout</button>

          <button className="btn-danger">Delete Account</button>
        </div>
      </div>
    </DashboardLayout>
  );
}
