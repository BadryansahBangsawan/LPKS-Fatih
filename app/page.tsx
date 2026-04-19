import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/home/HeroSection";
import FeaturesSection from "@/app/components/home/FeaturesSection";
import ProgramsSection from "@/app/components/home/ProgramsSection";
import StatsSection from "@/app/components/home/StatsSection";
import HowItWorks from "@/app/components/home/HowItWorks";
import TestimonialsSection from "@/app/components/home/TestimonialsSection";
import PartnersSection from "@/app/components/home/PartnersSection";
import CTABanner from "@/app/components/home/CTABanner";

export const metadata: Metadata = {
	title: "LPKS Tana Ilmu – Pelatihan Kerja Bersertifikat BNSP",
	description:
		"Lembaga pelatihan kerja swasta terpercaya. Program mekanik, listrik, IT, las – bersertifikat BNSP, siap kerja dalam 2–4 bulan. 87% alumni terserap kerja.",
};

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			<Navbar />
			<main>
				<HeroSection />
				<FeaturesSection />
				<ProgramsSection />
				<StatsSection />
				<HowItWorks />
				<TestimonialsSection />
				<PartnersSection />
				<CTABanner />
			</main>
			<Footer />
		</div>
	);
}
