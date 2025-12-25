"use client";

import { useEffect, useMemo, useState } from "react";

type TerminalPanelProps = {
  lines?: string[];
  title?: string;
};

export default function TerminalPanel({ lines, title = "OPS_TERMINAL" }: TerminalPanelProps) {
  // Prevent hydration mismatch by rendering time ONLY on client after mount
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const update = () => setNow(new Date().toLocaleString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  // If lines is undefined, use a default set
  const safeLines = useMemo(
    () =>
      lines ?? [
        "Initializing telemetry stream...",
        "Loading artifacts: CMMC, NIST 800-171, Intune baselines...",
        "Establishing secure session: ENC_TLS",
        "Status: ONLINE",
      ],
    [lines]
  );

  return (
    <div className="hud-panel overflow-hidden">
      <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-center justify-between">
        <div className="hud-title">{title}</div>

        {/* now is empty on server, filled on client after mount */}
        <div className="text-[11px] text-[color:var(--muted)]">
          <span suppressHydrationWarning>{now}</span>
        </div>
      </div>

      <div className="p-5 font-mono text-sm">
        <div className="space-y-2">
          {safeLines.map((line, idx) => (
            <div key={`${idx}-${line.slice(0, 16)}`} className="text-[color:var(--text)]/90">
              {line}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
