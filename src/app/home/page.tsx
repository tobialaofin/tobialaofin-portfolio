import Link from "next/link";
import HUDShell from "@/components/HUDShell";
import SectionCard from "@/components/SectionCard";
import ProjectGrid from "@/components/ProjectGrid";
import { portfolio } from "@/lib/portfolio";

export default function HomePage() {
  return (
    <HUDShell
      active="home"
      rightSlot={
        <div className="flex items-center gap-2">
          <a className="hud-link" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
            LINKEDIN
          </a>
          <a className="hud-link" href={portfolio.contact.github} target="_blank" rel="noreferrer">
            GITHUB
          </a>
          <Link className="hud-link" href={portfolio.contact.resumePath} target="_blank">
            RESUME
          </Link>
        </div>
      }
    >
      {/* Kyle-like: left profile + right content with terminal in upper-right */}
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5">
        {/* LEFT SIDEBAR */}
        <div className="space-y-5">
          <div className="hud-panel hud-panel-strong p-5">
            <div className="hud-title mb-3">USER_PROFILE</div>

            <div className="flex items-start gap-4">
              <div className="w-[92px] h-[92px] rounded-xl overflow-hidden border border-[color:var(--border)] bg-black/40">
                {/* If you already have an <img> or next/image here, keep it */}
                <img
                  src={portfolio.contact.headshotPath}
                  alt="Headshot"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <div className="text-lg font-semibold">{portfolio.name}</div>
                <div className="text-sm text-[color:var(--muted)] mt-1">{portfolio.headline}</div>
                <div className="text-sm text-[color:var(--muted)]/85 mt-1">{portfolio.location}</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-[color:var(--fg)]/85 leading-relaxed">
              {portfolio.focus}
            </div>
          </div>

          <SectionCard title="HIGHLIGHTS">
            <ul className="list-disc pl-5 space-y-2 text-[color:var(--fg)]/85 text-sm">
              {portfolio.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </SectionCard>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-5">
          {/* TOP ROW: terminal box on upper-right (Kyle-style) */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            <SectionCard title="ABOUT_ME" rightSlot={<Link className="hud-link" href="/about">OPEN</Link>}>
              <div className="text-sm text-[color:var(--fg)]/85 leading-relaxed space-y-2">
                <p>{portfolio.about.intro}</p>
                <p className="text-[color:var(--muted)]">{portfolio.about.now}</p>
              </div>
            </SectionCard>

            {/* ✅ TERMINAL BOX (upper right) */}
            <SectionCard title="OPS_TERMINAL" subtitle="STATUS_FEED">
              <div className="font-mono text-[12px] leading-relaxed text-[color:var(--fg)]/90 space-y-1">
                <div>BOOT_SEQUENCE: OK</div>
                <div>AUTH: VERIFIED</div>
                <div>CHANNEL: SECURE</div>
                <div>MONITORING: ACTIVE</div>
                <div>READY_FOR_TASKING →</div>
              </div>
            </SectionCard>
          </div>

          {/* Everything else below stays clean and boxed */}
          <ProjectGrid />
        </div>
      </div>
    </HUDShell>
  );
}
