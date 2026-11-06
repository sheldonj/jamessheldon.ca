"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site";

// "Open to new roles" status, linking to the homepage "Looking for" section. From xl up it sits fixed in
// the bottom-right corner, where the page margin is wide enough that it never
// covers text. Below xl it shows inline in the location line instead. Hidden
// on /contact itself, and when printing. Turn it off with `openToWork` in
// lib/site.ts.
export function OpenToWork({ placement }: { placement: "corner" | "inline" }) {
  const pathname = usePathname();
  if (!site.openToWork || pathname === "/contact") return null;

  const dot = (
    <span aria-hidden className="relative inline-flex size-2 shrink-0">
      <span className="status-ping absolute inset-0 rounded-full bg-primary" />
      <span className="relative size-2 rounded-full bg-primary" />
    </span>
  );

  if (placement === "inline") {
    return (
      <span className="xl:hidden print:hidden">
        {" "}·{" "}
        <Link href="/#looking-for" className="inline-flex items-center gap-1.5 text-primary hover:underline">
          {dot}
          {site.openToWork}
        </Link>
      </span>
    );
  }

  return (
    <Link
      href="/#looking-for"
      className="fixed right-6 bottom-6 z-30 hidden items-center gap-2 rounded-lg border border-border bg-background/90 px-3 py-2 font-mono text-[12px] leading-none text-muted-foreground backdrop-blur-sm hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring xl:inline-flex print:hidden"
    >
      {dot}
      {site.openToWork}
    </Link>
  );
}
