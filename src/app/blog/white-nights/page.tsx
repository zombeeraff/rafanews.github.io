"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WhiteNights() {
  const { t } = useLanguage();

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 sm:py-20 prose prose-gray prose-lg">
      <Link href="/blog" className="not-prose text-sm text-gray-400 hover:text-gray-600 transition-colors">
        ← {t.blog.title}
      </Link>

      <div className="not-prose mt-6 mb-8 flex gap-6 items-start">
        <div className="shrink-0 w-28 rounded-md overflow-hidden shadow-md">
          <Image
            src="https://vtupbkrc2ny02vy6.public.blob.vercel-storage.com/whitenights.jpg"
            alt="White Nights book cover"
            width={619}
            height={1000}
            className="w-full h-auto"
            quality={90}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">White Nights</h1>
          <p className="text-gray-400 text-sm mt-1">April 9, 2026 · {t.blog.categories.reads}</p>
        </div>
      </div>

      {/* Write your post content here */}

    </article>
  );
}
