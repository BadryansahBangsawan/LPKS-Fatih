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
    <section className="bg-white py-20 md:py-24">
      {/* HEADER 2 KOLOM */}
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-start gap-10 md:grid-cols-12">
          {/* KIRI */}
          <div className="md:col-span-7">
            <div className="mb-3 text-xs font-semibold tracking-[0.2em] text-neutral-500">
              CAREER
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-neutral-900">
              Discover why people love
              <br className="hidden md:block" />
              working here.
            </h1>
          </div>

          {/* KANAN */}
          <div className="md:col-span-5">
            <div className="md:pt-7 lg:pt-8">
              <h2 className="text-2xl md:text-[28px] font-semibold text-neutral-900">
                Careers at Deploi Gold
              </h2>
              <p className="mt-3 max-w-prose text-base md:text-lg leading-relaxed text-neutral-600">
                Join a team that’s pioneering the future of gold mining. At
                Deploi Gold, you’ll work alongside industry experts, embrace
                innovation, and contribute to sustainable mining practices that
                make a real difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AREA COKELAT + KARTU LOWONGAN */}
      <div
        className="mt-16 w-full py-16"
        style={{ backgroundColor: "#8a5a2b" }}
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

          {/* TOMBOL LIHAT LEBIH BANYAK */}
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
