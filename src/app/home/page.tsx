import HUDShell from "@/components/HUDShell";
import ProfileCard from "@/components/ProfileCard";
import TerminalPanel from "@/components/TerminalPanel";
import SectionCard from "@/components/SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function HomePage() {
  const projects = portfolio.projects ?? [];

  return (
    <HUDShell>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileCard />

        <div className="lg:col-span-2 space-y-6">
          <SectionCard title={portfolio.headline}>
            <p className="text-[color:var(--fg)]/85 leading-relaxed">
              {portfolio.focus}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <a
                href={portfolio.contact.linkedin}
                className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={portfolio.contact.github}
                className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={portfolio.contact.resumePath}
                className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-sm text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]"
                target="_blank"
                rel="noreferrer"
              >
                Resume PDF
              </a>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {projects.map((p, idx) => (
                <a
                  // Use idx in the key so it's ALWAYS unique (even if slug duplicates)
                  key={`${p.slug ?? "project"}-${idx}`}
                  href={p.href}
                  className="hud-panel p-4 hover:bg-[color:var(--accent-weak)] transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="hud-title mb-1">{p.title}</div>
                  <div className="text-sm text-[color:var(--fg)]/80">
                    {p.description}
                  </div>
                  <div className="mt-2 text-xs text-[color:var(--muted)]">
                    VIEW_ON_GITHUB →
                  </div>
                </a>
              ))}
            </div>
          </SectionCard>

          <TerminalPanel />
        </div>
      </div>
    </HUDShell>
  );
}
