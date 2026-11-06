"use client";

import { useEffect, useState } from "react";
import { site } from "../../lib/site";

// Copies the email address, for visitors whose browser has no mail app set up
// (a mailto link does nothing for them).
export function CopyEmail({ className }: { className: string }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  return (
    <button
      type="button"
      className={className}
      onClick={() => navigator.clipboard.writeText(site.email).then(() => setCopied(true), () => {})}
    >
      <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
    </button>
  );
}
