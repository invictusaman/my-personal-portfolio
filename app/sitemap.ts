import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://amanbhattarai.com.np",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
        url: "https://amanbhattarai.com.np/blog",
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      },
    {
      url: "https://amanbhattarai.com.np/projects",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://amanbhattarai.com.np/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
        url: "https://amanbhattarai.com.np/resume.pdf",
        lastModified: new Date(),
        changeFrequency: "yearly",
        priority: 0.5,
      },
  ];
}
