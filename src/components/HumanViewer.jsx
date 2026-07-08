import React from "react";

export default function HumanViewer({
  heartRate = 72,
  scanProgress = 68,
  status = "Analyzing...",
}) {
  const RADIUS = 42;
  const CIRC = 2 * Math.PI * RADIUS;
  const offset = CIRC * (1 - scanProgress / 100);

  return (
    <div className="bs-scan-stage">
      <div className="bs-floor" aria-hidden="true" />

      <div className="bs-orbit-wrap" aria-hidden="true">
        <div className="bs-orbit orbit-1" />
        <div className="bs-orbit orbit-2" />
        <div className="bs-orbit orbit-3" />
      </div>

      <div className="bs-particles" aria-hidden="true">
        {Array.from({ length: 26 }).map((_, i) => (
          <span key={i} className={`bs-particle p-${(i % 3) + 1}`} />
        ))}
      </div>

      <FigureHero />

      <div className="bs-hud bs-hud-heart">
        <div className="bs-hud-label">HEART RATE</div>
        <div className="bs-hud-heart-row">
          <IconHeart />
          <span className="bs-hud-big">{heartRate} </span>
        </div>
        <div className="bs-hud-sub">BPM </div>
        <svg className="bs-ecg" viewBox="0 0 100 20" preserveAspectRatio="none">
          <polyline
            points="0,10 15,10 20,2 25,18 30,10 45,10 50,4 55,16 60,10 100,10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </div>

      <div className="bs-hud bs-hud-status">
        <div className="bs-hud-label">SCAN STATUS</div>
        <div className="bs-hud-sub">{status}</div>
        <div className="bs-progress-track">
          <div
            className="bs-progress-fill"
            style={{ width: `${scanProgress}%` }}
          />
        </div>
        <div className="bs-progress-ring">
          <svg viewBox="0 0 100 100" width="100" height="100">
            <circle cx="50" cy="50" r={RADIUS} className="bs-ring-bg" />
            <circle
              cx="50"
              cy="50"
              r={RADIUS}
              className="bs-ring-fg"
              strokeDasharray={CIRC}
              strokeDashoffset={offset}
            />
          </svg>
          <div className="bs-progress-text">
            <strong>{scanProgress}%</strong>
            <small>PROCESSING</small>
          </div>
        </div>
      </div>
    </div>
  );
}

function IconHeart() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 21s-7.5-4.9-10-9.4C.5 8 2.4 4.5 6 4.5c2 0 3.4 1 5 2.7 1.6-1.7 3-2.7 5-2.7 3.6 0 5.5 3.5 4 7.1-2.5 4.5-10 9.4-10 9.4z" />
    </svg>
  );
}
function FigureHero() {
  return (
    <svg className="bs-figure" viewBox="0 0 200 440" aria-hidden="true">
      <defs>
        <linearGradient id="bsBodyFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.22" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.04" />
        </linearGradient>
        <radialGradient id="bsAura" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.4" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse
        cx="100"
        cy="150"
        rx="90"
        ry="130"
        fill="url(#bsAura)"
        className="bs-aura-pulse"
      />

      <g fill="url(#bsBodyFill)" stroke="currentColor" strokeWidth="2">
        <circle cx="100" cy="34" r="24" />
        <rect x="88" y="54" width="24" height="16" rx="6" />
        <rect x="62" y="66" width="76" height="120" rx="26" />
        <rect x="28" y="76" width="26" height="112" rx="13" />
        <rect x="146" y="76" width="26" height="112" rx="13" />
        <rect x="66" y="182" width="30" height="150" rx="14" />
        <rect x="104" y="182" width="30" height="150" rx="14" />
        <rect x="62" y="326" width="38" height="14" rx="7" />
        <rect x="100" y="326" width="38" height="14" rx="7" />
      </g>

      <g fill="currentColor" className="bs-node-pulse">
        <circle cx="100" cy="34" r="2.6" />
        <circle cx="100" cy="70" r="2.2" />
        <circle cx="41" cy="120" r="2" />
        <circle cx="159" cy="120" r="2" />
        <circle cx="100" cy="126" r="2.2" />
        <circle cx="81" cy="182" r="2" />
        <circle cx="119" cy="182" r="2" />
        <circle cx="81" cy="290" r="1.8" />
        <circle cx="119" cy="290" r="1.8" />
      </g>
    </svg>
  );
}
