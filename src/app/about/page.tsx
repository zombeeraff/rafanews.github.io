export const metadata = {
  title: "About — Rafa",
};

export default function About() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-20 prose prose-gray prose-lg">
      <h1>About Me</h1>

      <p>
        Hi! I&apos;m Rafa. This is where you can tell your story — what you do,
        what drives you, and what you&apos;re excited about. Write in your own
        voice; keep it personal.
      </p>

      <h2>What I Do</h2>
      <p>
        Describe your work, your passions, your day-to-day. This section
        uses the Tailwind Typography plugin, so any Markdown-style content
        you write here will look great automatically.
      </p>

      <h2>Photography</h2>
      <p>
        Talk about your relationship with photography — when you started,
        what you like to shoot, what gear you use. Then link over to
        the <a href="/gallery">gallery</a> so visitors can see your work.
      </p>

      <h2>Get in Touch</h2>
      <p>
        Drop your preferred contact info here — email, social links,
        whatever works for you.
      </p>
    </article>
  );
}
