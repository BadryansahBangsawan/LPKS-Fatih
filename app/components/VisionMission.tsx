"use client";
import { useState } from "react";

export default function VisionMission() {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission");

  const MissionContent = () => (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Kiri: Teks */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">MISI</h2>
        <ul className="space-y-3 text-neutral-700 leading-relaxed text-[15px]">
          <li>
            • Menyediakan program pelatihan yang relevan dengan kebutuhan
            industri dan dunia usaha.
          </li>
          <li>
            • Mengembangkan kualitas SDM melalui pelatihan berbasis kompetensi
            yang modern dan berkelanjutan.
          </li>
          <li>
            • Membangun jejaring dan kemitraan strategis untuk penempatan kerja
            lulusan.
          </li>
          <li>
            • Meningkatkan SDM, fasilitas pelatihan, dan sarana prasarana
            pembelajaran.
          </li>
          <li>
            • Memberikan pelayanan prima dan transparan kepada seluruh calon
            peserta pelatihan.
          </li>
        </ul>
      </div>

      {/* Kanan: Foto */}
      <div
        className="relative overflow-hidden rounded-xl bg-neutral-100 photo-wrap"
        style={{ width: "472px", height: "492px" }}
      >
        {/* Lapisan warna di kiri */}
        <div className="absolute inset-y-0 left-0 w-1/2  mix-blend-multiply z-10 rounded-l-xl" />
        <img
          src="/Visi Misi section/1.png"
          alt="Mission Image"
          loading="lazy"
        />
      </div>
    </div>
  );

  const VisionContent = () => (
    <div className="grid md:grid-cols-2 gap-10 items-start">
      {/* Kiri: Teks */}
      <div>
        <h2 className="text-3xl font-bold text-neutral-900 mb-4">VISI</h2>
        <p className="text-neutral-700 leading-relaxed text-[15px]">
          "Menjadi lembaga pelatihan terkemuka yang mencetak tenaga kerja
          kompeten, berdaya saing global, dan profesional untuk memenuhi
          kebutuhan pasar kerja." 
        </p>
        <div className="mt-6 space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5"></div>
            <p className="text-neutral-700 text-[15px]">
              Mengedepankan kualitas pendidikan vokasional yang relevan dengan
              industri 4.0
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5"></div>
            <p className="text-neutral-700 text-[15px]">
              Menciptakan ekosistem pembelajaran yang inovatif dan adaptif
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 bg-orange-400 rounded-full mt-1.5"></div>
            <p className="text-neutral-700 text-[15px]">
              Menjadi mitra strategis dalam pengembangan SDM nasional
            </p>
          </div>
        </div>
      </div>

      {/* Kanan: Foto */}
      <div
        className="relative overflow-hidden rounded-xl bg-neutral-100 photo-wrap"
        style={{ width: "472px", height: "492px" }}
      >
        {/* Lapisan warna di kiri */}
        <div className="absolute inset-y-0 left-0 w-1/2  mix-blend-multiply z-10 rounded-l-xl" />
        <img src="/Visi Misi section/1.png" alt="Vision Image" loading="lazy" />
      </div>
    </div>
  );

  return (
    <section id="about" className="min-h-screen flex items-center py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
          {/* Tabs */}
          <div className="mb-8 flex gap-3">
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all ${
                activeTab === "mission"
                  ? "border-orange-400 text-orange-500 bg-orange-50"
                  : "border-neutral-200 text-neutral-400 bg-neutral-50 hover:text-neutral-600 hover:border-neutral-300"
              }`}
            >
              Mission
            </button>
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-all ${
                activeTab === "vision"
                  ? "border-orange-400 text-orange-500 bg-orange-50"
                  : "border-neutral-200 text-neutral-400 bg-neutral-50 hover:text-neutral-600 hover:border-neutral-300"
              }`}
            >
              Vision
            </button>
          </div>

          {/* Content berdasarkan tab yang aktif */}
          {activeTab === "mission" ? <MissionContent /> : <VisionContent />}
        </div>
      </div>

      {/* Styling untuk gambar (tanpa className tambahan) */}
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
