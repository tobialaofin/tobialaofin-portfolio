"use client";

import React, { useEffect, useState } from "react";
import NavDock from "@/components/NavDock";
import PixelBackground from "@/components/PixelBackground";

type HUDShellProps = {
  children: React.ReactNode;
  active?: string;
  title?: string;
  rightSlot?: React.ReactNode;
  /** Optional block rendered UNDER the nav (Home uses it for Quick Links + Terminal) */
  topSlot?: React.ReactNode;
};

function formatTime() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const h = d.getHours() % 12 || 12;
  const ampm = d.getHours() >= 12 ? "PM" : "AM";
  return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${ampm}`;
}

export default function HUDShell({ children, active, title, rightSlot, topSlot }: HUDShellProps) {
  const [clock, setClock] = useState<string>("--:--:-- --");

  useEffect(() => {
    const t = window.setInterval(() => setClock(formatTime()), 1000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <PixelBackground />

      <div className="relative z-10">
        {/* HEADER */}
        <div className="hud-frame">
          <div className="px-5 py-4 border-b border-[color:var(--border)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="hud-title">{title ?? "SYSTEM_PANEL"}</div>
                <div className="mt-1 text-[11px] tracking-widest text-white/60">
                  SECURE_SESSION // TLS // PORTFOLIO_NODE
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="text-[11px] tracking-widest text-[color:var(--muted)]"
                  suppressHydrationWarning
                >
                  {clock}
                </div>
                {rightSlot ? <div>{rightSlot}</div> : null}
              </div>
            </div>
          </div>

          {/* NAV (bigger + spaced) */}
          <div className="px-5 pt-5">
            <NavDock active={active} />
          </div>

          {/* OPTIONAL: UNDER NAV (Home puts Quick Links + Terminal here) */}
          {topSlot ? <div className="px-5 pt-5">{topSlot}</div> : null}

          {/* CONTENT */}
          <div className="px-5 py-6">{children}</div>
        </div>
      </div>
    </main>
  );
}
