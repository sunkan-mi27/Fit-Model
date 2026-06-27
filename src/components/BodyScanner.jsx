import "./BodyScanner.css";

export default function BodyScanner() {
  return (
    <section className="body-scanner">
      <p className="scanner-tag">AI BODY SCANNER</p>

      <h2>Scan Your Fitness Blueprint</h2>

      <div className="scanner-box">
        <div className="scanner-body">
          <div className="body-outline"></div>
          <div className="scan-line"></div>
          <div className="hologram">
            <div className="head"></div>
            <div className="body"></div>
            <div className="arm left"></div>
            <div className="arm right"></div>
            <div className="leg left"></div>
            <div className="leg right"></div>
          </div>

          <div className="scan-grid"></div>
          <div className="analysis-complete">ANALYSIS COMPLETED</div>
        </div>

        <div className="results">
          <div className="result">
            <span>Muscle Mass</span>
            <strong>91%</strong>
          </div>

          <div className="result">
            <span>Body Fat</span>
            <strong>12%</strong>
          </div>

          <div className="result">
            <span>Symmetry</span>
            <strong>95%</strong>
          </div>

          <div className="result">
            <span>Recovery</span>
            <strong>97%</strong>
          </div>

          <div className="result">
            <span>AI Verdict</span>
            <strong>ELITE</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
