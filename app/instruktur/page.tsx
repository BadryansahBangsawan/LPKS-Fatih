import type { Metadata } from "next";
import Link from "next/link";
import { instructors, programs } from "@/lib/data";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Badge } from "@/app/components/ui/Badge";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

export const metadata: Metadata = {
	title: "Instruktur",
	description: "Tim instruktur berpengalaman LPKS Tana Ilmu.",
};

function getInitials(name: string) {
	return name
		.split(" ")
		.filter((w) => !["Bpk.", "Ibu"].includes(w))
		.map((n) => n[0])
		.slice(0, 2)
		.join("");
}

export default function InstrukturPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Header */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-12">
					<div className="section-container text-center max-w-2xl mx-auto">
						<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">
							Tim Pengajar
						</span>
						<h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
							Instruktur Berpengalaman Industri
						</h1>
						<p className="mt-4 text-neutral-500 leading-relaxed">
							Semua instruktur kami adalah praktisi aktif atau mantan profesional dengan rekam jejak
							nyata di industri. Bukan sekadar teori — mereka mengajarkan apa yang benar-benar terjadi
							di lapangan.
						</p>
					</div>
				</section>

				{/* Instructors grid */}
				<section className="py-16">
					<div className="section-container">
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{instructors.map((inst) => {
								const instPrograms = programs.filter((p) => inst.programIds.includes(p.id));
								return (
									<div
										key={inst.id}
										className="card-hover rounded-2xl border border-neutral-200 bg-white overflow-hidden"
									>
										{/* Avatar */}
										<div className="relative h-40 bg-gradient-to-br from-[#f5ede4] to-[#fafaf9] flex items-center justify-center">
											<div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#8b5a2b] text-2xl font-extrabold text-white shadow-lg">
												{getInitials(inst.name)}
											</div>
										</div>

										<div className="p-6">
											<div className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#8b5a2b]">
												{inst.role}
											</div>
											<h3 className="text-base font-bold text-neutral-900 mb-0.5">{inst.name}</h3>
											<p className="text-sm text-neutral-500 mb-3">
												{inst.specialization} · {inst.experience} pengalaman
											</p>
											<p className="text-sm text-neutral-600 leading-relaxed mb-4">{inst.bio}</p>

											{/* Certifications */}
											<div className="flex flex-wrap gap-1.5 mb-4">
												{inst.certifications.map((cert) => (
													<Badge key={cert} variant="neutral">
														{cert}
													</Badge>
												))}
											</div>

											{/* Programs */}
											<div className="pt-4 border-t border-neutral-100">
												<p className="text-xs text-neutral-400 mb-2 font-semibold uppercase tracking-wide">
													Mengajar di
												</p>
												<div className="flex flex-wrap gap-2">
													{instPrograms.map((p) => (
														<Link
															key={p.id}
															href={`/program/${p.slug}`}
															className="text-xs font-medium text-[#8b5a2b] hover:text-[#744b23] hover:underline"
														>
															→ {p.title}
														</Link>
													))}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Join as instructor CTA */}
				<section className="py-12 bg-[#fafaf9] border-t border-neutral-200">
					<div className="section-container text-center">
						<h2 className="text-2xl font-bold text-neutral-900 mb-3">Bergabung sebagai Instruktur?</h2>
						<p className="text-neutral-500 mb-6 max-w-lg mx-auto">
							Kami selalu mencari instruktur berpengalaman industri yang ingin berbagi ilmu dan
							memberdayakan generasi berikutnya.
						</p>
						<Link
							href="/kontak"
							className="btn-base btn-primary inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-bold"
						>
							Hubungi Kami
						</Link>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
