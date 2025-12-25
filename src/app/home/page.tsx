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
              {portfolio.projects.map((p) => {
                const primaryLink = p.links?.[0]?.href ?? "#";
                const isDisabled = !primaryLink || primaryLink === "#";

                return (
                  <a
                    key={p.slug ?? p.title}
                    href={primaryLink}
                    className="hud-panel p-4 hover:bg-[color:var(--accent-weak)] transition"
                    target={isDisabled ? undefined : "_blank"}
                    rel={isDisabled ? undefined : "noreferrer"}
                    aria-disabled={isDisabled}
                    onClick={(e) => {
                      if (isDisabled) e.preventDefault();
                    }}
                  >
                    <div className="hud-title mb-1">{p.title}</div>
                    <div className="text-sm text-[color:var(--fg)]/80">
                      {p.description}
                    </div>
                    <div className="mt-2 text-xs text-[color:var(--muted)]">
                      {isDisabled ? "LINK_PENDING" : "VIEW_ON_GITHUB →"}
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
