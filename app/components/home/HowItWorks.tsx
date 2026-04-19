import { ClipboardList, BookOpen, Award, Briefcase } from "lucide-react";
import StaggerReveal from "@/app/components/animations/StaggerReveal";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

const steps = [
	{
		number: "01",
		icon: ClipboardList,
		title: "Daftar Online",
		description: "Pilih program, isi formulir pendaftaran, dan upload dokumen. Proses 5 menit.",
	},
	{
		number: "02",
		icon: BookOpen,
		title: "Ikuti Pelatihan",
		description: "Belajar intensif 2–4 bulan dipandu instruktur berpengalaman di bengkel/lab.",
	},
	{
		number: "03",
		icon: Award,
		title: "Uji Kompetensi & Sertifikasi",
		description: "Ikuti ujian BNSP dan dapatkan sertifikat kompetensi nasional yang diakui industri.",
	},
	{
		number: "04",
		icon: Briefcase,
		title: "Penyaluran Kerja",
		description: "Tim placement kami aktif menghubungkan Anda dengan 45+ perusahaan mitra.",
	},
];

export default function HowItWorks() {
	return (
		<section className="py-20 bg-[#fafaf9]">
			<div className="section-container">
				<SectionHeader
					eyebrow="Alur Pelatihan"
					title="4 Langkah Menuju Karir Impian"
					description="Proses yang jelas dari pendaftaran hingga bekerja."
				/>

				<StaggerReveal className="relative grid gap-8 md:grid-cols-4">
					{/* Connector line (desktop) */}
					<div className="absolute top-12 left-1/4 right-1/4 h-px bg-neutral-200 hidden md:block" style={{ left: "12.5%", right: "12.5%" }} />

					{steps.map((step, i) => (
						<div key={i} data-stagger-item className="relative flex flex-col items-center text-center">
							{/* Step number */}
							<div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8b5a2b] shadow-lg shadow-[#8b5a2b]/30 z-10">
								<step.icon className="h-6 w-6 text-white" />
								<div className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-white border-2 border-[#8b5a2b] text-[10px] font-bold text-[#8b5a2b]">
									{i + 1}
								</div>
							</div>
							<h3 className="mb-2 text-base font-bold text-neutral-900">{step.title}</h3>
							<p className="text-sm text-neutral-500 leading-relaxed">{step.description}</p>
						</div>
					))}
				</StaggerReveal>
			</div>
		</section>
	);
}
