export default function Operations() {
  const projects = [
    {
      title: "A Sustainable Approach to Mining",
      status: "Under Progress",
      excerpt:
        "Explore LPKS Tana Ilmu's innovative, eco-friendly training methods. Learn about the technologies and practices used to reduce the environmental impact while maintaining high-quality training standards. The focus is on how these techniques not only ensure excellent professional development but also protect local ecosystems and promote long-term environmental sustainability.",
      image: "/Operation and project/1.png",
    },
    {
      title: "Restoring Nature, Supporting Communities",
      status: "Under Progress",
      excerpt:
        "Discover LPKS Tana Ilmu's commitment to environmental restoration and community engagement after training activities. See how we work with local communities to implement sustainable practices, restore natural areas, and create economic opportunities. Read about the positive impact these projects have on the environment and local economy.",
      image: "/Operation and project/2.png",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-neutral-50 transform scale-110 origin-center">
      <div className="mx-auto max-w-[1500px] px-20">
        {/* Header */}
        <div className="mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h3 className="text-4xl md:text-5xl font-bold text-neutral-900 leading-tight ml-6">
            Our Operations and <br className="hidden md:block" />
            Projects
          </h3>
          <a
            href="#projects"
            className="rounded-md bg-[#8B5A2B] px-8 py-4 text-base font-medium text-white hover:opacity-90 transition flex items-center gap-2"
          >
            See Projects
            <span className="text-lg">→</span>
          </a>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-16 justify-between">
          {projects.map((p) => (
            <article
              key={p.title}
              className="flex bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition w-[620px] h-[381px]"
            >
              {/* Gambar */}
              <div className="w-[264px] h-full flex-shrink-0">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Konten */}
              <div className="flex flex-col justify-between p-6 text-left w-[365px]">
                <div>
                  <p className="text-[14px] font-semibold text-[#8B5A2B] mb-2">
                    {p.status}
                  </p>
                  <h4 className="text-[20px] font-bold text-neutral-900 leading-snug mb-3">
                    {p.title}
                  </h4>
                  <p className="text-neutral-600 leading-relaxed text-[13px]">
                    {p.excerpt}
                  </p>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-[#8B5A2B] font-medium hover:underline"
                >
                  Read More <span className="text-lg">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
