import { Award, Briefcase, Users, Clock, Shield, TrendingUp } from "lucide-react";
import StaggerReveal from "@/app/components/animations/StaggerReveal";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

const features = [
	{
		icon: Award,
		title: "Sertifikat BNSP Terakreditasi",
		description:
			"Setiap peserta mendapat sertifikat kompetensi resmi BNSP yang diakui oleh ratusan perusahaan nasional.",
		color: "bg-amber-50 text-amber-600",
	},
	{
		icon: Briefcase,
		title: "Penyaluran Kerja Langsung",
		description:
			"Jaringan 45+ perusahaan mitra siap menyerap lulusan. Tim placement kami aktif mencarikan lowongan untuk Anda.",
		color: "bg-green-50 text-green-600",
	},
	{
		icon: Users,
		title: "Instruktur Berpengalaman Industri",
		description:
			"Semua instruktur kami adalah praktisi aktif dengan pengalaman 8–16 tahun di bidangnya masing-masing.",
		color: "bg-blue-50 text-blue-600",
	},
	{
		icon: Clock,
		title: "Durasi Singkat, Hasil Maksimal",
		description:
			"Program intensif 2–4 bulan dengan kurikulum yang fokus pada skill yang benar-benar dibutuhkan industri.",
		color: "bg-purple-50 text-purple-600",
	},
	{
		icon: Shield,
		title: "Fasilitas Berstandar Industri",
		description:
			"Peralatan dan mesin yang sama dengan yang ada di bengkel/pabrik sesungguhnya untuk latihan yang realistis.",
		color: "bg-rose-50 text-rose-600",
	},
	{
		icon: TrendingUp,
		title: "Biaya Terjangkau, ROI Nyata",
		description:
			"Mulai dari Rp 2,5 juta. Rata-rata peserta balik modal dalam 1–2 bulan kerja setelah lulus.",
		color: "bg-[#f5ede4] text-[#8b5a2b]",
	},
];

export default function FeaturesSection() {
	return (
		<section className="py-20 bg-[#fafaf9]">
			<div className="section-container">
				<SectionHeader
					eyebrow="Mengapa LPKS Tana Ilmu"
					title="Investasi Terbaik untuk Karir Anda"
					description="Kami tidak sekadar mengajarkan teori. Kami mempersiapkan Anda untuk benar-benar siap bekerja di hari pertama."
				/>

				<StaggerReveal className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{features.map((f) => (
						<div
							key={f.title}
							data-stagger-item
							className="card-hover group rounded-2xl bg-white p-6 border border-neutral-200"
						>
							<div
								className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.color}`}
							>
								<f.icon className="h-6 w-6" />
							</div>
							<h3 className="mb-2 text-base font-bold text-neutral-900">{f.title}</h3>
							<p className="text-sm text-neutral-500 leading-relaxed">{f.description}</p>
						</div>
					))}
				</StaggerReveal>
			</div>
		</section>
	);
}
