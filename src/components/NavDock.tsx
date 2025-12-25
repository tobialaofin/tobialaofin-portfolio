"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Home, User, FolderGit2, Briefcase, BadgeCheck, Mail } from "lucide-react";

const items = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/projects", label: "Projects", icon: FolderGit2 },
  { href: "/experience", label: "Experience", icon: Briefcase },
  { href: "/certifications", label: "Certifications", icon: BadgeCheck },
  { href: "/contact", label: "Contact", icon: Mail },
];

export default function NavDock() {
  const pathname = usePathname();

  return (
    <nav
      className={clsx(
        "rounded-2xl border border-emerald-200/20 bg-black/45 backdrop-blur-md",
        "px-3 py-3 flex flex-wrap items-center gap-2"
      )}
    >
      {items.map((it) => {
        const active = pathname === it.href;
        const Icon = it.icon;
        return (
          <Link
            key={it.href}
            href={it.href}
            className={clsx(
              "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition",
              "border border-transparent",
              active
                ? "bg-emerald-500/15 text-emerald-100 border-emerald-400/25"
                : "text-emerald-100/80 hover:bg-emerald-500/10 hover:text-emerald-50"
            )}
          >
            <Icon size={16} />
            {it.label}
          </Link>
        );
      })}
    </nav>
  );
}
