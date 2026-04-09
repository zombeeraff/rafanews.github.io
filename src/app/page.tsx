import Link from "next/link";

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-6">
        Hi, I&apos;m Rafa
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
        Welcome to my corner of the internet. I share a bit about who I am
        and the photos I&apos;ve taken along the way.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Link
          href="/about"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          About Me
        </Link>
        <Link
          href="/gallery"
          className="px-6 py-3 border border-gray-300 rounded-lg hover:border-gray-500 transition-colors"
        >
          Photo Gallery
        </Link>
      </div>
    </section>
  );
}
