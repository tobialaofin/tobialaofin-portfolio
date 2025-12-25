import Link from "next/link";
import HUDShell from "@/components/HUDShell";
import SectionCard from "@/components/SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function AboutPage() {
  return (
    <HUDShell
      active="about"
      rightSlot={
        <Link
          href="/home"
          className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]"
        >
          ← BACK_TO_HOME
        </Link>
      }
    >
      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-5">
        <div className="hud-panel hud-panel-strong p-5">
          <div className="hud-title mb-3">IDENTITY</div>
          <div className="text-xl font-semibold">{portfolio.name}</div>
          <div className="text-sm text-[color:var(--muted)] mt-1">{portfolio.location}</div>
          <div className="mt-4 text-sm text-red-100/85 leading-relaxed">{portfolio.headline}</div>
        </div>

        <div className="space-y-5">
          <SectionCard title="EXPERIENCE_LOGS">
            <div className="space-y-4">
              {portfolio.experience.map((e, idx) => (
                <div key={`${e.title}-${idx}`} className="hud-panel p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-semibold">{e.title}</div>
                    <div className="text-xs text-[color:var(--muted)]">{e.period}</div>
                  </div>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-red-100/85">
                    {e.bullets.map((b, i) => (
                      <li key={`${i}-${b}`}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="CREDENTIALS">
            <ul className="list-disc pl-5 space-y-2 text-red-100/85">
              {portfolio.certifications.map((c, idx) => (
                <li key={`${idx}-${c}`}>{c}</li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </HUDShell>
  );
}
