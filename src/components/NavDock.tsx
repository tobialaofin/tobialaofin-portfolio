"use client";

import Link from "next/link";
import React from "react";

type NavDockProps = {
  active?: string;
};

const TABS = [
  { key: "home", label: "HOME", href: "/home" },
  { key: "about", label: "ABOUT", href: "/about" },
  { key: "projects", label: "PROJECTS", href: "/projects" },
  { key: "contact", label: "CONTACT", href: "/contact" },
];

export default function NavDock({ active }: NavDockProps) {
  return (
    <div className="hud-panel hud-panel-strong px-4 py-3">
      <div className="flex flex-wrap items-center gap-3">
        {TABS.map((t) => {
          const isActive = active === t.key;
          return (
            <Link
              key={t.key}
              href={t.href}
              className={[
                "rounded-xl border px-4 py-3 text-xs tracking-widest transition",
                "border-[color:var(--border)]",
                isActive
                  ? "bg-[color:var(--accent-weak)] text-white"
                  : "text-white/85 hover:bg-[color:var(--accent-weak)]",
              ].join(" ")}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
