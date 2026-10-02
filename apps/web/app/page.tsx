const EMAIL = "sheldonj@gmail.com";
const GITHUB = "github.com/sheldonj";

// Log rail markers: empty elements positioned on the rail line (design system LogRail).
function SectionMark() {
  return (
    <i
      aria-hidden
      className="absolute top-1 -left-[38px] size-2 rotate-45 bg-primary"
    />
  );
}

function EntryMark({ filled = false }: { filled?: boolean }) {
  return (
    <i
      aria-hidden
      className={`absolute top-1 -left-10 size-3 rounded-full border-[1.5px] border-primary ${
        filled ? "bg-primary" : "bg-background"
      }`}
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
      <header className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
        <div>
          <p className="text-[44px] leading-none font-light tracking-[-.025em] sm:text-[56px]">
            James <b className="font-semibold">Sheldon</b>
          </p>
          <p className="mt-3 max-w-[46ch] text-muted-foreground">
            Founding engineer &amp; CTO · TypeScript · AI-augmented engineering
          </p>
        </div>
        <p className="font-mono text-[13px] leading-5 text-muted-foreground sm:text-right">
          Calgary, Alberta · Remote
          <br />
          {EMAIL}
          <br />
          {GITHUB}
        </p>
      </header>

      <main className="relative mt-16 grid gap-14 pl-10 before:absolute before:inset-y-0 before:left-[5px] before:w-[1.5px] before:bg-rail sm:mt-24">
        <section className="grid gap-5">
          <SectionLabel>Now</SectionLabel>
          <h1 className="text-[30px] sm:max-w-[20ch] leading-[1.1] font-semibold tracking-[-.025em] text-balance sm:text-5xl sm:leading-[1.05]">
            <span className="whitespace-nowrap">Verification-first</span>{" "}
            engineering with AI agents.
          </h1>
          <p className="max-w-[64ch] text-lg leading-7 text-muted-foreground">
            Agents write the first draft now. The work that matters is deciding
            what &ldquo;done&rdquo; means and proving it, every time. I build
            with Claude Code and hold agent-written code to a mutation-testing
            review bar before it ships.
          </p>
        </section>

        <section className="grid gap-4">
          <SectionLabel>This site</SectionLabel>
          <div className="relative grid gap-1">
            <EntryMark filled />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-lg font-semibold tracking-[-.01em]">
                Full site in progress
              </h3>
              <span className="ml-auto font-mono text-[13px] text-muted-foreground">
                2026
              </span>
            </div>
            <ul className="mt-2 grid gap-1.5">
              {[
                "Case studies from building an AI market-research platform as founding engineer",
                "A write-up of my agent system and its mutation-testing review bar",
                "A web resume with a PDF download",
              ].map((item) => (
                <li
                  key={item}
                  className="max-w-[64ch] pl-4 -indent-4 leading-6 before:inline-block before:w-4 before:indent-0 before:font-mono before:font-medium before:text-primary before:content-['+']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-4">
          <SectionLabel>Contact</SectionLabel>
          <p className="max-w-[64ch] leading-6 text-muted-foreground">
            The quickest way to reach me is email.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Email me
            </a>
            <a
              href={`https://${GITHUB}`}
              className="inline-flex h-9 items-center rounded-lg border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-20 flex flex-wrap justify-between gap-2 border-t border-border pt-6 font-mono text-[13px] text-muted-foreground">
        <span>jamessheldon.ca</span>
        <span>Site in progress</span>
      </footer>
    </div>
  );
}
