import React from "react";
import NavDock from "@/components/NavDock";

type HUDShellProps = {
  children: React.ReactNode;
  active?: string;
  title?: string;
  rightSlot?: React.ReactNode;
};

export default function HUDShell({ children, active, title, rightSlot }: HUDShellProps) {
  return (
    <main className="relative min-h-screen">
      <div className="hud-frame">
        <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="hud-title">{title ?? "TOBI_ALAOFIN — PORTFOLIO"}</div>
          </div>

          <div className="flex items-center gap-3">{rightSlot ? <div>{rightSlot}</div> : null}</div>
        </div>

        <NavDock active={active} />

        <div className="p-5">{children}</div>
      </div>
    </main>
  );
}
