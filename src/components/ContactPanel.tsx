"use client";

import { useState } from "react";
import SectionCard from "./SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function ContactPanel() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  return (
    <SectionCard
      title="ESTABLISH_UPLINK"
      right={<div className="hud-chip">SECURE CHANNEL: ENABLED</div>}
    >
      <div className="hud-panel p-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">
              NAME
            </div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-3 text-sm outline-none focus:border-[color:var(--border-strong)]"
              placeholder="Your name"
            />
          </div>
          <div>
            <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">
              EMAIL
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-3 text-sm outline-none focus:border-[color:var(--border-strong)]"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="mt-3">
          <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">
            SUBJECT
          </div>
          <input
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-3 text-sm outline-none focus:border-[color:var(--border-strong)]"
            placeholder="Project inquiry..."
          />
        </div>

        <div className="mt-3">
          <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">
            MESSAGE
          </div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full min-h-[160px] rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-3 text-sm outline-none focus:border-[color:var(--border-strong)]"
            placeholder="Enter transmission data here..."
          />
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="text-[12px] text-[color:var(--muted)]">
            Visual-only form (no backend hooked up).
          </div>
          <a
            className="hud-btn"
            href={`mailto:${portfolio.contact.email}?subject=${encodeURIComponent(
              subject || "Portfolio Inquiry"
            )}&body=${encodeURIComponent(
              `Name: ${name}\nEmail: ${email}\n\n${message}`
            )}`}
          >
            TRANSMIT DATA
          </a>
        </div>
      </div>
    </SectionCard>
  );
}
