import Link from "next/link";
import { footerColumns } from "@/data/shared";

interface FooterProps {
  tagline: string;
}

export default function Footer({ tagline }: FooterProps) {
  return (
    <footer className="bg-eggplant py-12 relative z-[1] border-t border-[rgba(247,242,240,0.1)]">
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)] gap-12">
        <div>
          <span className="font-display font-bold text-[16px] tracking-[0.12em] uppercase text-blush-paper block mb-2">
            MULTIPLAI
          </span>
          <p className="text-[13px] text-muted-plum mb-6">{tagline}</p>
          <p className="text-[12px] text-muted-plum">
            &copy; 2026 MultiplAI Growth Systems. All rights reserved.
          </p>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h4 className="font-body text-[13px] font-bold text-blush-paper mb-4">
              {col.title}
            </h4>
            <ul className="list-none flex flex-col gap-2">
              {col.links.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[13px] text-muted-plum hover:text-blush-paper transition-colors">{link.label}</a>
                  ) : link.href.startsWith("#") ? (
                    <a href={link.href} className="text-[13px] text-muted-plum hover:text-blush-paper transition-colors">{link.label}</a>
                  ) : (
                    <Link href={link.href} className="text-[13px] text-muted-plum hover:text-blush-paper transition-colors">{link.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="col-span-full flex flex-col sm:flex-row justify-end gap-6 pt-6 border-t border-[rgba(255,255,255,0.06)]">
          <a href="#" className="text-[12px] text-muted-plum hover:text-blush-paper transition-colors">Privacy Policy</a>
          <a href="#" className="text-[12px] text-muted-plum hover:text-blush-paper transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
