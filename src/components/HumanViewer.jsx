import React from "react";

/**
 * HumanViewer
 * Renders the live 3D-style body scan visual: rotating rings, scan line,
 * figure silhouette, heart-rate HUD, and scan-progress HUD.
 *
 * Props:
 *  - heartRate: number (bpm shown in the heart-rate HUD)
 *  - scanProgress: number 0-100 (drives the progress bar + ring)
 *  - status: string label shown under "SCAN STATUS"
 */
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
      <div className="bs-scan-rings" aria-hidden="true">
        <div className="ring ring-1" />
        <div className="ring ring-2" />
        <div className="ring ring-3" />
      </div>

      <div className="bs-scan-line" aria-hidden="true" />

      <FigureSilhouette />

      <div className="bs-hud bs-hud-heart">
        <div className="bs-hud-label">HEART RATE</div>
        <div className="bs-hud-heart-row">
          <IconHeart /> <span className="bs-hud-big">{heartRate}</span>
        </div>
        <div className="bs-hud-sub">BPM</div>
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
            style={{ width: `${scanProgress}% ` }}
          />
        </div>
        <div className="bs-progress-ring">
          <svg viewBox="0 0 100 100" width="72" height="72">
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
            <small>COMPLETE</small>
          </div>
        </div>
      </div>

      <div className="bs-platform" aria-hidden="true" />
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

function FigureSilhouette() {
  return (
    <svg className="bs-figure" viewBox="0 0 200 440" aria-hidden="true">
      <defs>
        <linearGradient id="bsBodyFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* filled realistic body silhouette, front-facing, arms at sides */}
      <path
        fill="url(#bsBodyFill)"
        stroke="currentColor"
        strokeWidth="1.4"
        d="M100 10
           c16 0 27 13 27 30 0 12-5 21-12 27 20 6 33 20 38 42
           l10 60c2 12-3 20-13 22l-14 3 4 92c1 10-6 17-15 17h-1
           l-4-96h-40l-4 96h-1c-9 0-16-7-15-17l4-92-14-3
           c-10-2-15-10-13-22l10-60c5-22 18-36 38-42-7-6-12-15-12-27
           0-17 11-30 27-30z"
      />

      {/* soft joint / scan nodes to sell the "AI tracking" look */}
      <g fill="currentColor">
        <circle cx="100" cy="40" r="2.4" />
        <circle cx="100" cy="112" r="2.2" />
        <circle cx="63" cy="150" r="2" />
        <circle cx="137" cy="150" r="2" />
        <circle cx="58" cy="230" r="1.8" />
        <circle cx="142" cy="230" r="1.8" />
        <circle cx="82" cy="230" r="2.2" />
        <circle cx="118" cy="230" r="2.2" />
        <circle cx="78" cy="330" r="1.8" />
        <circle cx="122" cy="330" r="1.8" />
        <circle cx="76" cy="420" r="1.6" />
        <circle cx="124" cy="420" r="1.6" />
      </g>

      {/* fine mesh lines across the body for the scanned-surface feel */}
      <g stroke="currentColor" strokeWidth="0.4" opacity="0.5">
        <path d="M60 150h80M55 190h90M58 230h84M65 270h70M70 330h60M78 380h44" />
      </g>
    </svg>
  );
}
