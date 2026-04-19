"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, Search, SlidersHorizontal, Star } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { Badge } from "@/app/components/ui/Badge";
import { programs } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

const categories = ["Semua", "Otomotif", "Kelistrikan", "Teknologi Informasi", "Pengelasan", "Tata Busana"];
const levels = ["Semua", "Pemula", "Menengah", "Lanjutan"];
const methods = ["Semua", "offline", "online", "hybrid"];

const methodLabel: Record<string, string> = {
	offline: "Tatap Muka",
	online: "Online",
	hybrid: "Hybrid",
};

export default function ProgramPage() {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("Semua");
	const [level, setLevel] = useState("Semua");
	const [method, setMethod] = useState("Semua");

	const filtered = programs.filter((p) => {
		const matchSearch =
			search === "" ||
			p.title.toLowerCase().includes(search.toLowerCase()) ||
			p.category.toLowerCase().includes(search.toLowerCase());
		const matchCat = category === "Semua" || p.category === category;
		const matchLevel = level === "Semua" || p.level === level;
		const matchMethod = method === "Semua" || p.method === method;
		return matchSearch && matchCat && matchLevel && matchMethod;
	});

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Page header */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-12">
					<div className="section-container">
						<div className="max-w-xl">
							<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">
								Program Pelatihan
							</span>
							<h1 className="mt-2 text-3xl font-extrabold text-neutral-900 md:text-4xl">
								Pilih Program yang Tepat
							</h1>
							<p className="mt-3 text-neutral-500">
								{programs.length} program aktif tersedia. Semua bersertifikat BNSP dan didampingi instruktur
								berpengalaman industri.
							</p>
						</div>
					</div>
				</section>

				{/* Filters */}
				<section className="border-b border-neutral-200 bg-white py-5 sticky top-16 z-30">
					<div className="section-container">
						<div className="flex flex-wrap items-center gap-3">
							{/* Search */}
							<div className="relative flex-1 min-w-56 max-w-xs">
								<Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
								<input
									type="text"
									placeholder="Cari program..."
									value={search}
									onChange={(e) => setSearch(e.target.value)}
									className="w-full rounded-lg border border-neutral-200 bg-neutral-50 pl-9 pr-4 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors"
								/>
							</div>

							{/* Category filter */}
							<div className="flex items-center gap-1">
								<SlidersHorizontal className="h-4 w-4 text-neutral-400" />
								<div className="flex flex-wrap gap-1">
									{categories.map((cat) => (
										<button
											key={cat}
											onClick={() => setCategory(cat)}
											className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
												category === cat
													? "bg-[#8b5a2b] text-white"
													: "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
											}`}
										>
											{cat}
										</button>
									))}
								</div>
							</div>

							{/* Level filter */}
							<select
								value={level}
								onChange={(e) => setLevel(e.target.value)}
								className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-600 focus:border-[#8b5a2b] focus:outline-none"
							>
								{levels.map((l) => (
									<option key={l} value={l}>
										Level: {l}
									</option>
								))}
							</select>
						</div>
					</div>
				</section>

				{/* Program grid */}
				<section className="py-12">
					<div className="section-container">
						{filtered.length === 0 ? (
							<div className="py-24 text-center">
								<div className="text-4xl mb-4">🔍</div>
								<h3 className="text-lg font-bold text-neutral-900">Program tidak ditemukan</h3>
								<p className="mt-2 text-neutral-500">Coba ubah filter atau kata kunci pencarian</p>
								<button
									onClick={() => {
										setSearch("");
										setCategory("Semua");
										setLevel("Semua");
										setMethod("Semua");
									}}
									className="mt-4 text-sm font-semibold text-[#8b5a2b] hover:underline"
								>
									Reset semua filter
								</button>
							</div>
						) : (
							<>
								<p className="mb-6 text-sm text-neutral-500">
									Menampilkan <strong className="text-neutral-900">{filtered.length}</strong> program
								</p>
								<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
									{filtered.map((program) => (
										<article
											key={program.id}
											className="card-hover group flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden"
										>
											{/* Image */}
											<div className="relative h-48 overflow-hidden bg-neutral-100">
												<img
													src={program.image}
													alt={program.title}
													className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
												/>
												{program.popular && (
													<div className="absolute top-3 left-3 flex items-center gap-1 rounded-full bg-[#8b5a2b] px-2.5 py-1 text-xs font-semibold text-white">
														<Star className="h-3 w-3 fill-current" />
														Populer
													</div>
												)}
												<div className="absolute top-3 right-3">
													<Badge variant="info">{methodLabel[program.method]}</Badge>
												</div>
											</div>

											{/* Content */}
											<div className="flex flex-col flex-1 p-5">
												<div className="flex flex-wrap gap-2 mb-3">
													<Badge variant="neutral">{program.category}</Badge>
													<Badge variant="primary">{program.level}</Badge>
												</div>

												<h3 className="text-base font-bold text-neutral-900 mb-1 group-hover:text-[#8b5a2b] transition-colors">
													{program.title}
												</h3>
												<p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1">
													{program.shortDesc}
												</p>

												<div className="flex items-center gap-1.5 text-sm text-neutral-500 mb-4">
													<Clock className="h-4 w-4" />
													{program.duration} · {program.method === "offline" ? "Tatap Muka" : program.method === "online" ? "Online" : "Hybrid"}
												</div>

												<div className="flex items-center justify-between pt-4 border-t border-neutral-100">
													<div>
														<div className="text-lg font-extrabold text-neutral-900">
															{formatPrice(program.price)}
														</div>
														<div className="text-xs text-neutral-400">
															Termasuk sertifikat BNSP
														</div>
													</div>
													<Link
														href={`/program/${program.slug}`}
														className="btn-base btn-primary rounded-lg px-4 py-2 text-sm"
													>
														Daftar
													</Link>
												</div>
											</div>
										</article>
									))}
								</div>
							</>
						)}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
