"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { navLinks, site } from "../lib/site";
import logo from "../public/icon-192.png";
import { CalendlyButton } from "./calendly-button";
import { ThemeToggle } from "./theme-toggle";

const button =
  "inline-flex h-10 items-center justify-center rounded-lg px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

// Below lg the header's links open in a bottom sheet. A modal <dialog> gives
// focus trapping, Escape to close and the backdrop for free.
export function MobileMenu() {
  const ref = useRef<HTMLDialogElement>(null);
  const close = () => ref.current?.close();

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
        className="inline-grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-background hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring lg:hidden print:hidden"
      >
        <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M2 4.5h12M2 8h12M2 11.5h8" />
        </svg>
      </button>
      <dialog
        ref={ref}
        aria-label="Menu"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        className="sheet fixed inset-x-0 top-auto bottom-0 m-0 max-h-[85svh] w-full max-w-none overflow-y-auto rounded-t-[14px] border-t border-border bg-background p-0 text-foreground backdrop:bg-black/40"
      >
        <div className="mx-auto grid max-w-xl gap-5 px-6 pt-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
          <div aria-hidden className="mx-auto h-1 w-9 rounded-full bg-border" />
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2.5">
              <Image src={logo} alt="" sizes="30px" className="size-[30px] rounded-sm dark:outline dark:outline-border" />
              <span className="text-lg leading-none font-light tracking-[-.025em]">
                James <b className="font-semibold">Sheldon</b>
              </span>
            </span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-grid size-9 place-items-center rounded-lg border border-border hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
              </svg>
            </button>
          </div>
          <nav aria-label="Menu" className="grid">
            {[...navLinks, { href: site.resume, label: "Resume" }].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                className="border-b border-border py-3 text-xl hover:text-primary focus-visible:outline-2 focus-visible:outline-ring"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="grid grid-cols-2 gap-3">
            <CalendlyButton onOpen={close} className={`${button} bg-primary text-primary-foreground hover:bg-primary/90`}>
              Book a call
            </CalendlyButton>
            <a href={`mailto:${site.email}`} className={`${button} border border-border hover:bg-accent`}>
              Email me
            </a>
          </div>
          <address className="font-mono text-[13px] leading-7 text-muted-foreground not-italic">
            {site.location}
            <br />
            <a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a>
            <br />
            <a href={`https://${site.linkedin}`} className="hover:text-primary">{site.linkedin}</a>
            <br />
            <a href={`https://${site.github}`} className="hover:text-primary">{site.github}</a>
          </address>
          <div className="font-mono text-[13px] text-muted-foreground">
            <ThemeToggle />
          </div>
        </div>
      </dialog>
    </>
  );
}
