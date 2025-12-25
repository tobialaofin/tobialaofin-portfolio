"use client";

import React, { useState } from "react";
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
      rightSlot={<div className="hud-chip">SECURE CHANNEL: ENABLED</div>}
    >
      <div className="hud-panel p-5">
        <div className="text-sm text-[color:var(--fg)]/80 mb-4">
          Prefer email?{" "}
          <a className="hud-link" href={`mailto:${portfolio.contact.email}`}>
            {portfolio.contact.email}
          </a>
        </div>

        {/* KEEP YOUR EXISTING FORM CONTENT BELOW (or use this) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>
            <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">NAME</div>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-2 text-sm"
            />
          </div>

          <div>
            <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">EMAIL</div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-2 text-sm"
            />
          </div>

          <div className="md:col-span-2">
            <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">SUBJECT</div>
            <input
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-2 text-sm"
            />
          </div>

          <div className="md:col-span-2">
            <div className="hud-title text-[11px] text-[color:var(--muted)] mb-1">MESSAGE</div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full min-h-[120px] rounded-xl border border-[color:var(--border)] bg-black/40 px-3 py-2 text-sm"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
