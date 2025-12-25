import Link from "next/link";

type NavDockProps = {
  active?: string;
};

const tabs = [
  { key: "home", href: "/home", label: "HOME" },
  { key: "about", href: "/about", label: "ABOUT" },
  { key: "experience", href: "/experience", label: "EXPERIENCE" },
  { key: "projects", href: "/projects", label: "PROJECTS" },
  { key: "certifications", href: "/certifications", label: "CERTIFICATIONS" },
  { key: "contact", href: "/contact", label: "CONTACT" },
];

export default function NavDock({ active }: NavDockProps) {
  return (
    <nav className="px-5 py-3 border-b border-[color:var(--border)] flex flex-wrap gap-2">
      {tabs.map((t) => {
        const isActive = active === t.key;
        return (
          <Link
            key={t.key}
            href={t.href}
            className={[
              "rounded-xl border px-3 py-2 text-xs tracking-widest transition",
              "border-[color:var(--border)]",
              isActive
                ? "bg-[color:var(--accent-weak)] text-[color:var(--fg)]"
                : "text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]",
            ].join(" ")}
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
