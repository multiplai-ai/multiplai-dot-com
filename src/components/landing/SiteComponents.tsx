import Link from "next/link";

type Brand = "mitl" | "multiplai";

export function BrandMark({ brand }: { brand: Brand }) {
  if (brand === "mitl") {
    return (
      <span className="brand-mark brand-mark-mitl">
        marketer<span>in the loop.</span>
      </span>
    );
  }

  return (
    <span className="brand-mark brand-mark-multiplai">
      Multipl<span>AI</span>
    </span>
  );
}

export function SiteHeader({ brand }: { brand: Brand }) {
  return (
    <header className={`site-header site-header-${brand}`}>
      <Link href="/" aria-label="Return to MultiplAI home">
        <BrandMark brand={brand} />
      </Link>
      <nav aria-label="Page navigation">
        <Link href={brand === "mitl" ? "/ai-roadmap" : "/mitl-pro"}>
          {brand === "mitl" ? "Free roadmap" : "MITL Pro"}
        </Link>
      </nav>
    </header>
  );
}

export function ArrowIcon() {
  return <span aria-hidden="true">→</span>;
}

export function CheckIcon() {
  return <span className="check-icon" aria-hidden="true">✓</span>;
}

export function InlineCta({
  eyebrow,
  headline,
  body,
  href,
  label,
  dark = false,
}: {
  eyebrow: string;
  headline: string;
  body: string;
  href: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <section className={`inline-cta${dark ? " inline-cta-dark" : ""}`}>
      <div>
        <p className={`eyebrow${dark ? " eyebrow-light" : ""}`}>{eyebrow}</p>
        <h2>{headline}</h2>
        <p>{body}</p>
      </div>
      <a className="button button-rose" href={href}>
        {label} <ArrowIcon />
      </a>
    </section>
  );
}
