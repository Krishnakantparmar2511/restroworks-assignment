import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


import { detectLocale } from "./i18n/request";
import { locales } from "./i18n/setting";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isAsset = pathname.startsWith("/_next") || pathname.startsWith("/api") || pathname.includes(".");
  if (isAsset) return NextResponse.next();

  const inPath = locales.some((l) => pathname.startsWith(`/${l}`));
  if (!inPath) {
    const locale = detectLocale(req);
    const url = req.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next|.*\\..*).*)"] };
