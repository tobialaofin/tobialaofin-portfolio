import Link from "next/link";

export default function BackToHome() {
  return (
    <div className="mb-4">
      <Link href="/home" className="hud-link inline-block">
        ← BACK_TO_HOME
      </Link>
    </div>
  );
}
