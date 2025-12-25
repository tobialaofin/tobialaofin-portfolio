"use client";

const bars = [
  { name: "SENTINEL", pct: 92 },
  { name: "INTUNE", pct: 90 },
  { name: "NIST_800_171", pct: 88 },
  { name: "AZURE_SECURITY", pct: 86 },
  { name: "DETECTION_ENGINEERING", pct: 84 },
  { name: "REACT_TS", pct: 82 },
];

export default function SkillMatrix() {
  return (
    <div className="hud-panel" style={{ padding: 14, borderRadius: 10 }}>
      <div className="hud-title" style={{ fontSize: 12, marginBottom: 12 }}>
        SKILL_MATRIX
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        {bars.map((b) => (
          <div key={b.name}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.72)" }}>{b.name}</div>
              <div className="small">{b.pct}%</div>
            </div>
            <div style={{ height: 8, border: "1px solid rgba(255,43,43,0.35)", background: "rgba(0,0,0,0.35)" }}>
              <div
                style={{
                  height: "100%",
                  width: `${b.pct}%`,
                  background: "rgba(255,43,43,0.55)",
                  boxShadow: "0 0 18px rgba(255,43,43,0.25)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
