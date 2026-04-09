"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

// Replace these with your actual photos.
// Drop high-res images into /public/photos/ and reference them here.
const photos = [
  { src: "/photos/placeholder-1.jpg", alt: "Photo 1", width: 1200, height: 800 },
  { src: "/photos/placeholder-2.jpg", alt: "Photo 2", width: 800, height: 1200 },
  { src: "/photos/placeholder-3.jpg", alt: "Photo 3", width: 1200, height: 800 },
  { src: "/photos/placeholder-4.jpg", alt: "Photo 4", width: 1200, height: 1200 },
  { src: "/photos/placeholder-5.jpg", alt: "Photo 5", width: 800, height: 1200 },
  { src: "/photos/placeholder-6.jpg", alt: "Photo 6", width: 1200, height: 800 },
];

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {t.gallery.title}
      </h1>
      <p className="text-gray-600 mb-12">{t.gallery.subtitle}</p>

      {/* Responsive masonry-style grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {photos.map((photo, index) => (
          <div key={index} className="break-inside-avoid overflow-hidden rounded-lg">
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
    </section>
  );
}
