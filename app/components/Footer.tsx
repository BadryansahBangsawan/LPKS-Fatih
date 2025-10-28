export default function Footer() {
  return (
    <footer
      id="contact"
      className="mt-16 border-t border-neutral-200 bg-white py-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-2xl font-semibold text-amber-700">LPKS</div>
            <p className="mt-2 text-neutral-600">
              Your source for sustainable training.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <p className="mt-2 text-neutral-600">
              Jl. Example No. 123, Jakarta
            </p>
            <p className="mt-1 text-neutral-600">email@example.com</p>
          </div>

          <div>
            <h4 className="font-semibold">Follow</h4>
            <div className="mt-2 flex gap-3 text-sm text-neutral-600">
              Twitter · Facebook · Instagram
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs text-neutral-500">
          <div>© 2025 LPKS Tana Ilmu</div>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
