import DashboardLayout from "../layouts/DashboardLayout";

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
            <img src="/profile.jpg" alt="Sunkanmi" />
          </div>
        </div>
      </section>

      <section className="command-center">
        <div className="command-header">
          <div>
            <small>LIVE PERFORMANCE</small>

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

      <section className="booking-section">
        <div className="booking-header">
          <div>
            <small>ACTIVE BOOKINGS</small>

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
            <small>PORTFOLIO</small>

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
            <small>CAREER ANALYTICS</small>

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
            <small>MISSION CONTROL</small>

            <h2>AI Career Operations Center</h2>

            <p>Real-time insights powering your fitness career.</p>
          </div>

          <div className="live-chip">
            <span></span>
            LIVE
          </div>
        </div>

        <div className="mission-grid">
          <div className="mission-card ai">
            <h3>🤖 AI Assistant</h3>

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
                AI Score Increased
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="digital-profile">
        <div className="profile-head">
          <div>
            <small>DIGITAL ATHLETE</small>

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
    </DashboardLayout>
  );
}
