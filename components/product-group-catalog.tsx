
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Fan,
  ShieldCheck,
  CircleGauge,
  Building2,
  PanelsTopLeft,
  CookingPot,
  RefreshCw,
  Leaf,
  Settings2,
  Boxes,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Wind,
  Search,
  X,
} from "lucide-react";

import type { Category } from "@/data/products";

type Props = {
  categories: Category[];
};

const PAGE_SIZE = 8;

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

const categoryImages: Record<string, string> = {
  "axial-fans":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  "exproof-fans":
    "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85",
  "smoke-extract-fans":
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=85",
  "radial-fans":
    "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1000&q=85",
  "shelter-fans":
    "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1000&q=85",
  "roof-fans":
    "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=85",
  "duct-fans":
    "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
  "ec-fans":
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=85",
  "kitchen-exhaust":
    "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1000&q=85",
  "ventilation-units":
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  "heat-recovery":
    "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1000&q=85",
  "bathroom-fans":
    "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=85",
  "pellet-greenhouse":
    "https://images.unsplash.com/photo-1499529112087-3cb3b73cffc4?auto=format&fit=crop&w=1000&q=85",
};

export default function ProductGroupCatalog({ categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const allProducts = useMemo(
    () =>
      categories.flatMap((category) =>
        category.products.map((product, index) => ({
          ...product,
          categorySlug: category.slug,
          categoryTitle: category.title,
          categoryEn: category.en,
          categoryIndex: index,
        }))
      ),
    [categories]
  );

  const query = search.trim().toLocaleLowerCase();

  const filteredProducts = useMemo(() => {
    const source =
      activeCategory === "all"
        ? allProducts
        : allProducts.filter(
            (product) => product.categorySlug === activeCategory
          );

    // يبدأ البحث بعد كتابة حرفين على الأقل
    if (query.length < 2) return source;

    return source.filter((product) =>
      [
        product.model,
        product.desc,
        product.flow ?? "",
        product.extra ?? "",
        product.categoryTitle,
        product.categoryEn,
      ].some((value) =>
        String(value).toLocaleLowerCase().includes(query)
      )
    );
  }, [allProducts, activeCategory, query]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );

  const currentPage = Math.min(page, totalPages);

  const visibleProducts = filteredProducts.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function chooseCategory(slug: string) {
    setActiveCategory(slug);
    setPage(1);
  }

  function changeSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  const activeCategoryData = categories.find(
    (category) => category.slug === activeCategory
  );

  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-10 sm:px-6 lg:px-8">
      {/* عنوان الكتالوج */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
         
          <h2 className="mt-2 text-2xl font-black text-[#082747] sm:text-3xl">
            {activeCategory === "all"
              ? "جميع المنتجات"
              : activeCategoryData?.title}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
            اختر الفئة المناسبة أو ابحث عن موديل ومواصفاته للوصول إلى المنتج
            المطلوب بسهولة.
          </p>
        </div>

       
      </div>

      {/* البحث */}
      <div className="mt-7">
       

        <div className="flex h-14 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 transition focus-within:border-[#2F80ED] focus-within:ring-4 focus-within:ring-blue-100">
          <Search className="size-5 shrink-0 text-slate-400" />

          <input
            id="product-search"
            type="search"
            value={search}
            onChange={(event) => changeSearch(event.target.value)}
            placeholder="  ابحث عن منتج  "
            className="h-full min-w-0 flex-1 bg-transparent text-sm text-[#082747] outline-none placeholder:text-slate-400"
          />

          {search && (
            <button
              type="button"
              onClick={() => changeSearch("")}
              aria-label="مسح البحث"
              className="grid size-8 shrink-0 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            >
              <X className="size-4" />
            </button>
          )}
        </div>

        {search.trim().length === 1 && (
          <p className="mt-2 text-xs text-slate-400">
            اكتب حرفًا آخر على الأقل لبدء البحث.
          </p>
        )}
      </div>

      {/* فلترة الفئات */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-bold text-[#082747]">
          تصفح حسب الفئة
        </p>

        <div className="flex gap-2 overflow-x-auto pb-3">
          <button
            type="button"
            onClick={() => chooseCategory("all")}
            className={`shrink-0 rounded-xl border px-4 py-3 text-sm font-bold transition ${
              activeCategory === "all"
                ? "border-[#0B3C6F] bg-[#0B3C6F] text-white shadow-md shadow-blue-950/10"
                : "border-slate-200 bg-white text-slate-600 hover:border-[#0B3C6F] hover:text-[#0B3C6F]"
            }`}
          >
            كل المنتجات
            <span
              className={`mr-2 rounded-md px-2 py-1 text-xs ${
                activeCategory === "all"
                  ? "bg-white/15 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {allProducts.length}
            </span>
          </button>

          {categories.map((category) => {
            const active = activeCategory === category.slug;

            return (
              <button
                key={category.slug}
                type="button"
                onClick={() => chooseCategory(category.slug)}
                className={`shrink-0 rounded-xl border px-4 py-3 text-sm font-bold transition ${
                  active
                    ? "border-[#0B3C6F] bg-[#0B3C6F] text-white shadow-md shadow-blue-950/10"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#0B3C6F] hover:text-[#0B3C6F]"
                }`}
              >
                {category.title}
                <span
                  className={`mr-2 rounded-md px-2 py-1 text-xs ${
                    active
                      ? "bg-white/15 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {category.products.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* نتائج المنتجات */}
     

      {visibleProducts.length > 0 ? (
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {visibleProducts.map((product) => (
            <article
              key={`${product.categorySlug}-${product.model}-${product.categoryIndex}`}
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/5"
            >
              <Link
                href={`/products/${product.categorySlug}`}
                aria-label={`عرض فئة ${product.categoryTitle} وموديل ${product.model}`}
                className="relative flex h-40 items-center justify-center overflow-hidden bg-white p-4 sm:h-52 sm:p-5"
              >
                <img
                  src={product.image}
                  alt={`${product.model} - ${product.desc}`}
                  loading="lazy"
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />

                <span className="absolute right-2 top-2 max-w-[75%] truncate rounded-lg border border-slate-200 bg-white/95 px-2 py-1.5 text-[10px] font-bold text-[#0B3C6F] sm:right-3 sm:top-3 sm:px-2.5 sm:text-[11px]">
                  {product.categoryTitle}
                </span>

                <span className="absolute bottom-2 left-2 rounded-lg bg-[#F2F6FB] px-2 py-1.5 text-[10px] font-bold text-[#0B3C6F] sm:bottom-3 sm:left-3 sm:px-2.5 sm:text-xs">
                  {product.model}
                </span>
              </Link>

              <div className="flex flex-1 flex-col border-t border-slate-100 p-3 sm:p-5">
                <span className="text-[10px] font-bold text-[#D9252A] sm:text-xs">
                  MODEL: {product.model}
                </span>

                <h3 className="mt-2 line-clamp-3 min-h-[60px] text-xs font-bold leading-6 text-[#082747] sm:text-sm">
                  {product.desc}
                </h3>

                <div className="mt-3 space-y-3 border-t border-slate-100 pt-3 sm:mt-4 sm:pt-4">
                  {product.flow && (
                    <div className="flex items-start gap-2">
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-blue-50 text-[#0B3C6F] sm:size-8">
                        <CircleGauge className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[10px] text-slate-400">
                          معدل التدفق / القدرة
                        </span>
                        <span className="mt-1 block break-words text-[11px] font-semibold leading-5 text-slate-700 sm:text-xs">
                          {product.flow}
                        </span>
                      </div>
                    </div>
                  )}

                  {product.extra && (
                    <div className="flex items-start gap-2">
                      <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-red-50 text-[#D9252A] sm:size-8">
                        <ShieldCheck className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-[10px] text-slate-400">
                          مواصفات إضافية
                        </span>
                        <span className="mt-1 block break-words text-[11px] font-semibold leading-5 text-slate-700 sm:text-xs">
                          {product.extra}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-[10px] text-slate-400 sm:text-xs">
                    <BookOpen className="size-4 shrink-0" />
                    <span>صفحة {product.page} في الكتالوج</span>
                  </div>
                </div>

                <Link
                  href={`/products/${product.categorySlug}`}
                  className="mt-4 inline-flex min-h-10 items-center justify-center gap-1.5 rounded-xl bg-[#0B3C6F] px-2 py-2.5 text-[10px] font-bold text-white transition hover:bg-[#2F80ED] sm:mt-5 sm:min-h-11 sm:gap-2 sm:px-3 sm:text-sm"
                >
                  تفاصيل الفئة
                  <ArrowLeft className="size-3.5 sm:size-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center">
          <Search className="mx-auto size-9 text-slate-300" />
          <h3 className="mt-4 font-black text-[#082747]">
            ما لقينا منتجات مطابقة
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-500">
            جرّب كتابة موديل مختلف أو اختر فئة أخرى.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch("");
              setActiveCategory("all");
              setPage(1);
            }}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#0B3C6F] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
          >
            عرض كل المنتجات
            <X className="size-4" />
          </button>
        </div>
      )}

      {/* أرقام الصفحات */}
      {filteredProducts.length > PAGE_SIZE && (
        <nav
          aria-label="صفحات المنتجات"
          className="mt-9 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => {
              setPage((previous) => Math.max(1, previous - 1));
              document
                .getElementById("product-search")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            disabled={currentPage === 1}
            className="inline-flex h-10 items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-[#0B3C6F] transition hover:border-[#0B3C6F] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
            <span className="hidden sm:inline">السابق</span>
          </button>

          {Array.from({ length: totalPages }, (_, index) => index + 1)
            .filter(
              (pageNumber) =>
                pageNumber === 1 ||
                pageNumber === totalPages ||
                Math.abs(pageNumber - currentPage) <= 1
            )
            .reduce<(number | "dots")[]>((result, pageNumber, index, list) => {
              if (
                index > 0 &&
                pageNumber - list[index - 1] > 1
              ) {
                result.push("dots");
              }
              result.push(pageNumber);
              return result;
            }, [])
            .map((pageNumber, index) =>
              pageNumber === "dots" ? (
                <span
                  key={`dots-${index}`}
                  className="px-1 text-slate-400"
                >
                  …
                </span>
              ) : (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => {
                    setPage(pageNumber);
                    document
                      .getElementById("product-search")
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                  }}
                  aria-current={currentPage === pageNumber ? "page" : undefined}
                  className={`grid size-10 place-items-center rounded-xl border text-sm font-bold transition ${
                    currentPage === pageNumber
                      ? "border-[#0B3C6F] bg-[#0B3C6F] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#0B3C6F] hover:text-[#0B3C6F]"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}

          <button
            type="button"
            onClick={() => {
              setPage((previous) => Math.min(totalPages, previous + 1));
              document
                .getElementById("product-search")
                ?.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            disabled={currentPage === totalPages}
            className="inline-flex h-10 items-center gap-1 rounded-xl border border-slate-200 bg-white px-3 text-sm font-bold text-[#0B3C6F] transition hover:border-[#0B3C6F] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="hidden sm:inline">التالي</span>
            <ChevronLeft className="size-4" />
          </button>
        </nav>
      )}
    </section>
  );
}
