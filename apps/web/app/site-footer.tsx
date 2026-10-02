"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "../lib/site";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: site.resume, label: "Resume" },
];

// Shared footer: page links, theme toggle and copyright. Hidden when printing.
export function SiteFooter() {
  const pathname = usePathname();
  return (
    <footer className="mt-auto pt-20 print:hidden">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 font-mono text-[13px] text-muted-foreground">
        <nav aria-label="Site" className="flex gap-5">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="inline-flex min-h-6 items-center hover:text-primary aria-[current=page]:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <ThemeToggle />
        <span>© 2026 James Sheldon</span>
      </div>
    </footer>
  );
}
