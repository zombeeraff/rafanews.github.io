"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatDate } from "@/lib/formatDate";

export default function AndromedaStrain() {
  const { t, language } = useLanguage();

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 sm:py-20 prose prose-gray prose-lg">
      <Link href="/blog" className="not-prose text-sm text-gray-400 hover:text-gray-600 transition-colors">
        ← {t.blog.title}
      </Link>

      <div className="not-prose mt-6 mb-8 flex gap-6 items-start">
        <div className="shrink-0 w-28 rounded-md overflow-hidden shadow-md">
          <Image
            src="/photos/TheAndromedaStrain.jpg"
            alt="The Andromeda Strain book cover"
            width={619}
            height={1000}
            className="w-full h-auto"
            quality={90}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mt-0">The Andromeda Strain</h1>
          <p className="text-gray-400 text-sm mt-1 mb-0">{formatDate("2026-02-15", language)} · {t.blog.categories.reads}</p>
          <p className="text-gray-500 text-sm mt-2 mb-0">Michael Crichton · 1969</p>
          <p className="text-gray-500 text-sm mt-1 mb-0">United States</p>
        </div>
      </div>

      <p>I started reading this book as I had read several of Crichton&apos;s other books such as NEXT and overall enjoyed them. The book was a bit hard to get into at first. You also need to have a really good memory or a character map because there are many characters to keep up with. I would say it&apos;s kinda crazy that a book like this would be written in 1968…but looking back at the history it directly coincides with the Apollo moon landings. I wish I would have gotten the chance to read this book back then, before the universe of knowledge made things inside the book too believable and less mysterious. The resolution of the book was not what I expected, maybe some would say underwhelming.</p>

      <p>It was an entertaining story and a relatively easy read. Def will read some more Crichton in the future.</p>

    </article>
  );
}
