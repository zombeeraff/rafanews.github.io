"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { formatDate } from "@/lib/formatDate";

const THUMBNAIL = "https://vtupbkrc2ny02vy6.public.blob.vercel-storage.com/berlin.png";

export default function Berlin() {
  const { t, language } = useLanguage();

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 sm:py-20 prose prose-gray prose-lg">
      <Link href="/blog" className="not-prose text-sm text-gray-400 hover:text-gray-600 transition-colors">
        ← {t.blog.title}
      </Link>

      <div className="not-prose mt-6 mb-8 flex gap-6 items-start">
        <div className="shrink-0 w-44 rounded-md overflow-hidden shadow-md">
          <Image
            src={THUMBNAIL}
            alt="Berlin thumbnail"
            width={800}
            height={600}
            className="w-full h-auto"
            quality={90}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">{language === "es" ? "Berlín" : "Berlin"}</h1>
          <p className="text-gray-400 text-sm mt-1">{formatDate("2026-01-21", language)} · {t.blog.categories.travel}</p>
        </div>
      </div>

      {/* Write your post content here */}

    </article>
  );
}
