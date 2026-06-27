import "./BodyScanner.css";

export default function BodyScanner() {
  return (
    <section className="body-scanner">
      <p className="scanner-tag"> BODY SCANNER</p>

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
          <div className="terminal">
            <span className="line1">{">"}Initializing...</span>
            <span className="line2">{">"}Mapping skeletal structure...</span>
            <span className="line3">{">"}Calculating muscle symmetry...</span>
            <span className="line4">{">"}Fitness DNA matched...</span>
          </div>
          <div className="classification">
            <p className="class-tag">FITMODEL CLASSIFICATION</p>
            <h1 className="class-title">⚡ALPHA BUILDER</h1>

            <div className="confidence">
              <span>Confidence</span>
              <strong>99.2%</strong>
            </div>

            <div className="confidence-bar">
              <div className="confidence-fill"></div>
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
      </div>
    </section>
  );
}
