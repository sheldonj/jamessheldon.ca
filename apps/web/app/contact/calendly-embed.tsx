"use client";

import { useEffect, useState } from "react";
import { site } from "../../lib/site";

const MIN_HEIGHT = 700;
// If Calendly never reports its height, stop showing the loading state this
// long after the iframe loads.
const LOAD_FALLBACK_MS = 4000;

// Calendly's booking calendar, embedded inline. It's a plain iframe rather than
// Calendly's widget script: the page grows the iframe to the height Calendly
// reports, so the calendar never scrolls inside its own box. The iframe URL
// follows the site theme so the calendar matches light or dark (Calendly only
// applies these colours on paid plans).
//
// Calendly switches from its stacked phone layout to the side-by-side
// calendar-and-times layout at roughly 950px wide, which is wider than the text
// column. On wide screens the calendar runs past the column on the right so it
// gets the side-by-side layout.
export function CalendlyEmbed() {
  const [dark, setDark] = useState<boolean | null>(null);
  const [height, setHeight] = useState(MIN_HEIGHT);
  const [ready, setReady] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const read = () => setDark(root.classList.contains("dark"));
    read();
    const observer = new MutationObserver(read);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // A theme change loads a new calendar, so show the loading state again.
  useEffect(() => setReady(false), [dark]);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (e.origin !== "https://calendly.com") return;
      const event = e.data?.event;
      if (event === "calendly.page_height") {
        const reported = parseInt(String(e.data.payload?.height), 10);
        if (reported > 0) setHeight(Math.max(MIN_HEIGHT, reported));
        setReady(true);
      } else if (event === "calendly.event_type_viewed") {
        setReady(true);
      } else if (event === "calendly.event_scheduled") {
        setBooked(true);
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  const params =
    dark === null
      ? null
      : new URLSearchParams({
          embed_domain: window.location.host,
          embed_type: "Inline",
          hide_gdpr_banner: "1",
          hide_event_type_details: "1",
          ...(dark
            ? { background_color: "141820", text_color: "e8eaef", primary_color: "3fb3a6" }
            : { background_color: "ffffff", text_color: "141722", primary_color: "0f6e66" }),
        });

  return (
    <div className="grid gap-3 min-[1320px]:w-[1000px]">
      <div
        className="relative overflow-hidden rounded-lg border border-border bg-card"
        style={{ height }}
      >
        {params && (
          <iframe
            key={String(dark)}
            title="Book a 30-minute call with James Sheldon"
            src={`${site.calendly}?${params}`}
            onLoad={() => setTimeout(() => setReady(true), LOAD_FALLBACK_MS)}
            className={`size-full transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
          />
        )}
        {!ready && (
          <div
            role="status"
            className="absolute inset-0 grid place-items-center font-mono text-xs uppercase tracking-[.05em] text-muted-foreground"
          >
            <span className="flex items-center gap-3">
              <i aria-hidden className="size-2 rotate-45 bg-primary motion-safe:animate-pulse" />
              Loading calendar…
            </span>
          </div>
        )}
      </div>
      {booked && (
        <p role="status" className="leading-6">
          Thanks, you&rsquo;re booked. The invite is on its way to your email.
          Talk soon.
        </p>
      )}
    </div>
  );
}
