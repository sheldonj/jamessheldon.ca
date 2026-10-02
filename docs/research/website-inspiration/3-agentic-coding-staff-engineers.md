# Cohort 3: Agentic coding / AI-assisted engineering practitioners

Research date: 2026-10-02. Every site below was fetched live. Direct homepage fetches were blocked until a search had surfaced the URL; after that every site loaded and none were down. Quotes come from the fetched pages, but the fetch tool summarizes, so check the exact hero wording on the live site before quoting it publicly.

Chosen (8): Simon Willison, Mitchell Hashimoto, Armin Ronacher, Geoffrey Huntley, Kent Beck, Addy Osmani, Peter Steinberger, Thorsten Ball. Birgitta Böckeler was considered and left out. Her "Exploring Generative AI" series (https://martinfowler.com/articles/exploring-gen-ai.html) is strong, but it lives on martinfowler.com. Her own site (birgitta.info) is not a showcase.

---

## 1. Simon Willison — simonwillison.net
- **Role:** Independent open-source developer. He created Datasette and LLM and co-created Django. He used to be an engineering director at Eventbrite and co-founded Lanyrd (YC).
- **Why relevant:** He's the best-known public writer on "agentic engineering" as a discipline, with a test-first, quality-minded framing. That's the same area as James's mutation-testing review bar.
- **Structure/nav:** About · Subscribe · TILs (separate subdomain) · Tools · Entries | Links | Quotes | Notes | Guides | Elsewhere. Sidebar of popular tags with counts (ai 2,258, llm 635…). The footer has a year archive going back to 2002, plus Disclosures and Colophon.
- **Hero:** There isn't one. The homepage is a reverse-chronological stream. The About page opens: "Simon Willison is the creator of Datasette, an open source tool for exploring and publishing data."
- **Content types:** Long entries, linkblog "blogmarks", quotes, short notes, TILs, small tools, a book-like evergreen "Guide", and live blogs.
- **Best AI-coding showcase:**
  - Agentic Engineering Patterns guide, 16 chapters: https://simonwillison.net/guides/ (announcement: https://simonwillison.net/2026/Feb/23/agentic-engineering-patterns/)
  - "Red/green TDD": https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/
  - "AI should help us produce better code": https://simonwillison.net/guides/agentic-engineering-patterns/better-code/
  - "Anti-patterns: things to avoid": https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/
  - Tag page: https://simonwillison.net/tags/agentic-engineering/
- **Visual design:** Plain, dense, text-first and chronological. It doesn't look designed, and that reads as authentic.
- **Credibility signal:** Volume plus receipts. Every claim links to a working tool or repo. The detailed Disclosures section (sponsors, vendor previews, consulting) shows integrity.
- **Steal this:** Write a short evergreen **"Guide"** of chapters, kept separate from the blog. For example, "How I run a coding-agent team: mutation testing as the review bar." Give it chapters such as "Why line coverage lies to agents", "Mutation score gates", "Prompts I use". A guide reads as a body of method, not a single opinion post.

## 2. Mitchell Hashimoto — mitchellh.com
- **Role:** Co-founder of Superlogical. He previously co-founded HashiCorp, where he was CEO for about 4 years and CTO for about 5. He created Ghostty.
- **Why relevant:** He went from founder/CTO to a public account of disciplined agent adoption. The arc fits James's CTO-to-staff/founding positioning closely.
- **Structure/nav:** Home · About · Writing · Misc, with project pages such as /ghostty. The footer has email, Twitter, Mastodon, GitHub and LinkedIn.
- **Hero (quoted):** "I'm a developer living in Los Angeles, CA. I'm currently the co-founder of Superlogical. I previously co-founded HashiCorp."
- **Content types:** Essays, project pages, and personal posts on banking and donations.
- **Best AI-coding showcase:** "My AI Adoption Journey", https://mitchellh.com/writing/my-ai-adoption-journey. It lays out six steps: drop the chatbot → reproduce your own work → end-of-day agents → outsource the slam dunks → **engineer the harness** (AGENTS.md plus custom verification tools) → always have an agent running. Also "The New Normal": https://mitchellh.com/writing/the-new-normal
- **Visual design:** Black on white, one column, generous whitespace, a table of contents and footnotes on long posts. Very minimal.
- **Credibility signal:** A three-sentence hero with no adjectives. The track record does the talking. The post is honest about skepticism and gives concrete numbers ("10–20%" daily agent utilization).
- **Steal this:** A **numbered maturity-ladder post** of James's own: "From Copilot to 5,300 co-authored commits: the 6 stages of building an agent system at Cashew." "Engineer the harness" is the stage where James's mutation-testing gate fits.

## 3. Armin Ronacher — lucumr.pocoo.org
- **Role:** Founder of Earendil (a new company) after 10 years at Sentry. He created Flask and Jinja2.
- **Why relevant:** He has one of the most-read bodies of work on agentic coding *practice*, written from the point of view of a senior engineer who turned founder.
- **Structure/nav:** blog · archive · projects · travel · talks · about. The footer has a CC BY-NC license, contact links, a sponsor link, an imprint and **an "AI transparency" note**, plus feeds.
- **Hero:** The site title is "Armin Ronacher's Thoughts and Writings". The About page opens: "Hi, my name is Armin Ronacher! I'm deeply passionate about building teams, creating products, and contributing to the Open Source community."
- **Content types:** Long essays, a projects list and talks.
- **Best AI-coding showcase:**
  - "Agentic Coding Recommendations": https://lucumr.pocoo.org/2025/6/12/agentic-coding/
  - "Agentic Coding Things That Didn't Work": https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/
  - "Agent Design Is Still Hard": https://lucumr.pocoo.org/2025/11/21/agents-are-hard/
  - "Your MCP Doesn't Need 30 Tools: It Needs Code": https://lucumr.pocoo.org/2025/8/18/code-mcps/
  - "A Year Of Vibes" (a year-end retrospective of 36 posts): https://lucumr.pocoo.org/2025/12/22/a-year-of-vibes/
  - "Fast and Hard Code" (Aug 2026): https://lucumr.pocoo.org/2026/8/22/fast-hard-code/
- **Visual design:** Classic minimal text blog, all typography and no imagery.
- **Credibility signal:** He publishes failures ("Things That Didn't Work") alongside recommendations, and admits uncertainty ("nothing beyond vibes to back up my preference for Claude"). That kind of candor reads as senior judgement.
- **Steal this:** A paired **"What worked / What didn't"** post about the Cashew agent system. Also, an **AI-transparency line in the footer** stating how James uses AI in his writing versus his code. That's on-brand for someone whose differentiator is AI co-authorship.

## 4. Geoffrey Huntley — ghuntley.com
- **Role:** Creator of the "Ralph Wiggum Loop" and founder of Latent Patterns (AI education). He was a technology lead at Canva and Optiver. His older /resume page lists "Principal Software Engineer at Amp", so the site isn't fully consistent.
- **Why relevant:** He created a named agentic technique that went viral. That's the clearest case in this cohort of turning a method into a personal brand.
- **Structure/nav:** Home · Lately · Media · Workshops · Speaking · Disclosures · Contact · Subscribe. It runs on Ghost and has a newsletter.
- **Hero (quoted):** "It's an uncertain time for our profession, but one thing is certain—things will change. Drafting used to require a room of engineers, but then CAD came along…" The bio opens: "Geoffrey Huntley is the creator of the Ralph Wiggum Loop (aka "Ralph Loop"), the viral brute-force AI agent technique…"
- **Content types:** Opinion essays, free workshops, talk recaps and a hire-me resume page (/resume) that lists services offered.
- **Best AI-coding showcase:**
  - "Ralph Wiggum as a 'software engineer'": https://ghuntley.com/ralph/
  - "everything is a ralph loop": https://ghuntley.com/loop/
  - "how to build a coding agent: free workshop": https://ghuntley.com/agent/
  - "engineer away the slop": https://ghuntley.com/slop/
  - "the eighteen-month recap: AI Engineer, Singapore, May 2026": https://ghuntley.com/eighteen-month-recap/
- **Visual design:** Ghost theme with a card grid, a black-and-white tattoo-style illustrated avatar, and category tags.
- **Credibility signal:** A **named method** plus a free workshop plus conference recaps. The site also has a booking link ("ghuntley.com/meet") for coffee chats.
- **Steal this:** **Name James's method.** For example, a one-word label for "mutation testing as the agent review bar", with its own permalink page. Pair it with a small repo or workshop so hiring managers can repeat the phrase.

## 5. Kent Beck — kentbeck.com (+ Tidy First? newsletter)
- **Role:** Independent author and coach. He created XP and TDD and wrote *Tidy First?*.
- **Why relevant:** He's the leading voice saying AI coding needs *tests as the guardrail*. That's the same premise as James's mutation-testing bar, from the person who invented TDD.
- **Structure/nav:** Work · Newsletter · Art · Podcast · Speaking · Coaching · Partner with Kent.
- **Hero (quoted):** "Creator of Extreme Programming and Test-Driven Development. Author of Tidy First? Painter of cityscapes on glass. Still raising the bar after 40 years."
- **Content types:** Substack newsletter (the homepage cites 123K+ subscribers across 195 countries and a 32% open rate), books, art gallery, speaking and coaching.
- **Best AI-coding showcase:**
  - "Augmented Coding: Beyond the Vibes" (Jun 2025): https://newsletter.kentbeck.com/p/augmented-coding-beyond-the-vibes. He built a B+ tree library under strict TDD and lists warning signs, including the AI "cheating, for example by disabling or deleting tests".
  - "Genie" series: https://tidyfirst.substack.com/t/genies
  - "Augmented Coding is Good For Exploration": https://newsletter.kentbeck.com/p/augmented-coding-is-good-for-exploration
- **Visual design:** Modern, photo-heavy portraits, an art gallery and lots of whitespace.
- **Credibility signal:** A hero built from four short, concrete claims and a human detail (glass painting). The audience numbers on the homepage serve as social proof.
- **Steal this:** A **four-fragment hero** in the same rhythm. For example: "Founding engineer & CTO. Shipped a 60-package AI SaaS monorepo through SOC 2. 5,300 commits co-authored with Claude Code. Mutation testing is my review bar." Also, cite the "agent deletes tests" failure mode and explain how mutation testing catches what TDD alone misses.

## 6. Addy Osmani — addyosmani.com
- **Role:** Member of Technical Staff at Anthropic, working on Claude Code. He was previously at Google Chrome.
- **Why relevant:** He is the most "packaged" senior-engineer brand for AI-assisted engineering, with books, a vocabulary of terms and a clear career narrative.
- **Structure/nav:** GitHub · Press · Biography · Built · LinkedIn · Twitter · Newsletter · Blog. The homepage sections are Books, Case Studies, Featured AI Articles, Featured Thoughts, Open-source, and Podcasts/Talks/Film/Blog.
- **Hero:** "Engineering and evangelism leader". The page title is "Addy Osmani — Engineering, AI and Web Performance".
- **Content types:** O'Reilly books (*Agentic Engineering*, *Beyond Vibe Coding*…), case studies (eBay, Netflix, Tinder…), blog, newsletter and open source (agent-skills).
- **Best AI-coding showcase:**
  - "Agentic Engineering" (Feb 2026): https://addyosmani.com/blog/agentic-engineering/. Key quote: "The single biggest differentiator between agentic engineering and vibe coding is testing."
  - "My LLM coding workflow going into 2026": https://addyosmani.com/blog/ai-coding-workflow/
  - "The future of agentic coding: conductors to orchestrators": https://addyosmani.com/blog/future-agentic-coding/
  - "Agent Skills": https://addyosmani.com/blog/agent-skills/
  - Homepage features include "Agentic Code Quality", "Brownfield Agentic Engineering" and "The Agent-Era Career".
- **Visual design:** Polished, with a pink/magenta brand accent (#eb298c), a gradient background, a portrait, and card grids for books and case studies.
- **Credibility signal:** **Case studies with recognizable company names** and impact, plus books. The homepage works like a portfolio, not just a blog.
- **Steal this:** A **"Case studies" card row**: Cashew (agent system, SOC 2, monorepo), Contra and Critical Mass, each with one metric. Also a "Featured AI writing" strip on the homepage, so the differentiator shows above the fold.

## 7. Peter Steinberger — steipete.me
- **Role:** Joined OpenAI in Feb 2026 to work on agents. He created OpenClaw and founded PSPDFKit.
- **Why relevant:** He's a founder and IC who rebuilt his whole identity around shipping with agents, and he writes in detail about his workflow.
- **Structure/nav:** Homepage plus All Posts (/posts) and tags (/tags/ai), with social links and RSS. Built with Astro and view transitions.
- **Hero (quoted):** "AI-powered tools from Swift roots to web frontiers. Every commit lands on GitHub for you to fork & remix."
- **Content types:** Workflow posts, tool launches (Poltergeist), monthly reading lists, and announcements. Each post shows a reading time.
- **Best AI-coding showcase:**
  - "Just Talk To It - the no-bs Way of Agentic Engineering" (Oct 2025): https://steipete.me/posts/just-talk-to-it
  - "Shipping at Inference-Speed" (Dec 2025): https://steipete.me/posts/2025/shipping-at-inference-speed
  - "My Current AI Dev Workflow" (Aug 2025): https://steipete.me/posts/2025/optimal-ai-development-workflow
  - "Claude Code is My Computer" (Jun 2025): https://steipete.me/posts/2025/claude-code-is-my-computer
  - "Essential Reading for Agentic Engineers - August 2025": https://steipete.me/posts/2025/essential-reading-august-2025
- **Visual design:** Minimal developer-portfolio look, avatar-led, with monospace touches, a theme toggle and a responsive layout.
- **Credibility signal:** "Every commit lands on GitHub". He offers verifiable output instead of claims, and keeps his workflow posts updated over time.
- **Steal this:** A **"/workflow" page James keeps current**: his actual agent topology, CLAUDE.md conventions, mutation-testing gate and tool list, with a "last updated" date. Hiring managers for AI-product roles will click it first.

## 8. Thorsten Ball — thorstenball.com
- **Role:** Co-founder and co-creator of Amp (coding agent). He was previously at Sourcegraph and Zed, and wrote *Writing an Interpreter/Compiler in Go*.
- **Why relevant:** He builds a coding agent and writes a weekly newsletter on AI and engineering. He also shows how a single homepage can link out to books, a newsletter and talks.
- **Structure/nav:** About · Books · Blog · Podcasts · Talks · Register Spill (newsletter) · Misc · Contact.
- **Hero (quoted):** "Hello! I'm Thorsten. I'm a co-founder and co-creator of Amp. Previously, I worked at Sourcegraph; before returning there, I worked at Zed…"
- **Content types:** Weekly "Joy & Curiosity" link digests (#100 as of Sep 2026), essays, books and podcasts.
- **Best AI-coding showcase:**
  - "What I believe about the future of software development" (Sep 19, 2026): https://thorstenball.com/blog/2026/09/19/what-i-believe-about-the-future-of-software-development/. It's a scannable list of bolded beliefs, e.g. "Humans will only review the system and its composition, but it won't be in PRs."
  - "Professional Programming: The First 10 Years": https://thorstenball.com/blog/2022/05/17/professional-programming-the-first-10-years/
  - Register Spill newsletter: https://registerspill.thorstenball.com/about
- **Visual design:** Minimal, square profile photo, light/dark mode, a simple horizontal nav, and an atom feed and newsletter in the footer.
- **Credibility signal:** A plain first-person hero naming the companies he has worked at. A newsletter numbered past #100 shows he keeps it up.
- **Steal this:** A **"What I believe" manifesto post** about agentic engineering, written as bolded, numbered beliefs. For example: "Line coverage is meaningless when an agent writes the tests", or "Review the mutation score, not the diff". A hiring manager can skim it in 60 seconds to judge his engineering philosophy.

---

## Patterns across this cohort
1. **Short, factual heroes win.** Hashimoto, Ball and Beck use one to three sentences with role, notable companies and one human detail. Nobody uses buzzword taglines. James should lead with concrete facts: founding engineer and CTO, 60-package monorepo, SOC 2, 5,300 agent-co-authored commits.
2. **AI expertise is shown through method, not claims.** The strongest assets are named or structured methods: Willison's *Agentic Engineering Patterns* guide, Hashimoto's six-step ladder, Huntley's "Ralph Loop", Beck's TDD-guarded "augmented coding". James should give his mutation-testing-as-review-bar approach a name and an evergreen page.
3. **Quality and testing are the shared credibility anchor.** Beck (tests the AI must not delete), Osmani ("the single biggest differentiator… is testing"), Willison (red/green TDD, "AI should help us produce better code") and Hashimoto ("engineer the harness") all set disciplined agentic engineering against vibe coding. Mutation testing is one step past what most of them describe, so James should present it as that step.
4. **Candor and receipts beat polish.** Ronacher's "things that didn't work", Willison's disclosures, Steinberger's "every commit lands on GitHub" and Hashimoto's honesty about being a skeptic all read as senior judgement. The designs are mostly minimal and text-first. Only Osmani and Beck use a polished portfolio look.
5. **Durable, updated hubs, not one-off posts.** Most have a newsletter or a recurring series (Ball's #100 digests, Beck's Substack, Steinberger's monthly reading lists and updated workflow posts, Huntley's recaps) and a homepage strip or tag page collecting their AI writing. For James, a minimum version is a `/workflow` or `/agents` page with a "last updated" date, two or three flagship posts linked from the homepage, and a case-study row (Osmani-style) that gives the Cashew agent system first billing.
