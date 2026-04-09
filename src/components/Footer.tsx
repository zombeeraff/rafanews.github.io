"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export function Footer() {
  const { language, setLanguage } = useLanguage();

  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span>&copy; {new Date().getFullYear()} Rafa. All rights reserved.</span>
        <div className="flex items-center gap-2">
          <span className="text-lg leading-none" aria-hidden="true">
            {language === "en" ? "🇺🇸" : "🇲🇽"}
          </span>
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="text-xs font-medium px-2 py-1 rounded border border-gray-200 text-gray-400 hover:text-gray-900 hover:border-gray-400 transition-colors"
            aria-label="Switch language"
          >
            {language === "en" ? "ES" : "EN"}
          </button>
        </div>
      </div>
    </footer>
  );
}
