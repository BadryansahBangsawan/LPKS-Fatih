import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins for all typography
const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "LPKS Tana Ilmu",
  description: "Pelatihan kompeten, profesional, dan tersertifikasi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
