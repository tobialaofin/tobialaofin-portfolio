"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

const LINES = [
  "> INITIALIZE_UPLINK",
  "> VALIDATING_IDENTITY",
  "> LOADING_PROFILE_PAYLOAD",
  "> HANDSHAKE_OK :: ENC=TLS",
  "> ROUTE :: /home",
  "> DECRYPTING_UI_MODULES",
  "> SYNC :: PORTFOLIO_INDEX",
  "> DONE",
];

function formatTime() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const h = d.getHours() % 12 || 12;
  const ampm = d.getHours() >= 12 ? "PM" : "AM";
  return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${ampm}`;
}

export default function BootPage() {
  const router = useRouter();

  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);

  const [timestamp, setTimestamp] = useState<string>(() => formatTime());
  const timerRef = useRef<number | null>(null);

  // ✅ live clock
  useEffect(() => {
    const t = window.setInterval(() => setTimestamp(formatTime()), 1000);
    return () => window.clearInterval(t);
  }, []);

  // typing animation + redirect
  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setI((prev) => {
        const next = prev + 1;

        if (next >= LINES.length) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          timerRef.current = null;
          setDone(true);

          setTimeout(() => router.push("/home"), 700);
          return prev;
        }

        return next;
      });
    }, 220);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [started, router]);

  return (
    <main className="relative min-h-screen flex items-center justify-center p-6 hud-bg">
      <div className="hud-panel hud-panel-strong w-full max-w-3xl overflow-hidden">
        <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-center justify-between">
          <div className="hud-title">BOOT_SCREEN</div>
          <div className="text-[11px] tracking-widest text-[color:var(--muted)]">{timestamp}</div>
        </div>

        <div className="p-5 font-mono text-sm space-y-2">
          {!started ? (
            <button
              onClick={() => setStarted(true)}
              className="w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--accent-weak)]/10 hover:bg-[color:var(--accent-weak)] transition px-5 py-5 text-left"
            >
              <div className="text-sm tracking-widest text-white/90">TAP TO START</div>
              <div className="mt-2 text-xs text-[color:var(--muted)]">Initialize uplink and load interface</div>
            </button>
          ) : (
            <div className="rounded-xl border border-[color:var(--border)] bg-black/30 p-4">
              <div className="space-y-2 text-white/90">
                {LINES.slice(0, i + 1).map((line) => (
                  <div key={line}>{line}</div>
                ))}
                {done ? <div className="text-white/70">&gt; REDIRECTING...</div> : null}
              </div>
            </div>
          )}

          <div className="mt-6 text-xs text-[color:var(--muted)] leading-relaxed">
            Visual simulation only (no real hacking).
          </div>
        </div>
      </div>
    </main>
  );
}
