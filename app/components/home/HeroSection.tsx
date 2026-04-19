"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
	const heroRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		(async () => {
			const { default: gsap } = await import("gsap");
			const ctx = gsap.context(() => {
				const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
				tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.5 })
					.from(".hero-title", { y: 40, opacity: 0, duration: 0.7 }, "-=0.2")
					.from(".hero-subtitle", { y: 24, opacity: 0, duration: 0.5 }, "-=0.4")
					.from(".hero-pill", { y: 16, opacity: 0, duration: 0.4, stagger: 0.08 }, "-=0.3")
					.from(".hero-cta", { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.3")
					.from(".hero-stats", { y: 24, opacity: 0, duration: 0.5, stagger: 0.1 }, "-=0.4")
					.from(".hero-image-wrap", { x: 40, opacity: 0, duration: 0.9 }, "-=0.9");
			}, heroRef);
			return () => ctx.revert();
		})();
	}, []);

	return (
		<section
			ref={heroRef}
			id="home"
			className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-white"
		>
			{/* Background accent */}
			<div
				className="pointer-events-none absolute right-0 top-0 h-full w-1/2 opacity-30"
				style={{
					background:
						"radial-gradient(ellipse at 80% 20%, #f5ede4 0%, transparent 60%)",
				}}
			/>

			<div className="section-container relative py-16 md:py-24 w-full">
				<div className="grid items-center gap-12 lg:grid-cols-2">
					{/* Left: Content */}
					<div className="flex flex-col gap-6 max-w-xl">
						{/* Eyebrow */}
						<div className="hero-eyebrow inline-flex items-center gap-2 w-fit rounded-full border border-[#8b5a2b]/20 bg-[#f5ede4] px-4 py-1.5">
							<span className="h-2 w-2 rounded-full bg-[#8b5a2b] animate-pulse" />
							<span className="text-xs font-semibold text-[#8b5a2b] uppercase tracking-wider">
								Lembaga Pelatihan Bersertifikat BNSP
							</span>
						</div>

						{/* Headline */}
						<h1 className="hero-title text-4xl font-extrabold leading-[1.1] text-neutral-900 md:text-5xl xl:text-6xl">
							Kuasai Skill.
							<br />
							<span className="text-[#8b5a2b]">Raih Karir.</span>
							<br />
							Mulai Hari Ini.
						</h1>

						{/* Subtitle */}
						<p className="hero-subtitle text-lg text-neutral-500 leading-relaxed">
							Program pelatihan vokasional intensif 2–4 bulan dengan instruktur berpengalaman industri.
							Tersertifikasi BNSP. Tingkat penempatan kerja <strong className="text-neutral-700">87%</strong>.
						</p>

						{/* Feature pills */}
						<div className="flex flex-wrap gap-2">
							{[
								{ icon: Award, label: "Sertifikat BNSP" },
								{ icon: Briefcase, label: "Job Placement" },
								{ icon: CheckCircle2, label: "Praktek Langsung" },
							].map(({ icon: Icon, label }) => (
								<div
									key={label}
									className="hero-pill flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-1.5 text-sm font-medium text-neutral-700"
								>
									<Icon className="h-4 w-4 text-[#8b5a2b]" />
									{label}
								</div>
							))}
						</div>

						{/* CTAs */}
						<div className="flex flex-wrap gap-3 pt-2">
							<Link
								href="/daftar"
								className="hero-cta btn-base btn-primary inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold"
							>
								Daftar Sekarang
								<ArrowRight className="h-4 w-4" />
							</Link>
							<Link
								href="/program"
								className="hero-cta btn-base btn-outline inline-flex items-center gap-2 rounded-xl px-7 py-3.5 text-base font-semibold"
							>
								Lihat Program
							</Link>
						</div>

						{/* Stats row */}
						<div className="flex flex-wrap gap-6 pt-4 border-t border-neutral-100">
							{[
								{ value: "1.200+", label: "Alumni" },
								{ value: "87%", label: "Terserap Kerja" },
								{ value: "45+", label: "Mitra Industri" },
							].map(({ value, label }) => (
								<div key={label} className="hero-stats">
									<div className="text-2xl font-extrabold text-neutral-900">{value}</div>
									<div className="text-xs text-neutral-500 mt-0.5">{label}</div>
								</div>
							))}
						</div>
					</div>

					{/* Right: Image */}
					<div className="hero-image-wrap relative flex justify-center lg:justify-end">
						<div className="relative w-full max-w-lg">
							{/* Main image */}
							<div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl">
								<img
									src="/Hero section/hero section.png"
									alt="Peserta pelatihan di bengkel LPKS Tana Ilmu"
									className="h-full w-full object-cover object-center"
								/>
								{/* Overlay gradient */}
								<div className="absolute inset-0 bg-gradient-to-tr from-[#8b5a2b]/20 via-transparent to-transparent" />
							</div>

							{/* Floating card 1 */}
							<div className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl border border-neutral-100">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100">
									<Briefcase className="h-5 w-5 text-green-600" />
								</div>
								<div>
									<div className="text-sm font-bold text-neutral-900">87% Terserap Kerja</div>
									<div className="text-xs text-neutral-500">dalam 3 bulan lulus</div>
								</div>
							</div>

							{/* Floating card 2 */}
							<div className="absolute -top-5 -right-3 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl border border-neutral-100">
								<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f5ede4]">
									<Award className="h-5 w-5 text-[#8b5a2b]" />
								</div>
								<div>
									<div className="text-sm font-bold text-neutral-900">Sertifikat BNSP</div>
									<div className="text-xs text-neutral-500">diakui industri nasional</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
