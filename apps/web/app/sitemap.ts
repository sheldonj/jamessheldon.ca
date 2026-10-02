import type { MetadataRoute } from "next";
import { site } from "../lib/site";
import { resumeUpdated } from "../lib/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    {
      url: `${site.url}/resume`,
      lastModified: resumeUpdated,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
