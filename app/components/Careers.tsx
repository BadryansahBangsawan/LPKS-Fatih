export default function Careers() {
  const jobs = [
    { title: "Supervisor Warehouse", city: "Toronto", type: "Full Time" },
    { title: "Testing Engineer", city: "Ontario", type: "Full Time" },
    { title: "Hr Manager+", city: "Montreal", type: "Full Time" },
    { title: "Supervisor", city: "Vancouver", type: "Full Time" },
    { title: "Testing Engineer", city: "Ottawa", type: "Full Time" },
    { title: "PR Manager", city: "Edmonton", type: "Full Time" },
  ];

  return (
    <section id="career" className="py-24">
      {/* Header 2 kolom */}
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs font-medium tracking-[0.2em] text-neutral-500">
              CAREER
            </span>
            <h2 className="text-4xl leading-tight font-semibold text-neutral-900 md:text-5xl">
              Discover why people love
              <br /> working here.
            </h2>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-neutral-900">
              Careers at Deploi Gold
            </h3>
            <p className="mt-4 text-neutral-600">
              Join a team that’s pioneering the future of gold mining. At Deploi
              Gold, you’ll work alongside industry experts, embrace innovation,
              and contribute to sustainable mining practices that make a real
              difference.
            </p>
          </div>
        </div>
      </div>

      {/* Area cokelat + kartu lowongan */}
      <div
        className="mt-16 w-full py-16"
        style={{ backgroundColor: "#8a5a2b" }} // tone cokelat sesuai referensi
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job) => (
              <article
                key={`${job.title}-${job.city}`}
                className="rounded-xl bg-white p-8 shadow-sm transition-all hover:shadow-md"
              >
                <h4 className="text-lg font-semibold text-neutral-900">
                  {job.title}
                </h4>
                <p className="mt-2 text-sm text-neutral-500">
                  {job.city} · {job.type}
                </p>

                <a
                  href="#apply"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-700"
                >
                  Apply Now <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>

          {/* Tombol lihat lebih banyak */}
          <div className="mt-10 flex justify-center">
            <a
              href="#more-opportunities"
              className="rounded-xl bg-white/90 px-8 py-4 text-sm font-medium text-neutral-900 shadow-sm hover:bg-white"
            >
              See More Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
