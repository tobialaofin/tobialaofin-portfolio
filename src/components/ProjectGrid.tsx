import SectionCard from "./SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function ProjectGrid() {
  return (
    <SectionCard
      title="PROJECT_REPOSITORY"
      subtitle="SELECTED_WORK // LINKS"
      rightSlot={
        <a className="hud-link" href={portfolio.contact.github} target="_blank" rel="noreferrer">
          VIEW GITHUB →
        </a>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.projects.map((p) => (
          <div key={p.slug} className="hud-panel p-4">
            <div className="font-semibold">{p.title}</div>

            <div className="text-[12px] text-[color:var(--muted)] mt-2 leading-relaxed">
              {p.description}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="hud-chip">
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a className="hud-link inline-block" href={p.href} target="_blank" rel="noreferrer">
                VIEW SOURCE →
              </a>

              {p.links?.map((l) => (
                <a key={l.href} className="hud-link inline-block" href={l.href} target="_blank" rel="noreferrer">
                  {l.label} →
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
