"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
        {t.home.heading}
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
        {t.home.subheading}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Link
          href="/about"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          {t.home.aboutBtn}
        </Link>
        <Link
          href="/gallery"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-500 transition-colors"
        >
          {t.home.galleryBtn}
        </Link>
      </div>
    </section>
  );
}
