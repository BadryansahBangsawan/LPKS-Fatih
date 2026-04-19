import { cn } from "@/lib/utils";

interface SectionHeaderProps {
	eyebrow?: string;
	title: string;
	description?: string;
	align?: "left" | "center";
	className?: string;
}

export function SectionHeader({
	eyebrow,
	title,
	description,
	align = "center",
	className,
}: SectionHeaderProps) {
	return (
		<div
			className={cn(
				"mb-12",
				align === "center" && "text-center",
				className
			)}
		>
			{eyebrow && (
				<span className="mb-3 inline-block text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">
					{eyebrow}
				</span>
			)}
			<h2 className="text-3xl font-bold text-neutral-900 md:text-4xl leading-tight">{title}</h2>
			{description && (
				<p
					className={cn(
						"mt-4 text-neutral-500 text-base md:text-lg leading-relaxed",
						align === "center" && "mx-auto max-w-2xl"
					)}
				>
					{description}
				</p>
			)}
		</div>
	);
}
