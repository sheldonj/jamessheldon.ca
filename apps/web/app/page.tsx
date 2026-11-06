import type { Metadata } from "next";
import Image from "next/image";
import { lookingFor, site } from "../lib/site";
import Link from "next/link";
import { person, website } from "../lib/structured-data";
import headshot from "../public/james-sheldon.jpg";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [website, person],
};

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const button =
  "inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const primaryButton = `${button} bg-primary text-primary-foreground hover:bg-primary/90`;
const outlineButton = `${button} border border-border bg-background hover:bg-accent hover:text-accent-foreground`;

// Log rail markers: empty elements positioned on the rail line (design system LogRail).
function SectionMark() {
  return (
    <i
      aria-hidden
      className="absolute top-1 -left-[38px] size-2 rotate-45 bg-primary"
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative font-mono text-xs font-semibold uppercase tracking-[.05em] text-primary">
      <SectionMark />
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="relative mt-12 grid gap-14 pl-10 before:absolute before:inset-y-0 before:left-[5px] before:w-[1.5px] before:bg-rail sm:mt-16">
        <section id="now" className="grid scroll-mt-24 gap-5">
          <SectionLabel>Now</SectionLabel>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
            <Image
              src={headshot}
              alt="James Sheldon"
              priority
              sizes="(min-width: 640px) 128px, 96px"
              className="size-24 shrink-0 rounded-xl border border-border object-cover sm:size-32"
            />
            <h1 className="text-[28px] leading-[1.15] font-semibold tracking-[-.025em] text-balance sm:max-w-[22ch] sm:text-[40px] sm:leading-[1.1]">
              I&rsquo;m a full-stack engineer with 20+ years of building web
              products.
            </h1>
          </div>
          <div className="grid max-w-[64ch] gap-4 text-lg leading-7 text-muted-foreground">
            <p>
              Most recently I was founding engineer and CTO at Cashew Research,
              where I built a generative AI platform for market research. Before
              that I built search and discovery at Contra and led technical work
              for clients like Nissan at Critical Mass.
            </p>
            <p>
              I build in TypeScript across the stack, with React and Next.js on
              the front and Node.js behind it. I&rsquo;m as happy leading a team
              as I am heads-down shipping. These days I write most of my code
              with AI agents, on a system I designed where the tests, not the
              agent, decide what ships.
            </p>
          </div>
        </section>

        {lookingFor.intro && (
          <section id="next" className="grid scroll-mt-24 gap-4">
            <SectionLabel>{lookingFor.heading}</SectionLabel>
            <p className="max-w-[64ch] text-lg leading-7 text-muted-foreground">
              {lookingFor.intro}
            </p>
            <dl className="grid max-w-[64ch] gap-x-6 gap-y-2 sm:grid-cols-[auto_1fr]">
              {lookingFor.details.map(({ label, value }) => (
                <div key={label} className="contents">
                  <dt className="pt-0.5 font-mono text-xs font-semibold uppercase tracking-[.05em] text-foreground sm:pt-1">
                    {label}
                  </dt>
                  <dd className="mb-2 leading-6 text-muted-foreground sm:mb-0">{value}</dd>
                </div>
              ))}
            </dl>
            <p className="font-mono text-xs text-muted-foreground">
              Updated{" "}
              <time dateTime={lookingFor.updated.iso}>{lookingFor.updated.label}</time>
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={site.resume} className={primaryButton}>
                Resume
              </a>
            </div>
          </section>
        )}

        <section id="contact" className="grid scroll-mt-24 gap-4">
          <SectionLabel>
            <Link
              href="/contact"
              className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Contact
            </Link>
          </SectionLabel>
          <p className="max-w-[64ch] leading-6 text-muted-foreground">
            Book a 30-minute call, or email me. Email is the quickest way to
            reach me.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className={primaryButton}>
              Book a call
            </Link>
            <a href={`mailto:${site.email}`} className={outlineButton}>
              Email me
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
    </>
  );
}
