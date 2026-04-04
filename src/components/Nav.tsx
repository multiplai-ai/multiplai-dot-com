"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { audienceLinks, utilityLinks } from "@/data/shared";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isDark = pathname === "/cursor-cmo";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-obsidian/95 backdrop-blur-[12px] shadow-[0_2px_8px_rgba(0,0,0,0.3)] py-3.5"
            : "bg-blush-paper/95 backdrop-blur-[12px] shadow-[0_2px_8px_rgba(49,38,59,0.08)] py-3.5"
          : "py-5"
      }`}
    >
      <div className="max-w-[var(--max-width-content)] mx-auto px-[clamp(24px,4vw,120px)] flex items-center justify-between">
        {/* Left: logo + audience links */}
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`font-display font-bold text-[16px] tracking-[0.12em] uppercase ${
              isDark ? "text-blush-paper" : "text-eggplant"
            }`}
          >
            MULTIPLAI
          </Link>
          <ul className="hidden md:flex items-center gap-7 list-none">
            {audienceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-[14px] transition-colors ${
                    pathname === link.href
                      ? isDark
                        ? "text-blush-paper font-bold"
                        : "text-eggplant font-bold"
                      : isDark
                        ? "text-muted-plum hover:text-blush-paper"
                        : "text-muted-plum hover:text-eggplant"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: utility links + CTA */}
        <div className="flex items-center gap-7">
          <ul className="hidden md:flex items-center gap-7 list-none">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`font-body text-[14px] transition-colors ${
                    isDark
                      ? "text-muted-plum hover:text-blush-paper"
                      : "text-muted-plum hover:text-eggplant"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {isDark ? (
            <a
              href="#waitlist"
              className="hidden md:inline-flex items-center font-display font-normal text-[14px] text-obsidian bg-gradient-to-r from-[rgba(245,192,192,0.9)] to-[rgba(245,192,192,0.6)] border border-[rgba(245,192,192,0.3)] rounded-[2px] px-5 py-2 hover:from-[rgba(245,192,192,1)] hover:to-[rgba(245,192,192,0.8)] transition-all relative cta-brackets-dark"
            >
              Request Access
            </a>
          ) : (
            <a
              href="#contact"
              className="hidden md:inline-flex items-center font-display font-normal text-[14px] text-eggplant bg-gradient-to-r from-[rgba(245,192,192,0.4)] to-[rgba(245,192,192,0.1)] border border-[rgba(49,38,59,0.11)] rounded-[2px] px-5 py-2 hover:bg-canvas hover:border-[rgba(49,38,59,0.44)] transition-colors relative cta-brackets"
            >
              <span className="cta-brackets-inner absolute inset-0" />
              <span className="cta-brackets-outer absolute inset-0" />
              <span className="cta-brackets-outer-bottom absolute inset-0" />
              Get A Quote
            </a>
          )}

          {/* Mobile toggle */}
          <button
            className={`md:hidden ${isDark ? "text-blush-paper" : "text-eggplant"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden absolute top-full left-0 right-0 border-b shadow-[0_4px_16px_rgba(0,0,0,0.06)] z-[99] px-[clamp(24px,4vw,120px)] py-6 ${
            isDark
              ? "bg-obsidian border-[rgba(247,242,240,0.08)]"
              : "bg-blush-paper border-mist"
          }`}
        >
          <ul className="list-none flex flex-col gap-4">
            {audienceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-[16px] ${isDark ? "text-blush-paper" : "text-eggplant"}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`text-[16px] ${isDark ? "text-blush-paper" : "text-eggplant"}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={isDark ? "#waitlist" : "#contact"}
                className={`text-[16px] ${isDark ? "text-blush-paper" : "text-eggplant"}`}
                onClick={() => setMobileOpen(false)}
              >
                {isDark ? "Request Access" : "Book a Call"}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
