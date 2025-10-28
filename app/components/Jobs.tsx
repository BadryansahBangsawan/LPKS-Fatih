export default function Jobs() {
  const jobs = [
    { title: "Supervisor Workshop", meta: "Yogyakarta · Full Time" },
    { title: "Testing Engineer", meta: "Onsite · Full Time" },
    { title: "HR Manager", meta: "Jakarta · Full Time" },
  ];

  return (
    <section className="min-h-screen flex items-center py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="rounded-md border border-neutral-200 bg-white p-4"
            >
              <div className="text-sm text-neutral-500">Featured</div>
              <div className="mt-2 font-semibold">{j.title}</div>
              <div className="text-sm text-neutral-600">{j.meta}</div>
              <div className="mt-3 flex gap-2 text-sm">
                <a className="btn-primary rounded px-3 py-1" href="#">
                  Apply Now
                </a>
                <a className="btn-outline rounded px-3 py-1" href="#">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <a className="rounded-md border px-4 py-2 text-sm" href="#">
            See More Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
