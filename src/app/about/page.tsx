import HUDShell from "@/components/HUDShell";
import SectionCard from "@/components/SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function AboutPage() {
  const a = portfolio.about;

  return (
    <HUDShell active="about">
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">
        {/* LEFT */}
        <div className="space-y-6">
          <div className="hud-panel hud-panel-strong p-6">
            <div className="hud-title mb-3">IDENTITY</div>
            <div className="text-2xl font-semibold text-white">{portfolio.name}</div>
            <div className="text-sm text-[color:var(--muted)] mt-2">{portfolio.location}</div>
            <div className="mt-4 text-sm text-white/80 leading-relaxed">{portfolio.headline}</div>
          </div>

          <div className="hud-panel p-6">
            <div className="hud-title mb-3">QUICK_LINKS</div>
            <div className="flex flex-col gap-2">
              <a className="hud-link" href={portfolio.contact.linkedin} target="_blank" rel="noreferrer">
                LINKEDIN →
              </a>
              <a className="hud-link" href={portfolio.contact.github} target="_blank" rel="noreferrer">
                GITHUB →
              </a>
              <a className="hud-link" href={portfolio.contact.resumePath} target="_blank" rel="noreferrer">
                RESUME_PDF →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          <SectionCard title="ABOUT_ME" subtitle="BACKGROUND // ORIGIN // NOW">
            <div className="space-y-4 text-sm text-white/85 leading-relaxed">
              <p>{a.intro}</p>
              <p>{a.originStory}</p>
              <p>{a.now}</p>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="hud-panel p-5">
                  <div className="hud-title mb-2">INTERESTS_SPORTS</div>
                  <div className="text-sm text-white/85">{a.interests.sports.join(" • ")}</div>
                </div>

                <div className="hud-panel p-5">
                  <div className="hud-title mb-2">INTERESTS_MUSIC</div>
                  <div className="text-sm text-white/85">{a.interests.music.join(" • ")}</div>
                </div>

                <div className="hud-panel p-5 md:col-span-2">
                  <div className="hud-title mb-2">TRAVEL</div>
                  <div className="text-sm text-white/85">{a.interests.travel}</div>
                </div>

                <div className="hud-panel p-5 md:col-span-2">
                  <div className="hud-title mb-2">GAMING</div>
                  <div className="text-sm text-white/85">{a.interests.gaming}</div>
                </div>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="EXPERIENCE_LOGS">
            <div className="space-y-5">
              {portfolio.experience.map((e, idx) => (
                <div key={`${e.title}-${idx}`} className="hud-panel p-5">
                  <div className="flex items-start justify-between gap-6">
                    <div className="font-semibold text-white">{e.title}</div>
                    <div className="text-xs text-[color:var(--muted)] whitespace-nowrap">{e.period}</div>
                  </div>
                  <ul className="mt-4 list-disc pl-5 space-y-2 text-sm text-white/85">
                    {e.bullets.map((b, i) => (
                      <li key={`${i}-${b}`}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title="CREDENTIALS">
            <ul className="list-disc pl-5 space-y-2 text-white/85">
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
