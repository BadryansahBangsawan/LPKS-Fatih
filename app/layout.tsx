import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		default: "LPKS Tana Ilmu – Pelatihan Kerja Bersertifikat",
		template: "%s | LPKS Tana Ilmu",
	},
	description:
		"Lembaga pelatihan kerja swasta terpercaya. Program mekanik, listrik, IT, las, tata busana – bersertifikat BNSP, siap kerja dalam 2–4 bulan.",
	keywords: ["LPKS", "pelatihan kerja", "sertifikat BNSP", "mekanik", "IT support", "las", "instalasi listrik"],
	openGraph: {
		title: "LPKS Tana Ilmu – Pelatihan Kerja Bersertifikat",
		description: "Kuasai skill, raih karir. Program pelatihan tersertifikasi dengan tingkat penempatan kerja 87%.",
		type: "website",
		locale: "id_ID",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="id" className="scroll-smooth">
			<body className={`${poppins.variable} antialiased overflow-x-hidden`}>{children}</body>
		</html>
	);
}
