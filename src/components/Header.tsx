import Image from "next/image";
import LanguageSwitcher from "./LanguageSwitcher";
import { IHeader, NavigationData } from "./interface/interface";
import Link from "next/link";

export const Header = ({ locale }: IHeader) => {
  const navigation: NavigationData = {
    en: { home: "Home", contact: "Contact" },
    es: { home: "Inicio", contact: "Contacto" },
  };

  const nav = navigation[locale];
  
  return (
    <header className="px-2 sm:px-4 py-2 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href={`/${locale}`} className="text-xl font-bold flex-shrink-0">
          <Image
            width={260}
            height={40}
            alt="logo"
            className="h-10 w-auto object-contain sm:h-10 max-w-[180px] sm:max-w-[220px] md:max-w-[260px]"
            src="/images/restroworks-logo.jpg"
            placeholder="blur"
            blurDataURL="/images/restroworks-logo.jpg"
            priority
          />
        </a>
        
        {/* Navigation */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <Link 
            href={`/${locale}`}
            className="text-sm sm:text-base hover:text-blue-600 transition-colors px-2 py-1"
          >
            {nav.home}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-sm sm:text-base hover:text-blue-600 transition-colors px-2 py-1"
          >
            {nav.contact}
          </Link>
          <div className="ml-1 sm:ml-2">
            <LanguageSwitcher current={locale} />
          </div>
        </nav>
      </div>
    </header>
  );
};