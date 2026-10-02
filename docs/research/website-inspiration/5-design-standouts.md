# Design standouts: engineer personal sites (cohort 5)

Researched 2026-10-02. I fetched every homepage below, plus subpages where they helped (craft/projects/archive/colophon pages).

**Method caveat.** The fetch tool returns page text and metadata. It does not return rendered pixels or CSS, and direct curl was blocked by the egress proxy. Typography and colour notes therefore come only from sources I could see: the site's own colophon or footer, a `theme-color` meta tag, or a gallery tag. Where I couldn't verify a visual detail, I say so and don't fill it in from memory. Two subpages returned 404: jim-nielsen.com/colophon and /about, and emilkowal.ski/craft. All ten homepages were up.

---

## 1. Rauno Freiberg: design engineer (Vercel; Devouring Details)
**URL:** https://rauno.me
- **Hero:** "Make it fast. Make it beautiful. Make it consistent. Make it carefully. Make it timeless. Make it soulful. Make it." The page introduces him as "an Estonian interaction designer working with Vercel and Devouring Details".
- **Layout:** A very short homepage that works as an index. It links to Devouring Details (his paid interaction-design manual), Craft, History of Software Design, Projects and Field Notes, then year archives (2023, 2022). The landing.love gallery tags the site "Minimal" and "Horizontal Scroll".
- **Type/colour:** Not exposed in the fetched content.
- **Signature detail:** The /craft page is a reverse-chronological grid of dated prototypes, each tagged "View Prototype", "View Production" or "Read Essay". Examples include Exclusion Tabs, Wheel Input, Toolbar Morph, X-Ray Interaction and Vercel Agent. The manifesto hero is the other signature: one repeated phrase serves as his whole positioning statement.
- **Work:** /projects is a bare list of title, year and link (e.g. "Web Interface Guidelines 2023", "⌘K 2022") with no case-study depth. The depth lives in the craft prototypes and essays.
- **CV/contact:** An email link that copies to clipboard, plus Twitter and GitHub. No CV.
- **Fits a CTO/staff candidate:** A one-line philosophy as the hero is senior and confident. A dated log of shipped things proves he ships constantly.
- **Doesn't fit:** Craft as the main proof only works for a design engineer. A CTO candidate needs outcomes, scope and teams, which this site never states. The lack of context only works when you're already famous.

## 2. Paco Coursey: design engineer (Webmaster at Linear, ex-Vercel)
**URL:** https://paco.me
- **Hero:** "Crafting interfaces. Building polished software and web experiences."
- **Layout:** One column of short labelled sections: Building, Projects, Writing, Now, Connect. The footer reads "Pray at the altar of hard work." The theme colour is white (#ffffff).
- **Type/colour:** His "Redesign 2021" post names Inter, Söhne and Newsreader. The site is white and document-like.
- **Signature detail:** Restraint as a principle. The redesign post says JavaScript is disabled entirely ("you don't need it to read documents") and calls the site "a simple collection of documents and links", with "practically nothing to keep up-to-date." The /craft page is a categorised list (Motion, CSS, Interaction) of small demos.
- **Work:** A plain list of title plus one line linking out: ⌘K (cmdk), Writer, next-themes. The weight comes from the open-source names themselves.
- **CV/contact:** Twitter and email under "Connect". No CV.
- **Fits:** The "Now" section, the tiny maintenance surface and the sense of confidence. A senior engineer whose name carries weight can afford this.
- **Doesn't fit:** The site is too sparse for someone a hiring manager hasn't heard of. James needs at least one layer of proof (outcomes, roles) that Paco can skip.

## 3. Emil Kowalski: design engineer (Linear web team, ex-Vercel)
**URL:** https://emilkowal.ski
- **Hero:** "I work on the Web team at Linear. I like to build things for designers and developers, think deeply about the user interface, how it looks, feels, behaves."
- **Layout:** One column: Today (intro), Projects, Writing, Newsletter, More (socials).
- **Type/colour:** Not exposed in the fetched content.
- **Signature detail:** The projects are widely used products: Sonner (toasts), Vaul (drawer), animations.dev and aiforui.dev (courses). The writing focuses on animation and UI craft. A newsletter signup sits on the homepage.
- **Work:** Four featured projects with one-line descriptions, then ten article titles.
- **CV/contact:** Newsletter, Twitter, GitHub. No CV.
- **Fits:** "I work on X. I like to build Y." is a first-person present-tense hero that works for any level. Featuring a few named things people actually use beats a grid of twelve.
- **Doesn't fit:** The newsletter and course funnel reads as creator-economy rather than an executive candidate.

## 4. Lee Robinson: engineer and writer (ML at SpaceX per his site; formerly Cursor and Vercel)
**URL:** https://leerob.com
- **Hero:** "I'm an engineer and writer. I work on ML at SpaceX (formerly at Cursor), where I help train useful AI models."
- **Layout:** The bio comes in short and long variants. Then a Notes index of ten topical collections (beliefs, AI, developer experience, product engineers, personal software…) and a dated blog list (2021 to July 2026). "IOWA" appears at the foot of the page.
- **Type/colour:** The theme colour is #1b1a19, a warm near-black, so the site is dark or near-dark. Fonts not exposed.
- **Signature detail:** The "Notes" topic collections work as a public record of his beliefs. A hiring manager can read how he thinks about developer experience, AI or product engineering without wading through a blog feed. The angel-investing and advising email sits inline in the bio.
- **Work:** Almost nothing in the form of "projects". His credibility comes from his employers and his writing.
- **CV/contact:** One email link, inline. No CV.
- **Fits:** This is the closest model for James. It's a Next.js and Vercel-adjacent engineer, the copy is AI-forward, and the site is text-first. Topical belief notes signal judgement, which is exactly what a CTO or staff hiring panel probes.
- **Doesn't fit:** The minimal work section relies on name recognition. James should add a proof section that Lee can skip.

## 5. Brittany Chiang: frontend engineer (Senior FE, Accessibility at Klaviyo; ex-Apple, Upstatement)
**URL:** https://brittanychiang.com
- **Hero:** "Brittany Chiang / Frontend Engineer / I build accessible, pixel-perfect experiences for the web."
- **Layout:** Name block, social icons, then About, Experience, Projects and Writing. The fetch tool reported a centred single column. The rendered layout (widely known as a split sticky sidebar) could not be verified by text fetch.
- **Type/colour:** The footer says it verbatim: "Built with Next.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface." The theme colour is #0f172a (slate-900 navy).
- **Signature detail:** A table-based project archive at /archive with columns Year, Project, Made at, Built with and Link. The footer colophon names the tooling.
- **Work:** Experience entries list date range, title and company, a sentence, and tech tags (e.g. "2024 — Present | Senior Frontend Engineer, Accessibility · Klaviyo … JavaScript, TypeScript, React, Storybook"). Projects are image cards (Halcyon theme, "100k+ installs", etc.).
- **CV/contact:** A prominent "View Full Résumé" PDF link sits right under Experience. This is the most recruiter-friendly CV surfacing in the cohort.
- **Fits:** The résumé link next to experience, the scannable experience rows, and the archive table as a complete record.
- **Doesn't fit:** The design is the most-cloned portfolio template on GitHub, and searching for it mostly returns copies. Using it would read as "IC frontend portfolio", the opposite of what James wants. Tech-tag pills on every row read as junior at CTO level.

## 6. Maggie Appleton: designer and developer (GitHub Next)
**URL:** https://maggieappleton.com
- **Hero:** "Maggie makes visual essays about programming, design, and anthropology." Subtitle: "Designer, anthropologist, and mediocre developer".
- **Layout:** A digital garden: Essays, Notes, Patterns, Talks, Podcasts, Library, Smidgeons, all shown as titled cards with relative timestamps ("about 1 year ago").
- **Type/colour:** Her /colophon names Canela Text for body copy, Canela Display for headings, Lato as the supporting sans, and a fluid type scale. The stack is Astro, MDX, CSS and Motion on Vercel. She says Gatsby and Next.js were "overkill for personal websites."
- **Signature detail:** Growth stages (seedling, budding, evergreen) label how finished each note is. There are custom MDX components such as "assumed audience" notices, and hand-drawn illustrated essays.
- **Work:** Shown entirely through writing and patterns. No conventional projects list.
- **CV/contact:** Social links (LinkedIn, GitHub, Bluesky…) and RSS. No CV.
- **Fits:** A serif display face with a fluid scale gives an editorial, considered feel that no template has. An "assumed audience" component is a smart device for technical write-ups.
- **Doesn't fit:** The garden model and illustration-led essays are a full-time creative practice. Without the illustrations it falls flat, and it doesn't say "hire me to run engineering."

## 7. Andrej Karpathy: AI researcher and educator (ex-OpenAI, ex-Tesla Director of AI)
**URL:** https://karpathy.ai
- **Hero:** A photo, then "Andrej Karpathy", then "I like to train deep neural nets on large datasets 🧠🤖💥", then icon links (Twitter, GitHub, RSS, Medium, Bear blog, email).
- **Layout:** One long page: Current work, Career timeline, Featured talks, Teaching, Featured writing, Pet projects, Publications, Misc. The footer credits "0 frameworks" and "two static files".
- **Type/colour:** Plain HTML and CSS. No custom fonts or colour system detected.
- **Signature detail:** A career timeline with an institution logo beside each entry, each a single first-person sentence of scope. For example: "2017 - 2022 I was the Director of AI at Tesla, where I led the computer vision team of Tesla Autopilot and (very briefly) Tesla Optimus."
- **Work:** Pet projects as thumbnail plus one-liner ("micrograd: a tiny scalar-valued autograd engine (with a bite! :))").
- **CV/contact:** No CV link. The timeline is the CV.
- **Fits:** The timeline pattern of years, org logo and one sentence on scope and what was led is the best CTO-signal format in the cohort. It's honest and dense, with zero design risk.
- **Doesn't fit:** The deliberate lack of styling only reads as confidence at Karpathy's level. For James it would read as unfinished.

## 8. Linus Lee (thesephist): AI and interfaces researcher (AI interpretability at Thrive Capital, per his site)
**URL:** https://thesephist.com
- **Hero:** "My name is Linus." Then that he "investigates the future of knowledge representation and creative work aided by machine understanding of language."
- **Layout:** Nav of posts, projects, stream and RSS. The homepage is a long first-person prose bio covering research, writing ("half million words"), talks (20+ listed, 2021–2026), music, and where he's lived.
- **Type/colour:** Not exposed in the fetched content.
- **Signature detail:** /projects sorts "well over 100" projects into the honest buckets Highlights, Released, Retired, Experiments and Unfinished. Each gets a sentence, e.g. "Monocle: Personal search engine written in Ink, querying across tens of thousands of documents…".
- **Work:** Categorised text lists with no dates or stack tags.
- **CV/contact:** Twitter, GitHub, "firstname@thesephist.com". No CV.
- **Fits:** The Highlights / Released / Retired split shows maturity. A senior engineer has shipped things, sunset things and learned from both. Prose-first AI thinking is credible.
- **Doesn't fit:** Volume as proof (100+ projects, 500k words) suits a researcher or hacker. A CTO candidate should curate down to a few things with business outcomes.

## 9. Josh W. Comeau: front-end educator (courses: CSS for JS Devs, Joy of React)
**URL:** https://www.joshwcomeau.com
- **Hero:** Positioning line "Friendly articles and tutorials for front-end web developers. ❤️". The fetch didn't return the visual hero itself.
- **Layout:** Nav (Categories, Courses, Goodies, About), a featured article grid, Browse by Category, a top-ten Popular list, Newsletter, footer.
- **Type/colour:** His "How I Built My Blog v2" post names Cartograph CF (a paid font chosen for its cursive italics). Light and dark modes, with semantic aside colours.
- **Signature detail:** This is the showiest site here. A cursor-reactive rainbow gradient whose hidden control panel broadcasts changes to every visitor over WebSocket. A like button you can press up to 16 times, stored in MongoDB. Optional UI sound effects with a "Disable sounds" toggle. Arrow icons that animate with React Spring, and View Transitions between pages.
- **Work:** Content and courses, not projects.
- **CV/contact:** Contact page, newsletter, socials. No CV.
- **Fits:** One well-built, real-time, slightly surprising interaction proves engineering depth (WebSockets, state, performance) better than a list. For James, a single small live element tied to his agent work could play that role.
- **Doesn't fit:** The whimsy, sounds and mascot belong to a teaching brand. At CTO level this much play reads as unserious.

## 10. Jim Nielsen: designer and engineer, "20+ years" (Founding Engineer at Quadratic)
**URL:** https://jim-nielsen.com
- **Hero:** Photo, then "I'm a web designer, developer, & blogger with 20+ years of experience."
- **Layout:** One very long homepage in this order: intro, blog, link-blog notes, iOS and macOS icon galleries, a pie-baking archive (!), Praise, "Linked by" publications, Hacker News hits, interviews, side projects, employment, thank-you.
- **Type/colour:** Not exposed in the fetched content (the /colophon URL I tried 404s). The page reads as clean and text-focused, with favicons beside publication links and avatars beside testimonials.
- **Signature detail:** Two sections no one else has. A **Praise** block quoting co-workers, e.g. Matt Brophy: "[Jim] crosses the boundary between designer/developer better than anyone I've worked with". And a **Hacker News hits** list. Both are third-party social proof built into the page.
- **Work:** Employment as one compact line per role: "Founding Engineer @ Quadratic 2023–Now, Director of Design @ Remix 2022, Director of Design @ SageSure 2016–2022 …".
- **CV/contact:** A dedicated /resume/ page, email in plain sight, and an "open invitation to talk about the web."
- **Fits:** It's the closest profile match to James: 20+ years, founding engineer. He leads with his years of experience, adds co-worker testimonials, uses a compact role list, and keeps a real résumé page. All of it transfers directly.
- **Doesn't fit:** The section sprawl and hobby archives dilute the message for a job search. Keep the proof sections and cut the rest.

---

## (a) Design patterns that signal seniority
1. **A first-person, present-tense hero about scope, not skills.** Lee ("I'm an engineer and writer. I work on ML at…"), Emil and Jim ("…with 20+ years of experience") state who they are and what they own in one sentence. No "passionate developer", no tech-logo strip.
2. **Experience as one sentence of scope per role.** Karpathy's "I was the Director of AI at Tesla, where I led…" and Jim's compact role line beat cards covered in tech-tag pills. Seniority is what you led and what changed, not which libraries you used.
3. **A few curated, named things with real usage, plus an honest archive.** Emil's four named projects, Paco's cmdk and next-themes, and Linus's Highlights / Released / Retired split. Curate to two or three deep case studies, then link a full archive table (like Brittany's /archive) for completeness.
4. **Evidence of judgement through writing, organised by topic.** Lee's Notes collections (beliefs, AI, DX, product engineering) let a hiring panel read how you think before the interview. For a CTO candidate that's worth more than any visual flourish. Third-party proof does similar work: Jim's Praise and HN hits.
5. **Typography-led restraint with exactly one crafted detail, and a colophon.** Paco's no-JS documents, Maggie's Canela serif with a fluid scale, Brittany's colophon footer. Senior sites are quiet and fast, with one deliberate signature (Rauno's dated prototype log, Josh's live gradient) rather than many. The colophon itself shows craft. Pair it with an obvious résumé link and plain email (Brittany, Jim).

## (b) Three visual directions for James

**1. "The Document": quiet editorial minimalism**
Anchors: **Paco Coursey** + **Lee Robinson**.
A narrow single column, one or two excellent typefaces (a serif display face with a neutral sans), and a warm near-black or off-white palette. Sections in order: hero sentence, Now, Selected work (3 short case studies), Notes on beliefs (AI agents, engineering systems, founding-team building), Writing, Contact and résumé. Near-zero JS. It reads as calm, confident and staff/CTO-level. The risk is feeling thin unless the case-study copy is strong.

**2. "The Record": a career timeline with proof**
Anchors: **Karpathy** + **Jim Nielsen**.
A timeline-led page: years, org logo, and one sentence of scope per role, with the 2024–2026 CTO role expanded into a case study. Add a Praise block quoting former co-founders and reports, a "Linked by / talks" strip, and a dedicated /resume page. Styling stays modest but polished, which Karpathy's own site deliberately isn't. This is the most recruiter-efficient direction and suits "20+ years, founding engineer" best.

**3. "The Lab": one live signature on a restrained base**
Anchors: **Rauno Freiberg** + **Josh W. Comeau**.
A restrained base layout with one crafted, technically real interaction that ties to his story. For example, a small live view of his Claude Code agent-driven engineering system (recent agent runs and PRs, or an animated pipeline diagram), plus a dated Field Notes / craft log of experiments. It signals hands-on AI-product depth for AI-native founding roles. The risk is drifting into "portfolio toy", so keep it to one element and keep hiring essentials (scope, outcomes, résumé) above it.

### Sources
- https://rauno.me, https://rauno.me/craft, https://rauno.me/projects, https://www.landing.love/sites/rauno-3/
- https://paco.me, https://paco.me/craft, https://paco.me/writing/redesign-2021
- https://emilkowal.ski
- https://leerob.com
- https://brittanychiang.com, https://brittanychiang.com/archive
- https://maggieappleton.com, https://maggieappleton.com/colophon
- https://karpathy.ai
- https://thesephist.com, https://thesephist.com/projects/
- https://www.joshwcomeau.com, https://www.joshwcomeau.com/blog/how-i-built-my-blog-v2/
- https://jim-nielsen.com
