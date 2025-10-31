import {
  CurrencyDollarIcon,
  TrophyIcon,
  GlobeAltIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import type { ComponentType, SVGProps } from "react";

type StatItem = {
  label: string;
  sub: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const statItems: StatItem[] = [
  {
    label: "$26.3bn",
    sub: "Total global economic contribution ($CAD)",
    Icon: CurrencyDollarIcon,
  },
  {
    label: "$4.6bn",
    sub: "Contracts awarded to First Nations businesses",
    Icon: TrophyIcon,
  },
  {
    label: "2030",
    sub: "Real zero target for emissions across",
    Icon: GlobeAltIcon,
  },
  {
    label: "20,000+",
    sub: "Total global economic contribution ($CAD)",
    Icon: UsersIcon,
  },
];

export default function Stats() {
  return (
    <section className="min-h-screen flex items-center py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="mb-4 text-center font-poppins text-[48px] font-semibold tracking-tight text-neutral-900">
          Investing in Gold, Investing in Stability
        </h2>
        <p className="mx-auto mb-14 max-w-2xl text-center text-base md:text-lg leading-relaxed text-neutral-600">
          In uncertain times, gold has always been a reliable store of value.
          Whether you’re looking to diversify your portfolio or hedge against
          market volatility, our gold provides the stability and trust you
          deserve.
        </p>

        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-4">
          {statItems.map(({ label, sub, Icon }) => (
            <div
              key={label}
              className="rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-neutral-200"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 ring-1 ring-neutral-200">
                <Icon className="h-7 w-7 text-black" aria-hidden="true" />
              </div>
              <div className="mb-2 text-3xl font-extrabold tracking-tight text-[#8B5A2B]">
                {label}
              </div>
              <div className="text-sm md:text-base text-neutral-600">{sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
