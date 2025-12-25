import SectionCard from "./SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function ProjectGrid() {
  return (
    <SectionCard
      title="PROJECT_REPOSITORY"
      right={<a className="hud-link" href={portfolio.contact.github}>VIEW GITHUB</a>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {portfolio.projects.map((p) => (
          <div key={p.title} className="hud-panel p-4">
            <div className="font-bold">{p.title}</div>
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
            {p.link ? (
              <div className="mt-3">
                <a className="hud-link inline-block" href={p.link}>
                  VIEW SOURCE
                </a>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
