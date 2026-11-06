export const site = {
  name: "James Sheldon",
  url: "https://jamessheldon.ca",
  title: "James Sheldon · Full-stack engineer and founding CTO",
  description:
    "James Sheldon is a full-stack engineer in Calgary with 20+ years of building web products, most recently as founding engineer and CTO at Cashew Research.",
  role: "Founding engineer & CTO · TypeScript · AI-augmented engineering",
  location: "Calgary, Alberta · Remote",
  email: "sheldonj@gmail.com",
  github: "github.com/sheldonj",
  linkedin: "linkedin.com/in/jamessheldon",
  resume: "/resume",
  calendly: "https://calendly.com/james_sheldon/30min",
  // Job-search status badge (app/open-to-work.tsx). Set to "" to hide it.
  openToWork: "Open to new roles",
} as const;

// "Next" section on the homepage (what work James wants next), which the openToWork badge links to.
// Update `updated` whenever the wording changes. Set `intro` to "" to hide it.
export const lookingFor = {
  heading: "Next",
  intro:
    "I\u2019m looking for my next full-time role, where I can build AI products hands-on and help shape how the team builds.",
  details: [
    { label: "Role", value: "Staff or principal engineer, founding engineer, or head of engineering" },
    { label: "Company", value: "An early or growth-stage product company building with AI" },
    { label: "Setup", value: "Remote from Calgary. Open to hybrid in Calgary" },
    { label: "Work", value: "Full-time. Open to contract or fractional CTO work" },
    { label: "Start", value: "Available now" },
  ],
  updated: { iso: "2026-11", label: "November 2026" },
} as const;

// Links in the header and the menu sheet.
export const navLinks = [
  { href: "/#now", label: "Now" },
  { href: "/contact", label: "Contact" },
] as const;

// Where the dot-grid canvas draws: "page" fills the whole window behind the
// content; "header" keeps it to the top-right of the header only.
export const dotField: "page" | "header" = "page";
