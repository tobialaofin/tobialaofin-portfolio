// src/app/projects/page.tsx
import BackToHome from "@/components/BackToHome";

const projects = [
  {
    name: "CMMC Compliance & Intune Security Hardening",
    status: "ACTIVE",
    tags: [
      "Intune",
      "CMMC",
      "Microsoft 365",
      "Compliance",
      "Policy Management",
      "NIST 800-171",
    ],
    bullets: [
      "Reviewed an existing Intune environment and mapped technical controls to CMMC Level 2 / NIST 800-171 requirements.",
      "Designed and tuned Windows endpoint baselines (device restrictions, attack surface reduction, identity hardening, and configuration policies).",
      "Validated policy behavior through controlled testing, documented results, and captured audit-ready evidence screenshots/exports.",
      "Produced control-by-control implementation notes and an evidence trail to support third-party assessment readiness.",
    ],
    links: [
      {
        label: "VIEW_GITHUB",
        href: "https://github.com/tobialaofin/cloud-security-compliance-portfolio",
      },
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
    links: [
      {
        label: "VIEW_GITHUB",
        href: "https://github.com/tobialaofin/real-time-market-data-stream",
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <div className="hud-frame">
        {/* Header row: Title LEFT, Back button RIGHT */}
        <div className="p-5 flex items-center justify-between">
          <div className="hud-title">PROJECT_REPOSITORY</div>
          <BackToHome />
        </div>

        {/* Projects list (RESTORED) */}
        <div className="px-5 pb-6 space-y-4">
          {projects.map((p) => (
            <div key={p.name} className="hud-panel p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[16px] font-bold">{p.name}</div>
                  <div className="mt-1 text-[12px] text-[color:var(--muted)]">
                    {p.tags.join(" • ")}
                  </div>
                </div>

                <div className="text-[11px] text-[color:var(--muted)]">
                  STATUS: <span className="text-[color:var(--text)]/90">{p.status}</span>
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-[13px] leading-relaxed list-disc pl-5">
                {p.bullets.map((b, idx) => (
                  <li key={`${p.name}-b-${idx}`}>{b}</li>
                ))}
              </ul>

              {p.links.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-3">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      className="hud-link"
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
