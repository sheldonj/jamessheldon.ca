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
} as const;

// Links in the header and the menu sheet.
export const navLinks = [
  { href: "/#now", label: "Now" },
  { href: "/contact", label: "Contact" },
] as const;

// Where the dot-grid canvas draws: "page" fills the whole window behind the
// content; "header" keeps it to the top-right of the header only.
export const dotField: "page" | "header" = "page";
