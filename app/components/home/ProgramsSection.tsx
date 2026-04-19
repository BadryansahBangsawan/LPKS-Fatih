import Link from "next/link";
import { Clock, ArrowRight, Star } from "lucide-react";
import { programs } from "@/lib/data";
import { formatPrice } from "@/lib/utils";
import { Badge } from "@/app/components/ui/Badge";
import StaggerReveal from "@/app/components/animations/StaggerReveal";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

const methodLabel: Record<string, string> = {
	offline: "Tatap Muka",
	online: "Online",
	hybrid: "Hybrid",
};

export default function ProgramsSection() {
	const featured = programs.filter((p) => p.featured).slice(0, 3);

	return (
		<section className="py-20 bg-white">
			<div className="section-container">
				<div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
					<SectionHeader
						eyebrow="Program Pelatihan"
						title="Program Populer Kami"
						description="Pilih program sesuai minat dan tujuan karir Anda. Semua bersertifikat BNSP."
						align="left"
						className="mb-0"
					/>
					<Link
						href="/program"
						className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5a2b] hover:text-[#744b23] transition-colors whitespace-nowrap"
					>
						Semua Program <ArrowRight className="h-4 w-4" />
					</Link>
				</div>

				<StaggerReveal className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{featured.map((program) => (
						<article
							key={program.id}
							data-stagger-item
							className="card-hover group flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden"
						>
							{/* Image */}
							<div className="relative h-48 overflow-hidden bg-neutral-100">
								<img
									src={program.image}
									alt={program.title}
									className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								{program.popular && (
									<div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-[#8b5a2b] px-2.5 py-1 text-xs font-semibold text-white">
										<Star className="h-3 w-3 fill-current" />
										Populer
									</div>
								)}
								<div className="absolute top-3 right-3">
									<Badge variant="info">{methodLabel[program.method]}</Badge>
								</div>
							</div>

							{/* Content */}
							<div className="flex flex-col flex-1 p-5">
								<div className="flex flex-wrap gap-2 mb-3">
									<Badge variant="neutral">{program.category}</Badge>
									<Badge variant="primary">{program.level}</Badge>
								</div>

								<h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-[#8b5a2b] transition-colors">
									{program.title}
								</h3>
								<p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1">
									{program.shortDesc}
								</p>

								<div className="flex items-center gap-1.5 text-sm text-neutral-500 mb-4">
									<Clock className="h-4 w-4" />
									{program.duration} • {program.schedule.split(",")[0]}
								</div>

								<div className="flex items-center justify-between pt-4 border-t border-neutral-100">
									<div>
										<div className="text-lg font-extrabold text-neutral-900">
											{formatPrice(program.price)}
										</div>
										<div className="text-xs text-neutral-400">Sudah termasuk sertifikat</div>
									</div>
									<Link
										href={`/program/${program.slug}`}
										className="btn-base btn-primary rounded-lg px-4 py-2 text-sm"
									>
										Detail
									</Link>
								</div>
							</div>
						</article>
					))}
				</StaggerReveal>

				{/* CTA */}
				<div className="mt-10 text-center">
					<Link
						href="/program"
						className="btn-base btn-outline inline-flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold"
					>
						Lihat Semua {programs.length} Program <ArrowRight className="h-4 w-4" />
					</Link>
				</div>
			</div>
		</section>
	);
}
