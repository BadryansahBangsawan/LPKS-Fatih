// Use public images directly to preserve original sizes and avoid alias issues

export default function Operations() {
  const cards = [
    {
      title: "A Sustainable Approach to Mining",
      text: "Pendekatan berkelanjutan dalam kegiatan operasional.",
      img: "/Operation and project/1.png",
    },
    {
      title: "Restoration Projects",
      text: "Komitmen kami terhadap restorasi dan rehabilitasi.",
      img: "/Operation and project/2.png",
    },
  ];

  const tabs = [
    "A Sustainable Approach to Mining",
    "Restoration Projects",
    "Golden Horizon Project",
    "Evergreen Gold Reserve",
    "Golden Valley Venture",
    "Sovereign Metals Initiative",
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-xl font-semibold text-neutral-900">
          Our Operations and Projects
        </h3>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <article
              key={c.title}
              className="overflow-hidden rounded-lg border border-neutral-200 bg-white"
            >
              <img src={c.img} alt="" className="w-full h-auto" />
              <div className="p-6">
                <h4 className="text-lg font-semibold">{c.title}</h4>
                <p className="mt-1 text-sm text-neutral-600">{c.text}</p>
                <a href="#" className="mt-3 inline-block text-sm primary-text">
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2 rounded-md bg-neutral-900 p-2 text-[11px] text-white md:grid-cols-6">
          {tabs.map((t) => (
            <div
              key={t}
              className="rounded-sm bg-white/10 px-3 py-2 text-center"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
