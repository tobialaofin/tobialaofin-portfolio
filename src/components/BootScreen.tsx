"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

const steps = [
  "Initializing handshake protocol…",
  "Negotiating secure tunnel…",
  "Bypassing firewall layer 7… (simulated)",
  "Decrypting payload blocks… (simulated)",
  "Routing through proxy nodes… (simulated)",
  "Verifying integrity checks…",
  "Establishing uplink…",
  "Complete. Redirecting…",
];

export default function BootScreen() {
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "running">("idle");
  const [progress, setProgress] = useState(0);

  const visibleSteps = useMemo(() => steps.slice(0, progress), [progress]);

  useEffect(() => {
    if (phase !== "running") return;

    let i = 0;
    const t = setInterval(() => {
      i++;
      setProgress(i);

      if (i >= steps.length) {
        clearInterval(t);
        setTimeout(() => router.push("/home"), 700);
      }
    }, 520);

    return () => clearInterval(t);
  }, [phase, router]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      onClick={() => phase === "idle" && setPhase("running")}
      role="button"
      tabIndex={0}
    >
      <div className="hud-panel hud-panel-strong w-full max-w-2xl p-8 text-center">
        <div className="hud-title text-[14px] text-[color:var(--accent)]">
          PORTFOLIO_PAYLOAD
        </div>
        <div className="mt-2 text-[12px] text-[color:var(--muted)]">
          RESTRICTED ACCESS AREA
        </div>

        <div className="mt-8 hud-panel p-6">
          {phase === "idle" ? (
            <>
              <div className="text-[12px] text-[color:var(--muted)] mb-4">
                TAP TO INITIALIZE UPLINK
              </div>
              <div className="mx-auto w-28 h-28 rounded-full border border-[color:var(--border-strong)] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-[color:var(--border)] flex items-center justify-center">
                  <div className="text-[color:var(--accent)] text-2xl">⌁</div>
                </div>
              </div>
              <div className="mt-4 text-[12px] text-[color:var(--muted)]">
                TOUCH_ID
              </div>
            </>
          ) : (
            <>
              <div className="text-left font-mono text-[12px] leading-6">
                {visibleSteps.map((s, idx) => (
                  <div key={idx} className="text-[color:var(--text)]">
                    &gt; {s}
                  </div>
                ))}
                <div className="opacity-70">_</div>
              </div>

              <div className="mt-5 w-full h-2 rounded-full bg-black/50 overflow-hidden border border-[color:var(--border)]">
                <div
                  className="h-full"
                  style={{
                    width: `${Math.min(100, (progress / steps.length) * 100)}%`,
                    background: "rgba(255,65,65,0.75)",
                    boxShadow: "0 0 12px rgba(255,65,65,0.35)",
                  }}
                />
              </div>
              <div className="mt-2 text-[12px] text-[color:var(--muted)]">
                {Math.min(100, Math.round((progress / steps.length) * 100))}%
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
