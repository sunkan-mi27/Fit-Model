import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);

          setTimeout(() => {
            onFinish();
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="loader">
      <h1 className="logo-loader">
        FITMODEL <span>.OPERATING SERVICE</span>
      </h1>
      <div className="ai-ring">
        <div className="ring"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>
      </div>
      <div className="loader-text">
        <span className="typing">Initializing...</span>
        <span className="loading-step">Loading Dashboard</span>
        <span className="loading-step">Loading Portfolio</span>
        <span className="loading-step">Connecting Coach</span>
        <span className="loading-step">System Ready</span>
      </div>

      <div className="loader-bar">
        <div className="loader-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <span>{progress}%</span>
    </div>
  );
}
