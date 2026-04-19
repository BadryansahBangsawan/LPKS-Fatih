"use client";

import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle2 } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function KontakPage() {
	const [sent, setSent] = useState(false);
	const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

	function update(field: string, value: string) {
		setForm((prev) => ({ ...prev, [field]: value }));
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		setSent(true);
	}

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Header */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-12">
					<div className="section-container text-center max-w-xl mx-auto">
						<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">Kontak</span>
						<h1 className="mt-3 text-4xl font-extrabold text-neutral-900">
							Ada Pertanyaan? Kami Siap Membantu
						</h1>
						<p className="mt-4 text-neutral-500">
							Tim kami merespons setiap pertanyaan dalam waktu kurang dari 2 jam di hari kerja.
						</p>
					</div>
				</section>

				{/* Content */}
				<section className="py-12">
					<div className="section-container">
						<div className="grid gap-12 lg:grid-cols-[1fr_380px]">
							{/* Form */}
							<div>
								{sent ? (
									<div className="rounded-2xl border border-neutral-200 bg-white p-10 text-center">
										<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
											<CheckCircle2 className="h-8 w-8 text-green-600" />
										</div>
										<h2 className="text-xl font-bold text-neutral-900 mb-2">Pesan Terkirim!</h2>
										<p className="text-neutral-500">
											Terima kasih, <strong>{form.name}</strong>. Kami akan membalas dalam 1×24 jam.
										</p>
										<button
											onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
											className="mt-6 text-sm font-semibold text-[#8b5a2b] hover:underline"
										>
											Kirim pesan baru
										</button>
									</div>
								) : (
									<div className="rounded-2xl border border-neutral-200 bg-white p-8">
										<h2 className="text-xl font-bold text-neutral-900 mb-6">Kirim Pesan</h2>
										<form onSubmit={handleSubmit} className="space-y-5">
											<div className="grid gap-5 sm:grid-cols-2">
												{[
													{ field: "name", label: "Nama Lengkap", type: "text", placeholder: "Nama Anda" },
													{ field: "email", label: "Alamat Email", type: "email", placeholder: "email@contoh.com" },
												].map(({ field, label, type, placeholder }) => (
													<div key={field}>
														<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
															{label} <span className="text-red-500">*</span>
														</label>
														<input
															type={type}
															required
															value={(form as Record<string, string>)[field]}
															onChange={(e) => update(field, e.target.value)}
															placeholder={placeholder}
															className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors"
														/>
													</div>
												))}
											</div>

											<div>
												<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
													Nomor WhatsApp
												</label>
												<input
													type="tel"
													value={form.phone}
													onChange={(e) => update("phone", e.target.value)}
													placeholder="0812-xxxx-xxxx"
													className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors"
												/>
											</div>

											<div>
												<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
													Topik Pesan <span className="text-red-500">*</span>
												</label>
												<select
													required
													value={form.subject}
													onChange={(e) => update("subject", e.target.value)}
													className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors"
												>
													<option value="">Pilih topik</option>
													<option value="program">Informasi Program</option>
													<option value="daftar">Cara Pendaftaran</option>
													<option value="biaya">Biaya & Cicilan</option>
													<option value="sertifikat">Sertifikasi BNSP</option>
													<option value="kerja">Job Placement</option>
													<option value="lainnya">Lainnya</option>
												</select>
											</div>

											<div>
												<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
													Pesan <span className="text-red-500">*</span>
												</label>
												<textarea
													rows={5}
													required
													value={form.message}
													onChange={(e) => update("message", e.target.value)}
													placeholder="Tuliskan pertanyaan atau pesan Anda di sini..."
													className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors resize-none"
												/>
											</div>

											<button
												type="submit"
												className="btn-base btn-primary w-full rounded-xl py-3.5 text-sm font-bold"
											>
												Kirim Pesan
											</button>
										</form>
									</div>
								)}
							</div>

							{/* Contact info sidebar */}
							<div className="space-y-4">
								{/* WhatsApp priority */}
								<a
									href="https://wa.me/6281241490819?text=Halo%20LPKS%20Tana%20Ilmu,%20saya%20ingin%20bertanya%20tentang..."
									target="_blank"
									rel="noopener noreferrer"
									className="card-hover flex items-center gap-4 rounded-2xl bg-green-600 p-5 text-white group"
								>
									<div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20">
										<MessageCircle className="h-6 w-6" />
									</div>
									<div>
										<div className="font-bold text-sm">Chat WhatsApp</div>
										<div className="text-xs text-green-100">Respons paling cepat</div>
										<div className="text-sm font-medium mt-0.5">0812 4149 0819</div>
									</div>
								</a>

								{/* Contact details */}
								{[
									{
										icon: MapPin,
										title: "Alamat",
										content: "Jl. Pendidikan No. 12, Kelurahan Sorosutan, Kec. Umbulharjo, Yogyakarta 55281",
									},
									{
										icon: Phone,
										title: "Telepon",
										content: "(0274) 123-4567\n0812 4149 0819",
									},
									{
										icon: Mail,
										title: "Email",
										content: "tanailmu.tjg@gmail.com\ninfo@lpkstanailmu.id",
									},
									{
										icon: Clock,
										title: "Jam Operasional",
										content: "Senin–Jumat: 08.00–16.00 WIB\nSabtu: 08.00–13.00 WIB",
									},
								].map(({ icon: Icon, title, content }) => (
									<div key={title} className="flex items-start gap-4 rounded-2xl border border-neutral-200 bg-white p-5">
										<div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#f5ede4]">
											<Icon className="h-5 w-5 text-[#8b5a2b]" />
										</div>
										<div>
											<div className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1">
												{title}
											</div>
											<div className="text-sm text-neutral-700 whitespace-pre-line">{content}</div>
										</div>
									</div>
								))}

								{/* Google Maps placeholder */}
								<div className="rounded-2xl border border-neutral-200 overflow-hidden">
									<div className="relative h-48 bg-neutral-100 flex items-center justify-center">
										<div className="text-center">
											<MapPin className="h-8 w-8 text-[#8b5a2b] mx-auto mb-2" />
											<p className="text-sm font-medium text-neutral-600">LPKS Tana Ilmu</p>
											<p className="text-xs text-neutral-400">Yogyakarta, DIY</p>
										</div>
									</div>
									<div className="p-3">
										<a
											href="https://maps.google.com"
											target="_blank"
											rel="noopener noreferrer"
											className="text-xs font-semibold text-[#8b5a2b] hover:underline"
										>
											Buka di Google Maps →
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
