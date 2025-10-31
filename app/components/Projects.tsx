export default function Projects() {
  const projects = [
    {
      title: "A Sustainable Approach to Mining",
      excerpt: "Practical training and sustainable best practices.",
      image: "/projects/1.png",
    },
    {
      title: "Restoring Nature, Supporting Communities",
      excerpt: "Rehabilitation and community engagement projects.",
      image: "/projects/2.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-12">
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-4xl font-semibold text-[#8b5a2b]">
            Our Operations and Projects
          </h3>
          <a
            href="#projects"
            className="rounded-lg bg-[#8b5a2b] px-8 py-4 text-base text-white font-medium transition-all hover:bg-[#744b23] hover:shadow-md"
          >
            See Projects
          </a>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-lg bg-white p-10 shadow-sm flex flex-col items-center text-center"
            >
              <div
                className="overflow-hidden rounded-lg mb-6"
                style={{ width: "264px", height: "381px" }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>

              <h4 className="text-2xl font-semibold text-neutral-900">
                {p.title}
              </h4>
              <p className="mt-4 text-lg text-neutral-600">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
