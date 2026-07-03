import DashboardLayout from "../layouts/DashboardLayout";

const models = [
  {
    id: 1,
    name: "Alex Carter",
    country: "🇺🇸 USA",
    followers: "142k",
    rating: "9.8",
    status: "Available",
  },
  {
    id: 2,
    name: "David Stone",
    country: "🇬🇧 UK",
    followers: "89k",
    rating: "9.6",
    status: "Booked",
  },
  {
    id: 3,
    name: "Michael James",
    country: "🇨🇦 Canada",
    followers: "201k",
    rating: "9.9",
    status: "Available",
  },
  {
    id: 4,
    name: "Daniel Lee",
    country: "🇦🇺 Australia",
    followers: "116k",
    rating: "9.7",
    status: "Available",
  },
  {
    id: 5,
    name: "Samuel Green",
    country: "🇳🇬 Nigeria",
    followers: "74k",
    rating: "9.5",
    status: "Booked",
  },
  {
    id: 6,
    name: "Chris Walker",
    country: "🇩🇪 Germany",
    followers: "154k",
    rating: "9.8",
    status: "Available",
  },
];

export default function Discover() {
  return (
    <DashboardLayout>
      <div className="discover-header">
        <div>
          <h1>🌍 Discover Models</h1>
          <p>Connect with elite athletes and fitness models worldwide.</p>
        </div>

        <button className="btn-primary">+ Become Featured</button>
      </div>

      <div className="discover-search">
        <input placeholder="🔍 Search model..." />

        <select>
          <option>All Countries</option>
          <option>Nigeria</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
        </select>

        <select>
          <option>Availability</option>
          <option>Available</option>
          <option>Booked</option>
        </select>
      </div>

      <div className="discover-grid">
        {models.map((model) => (
          <div className="model-card" key={model.id}>
            <div className="model-cover"></div>

            <div className="model-avatar">{model.name.charAt(0)}</div>

            <h2>{model.name}</h2>

            <span>{model.country}</span>

            <div className="model-stats">
              <div>
                <strong>{model.followers}</strong>
                <small>Followers</small>
              </div>

              <div>
                <strong>{model.rating}</strong>
                <small>Rating</small>
              </div>
            </div>

            <div
              className={
                model.status === "Available"
                  ? "status available"
                  : "status booked"
              }
            >
              {model.status}
            </div>

            <div className="model-buttons">
              <button className="btn-primary">View Profile</button>

              <button className="btn-secondary">Message</button>
            </div>
          </div>
        ))}
      </div>
      {/* ================= TRENDING MODELS ================= */}

      <div className="discover-section">
        <h2>🔥 Trending This Week</h2>

        <div className="trending-models">
          <div className="trend-card">
            <span className="trend-rank">#1</span>

            <h3>Alex Carter</h3>

            <p>+12,420 followers this week</p>

            <small>🔥 Engagement 98%</small>
          </div>

          <div className="trend-card">
            <span className="trend-rank">#2</span>

            <h3>Daniel Lee</h3>

            <p>Featured by Nike Campaign</p>

            <small>⭐ Portfolio Score 99%</small>
          </div>

          <div className="trend-card">
            <span className="trend-rank">#3</span>

            <h3>Samuel Green</h3>

            <p>Won Fitness Model Award</p>

            <small>🏆 Verified Athlete</small>
          </div>
        </div>
      </div>

      {/* ================= LIVE ACTIVITY ================= */}

      <div className="discover-section">
        <h2>⚡ Live Activity</h2>

        <div className="activity-feed">
          <div className="activity-item">
            <div className="activity-dot"></div>

            <div>
              <strong>Chris Walker</strong>

              <p>uploaded new portfolio photos.</p>

              <small>2 minutes ago</small>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-dot"></div>

            <div>
              <strong>Michael James</strong>

              <p>accepted a Gymshark collaboration.</p>

              <small>8 minutes ago</small>
            </div>
          </div>

          <div className="activity-item">
            <div className="activity-dot"></div>

            <div>
              <strong>David Stone</strong>

              <p>completed today's workout.</p>

              <small>15 minutes ago</small>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURED BRANDS ================= */}

      <div className="discover-section">
        <h2>🤝 Featured Brands</h2>

        <div className="brand-grid">
          <div className="brand-card">
            <h3>Nike</h3>

            <p>Hiring Elite Models</p>

            <button className="btn-primary">Apply</button>
          </div>

          <div className="brand-card">
            <h3>Gymshark</h3>

            <p>Fitness Campaign 2026</p>

            <button className="btn-primary">Apply</button>
          </div>

          <div className="brand-card">
            <h3>Puma</h3>

            <p>Sports Ambassador Program</p>

            <button className="btn-primary">Apply</button>
          </div>

          <div className="brand-card">
            <h3>Under Armour</h3>

            <p>Performance Athlete Search</p>

            <button className="btn-primary">Apply</button>
          </div>
        </div>
      </div>

      {/* ================= LEADERBOARD ================= */}

      <div className="discover-section">
        <h2>🏆 Elite Leaderboard</h2>

        <div className="leaderboard">
          <div className="leader-card first">
            <span>🥇</span>

            <h3>Alex Carter</h3>

            <p>Portfolio Score</p>

            <h1>99.8%</h1>
          </div>

          <div className="leader-card second">
            <span>🥈</span>

            <h3>Daniel Lee</h3>

            <p>Portfolio Score</p>

            <h1>99.2%</h1>
          </div>

          <div className="leader-card third">
            <span>🥉</span>

            <h3>Chris Walker</h3>

            <p>Portfolio Score</p>

            <h1>98.9%</h1>
          </div>
        </div>
      </div>

      {/* ================= QUICK STATS ================= */}

      <div className="discover-section">
        <h2>📊 Community Overview</h2>

        <div className="community-grid">
          <div className="community-card">
            <h1>12,458</h1>
            <p>Verified Models</p>
          </div>

          <div className="community-card">
            <h1>325</h1>
            <p>Partner Brands</p>
          </div>

          <div className="community-card">
            <h1>$4.8M</h1>
            <p>Brand Deals</p>
          </div>

          <div className="community-card">
            <h1>82</h1>
            <p>Countries</p>
          </div>
        </div>
      </div>

      {/* ================= JOIN COMMUNITY ================= */}

      <div className="join-community">
        <h1>Become One Of The World's Top Fitness Models</h1>

        <p>
          Build your verified portfolio, connect with global brands, get
          discovered and grow your fitness career.
        </p>

        <button className="btn-primary">🚀 Join Elite Network</button>
      </div>
    </DashboardLayout>
  );
}
