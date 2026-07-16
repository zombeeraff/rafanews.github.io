"use client";

import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Replace these with your actual photos.
// Drop high-res images into /public/photos/ and reference them here.
const countries = [
  {
    name: "Germany",
    flag: "/photos/German flag.webp",
    photos: [
      {
        src: "/photos/DSC01576.JPG",
        alt: "DSC01576",
        width: 5472,
        height: 3648,
      },
      {
        src: "https://vtupbkrc2ny02vy6.public.blob.vercel-storage.com/berlin%20yellwo%20train.jpg",
        alt: "Berlin yellow train",
        width: 3072,
        height: 4096,
      },
    ],
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const photos = selectedCountry !== null ? countries[selectedCountry].photos : [];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
        {t.gallery.title}
      </h1>
      <p className="text-gray-600 mb-12">{t.gallery.subtitle}</p>

      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-6">
        {t.gallery.countries}
      </h2>

      {/* Country flags */}
      <div className="flex flex-wrap gap-4 mb-12">
        {countries.map((country, index) => (
          <button
            key={country.name}
            type="button"
            onClick={() =>
              setSelectedCountry(selectedCountry === index ? null : index)
            }
            className={`overflow-hidden rounded-lg border-2 transition-colors cursor-pointer ${
              selectedCountry === index
                ? "border-blue-500"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <Image
              src={country.flag}
              alt={`${country.name} flag`}
              width={80}
              height={48}
              className="block"
              quality={90}
            />
          </button>
        ))}
      </div>

      {/* Selected country's photos */}
      {selectedCountry !== null && (
        <>
          <h3 className="text-lg font-medium tracking-tight mb-6">
            {countries[selectedCountry].name}
          </h3>

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
        </>
      )}

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
