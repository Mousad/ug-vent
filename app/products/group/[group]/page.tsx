
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Fan,
  Boxes,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";

import {
  groups,
  categoriesOf,
  type GroupId,
} from "@/data/products";
import { Shell } from "@/components/site";
import ProductGroupCatalog from "@/components/product-group-catalog";

type PageProps = {
  params: Promise<{ group: string }>;
};

export function generateStaticParams() {
  return groups.map((group) => ({
    group: group.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { group: groupId } = await params;

  const group = groups.find((item) => item.id === groupId);

  return {
    title: group
      ? `منتجات القسم ${group.title} | UG VENT`
      : "المنتجات | UG VENT",
    description: group?.description,
  };
}

export default async function ProductGroupPage({
  params,
}: PageProps) {
  const { group: groupId } = await params;

  if (
    groupId !== "industrial" &&
    groupId !== "commercial"
  ) {
    notFound();
  }

  const groupIdTyped = groupId as GroupId;

  const group = groups.find(
    (item) => item.id === groupIdTyped
  );

  if (!group) {
    notFound();
  }

  const categories = categoriesOf(groupIdTyped);

  const isIndustrial = groupIdTyped === "industrial";

  const totalProducts = categories.reduce(
    (total, category) =>
      total + category.products.length,
    0
  );

  return (
    <Shell>
      <main
        className="min-h-screen bg-[#F5F8FC]"
        dir="rtl"
      >
       

        {/* هيرو القسم */}
        <section className="relative isolate overflow-hidden bg-[#061B30] text-white">
          <div
  aria-hidden="true"
  className="absolute inset-0 -z-10"
  style={{
    backgroundImage: `
      linear-gradient(
        90deg,
        rgba(6, 27, 48, 0.72),
        rgba(6, 27, 48, 0.90)
      ),
      url('${
        isIndustrial
          ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPQdfIfGmUFh9BHxkWjO3ICFrN0ORznv-KWucoC4FaRffvGjw"
          : "https://supplyworldco.com/wp-content/uploads/2024/11/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-1024x585.jpg"
      }')
    `,
    backgroundPosition: "center",
    backgroundSize: "cover",
  }}
/>

          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <span
              className={`inline-flex rounded-[6px] border px-3 py-1.5 text-xs font-bold ${
                isIndustrial
                  ? "border-red-300/30 bg-red-500/10 text-red-200"
                  : "border-blue-300/30 bg-blue-500/10 text-blue-200"
              }`}
            >
              {group.en} Solutions
            </span>

            <h1 className="mt-5 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {isIndustrial
                ? "حلول التهوية الصناعية"
                : "حلول التهوية التجارية"}
            </h1>

            <p className="mt-5 max-w-3xl text-sm leading-8 text-slate-200 sm:text-base">
              {group.description}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold">
                <Boxes className="size-4" />
                 فئات متخصصة
              </span>

             
            </div>
          </div>
        </section>

        {/* البحث والفلترة وعرض المنتجات */}
        <ProductGroupCatalog categories={categories} />

        {/* شريط الدعم */}
        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
            <div className="flex items-start gap-3">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]">
                <ShieldCheck className="size-5" />
              </span>

              <div>
                <h2 className="font-black text-[#082747]">
                  تحتاج مساعدة في اختيار المنتج؟
                </h2>

                <p className="mt-1 text-sm leading-7 text-slate-500">
                  تواصل مع فريق UG VENT للحصول على المساعدة الفنية المناسبة
                  لمشروعك.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0B3C6F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
            >
              تواصل معنا
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
