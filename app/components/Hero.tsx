export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-white"
    >
      {/* Container utama */}
      <div className="relative mx-auto w-full max-w-[1440px] px-12 md:px-16 lg:px-20">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:grid-cols-[1fr_1.2fr]">
          {/* Kiri: Teks */}
          <div className="z-10 flex flex-col justify-center gap-10 text-center md:text-left">
            <h1 className="text-[50px] font-bold leading-tight text-neutral-800">
              <span className="block">Discover Your Potential</span>
              <span className="block text-neutral-600">
                with LPKS Tana Ilmu
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-neutral-600 mx-auto md:mx-0">
              Kami membantu Anda menjadi tenaga kerja kompeten, profesional, dan
              tersertifikasi melalui pelatihan berbasis praktik dan standar
              industri terkini.
            </p>

            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6">
              <a
                href="#what"
                className="inline-block rounded-md border border-[#8b5a2b] px-8 py-4 text-base font-medium text-[#8b5a2b] hover:bg-[#8b5a2b] hover:text-white transition-all hover:shadow-md"
              >
                Learn More
              </a>
              <a
                href="#contact"
                className="inline-block rounded-md bg-[#8b5a2b] px-8 py-4 text-base font-medium text-white hover:bg-[#744b23] transition-all hover:shadow-md"
              >
                Ask Me Anything
              </a>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[820px] h-[520px] overflow-hidden rounded-lg">
              <img
                src="/Hero section/hero section.png"
                alt="Foto Asli"
                className="h-full w-full object-cover object-center"
              />
              {/* Gradasi lembut sisi kiri */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-white via-white/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
