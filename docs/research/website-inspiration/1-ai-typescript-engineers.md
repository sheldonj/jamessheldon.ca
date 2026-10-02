# Cohort 1: Full-stack / TypeScript engineers who moved into AI engineering

Research date: 2026-10-02. I visited each site with WebFetch. Direct curl was blocked by the proxy, so all page reads went through the WebFetch summarizer. Treat the "verbatim" quotes as close to exact, but check any line before copying it word for word. Design notes for dark mode and typography come from the summarizer's reading of each page plus its meta tags, not from screenshots.

Selection: these 8 are the closest match to James, a hands-on senior or CTO-level builder of production systems who ships with coding agents. Kent C. Dodds (kentcdodds.com) was visited but left out. His site is a course-sales funnel for an educator ("Helping people make the world a better place through quality software."). Kody (an agent project) and MCP talks now sit at the top of his homepage, but the model doesn't fit someone looking for a job. Guillermo Rauch and Theo Browne were not visited. They are platform CEOs and creators, so their sites are a weaker match than the 8 below.

---

## 1. Simon Willison
- **Role:** independent open-source developer (Datasette, LLM CLI). Co-creator of Django. The most-cited blogger on practical LLM use.
- **URL:** https://simonwillison.net/ (also https://tools.simonwillison.net/)
- **Why similar to James:** a 20+ year web engineer who reinvented himself around agentic coding. He documents exactly which AI model co-authored which commit, which is James's 5,300-co-authored-commits story told in public.
- **Structure:** header "Simon Willison's Weblog" with About, Subscribe, TILs, Tools. Homepage streams six content types: Entries, Links, Quotes, Notes, Guides, Elsewhere. The sidebar has a tag cloud with counts ("ai 2,258", "llm 635"), a Highlights list, and archives back to 2002.
- **Hero:** none. The masthead is just "Simon Willison's Weblog". The About page opens: "Simon Willison is the creator of Datasette, an open source tool for exploring and publishing data."
- **Content types:** long entries, link blog with commentary, quotes, notes, guides, TILs, a tools gallery, live blogs (e.g. "OpenAI DevDay 2026 live blog"), a free newsletter plus a paid monthly one, and many Atom feeds (everything, entries only, per-tag).
- **Design:** plain, dense, text-first, chronological. Tags under every post. Almost no decoration. Light by default.
- **Credible to a hiring manager:** sheer volume and consistency (24 years of archives). The tools colophon (https://tools.simonwillison.net/colophon) lists 237 tools. Each one has its commit history, links to the LLM transcripts, and which model co-authored each commit. It is verifiable proof of AI-assisted shipping, not just a claim.
- **Idea James could steal:** a **"Built with agents" colophon** for his own work. For a few Cashew or monorepo artifacts (or the site itself), show commit counts, co-author trailers, and the mutation-score bar each change had to pass. That turns "5,300 Claude-co-authored commits" into an inspectable ledger.

## 2. Lee Robinson
- **Role:** the site says "I work on ML at SpaceX (formerly at Cursor), where I help train useful AI models." Before that he ran Vercel/Next.js developer relations.
- **URL:** https://leerob.com/
- **Why similar:** a Next.js/React/TypeScript web engineer who moved into AI (Cursor, then ML). It's the clearest "TS full-stack to AI" path in this cohort.
- **Structure:** one page with a Bio section (a **Default/Long bio toggle**), Notes (9 topic pages such as /beliefs, /ai, /dx, /developer-marketing, /agents) and Blogs (8 dated posts). The only nav is a link to X.
- **Hero (verbatim):** "I'm an engineer and writer. I work on ML at SpaceX (formerly at Cursor), where I help train useful AI models." / "My life's work is to make technology easy to understand and interesting to learn about."
- **Content types:** evergreen "notes" pages named by idea at short URLs, dated essays, and an angel-investing contact line. No resume, projects grid, or newsletter on the homepage.
- **Design:** very minimal, single column, warm near-black dark theme (#1b1a19), generous line-height, location tag "IOWA". Very low density.
- **Credible:** essays that report real numbers. In "Coding Agents & Complexity Budgets" (/agents) he moved cursor.com from a CMS to Markdown in 3 days with agents, spent "$260 in tokens", and cut "$56,848+" in CDN costs. Memorable line: "The cost of abstractions with AI is very high... now there's an easy solution: spend tokens."
- **Idea to steal:** a **short/long bio toggle** on the homepage, plus **one-word evergreen URLs** for his positions (e.g. `/agents`, `/testing`, `/monorepo`, `/soc2`), each a case study with hard numbers like the /agents post.

## 3. Thorsten Ball
- **Role:** co-founder and co-creator of Amp (the coding agent, spun out of Sourcegraph). Previously at Zed and Sourcegraph. Author of *Writing an Interpreter in Go* and *Writing a Compiler in Go*.
- **URL:** https://thorstenball.com/ (newsletter: https://registerspill.thorstenball.com/)
- **Why similar:** a working product engineer who became a founding builder of an AI coding product. That is the "founding engineer for an AI product" role James wants.
- **Structure:** About, Books, Blog, Podcasts, Talks, Register Spill, Misc, Contact.
- **Hero (verbatim):** "Hello! I'm Thorsten. I'm a co-founder and co-creator of Amp. Previously, I worked at Sourcegraph; before returning there, I worked at Zed, following an earlier five-year stint at Sourcegraph."
- **Content types:** books, blog, a weekly Substack ("Joy & Curiosity #NN" link roundups), podcasts, talks.
- **Design:** minimalist and text-first, square avatar, light/dark support, responsive.
- **Credible:** the first sentence is the current role, then the career path in one line. No adjectives. The books show he goes deep.
- **Idea to steal:** **open with a plain career sentence:** "I'm James. I was founding engineer and CTO at Cashew Research; before that, Senior Fullstack at Contra, and agency work at Critical Mass." Facts first, no self-description.

## 4. Harper Reed
- **Role:** CEO of 2389.ai (AI research company, 2024). Former CTO of the Obama 2012 campaign. Founded Modest (acquired by PayPal).
- **URL:** https://harperreed.com/ (harper.lol redirects here). Blog: https://harper.blog/
- **Why similar:** a CTO who writes openly about his own agent-coding workflow. "My LLM codegen workflow atm" (spec, then plan, then execute) went viral and Simon Willison and Martin Fowler both shared it. It is the closest match to James's "designed an agent system" story.
- **Structure:** the person site has About/Bio, Latest Blog Post, Speaking, and "The History of Harperness" (an emoji timeline from 1978 to 2026). The blog has Home, Posts, Notes, Now, Media, About, email, RSS, plus translations (JA/ES/KO/ZH) and a colophon.
- **Hero (verbatim):** "Entrepreneur. Hacker." then "I'm a technologist, entrepreneur, and team builder. As CTO of the Obama 2012 campaign, I brought the tech mentality to politics..." Blog: "My name is Harper Reed, and this is my blog. If you want to know more about me, visit my website: harper.lol."
- **Content types:** long posts (recent: "Why Don't My Agents Break Containment?", "My now immaculate knowledge graph of life"), short photo notes, a /now page, media, speaking, and yearly reviews.
- **Design:** Hugo, serif type, lots of whitespace, grayscale avatar, vintage and Leica photography. Personality-led.
- **Credible:** the timeline makes a 20+ year career scannable. The workflow posts prove current, hands-on practice and not only leadership.
- **Idea to steal:** **split the person page from the blog** and add a **career timeline** (2005 to 2026: agencies, Critical Mass, Contra, Cashew). Then write a "My agent workflow at Cashew" post (spec, plan, implement, mutation test as the gate). That is his likely viral piece.

## 5. Geoffrey Huntley
- **Role:** creator of the "Ralph Wiggum Loop" agent technique and founder of Latent Patterns (AI education). Previously Technology Lead at Canva and Optiver.
- **URL:** https://ghuntley.com/ (bio: https://ghuntley.com/bio/)
- **Why similar:** a senior tech lead turned agent-workflow practitioner. He became known for a named, repeatable agent technique, much like James's agent system with mutation testing as the review bar.
- **Structure:** Home, Lately, Media, Workshops, Speaking, Disclosures, Contact, and Subscribe (Ghost).
- **Hero (verbatim, opening of the lead essay):** "It's an uncertain time for our profession, but one thing is certain—things will change. Drafting used to require a room of engineers, but then CAD came along..."
- **Content types:** opinion essays ("Software development now costs less than minimum wage", "Don't waste your back pressure", "Engineer away the slop"), interviews, workshops, speaking, a newsletter, and a disclosures page.
- **Design:** Ghost theme, card list of posts with tags, monochrome, tattoo-style illustrated portrait. Strong personal brand.
- **Credible:** a **named concept** ("Ralph") that others adopted. His bio leads with it: "Geoffrey Huntley is the creator of the Ralph Wiggum Loop...".
- **Idea to steal:** **name James's method.** Give the "agents write it, mutation tests judge it" review bar a memorable name and a canonical URL, so recruiters and peers can cite it.

## 6. Dex Horthy
- **Role:** founder of HumanLayer ("The Multiplayer Coding Agent Workspace"). Author of 12-Factor Agents and the person credited with "context engineering".
- **URL:** **no personal site found.** His GitHub bio literally reads "Looking for a cool place to deploy my hugo site", and his profile links to https://www.humanlayer.dev/. His best-known "site" is the README of https://github.com/humanlayer/12-factor-agents (25.9k stars).
- **Why similar:** a TypeScript founder-engineer building agent infrastructure for complex production codebases, which is James's world. His public line, "Do Not Outsource the Thinking" (a Questions, Research, Design, Structure, Plan, Implement workflow), closely matches James's agent system.
- **Structure (humanlayer.dev):** Product Demo, Workflow, Collaboration, Pricing, Security, FAQ, and a "From the Team That Brought You Context Engineering" section linking "No Vibes Allowed" (AI Engineer Code Summit, Nov 2025), "RPI to QRSPI", and 12 Factor Agents.
- **Hero (humanlayer.dev, verbatim):** "The Multiplayer Coding Agent Workspace".
- **Content types:** a GitHub-hosted essay or manifesto, conference talks, blog and YouTube.
- **Design:** product marketing site. Not applicable as a personal-site reference.
- **Credible:** a numbered principles doc ("12-factor") that lives on GitHub and earns stars, so the credibility is measurable.
- **Idea to steal:** publish **"N principles of agent-written production code"** as a GitHub repo with the essay as the README, and link it from the homepage. It works as both a writing sample and a social-proof counter.

## 7. swyx (Shawn Wang)
- **Role:** writer, founder and advisor. Host of Latent Space, founder of AI Engineer (the conference). The About page lists Cognition among current work. Earlier DX roles at Netlify, AWS, Temporal, Airbyte.
- **URL:** https://swyx.io/ (about: https://swyx.io/about)
- **Why similar:** a JS/React/Svelte web developer who coined and led "The Rise of the AI Engineer", the job title James is targeting. He also worked at Temporal, which James uses.
- **Structure:** Home, Ideas, Podcasts, About, Subscribe, ⌘K search. Homepage sections: "Things Worth Thinking About", "Currently Causing Interesting Trouble", "Latest Writing & Appearances", "Selected Talks", "Stay in Correspondence", "The Rest of the Library".
- **Hero (verbatim):** "I write about technology, markets, and networks. Building in public at the frontier of AI. Recovering finance geek. Singaporean in San Francisco."
- **Content types:** essays, podcast, talks (video embeds), newsletter (10k+), a free book (*The Coding Career Handbook*), and an About page with **short, standard and long bios plus press photos**, a career narrative ("I took the scenic route"), and sponsor and advising info.
- **Design:** dark by default with a toggle, engraved-portrait illustration, serif headings, typographic ornaments (✶ ✧ ❧), medium density. It feels literary.
- **Credible:** the About page works as a press kit and career story. Section names with personality make it easy to scan.
- **Idea to steal:** a **"Currently causing interesting trouble"-style block** (what he's building now, e.g. the agent system and open-source pieces), and an About page with **copy-paste bios** that recruiters and hiring managers can drop into an intro email.

## 8. Matt Pocock
- **Role:** full-time AI engineering educator (AI Hero). Formerly Vercel and Total TypeScript. Author of the trending "skills" repo for coding agents.
- **URL:** https://www.mattpocock.com/ and https://www.aihero.dev/
- **Why similar:** the best-known TypeScript expert who moved into "real engineering with coding agents". His message that fundamentals matter more with agents is the same as James's mutation-testing bar.
- **Structure:** mattpocock.com is a minimal hub (Twitter, YouTube, Discord, FAQ, Course). aihero.dev has Courses and Newsletter, social-proof stats, a skills catalog in six categories, cohort, testimonials, recent content, and a creator bio.
- **Hero (verbatim):** mattpocock.com: "Hey, I'm Matt!" / "I'm an educator, content creator and engineer. I used to be a voice coach, then I worked at Vercel - now I teach AI engineering full-time!" aihero.dev: "Become a Real AI Hero" / "Engineering fundamentals aren't obsolete. They're your biggest advantage." Notable line: "Bad code is now the most expensive it has ever been".
- **Content types:** courses, videos, articles, free skills, newsletter.
- **Design:** clean and centered, with a portrait photo and company logos for social proof. Conversion-oriented.
- **Credible:** big, specific numbers (125,400+ developers, 8,500+ trained in cohorts, 25 free skills) and a crisp thesis.
- **Idea to steal:** **a one-line thesis plus a stats strip** on the homepage. For example, "Agents write the code. Mutation tests decide if it ships." followed by a row like `~60 packages · 5,300 agent-co-authored commits · SOC 2 · 20+ yrs`.

---

## Patterns across this cohort
- **The first sentence is a plain statement of role.** Lee, Thorsten and Harper lead with "I'm X. I do Y at Z (formerly W)." Nobody leads with adjectives. The current or last role plus the career path does the convincing.
- **Proof beats claims, and the best proof is quantified or inspectable.** Examples: Lee's "$260 in tokens / $56,848 saved", Simon's commit-level colophon naming co-author models, Matt's stats strip, Dex's GitHub star count. James's 5,300 co-authored commits and mutation-testing bar fit this pattern well.
- **Named ideas carry careers.** "Ralph Loop", "12-Factor Agents", "context engineering", "The Rise of the AI Engineer", "LLM codegen workflow atm". Each person is known for one canonical, linkable artifact. James needs one, most likely his agent workflow with mutation testing as the gate.
- **Minimal, text-first, mostly dark-capable design.** Single column, serif or quiet sans, few images beyond a portrait. Visual flair is rare and limited to personality touches (swyx's ornaments, Huntley's illustrated portrait, Harper's photos). Content density varies (Simon is dense, Lee is sparse), but nobody uses heavy UI.
- **There is a resume, just not called one.** It shows up as a timeline (Harper), "I took the scenic route" plus multiple bio lengths (swyx), a bio toggle (Lee), or a /bio page (Huntley). Writing is split into evergreen idea pages and dated posts, with a newsletter or RSS for repeat readers.

Sources: [simonwillison.net](https://simonwillison.net/), [simonwillison.net/about](https://simonwillison.net/about/), [tools colophon](https://tools.simonwillison.net/colophon), [leerob.com](https://leerob.com/), [leerob.com/agents](https://leerob.com/agents), [thorstenball.com](https://thorstenball.com/), [harperreed.com](https://harperreed.com/), [harper.blog](https://harper.blog/), [harper.blog codegen workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/), [ghuntley.com](https://ghuntley.com/), [ghuntley.com/bio](https://ghuntley.com/bio/), [github.com/dexhorthy](https://github.com/dexhorthy), [humanlayer.dev](https://www.humanlayer.dev/), [swyx.io](https://swyx.io/), [swyx.io/about](https://swyx.io/about), [mattpocock.com](https://www.mattpocock.com/), [aihero.dev](https://www.aihero.dev/), [kentcdodds.com](https://kentcdodds.com/), [kentcdodds.com/info](https://kentcdodds.com/info)
