import { cn } from "@/lib/utils";

type BadgeVariant = "primary" | "success" | "info" | "warning" | "neutral";

interface BadgeProps {
	variant?: BadgeVariant;
	children: React.ReactNode;
	className?: string;
}

const variants: Record<BadgeVariant, string> = {
	primary: "bg-[#f5ede4] text-[#8b5a2b]",
	success: "bg-green-50 text-green-700",
	info: "bg-blue-50 text-blue-700",
	warning: "bg-amber-50 text-amber-700",
	neutral: "bg-neutral-100 text-neutral-600",
};

export function Badge({ variant = "neutral", children, className }: BadgeProps) {
	return (
		<span
			className={cn(
				"badge inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold",
				variants[variant],
				className
			)}
		>
			{children}
		</span>
	);
}
