"use client";

import Script from "next/script";
import { createElement, useState } from "react";
import { ArrowIcon } from "@/components/landing/SiteComponents";

const sessionEndpoint =
  "https://agency-ai-impact-consult.vercel.app/api/consult/session";

export default function ConsultLauncher() {
  const [signedUrl, setSignedUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  async function startConsult() {
    setStatus("loading");
    try {
      const response = await fetch(sessionEndpoint, {
        method: "POST",
        headers: { "content-type": "application/json" },
      });
      if (!response.ok) throw new Error("Consultation capacity reached");
      const payload = (await response.json()) as { signed_url?: string };
      if (!payload.signed_url) throw new Error("Signed session unavailable");
      setSignedUrl(payload.signed_url);
      setStatus("idle");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="consult-launcher">
      <Script
        src="https://unpkg.com/@elevenlabs/convai-widget-embed"
        strategy="afterInteractive"
      />
      {!signedUrl ? (
        <button
          className="button button-rose"
          type="button"
          onClick={startConsult}
          disabled={status === "loading"}
        >
          {status === "loading" ? "Opening consult…" : "Start the free consult"}
          {status !== "loading" ? <ArrowIcon /> : null}
        </button>
      ) : (
        createElement("elevenlabs-convai", {
          "signed-url": signedUrl,
          variant: "expanded",
          dismissible: "false",
        })
      )}
      {status === "error" ? (
        <p className="consult-error" role="alert">
          We have reached the current consultation capacity. Please try again
          tomorrow.
        </p>
      ) : null}
    </div>
  );
}
