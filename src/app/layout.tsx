import type { Metadata } from "next";
import { PT_Sans_Narrow, IBM_Plex_Mono, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const ptSansNarrow = PT_Sans_Narrow({
  variable: "--font-pt-sans-narrow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "MultiplAI Growth Systems \u2014 AI Agents for Marketing Teams",
  description:
    "We build custom autonomous AI agents that join your team daily \u2014 executing campaigns with more accuracy, speed, and consistency than traditional methods.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ptSansNarrow.variable} ${ibmPlexMono.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
        {/* Page frame overlay \u2014 hex.tech-inspired border with tick marks */}
        <div className="page-frame" aria-hidden="true">
          <div className="page-frame-bottom absolute inset-0" />
          <div className="page-frame-texture" />
          <div className="page-frame-ticks-left" />
          <div className="page-frame-ticks-right" />
        </div>
      </body>
      <GoogleAnalytics gaId="G-C73JGEWNFE" />
    </html>
  );
}
