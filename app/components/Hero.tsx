// Use standard img tag to keep original asset size without import issues

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center justify-center overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text content */}
          <div className="flex flex-col justify-center gap-6 text-center md:text-left">
            <h1 className="text-4xl font-bold leading-tight text-neutral-800 md:text-5xl lg:text-6xl">
              Discover Your Potential
              <br />
              <span className="text-neutral-600">with LPKS Tana Ilmu</span>
            </h1>

            <p className="mt-4 max-w-xl text-neutral-600 mx-auto md:mx-0">
              Kami membantu Anda menjadi tenaga kerja kompeten, profesional, dan
              tersertifikasi melalui pelatihan berbasis praktik dan standar
              industri terkini.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#programs"
                className="btn-outline inline-block rounded-md border border-[#8B5A2B] px-5 py-3 text-sm font-medium text-[#8B5A2B] hover:bg-[#8B5A2B] hover:text-white transition"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-block rounded-md bg-[#8B5A2B] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Ask Me Anything
              </a>
            </div>
          </div>
          {/* Image */}
          <div className="flex items-center justify-end md:justify-end md:-mr-6">
            <div
              className="relative overflow-hidden shadow-lg"
              style={{ width: "784px", height: "511px" }}
            >
              <img
                src="/Hero section/hero section.png"
                alt="Foto Asli"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <div className="pointer-events-none absolute inset-y-0 left-[-80px] w-56 bg-gradient-to-r from-white to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
