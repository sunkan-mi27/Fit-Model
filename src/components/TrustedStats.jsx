import { useEffect, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const duration = 2000;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <h2>
      {count.toLocaleString()}
      {suffix}
    </h2>
  );
}

export default function TrustedStats() {
  return (
    <section className="trusted-stats">
      <div className="stat-item">
        <Counter end={15000} suffix="+" />
        <p>Active Models</p>
      </div>

      <div className="stat-item">
        <Counter end={450} suffix="+" />
        <p>Certified Trainers</p>
      </div>

      <div className="stat-item">
        <Counter end={98} suffix="%" />
        <p>Success Rate</p>
      </div>

      <div className="stat-item">
        <Counter end={32} />
        <p>Countries</p>
      </div>
    </section>
  );
}
