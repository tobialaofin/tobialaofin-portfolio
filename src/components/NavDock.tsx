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
    <nav className="hud-topnav">
      {tabs.map((t) => {
        const isActive = active === t.key;
        return (
          <Link key={t.key} href={t.href} data-active={isActive ? "true" : "false"}>
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
