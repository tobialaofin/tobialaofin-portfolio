export default function SectionCard({
  title,
  subtitle,
  rightSlot,
  children,
}: {
  title: string;
  subtitle?: string;
  rightSlot?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="hud-panel hud-panel-strong">
      <div className="px-5 py-4 border-b border-[color:var(--border)] flex items-start justify-between gap-4">
        <div>
          <div className="hud-title">{title}</div>
          {subtitle ? (
            <div className="mt-1 text-[11px] tracking-widest text-[color:var(--muted)]">
              {subtitle}
            </div>
          ) : null}
        </div>
        {rightSlot ? <div>{rightSlot}</div> : null}
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}
