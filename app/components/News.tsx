// Using public image with <img> to keep original size
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function News() {
  const posts = [
    {
      title: "From Extraction to Refinement: The Journey of Gold",
      author: "Andrea Wise",
      excerpt:
        "Take an inside look at the entire gold mining process, from the first dig to the final product, and learn how quality is maintained at every stage.",
      category: "Mining",
      readTime: "5 mins read",
      date: "2 days ago",
    },
  ];

  const popular = [
    {
      title: "The Future of Sustainable Mining",
      meta: "15 videos",
    },
    {
      title: "Why Gold Remains a Safe Haven for Investors",
      meta: "15 videos",
    },
    {
      title: "The Economic Impact of Gold Mining",
      meta: "15 videos",
    },
  ];

  const p = posts[0];

  return (
    <section
      id="news"
      className="layer-fix min-h-screen flex items-center py-24 bg-white transform scale-110 origin-center"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="text-center font-poppins text-[48px] font-semibold tracking-tight text-neutral-900">
          News & Blogs
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-neutral-600">
          Stay informed with the latest updates on gold mining, market trends,
          and sustainability initiatives. Explore expert insights and in-depth
          stories that connect you to the heart of the precious metals industry.
        </p>

        <div className="mt-10 grid gap-10 md:grid-cols-3">
          <div className="order-2 md:order-1">
            <aside className="rounded-2xl bg-white p-6 md:p-8 shadow-sm ring-1 ring-neutral-200">
              <h3 className="mb-4 text-lg font-semibold text-neutral-900">
                Popular
              </h3>
              <ul>
                {popular.map((item, idx) => (
                  <li key={item.title} className="">
                    <a
                      href="#"
                      className="flex items-start justify-between gap-4 py-5 transition hover:text-neutral-900"
                    >
                      <div>
                        <div className="text-neutral-900">{item.title}</div>
                        <div className="mt-2 text-xs text-neutral-400">
                          {item.meta}
                        </div>
                      </div>
                      <ChevronRightIcon className="mt-1 h-5 w-5 text-neutral-400" />
                    </a>
                    {idx < popular.length - 1 && (
                      <div className="h-px w-full bg-neutral-200" />
                    )}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          <div className="md:col-span-2 order-1 md:order-2">
            <article className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200">
              <img
                src="/News and blog section/1.png"
                alt="Featured news"
                className="w-full h-auto"
              />
              <div className="p-6 md:p-10">
                <div className="mb-2 flex items-center gap-3 text-sm">
                  <span className="font-medium text-[#1F3A5F]">
                    {p.category}
                  </span>
                  <span className="text-neutral-300">—</span>
                  <span className="text-neutral-500">{p.readTime}</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900">
                  {p.title}
                </h3>
                <p className="mt-4 text-neutral-600">{p.excerpt}</p>

                <div className="mt-6 flex items-center justify-between text-sm text-neutral-500">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-neutral-200">
                      <span className="text-sm font-semibold text-neutral-700">
                        A
                      </span>
                    </span>
                    <span className="text-neutral-700 font-medium">
                      {p.author}
                    </span>
                  </div>
                  <span>{p.date}</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
