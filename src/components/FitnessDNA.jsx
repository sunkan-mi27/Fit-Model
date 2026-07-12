import { useEffect, useState } from "react";
import "./FitnessDNA.css";
const stats = [
  { name: "Power", value: 82 },
  { name: "Aesthetics", value: 91 },
  { name: "Discipline", value: 64 },
  { name: "Consistency", value: 73 },
  { name: "Recovery", value: 97 },
  { name: "Brand Value", value: 88 },
];

export default function FitnessDNA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`dna ${show ? "show" : ""}`}>
      <p className="dna-tag">FITMODEL DNA</p>

      <h2>Your Fitness Genome</h2>

      {stats.map((item) => (
        <div className="dna-item" key={item.name}>
          <div className="dna-head">
            <span>{item.name}</span>
            <span>{item.value}%</span>
          </div>

          <div className="dna-bar">
            <div className="dna-fill" style={{ width: `${item.value}%` }}></div>
          </div>
        </div>
      ))}

      <div className="dna-card">
        <h3>⚡ Alpha Builder</h3>

        <p>
          High discipline.<strong>Excellent physique</strong> Agency Ready.
        </p>
      </div>
    </section>
  );
}
