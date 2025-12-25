"use client";

import React from "react";

type TerminalPanelProps = {
  title?: string;
  lines?: string[];
};

function formatNow() {
  return new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

export default function TerminalPanel({ title = "OPS_TERMINAL", lines }: TerminalPanelProps) {
  const defaultLines = React.useMemo(
    () => ["BOOT_SEQUENCE: OK", "AUTH: VERIFIED", "CHANNEL: SECURE", "MONITORING: ACTIVE", "READY_FOR_TASKING →"],
    []
  );

  const safeLines = lines ?? defaultLines;

  const [now, setNow] = React.useState<string>("");

  React.useEffect(() => {
    // async state updates (no "sync setState in effect" lint error)
    const t0 = window.setTimeout(() => setNow(formatNow()), 0);
    const t = window.setInterval(() => setNow(formatNow()), 1000);

    return () => {
      window.clearTimeout(t0);
      window.clearInterval(t);
    };
  }, []);

  return (
    <div className="hud-panel hud-panel-strong overflow-hidden">
      <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-center justify-between">
        <div className="hud-title">{title}</div>
        <div className="text-[11px] text-[color:var(--muted)]">{now}</div>
      </div>

      <div className="p-5 font-mono text-sm">
        <div className="space-y-2">
          {safeLines.map((line, idx) => (
            <div key={`${idx}-${line}`} className="text-[color:var(--text)]/90">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
