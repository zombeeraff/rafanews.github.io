"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Replace these with your actual photos.
// Drop high-res images into /public/photos/ and reference them here.
const photos = [
  { src: "/photos/DSC01576.JPG", alt: "DSC01576", width: 5472, height: 3648 },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {t.gallery.title}
      </h1>
      <p className="text-gray-600 mb-12">{t.gallery.subtitle}</p>

      {/* Responsive masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelected(index)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              className="w-full h-auto hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelected(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
            <Image
              src={photos[selected].src}
              alt={photos[selected].alt}
              width={photos[selected].width}
              height={photos[selected].height}
              className="object-contain max-h-[90vh] w-auto rounded-lg"
              sizes="100vw"
              quality={90}
            />
          </div>
        </div>
      )}
    </section>
  );
}
