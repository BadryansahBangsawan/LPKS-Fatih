import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Briefcase, Calendar, ArrowRight, Building2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Badge } from "@/app/components/ui/Badge";
import { jobListings, partners } from "@/lib/data";

export const metadata: Metadata = {
	title: "Lowongan Kerja & Job Placement",
	description: "Lowongan kerja terbaru dari mitra industri LPKS Tana Ilmu.",
};

export default function LowonganPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Header */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-12">
					<div className="section-container">
						<div className="grid gap-8 lg:grid-cols-2 items-center">
							<div>
								<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">
									Penyaluran Kerja
								</span>
								<h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
									Lowongan dari Mitra Industri
								</h1>
								<p className="mt-4 text-neutral-500 leading-relaxed">
									LPKS Tana Ilmu aktif menghubungkan lulusan terbaik dengan perusahaan-perusahaan
									terkemuka. Tim placement kami bekerja setiap hari untuk memastikan Anda mendapat
									posisi yang tepat.
								</p>
							</div>
							<div className="grid grid-cols-3 gap-4">
								{[
									{ value: "45+", label: "Mitra Aktif" },
									{ value: "87%", label: "Tersalurkan" },
									{ value: "3 Bln", label: "Rata-rata Waktu Kerja" },
								].map(({ value, label }) => (
									<div key={label} className="rounded-2xl bg-white border border-neutral-200 p-5 text-center">
										<div className="text-2xl font-extrabold text-[#8b5a2b]">{value}</div>
										<div className="text-xs text-neutral-500 mt-1">{label}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Job listings */}
				<section className="py-12">
					<div className="section-container">
						<h2 className="text-xl font-bold text-neutral-900 mb-6">
							Lowongan Terbaru ({jobListings.length} posisi)
						</h2>

						<div className="space-y-4">
							{jobListings.map((job) => (
								<div
									key={job.id}
									className="card-hover group rounded-2xl border border-neutral-200 bg-white p-5 flex flex-wrap items-start gap-4"
								>
									{/* Company logo placeholder */}
									<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-[#f5ede4]">
										<Building2 className="h-6 w-6 text-[#8b5a2b]" />
									</div>

									{/* Info */}
									<div className="flex-1 min-w-0">
										<div className="flex flex-wrap items-start justify-between gap-3">
											<div>
												<h3 className="font-bold text-neutral-900 group-hover:text-[#8b5a2b] transition-colors">
													{job.role}
												</h3>
												<p className="text-sm font-medium text-neutral-600">{job.company}</p>
											</div>
											<Badge
												variant={job.type === "Full-time" ? "success" : "warning"}
											>
												{job.type}
											</Badge>
										</div>

										<div className="mt-3 flex flex-wrap gap-4 text-sm text-neutral-500">
											<span className="flex items-center gap-1.5">
												<MapPin className="h-3.5 w-3.5" />
												{job.location}
											</span>
											<span className="flex items-center gap-1.5">
												<Briefcase className="h-3.5 w-3.5" />
												Program: {job.programRequired}
											</span>
											<span className="flex items-center gap-1.5">
												<Calendar className="h-3.5 w-3.5" />
												{job.postedDate}
											</span>
										</div>
									</div>

									{/* CTA */}
									<div className="flex-shrink-0">
										<a
											href="https://wa.me/6281241490819?text=Halo,%20saya%20ingin%20melamar%20lowongan%20dari%20mitra%20LPKS"
											target="_blank"
											rel="noopener noreferrer"
											className="btn-base btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm"
										>
											Lamar <ArrowRight className="h-3.5 w-3.5" />
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Partners section */}
				<section className="py-12 bg-[#fafaf9] border-t border-neutral-200">
					<div className="section-container">
						<h2 className="text-xl font-bold text-neutral-900 text-center mb-8">
							Perusahaan Mitra Kami
						</h2>
						<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
							{partners.map((p) => (
								<div
									key={p}
									className="rounded-xl border border-neutral-200 bg-white px-4 py-4 text-sm font-semibold text-neutral-600 text-center hover:border-[#8b5a2b]/40 hover:text-[#8b5a2b] transition-all"
								>
									{p}
								</div>
							))}
						</div>
					</div>
				</section>

				{/* CTA: Become alumni to access placements */}
				<section className="py-12">
					<div className="section-container text-center max-w-xl mx-auto">
						<h2 className="text-2xl font-bold text-neutral-900 mb-3">
							Belum Punya Sertifikat Kompetensi?
						</h2>
						<p className="text-neutral-500 mb-6">
							Ikuti program pelatihan kami terlebih dahulu. Setelah lulus, tim placement kami siap
							membantu Anda mendapatkan pekerjaan di mitra industri kami.
						</p>
						<Link
							href="/program"
							className="btn-base btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold"
						>
							Lihat Program Pelatihan <ArrowRight className="h-4 w-4" />
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
