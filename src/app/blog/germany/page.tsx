export const metadata = {
  title: "Germany — Rafa",
};

export default function Germany() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-12 sm:py-20 prose prose-gray prose-lg">
      <h1>Germany</h1>

      <div className="not-prose my-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 5 3"
          className="w-full rounded-lg shadow-md"
          aria-label="Flag of Germany"
          role="img"
        >
          <rect width="5" height="1" y="0" fill="#000000" />
          <rect width="5" height="1" y="1" fill="#DD0000" />
          <rect width="5" height="1" y="2" fill="#FFCE00" />
        </svg>
      </div>
    </article>
  );
}
