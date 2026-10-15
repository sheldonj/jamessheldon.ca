"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { dotField, navLinks, site } from "../lib/site";
import logo from "../public/icon-192.png";
import { DotField } from "./dot-field";
import { MobileMenu } from "./mobile-menu";

// Shared sticky header: logo, name lockup and role line. It starts large and
// condenses into a slim bar as the page scrolls (--p goes 0 → 1 over 140px;
// sizes are in globals.css). Below lg the links move into a menu sheet.
export function SiteHeader() {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let fullHeight = 0;
    // A bottom margin makes up whatever height the header has lost, so the
    // page below never moves. Without it a shorter header shortens the page,
    // which changes scrollY near the bottom and makes the header flicker.
    const update = () => {
      raf = 0;
      const p = Math.min(1, Math.max(0, window.scrollY / 140));
      el.style.setProperty("--p", p.toFixed(3));
      el.style.marginBottom = `${fullHeight - el.offsetHeight}px`;
    };
    const measure = () => {
      el.style.setProperty("--p", "0");
      fullHeight = el.offsetHeight;
      update();
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header
      ref={ref}
      data-field={dotField}
      className="site-header sticky top-0 z-40 print:static"
    >
      {dotField === "header" && <DotField mode="header" />}
      <div className="site-header-inner relative mx-auto flex max-w-4xl items-center justify-between gap-6 px-6 sm:px-10">
        <Link
          href="/"
          className="site-id flex min-w-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
        >
          <Image
            src={logo}
            alt=""
            priority
            sizes="84px"
            className="site-logo shrink-0 rounded-sm dark:outline dark:outline-border"
          />
          <span className="min-w-0">
            <span className="site-name block leading-none font-light tracking-[-.025em] whitespace-nowrap">
              James <b className="font-semibold">Sheldon</b>
            </span>
            <span className="site-role block text-muted-foreground">
              {site.role}
            </span>
          </span>
        </Link>
        <nav
          aria-label="Site"
          className="hidden shrink-0 items-center gap-5 rounded-lg bg-background ring-8 ring-background font-mono text-[13px] lg:flex print:hidden"
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="rounded-sm text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={site.resume}
            aria-current={pathname === site.resume ? "page" : undefined}
            className="inline-flex h-8 items-center rounded-lg bg-primary px-3 font-sans text-[13px] font-semibold text-primary-foreground hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Resume
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
