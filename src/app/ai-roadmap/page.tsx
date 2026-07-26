import type { Metadata } from "next";
import {
  ArrowIcon,
  BrandMark,
  CheckIcon,
  InlineCta,
  SiteHeader,
} from "@/components/landing/SiteComponents";
import ConsultLauncher from "./ConsultLauncher";
import "../landing-pages.css";

export const metadata: Metadata = {
  title: "Get your free personalized AI implementation roadmap",
  description:
    "Complete an 8–10 minute AI consultation and receive a human-reviewed plan showing which AI-enabled systems to prioritize and how to measure impact.",
  alternates: {
    canonical: "https://www.multiplai-growth.com/ai-roadmap",
  },
  openGraph: {
    title: "Get your free personalized AI implementation roadmap",
    description:
      "Find the three AI-enabled systems to prioritize, what to stop doing, and how to measure business impact.",
    url: "https://www.multiplai-growth.com/ai-roadmap",
    type: "website",
  },
};

const deliverables = [
  {
    number: "01",
    title: "Your business goal and success state",
    body: "The result the plan is designed to improve and what meaningful progress would look like.",
  },
  {
    number: "02",
    title: "A diagnosis of the real constraint",
    body: "Why the current AI work is or is not translating into business impact, grounded in the evidence you provide.",
  },
  {
    number: "03",
    title: "Three prioritized AI-enabled systems",
    body: "The builds that best fit your services, clients, current work, available data, and operating reality.",
  },
  {
    number: "04",
    title: "The logic behind each priority",
    body: "What each system would do, how it could create impact, what it depends on, and what evidence would justify scaling it.",
  },
  {
    number: "05",
    title: "A stop and defer list",
    body: "The work that should not consume attention yet, so the important work has room to move.",
  },
  {
    number: "06",
    title: "An implementation and measurement plan",
    body: "The decisions, owners, workflows, foundations, risks, and signals required to move from idea to reliable use.",
  },
];

export default function AiRoadmapPage() {
  return (
    <main className="landing-page page-shell page-roadmap paper">
      <SiteHeader brand="multiplai" />

      <section className="hero hero-roadmap">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-rose">
            Free AI Implementation Consult
          </p>
          <h1>Get a personalized AI implementation roadmap built around your business.</h1>
          <p className="hero-deck">
            Find the three AI-enabled systems most likely to improve the result
            you care about, what has to change before they can work, and what
            to stop doing so the important work can move.
          </p>
          <div className="hero-actions">
            <a className="button button-rose" href="#start-consult">
              Start the free consult <ArrowIcon />
            </a>
            <span>Free · 8–10 minutes · No calendar booking</span>
          </div>
        </div>

        <article className="report-preview" aria-label="Sample AI Impact Build Plan">
          <div className="report-running-head">
            <BrandMark brand="multiplai" />
            <span>Agency AI Impact Build Plan</span>
            <span>01 / 06</span>
          </div>
          <p className="eyebrow eyebrow-rose">Executive diagnosis</p>
          <h2>
            Your AI program has plenty of activity. The missing piece is a
            roadmap tied to the result leadership needs.
          </h2>
          <div className="report-finding">
            <span>Primary question</span>
            <strong>What should we build next, and why?</strong>
          </div>
          <div className="report-signals">
            <div><span>01</span>Goal</div>
            <div><span>02</span>Evidence</div>
            <div><span>03</span>Builds</div>
            <div><span>04</span>Measure</div>
          </div>
          <p className="report-caption">
            Illustrative report preview. Your plan is built from your answers
            and reviewed by a person before delivery.
          </p>
        </article>
      </section>

      <section className="proof-strip" aria-label="Consult promise">
        {[
          ["8–10 min", "On-demand AI consultation"],
          ["3 systems", "Prioritized around your business"],
          ["Human-reviewed", "Checked before delivery"],
          ["Within 1 hour", "Sent to your confirmed email"],
        ].map(([value, label]) => (
          <div key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section className="content-section intro-section">
        <div className="section-heading">
          <p className="eyebrow">Motion is not progress</p>
          <h2>AI activity is not the same as business impact.</h2>
        </div>
        <div className="large-body">
          <p>
            Most teams already have plenty of AI activity. They have tools,
            experiments, automations, power users, and a backlog of things they
            could build.
          </p>
          <p>
            The harder question is whether any of that work is changing a
            client result, improving the business, or building a capability the
            rest of the team can use.
          </p>
          <p className="pull-line">
            The outcome is not a score or a transcript. It is a prioritized
            operating plan.
          </p>
        </div>
      </section>

      <InlineCta
        eyebrow="Free · 8–10 minutes"
        headline="Turn the AI backlog into three defensible priorities."
        body="Answer the questions when it works for you. We will turn the evidence into a human-reviewed roadmap for your business."
        href="#start-consult"
        label="Start the free consult"
      />

      <section className="content-section lilac-section">
        <div className="section-heading">
          <p className="eyebrow">Your personalized roadmap</p>
          <h2>A clear answer to “what should we build next?”</h2>
        </div>
        <div className="deliverable-grid">
          {deliverables.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <p className="section-note">
          Designed to take 8–12 minutes to read. More useful than a quiz-results
          page, and much easier to act on than a generic consulting deck.
        </p>
      </section>

      <InlineCta
        eyebrow="This is the deliverable"
        headline="Get the roadmap—not another quiz score."
        body="Walk away with the systems to prioritize, the work to defer, the sequence to follow, and the signals to measure."
        href="#start-consult"
        label="Get my free roadmap"
        dark
      />

      <section className="content-section" id="how-it-works">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A useful consulting conversation, without the calendar ping-pong.</h2>
        </div>
        <ol className="process-list">
          <li>
            <span>01</span>
            <div>
              <p className="eyebrow">Start when it works for you</p>
              <h3>Talk with the AI operating advisor.</h3>
              <p>
                The agent explains the process, tells you it is an AI, and asks
                permission to record and transcribe before substantive
                questions begin.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <p className="eyebrow">About 8–10 minutes</p>
              <h3>Work through the real operating problem.</h3>
              <p>
                Talk through the result that needs to change, what you have
                tried, what worked, what did not, how you measure progress, and
                what is blocking the next move.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <p className="eyebrow">One direction on the call</p>
              <h3>Get an initial point of view.</h3>
              <p>
                The agent gives you one specific initial recommendation. It
                does not try to squeeze the full plan into the conversation.
              </p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <p className="eyebrow">A real quality gate</p>
              <h3>A person reviews the plan.</h3>
              <p>
                MultiplAI checks the evidence, diagnosis, recommendation
                quality, and delivery details before anything is sent.
              </p>
            </div>
          </li>
          <li>
            <span>05</span>
            <div>
              <p className="eyebrow">Within an hour</p>
              <h3>Receive the full roadmap.</h3>
              <p>
                The human-reviewed plan is delivered to the email address you
                confirm during the consult.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <InlineCta
        eyebrow="No calendar booking"
        headline="Start when you have ten focused minutes."
        body="The consultation is on demand, the roadmap is reviewed by a person, and there is no required sales call."
        href="#start-consult"
        label="Begin the consult"
      />

      <section className="content-section fit-section">
        <div className="fit-card fit-card-dark">
          <p className="eyebrow eyebrow-light">Built for</p>
          <h2>Leaders who can change how the work gets done.</h2>
          {[
            "Agency owners, CEOs, managing partners, and COOs",
            "Heads of operations, strategy, or AI transformation",
            "Senior marketing leaders with repeatable workflows",
            "Teams that have experimented but need a defensible roadmap",
          ].map((item) => (
            <p className="fit-line" key={item}>
              <CheckIcon /> {item}
            </p>
          ))}
        </div>
        <div className="fit-card">
          <p className="eyebrow">Not designed for</p>
          <h2>A generic list of tools, prompts, or quick labor replacements.</h2>
          <ul>
            <li>General curiosity about AI tools</li>
            <li>Prompt-pack recommendations without operating change</li>
            <li>A small-business marketing or lead-generation plan</li>
            <li>Cheap replacement of human work without quality or governance</li>
          </ul>
          <p className="small-copy">
            If the consult is not the right fit, the agent will tell you
            directly.
          </p>
        </div>
      </section>

      <section className="content-section standalone-section">
        <div>
          <p className="eyebrow">No forced sales call</p>
          <h2>Useful even if we never work together.</h2>
        </div>
        <div>
          <p>
            Use the roadmap with your internal team, your existing partners, or
            on your own. Completing the consult does not put you into a
            mandatory sales call.
          </p>
          <p>
            If the evidence suggests a strong fit and you want help, the report
            may invite you to request a separate implementation conversation.
            That step is optional, and MultiplAI&apos;s capacity is limited.
          </p>
        </div>
      </section>

      <section className="content-section faq-section">
        <div className="section-heading">
          <p className="eyebrow">Before you begin</p>
          <h2>Know exactly what you are opting into.</h2>
        </div>
        <div className="faq-list">
          <details>
            <summary>Is the consult really free?</summary>
            <p>
              Yes. There is no charge for the AI consultation or the
              human-reviewed roadmap.
            </p>
          </details>
          <details>
            <summary>Am I talking to a person?</summary>
            <p>
              No. The consultation is conducted by a MultiplAI AI voice agent.
              It identifies itself and asks permission before recording and
              transcribing. A person reviews the written plan before delivery.
            </p>
          </details>
          <details>
            <summary>What should I have ready?</summary>
            <p>
              Bring one business or team result that needs to change. Be ready
              to describe what you have tried with AI, what worked, what did
              not, how you measure progress, and what you believe is in the
              way. No deck or file upload is required.
            </p>
          </details>
          <details>
            <summary>Is this a technical build specification?</summary>
            <p>
              No. It is a management-consulting and marketing-operations plan.
              Technical discovery, security review, financial modeling, and
              final implementation scoping are separate.
            </p>
          </details>
        </div>
      </section>

      <section className="closing-cta closing-cta-roadmap" id="start-consult">
        <div>
          <p className="eyebrow eyebrow-rose">Free AI Implementation Consult</p>
          <h2>Stop guessing what to build next.</h2>
          <p>
            Get a clear diagnosis, three prioritized systems, an implementation
            sequence, and a measurement plan built around your actual business.
          </p>
        </div>
        <ConsultLauncher />
      </section>

      <footer className="site-footer site-footer-dark">
        <BrandMark brand="multiplai" />
        <span>AI-native operating systems for agencies and marketing teams.</span>
      </footer>
    </main>
  );
}
