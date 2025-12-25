"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MatrixRain from "@/components/MatrixRain";
import { portfolio } from "@/lib/portfolio";

const LINES = [
  "> INITIALIZE_UPLINK",
  "> VALIDATING_IDENTITY",
  "> LOADING_PROFILE_PAYLOAD",
  "> HANDSHAKE_OK :: TLS=ENABLED",
  "> BYPASSING_FIREWALL_LAYER_7...",
  "> DECRYPTING_UI_MODULES",
  "> SYNC :: PORTFOLIO_INDEX",
  "> READY :: ROUTE /home",
];

export default function BootPage() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef<number | null>(null);

  const timestamp = useMemo(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const h = d.getHours() % 12 || 12;
    const ampm = d.getHours() >= 12 ? "PM" : "AM";
    return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${ampm}`;
  }, [started]);

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
    };
  }, [started, router]);

  return (
    <main className="relative min-h-screen bg-black text-red-100 overflow-hidden">
      <MatrixRain tone="red" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-[260px_1fr] gap-4">
          {/* left metrics panel */}
          <div className="hud-panel hud-panel-strong p-4 font-mono">
            <div className="hud-title mb-3">SYSTEM_METRICS</div>

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-[color:var(--muted)]">CPU_LOAD</span>
                  <span>72%</span>
                </div>
                <div className="h-2 rounded bg-white/5 overflow-hidden">
                  <div className="h-full w-[72%] bg-[color:var(--accent)]/60" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-[color:var(--muted)]">RAM_USAGE</span>
                  <span>14.2 TB</span>
                </div>
                <div className="h-2 rounded bg-white/5 overflow-hidden">
                  <div className="h-full w-[63%] bg-[color:var(--accent)]/60" />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-[color:var(--muted)]">NET_UPLINK</span>
                  <span>10.0 GBPS</span>
                </div>
                <div className="h-2 rounded bg-white/5 overflow-hidden">
                  <div className="h-full w-[81%] bg-[color:var(--accent)]/60" />
                </div>
              </div>

              <div className="hud-panel p-3 mt-2">
                <div className="text-[11px] text-[color:var(--muted)]">
                  TARGET_LOCK
                </div>
                <div className="mt-2 text-lg tracking-widest text-[color:var(--accent)]">
                  {portfolio.name.toUpperCase().replace(" ", "_")}...
                </div>
              </div>
            </div>
          </div>

          {/* right sim panel */}
          <div className="hud-panel hud-panel-strong p-0 overflow-hidden">
            <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-center justify-between">
              <div className="text-xs tracking-widest text-[color:var(--muted)]">
                RESTRICTED_ACCESS_AREA
              </div>
              <div className="text-xs text-[color:var(--muted)]">{timestamp}</div>
            </div>

            <div className="px-5 py-6">
              <div className="text-4xl md:text-5xl font-semibold tracking-wider text-[color:var(--accent)] drop-shadow-[0_0_18px_rgba(255,40,40,0.35)]">
                PORTFOLIO_PAYLOAD
              </div>
              <div className="mt-2 text-[11px] tracking-[0.35em] text-[color:var(--muted)]">
                SYSTEM ONLINE // v1.0.0 // AES-256-GCM
              </div>

              {!started ? (
                <button
                  onClick={() => setStarted(true)}
                  className="mt-8 w-full rounded-xl border border-[color:var(--border)] bg-black/40 hover:bg-black/55 transition px-5 py-6 text-left"
                >
                  <div className="text-sm tracking-widest">
                    TAP TO INITIALIZE UPLINK
                  </div>
                  <div className="mt-2 text-xs text-[color:var(--muted)]">
                    Visual simulation only (no real hacking)
                  </div>
                </button>
              ) : (
                <div className="mt-8 rounded-xl border border-[color:var(--border)] bg-black/40 p-5 font-mono text-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs tracking-widest text-[color:var(--muted)]">
                      DECRYPTING_ROOT
                    </div>
                    <div className="text-xs text-[color:var(--accent)]">
                      {Math.min(100, Math.round(((i + 1) / LINES.length) * 100))}%
                    </div>
                  </div>

                  <div className="h-2 rounded bg-white/5 overflow-hidden mb-4">
                    <div
                      className="h-full bg-[color:var(--accent)]/60"
                      style={{
                        width: `${Math.min(
                          100,
                          Math.round(((i + 1) / LINES.length) * 100)
                        )}%`,
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    {LINES.slice(0, i + 1).map((line, idx) => (
                      <div key={idx} className="text-red-100/90">
                        {line}
                      </div>
                    ))}
                    {done && (
                      <div className="text-[color:var(--muted)]">
                        &gt; REDIRECTING...
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-6 text-xs text-[color:var(--muted)] leading-relaxed">
                This is a UI animation inspired by cyber/HUD aesthetics for portfolio style.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
