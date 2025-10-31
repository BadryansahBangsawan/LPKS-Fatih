export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-neutral-200 bg-white py-20"
    >
      <div className="mx-auto max-w-6xl px-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-4xl font-semibold text-[#8b5a2b]">LPKS</div>
            <p className="mt-4 text-lg text-neutral-600">
              Your source for sustainable training.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Contact</h4>
            <p className="mt-4 text-lg text-neutral-600">
              Jl. Example No. 123, Jakarta
            </p>
            <p className="mt-2 text-lg text-neutral-600">email@example.com</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">Follow</h4>
            <div className="mt-4 flex gap-6 text-lg text-neutral-600">
              Twitter · Facebook · Instagram
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-8 text-base text-neutral-500">
          <div>© 2025 LPKS Tana Ilmu</div>
          <div className="flex gap-8">
            <a href="#privacy" className="text-[#8b5a2b] hover:text-[#744b23] transition-colors font-medium">Privacy Policy</a>
            <a href="#terms" className="text-[#8b5a2b] hover:text-[#744b23] transition-colors font-medium">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
