export default function Projects() {
  const projects = [
    {
      title: "A Sustainable Approach to Mining",
      excerpt: "Practical training and sustainable best practices.",
    },
    {
      title: "Restoring Nature, Supporting Communities",
      excerpt: "Rehabilitation and community engagement projects.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">
            Our Operations and Projects
          </h3>
          <a
            href="#projects"
            className="rounded-full bg-amber-700 px-4 py-2 text-white"
          >
            See Projects
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h4 className="text-lg font-semibold text-neutral-900">
                {p.title}
              </h4>
              <p className="mt-2 text-neutral-600">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
