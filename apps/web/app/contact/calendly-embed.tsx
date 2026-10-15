"use client";

import { useEffect, useState } from "react";
import { site } from "../../lib/site";

const MIN_HEIGHT = 700;

// Calendly's booking calendar, embedded inline. It's a plain iframe rather than
// Calendly's widget script: the page grows the iframe to the height Calendly
// reports, so the calendar never scrolls inside its own box. The iframe URL
// follows the site theme so the calendar matches light or dark.
export function CalendlyEmbed() {
  const [dark, setDark] = useState<boolean | null>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.classList.contains("dark"));
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      if (e.data?.event !== "calendly.page_height") return;
      const reported = parseInt(String(e.data.payload?.height), 10);
      if (reported > 0) setHeight(Math.max(MIN_HEIGHT, reported));
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  if (dark === null) {
    return <div className="w-full rounded-lg border border-border" style={{ height }} />;
  }

  const params = new URLSearchParams({
    embed_domain: window.location.host,
    embed_type: "Inline",
    hide_gdpr_banner: "1",
    hide_event_type_details: "1",
    ...(dark
      ? { background_color: "141820", text_color: "e8eaef", primary_color: "3fb3a6" }
      : { primary_color: "0f6e66" }),
  });

  return (
    <iframe
      title="Book a 30-minute call with James Sheldon"
      src={`${site.calendly}?${params}`}
      style={{ height }}
      className="w-full rounded-lg border border-border bg-card"
    />
  );
}
