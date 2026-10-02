# Website inspiration: engineers in AI

Research date: 2026-10-02. Five parallel research passes visited about 35 personal sites live. The detailed write-ups are in the cohort files:

| File | Cohort |
|---|---|
| [1-ai-typescript-engineers.md](1-ai-typescript-engineers.md) | Full-stack / TypeScript engineers who moved into AI (Willison, Lee Robinson, Harper Reed, swyx, Matt Pocock…) |
| [2-ai-startup-ctos.md](2-ai-startup-ctos.md) | AI startup CTOs and founding engineers (Charlie Holtz, Jason Liu, Hamel Husain, Erik Bernhardsson…) |
| [3-agentic-coding-staff-engineers.md](3-agentic-coding-staff-engineers.md) | Senior engineers known for agentic coding (Mitchell Hashimoto, Armin Ronacher, Kent Beck, Addy Osmani…) |
| [4-engineering-leaders.md](4-engineering-leaders.md) | CTOs and eng leaders (Will Larson, Charity Majors, Malte Ubl, Jacob Kaplan-Moss…) |
| [5-design-standouts.md](5-design-standouts.md) | Sites admired for design (Paco Coursey, Rauno Freiberg, Karpathy, Jim Nielsen, Maggie Appleton…) |

Caveats:
- Pages were read through a text-summarizing fetch tool, so check hero quotes against the live page before reusing them word for word.
- Visual notes (fonts, colours) are only what the sites state about themselves.
- James's background came from the james-voice skill summary. CAREER-CONTEXT.md wasn't reachable from this session, so check any fact against it before it goes on the site.

## Closest matches to James

These are the people whose path looks most like James's (20+ years full-stack, founding engineer and CTO at an AI startup, agent-driven engineering with Claude Code, mutation testing as the review bar):

1. **Charlie Holtz** (charlieholtz.com). Builds Conductor, an app for running teams of coding agents. Two pages, plain text, and a projects list where every line ends in proof ("#1 on Hacker News").
2. **Thorsten Ball** (thorstenball.com). Long product-engineering career, now co-founder of the Amp coding agent. His whole career fits in one factual sentence, and he has a recent "What I believe about the future of software development" post.
3. **Harper Reed** (harperreed.com). Former CTO who went viral writing up his own LLM codegen workflow. Separates the person page from the blog and has a career timeline.
4. **Mitchell Hashimoto** (mitchellh.com). Former CTO and co-founder. Wrote "My AI Adoption Journey", a staged ladder that ends at "engineer the harness".
5. **Lee Robinson** (leerob.com). Next.js/TypeScript engineer who moved into AI. Has a short/long bio toggle and one-word evergreen pages (`/agents`) that carry hard numbers.
6. **Jim Nielsen** (jim-nielsen.com). Also "20+ years", now a founding engineer. One-line roles, co-worker quotes and a /resume page.
7. **Simon Willison** (simonwillison.net). His tools colophon lists which model co-authored each commit, which makes AI-assisted shipping something a reader can check.

## What every strong site does

1. **The hero is one plain sentence about the role and what you own.** No adjectives or taglines. Example of the shape: "I'm James. I was founding engineer and CTO at Cashew Research, where I built [CONFIRM: one-line product description] and the agent system that built it with me."
2. **Proof is numbers tied to named things.** James has ~60 packages, ~5,300 commits co-authored with Claude Code, SOC 2, 22 of 54 ADRs, three engineers led and 20+ years. Use one or two of these per section, in a stats strip or in the case study.
3. **One named, linkable method makes a career.** Examples: Huntley's "Ralph Loop", Dex Horthy's "12-Factor Agents", Willison's Agentic Engineering Patterns guide. James's equivalent is agents writing the code with mutation testing deciding whether it ships. It needs a name and a permanent page.
4. **Testing is how the best agentic engineers separate themselves from vibe coding.** Beck, Osmani, Willison and Hashimoto all lean on it. Mutation testing goes a step further than any of them, and that's James's sharpest differentiator.
5. **Curated entry points beat archives.** Use a "Start here" page, two or three flagship posts linked from the homepage, and a few deep case studies with an honest archive behind them.
6. **Minimal, fast, type-led design with one signature detail.** Almost all of these are single-column and text-first. A fast, carefully built Next.js site is itself a work sample.
7. **Make the yes easy.** Plain email, a web-page resume, copy-paste short and long bios (swyx), and a "ways I help" or "what I'm looking for" page (Will Larson, Jason Liu). None of these sites uses an "open to work" banner. They state what they want in one plain line.

## Suggested shape for jamessheldon.ca

A starting point to react to, not a decision:

- **Home:** hero sentence, then a stats strip, then 2–3 case studies (the Cashew platform, the agent system, one earlier role), then the flagship posts, then contact.
- **/agents** (or the method's name): an evergreen write-up of the agent system and the mutation-testing review bar, with a "last updated" date.
- **/work:** case studies plus a career timeline with one sentence of scope per role (the Karpathy / Jim Nielsen format).
- **/writing:** essays sorted by topic. Good first posts are "What worked and what didn't" (the Ronacher format) and "What I believe" (the Thorsten Ball format).
- **/about:** short and long bios, a headshot, and what roles James is open to (IC and exec framed together, using Charity Majors's "engineer/manager pendulum" idea).
- **/resume:** an HTML page with a PDF download.
- **Colophon footer:** how the site was built, including its own agent-co-authored commit count.

## Three visual directions (from cohort 5)

1. **The Document** (Paco Coursey + Lee Robinson): a quiet, editorial single column. Calm, and it reads as staff or CTO level. It needs strong copy or it feels thin.
2. **The Record** (Karpathy + Jim Nielsen): a timeline with the CTO role expanded, a praise block and /resume. Best for recruiters and a 20+ year career.
3. **The Lab** (Rauno Freiberg + Josh W. Comeau): a restrained base with one live element, such as a view of the agent system at work. Best for AI-native founding roles, but it can drift into a toy.

A blend of 1 and 2 with a single "Lab" detail is likely the strongest fit for both the IC and exec tracks.
