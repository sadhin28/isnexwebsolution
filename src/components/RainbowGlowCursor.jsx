import React, { useEffect, useState } from "react";
import "./RainbowGlowCursor.css"; // import CSS separately

export default function RainbowGlowCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      // detect mouse or touch
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;

      setPosition({ x, y });
      // update CSS variables
      document.documentElement.style.setProperty("--x", `${x}px`);
      document.documentElement.style.setProperty("--y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return <div className="pointer-events-none fixed top-0 left-0 w-screen h-screen z-[9999] glow-bg"></div>;
}
