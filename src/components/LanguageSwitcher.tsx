"use client";
import { usePathname, useRouter } from "next/navigation";
import { getPathWithoutLocale } from "../i18n/request";
import { locales } from "../i18n/setting";


export default function LanguageSwitcher({ current }: { current: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const basePath = getPathWithoutLocale(pathname || "/");
  return (
    <div className="inline-flex gap-2" role="group" aria-label="Language switcher">
      {locales.map((l) => (
        <button
          key={l}
          onClick={() => router.push(`/${l}${basePath}`)}
          className={`px-3 py-1 rounded ${current === l ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          aria-pressed={current === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
