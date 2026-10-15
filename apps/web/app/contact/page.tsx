import type { Metadata } from "next";
import { openGraph, twitter } from "../../lib/metadata";
import { site } from "../../lib/site";
import { CalendlyEmbed } from "./calendly-embed";

const title = `Contact · ${site.name}`;
const description = `Book a 30-minute call with ${site.name}, or reach him by email, LinkedIn or GitHub.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { ...openGraph, url: "/contact", title, description },
  twitter: { ...twitter, title, description },
};

const outlineButton =
  "inline-flex h-9 items-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

// Log rail markers: empty elements positioned on the rail line (design system LogRail).
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative font-mono text-xs font-semibold uppercase tracking-[.05em] text-primary">
      <i aria-hidden className="absolute top-1 -left-[38px] size-2 rotate-45 bg-primary" />
      {children}
    </h2>
  );
}

export default function ContactPage() {
  return (
    <main className="relative mt-12 grid gap-14 pl-10 before:absolute before:inset-y-0 before:left-[5px] before:w-[1.5px] before:bg-rail sm:mt-16">
      <h1 className="text-[28px] leading-[1.15] font-semibold tracking-[-.025em] sm:text-[40px] sm:leading-[1.1]">
        Contact
      </h1>

      <section id="book" className="grid scroll-mt-24 gap-4">
        <SectionLabel>Book a call</SectionLabel>
        <p className="max-w-[64ch] text-lg leading-7 text-muted-foreground">
          A 30-minute call to get to know each other. Good for recruiters,
          hiring managers, or anyone who wants to talk about a role or a
          project. If you can, add a line about the role when you book.
        </p>
        <CalendlyEmbed />
        <p className="text-sm text-muted-foreground">
          Calendar not loading?{" "}
          <a href={site.calendly} className="text-primary underline underline-offset-4">
            Book on Calendly
          </a>
          .
        </p>
      </section>

      <section className="grid gap-4">
        <SectionLabel>Email and elsewhere</SectionLabel>
        <p className="max-w-[64ch] leading-6 text-muted-foreground">
          Email is the quickest way to reach me. I&rsquo;m based in Calgary and
          work remotely.
        </p>
        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className={outlineButton}>
            {site.email}
          </a>
          <a href={`https://${site.linkedin}`} className={outlineButton}>
            LinkedIn
          </a>
          <a href={`https://${site.github}`} className={outlineButton}>
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
