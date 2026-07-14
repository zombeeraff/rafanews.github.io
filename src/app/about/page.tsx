"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <article className="max-w-2xl mx-auto px-6 py-12 sm:py-20 prose prose-gray prose-lg">
      <h1>{t.about.title}</h1>

      <p>{t.about.intro}</p>

      <div className="flex items-center gap-6 not-prose">
        <a
          href="https://boxd.it/jOKqr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 no-underline hover:opacity-80"
        >
          <Image
            src="/letterboxd-mac-icon.png"
            alt="Letterboxd"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span>{t.about.letterboxd}</span>
        </a>

        <a
          href="https://www.discogs.com/user/raguirre/collection"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 no-underline hover:opacity-80"
        >
          <Image
            src="/photos/discogs.png"
            alt="Discogs"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span>{t.about.discogs}</span>
        </a>
      </div>

    </article>
  );
}
