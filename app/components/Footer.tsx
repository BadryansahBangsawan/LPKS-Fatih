export default function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white py-20 transform scale-110 origin-center">
      <div className="mx-auto max-w-6xl px-12">
        {/* Grid utama */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Kolom 1: Logo & Sosmed */}
          <div>
            <div className="flex items-center gap-3">
              <img src="/Logo.png" alt="Logo LPKS Tana Ilmu" className="h-8" />
              <span className="text-xl font-semibold text-neutral-800">
                LPKS Tana Ilmu
              </span>
            </div>

            <div className="mt-6 flex gap-6 text-[#8b5a2b] text-xl">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Kolom 2: Company */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-neutral-900">
              Company
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Kolom 3: About Us & Projects */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-neutral-900">
              Our Projects
            </h4>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contact */}
          <div>
            <h4 className="mb-4 text-lg font-semibold text-neutral-900">
              Connect
            </h4>
            <p className="text-neutral-600">tanailmu.tjg@gmail.com</p>
            <p className="mt-2 text-neutral-600">0812 4149 0819</p>
          </div>
        </div>

        {/* Bawah Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-between border-t pt-6 text-sm text-neutral-500">
          <p>© All rights reserved – LPKS TANA ILMU</p>
          <div className="flex gap-6">
            <a
              href="#privacy"
              className="text-[#8b5a2b] hover:text-[#744b23] transition-colors font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-[#8b5a2b] hover:text-[#744b23] transition-colors font-medium"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
