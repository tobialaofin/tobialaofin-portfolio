"use client";

import React, { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  a: number;
  s: number;
};

export default function PixelBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const sizeRef = useRef({ w: 0, h: 0, dpr: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      const w = window.innerWidth;
      const h = window.innerHeight;

      sizeRef.current = { w, h, dpr };
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(220, Math.floor((w * h) / 12000));
      const arr: Particle[] = [];
      for (let i = 0; i < count; i++) {
        arr.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          a: 0.10 + Math.random() * 0.25,
          s: 1 + Math.random() * 1.6,
        });
      }
      particlesRef.current = arr;
    };

    const draw = () => {
      const { w, h } = sizeRef.current;
      const pts = particlesRef.current;

      ctx.clearRect(0, 0, w, h);

      // subtle scanline-ish haze
      ctx.globalAlpha = 0.12;
      ctx.fillStyle = "#0a1020";
      ctx.fillRect(0, 0, w, h);

      // moving pixels
      ctx.globalAlpha = 1;

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.globalAlpha = p.a;
        ctx.fillStyle = "#3b82f6"; // blue-ish pixel glow
        ctx.fillRect(p.x, p.y, p.s, p.s);
      }

      // faint grid dots
      ctx.globalAlpha = 0.06;
      ctx.fillStyle = "#93c5fd";
      const step = 44;
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          ctx.fillRect(x + 1, y + 1, 1, 1);
        }
      }

      rafRef.current = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    rafRef.current = window.requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-60"
    />
  );
}
