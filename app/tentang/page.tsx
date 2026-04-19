import type { Metadata } from "next";
import { Shield, Target, Eye, Award, Users, CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { partners } from "@/lib/data";
import AnimateOnScroll from "@/app/components/animations/AnimateOnScroll";

export const metadata: Metadata = {
	title: "Tentang Kami",
	description: "Profil LPKS Tana Ilmu – lembaga pelatihan kerja swasta bersertifikat.",
};

const values = [
	{ icon: Shield, title: "Integritas", desc: "Transparansi dan kejujuran dalam setiap aspek pelayanan." },
	{ icon: Target, title: "Fokus Hasil", desc: "Setiap program dirancang untuk menghasilkan lulusan siap kerja." },
	{ icon: Users, title: "Kolaborasi", desc: "Kemitraan aktif dengan industri untuk relevansi kurikulum." },
	{ icon: Award, title: "Standar Tinggi", desc: "Uji kompetensi berstandar BNSP nasional untuk setiap lulusan." },
];

const legalitas = [
	"Terdaftar di Dinas Tenaga Kerja Kab. Kota Yogyakarta",
	"Nomor NPWP: 83.123.456.7-541.000",
	"Akreditasi BNSP Lembaga Sertifikasi Profesi",
	"SK Menaker RI Nomor: KEP/123/BPK/V/2020",
	"ISO 9001:2015 Sistem Manajemen Mutu",
];

export default function TentangPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Hero */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-16">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-2 items-center">
							<div>
								<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">Tentang Kami</span>
								<h1 className="mt-3 text-4xl font-extrabold text-neutral-900 leading-tight">
									Mencetak Tenaga Kerja
									<br />
									<span className="text-[#8b5a2b]">Kompeten & Berdaya Saing</span>
								</h1>
								<p className="mt-4 text-neutral-500 leading-relaxed text-base">
									LPKS Tana Ilmu adalah lembaga pelatihan kerja swasta yang berdiri sejak 2015, berfokus
									pada pelatihan vokasional berbasis kompetensi industri. Kami berkomitmen mencetak
									tenaga kerja yang tidak hanya terampil secara teknis, tetapi juga berkarakter
									profesional.
								</p>
								<p className="mt-3 text-neutral-500 leading-relaxed text-base">
									Berlokasi di Yogyakarta, kami melayani peserta dari seluruh wilayah Jawa dan Kalimantan
									dengan fasilitas pelatihan berstandar industri dan instruktur berpengalaman.
								</p>
							</div>
							<div className="relative overflow-hidden rounded-2xl bg-neutral-100 aspect-[4/3]">
								<img
									src="/Visi Misi section/1.png"
									alt="Fasilitas LPKS Tana Ilmu"
									className="h-full w-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-tr from-[#8b5a2b]/20 via-transparent to-transparent" />
							</div>
						</div>
					</div>
				</section>

				{/* Visi & Misi */}
				<section className="py-16">
					<div className="section-container">
						<div className="grid gap-8 md:grid-cols-2">
							<AnimateOnScroll className="rounded-2xl bg-[#8b5a2b] p-8 text-white">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
									<Eye className="h-6 w-6 text-white" />
								</div>
								<h2 className="text-xl font-bold mb-4">Visi</h2>
								<p className="text-white/90 leading-relaxed">
									Menjadi lembaga pelatihan kerja terkemuka yang mencetak tenaga kerja kompeten,
									berdaya saing global, dan profesional untuk memenuhi kebutuhan pasar kerja
									nasional dan internasional.
								</p>
							</AnimateOnScroll>

							<AnimateOnScroll delay={0.1} className="rounded-2xl border border-neutral-200 bg-white p-8">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5ede4]">
									<Target className="h-6 w-6 text-[#8b5a2b]" />
								</div>
								<h2 className="text-xl font-bold text-neutral-900 mb-4">Misi</h2>
								<ul className="space-y-2">
									{[
										"Menyediakan program pelatihan relevan dengan kebutuhan industri",
										"Mengembangkan kualitas SDM melalui pelatihan berbasis kompetensi",
										"Membangun jejaring penempatan kerja lulusan",
										"Meningkatkan fasilitas dan sarana prasarana pembelajaran",
										"Memberikan pelayanan prima kepada setiap peserta",
									].map((m) => (
										<li key={m} className="flex items-start gap-2 text-sm text-neutral-600">
											<CheckCircle2 className="h-4 w-4 text-[#8b5a2b] flex-shrink-0 mt-0.5" />
											{m}
										</li>
									))}
								</ul>
							</AnimateOnScroll>
						</div>
					</div>
				</section>

				{/* Values */}
				<section className="py-16 bg-[#fafaf9]">
					<div className="section-container">
						<SectionHeader
							eyebrow="Nilai-Nilai Kami"
							title="Yang Kami Pegang Teguh"
						/>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{values.map((v) => (
								<div key={v.title} className="card-hover rounded-2xl bg-white border border-neutral-200 p-6 text-center">
									<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f5ede4]">
										<v.icon className="h-6 w-6 text-[#8b5a2b]" />
									</div>
									<h3 className="font-bold text-neutral-900 mb-2">{v.title}</h3>
									<p className="text-sm text-neutral-500">{v.desc}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Legalitas */}
				<section className="py-16">
					<div className="section-container">
						<div className="grid gap-8 lg:grid-cols-2 items-start">
							<div>
								<SectionHeader
									eyebrow="Legalitas & Akreditasi"
									title="Terdaftar dan Terakreditasi Resmi"
									align="left"
								/>
								<ul className="space-y-3">
									{legalitas.map((l) => (
										<li key={l} className="flex items-center gap-3 text-sm text-neutral-700">
											<div className="h-2 w-2 rounded-full bg-[#8b5a2b] flex-shrink-0" />
											{l}
										</li>
									))}
								</ul>
							</div>
							<div>
								<SectionHeader
									eyebrow="Mitra Industri"
									title="Dipercaya Perusahaan Terkemuka"
									align="left"
								/>
								<div className="grid grid-cols-2 gap-3">
									{partners.map((p) => (
										<div
											key={p}
											className="rounded-lg border border-neutral-200 bg-[#fafaf9] px-4 py-3 text-xs font-semibold text-neutral-600 text-center"
										>
											{p}
										</div>
									))}
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
