
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Shell } from "@/components/site";
import { categories, groups, imageSlug } from "@/data/products";

import {
  ArrowLeft,
  ArrowRight,
  Fan,
  MessageCircle,
  FileText,
  Wind,
  CheckCircle2,
  Factory,
  Building2,
  Settings2,
  BookOpen,
  Layers3,
  ChevronLeft,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "201008404000";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function getProductHref(categorySlug: string, model: string) {
  return `/products/${categorySlug}--${imageSlug(model)}`;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  // البحث عن المنتج داخل جميع الفئات
  const allProducts = categories.flatMap((category) =>
    category.products.map((item) => ({
      ...item,
      categorySlug: category.slug,
      categoryTitle: category.title,
      categoryEn: category.en,
      categoryDescription: category.description,
      categoryApplications: category.applications,
      categoryFeatures: category.features,
      groupId: category.group,
    }))
  );

  const product = allProducts.find(
    (item) =>
      `${item.categorySlug}--${imageSlug(item.model)}` === slug
  );

  if (!product) {
    notFound();
  }

  const category = categories.find(
    (item) => item.slug === product.categorySlug
  );

  const group = groups.find(
    (item) => item.id === product.groupId
  );

  // منتجات أخرى من نفس الفئة
  const relatedProducts = category
    ? category.products
        .filter((item) => item.model !== product.model)
        .slice(0, 4)
    : [];

  // رسالة واتساب
  const message = `مرحباً، أرغب في الاستفسار عن المنتج من UG VENT:

الموديل: ${product.model}
الفئة: ${product.categoryTitle}
القسم: ${group?.title ?? ""}
الوصف: ${product.desc}
تدفق الهواء: ${product.flow || "يرجى توضيح التدفق"}
المواصفات الإضافية: ${product.extra || "غير محددة"}
صفحة الكتالوج: ${product.page}

يرجى تزويدي بالسعر والتفاصيل الفنية الكاملة.`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Shell>
      <main className="min-h-screen bg-white" dir="rtl">

        {/* Breadcrumb */}
        <section className="border-b border-slate-200 ">
          <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-500 sm:text-sm">
              <Link href="/" className="transition hover:text-[#2F80ED]">
                الرئيسية
              </Link>

              <ChevronLeft size={15} />

            

             

            </div>
          </div>
        </section>

        {/* Main Product */}
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">

            {/* Image */}
            <div>
              <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl  p-5 sm:p-10">
                <Image
                  src={product.image}
                  alt={product.model}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain p-5 sm:p-10"
                />

               
              </div>

              {/* Catalog Reference */}
              <div className="mt-4 flex items-center justify-between gap-3 rounded-[5px] border border-slate-200 bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-[#2F80ED]">
                    <BookOpen size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-slate-500">
                      مرجع المنتج في الكتالوج
                    </p>
                    <p className="mt-1 text-sm font-black text-[#102A49]">
                      صفحة رقم {product.page}
                    </p>
                  </div>
                </div>

                <span className="rounded-lg bg-[#F5F8FC] px-3 py-2 text-xs font-bold text-[#102A49]">
                  BVN Catalog
                </span>
              </div>
            </div>

            {/* Product Information */}
            <div className="flex flex-col">

              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-[#2F80ED]">
                  {product.categoryTitle}
                </span>

                <span className="rounded-full bg-slate-100 px-4 py-2 text-xs font-bold text-slate-600">
                  {group?.title}
                </span>
              </div>

              <p className="mt-7 text-xs font-bold tracking-[0.18em] text-[#2F80ED]">
                UG VENT / PRODUCT DETAILS
              </p>

              <h1 className="mt-3 text-3xl font-black leading-tight text-[#102A49] sm:text-4xl lg:text-5xl">
                {product.model}
              </h1>

              <p className="mt-3 text-sm font-semibold text-slate-400">
                {product.categoryEn}
              </p>

              <div className="mt-7 h-1 w-16 rounded-full bg-[#D9252A]" />

              <h2 className="mt-7 text-lg font-black text-[#102A49]">
                وصف المنتج
              </h2>

              <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base">
                {product.desc}
              </p>

              {/* Quick Specs */}
              <div className="mt-8">
                <h2 className="mb-4 text-lg font-black text-[#102A49]">
                  البيانات الفنية الرئيسية
                </h2>

                <div className="grid gap-3 sm:grid-cols-2 grid-cols-2">

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 text-[#2F80ED]">
                      <Wind size={19} />
                      <span className="text-xs font-bold text-slate-500">
                        تدفق الهواء / الأداء
                      </span>
                    </div>

                    <p className="mt-3 text-lg font-black text-[#102A49]" dir="ltr">
                      {product.flow || "غير محدد"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 text-[#2F80ED]">
                      <Layers3 size={19} />
                      <span className="text-xs font-bold text-slate-500">
                        نوع المنتج
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-black text-[#102A49]">
                      {product.categoryTitle}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 text-[#2F80ED]">
                      <FileText size={19} />
                      <span className="text-xs font-bold text-slate-500">
                        المواصفات الإضافية
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-black text-[#102A49]">
                      {product.extra || "لا توجد بيانات إضافية مسجلة"}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-4">
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 size={19} />
                      <span className="text-xs font-bold text-slate-500">
                        حالة المنتج
                      </span>
                    </div>

                    <p className="mt-3 text-sm font-black text-[#102A49]">
                      متاح للاستفسار وطلب عرض سعر
                    </p>
                  </div>

                </div>
              </div>

              {/* Buttons */}
            <div className="mt-8 flex flex-row gap-3">
  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl bg-[#102A49] px-3 py-4 text-center text-xs font-bold text-white transition hover:bg-[#2F80ED] sm:px-5 sm:text-sm"
  >
    <FaWhatsapp size={21} />
    اطلب عرض سعر
  </a>

  <Link
    href="/products"
    className="inline-flex min-h-14 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-4 text-center text-xs font-bold text-[#102A49] transition hover:border-[#2F80ED] hover:text-[#2F80ED] sm:px-5 sm:text-sm"
  >
    <ArrowRight size={18} />
    جميع المنتجات
  </Link>
</div>

              <p className="mt-5 text-xs leading-7 text-slate-400">
                للحصول على السعر والتفاصيل الفنية الكاملة، يرجى التواصل
                مع فريق UG VENT.
              </p>
            </div>
          </div>
        </section>

        {/* Category Information */}
        {category && (
          <section className="border-y border-slate-200 bg-[#F5F8FC]">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

              <div className="max-w-3xl">
                <p className="text-xs font-bold tracking-widest text-[#2F80ED]">
                  CATEGORY INFORMATION
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#102A49] sm:text-3xl">
                  عن {category.title}
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {category.description}
                </p>
              </div>

              {/* Features and Applications */}
              <div className="mt-9 grid gap-6 lg:grid-cols-2">

                {/* Features */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2F80ED]">
                      <Settings2 size={21} />
                    </div>

                    <div>
                      <h3 className="font-black text-[#102A49]">
                        مميزات الفئة
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Category Features
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    {category.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="mt-1 shrink-0 text-green-600"
                        />
                        <p className="text-sm leading-7 text-slate-600">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2F80ED]">
                      <Factory size={21} />
                    </div>

                    <div>
                      <h3 className="font-black text-[#102A49]">
                        مجالات الاستخدام
                      </h3>
                      <p className="mt-1 text-xs text-slate-400">
                        Applications
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    {category.applications.map((application, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-sm font-bold text-[#102A49]"
                      >
                        <Building2 size={16} className="text-[#2F80ED]" />
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Category link */}
              <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#102A49] p-6 text-white sm:p-8">
                <div>
                  <p className="text-xs font-bold text-blue-200">
                    EXPLORE CATEGORY
                  </p>
                  <h3 className="mt-2 text-lg font-black">
                    اكتشف باقي منتجات {category.title}
                  </h3>
                </div>

                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#102A49] transition hover:bg-blue-50"
                >
                  تصفح المنتجات
                  <ArrowLeft size={17} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold tracking-widest text-[#2F80ED]">
                  RELATED PRODUCTS
                </p>

                <h2 className="mt-3 text-2xl font-black text-[#102A49] sm:text-3xl">
                  منتجات أخرى من نفس الفئة
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  اكتشف المزيد من حلول التهوية المتاحة لدينا.
                </p>
              </div>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#2F80ED] transition hover:text-[#102A49]"
              >
                كل المنتجات
                <ArrowLeft size={17} />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link
                  key={item.model}
                  href={getProductHref(category!.slug, item.model)}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#F5F8FC]">
                    <Image
                      src={item.image}
                      alt={item.model}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-contain p-5 transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-4">
                    <p className="text-xs font-bold text-[#2F80ED]">
                      {category!.title}
                    </p>

                    <h3 className="mt-2 text-base font-black text-[#102A49]">
                      {item.model}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-6 text-slate-500">
                      {item.desc}
                    </p>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-bold text-[#2F80ED]">
                      عرض التفاصيل
                      <ArrowLeft
                        size={16}
                        className="transition group-hover:-translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </main>
    </Shell>
  );
}
