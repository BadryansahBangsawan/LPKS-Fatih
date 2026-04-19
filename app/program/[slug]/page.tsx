import { notFound } from "next/navigation";
import Link from "next/link";
import {
	Clock,
	Award,
	Users,
	MapPin,
	CheckCircle2,
	ChevronDown,
	ArrowRight,
	Briefcase,
} from "lucide-react";
import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Badge } from "@/app/components/ui/Badge";
import { programs, instructors } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

interface Props {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const program = programs.find((p) => p.slug === slug);
	if (!program) return { title: "Program tidak ditemukan" };
	return {
		title: `${program.title} – LPKS Tana Ilmu`,
		description: program.shortDesc,
	};
}

const methodLabel: Record<string, string> = {
	offline: "Tatap Muka",
	online: "Online",
	hybrid: "Hybrid",
};

const faqs = [
	{
		q: "Apakah ada persyaratan pendidikan minimum?",
		a: "Minimal SMP/sederajat. Program ini dirancang untuk semua latar belakang pendidikan, yang terpenting adalah motivasi dan kesiapan belajar.",
	},
	{
		q: "Berapa lama proses sertifikasi BNSP setelah selesai pelatihan?",
		a: "Proses uji kompetensi BNSP berlangsung 1–2 minggu setelah pelatihan selesai. Kami memfasilitasi seluruh proses administrasi.",
	},
	{
		q: "Apakah tersedia sistem cicilan?",
		a: "Ya, tersedia opsi cicilan 2–3 bulan tanpa bunga. Hubungi tim kami untuk informasi lebih lanjut.",
	},
	{
		q: "Bagaimana proses penyaluran kerja setelah lulus?",
		a: "Tim placement kami akan menghubungkan Anda dengan lowongan di perusahaan mitra. Kami juga membantu persiapan CV dan wawancara kerja.",
	},
];

export default async function ProgramDetailPage({ params }: Props) {
	const { slug } = await params;
	const program = programs.find((p) => p.slug === slug);
	if (!program) notFound();

	const instructor = instructors.find((i) => i.id === program.instructorId);

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Hero */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-12">
					<div className="section-container">
						{/* Breadcrumb */}
						<nav className="mb-6 flex items-center gap-2 text-sm text-neutral-500">
							<Link href="/" className="hover:text-[#8b5a2b] transition-colors">Beranda</Link>
							<span>/</span>
							<Link href="/program" className="hover:text-[#8b5a2b] transition-colors">Program</Link>
							<span>/</span>
							<span className="text-neutral-900 font-medium">{program.title}</span>
						</nav>

						<div className="grid gap-10 lg:grid-cols-[1fr_340px]">
							{/* Left */}
							<div>
								<div className="flex flex-wrap gap-2 mb-4">
									<Badge variant="neutral">{program.category}</Badge>
									<Badge variant="primary">{program.level}</Badge>
									<Badge variant="info">{methodLabel[program.method]}</Badge>
									{program.popular && <Badge variant="warning">🔥 Populer</Badge>}
								</div>

								<h1 className="text-3xl font-extrabold text-neutral-900 md:text-4xl mb-4">
									{program.title}
								</h1>
								<p className="text-neutral-500 text-base leading-relaxed max-w-2xl mb-6">
									{program.description}
								</p>

								{/* Quick stats */}
								<div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
									{[
										{ icon: Clock, label: "Durasi", value: program.duration },
										{ icon: MapPin, label: "Metode", value: methodLabel[program.method] },
										{ icon: Users, label: "Instruktur", value: instructor?.name.split(" ")[1] ?? "—" },
										{ icon: Award, label: "Sertifikat", value: "BNSP" },
									].map(({ icon: Icon, label, value }) => (
										<div
											key={label}
											className="rounded-xl bg-white border border-neutral-200 p-4 text-center"
										>
											<Icon className="h-5 w-5 text-[#8b5a2b] mx-auto mb-2" />
											<div className="text-xs text-neutral-500">{label}</div>
											<div className="text-sm font-bold text-neutral-900 mt-0.5">{value}</div>
										</div>
									))}
								</div>
							</div>

							{/* Right: Enrollment card */}
							<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg h-fit">
								<div className="relative mb-5 overflow-hidden rounded-xl bg-neutral-100 aspect-video">
									<img
										src={program.image}
										alt={program.title}
										className="h-full w-full object-cover"
									/>
								</div>
								<div className="mb-1 text-2xl font-extrabold text-neutral-900">
									{formatPrice(program.price)}
								</div>
								<div className="mb-5 text-xs text-neutral-500">Sudah termasuk sertifikat BNSP</div>

								<div className="space-y-3 mb-6 text-sm text-neutral-600">
									<div className="flex items-center gap-2">
										<Clock className="h-4 w-4 text-[#8b5a2b]" />
										Jadwal: {program.schedule}
									</div>
									<div className="flex items-center gap-2">
										<Award className="h-4 w-4 text-[#8b5a2b]" />
										{program.certificate}
									</div>
								</div>

								<Link
									href="/daftar"
									className="btn-base btn-primary w-full rounded-xl py-3.5 text-sm font-bold"
								>
									Daftar Program Ini
								</Link>
								<a
									href="https://wa.me/6281241490819"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-base btn-outline w-full rounded-xl py-3 text-sm font-semibold mt-3"
								>
									Tanya Via WhatsApp
								</a>
							</div>
						</div>
					</div>
				</section>

				{/* Content */}
				<section className="py-12">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[1fr_340px]">
							{/* Left: Details */}
							<div className="space-y-12">
								{/* Kurikulum */}
								<div>
									<h2 className="mb-6 text-xl font-bold text-neutral-900">Kurikulum Program</h2>
									<div className="space-y-3">
										{program.modules.map((mod, i) => (
											<details
												key={i}
												className="group rounded-xl border border-neutral-200 bg-white overflow-hidden"
											>
												<summary className="flex cursor-pointer items-center justify-between px-5 py-4 select-none">
													<div className="flex items-center gap-3">
														<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5ede4] text-xs font-bold text-[#8b5a2b]">
															{i + 1}
														</span>
														<span className="text-sm font-semibold text-neutral-900">{mod.title}</span>
													</div>
													<ChevronDown className="h-4 w-4 text-neutral-400 group-open:rotate-180 transition-transform duration-200" />
												</summary>
												<div className="border-t border-neutral-100 px-5 py-4">
													<ul className="space-y-1.5">
														{mod.topics.map((topic) => (
															<li key={topic} className="flex items-center gap-2 text-sm text-neutral-600">
																<CheckCircle2 className="h-4 w-4 text-[#8b5a2b] flex-shrink-0" />
																{topic}
															</li>
														))}
													</ul>
												</div>
											</details>
										))}
									</div>
								</div>

								{/* Skill output */}
								<div>
									<h2 className="mb-4 text-xl font-bold text-neutral-900">Skill yang Dikuasai Setelah Lulus</h2>
									<div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
										{program.skills.map((skill) => (
											<div
												key={skill}
												className="flex items-center gap-2.5 rounded-lg bg-[#f5ede4] px-4 py-2.5"
											>
												<CheckCircle2 className="h-4 w-4 text-[#8b5a2b] flex-shrink-0" />
												<span className="text-sm font-medium text-neutral-800">{skill}</span>
											</div>
										))}
									</div>
								</div>

								{/* Job opportunities */}
								<div>
									<h2 className="mb-4 text-xl font-bold text-neutral-900">Peluang Karir</h2>
									<div className="flex flex-wrap gap-2">
										{program.jobOpportunities.map((job) => (
											<div
												key={job}
												className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700"
											>
												<Briefcase className="h-4 w-4 text-[#8b5a2b]" />
												{job}
											</div>
										))}
									</div>
								</div>

								{/* Instructor */}
								{instructor && (
									<div>
										<h2 className="mb-4 text-xl font-bold text-neutral-900">Profil Instruktur</h2>
										<div className="rounded-2xl border border-neutral-200 bg-white p-6">
											<div className="flex items-start gap-4">
												<div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[#f5ede4] text-base font-bold text-[#8b5a2b]">
													{instructor.name
														.split(" ")
														.filter((w) => !["Bpk.", "Ibu"].includes(w))
														.map((n) => n[0])
														.slice(0, 2)
														.join("")}
												</div>
												<div className="flex-1">
													<h3 className="font-bold text-neutral-900">{instructor.name}</h3>
													<p className="text-sm text-neutral-500 mb-1">
														{instructor.role} · {instructor.experience} pengalaman
													</p>
													<p className="text-sm text-neutral-600 leading-relaxed mb-3">
														{instructor.bio}
													</p>
													<div className="flex flex-wrap gap-2">
														{instructor.certifications.map((cert) => (
															<Badge key={cert} variant="neutral">
																{cert}
															</Badge>
														))}
													</div>
												</div>
											</div>
										</div>
									</div>
								)}

								{/* FAQ */}
								<div>
									<h2 className="mb-4 text-xl font-bold text-neutral-900">Pertanyaan Umum</h2>
									<div className="space-y-3">
										{faqs.map((faq, i) => (
											<details
												key={i}
												className="group rounded-xl border border-neutral-200 bg-white overflow-hidden"
											>
												<summary className="flex cursor-pointer items-center justify-between px-5 py-4 select-none text-sm font-semibold text-neutral-900">
													{faq.q}
													<ChevronDown className="h-4 w-4 text-neutral-400 flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
												</summary>
												<div className="border-t border-neutral-100 px-5 py-4">
													<p className="text-sm text-neutral-600 leading-relaxed">{faq.a}</p>
												</div>
											</details>
										))}
									</div>
								</div>
							</div>

							{/* Right sidebar sticky CTA */}
							<div className="hidden lg:block">
								<div className="sticky top-24 space-y-4">
									<div className="rounded-2xl border border-neutral-200 bg-white p-6">
										<h3 className="font-bold text-neutral-900 mb-4">Siap Mendaftar?</h3>
										<div className="mb-4 text-2xl font-extrabold text-neutral-900">
											{formatPrice(program.price)}
										</div>
										<Link
											href="/daftar"
											className="btn-base btn-primary w-full rounded-xl py-3.5 text-sm font-bold mb-3"
										>
											Daftar Sekarang <ArrowRight className="h-4 w-4" />
										</Link>
										<a
											href="https://wa.me/6281241490819"
											target="_blank"
											rel="noopener noreferrer"
											className="btn-base btn-outline w-full rounded-xl py-3 text-sm font-semibold"
										>
											Chat WhatsApp
										</a>
										<div className="mt-4 text-xs text-center text-neutral-400">
											Cicilan tersedia · Konsultasi gratis
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
