
import Link from "next/link";
import {
  ArrowLeft,
  Factory,
  Building2,
  Fan,
  Wind,
  ShieldCheck,
  Layers3,
} from "lucide-react";

import { groups, categoriesOf } from "@/data/products";

const groupStyles = {
  industrial: {
    image: "/categories/industrial.jpg",
    icon: Factory,
    accent: "#D9252A",
    features: [
      { icon: Fan, label: "مراوح صناعية" },
      { icon: Wind, label: "أنظمة شفط الدخان" },
      { icon: ShieldCheck, label: "حلول للمنشآت الكبيرة" },
    ],
  },
  commercial: {
    image: "/categories/commercial.jpg",
    icon: Building2,
    accent: "#2F80ED",
    features: [
      { icon: Wind, label: "مراوح مجاري الهواء" },
      { icon: Building2, label: "تهوية المباني" },
      { icon: Layers3, label: "وحدات التهوية" },
    ],
  },
};

type ProductGroupsProps = {
  compact?: boolean;
};

export default function ProductGroups({
  compact = false,
}: ProductGroupsProps) {
  return (
    <section className="container py-14 sm:py-20">
      <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
        <span className="text-sm font-bold text-[#D9252A]">
          حلولنا ومنتجاتنا
        </span>

        <h2 className="mt-3 text-2xl font-black leading-relaxed text-[#0B3C6F] sm:text-4xl">
          اختر القسم المناسب لمشروعك
        </h2>

        <p className="mt-3 text-sm leading-7 text-slate-500 sm:text-base sm:leading-8">
          استكشف حلول التهوية الصناعية والتجارية، وتعرّف على الفئات
          والمنتجات المتاحة لكل استخدام.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 md:gap-6">
        {groups.map((group) => {
          const style = groupStyles[group.id];
          const Icon = style.icon;
          const categoryCount = categoriesOf(group.id).length;

          return (
            <Link
              key={group.id}
href={`/products/group/${group.id}`}
              className="group relative isolate flex min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-[#061B30] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[390px] sm:rounded-3xl sm:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: `url("${style.image}")`,
                }}
              />

              <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#061B30]/95 via-[#061B30]/80 to-[#061B30]/35" />

              <div className="flex items-start justify-between gap-4">
                <span
                  className="grid size-14 place-items-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur sm:size-16"
                  style={{ color: style.accent }}
                >
                  <Icon className="size-7 sm:size-8" />
                </span>

                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-bold text-white/90 backdrop-blur">
                  {categoryCount} فئة
                </span>
              </div>

              <div className="mt-12">
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em] sm:text-sm"
                  style={{ color: style.accent }}
                >
                  {group.en}
                </span>

                <h3 className="mt-2 text-2xl font-black sm:text-3xl">
                  {group.title === "صناعي"
                    ? "التهوية الصناعية"
                    : "التهوية التجارية"}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
                  {group.description}
                </p>

                {!compact && (
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3">
                    {style.features.map(({ icon: FeatureIcon, label }) => (
                      <span
                        key={label}
                        className="inline-flex items-center gap-1.5 text-xs text-white/90 sm:text-sm"
                      >
                        <FeatureIcon className="size-4 shrink-0" />
                        {label}
                      </span>
                    ))}
                  </div>
                )}

                <span className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition group-hover:gap-3"
                  style={{ backgroundColor: style.accent }}
                >
                  استكشف الفئات
                  <ArrowLeft className="size-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
