const statItems = [
  { label: "$26.3bn", sub: "Total global economic contribution (SEAC)" },
  { label: "$4.6bn", sub: "Contracts awarded to First Nations businesses" },
  { label: "2030", sub: "Net zero target for emissions across" },
  { label: "20,000+", sub: "Total global economic contribution (SEAC)" },
];

export default function Stats() {
  return (
    <section className="min-h-screen flex items-center py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-xl bg-white p-8 shadow-sm">
          <h2 className="mb-2 text-center text-2xl font-semibold">
            Investing in Gold, Investing in Stability
          </h2>
          <p className="mb-8 text-center text-sm text-neutral-600">
            Investasi emas tidak goyah karena stabilitas nilai. Apakah Anda
            investor, pekerja, atau pelaku industri, kami hadir sebagai mitra
            terpercaya.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {statItems.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <div className="text-xl font-bold primary-text">{s.label}</div>
                <div className="text-sm text-neutral-600">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
