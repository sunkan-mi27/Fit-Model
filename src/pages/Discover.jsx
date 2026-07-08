import DashboardLayout from "../layouts/DashboardLayout";
import "./Discover.css";

const models = [
  {
    id: 1,
    name: "Alex Carter",
    country: "🇺🇸 USA",
    followers: "142k",
    rating: "9.8",
    score: "99.2%",
    speciality: "Men's Physique",
    response: "2 hrs",
    verified: "true",
    online: "true",
    status: "Available",
    avatar: "AC",
    avatarColor: "#22c55e",
  },
  {
    id: 2,
    name: "David Stone",
    country: "🇬🇧 UK",
    followers: "89k",
    rating: "9.6",
    score: "84.7%",
    speciality: "Men's Physique",
    response: "2 hrs",
    verified: "true",
    online: "true",
    status: "Booked",
    avatar: "DS",
    avatarColor: "#8b5cf6",
  },
  {
    id: 3,
    name: "Michael James",
    country: "🇨🇦 Canada",
    followers: "201k",
    rating: "9.9",
    score: "97.8%",
    speciality: "Men's Physique",
    response: "2 hrs",
    verified: "true",
    online: "true",
    status: "Available",
    avatar: "MJ",
    avatarColor: "#3b82f6",
  },
  {
    id: 4,
    name: "Daniel Lee",
    country: "🇦🇺 Australia",
    followers: "116k",
    rating: "9.7",
    score: "91.0%",
    speciality: "Men's Physique",
    response: "2 hrs",
    verified: "true",
    online: "true",
    status: "Available",
    avatar: "DL",
    avatarColor: "#f59e0b",
  },
  {
    id: 5,
    name: "Samuel Green",
    country: "🇳🇬 Nigeria",
    followers: "74k",
    rating: "9.5",
    score: "89.9%",
    speciality: "Men's Physique",
    response: "2 hrs",
    verified: "true",
    online: "true",
    status: "Available",
    avatar: "SG",
    avatarColor: "#ef4444",
  },
  {
    id: 6,
    name: "Chris Walker",
    country: "🇩🇪 Germany",
    followers: "154k",
    rating: "9.8",
    score: "95.3%",
    speciality: "Men's Physique",
    response: "2 hrs",
    verified: "true",
    online: "true",
    status: "Available",
    avatar: "CW",
    avatarColor: "#06b6d4",
  },
];

export default function Discover() {
  return (
    <DashboardLayout>
      <div className="discover-header">
        <div className="discover-title">
          <span className="discover-badge">LIVE DISCOVERY</span>
          <h1>
            🌍Discover
            <span>Elite Fitness Models</span>
          </h1>
          <p>
            Explore verified athletes, creators and ambassadors from around the
            world powered by FitModel AI.
          </p>
        </div>

        <button className="discover-feature-btn">
          Become Featured
          <span>⇢</span>
        </button>
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
            <div className="model-cover">
              <div className="verified-badge">✔ VERIFIED</div>
              <div className="online-status">
                <span></span>Online
              </div>
            </div>
            <div className="profile-top">
              <div
                className="profile-avatar"
                style={{
                  background: `linear-gradient(135deg, ${model.avatarColor}, #ffffff20)`,
                }}
              >
                {model.avatar}
                {model.online && <span className="online-dot"></span>}
              </div>
              <div className="profile-info">
                <h2>
                  {model.name}
                  {model.verified && <span className="verified-icon">✔</span>}
                </h2>
                <p>{model.country}</p>
                <small>{model.speciality}</small>
              </div>
            </div>

            <div className="portfolio-score">
              Portfolio Score<strong>{model.score}</strong>
            </div>

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
            <div className="profile-footer">
              <div className="ai-match">
                <span>🤖 AI Match</span>
                <strong>96%</strong>
              </div>
              {/* <div className="response-time">⚡ {model.response}</div> */}
            </div>
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
