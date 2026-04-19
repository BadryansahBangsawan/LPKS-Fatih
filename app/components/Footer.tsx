import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

const footerLinks = {
	program: [
		{ href: "/program/teknik-sepeda-motor", label: "Teknik Sepeda Motor" },
		{ href: "/program/teknik-mekanik-mobil", label: "Teknik Mekanik Mobil" },
		{ href: "/program/instalasi-listrik", label: "Instalasi Listrik" },
		{ href: "/program/it-support-networking", label: "IT Support & Networking" },
		{ href: "/program/las-smaw", label: "Las SMAW" },
	],
	perusahaan: [
		{ href: "/tentang", label: "Tentang Kami" },
		{ href: "/instruktur", label: "Instruktur" },
		{ href: "/alumni", label: "Alumni" },
		{ href: "/lowongan", label: "Job Placement" },
		{ href: "/blog", label: "Blog" },
	],
	dukungan: [
		{ href: "/daftar", label: "Daftar Sekarang" },
		{ href: "/kontak", label: "Hubungi Kami" },
		{ href: "#faq", label: "FAQ" },
	],
};

export default function Footer() {
	return (
		<footer className="bg-neutral-950 text-neutral-300">
			{/* Main footer */}
			<div className="section-container py-16">
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
					{/* Brand col */}
					<div className="lg:col-span-2">
						<Link href="/" className="flex items-center gap-2.5 mb-5">
							<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8b5a2b]">
								<GraduationCap className="h-5 w-5 text-white" />
							</div>
							<div className="leading-none">
								<span className="block text-base font-bold text-white">LPKS Tana Ilmu</span>
								<span className="block text-[10px] font-medium text-neutral-500 uppercase tracking-widest">
									Pelatihan Kerja
								</span>
							</div>
						</Link>
						<p className="text-sm text-neutral-400 leading-relaxed max-w-xs mb-6">
							Lembaga pelatihan kerja swasta bersertifikat yang mencetak tenaga kerja kompeten, profesional,
							dan berdaya saing untuk memenuhi kebutuhan industri nasional.
						</p>
						<div className="space-y-2.5 text-sm">
							<div className="flex items-start gap-2.5">
								<MapPin className="h-4 w-4 text-[#8b5a2b] mt-0.5 flex-shrink-0" />
								<span className="text-neutral-400">Jl. Pendidikan No. 12, Yogyakarta 55281</span>
							</div>
							<div className="flex items-center gap-2.5">
								<Phone className="h-4 w-4 text-[#8b5a2b] flex-shrink-0" />
								<a href="tel:+6281241490819" className="text-neutral-400 hover:text-white transition-colors">
									0812 4149 0819
								</a>
							</div>
							<div className="flex items-center gap-2.5">
								<Mail className="h-4 w-4 text-[#8b5a2b] flex-shrink-0" />
								<a href="mailto:tanailmu.tjg@gmail.com" className="text-neutral-400 hover:text-white transition-colors">
									tanailmu.tjg@gmail.com
								</a>
							</div>
						</div>
						{/* Social */}
						<div className="flex gap-3 mt-6">
							{[
								{ label: "Instagram", href: "#" },
								{ label: "YouTube", href: "#" },
								{ label: "Facebook", href: "#" },
							].map(({ label, href }) => (
								<a
									key={label}
									href={href}
									aria-label={label}
									className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 hover:bg-[#8b5a2b] hover:text-white transition-all duration-150 text-xs font-bold"
								>
									{label[0]}
								</a>
							))}
						</div>
					</div>

					{/* Program links */}
					<div>
						<h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Program</h4>
						<ul className="space-y-2.5">
							{footerLinks.program.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Company links */}
					<div>
						<h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Perusahaan</h4>
						<ul className="space-y-2.5">
							{footerLinks.perusahaan.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Support */}
					<div>
						<h4 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">Dukungan</h4>
						<ul className="space-y-2.5">
							{footerLinks.dukungan.map((l) => (
								<li key={l.href}>
									<Link
										href={l.href}
										className="text-sm text-neutral-400 hover:text-white transition-colors duration-150"
									>
										{l.label}
									</Link>
								</li>
							))}
						</ul>
						{/* WhatsApp CTA */}
						<a
							href="https://wa.me/6281241490819"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-6 flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition-colors w-fit"
						>
							<svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
							</svg>
							Chat WhatsApp
						</a>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className="border-t border-neutral-800">
				<div className="section-container py-5 flex flex-wrap items-center justify-between gap-4">
					<p className="text-xs text-neutral-500">
						© {new Date().getFullYear()} LPKS Tana Ilmu. Seluruh hak dilindungi.
					</p>
					<div className="flex gap-5 text-xs text-neutral-500">
						<Link href="/privacy" className="hover:text-neutral-300 transition-colors">
							Kebijakan Privasi
						</Link>
						<Link href="/terms" className="hover:text-neutral-300 transition-colors">
							Syarat & Ketentuan
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
