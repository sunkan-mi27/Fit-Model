export default function Topbar() {
  return (
    <header className="topbar">
      <input placeholder="Search..." />

      <div className="topbar-right">
        <button>🔔</button>

        <div className="profile-chip">
          <div className="avatar-small">S</div>

          <div>
            <strong>Sunkanmi</strong>

            <p>Elite Member</p>
          </div>
        </div>
      </div>
    </header>
  );
}
