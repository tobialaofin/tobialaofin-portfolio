"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import PixelBackground from "@/components/PixelBackground";

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

export default function BootGatePage() {
  const router = useRouter();

  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const [clock, setClock] = useState("--:--:-- --");
  const timerRef = useRef<number | null>(null);

  // clock updates (no immediate setState inside effect body)
  useEffect(() => {
    const t = window.setInterval(() => setClock(formatTime()), 1000);
    return () => window.clearInterval(t);
  }, []);

  // typing simulation + redirect
  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setI((prev) => {
        const next = prev + 1;

        if (next >= LINES.length) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          timerRef.current = null;

          setDone(true);
          window.setTimeout(() => router.push("/home"), 800);
          return prev;
        }

        return next;
      });
    }, 240);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [started, router]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <PixelBackground />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-xl hud-panel hud-panel-strong overflow-hidden">
          <div className="px-6 py-5 border-b border-[color:var(--border)] flex items-center justify-between">
            <div className="hud-title">RESTRICTED_ACCESS_AREA</div>
            <div className="hud-clock" suppressHydrationWarning>
              {clock}
            </div>
          </div>

          <div className="p-6">
            <div className="text-3xl md:text-4xl font-semibold tracking-wider text-white">
              PORTFOLIO_PAYLOAD
            </div>

            <div className="mt-2 text-[11px] tracking-[0.35em] text-white/60">
              SYSTEM ONLINE // v1.0.0 // AUTH REQUIRED
            </div>

            {!started ? (
              <button
                onClick={() => setStarted(true)}
                className="mt-10 w-full rounded-xl border border-[color:var(--border)] bg-black/35 hover:bg-black/55 transition px-5 py-5 text-left"
              >
                <div className="text-white font-semibold tracking-widest">
                  TAP HERE TO HACK INTO MY PORTFOLIO
                </div>
                <div className="mt-2 text-xs text-white/70">
                  Visual simulation only (no real hacking)
                </div>
              </button>
            ) : (
              <div className="mt-10 rounded-xl border border-[color:var(--border)] bg-black/40 p-5 font-mono text-sm">
                <div className="space-y-2">
                  {LINES.slice(0, i + 1).map((line, idx) => (
                    <div key={idx} className="text-white/90">
                      {line}
                    </div>
                  ))}
                  {done && <div className="text-white/70">&gt; REDIRECTING...</div>}
                </div>
              </div>
            )}

            <div className="mt-6 text-xs text-white/50 leading-relaxed">
              Visual simulation only (no real hacking).
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
