import { partners } from "@/lib/data";
import { SectionHeader } from "@/app/components/ui/SectionHeader";

export default function PartnersSection() {
	return (
		<section className="py-16 bg-[#fafaf9] border-y border-neutral-200">
			<div className="section-container">
				<SectionHeader
					eyebrow="Mitra Industri"
					title="Dipercaya oleh Perusahaan Terkemuka"
					description="Alumni kami tersebar di berbagai perusahaan terbaik Indonesia."
				/>

				{/* Logo grid */}
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8 items-center justify-items-center">
					{partners.map((name) => (
						<div
							key={name}
							className="flex h-14 w-full items-center justify-center rounded-xl border border-neutral-200 bg-white px-3 text-xs font-semibold text-neutral-500 text-center hover:border-[#8b5a2b]/30 hover:text-[#8b5a2b] transition-all duration-150"
						>
							{name}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
