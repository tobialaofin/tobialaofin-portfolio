"use client";

import { useEffect, useRef } from "react";

type Tone = "blue" | "red" | "green";

function toneToColor(tone: Tone) {
  if (tone === "red") return "rgba(239,68,68,";
  if (tone === "green") return "rgba(34,197,94,";
  return "rgba(59,130,246,"; // blue default
}

export default function MatrixRain({ tone = "blue" }: { tone?: Tone }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const letters =
      "01アイウエオカキクケコサシスセソタチツテトナニヌネノ";
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array.from({ length: columns }, () =>
      Math.floor(Math.random() * canvas.height)
    );

    let raf = 0;

    const draw = () => {
      // fade
      ctx.fillStyle = "rgba(0,0,0,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;
      const base = toneToColor(tone);

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = `${base}0.45)`;
        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [tone]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-45"
      aria-hidden="true"
    />
  );
}
