import { locales } from "@/i18n/setting";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = "https://restroworks-assignment.vercel.app";
  const sitemaps = locales.map(locale => `${base}/${locale}/sitemap.xml`);
  
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: sitemaps
  };
}
