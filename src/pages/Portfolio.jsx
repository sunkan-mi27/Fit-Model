import DashboardLayout from "../layouts/DashboardLayout";
import "./Portfolio.css";
import Profile from "../assets/profile.jpg";

export default function Portfolio() {
  return (
    <DashboardLayout>
      <section className="portfolio-hero">
        <div className="portfolio-left">
          <span className="status-pill">● VERIFIED ELITE MEMBER</span>

          <h1>Sunkanmi Ibrahim</h1>

          <p className="headline">
            Fitness Model • Brand Ambassador • Performance Athlete
          </p>

          <div className="quick-stats">
            <div>
              <small>Followers</small>
              <h2>248K</h2>
            </div>

            <div>
              <small>Portfolio Views</small>
              <h2>1.8M</h2>
            </div>

            <div>
              <small>Bookings</small>
              <h2>143</h2>
            </div>

            <div>
              <small>Availability</small>
              <h2>Open</h2>
            </div>
          </div>
        </div>

        <div className="portfolio-right">
          <div className="profile-frame">
            <img src={Profile} alt="Sunkanmi" />
          </div>
        </div>
      </section>

      <section className="command-center">
        <div className="command-header">
          <div>
            <small>♻LIVE PERFORMANCE</small>

            <h2>Performance Command Center</h2>
          </div>

          <button className="sync-btn">Sync Data</button>
        </div>

        <div className="command-grid">
          <div className="command-card large">
            <small>Performance Index</small>

            <h1>96.8</h1>

            <span className="positive">▲ +4.2% this month</span>

            <div className="performance-line">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="command-card">
            <small>Body Fat</small>

            <h2>8.4%</h2>

            <p>Elite Range</p>
          </div>

          <div className="command-card">
            <small>Lean Muscle</small>

            <h2>41.2kg</h2>

            <p>Above Average</p>
          </div>

          <div className="command-card">
            <small>Recovery</small>

            <h2>Excellent</h2>

            <div className="status-green"></div>
          </div>

          <div className="command-card">
            <small>Current Weight</small>

            <h2>78.2kg</h2>

            <p>Target Maintained</p>
          </div>

          <div className="command-card">
            <small>Brand Score</small>

            <h2>9.8/10</h2>

            <p>Premium Visibility</p>
          </div>
        </div>
      </section>

      <section className="recruiter-intelligence">
        <div className="intel-header">
          <small>♻RECRUITER INTELLIGENCE</small>

          <h2>Opportunity Prediction Engine</h2>

          <p>
            Continuously analyzes your portfolio performance and predicts career
            opportunities before they happen.
          </p>
        </div>

        <div className="intel-grid">
          <div className="prediction-card">
            <h3>Career Score</h3>

            <div className="career-circle">
              <div className="career-value">97%</div>
            </div>

            <span>Elite Recruiter Confidence</span>
          </div>

          <div className="prediction-card">
            <h3>Brand Match</h3>

            <div className="brand-list">
              <div className="brand-row">
                <span>Nike</span>
                <div className="brand-bar">
                  <div style={{ width: "94%" }}></div>
                </div>
              </div>

              <div className="brand-row">
                <span>Gymshark</span>
                <div className="brand-bar">
                  <div style={{ width: "88%" }}></div>
                </div>
              </div>

              <div className="brand-row">
                <span>Under Armour</span>
                <div className="brand-bar">
                  <div style={{ width: "83%" }}></div>
                </div>
              </div>

              <div className="brand-row">
                <span>Adidas</span>
                <div className="brand-bar">
                  <div style={{ width: "79%" }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="prediction-card">
            <h3> Predictions</h3>

            <div className="prediction-feed">
              <div>🔥 91% chance of sponsorship this month</div>

              <div>📸 Portfolio likely to trend this week</div>

              <div>💼 Recruiter activity increasing</div>

              <div>⭐ Profile engagement up +28%</div>

              <div>🚀 High probability of agency invitation</div>
            </div>
          </div>

          <div className="prediction-card earnings">
            <h3>Estimated Annual Earnings</h3>

            <h1>$185,000</h1>

            <small>
              Based on your current portfolio growth and recruiter demand.
            </small>

            <button className="btn-primary">View Full AI Report</button>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="booking-header">
          <div>
            <small>♻ACTIVE BOOKINGS</small>

            <h2>Brand Deals Pipeline</h2>

            <p>Track sponsorships, campaigns and professional bookings.</p>
          </div>

          <button className="new-booking-btn">+ New Booking</button>
        </div>

        <div className="booking-grid">
          <div className="booking-card pending">
            <div className="booking-top">
              <h3>Nike Campaign</h3>

              <span>Pending</span>
            </div>

            <p>Commercial Photoshoot</p>

            <div className="booking-footer">
              <strong>$4,500</strong>

              <small>12 Jul 2026</small>
            </div>
          </div>

          <div className="booking-card approved">
            <div className="booking-top">
              <h3>Gymshark</h3>

              <span>Approved</span>
            </div>

            <p>Fitness Collection Launch</p>

            <div className="booking-footer">
              <strong>$8,000</strong>

              <small>20 Jul 2026</small>
            </div>
          </div>

          <div className="booking-card progress">
            <div className="booking-top">
              <h3>Under Armour</h3>

              <span>In Progress</span>
            </div>

            <p>Video Advertisement</p>

            <div className="booking-footer">
              <strong>$6,300</strong>

              <small>28 Jul 2026</small>
            </div>
          </div>

          <div className="booking-card completed">
            <div className="booking-top">
              <h3>Puma Elite</h3>

              <span>Completed</span>
            </div>

            <p>Brand Ambassador</p>

            <div className="booking-footer">
              <strong>$11,500</strong>

              <small>Completed</small>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-gallery">
        <div className="gallery-header">
          <div>
            <small>♻PORTFOLIO</small>

            <h2>Featured Campaigns</h2>

            <p>
              Professional shoots, commercial campaigns and elite physique
              portfolio.
            </p>
          </div>

          <button className="gallery-btn">View All</button>
        </div>

        <div className="gallery-grid">
          {[
            {
              title: "Summer Collection",
              category: "Fitness Shoot",
              views: "28.4K",
              likes: "5.8K",
            },

            {
              title: "Commercial",
              category: "Brand Campaign",
              views: "64.9K",
              likes: "12K",
            },

            {
              title: "Gym Photoshoot",
              category: "Portfolio",
              views: "18K",
              likes: "3.9K",
            },

            {
              title: "Luxury Editorial",
              category: "Magazine",
              views: "41K",
              likes: "8.7K",
            },

            {
              title: "Beach Collection",
              category: "Lifestyle",
              views: "56K",
              likes: "11K",
            },

            {
              title: "Fitness Expo",
              category: "Event",
              views: "34K",
              likes: "6.4K",
            },
          ].map((item, index) => (
            <div className="gallery-card" key={index}>
              <div className="gallery-image">
                <div className="image-overlay">
                  <div>
                    <h3>{item.title}</h3>

                    <small>{item.category}</small>
                  </div>

                  <div className="gallery-stats">
                    <span>👁️ {item.views}</span>

                    <span>❤️ {item.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="elite-analytics">
        <div className="analytics-head">
          <div>
            <small>♻CAREER ANALYTICS</small>

            <h2>Elite Performance Intelligence</h2>

            <p>
              AI monitors your growth, brand value, booking performance and
              worldwide visibility.
            </p>
          </div>

          <button className="analytics-btn">Export Report</button>
        </div>

        <div className="analytics-grid">
          <div className="analytics-large">
            <h3>Lifetime Earnings</h3>

            <h1>$184,320</h1>

            <span className="analytics-growth">▲ +38% This Year</span>

            <div className="earnings-chart">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="analytics-card">
            <h4>Brand Value</h4>

            <h2>$480K</h2>

            <small>Estimated Market Value</small>
          </div>

          <div className="analytics-card">
            <h4>Global Reach</h4>

            <h2>74 Countries</h2>

            <small>Audience Distribution</small>
          </div>

          <div className="analytics-card">
            <h4>Engagement</h4>

            <h2>9.8/10</h2>

            <small>Recruiter Rating</small>
          </div>

          <div className="analytics-card">
            <h4>Campaign Success</h4>

            <h2>98%</h2>

            <small>Completion Rate</small>
          </div>
        </div>
      </section>

      <section className="mission-control">
        <div className="mission-header">
          <div>
            <small>♻MISSION CONTROL</small>

            <h2>Career Operations Center</h2>

            <p>Real-time insights powering your fitness career.</p>
          </div>

          <div className="live-chip">
            <span></span>
            LIVE
          </div>
        </div>

        <div className="mission-grid">
          <div className="mission-card ai">
            <h3>🤖 Assistant</h3>

            <ul>
              <li>Increase posting frequency this week.</li>

              <li>Sports brands engagement ↑ 18%</li>

              <li>2 agencies viewed your profile today.</li>

              <li>Upload one new physique shoot.</li>
            </ul>
          </div>

          <div className="mission-card">
            <h3>Portfolio Score</h3>

            <div className="score-ring">
              <div className="score-value">96</div>
            </div>

            <p>Elite Ranking</p>
          </div>

          <div className="mission-card">
            <h3>Recruiter Activity</h3>

            <h1>37</h1>

            <small>Views Today</small>
          </div>

          <div className="mission-card">
            <h3>Upcoming Booking</h3>

            <h2>Nike Studio</h2>

            <small>Tomorrow • 9:00 AM</small>
          </div>

          <div className="mission-card wide">
            <h3>Career Timeline</h3>

            <div className="timeline">
              <div className="timeline-item">
                <span></span>
                Nike Campaign Confirmed
              </div>

              <div className="timeline-item">
                <span></span>
                Gymshark Meeting
              </div>

              <div className="timeline-item">
                <span></span>
                Portfolio Updated
              </div>

              <div className="timeline-item">
                <span></span>
                Score Increased
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="digital-profile">
        <div className="profile-head">
          <div>
            <small>♻DIGITAL ATHLETE</small>

            <h2>Elite Athlete Profile</h2>

            <p>
              Your body composition, measurements and performance in one
              intelligent profile.
            </p>
          </div>

          <div className="verified-chip">✔️ VERIFIED ELITE</div>
        </div>

        <div className="digital-grid">
          <div className="athlete-view">
            <div className="body-circle">
              <div className="body-avatar">🏋🏾</div>

              <span className="hotspot chest"></span>
              <span className="hotspot arm"></span>
              <span className="hotspot leg"></span>
              <span className="hotspot head"></span>
            </div>
          </div>

          <div className="body-stats">
            <div className="body-item">
              <span>Height</span>
              <strong>183 cm</strong>
            </div>

            <div className="body-item">
              <span>Weight</span>
              <strong>78.2 kg</strong>
            </div>

            <div className="body-item">
              <span>Body Fat</span>
              <strong>8.4%</strong>
            </div>

            <div className="body-item">
              <span>Lean Muscle</span>
              <strong>41.2 kg</strong>
            </div>

            <div className="body-item">
              <span>Chest</span>
              <strong>108 cm</strong>
            </div>

            <div className="body-item">
              <span>Waist</span>
              <strong>78 cm</strong>
            </div>

            <div className="body-item">
              <span>Arms</span>
              <strong>43 cm</strong>
            </div>

            <div className="body-item">
              <span>Legs</span>
              <strong>64 cm</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="recruiter-desk">
        <div className="desk-header">
          <div>
            <small>♻LIVE AGENCY DESK</small>
            <h2>Recruiter Intelligence Center</h2>
            <p>
              Manage recruiter conversations, offers, contracts and
              opportunities from one dashboard.
            </p>
          </div>

          <div className="desk-live">
            <span className="live-dot"></span>
            LIVE
          </div>
        </div>

        <div className="desk-grid">
          <div className="message-panel">
            <h3>Recent Recruiters</h3>

            <div className="message-card">
              <div className="avatar-mini">N</div>

              <div>
                <strong>Ivy Athletics</strong>
                <p>Campaign inquiry received.</p>
              </div>

              <small>2m</small>
            </div>

            <div className="message-card">
              <div className="avatar-mini">E</div>

              <div>
                <strong>Elite Sports</strong>
                <p>Requested portfolio review.</p>
              </div>

              <small>14m</small>
            </div>

            <div className="message-card">
              <div className="avatar-mini">A</div>

              <div>
                <strong>Alpha Models</strong>
                <p>Contract awaiting signature.</p>
              </div>

              <small>1h</small>
            </div>
          </div>

          <div className="offer-panel">
            <h3>Open Opportunities</h3>

            <div className="offer-item">
              <span>Fitness Campaign</span>
              <strong>$4,500</strong>
            </div>

            <div className="offer-item">
              <span>Brand Ambassador</span>
              <strong>$8,000</strong>
            </div>

            <div className="offer-item">
              <span>Commercial Shoot</span>
              <strong>$2,200</strong>
            </div>

            <button className="btn-primary">View All Opportunities</button>
          </div>

          <div className="ai-recruiter">
            <h3>🤖Recruiter Assistant</h3>

            <div className="ai-tip success">
              Highest chance of acceptance:
              <strong> Ivy Athletics</strong>
            </div>

            <div className="ai-tip">
              Portfolio score increased by
              <strong> +12%</strong>
            </div>

            <div className="ai-tip">
              Best time to reply:
              <strong> 8:00 PM</strong>
            </div>

            <div className="ai-tip">
              Estimated monthly earnings:
              <strong> $18,500</strong>
            </div>
          </div>
        </div>
      </section>
      <section className="analytics-studio">
        <div className="studio-header">
          <div>
            <small>♻ ANALYTICS</small>

            <h2>Performance Intelligence Studio</h2>

            <p>
              Real-time analytics showing portfolio growth, recruiter activity,
              engagement and earnings predictions.
            </p>
          </div>

          <button className="btn-primary">Export Report</button>
        </div>

        <div className="studio-grid">
          <div className="analytics-large">
            <h3>Monthly Growth</h3>

            <div className="growth-chart">
              <span style={{ height: "28%" }}></span>

              <span style={{ height: "40%" }}></span>

              <span style={{ height: "52%" }}></span>

              <span style={{ height: "60%" }}></span>

              <span style={{ height: "72%" }}></span>

              <span style={{ height: "88%" }}></span>

              <span style={{ height: "100%" }}></span>
            </div>

            <div className="chart-labels">
              <small>Jan</small>

              <small>Feb</small>

              <small>Mar</small>

              <small>Apr</small>

              <small>May</small>

              <small>Jun</small>

              <small>Jul</small>
            </div>
          </div>

          <div className="analytics-small">
            <h4>Portfolio Views</h4>

            <h1>148,294</h1>

            <span>▲ +18% this month</span>
          </div>

          <div className="analytics-small">
            <h4>Recruiter Engagement</h4>

            <h1>96%</h1>

            <span>Highest ever</span>
          </div>

          <div className="analytics-small">
            <h4>Estimated Revenue</h4>

            <h1>$18,500</h1>

            <span>Projected Monthly</span>
          </div>

          <div className="analytics-small">
            <h4> Prediction</h4>

            <h1>+31%</h1>

            <span>Growth Expected</span>
          </div>
        </div>
      </section>

      <section className="global-presence">
        <div className="presence-left">
          <small>♻GLOBAL REACH</small>

          <h2>Worldwide Recruiter Activity</h2>

          <p>
            Live intelligence showing where recruiters are currently viewing
            your profile around the world.
          </p>

          <div className="world-map">
            <div className="pulse us"></div>
            <div className="pulse uk"></div>
            <div className="pulse nigeria"></div>
            <div className="pulse dubai"></div>
            <div className="pulse japan"></div>
            <div className="pulse canada"></div>
          </div>
        </div>

        <div className="presence-right">
          <div className="activity-feed">
            <h3>Live Activity</h3>

            <div className="feed-item">
              🟢 Nike recruiter viewed your portfolio
              <small>12 sec ago</small>
            </div>

            <div className="feed-item">
              🔥 Elite Agency downloaded your media kit
              <small>1 min ago</small>
            </div>

            <div className="feed-item">
              ⭐ New profile follower
              <small>3 mins ago</small>
            </div>

            <div className="feed-item">
              📩 Interview invitation received
              <small>9 mins ago</small>
            </div>

            <div className="feed-item">
              💰 New sponsorship opportunity
              <small>18 mins ago</small>
            </div>
          </div>

          <div className="country-stats">
            <div>
              <h1>🇺🇸</h1>
              <span>United States</span>
              <strong>46%</strong>
            </div>

            <div>
              <h1>🇬🇧</h1>
              <span>United Kingdom</span>
              <strong>18%</strong>
            </div>

            <div>
              <h1>🇳🇬</h1>
              <span>Nigeria</span>
              <strong>14%</strong>
            </div>

            <div>
              <h1>🇨🇦</h1>
              <span>Canada</span>
              <strong>11%</strong>
            </div>

            <div>
              <h1>🇯🇵</h1>
              <span>Japan</span>
              <strong>7%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="command-center">
        <div className="command-left">
          <small>♻ COMMAND CENTER</small>

          <h2>Platform Intelligence</h2>

          <p>
            Every part of your career is monitored in real-time by FitModel
            <strong> OS.</strong>
          </p>

          <div className="system-grid">
            <div className="system-card online">
              <span>Engine</span>
              <h3>ONLINE</h3>
            </div>

            <div className="system-card">
              <span>Database</span>
              <h3>99.99%</h3>
            </div>

            <div className="system-card">
              <span>API Speed</span>
              <h3>42ms</h3>
            </div>

            <div className="system-card">
              <span>Security</span>
              <h3>Protected</h3>
            </div>
          </div>
        </div>

        <div className="terminal">
          <div className="terminal-top">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>

            <h4>LIVE SYSTEM LOGS</h4>
          </div>

          <div className="terminal-body">
            <p>{">"}Engine Connected...</p>

            <p>{">"}Recruiter detected from London...</p>

            <p>{">"}Portfolio Score recalculated...</p>

            <p>{">"}Sponsorship Opportunity Found...</p>

            <p>{">"} Media Kit Downloaded...</p>

            <p>{">"}Body Metrics Synced...</p>

            <p>{">"}Analytics Updated...</p>

            <p className="typing-line">{">"}Waiting for next event...</p>
          </div>
        </div>
      </section>
    </DashboardLayout>
  );
}
