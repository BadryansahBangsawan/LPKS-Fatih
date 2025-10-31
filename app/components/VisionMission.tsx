"use client";
import { useState } from "react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  // Komponen isi (reusable)
  const Content = ({
    title,
    paragraphs,
    imgAlt,
  }: {
    title: string;
    paragraphs: string[];
    imgAlt: string;
  }) => (
    <div className="grid md:grid-cols-[1fr_500px] gap-12 items-center h-full">
      {/* Kiri: Teks */}
      <div className="min-h-[500px] flex flex-col justify-center">
        <h2 className="text-5xl font-bold text-neutral-900 mb-6">{title}</h2>
        <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
          {paragraphs.map((p, i) => (
            <div key={i}>{p || <span>&nbsp;</span>}</div>
          ))}
        </div>
      </div>

      {/* Kanan: Foto */}
      <div className="relative overflow-hidden rounded-xl bg-neutral-100 photo-wrap w-[500px] h-[500px] flex-shrink-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#8b5a2b]/30 to-transparent mix-blend-multiply z-10 rounded-l-xl" />
        <img src="/Visi Misi section/1.png" alt={imgAlt} loading="lazy" />
      </div>
    </div>
  );

  // Data isi
  const missionParas = [
    "• Menyediakan program pelatihan yang relevan dengan kebutuhan industri dan dunia usaha.",
    "• Mengembangkan kualitas SDM melalui pelatihan berbasis kompetensi yang modern dan berkelanjutan.",
    "• Membangun jejaring dan kemitraan strategis untuk penempatan kerja lulusan.",
    "• Meningkatkan SDM, fasilitas pelatihan, dan sarana prasarana pembelajaran.",
    "• Memberikan pelayanan prima dan transparan kepada seluruh calon peserta pelatihan.",
  ];

  const visionParas = [
    "“Menjadi lembaga pelatihan terkemuka yang mencetak tenaga kerja kompeten, berdaya saing global, dan profesional untuk memenuhi kebutuhan pasar kerja.”",
    "Mengedepankan kualitas pendidikan vokasional yang relevan dengan industri 4.0",
    "Menciptakan ekosistem pembelajaran yang inovatif dan adaptif",
    "Menjadi mitra strategis dalam pengembangan SDM nasional",
    "",
  ];

  return (
    <section id="about" className="min-h-screen flex items-start py-20">
      <div className="mx-auto w-full md:w-[1274px] px-6 md:px-0">
        <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm w-full h-[725px] p-12 overflow-hidden">
          <div className="h-full flex flex-col items-start">
            <div className="mb-12 flex gap-6">
              <button
                onClick={() => setActiveTab("mission")}
                className={`px-8 py-3 text-base font-medium rounded-full border transition-all ${
                  activeTab === "mission"
                    ? "border-orange-400 text-orange-500 bg-orange-50"
                    : "border-neutral-200 text-neutral-400 bg-neutral-50 hover:text-neutral-600 hover:border-neutral-300"
                }`}
              >
                Mission
              </button>
              <button
                onClick={() => setActiveTab("vision")}
                className={`px-8 py-3 text-base font-medium rounded-full border transition-all ${
                  activeTab === "vision"
                    ? "border-orange-400 text-orange-500 bg-orange-50"
                    : "border-neutral-200 text-neutral-400 bg-neutral-50 hover:text-neutral-600 hover:border-neutral-300"
                }`}
              >
                Vision
              </button>
            </div>

            {/* Konten */}
            <div className="w-full max-w-[1100px]">
              {activeTab === "mission" ? (
                <Content
                  title="MISI"
                  paragraphs={missionParas}
                  imgAlt="Mission Image"
                />
              ) : (
                <Content
                  title="VISI"
                  paragraphs={visionParas}
                  imgAlt="Vision Image"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .photo-wrap > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }
      `}</style>
    </section>
  );
}
