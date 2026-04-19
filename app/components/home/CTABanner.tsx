import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import AnimateOnScroll from "@/app/components/animations/AnimateOnScroll";

export default function CTABanner() {
	return (
		<section className="py-20 bg-white">
			<div className="section-container">
				<AnimateOnScroll>
					<div className="relative overflow-hidden rounded-3xl bg-[#8b5a2b] px-8 py-16 text-center md:px-16">
						{/* Background pattern */}
						<div
							className="pointer-events-none absolute inset-0 opacity-10"
							style={{
								backgroundImage:
									"radial-gradient(circle at 20% 50%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 40%)",
							}}
						/>

						<div className="relative">
							<p className="mb-3 text-xs font-bold uppercase tracking-widest text-white/70">
								Mulai Sekarang
							</p>
							<h2 className="mb-4 text-3xl font-extrabold text-white md:text-4xl lg:text-5xl leading-tight">
								Jangan Tunda Karir Anda
								<br />
								Satu Hari Lebih Lagi
							</h2>
							<p className="mx-auto mb-8 max-w-xl text-base text-white/80 leading-relaxed">
								Pendaftaran batch berikutnya tersedia terbatas. Daftar sekarang dan dapatkan konsultasi
								karir gratis bersama tim kami.
							</p>
							<div className="flex flex-wrap items-center justify-center gap-4">
								<Link
									href="/daftar"
									className="btn-base inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#8b5a2b] hover:bg-neutral-100 transition-colors"
								>
									Daftar Sekarang <ArrowRight className="h-4 w-4" />
								</Link>
								<a
									href="https://wa.me/6281241490819?text=Halo,%20saya%20ingin%20tanya%20tentang%20program%20pelatihan"
									target="_blank"
									rel="noopener noreferrer"
									className="btn-base inline-flex items-center gap-2 rounded-xl border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
								>
									<MessageCircle className="h-4 w-4" />
									Chat WhatsApp
								</a>
							</div>

							{/* Trust signals */}
							<div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
								<span>✓ Konsultasi gratis</span>
								<span>✓ Tanpa persyaratan rumit</span>
								<span>✓ Cicilan tersedia</span>
							</div>
						</div>
					</div>
				</AnimateOnScroll>
			</div>
		</section>
	);
}
