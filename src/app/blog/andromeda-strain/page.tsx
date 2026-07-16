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
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 mt-0">{language === "es" ? "La amenaza de Andrómeda" : "The Andromeda Strain"}</h1>
          <p className="text-gray-400 text-sm mt-1 mb-0">{formatDate("2026-02-15", language)} · {t.blog.categories.reads}</p>
          <p className="text-gray-500 text-sm mt-2 mb-0">Michael Crichton · 1969</p>
          <p className="text-gray-500 text-sm mt-1 mb-0">Original: {language === "es" ? "Inglés (EE. UU.)" : "English (USA)"}</p>
          <p className="text-gray-500 text-sm mt-1 mb-0">{t.blog.edition}: {language === "es" ? "Inglés" : "English"}</p>
        </div>
      </div>

      {language === "es" ? (
        <>
          <p>Elegí empezar este libro porque ya había leído varios de los libros de Crichton en el pasado y los disfrute. El libro tomo un poco de tiempo antes de captar mi atención. Igual uno tiene que tener una memoria muy buena porque hay muchos personajes que vienen de contextos muy distintos. Me imagina que un libro como este fue muy innovador cuando fue publicado en 1968 pero pensándolo bien, em realidad esta historia viene directamente de una cultura que estaba obsesionada con el programa Apollo y la carrera para llegar a la luna primero. Me hubiera encantado leer este libro en ese entonces (1968) antes de que el universo de conocimiento del internet hubiera echo mochos de los conceptos en el libro menos impresionantes y mucho mas creíbles. La resolución del la historia también me dejo deseando mas, fue demasiado simple en mi opinión (aunque unos dirían que si fue congruente con la  realidad.</p>

          <p>En resumen, fue una historia entretenida y relativamente fácil de leer. Definitivamente leeré mas libros de Crichton en el futuro.</p>
        </>
      ) : (
        <>
          <p>I started reading this book as I had read several of Crichton&apos;s other books such as NEXT and overall enjoyed them. The book was a bit hard to get into at first. You also need to have a really good memory or a character map because there are many characters to keep up with. I would say it&apos;s kinda crazy that a book like this would be written in 1968…but looking back at the history it directly coincides with the Apollo moon landings. I wish I would have gotten the chance to read this book back then, before the universe of knowledge made things inside the book too believable and less mysterious. The resolution of the book was not what I expected, maybe some would say underwhelming.</p>

          <p>It was an entertaining story and a relatively easy read. Def will read some more Crichton in the future.</p>
        </>
      )}

    </article>
  );
}
