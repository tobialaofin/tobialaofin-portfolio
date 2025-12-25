import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/portfolio";

export default function ProfileCard() {
  return (
    <div className="hud-panel hud-panel-strong p-5">
      <div className="hud-title text-[12px] text-[color:var(--muted)] mb-3">
        USER_PROFILE
      </div>

      <div className="hud-panel p-3 mb-4">
        <div className="flex items-start gap-3">
          <div className="relative w-[96px] h-[96px] rounded-xl overflow-hidden border border-[color:var(--border)] shrink-0">
            <Image
              src={portfolio.contact.headshotPath}
              alt={`${portfolio.name} headshot`}
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="min-w-0">
            <div className="text-[15px] font-bold truncate">{portfolio.name}</div>
            <div className="text-[12px] text-[color:var(--muted)] mt-1">
              {portfolio.headline}
            </div>
            <div className="text-[12px] text-[color:var(--muted)]">
              {portfolio.location}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-4">
        <a className="hud-btn text-center" href={portfolio.contact.resumePath}>
          RESUME
        </a>
        <a className="hud-btn text-center" href={`mailto:${portfolio.contact.email}`}>
          EMAIL
        </a>
      </div>

      <div className="hud-title text-[12px] text-[color:var(--muted)] mb-2">
        NAV
      </div>

      <div className="space-y-2 mb-4">
        <Link className="hud-link block" href="/home">HOME</Link>
        <Link className="hud-link block" href="/about">ABOUT</Link>
        <Link className="hud-link block" href="/projects">PROJECTS</Link>
        <Link className="hud-link block" href="/contact">CONTACT</Link>
      </div>

      <div className="hud-title text-[12px] text-[color:var(--muted)] mb-2">
        QUICK_LINKS
      </div>

      <div className="grid grid-cols-2 gap-2">
        <a className="hud-link text-center" href={portfolio.contact.linkedin}>
          LinkedIn
        </a>
        <a className="hud-link text-center" href={portfolio.contact.github}>
          GitHub
        </a>
      </div>

      <div className="mt-4 text-[11px] text-[color:var(--muted)]">
        © {new Date().getFullYear()} {portfolio.name}
      </div>
    </div>
  );
}
