"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface StaggerRevealProps {
	children: ReactNode;
	className?: string;
	stagger?: number;
	y?: number;
}

export default function StaggerReveal({
	children,
	className,
	stagger = 0.1,
	y = 32,
}: StaggerRevealProps) {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = ref.current;
		if (!container) return;

		let ctx: { revert: () => void } | null = null;

		(async () => {
			const { default: gsap } = await import("gsap");
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");
			gsap.registerPlugin(ScrollTrigger);

			const items = container.querySelectorAll<HTMLElement>("[data-stagger-item]");
			if (!items.length) return;

			ctx = gsap.context(() => {
				gsap.from(items, {
					y,
					opacity: 0,
					duration: 0.6,
					stagger,
					ease: "power2.out",
					scrollTrigger: {
						trigger: container,
						start: "top 85%",
						toggleActions: "play none none none",
					},
				});
			}, container);
		})();

		return () => ctx?.revert();
	}, [stagger, y]);

	return (
		<div ref={ref} className={className}>
			{children}
		</div>
	);
}
