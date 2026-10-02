import type { Metadata } from "next";
import { site } from "./site";

// Next.js replaces (not merges) openGraph and twitter when a page sets them,
// and app/opengraph-image.tsx then only reaches the home page, so pages
// spread these to keep the site name, type and share image.
const image = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "James Sheldon, full-stack engineer and founding CTO",
};

export const openGraph = {
  type: "profile",
  url: "/",
  siteName: site.name,
  title: site.title,
  description: site.description,
  locale: "en_CA",
  firstName: "James",
  lastName: "Sheldon",
  images: [image],
} satisfies Metadata["openGraph"];

export const twitter = {
  card: "summary_large_image",
  title: site.title,
  description: site.description,
  images: [image],
} satisfies Metadata["twitter"];
