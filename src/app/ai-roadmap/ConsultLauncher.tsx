"use client";

import {
  ConversationProvider,
  useConversation,
} from "@elevenlabs/react";
import { useCallback, useEffect, useState } from "react";

const sessionEndpoint =
  "https://agency-ai-impact-consult.vercel.app/api/consult/session";
const startConsultEvent = "multiplai:start-consult";
const visitorStorageKey = "multiplai_consult_visitor_id";

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
  const {
    endSession,
    isListening,
    isMuted,
    isSpeaking,
    setMuted,
    startSession,
    status,
  } = useConversation({
    onConnect: () => setError(""),
    onError: (message) =>
      setError(message || "The voice consultation could not start."),
  });

  const startConsult = useCallback(async () => {
    if (status !== "disconnected") return;
    setError("");
    try {
      if (!navigator.mediaDevices?.getUserMedia) {
        throw new Error("This browser does not support microphone access.");
      }
      const permissionStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      permissionStream.getTracks().forEach((track) => track.stop());

      const response = await fetch(sessionEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ visitor_id: consultVisitorId() }),
      });
      const payload = (await response.json()) as {
        signed_url?: string;
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
            : "The voice consultation is temporarily unavailable.",
        );
      }
      startSession({
        signedUrl: payload.signed_url,
        connectionType: "websocket",
      });
    } catch (caught) {
      const message =
        caught instanceof DOMException && caught.name === "NotAllowedError"
          ? "Microphone permission is required to start the voice consultation."
          : caught instanceof Error &&
              (caught.message.startsWith("This browser") ||
                caught.message.startsWith("We have reached") ||
                caught.message.startsWith("The voice consultation"))
            ? caught.message
            : "The voice consultation is temporarily unavailable.";
      setError(message);
    }
  }, [startSession, status]);

  useEffect(() => {
    const handleStart = () => void startConsult();
    window.addEventListener(startConsultEvent, handleStart);
    return () => window.removeEventListener(startConsultEvent, handleStart);
  }, [startConsult]);

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

  return (
    <div className="consult-launcher">
      <button
        className="button button-rose"
        type="button"
        onClick={() => void startConsult()}
        disabled={status === "connecting"}
      >
        {status === "connecting"
          ? "Connecting your consult…"
          : "Start the free consult"}{" "}
        {status !== "connecting" ? <Arrow /> : null}
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
