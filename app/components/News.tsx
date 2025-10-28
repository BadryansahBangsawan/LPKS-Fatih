// Using public image with <img> to keep original size

export default function News() {
  const posts = [
    {
      title: "From Extraction to Refinement",
      author: "Andrew Miles",
      excerpt: "The journey of gold...",
    },
  ];
  return (
    <section id="news" className="min-h-screen flex items-center py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h3 className="mb-6 text-2xl font-semibold">News & Blogs</h3>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="col-span-2">
            <article className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img
                src="/News and blog section/1.png"
                alt="Featured news"
                className="w-full h-auto"
              />
              <div className="p-6">
                <h4 className="text-lg font-semibold">{posts[0].title}</h4>
                <p className="mt-2 text-neutral-600">{posts[0].excerpt}</p>
                <div className="mt-4 text-sm text-neutral-500">
                  By {posts[0].author}
                </div>
              </div>
            </article>
          </div>

          <aside className="rounded-lg bg-white p-6 shadow-sm">
            <h5 className="mb-3 font-semibold">Popular</h5>
            <ul className="space-y-3 text-neutral-600">
              <li>The Future of Sustainable Mining</li>
              <li>Why Gold Remains a Safe Haven</li>
              <li>The Economic Impact of Gold Mining</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
