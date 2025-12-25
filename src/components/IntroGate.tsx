"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import MatrixBackground from "@/components/MatrixBackground";

const STORAGE_KEY = "tobi_portfolio_unlocked_v1";

export default function IntroGate() {
  const router = useRouter();
  const [phase, setPhase] = useState<"locked" | "running">("locked");
  const [lines, setLines] = useState<string[]>([]);
  const [pct, setPct] = useState(0);

  const script = useMemo(
    () => [
      "INITIALIZING UPLINK...",
      "NEGOTIATING TLS HANDSHAKE...",
      "BYPASSING FIREWALL LAYER 7... (SIMULATION)",
      "INJECTING PAYLOAD INTO MAINFRAME... (SIMULATION)",
      "DECRYPTING SESSION TOKENS... (SIMULATION)",
      "ROUTING THROUGH PROXY NODES... (SIMULATION)",
      "VALIDATING INTEGRITY HASH...",
      "ACCESS GRANTED — LOADING PORTFOLIO...",
    ],
    []
  );

  useEffect(() => {
    const already = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY) === "1";
    if (already) router.replace("/home");
  }, [router]);

  useEffect(() => {
    if (phase !== "running") return;

    let i = 0;
    setLines([]);
    setPct(0);

    const timer = setInterval(() => {
      setLines((prev) => [...prev, `> ${script[i]}`]);
      i++;

      const nextPct = Math.min(100, Math.round((i / script.length) * 100));
      setPct(nextPct);

      if (i >= script.length) {
        clearInterval(timer);
        localStorage.setItem(STORAGE_KEY, "1");
        setTimeout(() => router.replace("/home"), 450);
      }
    }, 420);

    return () => clearInterval(timer);
  }, [phase, router, script]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <MatrixBackground />

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "60px 22px" }}>
        <div
          className="hud-panel"
          style={{
            borderRadius: 14,
            padding: 22,
            textAlign: "center",
          }}
        >
          <div className="hud-title" style={{ fontSize: 12, marginBottom: 10 }}>
            RESTRICTED_ACCESS_AREA
          </div>

          <div
            style={{
              fontSize: 44,
              letterSpacing: "0.10em",
              marginTop: 6,
              textShadow: "0 0 22px rgba(255,43,43,0.25)",
              fontWeight: 800,
            }}
          >
            PORTFOLIO_PAYLOAD
          </div>

          <div className="small" style={{ marginTop: 8 }}>
            SYSTEM ONLINE // v9.0
          </div>

          <div style={{ marginTop: 26 }}>
            {phase === "locked" ? (
              <button
                className="btn"
                style={{ width: "min(520px, 92%)", padding: "16px 18px" }}
                onClick={() => setPhase("running")}
              >
                TAP / CLICK TO INITIALIZE UPLINK
              </button>
            ) : (
              <div className="hud-border" style={{ borderRadius: 12, padding: 14, textAlign: "left" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <div className="hud-title" style={{ fontSize: 12 }}>
                    INJECTING_PAYLOAD
                  </div>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,43,43,0.22)" }} />
                  <div style={{ fontSize: 12 }}>{pct}%</div>
                </div>

                <div style={{ height: 210, overflow: "auto", paddingRight: 6 }}>
                  {lines.map((l, idx) => (
                    <div key={idx} style={{ fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.78)" }}>
                      {l}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 12, height: 10, border: "1px solid rgba(255,43,43,0.35)" }}>
                  <div
                    style={{
                      height: "100%",
                      width: `${pct}%`,
                      background: "rgba(255,43,43,0.55)",
                      boxShadow: "0 0 18px rgba(255,43,43,0.25)",
                    }}
                  />
                </div>

                <div className="small" style={{ marginTop: 10 }}>
                  NOTE: This is a visual simulation for styling only — no real hacking occurs.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
