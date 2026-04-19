"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	y?: number;
	duration?: number;
}

export default function AnimateOnScroll({
	children,
	className,
	delay = 0,
	y = 32,
	duration = 0.6,
}: AnimateOnScrollProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let gsapInstance: typeof import("gsap")["default"] | null = null;
		let ScrollTriggerPlugin: typeof import("gsap/ScrollTrigger")["ScrollTrigger"] | null = null;
		let ctx: { revert: () => void } | null = null;

		(async () => {
			const { default: gsap } = await import("gsap");
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");

			gsap.registerPlugin(ScrollTrigger);
			gsapInstance = gsap;
			ScrollTriggerPlugin = ScrollTrigger;

			ctx = gsap.context(() => {
				gsap.from(el, {
					y,
					opacity: 0,
					duration,
					delay,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top 88%",
						toggleActions: "play none none none",
					},
				});
			});
		})();

		return () => {
			ctx?.revert();
		};
	}, [delay, y, duration]);

	return (
		<div ref={ref} className={cn(className)}>
			{children}
		</div>
	);
}
