import type { ReactNode } from "react";
import MatrixRain from "@/components/MatrixRain";

export default function HUDShell({ children }: { children: ReactNode }) {
  return (
    <main className="relative min-h-screen bg-black text-[color:var(--text)] overflow-hidden">
      {/* Background effect */}
      <MatrixRain tone="blue" />

      {/* Main content container */}
      <div className="relative z-10 mx-auto w-full max-w-[1120px] px-4 sm:px-6 py-10">
        <div className="hud-frame">
          <div className="hud-topbar">
            <div className="hud-brand">
              <span className="hud-dot" />
              <span className="hud-brand-text">TOBI_ALAOFIN — PORTFOLIO</span>
              <span className="hud-chip">STATUS: ONLINE</span>
              <span className="hud-chip">ENC: TLS</span>
            </div>
          </div>

          <div className="p-5">{children}</div>
        </div>
      </div>
    </main>
  );
}
