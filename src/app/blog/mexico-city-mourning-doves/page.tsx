"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const THUMBNAIL = "https://vtupbkrc2ny02vy6.public.blob.vercel-storage.com/IMG_4949.heic";

export default function MexicoCityMourningDoves() {
  const { t } = useLanguage();

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 sm:py-20 prose prose-gray prose-lg">
      <Link href="/blog" className="not-prose text-sm text-gray-400 hover:text-gray-600 transition-colors">
        ← {t.blog.title}
      </Link>

      <div className="not-prose mt-6 mb-8 flex gap-6 items-start">
        <div className="shrink-0 w-44 rounded-md overflow-hidden shadow-md">
          <Image
            src={THUMBNAIL}
            alt="Mexico City / Mourning Doves thumbnail"
            width={800}
            height={600}
            className="w-full h-auto"
            quality={90}
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mt-0">Mexico City / Mourning Doves</h1>
          <p className="text-gray-400 text-sm mt-1 mb-0">April 10, 2026 · {t.blog.categories.travel}</p>
        </div>
      </div>

      {/* Write your post content here */}

    </article>
  );
}
