"use client";

import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react";
import {
  type FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

const sessionEndpoint =
  "https://agency-ai-impact-consult.vercel.app/api/consult/session";
const startConsultEvent = "multiplai:start-consult";
const visitorStorageKey = "multiplai_consult_visitor_id";

type ConsultMode = "voice" | "chat";
type ChatMessage = {
  role: "user" | "agent";
  text: string;
};

function appendUniqueMessage(
  messages: ChatMessage[],
  next: ChatMessage,
) {
  const previous = messages.at(-1);
  if (previous?.role === next.role && previous.text === next.text) {
    return messages;
  }
  return [...messages, next];
}

function consultVisitorId() {
  const createId = () =>
    globalThis.crypto?.randomUUID?.().replaceAll("-", "") ||
    `visitor_${Date.now()}_${Math.random().toString(36).slice(2)}`;
  try {
    const existing = window.localStorage.getItem(visitorStorageKey);
    if (existing) return existing;
    const created = createId();
    window.localStorage.setItem(visitorStorageKey, created);
    return created;
  } catch {
    return createId();
  }
}

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function ConsultStartButton({
  label,
}: {
  label: string;
}) {
  function requestConsult() {
    document
      .getElementById("start-consult")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new Event(startConsultEvent));
  }

  return (
    <button
      className="button button-rose"
      type="button"
      onClick={requestConsult}
    >
      {label} <Arrow />
    </button>
  );
}

export function ConsultInlineCta({
  eyebrow,
  headline,
  body,
  label,
  dark = false,
}: {
  eyebrow: string;
  headline: string;
  body: string;
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
      <ConsultStartButton label={label} />
    </section>
  );
}

function ConsultControls() {
  const [error, setError] = useState("");
  const [intakeOpen, setIntakeOpen] = useState(false);
  const [modeChoiceOpen, setModeChoiceOpen] = useState(false);
  const [consultMode, setConsultMode] = useState<ConsultMode | null>(null);
  const [launchingMode, setLaunchingMode] = useState<ConsultMode | null>(null);
  const [respondentName, setRespondentName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [chatDraft, setChatDraft] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const chatLogRef = useRef<HTMLDivElement>(null);
  const {
    endSession,
    isListening,
    isMuted,
    isSpeaking,
    sendUserActivity,
    sendUserMessage,
    setMuted,
    startSession,
    status,
  } = useConversation({
    onConnect: () => {
      setError("");
      setIntakeOpen(false);
      setModeChoiceOpen(false);
      setLaunchingMode(null);
    },
    onMessage: ({ message, role }) => {
      const text = message.trim();
      if (!text || (role !== "user" && role !== "agent")) return;
      setChatMessages((messages) =>
        appendUniqueMessage(messages, { role, text }),
      );
    },
    onError: (message) =>
      setError(message || "The consultation could not start."),
  });

  const openIntake = useCallback(() => {
    if (status !== "disconnected") return;
    setError("");
    setIntakeOpen(true);
    setModeChoiceOpen(false);
  }, [status]);

  const prepareModeChoice = useCallback((event: FormEvent) => {
    event?.preventDefault();
    const name = respondentName.trim().replace(/\s+/g, " ");
    const email = workEmail.trim().toLowerCase();
    if (
      name.length < 2 ||
      name.length > 120 ||
      email.length > 254 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      setError("Enter your name and a valid email address for the report.");
      return;
    }
    setRespondentName(name);
    setWorkEmail(email);
    setError("");
    setIntakeOpen(false);
    setModeChoiceOpen(true);
  }, [respondentName, workEmail]);

  const startConsult = useCallback(async (mode: ConsultMode) => {
    if (status !== "disconnected") return;
    setError("");
    setLaunchingMode(mode);
    try {
      const name = respondentName.trim().replace(/\s+/g, " ");
      const email = workEmail.trim().toLowerCase();
      if (
        name.length < 2 ||
        name.length > 120 ||
        email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ) {
        throw new Error(
          "Enter your name and a valid email address for the report.",
        );
      }
      if (mode === "voice") {
        if (!navigator.mediaDevices?.getUserMedia) {
          throw new Error("This browser does not support microphone access.");
        }
        const permissionStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        permissionStream.getTracks().forEach((track) => track.stop());
      }

      const visitorId = consultVisitorId();
      const response = await fetch(sessionEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          visitor_id: visitorId,
          respondent_name: name,
          work_email: email,
          consult_mode: mode,
        }),
      });
      const payload = (await response.json()) as {
        signed_url?: string;
        admission_id?: string;
        consult_mode?: ConsultMode;
        error?: string;
        reason?: string;
      };
      if (!response.ok || !payload.signed_url) {
        throw new Error(
          response.status === 429 &&
            payload.reason === "per_contact_daily_limit"
            ? "You have already started two consultations today. Please try again tomorrow."
            : response.status === 429
            ? "We have reached today's consultation capacity. Please try again tomorrow."
            : response.status === 400
              ? "Enter your name and a valid email address for the report."
            : "The consultation is temporarily unavailable.",
        );
      }
      setConsultMode(mode);
      setChatMessages([]);
      await startSession({
        signedUrl: payload.signed_url,
        connectionType: "websocket",
        textOnly: mode === "chat",
        overrides:
          mode === "chat"
            ? { conversation: { textOnly: true } }
            : undefined,
        userId: visitorId,
        dynamicVariables: {
          intake_mode: "prospect",
          caller_phone: "unavailable",
          caller_fingerprint: visitorId,
          resume_context: "none",
          resume_conversation_id: "",
          sms_delivery_enabled: "false",
          online_intake_captured: "true",
          respondent_name: name,
          work_email: email,
          delivery_preference: "email_confirmed",
          consult_admission_id: payload.admission_id || "",
          consult_mode: mode,
        },
      });
    } catch (caught) {
      const message =
        caught instanceof DOMException && caught.name === "NotAllowedError"
          ? "Microphone permission is required to start the voice consultation."
          : caught instanceof Error &&
              (caught.message.startsWith("This browser") ||
                caught.message.startsWith("Enter your name") ||
                caught.message.startsWith("You have already") ||
                caught.message.startsWith("We have reached") ||
                caught.message.startsWith("The consultation"))
            ? caught.message
            : "The consultation is temporarily unavailable.";
      setConsultMode(null);
      setLaunchingMode(null);
      setError(message);
    }
  }, [respondentName, startSession, status, workEmail]);

  useEffect(() => {
    const log = chatLogRef.current;
    if (log) log.scrollTop = log.scrollHeight;
  }, [chatMessages]);

  function sendChatMessage(event: FormEvent) {
    event.preventDefault();
    const text = chatDraft.trim();
    if (!text || status !== "connected") return;
    setChatMessages((messages) =>
      appendUniqueMessage(messages, { role: "user", text }),
    );
    sendUserMessage(text);
    setChatDraft("");
  }

  useEffect(() => {
    const handleStart = () => openIntake();
    window.addEventListener(startConsultEvent, handleStart);
    return () => window.removeEventListener(startConsultEvent, handleStart);
  }, [openIntake]);

  if (status === "connected" && consultMode === "chat") {
    return (
      <section className="consult-chat" aria-label="AI consultation chat">
        <div className="consult-chat-header">
          <div>
            <p className="eyebrow eyebrow-light">Text consultation</p>
            <h3>Chat with your AI adviser</h3>
            <p>Same assessment. Same human-reviewed plan.</p>
          </div>
          <button
            className="button button-secondary-dark"
            type="button"
            onClick={() => endSession()}
          >
            End chat
          </button>
        </div>
        <div
          className="consult-chat-log"
          ref={chatLogRef}
          aria-live="polite"
        >
          {chatMessages.length ? (
            chatMessages.map((message, index) => (
              <div
                className={`consult-message consult-message-${message.role}`}
                key={`${message.role}-${index}-${message.text.slice(0, 20)}`}
              >
                <span>{message.role === "agent" ? "AI adviser" : "You"}</span>
                <p>{message.text}</p>
              </div>
            ))
          ) : (
            <p className="consult-chat-waiting">
              Your adviser is joining the chat…
            </p>
          )}
        </div>
        <form className="consult-chat-compose" onSubmit={sendChatMessage}>
          <label className="sr-only" htmlFor="consult-chat-message">
            Your message
          </label>
          <textarea
            id="consult-chat-message"
            value={chatDraft}
            onChange={(event) => {
              setChatDraft(event.target.value);
              sendUserActivity();
            }}
            placeholder="Type your response…"
            rows={2}
          />
          <button
            className="button button-rose"
            type="submit"
            disabled={!chatDraft.trim()}
          >
            Send <Arrow />
          </button>
        </form>
      </section>
    );
  }

  if (status === "connected") {
    return (
      <div className="consult-session" aria-live="polite">
        <p className="consult-status">
          <span className="status-dot" />
          {isSpeaking
            ? "Your adviser is speaking"
            : isListening
              ? "Listening"
              : "Consultation connected"}
        </p>
        <div className="consult-controls">
          <button
            className="button button-rose"
            type="button"
            onClick={() => setMuted(!isMuted)}
          >
            {isMuted ? "Unmute microphone" : "Mute microphone"}
          </button>
          <button
            className="button button-secondary-dark"
            type="button"
            onClick={() => endSession()}
          >
            End consultation
          </button>
        </div>
      </div>
    );
  }

  if (modeChoiceOpen) {
    return (
      <section className="consult-mode-choice">
        <div>
          <p className="eyebrow eyebrow-light">Choose how to continue</p>
          <h3>Talk now or use silent chat.</h3>
          <p>
            Both options use the same AI adviser and produce the same
            human-reviewed plan.
          </p>
        </div>
        <div className="consult-mode-actions">
          <button
            className="button button-rose"
            type="button"
            onClick={() => void startConsult("voice")}
            disabled={Boolean(launchingMode) || status === "connecting"}
          >
            {launchingMode === "voice"
              ? "Connecting voice…"
              : "Talk with the adviser"}{" "}
            <Arrow />
          </button>
          <button
            className="button button-secondary-dark"
            type="button"
            onClick={() => void startConsult("chat")}
            disabled={Boolean(launchingMode) || status === "connecting"}
          >
            {launchingMode === "chat"
              ? "Opening chat…"
              : "Chat instead"}{" "}
            <Arrow />
          </button>
        </div>
        <button
          className="consult-edit-details"
          type="button"
          onClick={() => {
            setModeChoiceOpen(false);
            setIntakeOpen(true);
          }}
        >
          Edit name or report email
        </button>
        {error ? (
          <p className="consult-error" role="alert">
            {error}
          </p>
        ) : null}
      </section>
    );
  }

  if (intakeOpen) {
    return (
      <form className="consult-intake" onSubmit={prepareModeChoice}>
        <div>
          <p className="eyebrow eyebrow-light">Your report details</p>
          <h3>Where should we send your plan?</h3>
          <p>
            Enter the address once here. Your AI adviser will confirm it, not
            ask you to spell it during the consultation.
          </p>
        </div>
        <label htmlFor="consult-name">
          Name
          <input
            id="consult-name"
            name="name"
            type="text"
            autoComplete="name"
            value={respondentName}
            onChange={(event) => setRespondentName(event.target.value)}
            required
            minLength={2}
            maxLength={120}
            disabled={status === "connecting"}
          />
        </label>
        <label htmlFor="consult-email">
          Email for your report
          <input
            id="consult-email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={workEmail}
            onChange={(event) => setWorkEmail(event.target.value)}
            required
            maxLength={254}
            disabled={status === "connecting"}
          />
        </label>
        <button
          className="button button-rose"
          type="submit"
          disabled={status === "connecting"}
        >
          Choose talk or chat <Arrow />
        </button>
        <p className="consult-privacy">
          We use these details to personalize the consultation and deliver the
          human-reviewed report you request.
        </p>
        {error ? (
          <p className="consult-error" role="alert">
            {error}
          </p>
        ) : null}
      </form>
    );
  }

  return (
    <div className="consult-launcher">
      <button
        className="button button-rose"
        type="button"
        onClick={openIntake}
      >
        Start the free consult <Arrow />
      </button>
      {error ? (
        <p className="consult-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function ConsultLauncher() {
  return (
    <ConversationProvider>
      <ConsultControls />
    </ConversationProvider>
  );
}
