import { NextRequest } from "next/server";
import { locales, defaultLocale } from "./setting";

export function getLocaleFromPath(pathname: string) {
  const seg = pathname.split("/").filter(Boolean)[0];
  return locales.includes(seg as any) ? (seg as typeof locales[number]) : null;
}

export function getPathWithoutLocale(pathname: string) {
  const maybe = getLocaleFromPath(pathname);
  if (!maybe) return pathname;
  const parts = pathname.split("/").filter(Boolean).slice(1);
  return "/" + parts.join("/");
}

export function detectLocale(req: NextRequest) {
  const inPath = getLocaleFromPath(req.nextUrl.pathname);
  if (inPath) return inPath;
  const header = req.headers.get("accept-language") || "";
  if (header.toLowerCase().includes("es")) return "es";
  return defaultLocale;
}
