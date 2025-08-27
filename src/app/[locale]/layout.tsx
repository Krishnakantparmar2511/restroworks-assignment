import "../globals.css";
import { ReactNode } from "react";
import { defaultLocale, Locale, locales } from "../../i18n/setting";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import Image from "next/image";



export function generateStaticParams() {
  return locales.map((l) => ({ locale: l }));
}

export async function generateMetadata({ params }: { params: { locale: Locale } }) {
  const t = params.locale === "es" ? "Restroworks" : "Restroworks";
  const d = params.locale === "es" ? "Sitio web Next.js con CMS" : "CMS-powered Next.js website";
  return {
    title: { default: t, template: `%s | ${t}` },
    description: d,
    openGraph: { title: t, description: d, locale: params.locale, type: "website" }
  };
}

export default function RootLayout({ children, params }: { children: ReactNode; params: { locale: Locale } }) {
  const locale = params.locale ?? defaultLocale;
  
  const navigation = {
    en: { home: "Home", contact: "Contact" },
    es: { home: "Inicio", contact: "Contacto" }
  };
  
  const nav = navigation[locale];
  
  return (
    <html lang={locale}>
      <body className="bg-white text-gray-900">
        <header className="p-4 shadow-md flex justify-between items-center">
          <a href={`/${locale}`} className="text-xl font-bold"><Image width={260} alt="logo" height={40} src={"/images/restroworks-logo.jpg"}/></a>
          <nav className="flex gap-4"> 
            <a href={`/${locale}`}>{nav.home}</a>
            <a href={`/${locale}/contact`}>{nav.contact}</a>
            <LanguageSwitcher current={locale} />
          </nav>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="p-4 mt-8 border-t text-center">© 2025 Restroworks</footer>
      </body>
    </html>
  );
}
