import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import StaggerReveal from "@/app/components/animations/StaggerReveal";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

export default function TestimonialsSection() {
	const featured = testimonials.slice(0, 3);

	return (
		<section className="py-20 bg-white">
			<div className="section-container">
				<SectionHeader
					eyebrow="Cerita Sukses Alumni"
					title="Mereka Sudah Membuktikan"
					description="Lebih dari 1.200 alumni telah mengubah karir mereka. Ini cerita sebagian dari mereka."
				/>

				<StaggerReveal className="grid gap-6 md:grid-cols-3">
					{featured.map((t) => (
						<blockquote
							key={t.id}
							data-stagger-item
							className="card-hover relative flex flex-col rounded-2xl border border-neutral-200 bg-white p-6"
						>
							<Quote className="h-8 w-8 text-[#8b5a2b]/20 mb-4 flex-shrink-0" />
							<p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-6">
								&ldquo;{t.quote}&rdquo;
							</p>
							<footer className="flex items-center gap-3 pt-4 border-t border-neutral-100">
								{/* Avatar initials */}
								<div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5ede4] text-sm font-bold text-[#8b5a2b] flex-shrink-0">
									{t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
								</div>
								<div>
									<div className="text-sm font-bold text-neutral-900">{t.name}</div>
									<div className="text-xs text-neutral-500">
										{t.role} · {t.company}
									</div>
									<div className="text-xs text-[#8b5a2b] mt-0.5">{t.program}</div>
								</div>
							</footer>
						</blockquote>
					))}
				</StaggerReveal>

				<div className="mt-10 text-center">
					<a
						href="/alumni"
						className="inline-flex items-center gap-2 text-sm font-semibold text-[#8b5a2b] hover:text-[#744b23] transition-colors"
					>
						Baca semua cerita sukses →
					</a>
				</div>
			</div>
		</section>
	);
}
