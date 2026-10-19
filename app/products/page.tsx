"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Search,
  Fan,
  ShieldCheck,
  Wind,
  CircleGauge,
  Building2,
  PanelsTopLeft,
  CookingPot,
  RefreshCw,
  Leaf,
  Settings2,
  Boxes,
  SlidersHorizontal,
  X,
} from "lucide-react";

import { Shell } from "@/components/site";
import { categories } from "@/data/products";

const categoryImages: Record<string, string> = {
  "axial-fans":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  "cabinet-smoke-fans":
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85",
  "jet-fans":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  "centrifugal-fans":
    "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1000&q=85",
  "roof-fans":
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=85",
  "duct-fans":
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
  "wall-fans":
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=85",
  "box-fans":
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1000&q=85",
  "kitchen-exhaust":
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85",
  "heat-recovery":
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=85",
  "shelter-fans":
    "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=85",
  "greenhouse-fans":
    "https://images.unsplash.com/photo-1499529112087-3cb3b73cffc4?auto=format&fit=crop&w=1000&q=85",
  accessories:
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
};

const categoryIcons: Record<string, typeof Fan> = {
  fan: Fan,
  shield: ShieldCheck,
  wind: Wind,
  circle: CircleGauge,
  roof: Building2,
  duct: PanelsTopLeft,
  wall: Fan,
  box: Boxes,
  kitchen: CookingPot,
  recovery: RefreshCw,
  leaf: Leaf,
  settings: Settings2,
};

const filters = [
  { label: "كل الفئات", value: "all" },
  { label: "التهوية الصناعية", value: "ventilation" },
  { label: "طرد الدخان", value: "smoke" },
  { label: "حلول متخصصة", value: "special" },
];

function getGroup(slug: string) {
  if (slug === "cabinet-smoke-fans" || slug === "jet-fans") {
    return "smoke";
  }

  if (
    ["axial-fans", "centrifugal-fans", "roof-fans", "wall-fans", "duct-fans"].includes(
      slug
    )
  ) {
    return "ventilation";
  }

  return "special";
}

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCategories = useMemo(() => {
    const query = search.trim().toLowerCase();

    return categories.filter((category) => {
      const matchesSearch =
        !query ||
        category.title.toLowerCase().includes(query) ||
        category.en.toLowerCase().includes(query) ||
        category.description.toLowerCase().includes(query) ||
        category.products.some((product) =>
          product.model.toLowerCase().includes(query)
        );

      const matchesFilter =
        activeFilter === "all" || getGroup(category.slug) === activeFilter;

      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <Shell>
      <main className="min-h-screen bg-[#F5F8FC]">
        {/* عنوان مختصر */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-9 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
               

                <h1 className="text-3xl font-black tracking-tight text-[#082747] sm:text-4xl">
                  المنتجات
                </h1>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
                  اكتشف حلول التهوية الصناعية وطرد الدخان وأنظمة معالجة الهواء
                  المصممة لمختلف التطبيقات الهندسية.
                </p>
              </div>

             
            </div>
          </div>
        </section>

        {/* البحث والفلاتر */}
        <section className="mx-auto max-w-7xl px-4 pt-7 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search className="absolute right-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="البحث في المنتجات"
                placeholder="ابحث باسم الفئة أو الموديل..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-[#F8FAFD] pr-12 pl-10 text-sm text-[#082747] outline-none transition placeholder:text-slate-400 focus:border-[#2F80ED] focus:bg-white focus:ring-4 focus:ring-blue-50"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="مسح البحث"
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {filters.map((filter) => {
                const active = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`shrink-0 rounded-xl border px-4 py-3 text-xs font-bold transition sm:text-sm ${
                      active
                        ? "border-[#0B3C6F] bg-[#0B3C6F] text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-[#0B3C6F]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* بطاقات الفئات */}
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {filteredCategories.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((category, index) => {
                const Icon = categoryIcons[category.icon] || Fan;

                return (
                  <article
                    key={category.slug}
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
                  >
                    <Link
                      href={`/products/${category.slug}`}
                      className="block"
                      aria-label={`استكشف ${category.title}`}
                    >
                      {/* صورة الفئة */}
                      <div className="relative h-52 overflow-hidden bg-[#E8EEF5] sm:h-56">
                        <img
                          src={categoryImages[category.slug]}
                          alt={category.title}
                          loading={index < 3 ? "eager" : "lazy"}
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#061D35]/75 via-[#061D35]/10 to-transparent" />

                        <span className="absolute right-4 top-4 rounded-lg border border-white/30 bg-white/95 px-3 py-1.5 text-[11px] font-bold text-[#0B3C6F] backdrop-blur">
                          {category.en}
                        </span>

                        <div className="absolute bottom-4 right-4 left-4 flex items-end justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                              <Icon className="size-5" />
                            </span>

                            <div>
                              <p className="text-xs font-medium text-white/75">
                                حلول UG VENT
                              </p>
                              <h2 className="mt-1 text-lg font-black text-white sm:text-xl">
                                {category.title}
                              </h2>
                            </div>
                          </div>

                          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white text-[#0B3C6F] transition group-hover:bg-[#2F80ED] group-hover:text-white">
                            <ArrowLeft className="size-5" />
                          </span>
                        </div>
                      </div>
                    </Link>

                    {/* تفاصيل الفئة */}
                    <div className="p-5 sm:p-6">
                      <p className="min-h-[52px] text-sm leading-7 text-slate-500">
                        {category.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {category.applications.slice(0, 3).map((application) => (
                          <span
                            key={application}
                            className="rounded-md bg-[#F2F6FB] px-2.5 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {application}
                          </span>
                        ))}
                      </div>

                      <div className="my-5 border-t border-slate-100" />

                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <span className="block text-xs text-slate-400">
                            الموديلات المتاحة
                          </span>
                          <span className="mt-1 block text-base font-black text-[#082747]">
                            {category.products.length}{" "}
                            <span className="text-xs font-medium text-slate-500">
                              موديل
                            </span>
                          </span>
                        </div>

                        <Link
                          href={`/products/${category.slug}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-[#0B3C6F] px-4 py-3 text-xs font-bold text-white transition hover:bg-[#2F80ED] sm:text-sm"
                        >
                          استكشف الفئة
                          <ArrowLeft className="size-4" />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
              <Search className="mx-auto size-9 text-slate-300" />
              <h2 className="mt-4 text-lg font-black text-[#082747]">
                لا توجد نتائج مطابقة
              </h2>
              <p className="mt-2 text-sm text-slate-500">
                جرّب اسم موديل آخر أو غيّر الفلتر المحدد.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveFilter("all");
                }}
                className="mt-5 rounded-xl bg-[#0B3C6F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
              >
                عرض كل الفئات
              </button>
            </div>
          )}
        </section>

        {/* شريط هندسي مختصر */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-5 px-4 py-7 sm:grid-cols-3 sm:px-6 lg:px-8">
            {[
              {
                title: "حلول هندسية متخصصة",
                text: "أنظمة مصممة لتناسب احتياجات المشروع.",
              },
              {
                title: "مجموعة واسعة من الموديلات",
                text: "خيارات متعددة للتدفق والضغط والتطبيق.",
              },
              {
                title: "دعم فني للمشروعات",
                text: "مساعدة في اختيار الحل المناسب للتطبيق.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]">
                  <ShieldCheck className="size-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#082747]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Shell>
  );
}