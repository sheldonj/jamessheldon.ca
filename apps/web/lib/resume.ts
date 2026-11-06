/**
 * The public resume: the one source for /resume and the Word download
 * (scripts/build-resume.ts writes public/james-sheldon-resume.docx from it).
 * The PDF is rendered from docs/resume/fullstack.html by the same script;
 * keep the two in step when the wording changes.
 *
 * Published-materials rules apply (job-search CAREER-CONTEXT §10): no phone
 * number, no team sizes, no contribution-volume counts, no measured values.
 */

export type Role = {
  company: string;
  dates: string;
  title: string;
  location: string;
  bullets: string[];
};

export type EarlierRole = { company: string; title: string; summary: string };

export const resume = {
  name: { first: "James", last: "Sheldon" },
  headline: "Founding engineer & CTO · Full-stack TypeScript · AI products",
  contact: {
    location: "Calgary, Canada · Remote",
    email: "sheldonj@gmail.com",
    linkedin: "linkedin.com/in/jamessheldon",
    github: "github.com/sheldonj",
    site: "jamessheldon.ca",
  },
  summary:
    "Founding engineer and CTO who builds AI products end to end. Most recently I built Cashew Research's generative AI platform for market research and led its engineering team. I work across TypeScript, React, Next.js, Node.js, GraphQL, and PostgreSQL, and I'm as comfortable setting technical direction as I am shipping features myself. Before Cashew, I built search and discovery at Contra and led technical work for clients like Nissan at Critical Mass.",
  skills: [
    {
      label: "Leadership",
      items: "technical strategy, architecture, hiring, mentoring",
    },
    { label: "Front-end", items: "TypeScript, JavaScript, React, Next.js" },
    { label: "Back-end", items: "Node.js, GraphQL, tRPC, Temporal" },
    {
      label: "Data",
      items: "PostgreSQL, Prisma, ZenStack, MongoDB, MSSQL, Meilisearch",
    },
    {
      label: "Testing and delivery",
      items:
        "Playwright, Cypress, Jest, Vitest, mutation testing, CI/CD, Terraform",
    },
    {
      label: "AI-assisted development",
      items: "Claude Code, agent-based workflows",
    },
  ],
  experience: [
    {
      company: "Cashew Research",
      dates: "2024 – 2026",
      title: "Chief Technology Officer (Founding Engineer)",
      location: "Remote (Calgary)",
      bullets: [
        "Built a generative AI platform for market research that wrote targeted survey questions, analyzed responses, and summarized the findings.",
        "Designed a methodology selection engine that recommended research approaches based on a study's goals.",
        "Chose and built the architecture: a Next.js and tRPC monorepo on PostgreSQL, with Temporal for long-running workflows.",
        "Designed the agent-based development system we built the platform with (Claude Code), using mutation testing as the quality gate for agent-written code.",
        "Owned infrastructure and delivery (Terraform, CI/CD), setting direction with our platform engineer.",
        "Led the engineering team, setting its technical direction, review standards, and delivery process.",
      ],
    },
    {
      company: "Contra",
      dates: "Apr 2021 – Jan 2024",
      title: "Senior Fullstack Engineer",
      location: "Remote",
      bullets: [
        "Designed and built search and discovery, the core of how clients find talent on Contra.",
        "Led the Search & Discovery and Jobs teams through core product projects, from design to production.",
        "Mentored teammates while working as both an individual contributor and team lead.",
      ],
    },
    {
      company: "Critical Mass",
      dates: "Jan 2014 – Apr 2021",
      title: "Tech Director, Tech Lead, Senior Developer",
      location: "Calgary, Canada",
      bullets: [
        "Set departmental practices and development standards with fellow tech directors and leads.",
        "Hired, mentored, and staffed developers, and supported their career development at the department level.",
        "Guided architecture decisions with project developers and leads, and ran technical consultations with clients and third-party vendors.",
        "Delivered Nissan and Infiniti's next-gen shopping tools and dealer inventory, the LodgeLink platform rebuild, the Nissan mobile rebuild, and a series of campaign vehicle configurators.",
      ],
    },
  ] satisfies Role[],
  earlier: [
    {
      company: "Sajak & Farki",
      title: "Front-end Developer",
      summary:
        "Built JavaScript admin dashboards and social campaigns; helped set build, development, and QA standards.",
    },
    {
      company: "Valtech (formerly NLC)",
      title: "Developer",
      summary:
        "Built the front end of a performance-indicator dashboard with an agile team across North America.",
    },
    {
      company: "Bryan Mills Iradesso",
      title: "Web Solutions Specialist",
      summary:
        "Managed developers and designers on corporate websites, intranets, and mobile apps; wrote RFP responses and requirements.",
    },
    {
      company: "ZGM Modern Marketing Partners",
      title: "Lead Web Developer",
      summary:
        "Led a small team and built a custom .NET CMS with social, mapping, and payment integrations.",
    },
    {
      company: "Sprung Instant Structures",
      title: "Web Developer / Graphic Designer",
      summary:
        "Built a photo management system for international marketing staff and maintained the company website.",
    },
  ] satisfies EarlierRole[],
  education: {
    school: "Mount Royal University",
    detail:
      "Bachelor of Communications, Electronic Publishing; Certificate of Arts and Sciences",
  },
  recommendations: "linkedin.com/in/jamessheldon/details/recommendations",
} as const;

/** Bump when the resume content changes (feeds the sitemap and the page's JSON-LD). */
export const resumeUpdated = "2026-11-06";

export const resumeFiles = {
  pdf: "/james-sheldon-resume.pdf",
  docx: "/james-sheldon-resume.docx",
} as const;
