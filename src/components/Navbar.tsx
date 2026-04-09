"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/blog", label: t.nav.blog },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold tracking-tight">
          <Image
            src="/umbrella-logo.svg"
            alt="Umbrella logo"
            width={44}
            height={44}
          />
          Rafa
        </Link>

        <div className="flex items-center gap-4 sm:gap-8">
          <ul className="flex gap-4 sm:gap-8">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    pathname === link.href
                      ? "text-gray-900 font-medium"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <span className="text-lg leading-none" aria-hidden="true">
              {language === "en" ? "🇺🇸" : "🇲🇽"}
            </span>
            <button
              onClick={() => setLanguage(language === "en" ? "es" : "en")}
              className="text-xs font-medium px-2 py-1 rounded border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors"
              aria-label="Switch language"
            >
              {language === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
