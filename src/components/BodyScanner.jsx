import "./BodyScanner.css";
import humanScan from "../assets/human-scan.png";

export default function BodyScanner() {
  return (
    <section className="body-scanner">
      <p className="scanner-tag"> BODY SCANNER</p>

      <h2>Scan Your Fitness Blueprint</h2>

      <div className="scanner-box">
        <div className="scanner-body">
          <div className="scanner-grid-bg"></div>

          <div className="scanner-ring ring-one"></div>

          <div className="scanner-ring ring-two"></div>

          <div className="scanner-ring ring-three"></div>

          <div className="scanner-glow"></div>

          <div className="scanner-image">
            <img src={humanScan} alt="Human Scan" />
          </div>

          <div className="scan-line"></div>

          <div className="scan-particles">
            <span></span>

            <span></span>

            <span></span>

            <span></span>

            <span></span>
          </div>

          <div className="scanner-status">
            <span className="live-dot"></span>
            LIVE BODY ANALYSIS
          </div>
        </div>
      </div>

      <div className="results">
        <div className="result reveal-1">
          <span>Muscle Mass</span>
          <strong>91%</strong>
        </div>

        <div className="result reveal-2">
          <span>Body Fat</span>
          <strong>12%</strong>
        </div>

        <div className="result reveal-3">
          <span>Symmetry</span>
          <strong>95%</strong>
        </div>

        <div className="result reveal-4">
          <span>Recovery</span>
          <strong>97%</strong>
        </div>

        <div className="result reveal-5 elite">
          <span>AI Verdict</span>
          <strong>ELITE</strong>
        </div>
      </div>
    </section>
  );
}
