"use client";

import { useEffect, useRef } from "react";
import { stats } from "@/lib/data";

export default function StatsSection() {
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		(async () => {
			const { default: gsap } = await import("gsap");
			const { ScrollTrigger } = await import("gsap/ScrollTrigger");
			gsap.registerPlugin(ScrollTrigger);

			const ctx = gsap.context(() => {
				// Animate section in
				gsap.from(".stats-card", {
					y: 40,
					opacity: 0,
					duration: 0.6,
					stagger: 0.12,
					ease: "power2.out",
					scrollTrigger: {
						trigger: sectionRef.current,
						start: "top 80%",
					},
				});

				// Animate numbers
				const counters = sectionRef.current?.querySelectorAll<HTMLElement>("[data-count]");
				counters?.forEach((el) => {
					const target = Number(el.dataset.count);
					gsap.from(
						{ val: 0 },
						{
							val: target,
							duration: 2,
							ease: "power2.out",
							delay: 0.3,
							scrollTrigger: {
								trigger: el,
								start: "top 85%",
								toggleActions: "play none none none",
							},
							onUpdate: function () {
								el.textContent = Math.round(this.targets()[0].val).toLocaleString("id-ID");
							},
						}
					);
				});
			}, sectionRef);

			return () => ctx.revert();
		})();
	}, []);

	return (
		<section className="py-20 bg-[#8b5a2b]" ref={sectionRef}>
			<div className="section-container">
				<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="stats-card text-center rounded-2xl bg-white/10 border border-white/20 px-6 py-8"
						>
							<div className="text-4xl font-extrabold text-white mb-2 md:text-5xl">
								<span data-count={stat.value}>0</span>
								<span>{stat.suffix}</span>
							</div>
							<div className="text-sm font-medium text-white/80">{stat.label}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
