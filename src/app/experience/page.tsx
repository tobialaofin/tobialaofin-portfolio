import HUDShell from "@/components/HUDShell";
import SectionCard from "@/components/SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function ExperiencePage() {
  return (
    <HUDShell title="Experience">
      <div className="grid grid-cols-1 gap-6">
        {portfolio.experience.map((e) => (
          <SectionCard key={e.title} title={e.title}>
            <div className="text-sm text-emerald-200/70 mb-3">{e.period}</div>
            <ul className="list-disc pl-5 space-y-2 text-emerald-100/85">
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </SectionCard>
        ))}
      </div>
    </HUDShell>
  );
}
