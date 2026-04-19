import type { Metadata } from "next";
import Link from "next/link";
import { Quote, TrendingUp, Briefcase, Award } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Badge } from "@/app/components/ui/Badge";
import { testimonials, stats } from "@/lib/data";

export const metadata: Metadata = {
	title: "Kisah Alumni",
	description: "Cerita sukses alumni LPKS Tana Ilmu yang telah berhasil di dunia kerja.",
};

export default function AlumniPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Hero */}
				<section className="bg-[#8b5a2b] py-16 text-white">
					<div className="section-container text-center">
						<span className="text-xs font-bold uppercase tracking-widest text-white/60">
							Cerita Sukses
						</span>
						<h1 className="mt-3 text-4xl font-extrabold leading-tight">
							{stats[0].value}+ Alumni Telah
							<br />
							Mengubah Karir Mereka
						</h1>
						<p className="mt-4 text-white/80 max-w-xl mx-auto leading-relaxed">
							Dari berbagai latar belakang, dengan satu tekad — menguasai skill dan meraih karir yang
							lebih baik. Ini cerita nyata mereka.
						</p>

						{/* Stats row */}
						<div className="mt-10 flex flex-wrap justify-center gap-8">
							{[
								{ icon: TrendingUp, value: "87%", label: "Tingkat Penempatan Kerja" },
								{ icon: Briefcase, value: "45+", label: "Perusahaan Mitra" },
								{ icon: Award, value: "1.200+", label: "Lulusan Bersertifikat" },
							].map(({ icon: Icon, value, label }) => (
								<div key={label} className="text-center">
									<Icon className="h-5 w-5 text-white/60 mx-auto mb-2" />
									<div className="text-2xl font-extrabold">{value}</div>
									<div className="text-sm text-white/70">{label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Testimonials */}
				<section className="py-16">
					<div className="section-container">
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{testimonials.map((t) => (
								<blockquote
									key={t.id}
									className="card-hover group flex flex-col rounded-2xl border border-neutral-200 bg-white p-6 hover:border-[#8b5a2b]/30"
								>
									{/* Program badge */}
									<div className="mb-4">
										<Badge variant="primary">{t.program}</Badge>
									</div>

									<Quote className="h-8 w-8 text-[#8b5a2b]/20 mb-3" />

									<p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-6">
										&ldquo;{t.quote}&rdquo;
									</p>

									{/* Result card */}
									<div className="mb-5 rounded-xl bg-[#f5ede4] px-4 py-3">
										<div className="flex items-center gap-2">
											<TrendingUp className="h-4 w-4 text-[#8b5a2b]" />
											<span className="text-xs font-semibold text-[#8b5a2b]">Hasil Setelah Lulus</span>
										</div>
										<p className="mt-1 text-sm font-bold text-neutral-800">
											{t.role} di {t.company}
										</p>
									</div>

									<footer className="flex items-center gap-3 pt-4 border-t border-neutral-100">
										<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8b5a2b] text-sm font-bold text-white flex-shrink-0">
											{t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
										</div>
										<div>
											<div className="text-sm font-bold text-neutral-900">{t.name}</div>
											<div className="text-xs text-neutral-500">Alumni {t.year}</div>
										</div>
									</footer>
								</blockquote>
							))}
						</div>
					</div>
				</section>

				{/* CTA */}
				<section className="py-12 bg-[#fafaf9] border-t border-neutral-200">
					<div className="section-container text-center">
						<h2 className="text-2xl font-bold text-neutral-900 mb-3">
							Siap Menjadi Kisah Sukses Berikutnya?
						</h2>
						<p className="text-neutral-500 mb-6 max-w-lg mx-auto">
							Bergabunglah dengan lebih dari 1.200 alumni yang telah membuktikan bahwa pelatihan
							yang tepat membuka jalan karir yang luar biasa.
						</p>
						<Link
							href="/daftar"
							className="btn-base btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-base font-bold"
						>
							Mulai Perjalanan Saya →
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
