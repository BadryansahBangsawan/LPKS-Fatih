export default function Jobs() {
  const jobs = [
    { title: "Supervisor Workshop", meta: "Yogyakarta · Full Time" },
    { title: "Testing Engineer", meta: "Onsite · Full Time" },
    { title: "HR Manager", meta: "Jakarta · Full Time" },
  ];

  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="mx-auto max-w-6xl px-12">
        <div className="grid gap-8 md:grid-cols-3">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="rounded-md border border-neutral-200 bg-white p-8"
            >
              <div className="text-lg text-neutral-500">Featured</div>
              <div className="mt-4 text-xl font-semibold">{j.title}</div>
              <div className="text-lg text-neutral-600">{j.meta}</div>
              <div className="mt-6 flex gap-4 text-lg">
                <a className="rounded-lg bg-[#8b5a2b] px-6 py-3 text-white font-medium transition-all hover:bg-[#744b23] hover:shadow-md" href="#">
                  Apply Now
                </a>
                <a className="rounded-lg border-2 border-[#8b5a2b] px-6 py-3 text-[#8b5a2b] font-medium transition-all hover:bg-[#8b5a2b] hover:text-white hover:shadow-md" href="#">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a className="rounded-lg border-2 border-[#8b5a2b] px-8 py-4 text-lg text-[#8b5a2b] font-medium transition-all hover:bg-[#8b5a2b] hover:text-white hover:shadow-md" href="#career">
            See More Opportunities
          </a>
        </div>
      </div>
    </section>
  );
}
