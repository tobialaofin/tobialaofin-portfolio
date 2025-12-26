import HUDShell from "@/components/HUDShell";

const projects = [
  {
    name: "CMMC Compliance & Intune Security Hardening",
    status: "ACTIVE",
    tags: ["Intune", "CMMC", "Microsoft 365", "Compliance", "Policy Management", "NIST 800-171"],
    bullets: [
      "Reviewed an existing Intune environment and mapped technical controls to CMMC Level 2 / NIST 800-171 requirements.",
      "Designed and tuned Windows endpoint baselines (device restrictions, attack surface reduction, identity hardening, and configuration policies).",
      "Validated policy behavior through controlled testing, documented results, and captured audit-ready evidence screenshots/exports.",
      "Produced control-by-control implementation notes and an evidence trail to support third-party assessment readiness.",
    ],
    links: [
      { label: "VIEW_GITHUB", href: "https://github.com/tobialaofin/cloud-security-compliance-portfolio" },
    ],
  },
  {
    name: "GCC High Deployment & Security Monitoring",
    status: "ACTIVE",
    tags: ["Azure AD/Entra", "Sentinel", "Intune", "FedRAMP", "NIST 800-171", "Logging"],
    bullets: [
      "Supported baseline identity and governance controls aligned to regulated cloud environments (tenant hygiene, privileged access, and audit logging).",
      "Integrated Microsoft Sentinel with cloud data sources, created analytic rules, and improved detection visibility for security operations.",
      "Documented configuration decisions and operational run-notes so the environment could be repeated and audited consistently.",
    ],
    links: [],
  },
  {
    name: "Real-Time Market Data Stream Processor",
    status: "ACTIVE",
    tags: ["Python", "FastAPI", "asyncio", "JavaScript", "Streaming", "Time-series analytics"],
    bullets: [
      "Built a real-time streaming pipeline that ingests live/simulated equity ticks and maintains rolling analytics in-memory.",
      "Implemented low-latency aggregation (rolling mean, rolling windows, percent change) per symbol without relying on heavyweight external systems.",
      "Exposed stream + analytics through an async API layer and a lightweight UI for monitoring live updates.",
      "Focused on correctness under concurrency (safe updates, bounded memory, predictable latency) and clear observability for debugging.",
    ],
    links: [{ label: "VIEW_GITHUB", href: "https://github.com/tobialaofin/real-time-market-data-stream" }],
  },
];

export default function ProjectsPage() {
  return (
    <HUDShell active="projects" title="PROJECT_REPOSITORY">
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.name} className="hud-panel hud-panel-strong p-6">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="text-[18px] font-bold text-white">{p.name}</div>
                <div className="mt-2 text-[12px] text-[color:var(--muted)]">{p.tags.join(" • ")}</div>
              </div>

              <div className="text-[11px] tracking-widest text-[color:var(--muted)]">
                STATUS: <span className="text-white/90">{p.status}</span>
              </div>
            </div>

            <ul className="mt-5 space-y-2 text-[13px] leading-relaxed list-disc pl-5 text-white/85">
              {p.bullets.map((b, idx) => (
                <li key={`${p.name}-${idx}`}>{b}</li>
              ))}
            </ul>

            {p.links.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-4">
                {p.links.map((l) => (
                  <a key={l.href} className="hud-link" href={l.href} target="_blank" rel="noreferrer">
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </HUDShell>
  );
}
