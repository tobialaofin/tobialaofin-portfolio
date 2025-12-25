import HUDShell from "@/components/HUDShell";
import ProfileCard from "@/components/ProfileCard";
import TerminalPanel from "@/components/TerminalPanel";
import SectionCard from "@/components/SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function HomePage() {
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
              {portfolio.projects.map((p, idx) => {
                // Your portfolio items have `links`, not `href`
                const projectHref = p.links?.[0]?.href;

                return (
                  <a
                    key={(p as any).slug ?? p.title ?? idx}
                    href={projectHref ?? "#"}
                    className="hud-panel p-4 hover:bg-[color:var(--accent-weak)] transition"
                    target={projectHref ? "_blank" : undefined}
                    rel={projectHref ? "noreferrer" : undefined}
                    aria-disabled={!projectHref}
                    onClick={(e) => {
                      if (!projectHref) e.preventDefault();
                    }}
                  >
                    <div className="hud-title mb-1">{p.title}</div>

                    <div className="text-sm text-[color:var(--fg)]/80">
                      {p.description}
                    </div>

                    <div className="mt-2 text-xs text-[color:var(--muted)]">
                      {projectHref ? "VIEW_ON_GITHUB →" : "NO_LINK_AVAILABLE"}
                    </div>
                  </a>
                );
              })}
            </div>
          </SectionCard>

          <TerminalPanel />
        </div>
      </div>
    </HUDShell>
  );
}
