"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
	{ href: "/", label: "Beranda" },
	{ href: "/program", label: "Program" },
	{ href: "/instruktur", label: "Instruktur" },
	{ href: "/alumni", label: "Alumni" },
	{
		label: "Tentang",
		children: [
			{ href: "/tentang", label: "Tentang Kami" },
			{ href: "/lowongan", label: "Job Placement" },
			{ href: "/blog", label: "Blog" },
		],
	},
	{ href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 8);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setMobileOpen(false);
		setDropdownOpen(false);
	}, [pathname]);

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-300",
				scrolled
					? "bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm"
					: "bg-white border-b border-neutral-100"
			)}
		>
			<div className="section-container">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link href="/" className="flex items-center gap-2.5 group" aria-label="LPKS Tana Ilmu">
						<div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#8b5a2b]">
							<GraduationCap className="h-5 w-5 text-white" />
						</div>
						<div className="leading-none">
							<span className="block text-base font-bold text-neutral-900 group-hover:text-[#8b5a2b] transition-colors duration-150">
								LPKS Tana Ilmu
							</span>
							<span className="block text-[10px] font-medium text-neutral-400 uppercase tracking-widest">
								Pelatihan Kerja
							</span>
						</div>
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-1">
						{navLinks.map((link) => {
							if (link.children) {
								return (
									<div
										key={link.label}
										className="relative"
										onMouseEnter={() => setDropdownOpen(true)}
										onMouseLeave={() => setDropdownOpen(false)}
									>
										<button
											className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-neutral-600 hover:text-[#8b5a2b] transition-colors duration-150 rounded-md hover:bg-neutral-50"
											aria-expanded={dropdownOpen}
										>
											{link.label}
											<ChevronDown
												className={cn(
													"h-3.5 w-3.5 transition-transform duration-200",
													dropdownOpen && "rotate-180"
												)}
											/>
										</button>
										{dropdownOpen && (
											<div className="absolute top-full left-0 mt-1 w-44 rounded-xl border border-neutral-200 bg-white shadow-lg py-1.5">
												{link.children.map((child) => (
													<Link
														key={child.href}
														href={child.href}
														className={cn(
															"block px-4 py-2 text-sm transition-colors duration-150",
															pathname === child.href
																? "text-[#8b5a2b] font-semibold bg-[#f5ede4]"
																: "text-neutral-700 hover:text-[#8b5a2b] hover:bg-neutral-50"
														)}
													>
														{child.label}
													</Link>
												))}
											</div>
										)}
									</div>
								);
							}

							return (
								<Link
									key={link.href}
									href={link.href!}
									className={cn(
										"px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150",
										pathname === link.href
											? "text-[#8b5a2b] font-semibold bg-[#f5ede4]"
											: "text-neutral-600 hover:text-[#8b5a2b] hover:bg-neutral-50"
									)}
								>
									{link.label}
								</Link>
							);
						})}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center gap-3">
						<Link
							href="/daftar"
							className="btn-base btn-primary px-5 py-2.5 text-sm rounded-lg"
						>
							Daftar Sekarang
						</Link>
					</div>

					{/* Mobile menu button */}
					<button
						className="md:hidden p-2 rounded-lg text-neutral-600 hover:text-[#8b5a2b] hover:bg-neutral-50 transition-colors"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
						aria-expanded={mobileOpen}
					>
						{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{mobileOpen && (
				<div className="md:hidden border-t border-neutral-100 bg-white">
					<nav className="section-container py-4 flex flex-col gap-1">
						{navLinks.map((link) => {
							if (link.children) {
								return (
									<div key={link.label}>
										<p className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
											{link.label}
										</p>
										{link.children.map((child) => (
											<Link
												key={child.href}
												href={child.href}
												className={cn(
													"block px-3 py-2 pl-6 text-sm rounded-md transition-colors",
													pathname === child.href
														? "text-[#8b5a2b] font-semibold bg-[#f5ede4]"
														: "text-neutral-700 hover:text-[#8b5a2b] hover:bg-neutral-50"
												)}
											>
												{child.label}
											</Link>
										))}
									</div>
								);
							}
							return (
								<Link
									key={link.href}
									href={link.href!}
									className={cn(
										"block px-3 py-2 text-sm rounded-md font-medium transition-colors",
										pathname === link.href
											? "text-[#8b5a2b] font-semibold bg-[#f5ede4]"
											: "text-neutral-700 hover:text-[#8b5a2b] hover:bg-neutral-50"
									)}
								>
									{link.label}
								</Link>
							);
						})}
						<div className="pt-3 mt-2 border-t border-neutral-100">
							<Link
								href="/daftar"
								className="btn-base btn-primary w-full py-3 text-sm rounded-lg"
							>
								Daftar Sekarang
							</Link>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
