"use client";

import React, { useEffect, useRef, useState } from "react";

const LINES = [
  "BOOT_SEQUENCE: OK",
  "AUTH: VERIFIED",
  "CHANNEL: SECURE",
  "MONITORING: ACTIVE",
  "READY_FOR_TASKING →",
];

function formatTime() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const h = d.getHours() % 12 || 12;
  const ampm = d.getHours() >= 12 ? "PM" : "AM";
  return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${ampm}`;
}

export default function BootPage() {
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);

  // ✅ Initialize state without calling setState inside useEffect
  const [timestamp, setTimestamp] = useState<string>(() => formatTime());

  const timerRef = useRef<number | null>(null);

  // typing animation
  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setI((prev) => {
        const next = prev + 1;

        if (next >= LINES.length) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          timerRef.current = null;
          setDone(true);
          return prev;
        }

        return next;
      });
    }, 450);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [started]);

  // clock tick (no initial setState-in-effect call needed)
  useEffect(() => {
    const t = window.setInterval(() => setTimestamp(formatTime()), 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="hud-panel hud-panel-strong w-full max-w-3xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-center justify-between">
          <div className="hud-title">BOOT_SCREEN</div>
          <div className="text-[11px] text-[color:var(--muted)]">{timestamp}</div>
        </div>

        <div className="p-5 font-mono text-sm space-y-2">
          <div className="text-[color:var(--text)]/90">
            {LINES.slice(0, started ? i : 0).map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>

          {!started ? (
            <button
              onClick={() => setStarted(true)}
              className="mt-4 rounded-xl border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]"
            >
              START
            </button>
          ) : null}

          {done ? (
            <div className="mt-4 text-xs text-[color:var(--muted)]">
              BOOT_COMPLETE ✓
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
