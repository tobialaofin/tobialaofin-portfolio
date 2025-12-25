import HUDShell from "@/components/HUDShell";
import SectionCard from "@/components/SectionCard";
import { portfolio } from "@/lib/portfolio";

export default function CertificationsPage() {
  return (
    <HUDShell title="Certifications">
      <SectionCard title="Credentials">
        <ul className="list-disc pl-5 space-y-2 text-emerald-100/85">
          {portfolio.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </SectionCard>
    </HUDShell>
  );
}
