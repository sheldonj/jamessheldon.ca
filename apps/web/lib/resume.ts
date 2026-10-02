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
  headline: "Senior full-stack engineer · Founding engineer & CTO",
  contact: {
    location: "Calgary, AB · Remote",
    email: "sheldonj@gmail.com",
    linkedin: "linkedin.com/in/jamessheldon",
    github: "github.com/sheldonj",
    site: "jamessheldon.ca",
  },
  summary:
    "I'm a full-stack engineer with 20+ years of building web products, most recently as founding engineer and CTO at Cashew Research, where I built a generative AI platform for market research. I work across TypeScript, React, Next.js, Node.js, GraphQL, and PostgreSQL, and I'm as comfortable leading a team as I am shipping features myself. Before Cashew, I built search and discovery at Contra and led technical work for clients like Nissan at Critical Mass.",
  skills: [
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
    {
      label: "Leadership",
      items:
        "hiring, mentoring, architecture decisions, client and vendor consultation",
    },
  ],
  experience: [
    {
      company: "Cashew Research",
      dates: "2024 – 2026",
      title: "Chief Technology Officer (Founding Engineer)",
      location: "Remote (Calgary)",
      bullets: [
        "Built a generative AI platform for market research that generated targeted survey questions, analyzed research data, and turned results into actionable insights.",
        "Designed a methodology selection engine that recommended research approaches based on a study's goals.",
        "Built the platform on Next.js, tRPC, PostgreSQL, and Temporal in a monorepo.",
        "Co-authored most of the platform's code with Claude Code on an agent system I designed, with mutation testing as the review bar.",
        "Co-owned, approved, and operated the Terraform and CI; the platform engineer built most of it.",
        "Led the engineering team and instituted biweekly 1:1s.",
      ],
    },
    {
      company: "Contra",
      dates: "Apr 2021 – Jan 2024",
      title: "Senior Fullstack Engineer",
      location: "Remote",
      bullets: [
        "Designed and built the search and discovery feature at the core of Contra's talent discovery experience.",
        "Led teams through projects central to the product across Search & Discovery and Jobs.",
        "Turned product requirements into tested, well-structured code across the stack, often on tight deadlines.",
        "Mentored teammates while working as both an individual contributor and team lead.",
      ],
    },
    {
      company: "Critical Mass",
      dates: "Jan 2014 – Apr 2021",
      title: "Tech Director, Tech Lead, Senior Developer",
      location: "Calgary, AB",
      bullets: [
        "Set departmental practices and development standards with fellow tech directors and leads.",
        "Hired, mentored, and staffed developers, and supported their career development at the department level.",
        "Guided architecture decisions with project developers and leads, and ran technical consultations with clients and third-party vendors.",
        "Delivered Nissan/Infiniti Next Gen Shopping Tools, the LodgeLink platform rebuild, Nissan Dealer Inventory, the Nissan mobile rebuild, and a series of campaign vehicle configurators.",
      ],
    },
  ] satisfies Role[],
  earlier: [
    {
      company: "Sajak & Farki",
      title: "Front-end Developer",
      summary:
        "Built JavaScript admin dashboards, social campaigns, and Facebook apps; helped set build, development, and QA standards.",
    },
    {
      company: "Valtech (formerly NLC)",
      title: "Developer",
      summary:
        "Built the front end of a SharePoint 2010 performance-indicator dashboard with an agile team across North America.",
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
        "Led a small team and built a custom CMS on .NET 4 and ASP.NET MVC with Twitter, Facebook, Google Maps, OpenID, Chase, and Moneris integrations.",
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

export const resumeFiles = {
  pdf: "/james-sheldon-resume.pdf",
  docx: "/james-sheldon-resume.docx",
} as const;
