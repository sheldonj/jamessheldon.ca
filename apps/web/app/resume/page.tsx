import type { Metadata } from "next";
import { openGraph, twitter } from "../../lib/metadata";
import { site } from "../../lib/site";
import { resume, resumeFiles, resumeUpdated } from "../../lib/resume";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${site.url}/resume`,
  name: `Resume · ${site.name}`,
  dateModified: resumeUpdated,
  isPartOf: { "@id": `${site.url}/#website` },
  mainEntity: { "@id": `${site.url}/#person` },
};

const title = `Resume · ${site.name}`;
const description = `Resume of ${site.name}: ${resume.headline}. Read it here or download it as PDF or Word.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/resume" },
  openGraph: { ...openGraph, url: "/resume", title, description },
  twitter: { ...twitter, title, description },
};

const button =
  "inline-flex h-9 items-center rounded-lg px-4 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";
const primaryButton = `${button} bg-primary text-primary-foreground hover:bg-primary/90`;
const outlineButton = `${button} border border-border bg-background hover:bg-accent hover:text-accent-foreground`;

// Log rail markers: empty elements positioned on the rail line (design system LogRail).
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="relative font-mono text-xs font-semibold uppercase tracking-[.05em] text-primary">
      <i
        aria-hidden
        className="absolute top-1 -left-[38px] size-2 rotate-45 bg-primary print:hidden"
      />
      {children}
    </h2>
  );
}

function RoleDot() {
  return (
    <i
      aria-hidden
      className="absolute top-2 -left-[37.5px] size-1.5 rounded-full bg-rail ring-2 ring-background print:hidden"
    />
  );
}

export default function ResumePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative mt-16 grid gap-12 pl-10 before:absolute before:inset-y-0 before:left-[5px] before:w-[1.5px] before:bg-rail sm:mt-24 print:before:hidden print:pl-0">
        <h1 className="text-[28px] leading-[1.15] font-semibold tracking-[-.025em] sm:text-[40px] sm:leading-[1.1]">
          Resume
        </h1>

        <section className="grid gap-4">
          <SectionLabel>Summary</SectionLabel>
          <p className="max-w-[68ch] text-lg leading-7 text-pretty text-muted-foreground">
            {resume.summary}
          </p>
        </section>

        <section className="grid gap-4">
          <SectionLabel>Skills</SectionLabel>
          <dl className="grid gap-3 sm:grid-cols-2 sm:gap-x-10">
            {resume.skills.map((s) => (
              <div key={s.label}>
                <dt className="font-semibold">{s.label}</dt>
                <dd className="text-muted-foreground">{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="grid gap-8">
          <SectionLabel>Experience</SectionLabel>
          {resume.experience.map((role) => (
            <article key={role.company} className="relative grid gap-2">
              <RoleDot />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-xl font-semibold tracking-[-.01em]">
                  {role.company}
                </h3>
                <span className="font-mono text-[13px] text-muted-foreground">
                  {role.dates}
                </span>
              </div>
              <p className="text-muted-foreground">
                {role.title} · {role.location}
              </p>
              <ul className="mt-1 grid max-w-[68ch] list-disc gap-1.5 pl-5 leading-6 text-pretty marker:text-primary">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="grid gap-4">
          <SectionLabel>Earlier experience</SectionLabel>
          <ul className="grid max-w-[68ch] gap-3 leading-6 text-pretty">
            {resume.earlier.map((r) => (
              <li key={r.company}>
                <b className="font-semibold">{r.company}</b>
                <span className="text-muted-foreground">
                  {" "}
                  · {r.title}. {r.summary}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4">
          <SectionLabel>Education</SectionLabel>
          <p className="max-w-[68ch] leading-6">
            <b className="font-semibold">{resume.education.school}</b>
            <span className="text-muted-foreground">
              {" "}
              · {resume.education.detail}
            </span>
          </p>
          <p className="leading-6 text-muted-foreground">
            Recommendations on{" "}
            <a
              href={`https://${resume.recommendations}`}
              className="text-primary underline-offset-4 hover:underline"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>

        <section className="grid gap-4 print:hidden">
          <SectionLabel>Download</SectionLabel>
          <p className="max-w-[68ch] leading-6 text-muted-foreground">
            The same resume as a file, for applications and sharing.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={resumeFiles.pdf} download className={primaryButton}>
              Download PDF
            </a>
            <a href={resumeFiles.docx} download className={outlineButton}>
              Download Word
            </a>
          </div>
        </section>
      </main>

    </>
  );
}
