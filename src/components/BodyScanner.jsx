import React, { useState } from "react";
import HumanViewer from "./HumanViewer";
import "./BodyScanner.css";

const MEASUREMENTS = [
  { label: "Height", value: "180 cm" },
  { label: "Weight", value: "78.4 kg" },
  { label: "Body Fat", value: "14.2 %" },
  { label: "Muscle Mass", value: "62.7 kg" },
  { label: "Water", value: "58.7 %" },
  { label: "Visceral Fat", value: "6" },
  { label: "Bone Mass", value: "3.4 kg" },
  { label: "Metabolic Age", value: "24" },
];

const COMPOSITION = [
  { label: "Muscle Mass", value: 84 },
  { label: "Body Fat", value: 14 },
  { label: "Bone Mass", value: 75 },
  { label: "Water", value: 78 },
  { label: "Protein", value: 82 },
  { label: "Metabolic Health", value: 88 },
];

const INSIGHTS = [
  "Your muscle mass is above average",
  "Body fat percentage is in the healthy range",
  "Great balance and posture alignment",
  "Your hydration levels are optimal",
  "Consider increasing lower body training",
];

const RECOMMENDATIONS = [
  {
    title: "Focus on Lower Body Strength",
    sub: "Improve leg and glute development",
  },
  { title: "Add 2-3 Strength Sessions", sub: "Compound movements recommended" },
  {
    title: "Increase Daily Protein Intake",
    sub: "Target 1.6g per kg of body weight",
  },
  { title: "Improve Sleep Quality", sub: "7-8 hours for optimal recovery" },
];

export default function BodyScanner() {
  const [scanMode, setScanMode] = useState("advanced"); // "normal" | "advanced"
  const [scanProgress] = useState(68);
  const overallScore = 92;

  // circle math for the score ring
  const R = 46;
  const CIRC = 2 * Math.PI * R;
  const scoreOffset = CIRC - (overallScore / 100) * CIRC;

  return (
    <div className="bs-root">
      <header className="bs-header">
        <div className="bs-brand">
          <span className="bs-brand-icon" aria-hidden="true">
            <svg
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <circle cx="12" cy="7" r="3.2" />
              <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
            </svg>
          </span>
          <div>
            <h1>
              BODY <span className="bs-accent">SCAN</span>
            </h1>
            <p className="bs-subtitle">AI-Powered Body Analysis</p>
          </div>
        </div>
        <div className="bs-live-pill">
          <span className="bs-live-dot" />
          <div>
            <div className="bs-live-title">LIVE SCAN</div>
            <div className="bs-live-sub">Real-time Analysis Active</div>
          </div>
        </div>
      </header>

      <div className="bs-grid">
        {/* LEFT COLUMN */}
        <div className="bs-col bs-col-left">
          <section className="bs-card">
            <h2 className="bs-card-title">
              <IconBolt /> SCAN MODE
            </h2>

            <button
              type="button"
              className={`bs-mode-option ${scanMode === "normal" ? "active" : ""}`}
              onClick={() => setScanMode("normal")}
            >
              <span className="bs-radio" />
              <span className="bs-mode-text">
                <strong>NORMAL SCAN</strong>
                <small>Standard body composition analysis</small>
              </span>
            </button>

            <button
              type="button"
              className={`bs-mode-option ${scanMode === "advanced" ? "active" : ""}`}
              onClick={() => setScanMode("advanced")}
            >
              <span className="bs-radio">
                {scanMode === "advanced" && <span className="bs-radio-dot" />}
              </span>
              <span className="bs-mode-text">
                <strong>
                  ADVANCED SCAN <span className="bs-pro-badge">PRO</span>
                </strong>
                <small>Detailed muscle, posture &amp; health analysis</small>
              </span>
            </button>
          </section>

          <section className="bs-card">
            <h2 className="bs-card-title">
              <IconRuler /> MEASUREMENTS
            </h2>
            <ul className="bs-measure-list">
              {MEASUREMENTS.map((m) => (
                <li key={m.label}>
                  <span className="bs-measure-label">
                    <IconDot /> {m.label}
                  </span>
                  <span className="bs-measure-value">{m.value}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CENTER COLUMN */}
        <div className="bs-col bs-col-center">
          <section className="bs-card bs-scan-card">
            <div className="bs-scan-heading">
              <span className="bs-scan-dot" />
              LIVE BODY SCAN
            </div>

            <HumanViewer
              heartRate={72}
              scanProgress={scanProgress}
              status="Analyzing..."
            />
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <div className="bs-col bs-col-right">
          <section className="bs-card">
            <h2 className="bs-card-title">
              <IconUser /> SCAN RESULTS
            </h2>

            <div className="bs-score-row">
              <div className="bs-score-ring">
                <svg viewBox="0 0 110 110" width="96" height="96">
                  <circle cx="55" cy="55" r={R} className="bs-ring-bg" />
                  <circle
                    cx="55"
                    cy="55"
                    r={R}
                    className="bs-ring-fg"
                    strokeDasharray={CIRC}
                    strokeDashoffset={scoreOffset}
                  />
                </svg>
                <div className="bs-score-text">
                  <strong>{overallScore}</strong>
                  <small>/100</small>
                </div>
              </div>
              <div className="bs-score-copy">
                <div className="bs-score-label">OVERALL SCORE</div>
                <div className="bs-score-value">Excellent</div>
                <p>You're in better shape than 92% of people your age.</p>
              </div>
            </div>

            <h3 className="bs-subhead">BODY COMPOSITION</h3>
            <ul className="bs-bar-list">
              {COMPOSITION.map((c) => (
                <li key={c.label}>
                  <div className="bs-bar-row">
                    <span>{c.label}</span>
                    <span>{c.value}%</span>
                  </div>
                  <div className="bs-bar-track">
                    <div
                      className="bs-bar-fill"
                      style={{ width: `${c.value}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="bs-bottom-grid">
        <section className="bs-card">
          <h2 className="bs-card-title">
            <IconBrain /> AI INSIGHTS
          </h2>
          <ul className="bs-check-list">
            {INSIGHTS.map((text) => (
              <li key={text}>
                <IconCheck /> <span>{text}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bs-card">
          <h2 className="bs-card-title">
            <IconStar /> RECOMMENDATIONS
          </h2>
          <ul className="bs-rec-list">
            {RECOMMENDATIONS.map((r) => (
              <li key={r.title}>
                <span className="bs-rec-icon">
                  <IconDumbbell />
                </span>
                <span>
                  <strong>{r.title}</strong>
                  <small>{r.sub}</small>
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="bs-card bs-next-card">
          <h2 className="bs-card-title">
            <IconTarget /> NEXT STEPS
          </h2>
          <div className="bs-next-box">
            <span className="bs-next-icon">
              <IconTarget />
            </span>
            <div className="bs-next-copy">
              <div className="bs-next-title-row">
                <strong>Run Advanced Scan</strong>
                <span className="bs-pro-badge">PRO</span>
              </div>
              <p>
                Get deeper insights into muscle groups, movement patterns and
                health markers.
              </p>
            </div>
          </div>
          <button type="button" className="bs-cta">
            Start Advanced Scan <span aria-hidden="true">&rarr;</span>
          </button>
          <div className="bs-next-footnote">
            <IconLock /> Unlocks detailed biomechanical analysis
          </div>
        </section>
      </div>

      <footer className="bs-footer">
        <button type="button" className="bs-footer-btn">
          Edit
        </button>
        <button type="button" className="bs-footer-btn bs-footer-btn-primary">
          Share
        </button>
      </footer>
    </div>
  );
}

/* ---------- tiny inline icon set (no external deps) ---------- */

function IconDot() {
  return <span className="bs-inline-dot" aria-hidden="true" />;
}
function IconBolt() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h7l-1 8 11-14h-7z" />
    </svg>
  );
}
function IconRuler() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="3" y="9" width="18" height="6" rx="1" />
      <path d="M7 9v3M11 9v3M15 9v3" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
    >
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-1 5.8V15a3 3 0 0 0 3 3h1M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 1 5.8V15a3 3 0 0 1-3 3h-1M9 3v18M15 3v18" />
    </svg>
  );
}
function IconStar() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7-5.4-4.7 7.1-.6z" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9.5" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}
function IconDumbbell() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 9v6M2 10v4M20 9v6M22 10v4M7 12h10" />
      <rect x="5" y="8" width="3" height="8" rx="1" />
      <rect x="16" y="8" width="3" height="8" rx="1" />
    </svg>
  );
}
