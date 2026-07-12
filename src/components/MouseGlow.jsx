import { useEffect } from "react";
import "./MouseGlow.css";

export default function MouseGlow() {
  useEffect(() => {
    const glow = document.querySelector(".mouse-glow");

    if (!glow) return;

    const move = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return <div className="mouse-glow" />;
}
