interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <p
      className={`font-mono text-[11px] font-semibold tracking-[0.08em] uppercase text-dusty-plum ${className}`}
    >
      {children}
    </p>
  );
}
