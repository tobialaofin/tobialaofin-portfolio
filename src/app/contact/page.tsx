import Link from "next/link";
import HUDShell from "@/components/HUDShell";
import ProfileCard from "@/components/ProfileCard";
import SectionCard from "@/components/SectionCard";

export default function ContactPage() {
  return (
    <HUDShell active="contact">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ProfileCard />

        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div className="hud-title">CONTACT_CHANNELS</div>
            <Link
              href="/home"
              className="rounded-xl border border-[color:var(--border)] px-3 py-2 text-xs text-[color:var(--fg)]/85 hover:bg-[color:var(--accent-weak)]"
            >
              ← BACK_TO_HOME
            </Link>
          </div>

          <SectionCard title="ESTABLISH_UPLINK">
            <div className="text-xs text-[color:var(--muted)] mb-4">
              SECURE_CHANNEL // ENCRYPTION: ENABLED
            </div>

            <form className="grid gap-3">
              <div className="grid md:grid-cols-2 gap-3">
                <label className="grid gap-1">
                  <span className="text-xs text-[color:var(--muted)]">NAME</span>
                  <input
                    className="rounded-lg border border-[color:var(--border)] bg-black/40 px-3 py-2 text-[color:var(--fg)]"
                    placeholder="Your name..."
                  />
                </label>

                <label className="grid gap-1">
                  <span className="text-xs text-[color:var(--muted)]">EMAIL</span>
                  <input
                    className="rounded-lg border border-[color:var(--border)] bg-black/40 px-3 py-2 text-[color:var(--fg)]"
                    placeholder="you@email.com"
                  />
                </label>
              </div>

              <label className="grid gap-1">
                <span className="text-xs text-[color:var(--muted)]">SUBJECT</span>
                <input
                  className="rounded-lg border border-[color:var(--border)] bg-black/40 px-3 py-2 text-[color:var(--fg)]"
                  placeholder="Project inquiry..."
                />
              </label>

              <label className="grid gap-1">
                <span className="text-xs text-[color:var(--muted)]">MESSAGE</span>
                <textarea
                  className="min-h-[180px] rounded-lg border border-[color:var(--border)] bg-black/40 px-3 py-2 text-[color:var(--fg)]"
                  placeholder="Enter your transmission..."
                />
              </label>

              <button
                type="button"
                className="mt-2 rounded-xl border border-[color:var(--border)] bg-[color:var(--accent-weak)] hover:bg-[color:var(--accent-weak-hover)] px-4 py-3 text-sm"
              >
                TRANSMIT_DATA →
              </button>
            </form>
          </SectionCard>
        </div>
      </div>
    </HUDShell>
  );
}
