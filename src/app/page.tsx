"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import MatrixRain from "@/components/MatrixRain";
import { portfolio } from "@/lib/portfolio";

const LINES = [
  "> INITIALIZE_UPLINK",
  "> VALIDATING_IDENTITY",
  "> LOADING_PROFILE_PAYLOAD",
  "> HANDSHAKE_OK :: ENC=TLS",
  "> ROUTE :: /home",
  "> DECRYPTING_UI_MODULES",
  "> SYNC :: PORTFOLIO_INDEX",
  "> DONE",
];

function formatTime() {
  const d = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");
  const h = d.getHours() % 12 || 12;
  const ampm = d.getHours() >= 12 ? "PM" : "AM";
  return `${h}:${pad(d.getMinutes())}:${pad(d.getSeconds())} ${ampm}`;
}

export default function BootPage() {
  const router = useRouter();

  const [started, setStarted] = useState(false);
  const [i, setI] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef<number | null>(null);

  // ✅ init from function (no setState() inside effect body)
  const [timestamp, setTimestamp] = useState<string>(() => formatTime());

  // clock tick
  useEffect(() => {
    const t = window.setInterval(() => setTimestamp(formatTime()), 1000);
    return () => window.clearInterval(t);
  }, []);

  // typing animation + redirect
  useEffect(() => {
    if (!started) return;

    timerRef.current = window.setInterval(() => {
      setI((prev) => {
        const next = prev + 1;

        if (next >= LINES.length) {
          if (timerRef.current) window.clearInterval(timerRef.current);
          timerRef.current = null;

          setDone(true);
          setTimeout(() => router.push("/home"), 700);
          return prev;
        }

        return next;
      });
    }, 220);

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [started, router]);

  // ✅ no useMemo needed
  const title = portfolio.name.toUpperCase();

  return (
    <main className="relative min-h-screen bg-black text-blue-100 overflow-hidden">
      <MatrixRain tone="blue" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-2xl border border-blue-400/30 bg-black/60 backdrop-blur-md rounded-2xl shadow-[0_0_40px_rgba(59,130,246,0.12)]">
          <div className="px-6 py-5 border-b border-blue-400/20 flex items-center justify-between">
            <div className="text-sm tracking-widest text-blue-200/80">RESTRICTED_ACCESS_AREA</div>
            <div className="text-sm text-blue-100/70">{timestamp}</div>
          </div>

          <div className="px-6 py-8">
            <div className="text-4xl md:text-5xl font-semibold tracking-wider text-blue-100 drop-shadow-[0_0_12px_rgba(59,130,246,0.35)]">
              PORTFOLIO_PAYLOAD
            </div>

            <div className="mt-2 text-xs tracking-[0.35em] text-blue-200/60">
              SYSTEM ONLINE // v1.0.0 // {title}
            </div>

            {!started ? (
              <button
                onClick={() => setStarted(true)}
                className="mt-10 w-full rounded-xl border border-blue-400/40 bg-blue-500/10 hover:bg-blue-500/15 transition px-5 py-5 text-left"
              >
                <div className="text-sm tracking-widest text-blue-100/90">TAP TO START</div>
                <div className="mt-2 text-xs text-blue-200/60">Initialize uplink and load interface</div>
              </button>
            ) : (
              <div className="mt-10 rounded-xl border border-blue-400/25 bg-black/40 p-5 font-mono text-sm">
                <div className="space-y-2">
                  {LINES.slice(0, i + 1).map((line, idx) => (
                    <div key={idx} className="text-blue-100/90">
                      {line}
                    </div>
                  ))}
                  {done ? <div className="text-blue-200/70">&gt; REDIRECTING...</div> : null}
                </div>
              </div>
            )}

            <div className="mt-6 text-xs text-blue-200/45 leading-relaxed">
              Visual simulation only (no real hacking).
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
