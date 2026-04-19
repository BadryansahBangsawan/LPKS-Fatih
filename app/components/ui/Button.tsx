import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ComponentProps<"button"> {
	variant?: Variant;
	size?: Size;
	asChild?: boolean;
}

interface LinkButtonProps extends ComponentProps<typeof Link> {
	variant?: Variant;
	size?: Size;
}

const base =
	"btn-base inline-flex items-center justify-center gap-2 font-semibold rounded-lg select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8b5a2b] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
	primary: "btn-primary bg-[#8b5a2b] text-white hover:bg-[#744b23]",
	outline: "btn-outline text-[#8b5a2b] border border-[#8b5a2b] hover:bg-[#f5ede4]",
	ghost: "text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900",
};

const sizes: Record<Size, string> = {
	sm: "h-9 px-4 text-sm",
	md: "h-11 px-6 text-sm",
	lg: "h-12 px-8 text-base",
};

export function Button({ variant = "primary", size = "md", className, children, ...props }: ButtonProps) {
	return (
		<button className={cn(base, variants[variant], sizes[size], className)} {...props}>
			{children}
		</button>
	);
}

export function LinkButton({ variant = "primary", size = "md", className, children, ...props }: LinkButtonProps) {
	return (
		<Link className={cn(base, variants[variant], sizes[size], className)} {...props}>
			{children}
		</Link>
	);
}
