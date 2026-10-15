"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { navLinks, site } from "../lib/site";
import logo from "../public/icon-192.png";
import { CloseIcon, MenuIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const button =
  "inline-flex h-11 items-center justify-center rounded-lg px-4 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const iconButton =
  "inline-grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-background hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

// Below lg the header's links open in a full-height sheet. A modal <dialog>
// gives focus trapping, Escape to close and returning focus for free.
export function MobileMenu() {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname();
  const close = () => ref.current?.close();

  // The trigger is hidden from lg up, so close an open sheet if the window widens.
  useEffect(() => {
    const wide = window.matchMedia("(min-width: 64rem)");
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) ref.current?.close();
    };
    wide.addEventListener("change", onChange);
    return () => wide.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-haspopup="dialog"
        onClick={() => ref.current?.showModal()}
        className={`${iconButton} lg:hidden print:hidden`}
      >
        <MenuIcon />
      </button>
      <dialog
        ref={ref}
        aria-label="Menu"
        className="sheet fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none overflow-y-auto bg-background p-0 text-foreground backdrop:bg-transparent"
      >
        <div className="mx-auto flex min-h-full max-w-4xl flex-col gap-8 px-6 pt-[max(1rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-10">
          <div className="flex items-center justify-between gap-3 pt-2">
            <Link href="/" onClick={close} className="flex items-center gap-2.5 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
              <Image src={logo} alt="" sizes="32px" className="size-8 rounded-sm dark:outline dark:outline-border" />
              <span className="text-lg leading-none font-light tracking-[-.025em]">
                James <b className="font-semibold">Sheldon</b>
              </span>
            </Link>
            <button type="button" aria-label="Close menu" onClick={close} className={iconButton}>
              <CloseIcon />
            </button>
          </div>

          <nav aria-label="Menu" className="grid">
            {[...navLinks, { href: site.resume, label: "Resume" }].map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                aria-current={pathname === l.href ? "page" : undefined}
                className="flex items-baseline justify-between border-b border-border py-4 text-3xl font-light tracking-[-.02em] hover:text-primary focus-visible:outline-2 focus-visible:outline-ring aria-[current=page]:font-semibold"
              >
                {l.label}
                <span className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto grid gap-6">
            <div className="grid grid-cols-2 gap-3">
              <Link href="/contact" onClick={close} className={`${button} bg-primary text-primary-foreground hover:bg-primary/90`}>
                Book a call
              </Link>
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
        </div>
      </dialog>
    </>
  );
}
