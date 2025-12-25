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
              >
                Resume PDF
              </a>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {portfolio.projects.map((p) => {
                // Your portfolio.ts uses `links`, not `href`
                const primaryLink = p.links?.[0];
                const href = primaryLink?.href;

                return (
                  <a
                    key={("slug" in p && p.slug) ? p.slug : p.title}
                    href={href ?? "#"}
                    className={[
                      "hud-panel p-4 transition",
                      href
                        ? "hover:bg-[color:var(--accent-weak)]"
                        : "opacity-60 cursor-not-allowed",
                    ].join(" ")}
                    target={href ? "_blank" : undefined}
                    rel={href ? "noreferrer" : undefined}
                    aria-disabled={!href}
                    onClick={(e) => {
                      if (!href) e.preventDefault();
                    }}
                  >
                    <div className="hud-title mb-1">{p.title}</div>
                    <div className="text-sm text-[color:var(--fg)]/80">
                      {p.description}
                    </div>
                    <div className="mt-2 text-xs text-[color:var(--muted)]">
                      {primaryLink?.label ?? "VIEW_ON_GITHUB"} →
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
