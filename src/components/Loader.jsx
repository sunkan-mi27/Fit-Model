import { useEffect, useMemo, useState } from "react";
import "./Loader.css";

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  const status = useMemo(() => {
    if (progress < 20)
      return {
        title: "Initializing AI Core",
        description: "Booting FitModel Intelligence...",
      };

    if (progress < 40)
      return {
        title: "Loading Athlete Engine",
        description: "Preparing performance modules...",
      };

    if (progress < 60)
      return {
        title: "Syncing Portfolio",
        description: "Connecting fitness identity...",
      };

    if (progress < 80)
      return {
        title: "Optimizing Dashboard",
        description: "Generating your workspace...",
      };

    if (progress < 100)
      return {
        title: "Launching FitModel OS",
        description: "Final system checks...",
      };

    return {
      title: "System Ready",
      description: "Welcome to FitModel OS",
    };
  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((current) => {
        if (current >= 100) {
          clearInterval(timer);

          if (onFinish) {
            setTimeout(() => onFinish(), 700);
          }

          return 100;
        }

        return current + 1;
      });
    }, 35);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <main className="loader">
      <div className="loader-background"></div>

      <div className="loader-content">
        <span className="loader-badge">AI FITNESS OPERATING SYSTEM</span>

        <h1 className="loader-logo">
          FitModel
          <span> OS</span>
        </h1>

        <p className="loader-subtitle">
          Professional platform for athletes, creators and fitness brands.
        </p>

        <div className="ai-core">
          <div className="ring ring-one"></div>

          <div className="ring ring-two"></div>

          <div className="ring ring-three"></div>

          <div className="ring ring-four"></div>

          <div className="core">FM</div>
        </div>

        <div className="loader-status">
          <h3>{status.title}</h3>

          <p>{status.description}</p>
        </div>

        <div className="loader-progress">
          <div className="loader-track">
            <div
              className="loader-fill"
              style={{
                width: `${progress}%`,
              }}
            ></div>
          </div>

          <div className="progress-info">
            <span>{progress}%</span>

            <span>Secure Boot</span>
          </div>
        </div>

        <div className="system-panel">
          <div
            className={progress >= 20 ? "system-item active" : "system-item"}
          >
            <span>●</span>
            AI Engine
          </div>

          <div
            className={progress >= 40 ? "system-item active" : "system-item"}
          >
            <span>●</span>
            Dashboard
          </div>

          <div
            className={progress >= 60 ? "system-item active" : "system-item"}
          >
            <span>●</span>
            Portfolio
          </div>

          <div
            className={progress >= 80 ? "system-item active" : "system-item"}
          >
            <span>●</span>
            Cloud Sync
          </div>

          <div
            className={progress >= 100 ? "system-item active" : "system-item"}
          >
            <span>●</span>
            Ready
          </div>
        </div>
      </div>
    </main>
  );
}
