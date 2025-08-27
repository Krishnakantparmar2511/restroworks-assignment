import { locales } from "@/i18n/setting";
import type { MetadataRoute } from "next";


export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://restroworks-assignment.vercel.app"; 
  const paths = ["", "/contact"];
  const urls = [];
  for (const l of locales) {
    for (const p of paths) {
      urls.push({
        url: `${base}/${l}${p}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: p === "" ? 1 : 0.7
      });
    }
  }
  return urls;
}
