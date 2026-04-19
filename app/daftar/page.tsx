"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Upload, CreditCard, Wallet, Building } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { programs } from "@/lib/data";
import { formatPrice } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4;

const paymentMethods = [
	{ id: "transfer", label: "Transfer Bank", icon: Building, desc: "BCA / BRI / BNI / Mandiri" },
	{ id: "ewallet", label: "E-Wallet", icon: Wallet, desc: "GoPay / OVO / DANA / ShopeePay" },
	{ id: "cicilan", label: "Cicilan 3 Bulan", icon: CreditCard, desc: "Tanpa bunga, tanpa DP" },
];

export default function DaftarPage() {
	const [step, setStep] = useState<Step>(1);
	const [submitted, setSubmitted] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		dob: "",
		address: "",
		education: "",
		program: "",
		paymentMethod: "",
		motivation: "",
	});

	const selectedProgram = programs.find((p) => p.id === form.program);

	function update(field: string, value: string) {
		setForm((prev) => ({ ...prev, [field]: value }));
	}

	function handleSubmit(e: FormEvent) {
		e.preventDefault();
		if (step < 3) {
			setStep((prev) => (prev + 1) as Step);
		} else {
			setSubmitted(true);
		}
	}

	if (submitted) {
		return (
			<div className="min-h-screen bg-white">
				<Navbar />
				<main className="flex items-center justify-center py-24">
					<div className="text-center max-w-md px-6">
						<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
							<CheckCircle2 className="h-10 w-10 text-green-600" />
						</div>
						<h1 className="text-2xl font-extrabold text-neutral-900 mb-3">
							Pendaftaran Berhasil!
						</h1>
						<p className="text-neutral-500 leading-relaxed mb-8">
							Terima kasih, <strong>{form.name}</strong>. Tim kami akan menghubungi Anda dalam{" "}
							<strong>1×24 jam</strong> melalui WhatsApp untuk konfirmasi dan info pembayaran.
						</p>
						<div className="rounded-2xl bg-[#f5ede4] p-5 mb-8 text-left">
							<h3 className="text-sm font-bold text-[#8b5a2b] mb-3">Ringkasan Pendaftaran</h3>
							<div className="space-y-2 text-sm">
								<div className="flex justify-between">
									<span className="text-neutral-500">Nama</span>
									<span className="font-medium text-neutral-900">{form.name}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-neutral-500">Program</span>
									<span className="font-medium text-neutral-900">{selectedProgram?.title ?? "—"}</span>
								</div>
								<div className="flex justify-between">
									<span className="text-neutral-500">Pembayaran</span>
									<span className="font-medium text-neutral-900">
										{paymentMethods.find((m) => m.id === form.paymentMethod)?.label ?? "—"}
									</span>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-3">
							<a
								href="https://wa.me/6281241490819?text=Halo,%20saya%20baru%20mendaftar%20di%20website%20LPKS%20Tana%20Ilmu"
								target="_blank"
								rel="noopener noreferrer"
								className="btn-base btn-primary rounded-xl py-3.5 text-sm font-bold w-full"
							>
								Konfirmasi via WhatsApp
							</a>
							<Link href="/" className="btn-base btn-outline rounded-xl py-3.5 text-sm font-semibold w-full">
								Kembali ke Beranda
							</Link>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	const stepLabels = ["Data Diri", "Pilih Program", "Pembayaran"];

	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				{/* Header */}
				<section className="bg-[#fafaf9] border-b border-neutral-200 py-10">
					<div className="section-container max-w-2xl mx-auto text-center">
						<span className="text-xs font-bold uppercase tracking-widest text-[#8b5a2b]">
							Formulir Pendaftaran
						</span>
						<h1 className="mt-3 text-3xl font-extrabold text-neutral-900">
							Daftarkan Diri Anda Sekarang
						</h1>
						<p className="mt-3 text-neutral-500">
							Proses mudah dalam 3 langkah. Tim kami akan menghubungi Anda dalam 24 jam.
						</p>

						{/* Progress */}
						<div className="mt-8 flex items-center justify-center gap-2">
							{stepLabels.map((label, i) => {
								const s = i + 1;
								const isActive = step === s;
								const isDone = step > s;
								return (
									<div key={label} className="flex items-center gap-2">
										<div className="flex items-center gap-2">
											<div
												className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold transition-all ${
													isDone
														? "bg-green-500 text-white"
														: isActive
														? "bg-[#8b5a2b] text-white"
														: "bg-neutral-200 text-neutral-500"
												}`}
											>
												{isDone ? <CheckCircle2 className="h-4 w-4" /> : s}
											</div>
											<span
												className={`text-xs font-semibold ${
													isActive ? "text-[#8b5a2b]" : isDone ? "text-neutral-700" : "text-neutral-400"
												}`}
											>
												{label}
											</span>
										</div>
										{i < stepLabels.length - 1 && (
											<div className={`h-px w-8 ${step > s ? "bg-green-400" : "bg-neutral-200"}`} />
										)}
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Form */}
				<section className="py-12">
					<div className="section-container max-w-xl mx-auto">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Step 1: Personal data */}
							{step === 1 && (
								<div className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-5">
									<h2 className="text-lg font-bold text-neutral-900">Data Diri</h2>

									{[
										{ field: "name", label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama lengkap" },
										{ field: "email", label: "Alamat Email", type: "email", placeholder: "contoh@email.com" },
										{ field: "phone", label: "Nomor WhatsApp", type: "tel", placeholder: "0812-xxxx-xxxx" },
										{ field: "dob", label: "Tanggal Lahir", type: "date", placeholder: "" },
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

									<div>
										<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
											Pendidikan Terakhir <span className="text-red-500">*</span>
										</label>
										<select
											required
											value={form.education}
											onChange={(e) => update("education", e.target.value)}
											className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors"
										>
											<option value="">Pilih pendidikan</option>
											<option value="sd">SD/Sederajat</option>
											<option value="smp">SMP/Sederajat</option>
											<option value="sma">SMA/SMK/Sederajat</option>
											<option value="d3">Diploma (D1/D2/D3)</option>
											<option value="s1">Sarjana (S1/S2/S3)</option>
										</select>
									</div>

									<div>
										<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
											Alamat Lengkap
										</label>
										<textarea
											rows={3}
											value={form.address}
											onChange={(e) => update("address", e.target.value)}
											placeholder="Jalan, kelurahan, kecamatan, kota"
											className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors resize-none"
										/>
									</div>
								</div>
							)}

							{/* Step 2: Program selection */}
							{step === 2 && (
								<div className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-5">
									<h2 className="text-lg font-bold text-neutral-900">Pilih Program</h2>

									<div className="space-y-3">
										{programs.map((p) => (
											<label
												key={p.id}
												className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
													form.program === p.id
														? "border-[#8b5a2b] bg-[#f5ede4]"
														: "border-neutral-200 hover:border-neutral-300"
												}`}
											>
												<input
													type="radio"
													name="program"
													value={p.id}
													required
													checked={form.program === p.id}
													onChange={(e) => update("program", e.target.value)}
													className="mt-1 text-[#8b5a2b]"
												/>
												<div className="flex-1">
													<div className="flex items-center justify-between">
														<span className="text-sm font-bold text-neutral-900">{p.title}</span>
														<span className="text-sm font-bold text-[#8b5a2b]">
															{formatPrice(p.price)}
														</span>
													</div>
													<div className="text-xs text-neutral-500 mt-0.5">
														{p.duration} · {p.category} · Level {p.level}
													</div>
												</div>
											</label>
										))}
									</div>

									{selectedProgram && (
										<div className="mt-2 rounded-xl bg-[#f5ede4] p-4">
											<p className="text-sm font-semibold text-[#8b5a2b] mb-1">Program Dipilih:</p>
											<p className="text-sm text-neutral-800">{selectedProgram.title}</p>
											<p className="text-xs text-neutral-500 mt-1">
												Jadwal: {selectedProgram.schedule}
											</p>
										</div>
									)}

									<div>
										<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
											Mengapa Anda ingin mengikuti program ini?
										</label>
										<textarea
											rows={3}
											value={form.motivation}
											onChange={(e) => update("motivation", e.target.value)}
											placeholder="Ceritakan singkat motivasi dan tujuan Anda..."
											className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-[#8b5a2b] focus:outline-none focus:bg-white transition-colors resize-none"
										/>
									</div>
								</div>
							)}

							{/* Step 3: Payment */}
							{step === 3 && (
								<div className="rounded-2xl border border-neutral-200 bg-white p-8 space-y-5">
									<h2 className="text-lg font-bold text-neutral-900">Metode Pembayaran</h2>

									{selectedProgram && (
										<div className="rounded-xl bg-neutral-50 border border-neutral-200 p-4">
											<div className="flex justify-between items-center">
												<div>
													<div className="text-sm font-bold text-neutral-900">{selectedProgram.title}</div>
													<div className="text-xs text-neutral-500">{selectedProgram.duration}</div>
												</div>
												<div className="text-lg font-extrabold text-neutral-900">
													{formatPrice(selectedProgram.price)}
												</div>
											</div>
										</div>
									)}

									<div className="space-y-3">
										{paymentMethods.map(({ id, label, icon: Icon, desc }) => (
											<label
												key={id}
												className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all ${
													form.paymentMethod === id
														? "border-[#8b5a2b] bg-[#f5ede4]"
														: "border-neutral-200 hover:border-neutral-300"
												}`}
											>
												<input
													type="radio"
													name="payment"
													value={id}
													required
													checked={form.paymentMethod === id}
													onChange={(e) => update("paymentMethod", e.target.value)}
													className="text-[#8b5a2b]"
												/>
												<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white border border-neutral-200">
													<Icon className="h-5 w-5 text-[#8b5a2b]" />
												</div>
												<div>
													<div className="text-sm font-bold text-neutral-900">{label}</div>
													<div className="text-xs text-neutral-500">{desc}</div>
												</div>
											</label>
										))}
									</div>

									{/* Upload bukti */}
									<div>
										<label className="block text-sm font-semibold text-neutral-700 mb-1.5">
											Upload Bukti Pembayaran (opsional)
										</label>
										<div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-neutral-300 bg-neutral-50 px-6 py-8 text-center hover:border-[#8b5a2b] transition-colors cursor-pointer">
											<Upload className="h-8 w-8 text-neutral-400 mb-2" />
											<p className="text-sm text-neutral-500">
												Klik untuk upload atau drag & drop
											</p>
											<p className="text-xs text-neutral-400 mt-1">PNG, JPG, PDF maksimal 5MB</p>
										</div>
									</div>

									<p className="text-xs text-neutral-500">
										* Pembayaran dapat dilakukan setelah konfirmasi dari tim kami via WhatsApp.
									</p>
								</div>
							)}

							{/* Navigation */}
							<div className="flex items-center justify-between">
								{step > 1 && (
									<button
										type="button"
										onClick={() => setStep((prev) => (prev - 1) as Step)}
										className="btn-base btn-outline rounded-xl px-6 py-3 text-sm font-semibold"
									>
										← Kembali
									</button>
								)}
								<button
									type="submit"
									className="btn-base btn-primary ml-auto rounded-xl px-8 py-3 text-sm font-bold"
								>
									{step === 3 ? "Kirim Pendaftaran →" : "Lanjut →"}
								</button>
							</div>
						</form>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
