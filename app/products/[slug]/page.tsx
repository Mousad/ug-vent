
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Download,
  ShieldCheck,
  Headset,
  MessageCircle,
  MoveHorizontal,
  ExternalLink,
} from "lucide-react";

import {
  categories,
  getCategory,
  imageSlug,
} from "@/data/products";

import { categoryImages } from "@/data/category-images";
import { Shell } from "@/components/site";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const c = getCategory((await params).slug);

  return {
    title: c?.title || "المنتجات",
    description: c?.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const c = getCategory((await params).slug);

  if (!c) notFound();

  // حماية البيانات من القيم غير الموجودة
  const products = c.products ?? [];
  const features = c.features ?? [];
  const applications = c.applications ?? [];

  // إنشاء أعمدة تلقائية إذا لم تكن columns موجودة
  const maxValuesLength = Math.max(
    0,
    ...products.map((p) => p.values?.length ?? 0)
  );

  const columns =
    c.columns?.length > 0
      ? c.columns
      : Array.from(
          { length: maxValuesLength },
          (_, index) => `المواصفة ${index + 1}`
        );

  return (
    <Shell>
      {/* ───────── الهيرو ───────── */}
      <section className="relative isolate overflow-hidden bg-[#0B3C6F] text-white">
        {/* صورة الفئة */}
        <div className="absolute inset-0 -z-20">
          {categoryImages[c.slug] && (
            <img
              src={categoryImages[c.slug]}
              alt=""
              aria-hidden="true"
              className="size-full object-cover"
            />
          )}
        </div>

        {/* طبقة داكنة */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-l from-[#061D35]/95 via-[#0B3C6F]/80 to-[#0B3C6F]/45"
        />

        {/* خطوط هندسية */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* محتوى الهيرو */}
        <div className="container relative grid items-center gap-10 py-14 md:py-20 lg:grid-cols-[1.4fr_1fr]">
          <div className="max-w-2xl">
            {/* مسار التنقل */}
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-blue-100/80">
              <Link href="/" className="transition hover:text-white">
                الرئيسية
              </Link>

              <span>/</span>

              <Link
                href="/products"
                className="transition hover:text-white"
              >
                المنتجات
              </Link>

              <span>/</span>

              <span className="font-bold text-white">{c.title}</span>
            </div>

            {/* التصنيف */}
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur">
              حلول UG VENT الهندسية
            </span>

            {/* عنوان الفئة */}
            <h1 className="text-3xl font-black leading-tight md:text-5xl lg:text-6xl">
              {c.title}
            </h1>

            {/* الوصف */}
            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/90 md:text-lg">
              {c.description}
            </p>

            {/* الأزرار */}
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2F80ED] px-4 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-white hover:text-[#0B3C6F]"
              >
                اطلب عرض سعر
                <ArrowLeft className="size-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#0B3C6F]"
              >
                <MessageCircle className="size-4" />
                تواصل مع فريقنا
              </Link>
            </div>

            {/* مميزات مختصرة */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-blue-50/90">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="size-4 text-blue-300" />
                جودة هندسية
              </span>

              <span className="inline-flex items-center gap-2">
                <Check className="size-4 text-blue-300" />
                حلول حسب متطلبات المشروع
              </span>
            </div>
          </div>

          {/* البطاقة الجانبية */}
          <div className="hidden lg:flex lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl border border-white/20 bg-[#061D35]/55 p-7 shadow-2xl backdrop-blur-md">
              <span className="text-sm font-bold text-blue-200">
                {c.en}
              </span>

              <h2 className="mt-3 text-2xl font-black">
                حلول مصممة لمشروعك
              </h2>

              <p className="mt-3 text-sm leading-7 text-blue-50/80">
                تعرّف على تفاصيل المنتجات والمواصفات الفنية واختر الحل
                المناسب لاحتياجات التهوية وسلامة المنشآت.
              </p>

              <div className="mt-6 border-t border-white/15 pt-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-blue-200"
                >
                  اطلب استشارة هندسية
                  <ArrowLeft className="size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── المحتوى ───────── */}
      <section className="container grid gap-8 py-14 lg:grid-cols-[.8fr_2.2fr] lg:gap-10 lg:py-16">
        {/* الشريط الجانبي */}
        <aside className="h-fit space-y-5 lg:sticky lg:top-28">
          {/* مميزات الفئة */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black text-[#0B3C6F]">
              مميزات الفئة
            </h2>

            <ul className="mt-5 flex flex-col gap-4">
              {features.map((x) => (
                <li
                  key={x}
                  className="flex gap-3 text-sm leading-6"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-blue-50">
                    <Check
                      className="size-3 text-[#2F80ED]"
                      strokeWidth={3}
                    />
                  </span>

                  {x}
                </li>
              ))}
            </ul>

            <div className="mt-7 border-t pt-6">
              <p className="text-sm font-bold text-slate-500">
                مجالات الاستخدام
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {applications.map((x) => (
                  <span
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-[#0B3C6F]"
                    key={x}
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* بطاقة الاستشارة */}
          <div className="group relative isolate overflow-hidden rounded-2xl bg-[#0B3C6F] p-6 text-white">
            <img
              src="https://www.sodeca.com/images/homepage/home-banner-advice.jpg"
              alt="فريق الدعم الفني والهندسي"
              className="absolute inset-0 -z-20 size-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-gradient-to-b from-[#061D35]/75 via-[#0B3C6F]/85 to-[#061D35]/95"
            />

            <div className="relative mb-5 grid size-12 place-items-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
              <Headset className="size-6" />
            </div>

            <h3 className="relative text-lg font-black">
              محتار في الموديل المناسب؟
            </h3>

            <p className="relative mt-2 text-sm leading-7 text-blue-50">
              فريقنا الهندسي يحسب التدفق المطلوب ويرشح لك الأنسب لمشروعك.
            </p>

            <Link
              href="/contact"
              className="relative mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-[#0B3C6F] transition hover:bg-blue-100"
            >
              استشارة هندسية مجانية
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </aside>

        {/* جدول المواصفات */}
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-2xl font-black text-[#0B3C6F]">
              المواصفات الفنية
            </h2>

            <a
              href="/ugvent-catalog.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-[#0B3C6F] px-4 py-2.5 text-sm font-bold text-[#0B3C6F] transition hover:bg-[#0B3C6F] hover:text-white"
            >
              <Download className="size-4" />
              تحميل الكتالوج
            </a>
          </div>

          {/* تلميح السحب في الموبايل */}
          <p className="mb-3 flex items-center gap-2 text-xs text-slate-500 md:hidden">
            <MoveHorizontal className="size-4" />
            اسحب الجدول يميناً ويساراً لعرض كل الأعمدة
          </p>

          <div className="max-h-[70vh] overflow-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[680px] text-right text-sm">
              <thead>
                <tr>
                  <th className="sticky right-0 top-0 z-20 bg-[#0B3C6F] px-4 py-4 text-white">
                    Model
                  </th>

                  {columns.map((col, index) => (
                    <th
                      className="sticky top-0 z-10 whitespace-nowrap bg-[#0B3C6F] px-4 py-4 text-white"
                      key={`${col}-${index}`}
                    >
                      {col}
                    </th>
                  ))}

                  <th className="sticky top-0 z-10 whitespace-nowrap bg-[#0B3C6F] px-4 py-4 text-white">
                    الإجراءات
                  </th>
                </tr>
              </thead>

              <tbody>
                {products.map((p) => {
                  const productHref = `/products/item/${c.slug}--${imageSlug(p.model)}`;

                  return (
                    <tr
                      className="border-t bg-white transition even:bg-slate-50 hover:bg-blue-50"
                      key={p.model}
                    >
                      <td className="sticky right-0 whitespace-nowrap bg-inherit px-4 py-4 font-black text-[#0B3C6F]">
                        <Link
                          href={productHref}
                          className="inline-flex items-center gap-2 transition hover:text-[#2F80ED] hover:underline"
                          title={`عرض تفاصيل ${p.model}`}
                        >
                          {p.model}
                          <ExternalLink className="size-3.5 shrink-0 opacity-60" />
                        </Link>
                      </td>

                      {columns.map((_, i) => (
                        <td
                          className="whitespace-nowrap px-4 py-4 text-slate-600"
                          key={i}
                        >
                          {p.values?.[i] ?? "—"}
                        </td>
                      ))}

                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={productHref}
                            className="whitespace-nowrap rounded-md border border-[#0B3C6F] px-3 py-2 text-xs font-bold text-[#0B3C6F] transition hover:bg-blue-50"
                          >
                            التفاصيل
                          </Link>

                          <Link
                            href={`/contact?product=${encodeURIComponent(p.model)}`}
                            className="whitespace-nowrap rounded-md bg-[#2F80ED] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#0B3C6F]"
                          >
                            اطلب السعر
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {products.length === 0 && (
                  <tr>
                    <td
                      colSpan={columns.length + 2}
                      className="px-4 py-10 text-center text-slate-500"
                    >
                      لا توجد منتجات متاحة حالياً في هذه الفئة.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-blue-50 p-5 text-sm leading-7 text-[#0B3C6F]">
            <ShieldCheck className="mt-0.5 size-6 shrink-0 text-[#2F80ED]" />
            جميع المواصفات قابلة للتخصيص وفق متطلبات المشروع. تواصل مع فريقنا
            الهندسي للاستشارة.
          </div>
        </div>
      </section>

      {/* ───────── فئات ذات صلة ───────── */}
      <section className="section-grid">
        <div className="container py-14 md:py-16">
          <h2 className="mb-8 text-2xl font-black text-[#0B3C6F]">
            فئات ذات صلة
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories
              .filter((x) => x.slug !== c.slug)
              .slice(0, 4)
              .map((x) => (
                <Link
                  className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 font-bold text-[#0B3C6F] shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                  key={x.slug}
                  href={`/products/${x.slug}`}
                >
                  {x.title}

                  <ArrowLeft className="size-4 shrink-0 text-[#2F80ED] transition group-hover:-translate-x-1" />
                </Link>
              ))}
          </div>
        </div>
      </section>
    </Shell>
  );
}
