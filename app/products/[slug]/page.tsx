"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  Fan,
  MessageCircle,
  Search,
  X,
} from "lucide-react";

import {
  categories as allCategories,
  imageSlug,
} from "@/data/products";

import type { Category } from "@/data/products";

const PAGE_SIZE = 12;
const WHATSAPP_NUMBER = "201008404000";

type ProductItem = Category["products"][number] & {
  categorySlug: string;
  categoryTitle: string;
  categoryEn: string;
};

export default function ProductGroupCatalog() {
  const params = useParams<{ slug: string }>();

  // تحديد القسم من رابط الصفحة: industrial أو commercial
  const visibleCategories = useMemo(() => {
    if (!Array.isArray(allCategories)) {
      return [];
    }

    const matchedCategories = allCategories.filter(
      (category) => category.group === params.slug
    );

    return matchedCategories.length > 0
      ? matchedCategories
      : allCategories;
  }, [params.slug]);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductItem | null>(null);

  // تجميع جميع المنتجات
  const allProducts = useMemo<ProductItem[]>(() => {
    if (!Array.isArray(visibleCategories)) {
      return [];
    }

    return visibleCategories.flatMap((category) => {
      if (!Array.isArray(category.products)) {
        return [];
      }

      return category.products.map((product) => ({
        ...product,
        categorySlug: category.slug,
        categoryTitle: category.title,
        categoryEn: category.en,
      }));
    });
  }, [visibleCategories]);

  // البحث والفلترة
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    return allProducts.filter((product) => {
      const matchesSearch =
        !query ||
        product.model.toLowerCase().includes(query) ||
        product.desc.toLowerCase().includes(query) ||
        product.categoryTitle.toLowerCase().includes(query) ||
        product.categoryEn.toLowerCase().includes(query);

      const matchesCategory =
        selectedCategory === "all" ||
        product.categorySlug === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [allProducts, search, selectedCategory]);

  // ترقيم الصفحات
  const totalPages = Math.max(
    1,
    Math.ceil(filteredProducts.length / PAGE_SIZE)
  );

  const safePage = Math.min(currentPage, totalPages);

  const paginatedProducts = filteredProducts.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  function updateSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
    setSelectedProduct(null);
  }

  function updateCategory(value: string) {
    setSelectedCategory(value);
    setCurrentPage(1);
    setSelectedProduct(null);
  }

  function clearFilters() {
    setSearch("");
    setSelectedCategory("all");
    setCurrentPage(1);
    setSelectedProduct(null);
  }

  function getProductHref(product: ProductItem) {
    return `/products/${product.categorySlug}--${imageSlug(
      product.model
    )}`;
  }

  // إنشاء رسالة واتساب ببيانات المنتج
  function getWhatsAppHref(product: ProductItem) {
    const message = `مرحباً، أرغب في طلب المنتج التالي من UG VENT:

الموديل: ${product.model}
الفئة: ${product.categoryTitle}
الوصف: ${product.desc}
${product.flow ? `تدفق الهواء: ${product.flow}` : ""}
${product.extra ? `المواصفات: ${product.extra}` : ""}

يرجى تزويدي بالسعر والتفاصيل وطريقة الطلب.`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
  }

  function showProduct(product: ProductItem) {
    setSelectedProduct(product);

    setTimeout(() => {
      document
        .getElementById("product-preview")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

      {/* Search and filters */}
      <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        <div className="grid gap-4 md:grid-cols-[1fr_260px]">

          {/* Search */}
          <div>
            <label
              htmlFor="product-search"
              className="mb-2 block text-sm font-bold text-[#102A49]"
            >
              ابحث عن منتج
            </label>

            <div className="relative">
              <Search
                size={19}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                id="product-search"
                type="search"
                value={search}
                onChange={(event) =>
                  updateSearch(event.target.value)
                }
                placeholder="اكتب اسم الموديل أو وصف المنتج..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pr-11 pl-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2F80ED] focus:bg-white focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          {/* Category filter */}
          <div>
            <label
              htmlFor="category-filter"
              className="mb-2 block text-sm font-bold text-[#102A49]"
            >
              تصفية حسب الفئة
            </label>

            <div className="relative">
              <select
                id="category-filter"
                value={selectedCategory}
                onChange={(event) =>
                  updateCategory(event.target.value)
                }
                className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 px-4 pl-10 text-sm font-medium text-slate-700 outline-none transition focus:border-[#2F80ED] focus:ring-4 focus:ring-blue-100"
              >
                <option value="all">جميع الفئات</option>

                {visibleCategories.map((category) => (
                  <option
                    key={category.slug}
                    value={category.slug}
                  >
                    {category.title}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={17}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <p className="text-sm text-slate-500">
            عدد المنتجات:
            <span className="mr-1 font-black text-[#102A49]">
              {filteredProducts.length}
            </span>
          </p>

          {(search || selectedCategory !== "all") && (
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#D9252A] transition hover:text-red-700"
            >
              <X size={15} />
              مسح البحث والفلاتر
            </button>
          )}
        </div>
      </div>

      {/* Selected product preview */}
      {selectedProduct && (
        <div
          id="product-preview"
          className="mb-8 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-md"
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <div>
              <p className="text-xs font-bold tracking-wide text-[#2F80ED]">
                PRODUCT PREVIEW
              </p>

              <h2 className="mt-1 text-lg font-black text-[#102A49]">
                معاينة المنتج
              </h2>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              aria-label="إغلاق المعاينة"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid gap-6 p-5 md:grid-cols-[minmax(0,0.9fr)_1.1fr] md:p-7">

            {/* Product image */}
            <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden rounded-xl bg-[#F4F7FA] p-5">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.model}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain p-5"
              />
            </div>

            {/* Product information */}
            <div className="flex flex-col justify-center">
              <span className="mb-3 w-fit rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#2F80ED]">
                {selectedProduct.categoryTitle}
              </span>

              <h3 className="text-2xl font-black text-[#102A49]">
                {selectedProduct.model}
              </h3>

              <p className="mt-4 text-sm leading-8 text-slate-600">
                {selectedProduct.desc}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {selectedProduct.flow && (
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-400">
                      معدل تدفق الهواء
                    </p>

                    <p className="mt-2 text-sm font-black text-[#102A49]">
                      {selectedProduct.flow}
                    </p>
                  </div>
                )}

                {selectedProduct.extra && (
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs font-medium text-slate-400">
                      المواصفات
                    </p>

                    <p className="mt-2 text-sm font-black text-[#102A49]">
                      {selectedProduct.extra}
                    </p>
                  </div>
                )}
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex flex-row gap-3">
                <Link
                  href={getProductHref(selectedProduct)}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#102A49] px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-[#2F80ED]"
                >
                  عرض التفاصيل الكاملة
                  <ArrowLeft size={17} />
                </Link>

                <a
                  href={getWhatsAppHref(selectedProduct)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-green-500 hover:text-green-600"
                >
                  <MessageCircle size={17} />
                  طلب المنتج
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Products heading */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold tracking-widest text-[#2F80ED]">
            UG VENT PRODUCTS
          </p>

          <h2 className="mt-2 text-2xl font-black text-[#102A49]">
            جميع المنتجات
          </h2>
        </div>

        <p className="text-sm text-slate-500">
          الصفحة {safePage} من {totalPages}
        </p>
      </div>

      {/* Products grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {paginatedProducts.map((product, index) => {
            const isSelected =
              selectedProduct?.categorySlug ===
                product.categorySlug &&
              selectedProduct?.model === product.model;

            return (
              <article
                key={`${product.categorySlug}-${product.model}-${index}`}
                className={`group overflow-hidden rounded-2xl border bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isSelected
                    ? "border-[#2F80ED] ring-2 ring-blue-100"
                    : "border-slate-200 hover:border-blue-200"
                }`}
              >
                <button
                  type="button"
                  onClick={() => showProduct(product)}
                  className="block w-full text-right"
                >
                  <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#F5F7FA] p-5">
                    <Image
                      src={product.image}
                      alt={product.model}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-contain p-5 transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#2F80ED] shadow-sm">
                      {product.categoryTitle}
                    </span>
                  </div>

                  <div className="p-4">
                    <h3 className="text-lg font-black text-[#102A49] transition group-hover:text-[#2F80ED]">
                      {product.model}
                    </h3>

                    <p className="mt-2 line-clamp-2 min-h-12 text-xs leading-6 text-slate-500">
                      {product.desc}
                    </p>

                    {product.flow && (
                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
                        <span className="text-xs text-slate-400">
                          تدفق الهواء
                        </span>

                        <span className="text-xs font-bold text-[#102A49]">
                          {product.flow}
                        </span>
                      </div>
                    )}
                  </div>
                </button>

                <div className="px-4 pb-4">
                  <button
                    type="button"
                    onClick={() => showProduct(product)}
                    className="flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-[#102A49] transition hover:bg-blue-50 hover:text-[#2F80ED]"
                  >
                    معاينة المنتج
                    <ChevronLeft size={15} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <Fan size={27} />
          </div>

          <h3 className="mt-4 text-lg font-black text-[#102A49]">
            لا توجد منتجات مطابقة
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            جرّب البحث باسم موديل آخر أو اختر فئة مختلفة.
          </p>

          <button
            type="button"
            onClick={clearFilters}
            className="mt-5 rounded-xl bg-[#102A49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
          >
            عرض كل المنتجات
          </button>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          aria-label="ترقيم صفحات المنتجات"
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          <button
            type="button"
            disabled={safePage === 1}
            onClick={() => {
              setCurrentPage((page) =>
                Math.max(1, page - 1)
              );
              setSelectedProduct(null);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-[#2F80ED] hover:text-[#2F80ED] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="الصفحة السابقة"
          >
            <ArrowRight size={17} />
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => {
                setCurrentPage(page);
                setSelectedProduct(null);
              }}
              aria-current={
                safePage === page ? "page" : undefined
              }
              className={`h-10 min-w-10 rounded-xl px-3 text-sm font-bold transition ${
                safePage === page
                  ? "bg-[#102A49] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#2F80ED] hover:text-[#2F80ED]"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={safePage === totalPages}
            onClick={() => {
              setCurrentPage((page) =>
                Math.min(totalPages, page + 1)
              );
              setSelectedProduct(null);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-[#2F80ED] hover:text-[#2F80ED] disabled:cursor-not-allowed disabled:opacity-30"
            aria-label="الصفحة التالية"
          >
            <ArrowLeft size={17} />
          </button>
        </nav>
      )}

      <div className="mt-5 text-center text-xs text-slate-400">
        عرض {paginatedProducts.length} من أصل{" "}
        {filteredProducts.length} منتج
      </div>
    </section>
  );
}