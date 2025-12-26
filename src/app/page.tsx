"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MatrixRain from "@/components/MatrixRain";
import { portfolio } from "@/lib/portfolio";

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
  const timerRef = useRef<number | null>(null);

  // ✅ No "setState synchronously in effect" — initialize once.
  const [timestamp, setTimestamp] = useState<string>(() => formatTime());

  // ✅ Clock tick: only setState inside the interval callback
  useEffect(() => {
    const t = window.setInterval(() => setTimestamp(formatTime()), 1000);
    return () => window.clearInterval(t);
  }, []);

  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setI((prev) => {
        const next = prev + 1;

        if (next >= LINES.length) {
          window.clearInterval(timerRef.current ?? undefined);
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

  // ✅ Fix useMemo warning: portfolio is a module constant; no dep needed.
  const title = useMemo(() => portfolio.name.toUpperCase(), []);

  return (
    <main className="relative min-h-screen bg-[color:var(--bg)] text-[color:var(--fg)] overflow-hidden">
      <MatrixRain tone="blue" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-2xl hud-panel hud-panel-strong">
          <div className="px-6 py-5 border-b border-[color:var(--border)] flex items-center justify-between">
            <div className="text-sm tracking-widest text-[color:var(--muted)]">
              RESTRICTED_ACCESS_AREA
            </div>
            <div className="text-sm text-[color:var(--fg)]/85">{timestamp}</div>
          </div>

          <div className="px-6 py-8">
            <div className="text-4xl md:text-5xl font-semibold tracking-wider text-[color:var(--fg)] drop-shadow-[0_0_12px_rgba(var(--accent),0.35)]">
              PORTFOLIO_PAYLOAD
            </div>

            <div className="mt-2 text-xs tracking-[0.35em] text-[color:var(--muted)]">
              SYSTEM ONLINE // v1.0.0 // {title}
            </div>

            {!started ? (
              <button
                onClick={() => setStarted(true)}
                className="mt-10 w-full rounded-xl border border-[color:var(--border)] bg-[color:var(--panel2)] hover:bg-[color:var(--panel3)] transition px-5 py-5 text-left"
              >
                <div className="text-sm tracking-widest text-[color:var(--fg)]/90">
                  TAP TO START
                </div>
                <div className="mt-2 text-xs text-[color:var(--muted)]">
                  Initialize uplink and load interface
                </div>
              </button>
            ) : (
              <div className="mt-10 rounded-xl border border-[color:var(--border)] bg-[color:var(--panel2)] p-5 font-mono text-sm">
                <div className="space-y-2">
                  {LINES.slice(0, i + 1).map((line, idx) => (
                    <div key={idx} className="text-[color:var(--fg)]/90">
                      {line}
                    </div>
                  ))}
                  {done && (
                    <div className="text-[color:var(--muted)]">&gt; REDIRECTING...</div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-6 text-xs text-[color:var(--muted)] leading-relaxed">
              Visual simulation only (no real hacking).
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
