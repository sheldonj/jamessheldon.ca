"use client";

import { site } from "../lib/site";

const WIDGET = "https://assets.calendly.com/assets/external/widget";

declare global {
  interface Window {
    Calendly?: { initPopupWidget(options: { url: string }): void };
  }
}

let loading: Promise<void> | null = null;

// Calendly's popup script and stylesheet load on first hover, focus or click,
// so pages that never use it don't pay for it.
function loadCalendly(): Promise<void> {
  if (window.Calendly) return Promise.resolve();
  loading ??= new Promise<void>((resolve, reject) => {
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = `${WIDGET}.css`;
    document.head.append(css);
    const js = document.createElement("script");
    js.src = `${WIDGET}.js`;
    js.async = true;
    const fail = () => {
      loading = null;
      js.remove();
      css.remove();
      reject(new Error("Calendly failed to load"));
    };
    js.onload = () => (window.Calendly ? resolve() : fail());
    js.onerror = fail;
    document.head.append(js);
  });
  return loading;
}

// Match the booking popup to the site's current theme.
function popupUrl() {
  const dark = document.documentElement.classList.contains("dark");
  const colors = dark
    ? "background_color=0e1116&text_color=e8eaef&primary_color=3fb3a6"
    : "primary_color=0f6e66";
  return `${site.calendly}?hide_gdpr_banner=1&${colors}`;
}

// A plain link to the booking page that opens Calendly's popup instead when it can.
export function CalendlyButton({
  className,
  children,
  onOpen,
}: {
  className?: string;
  children: React.ReactNode;
  onOpen?: () => void;
}) {
  const preload = () => {
    loadCalendly().catch(() => {});
  };
  return (
    <a
      href={site.calendly}
      target="_blank"
      rel="noopener"
      className={className}
      onPointerEnter={preload}
      onFocus={preload}
      onClick={(e) => {
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
          return;
        e.preventDefault();
        onOpen?.();
        loadCalendly()
          .then(() => window.Calendly?.initPopupWidget({ url: popupUrl() }))
          .catch(() => window.location.assign(site.calendly));
      }}
    >
      {children}
    </a>
  );
}
