import type { Metadata } from "next";
import {
  ArrowIcon,
  BrandMark,
  CheckIcon,
  InlineCta,
  SiteHeader,
} from "@/components/landing/SiteComponents";
import "../landing-pages.css";

const checkoutUrl =
  "https://mktrintheloop.com/#/portal/signup/69b32e1a2f318400080f2c0f/yearly";

export const metadata: Metadata = {
  title: {
    absolute: "Install your AI marketing operating system | MITL Pro",
  },
  description:
    "Get the MITL MCP server, five marketing skill suites, future releases, the Pro archive, and a 20-minute install call for $150/year.",
  alternates: {
    canonical: "https://www.multiplai-growth.com/mitl-pro",
  },
  openGraph: {
    title: "Install your AI marketing operating system | MITL Pro",
    description:
      "One connector, five skill suites, every future release, the Pro archive, and a 20-minute install call for $150/year.",
    url: "https://www.multiplai-growth.com/mitl-pro",
    type: "website",
  },
};

const suites = [
  {
    number: "01",
    title: "CMO Strategy",
    body: "Build the foundation: discovery, positioning, ICP, brand strategy, and content strategy.",
  },
  {
    number: "02",
    title: "Content Marketing",
    body: "Turn that foundation into briefs, calendars, campaigns, articles, social posts, and publishing workflows.",
  },
  {
    number: "03",
    title: "Creative Director",
    body: "Carry the visual system into brand guides, components, templates, and production.",
  },
  {
    number: "04",
    title: "SEO / GEO",
    body: "Audit search visibility, measure AI share of answer, map citations, and improve content structure.",
  },
  {
    number: "05",
    title: "Video Production",
    body: "Turn approved strategy and creative direction into repeatable video workflows.",
  },
];

export default function MitlProPage() {
  return (
    <main className="landing-page page-shell page-mitl paper">
      <SiteHeader brand="mitl" />

      <section className="hero hero-mitl">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">MITL Pro · membership / 2026</p>
          <h1>Install your AI marketing operating system.</h1>
          <p className="hero-deck">
            Give your AI the strategy, context, and reusable workflows it needs
            to do real marketing work, without starting from a blank chat every
            time.
          </p>
          <div className="hero-actions">
            <a className="button button-rose" href={checkoutUrl}>
              Get MITL Pro for $150/year <ArrowIcon />
            </a>
            <span>Cancel anytime · Renews annually</span>
          </div>
        </div>

        <div className="os-map" aria-label="MITL Pro system map">
          <div className="os-map-top">
            <span className="map-label">One connector</span>
            <strong>MITL MCP server</strong>
            <span className="status-dot">live</span>
          </div>
          <div className="connector-line" />
          <div className="os-map-grid">
            {["Strategy", "Content", "Creative", "SEO / GEO", "Video"].map(
              (label, index) => (
                <div className="map-node" key={label}>
                  <span>0{index + 1}</span>
                  <strong>{label}</strong>
                </div>
              ),
            )}
          </div>
          <p>Five skill suites. Every future release. One shared foundation.</p>
        </div>
      </section>

      <section className="offer-strip" aria-label="MITL Pro offer summary">
        <div>
          <span className="eyebrow">Annual membership</span>
          <strong>$150</strong>
        </div>
        <p>
          MITL MCP + five suites + future releases + Pro archive + 20-minute
          install call
        </p>
      </section>

      <section className="content-section intro-section">
        <div className="section-heading">
          <p className="eyebrow">The problem underneath the tools</p>
          <h2>Stop starting from a blank chat.</h2>
        </div>
        <div className="large-body">
          <p>
            Most marketers do not need another AI dashboard or another folder
            of prompts. They need a system that remembers the strategy and
            knows how the work should be done.
          </p>
          <p>
            MITL Pro gives you one connector inside your MCP-compatible AI
            client. Each workflow reads from the same operating context, so
            your positioning, ICP, voice, and process do not drift from one
            task to the next.
          </p>
          <p className="pull-line">The archive explains the thinking. The MCP runs the work.</p>
        </div>
      </section>

      <InlineCta
        eyebrow="Ready to stop rebuilding the work?"
        headline="Install the system once. Use it every week."
        body="Join Pro and put the strategy, workflows, and operating context directly inside your AI client."
        href={checkoutUrl}
        label="Get MITL Pro for $150/year"
      />

      <section className="content-section dark-section" id="included">
        <div className="section-heading section-heading-light">
          <p className="eyebrow eyebrow-light">What you install</p>
          <h2>The complete system, not another collection of prompts.</h2>
        </div>
        <div className="benefit-grid">
          <article>
            <span className="eyebrow eyebrow-light">Execution layer</span>
            <h3>The MITL MCP server</h3>
            <p>
              Install one connector and run the workflows inside Claude Code or
              another MCP-compatible client. You do not need to browse a
              codebase or manage the underlying files.
            </p>
          </article>
          <article>
            <span className="eyebrow eyebrow-light">Working library</span>
            <h3>Five marketing skill suites</h3>
            <p>
              Strategy, content, creative, SEO/GEO, and video workflows built
              to share one marketing foundation.
            </p>
          </article>
          <article>
            <span className="eyebrow eyebrow-light">Always current</span>
            <h3>Every future suite</h3>
            <p>
              When a new suite ships, it rolls into Pro. You do not have to buy
              another pack.
            </p>
          </article>
          <article>
            <span className="eyebrow eyebrow-light">Operating context</span>
            <h3>The full Pro archive</h3>
            <p>
              Premium Build Logs, Tool Bench reviews, operator notes,
              templates, frameworks, and the thinking behind the system.
            </p>
          </article>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <p className="eyebrow">Five suites, one foundation</p>
          <h2>Every specialist starts with the same strategy.</h2>
        </div>
        <div className="suite-list">
          {suites.map((suite) => (
            <article key={suite.title}>
              <span>{suite.number}</span>
              <div>
                <h3>{suite.title}</h3>
                <p>{suite.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <InlineCta
        eyebrow="One membership. The complete library."
        headline="Get all five suites—and every suite that ships next."
        body="Start with the workflows you need now without buying separate prompt packs or rebuilding the foundation later."
        href={checkoutUrl}
        label="Install your marketing OS"
        dark
      />

      <section className="content-section install-call-section">
        <div className="install-call-card">
          <p className="eyebrow">Included with Pro</p>
          <h2>Get the system running before it becomes another “set it up later” project.</h2>
          <p>
            Book a 20-minute install call with Hanna within 30 days of joining.
            We will confirm the MCP is installed, check your first foundation
            outputs, and run one skill end to end before we hang up.
          </p>
          <p className="small-copy">
            This is a focused activation call, not ongoing advisory.
          </p>
        </div>
        <div className="check-list">
          {[
            "Confirm the connector is installed",
            "Check the first foundation outputs",
            "Run one real workflow together",
            "Leave knowing what to run next",
          ].map((item) => (
            <p key={item}>
              <CheckIcon />
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="content-section steps-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>Join once. Build from the same system every week.</h2>
        </div>
        <ol className="steps-grid">
          {[
            ["Join MITL Pro", "Your Pro access is created through Ghost."],
            [
              "Install one connector",
              "Add the MITL MCP server to your compatible AI client.",
            ],
            [
              "Build the foundation",
              "Run the strategy workflows the rest of the system will read.",
            ],
            [
              "Activate it together",
              "Use the install call to check the setup and run real work.",
            ],
          ].map(([title, body], index) => (
            <li key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="content-section faq-section">
        <div className="section-heading">
          <p className="eyebrow">Before you join</p>
          <h2>Good questions, answered directly.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Do I need to know how to code?</summary>
            <p>
              No. Install the MCP connector and run the workflows from a
              compatible AI client. You do not need to work in GitHub or edit
              the underlying skill files.
            </p>
          </details>
          <details>
            <summary>Which AI clients can I use?</summary>
            <p>
              The member install path supports Claude Code and other
              MCP-compatible clients. The member page contains the current
              setup instructions.
            </p>
          </details>
          <details>
            <summary>Is the install call a consulting session?</summary>
            <p>
              No. It is a focused 20-minute activation call. We confirm the
              system is installed, check the first outputs, and run one skill
              end to end.
            </p>
          </details>
          <details>
            <summary>Is this the same as hiring MultiplAI?</summary>
            <p>
              No. MITL Pro is the build-it-yourself system. MultiplAI advisory
              and implementation are separate services for teams that want a
              custom system built with or for them.
            </p>
          </details>
        </div>
      </section>

      <section className="closing-cta closing-cta-mitl">
        <BrandMark brand="mitl" />
        <div>
          <p className="eyebrow eyebrow-light">MITL Pro · $150/year</p>
          <h2>Install your AI marketing operating system.</h2>
          <p>
            One connector, five skill suites, every future release, the Pro
            archive, and a 20-minute install call.
          </p>
        </div>
        <a className="button button-rose" href={checkoutUrl}>
          Get MITL Pro <ArrowIcon />
        </a>
      </section>

      <footer className="site-footer site-footer-dark">
        <span>Marketer in the Loop</span>
        <span>AI-native marketing systems for operators.</span>
      </footer>
    </main>
  );
}
