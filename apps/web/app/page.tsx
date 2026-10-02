import { site } from "../lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: `mailto:${site.email}`,
  jobTitle: "Full-stack engineer",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  sameAs: [`https://${site.linkedin}`, `https://${site.github}`],
  knowsAbout: ["TypeScript", "React", "Next.js", "Node.js", "AI agents"],
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
    <div className="mx-auto flex min-h-svh max-w-4xl flex-col px-6 py-12 sm:px-10 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div>
          <p className="text-[44px] leading-none font-light tracking-[-.025em] sm:text-[56px]">
            James <b className="font-semibold">Sheldon</b>
          </p>
          <p className="mt-3 max-w-[46ch] text-muted-foreground">{site.role}</p>
        </div>
        <address className="font-mono text-[13px] leading-6 text-muted-foreground not-italic sm:text-right">
          {site.location}
          <br />
          <a href={`mailto:${site.email}`} className="inline-block hover:text-primary">
            {site.email}
          </a>
          <br />
          <a href={`https://${site.linkedin}`} className="inline-block hover:text-primary">
            {site.linkedin}
          </a>
          <br />
          <a href={`https://${site.github}`} className="inline-block hover:text-primary">
            {site.github}
          </a>
        </address>
      </header>

      <main className="relative mt-16 grid gap-14 pl-10 before:absolute before:inset-y-0 before:left-[5px] before:w-[1.5px] before:bg-rail sm:mt-24">
        <section className="grid gap-5">
          <SectionLabel>Now</SectionLabel>
          <h1 className="text-[28px] leading-[1.15] font-semibold tracking-[-.025em] text-balance sm:max-w-[22ch] sm:text-[40px] sm:leading-[1.1]">
            I&rsquo;m a full-stack engineer with 20+ years of building web
            products.
          </h1>
          <div className="grid max-w-[64ch] gap-4 text-lg leading-7 text-muted-foreground">
            <p>
              Most recently I was founding engineer and CTO at Cashew Research,
              where I built a generative AI platform for market research. Before
              that I built search and discovery at Contra and led technical work
              for clients like Nissan at Critical Mass.
            </p>
            <p>
              I work across TypeScript, React, Next.js and Node.js, and I&rsquo;m
              as comfortable leading a team as I am shipping features myself.
              These days I build with AI agents, and tests decide what ships.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={site.resume} download className={primaryButton}>
              Download resume
            </a>
          </div>
        </section>

        <section className="grid gap-4">
          <SectionLabel>Contact</SectionLabel>
          <p className="max-w-[64ch] leading-6 text-muted-foreground">
            The quickest way to reach me is email.
          </p>
          <div className="flex flex-wrap gap-3">
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

      <footer className="mt-20 flex flex-wrap justify-between gap-2 border-t border-border pt-6 font-mono text-[13px] text-muted-foreground">
        <span>jamessheldon.ca</span>
        <span>© 2026 James Sheldon</span>
      </footer>
    </div>
  );
}
