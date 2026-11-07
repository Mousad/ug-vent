
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  Fan,
  FileText,
  Search,
  X,
} from "lucide-react";

import { imageSlug } from "@/data/products";
import type { Category } from "@/data/products";

const PAGE_SIZE = 12;

type ProductItem = Category["products"][number] & {
  categorySlug: string;
  categoryTitle: string;
  categoryEn: string;
};

type Props = {
  categories: Category[];
};

export default function ProductGroupCatalog({ categories }: Props) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProduct, setSelectedProduct] =
    useState<ProductItem | null>(null);

  const allProducts = useMemo<ProductItem[]>(() => {
    return categories.flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        categorySlug: category.slug,
        categoryTitle: category.title,
        categoryEn: category.en,
      }))
    );
  }, [categories]);

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

  function getProductHref(product: ProductItem) {
    return `/products/${product.categorySlug}--${imageSlug(
      product.model
    )}`;
  }

  function openProduct(product: ProductItem) {
    setSelectedProduct(product);
  }

  function closeProduct() {
    setSelectedProduct(null);
  }

  function updateSearch(value: string) {
    setSearch(value);
    setCurrentPage(1);
  }

  function updateCategory(value: string) {
    setSelectedCategory(value);
    setCurrentPage(1);
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* البحث والفلترة */}
      

        {/* عنوان المنتجات */}
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>

            
<div className="mb-8 w-full">
  <div className="flex items-end gap-2 sm:gap-3">

    {/* شريط البحث الطويل */}
    <div className="min-w-0 flex-1">
      <label
        htmlFor="product-search"
        className="mb-2 block text-xs font-bold text-[#102A49] sm:text-sm"
      >
        ابحث عن منتج
      </label>

      <div className="relative">
        <Search
          size={18}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 sm:right-4"
        />

        <input
          id="product-search"
          type="search"
          value={search}
          onChange={(event) => updateSearch(event.target.value)}
          placeholder="ابحث باسم الموديل أو وصف المنتج..."
          className="h-12 w-full rounded-xl border border-slate-200 bg-white pr-30 pl-3 text-xs text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2F80ED] focus:ring-2 focus:ring-blue-100 sm:h-14 sm:pr-12 sm:text-sm"
        />
      </div>
    </div>

    {/* فلتر صغير بجانب البحث */}
    <div className="w-[112px] shrink-0 sm:w-[170px]">
      <label
        htmlFor="category-filter"
        className="mb-2 block text-xs font-bold text-[#102A49] sm:text-sm"
      >
        الفئة
      </label>

      <div className="relative">
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(event) => updateCategory(event.target.value)}
          className="h-12 w-full appearance-none rounded-xl border border-slate-200 bg-white py-0 pr-3 pl-7 text-xs font-medium text-slate-700 outline-none transition focus:border-[#2F80ED] focus:ring-2 focus:ring-blue-100 sm:h-14 sm:pr-4 sm:pl-9 sm:text-sm"
        >
          <option value="all">الكل</option>

          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.title}
            </option>
          ))}
        </select>

        <ChevronDown
          size={14}
          className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 sm:left-3"
        />
      </div>
    </div>
  </div>

  {/* عدد المنتجات ومسح الفلاتر */}
  <div className="mt-3 flex items-center justify-between">
   

    {(search || selectedCategory !== "all") && (
      <button
        type="button"
        onClick={() => {
          setSearch("");
          setSelectedCategory("all");
          setCurrentPage(1);
        }}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D9252A] transition hover:text-red-700"
      >
        <X size={14} />
        مسح الفلاتر
      </button>
    )}
  </div>
</div>

           

            <h2 className="mt-2 text-2xl font-black text-[#102A49]">
              جميع المنتجات
            </h2>
          </div>

         
        </div>

        {/* شبكة المنتجات */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginatedProducts.map((product, index) => (
              <article
                key={`${product.categorySlug}-${product.model}-${index}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => openProduct(product)}
                  aria-label={`معاينة المنتج ${product.model}`}
                  className="block w-full text-right"
                >
                  {/* صورة المنتج */}
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

                  {/* بيانات المنتج */}
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

                {/* زر المعاينة */}
             
              </article>
            ))}
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
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
                setCurrentPage(1);
              }}
              className="mt-5 rounded-xl bg-[#102A49] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
            >
              عرض كل المنتجات
            </button>
          </div>
        )}

        {/* ترقيم الصفحات */}
        {totalPages > 1 && (
          <nav
            aria-label="ترقيم صفحات المنتجات"
            className="mt-10 flex flex-wrap items-center justify-center gap-2"
          >
            <button
              type="button"
              disabled={safePage === 1}
              onClick={() =>
                setCurrentPage((page) => Math.max(1, page - 1))
              }
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
                onClick={() => setCurrentPage(page)}
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
              onClick={() =>
                setCurrentPage((page) =>
                  Math.min(totalPages, page + 1)
                )
              }
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

      {/* نافذة معاينة المنتج المنبثقة */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#061B30]/75 p-3 backdrop-blur-sm sm:p-6"
          onClick={closeProduct}
          role="presentation"
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
          >
            {/* رأس النافذة */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur">
              <div>
                <p className="text-[10px] font-bold tracking-widest text-[#2F80ED]">
                  UG VENT / PRODUCT PREVIEW
                </p>

                <h2 className="mt-1 text-base font-black text-[#102A49]">
                  معاينة المنتج
                </h2>
              </div>

              <button
                type="button"
                onClick={closeProduct}
                aria-label="إغلاق النافذة"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-red-50 hover:text-red-600"
              >
                <X size={20} />
              </button>
            </div>

            {/* محتوى المنتج */}
            <div className="grid gap-6 p-5 sm:p-7 md:grid-cols-2">
              {/* صورة المنتج */}
              <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-2xl bg-[#F4F7FA] sm:min-h-[320px]">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.model}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-6"
                />

                <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#2F80ED] shadow-sm">
                  {selectedProduct.categoryTitle}
                </span>
              </div>

              {/* التفاصيل */}
              <div className="flex flex-col justify-center">
                <p className="text-xs font-bold text-[#2F80ED]">
                  PRODUCT MODEL
                </p>

                <h3
                  id="product-modal-title"
                  className="mt-2 text-2xl font-black text-[#102A49] sm:text-3xl"
                >
                  {selectedProduct.model}
                </h3>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {selectedProduct.desc}
                </p>

                <div className="mt-5 space-y-3">
                  {selectedProduct.flow && (
                    <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
                      <span className="text-xs text-slate-500">
                        تدفق الهواء
                      </span>
                      <span className="text-sm font-black text-[#102A49]">
                        {selectedProduct.flow}
                      </span>
                    </div>
                  )}

                  {selectedProduct.extra && (
                    <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
                      <span className="text-xs text-slate-500">
                        المواصفات
                      </span>
                      <span className="text-sm font-bold text-[#102A49]">
                        {selectedProduct.extra}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 p-4">
                    <span className="text-xs text-slate-500">
                      صفحة الكتالوج
                    </span>
                    <span className="text-sm font-black text-[#102A49]">
                      {selectedProduct.page}
                    </span>
                  </div>
                </div>

                {/* الأزرار */}
               <div className="mt-6 flex flex-row gap-3">
  <Link
    href={getProductHref(selectedProduct)}
    onClick={closeProduct}
    className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-[#102A49] px-3 py-3 text-center text-sm font-bold text-white transition hover:bg-[#2F80ED]"
  >
    عرض التفاصيل 
    <ArrowLeft size={17} />
  </Link>

 <a
  href={`https://wa.me/201008404000?text=${encodeURIComponent(
    `مرحباً، أرغب في طلب المنتج التالي من UG VENT:\n\nالموديل: ${selectedProduct.model}\n\nيرجى تزويدي بالتفاصيل والسعر وطريقة الطلب.`
  )}`}
  target="_blank"
  rel="noreferrer"
  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-3 text-center text-sm font-bold text-slate-700 transition hover:border-[#2F80ED] hover:text-[#2F80ED]"
>
  
  طلب المنتج
</a>
</div>
              </div>
            </div>

            {/* تذييل النافذة */}
            
          </section>
        </div>
      )}
    </>
  );
}
