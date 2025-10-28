export default function Sustainability() {
  const items = [
    {
      title: "Green Extraction",
      text: "Optimasi proses agar ramah lingkungan dan efisien.",
    },
    { title: "Water Recycling", text: "Daur ulang air untuk menekan limbah." },
    {
      title: "Land Reclamation",
      text: "Pemulihan lahan pasca kegiatan operasi.",
    },
  ];

  return (
    <section className="primary-bg min-h-screen flex items-center py-14 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="text-xl font-semibold">
          Your Source for Sustainable Gold
        </h3>
        <p className="mt-2 max-w-3xl text-sm text-white/90">
          Today it remains one of the most valuable, sought-after metals
          globally. There are great opportunities and responsibilities within
          environmental values.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {items.map((i) => (
            <article
              key={i.title}
              className="rounded-md bg-white/10 p-4 backdrop-blur"
            >
              <div className="h-32 w-full rounded bg-white/20" />
              <h4 className="mt-3 font-semibold">{i.title}</h4>
              <p className="mt-1 text-sm text-white/90">{i.text}</p>
              <a href="#" className="mt-2 inline-block text-sm underline">
                Learn more
              </a>
            </article>
          ))}
        </div>

        <div className="mt-6">
          <a
            href="#"
            className="rounded-md bg-white px-4 py-2 text-sm font-medium text-neutral-900"
          >
            Our Sustainability Report
          </a>
        </div>
      </div>
    </section>
  );
}
