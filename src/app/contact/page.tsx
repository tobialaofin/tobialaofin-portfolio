import HUDShell from "@/components/HUDShell";
import { portfolio } from "@/lib/portfolio";

export default function ContactPage() {
  return (
    <HUDShell active="contact" title="CONTACT_CHANNEL">
      <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-8">
        {/* LEFT: PROFILE + QUICK LINKS */}
        <div className="space-y-6">
          <div className="hud-panel hud-panel-strong p-6">
            <div className="hud-title mb-4">USER_PROFILE</div>

            <div className="flex items-start gap-5">
              <div className="w-[140px] h-[140px] rounded-2xl overflow-hidden border border-[color:var(--border)]">
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
                <div className="text-sm text-white/60 mt-2">{portfolio.location}</div>
              </div>
            </div>
          </div>

          <div className="hud-panel p-6">
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
          </div>
        </div>

        {/* RIGHT: MESSAGE */}
        <div className="hud-panel hud-panel-strong p-6">
          <div className="hud-title mb-4">MESSAGE</div>

          <p className="text-sm text-white/85 leading-relaxed">
            I’m currently open to Cloud, Software Engineering, and Cybersecurity roles (internship or full-time).
            If you’re hiring or know a team that needs someone who can build secure systems, work in regulated
            environments, and document evidence that holds up in audits, I’d love to connect.
          </p>

          <div className="mt-6 text-sm text-white/80 leading-relaxed">
            <div className="text-white/90 font-semibold tracking-widest">PREFERRED_TOPICS</div>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              <li>Azure / Microsoft security (Entra ID, Intune, Sentinel)</li>
              <li>CMMC / NIST 800-171 compliance engineering</li>
              <li>Detection engineering, logging, and operational security</li>
              <li>Full-stack + backend systems that are secure by default</li>
            </ul>
          </div>
        </div>
      </div>
    </HUDShell>
  );
}
