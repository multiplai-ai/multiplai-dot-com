import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  href: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-[rgba(245,192,192,0.4)] to-[rgba(245,192,192,0.1)] border border-[rgba(49,38,59,0.11)] hover:from-[rgba(255,252,252,0.9)] hover:to-[rgba(255,252,252,0.5)] hover:border-[rgba(49,38,59,0.44)] relative cta-brackets",
  secondary:
    "bg-[#fcf8f8] border border-[rgba(49,38,59,0.09)] hover:bg-canvas hover:border-[rgba(49,38,59,0.44)]",
  ghost:
    "bg-transparent text-muted-plum underline underline-offset-[3px] decoration-[rgba(49,38,59,0.22)] hover:text-eggplant text-[15px]",
};

function BracketSpans() {
  return (
    <>
      <span className="cta-brackets-inner absolute inset-0" />
      <span className="cta-brackets-outer absolute inset-0" />
      <span className="cta-brackets-outer-bottom absolute inset-0" />
    </>
  );
}

export default function Button({ href, variant = "primary", children, className = "", external = false }: ButtonProps) {
  const base = variant === "ghost" ? "font-display font-normal text-[15px] transition-colors" : "inline-flex items-center justify-center font-display font-normal text-[17px] text-eggplant rounded-[2px] px-8 py-3.5 transition-colors cursor-pointer";
  const classes = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (<a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{variant === "primary" && <BracketSpans />}{children}</a>);
  }
  return (<Link href={href} className={classes}>{variant === "primary" && <BracketSpans />}{children}</Link>);
}
