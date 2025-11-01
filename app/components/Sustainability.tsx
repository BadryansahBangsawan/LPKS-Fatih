import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Sustainability() {
  const items = [
    {
      title: "Green Extraction",
      text: "Experience gold sourced through eco–friendly techniques that protect the land and reduce environmental impact.",
      src: "/Sustainability/1.png",
      alt: "Green extraction operation",
    },
    {
      title: "Water Recycling",
      text: "Choose gold produced with a focus on water conservation.",
      src: "/Sustainability/2.png",
      alt: "Worker in factory with clipboard",
    },
    {
      title: "Land Reclamation",
      text: "Support the future of local ecosystems and economies with gold that comes from reclaimed land.",
      src: "/Sustainability/3.png",
      alt: "Team discussing reclamation process",
    },
  ] as const;

  return (
    <section className="relative isolate layer-fix primary-bg min-h-screen flex items-center py-20 transform scale-110 origin-center">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="font-poppins text-[40px] md:text-[48px] font-semibold tracking-tight !text-white">
          Your Source for Sustainable Gold
        </h2>
        <p className="mt-4 max-w-4xl text-white/90">
          Today’s customers care is all about both quality and sustainability.
          That’s why our operations are designed with the environment in mind.
          With each ounce of gold, you’re not only investing in a valuable
          asset, but also in ethical mining practices that protect the earth for
          future generations.
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {items.map((i) => (
            <article key={i.title}>
              <img
                src={i.src}
                alt={i.alt}
                className="h-56 w-full rounded-lg object-cover"
              />
              <h3 className="mt-6 text-xl font-semibold !text-white">{i.title}</h3>
              <p className="mt-3 text-white/80">{i.text}</p>
              <a
                href="#"
                className="mt-6 inline-flex items-center gap-2 text-white transition group"
              >
                <span className="underline underline-offset-4">Learn More</span>
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="rounded-xl bg-white px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-medium text-[#8b5a2b] transition-all hover:bg-[#f5f5f5] hover:shadow-md"
          >
            Our Sustainability Report
          </a>
        </div>
      </div>
    </section>
  );
}
