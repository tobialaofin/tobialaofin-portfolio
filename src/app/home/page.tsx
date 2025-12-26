import HUDShell from "@/components/HUDShell";
import SectionCard from "@/components/SectionCard";
import ProjectGrid from "@/components/ProjectGrid";
import { portfolio } from "@/lib/portfolio";

const TERMINAL_LINES = [
  "BOOT_SEQUENCE: OK",
  "AUTH: VERIFIED",
  "CHANNEL: SECURE",
  "MONITORING: ACTIVE",
  "READY_FOR_TASKING →",
];

export default function HomePage() {
  return (
    <HUDShell
      active="home"
      title="HOME_CONSOLE"
      topSlot={
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] gap-6">
          {/* LEFT: QUICK LINKS */}
          <div className="hud-panel hud-panel-strong p-6">
            <div className="hud-title mb-4">QUICK_LINKS</div>

            <div className="flex flex-wrap gap-4">
              <a className="hud-link" href={portfolio.contact.resumePath} target="_blank" rel="noreferrer">
                RESUME_PDF →
              </a>
              <a className="hud-link" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
                LINKEDIN →
              </a>
              <a className="hud-link" href={portfolio.contact.github} target="_blank" rel="noreferrer">
                GITHUB →
              </a>
              <a className="hud-link" href={`mailto:${portfolio.contact.email}`}>
                EMAIL →
              </a>
            </div>

            <div className="mt-4 text-[11px] tracking-widest text-[color:var(--muted)]">
              STATUS: ONLINE · ENCRYPTION: TLS · THEME: BLUE_HUD
            </div>
          </div>

          {/* RIGHT: TERMINAL */}
          <div className="hud-panel hud-panel-strong p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="hud-title">OPS_TERMINAL</div>
              <div className="text-[11px] tracking-widest text-[color:var(--muted)]">LIVE_FEED</div>
            </div>

            <div className="mt-4 hud-terminal space-y-1">
              {TERMINAL_LINES.map((l) => (
                <div key={l}>{l}</div>
              ))}
              <div className="muted">&gt; TIP: USE NAV TABS ABOVE</div>
            </div>
          </div>
        </div>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
        {/* LEFT SIDEBAR */}
        <div className="space-y-6">
          <div className="hud-panel hud-panel-strong p-6">
            <div className="hud-title mb-4">USER_PROFILE</div>

            <div className="flex items-start gap-5">
              <div className="w-[150px] h-[150px] rounded-2xl overflow-hidden border border-[color:var(--border)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={portfolio.contact.headshotPath}
                  alt="Headshot"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="min-w-0 pt-1">
                <div className="text-xl font-semibold text-white">{portfolio.name}</div>
                <div className="text-sm text-white/80 mt-1">{portfolio.headline}</div>
                <div className="text-sm text-[color:var(--muted)] mt-2">{portfolio.location}</div>
              </div>
            </div>
          </div>

          <div className="hud-panel p-6">
            <div className="hud-title mb-4">HIGHLIGHTS</div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-white/85">
              {portfolio.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="space-y-6">
          <SectionCard title="FOCUS">
            <div className="text-sm text-white/85 leading-relaxed">{portfolio.focus}</div>
          </SectionCard>

          <ProjectGrid />
        </div>
      </div>
    </HUDShell>
  );
}
