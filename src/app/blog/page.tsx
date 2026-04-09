import Link from "next/link";

export const metadata = {
  title: "Blog — Rafa",
};

const posts = [
  { href: "/blog/germany", title: "Germany", date: "April 8, 2026" },
];

export default function Blog() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-20 prose prose-gray prose-lg">
      <h1>Blog</h1>
      <ul className="not-prose space-y-4 mt-8">
        {posts.map((post) => (
          <li key={post.href} className="flex items-baseline justify-between gap-4">
            <Link
              href={post.href}
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors"
            >
              {post.title}
            </Link>
            <span className="text-sm text-gray-400 shrink-0">{post.date}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
