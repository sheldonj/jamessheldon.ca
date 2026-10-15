import { site } from "./site";

// schema.org nodes shared by every page's JSON-LD. Google reads each page on
// its own, so a page that is about James (home, /resume) carries the full
// Person rather than only a reference to its @id.
export const personId = `${site.url}/#person`;
export const websiteId = `${site.url}/#website`;

export const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: site.url,
  name: site.name,
  publisher: { "@id": personId },
};

export const person = {
  "@type": "Person",
  "@id": personId,
  name: site.name,
  givenName: "James",
  familyName: "Sheldon",
  url: site.url,
  image: `${site.url}/james-sheldon.jpg`,
  email: `mailto:${site.email}`,
  jobTitle: "Full-stack engineer and founding CTO",
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  alumniOf: ["Cashew Research", "Contra", "Critical Mass"].map((name) => ({
    "@type": "Organization",
    name,
  })),
  // Canonical profile URLs (LinkedIn redirects the bare host to www).
  sameAs: [`https://www.${site.linkedin}`, `https://${site.github}`],
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "GraphQL",
    "PostgreSQL",
    "Generative AI",
    "AI agents",
  ],
};
