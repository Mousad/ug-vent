import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  Warehouse,
  Wrench,
  Truck,
  ShieldCheck,
  Factory,
  CarFront,
  Utensils,
  School,
  Ruler,
} from "lucide-react";

import { Shell, SectionTitle } from "@/components/site";
const categories = [
  { slug: "axial-fans", name: "مراوح محورية" },
  { slug: "centrifugal-fans", name: "مراوح طرد مركزي" },
  { slug: "roof-fans", name: "مراوح أسطح" },
  { slug: "wall-fans", name: "مراوح جدارية" },
  { slug: "cabinet-smoke-fans", name: "مراوح شفط الدخان" },
  { slug: "jet-fans", name: "مراوح جت فان" },
  { slug: "kitchen-exhaust", name: "شفط المطابخ" },
  { slug: "heat-recovery", name: "استعادة الحرارة" },
  { slug: "duct-fans", name: "مراوح مجاري الهواء" },
  { slug: "greenhouse-fans", name: "مراوح الصوب الزراعية" },
];
export function Applications() {
 
const applicationDetails = [
  {
    title: "مصانع",
    subtitle: "INDUSTRIAL FACILITIES",
    description:
      "تهوية خطوط الإنتاج والمساعدة في إخلاء الحرارة والغبار وفق متطلبات بيئة العمل.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
    icon: Factory,
    slugs: ["axial-fans", "centrifugal-fans"],
  },
  {
    title: "مخازن ومستودعات",
    subtitle: "WAREHOUSES",
    description:
      "حلول لتجديد الهواء داخل المستودعات والمساحات اللوجستية الكبيرة.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
    icon: Warehouse,
    slugs: ["axial-fans", "roof-fans"],
  },
  {
    title: "ورش صناعية",
    subtitle: "WORKSHOPS",
    description:
      "أنظمة تهوية تساعد على سحب الهواء والملوثات وفق طبيعة النشاط الصناعي.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    icon: Wrench,
    slugs: ["wall-fans", "centrifugal-fans"],
  },
  {
    title: "المولات والمراكز التجارية",
    subtitle: "SHOPPING MALLS",
    description:
      "حلول تهوية وطرد دخان يتم اختيارها حسب تصميم المبنى ومتطلبات السلامة.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1000&q=85",
    icon: Building2,
    slugs: ["cabinet-smoke-fans", "jet-fans"],
  },
  {
    title: "الأنفاق",
    subtitle: "TUNNELS",
    description:
      "حلول ميكانيكية لإدارة حركة الهواء بحسب متطلبات النفق والتصميم الهندسي.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=85",
    icon: Truck,
    slugs: ["jet-fans"],
  },
  {
    title: "الجراجات متعددة الأدوار",
    subtitle: "CAR PARKS",
    description:
      "أنظمة تهوية الجراجات وحلول سحب الدخان وفق متطلبات المشروع.",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1000&q=85",
    icon: CarFront,
    slugs: ["jet-fans", "cabinet-smoke-fans"],
  },
  {
    title: "المطابخ المركزية",
    subtitle: "COMMERCIAL KITCHENS",
    description:
      "حلول شفط الهواء للمطابخ التجارية وفق طبيعة التشغيل ومعدلات السحب المطلوبة.",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85",
    icon: Utensils,
    slugs: ["kitchen-exhaust"],
  },
  {
    title: "المستشفيات والمدارس",
    subtitle: "HEALTHCARE & EDUCATION",
    description:
      "أنظمة تهوية يتم تحديدها وفق متطلبات المبنى والمواصفات الفنية المعتمدة.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1000&q=85",
    icon: School,
    slugs: ["heat-recovery", "duct-fans"],
  },
  {
    title: "الصوب والمزارع",
    subtitle: "AGRICULTURE",
    description:
      "حلول تدوير وتجديد الهواء للمساحات الزراعية حسب طبيعة الاستخدام.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=85",
    icon: Factory,
    slugs: ["greenhouse-fans"],
  },
];


  const highlights = [
    { icon: Factory, label: "تطبيقات صناعية" },
    { icon: ShieldCheck, label: "حلول سحب الدخان" },
    { icon: Ruler, label: "اختيار حسب المشروع" },
  ];

  return (
    <Shell>
      <main>
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-[#082B50] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center opacity-40"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2000&q=85')",
            }}
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-l from-[#061D35]/95 via-[#0B3C6F]/85 to-[#0B3C6F]/40"
          />

          <div className="container py-20 sm:py-28 lg:py-32">
            <div className="max-w-3xl">
              <span className="text-sm font-bold tracking-[0.18em] text-blue-200">
                UG VENT / APPLICATIONS
              </span>

              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
                حلول هندسية
                <br />
                <span className="text-[#6FB1FF]">
                  لكل بيئة تشغيل
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 sm:text-lg sm:leading-9">
                من خطوط الإنتاج إلى الجراجات والمباني التجارية، اكتشف
                تطبيقات أنظمة التهوية الصناعية وطرد الدخان والحلول
                المرتبطة بها.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#applications-grid"
                  className="btn-primary inline-flex items-center gap-3"
                >
                  استكشف التطبيقات
                  <ArrowLeft className="size-5" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-white/40 px-6 py-3 font-bold text-white transition hover:bg-white/10"
                >
                  تواصل معنا
                  <ArrowLeft className="size-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="h-1.5 w-1/3 bg-[#2F80ED]" />
        </section>

        {/* Introduction Section */}
        <section className="container py-16 sm:py-20 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-end">
            <div>
              <span className="text-sm font-bold tracking-wider text-[#2F80ED]">
                APPLICATIONS & INDUSTRIES
              </span>

              <SectionTitle
                title="التطبيق المناسب يبدأ بفهم احتياجاتك"
                description="لكل منشأة ظروف تشغيل مختلفة. يعتمد اختيار معدات التهوية على طبيعة الاستخدام، والمساحة، ومتطلبات تدفق الهواء والمواصفات الفنية للمشروع."
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {highlights.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="border border-slate-200 bg-[#F5F8FC] p-4 sm:p-5"
                >
                  <Icon className="size-6 text-[#2F80ED]" />

                  <p className="mt-3 text-sm font-bold leading-6 text-[#0B3C6F]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Grid */}
        <section
          id="applications-grid"
          className="scroll-mt-20 bg-[#F5F8FC] py-16 sm:py-20 lg:py-24"
        >
          <div className="container">
            <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-sm font-bold tracking-wider text-[#2F80ED]">
                  OUR APPLICATIONS
                </span>

                <h2 className="mt-3 text-3xl font-black text-[#0B3C6F] sm:text-4xl">
                  القطاعات التي نخدمها
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-7 text-slate-500">
                استكشف التطبيقات والمنتجات المرتبطة بكل بيئة تشغيل.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {applicationDetails.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group overflow-hidden border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10"
                  >
                    {/* Application Image */}
                    <div className="relative aspect-[5/3] overflow-hidden bg-[#DCE8F5]">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading={index < 3 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#061D35]/80 via-transparent to-transparent" />

                      <span className="absolute right-4 top-4 grid size-11 place-items-center bg-white text-[#0B3C6F]">
                        <Icon className="size-5" />
                      </span>

                      <span
                        dir="ltr"
                        className="absolute bottom-4 left-5 text-3xl font-black text-white/90"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Application Details */}
                    <div className="p-5 sm:p-6">
                      <p className="text-[10px] font-bold tracking-[0.15em] text-[#2F80ED] sm:text-xs">
                        {item.subtitle}
                      </p>

                      <h3 className="mt-3 text-lg font-black leading-8 text-[#0B3C6F] sm:text-xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      {/* Related Products */}
                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <p className="mb-3 text-xs font-bold text-slate-500">
                          المنتجات المرتبطة
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {item.slugs.map((slug) => {
                            const category = categories.find(
                              (entry) => entry.slug === slug
                            );

                            return (
                              <Link
                                key={slug}
                                href={`/products/${slug}`}
                                className="inline-flex items-center gap-1.5 border border-blue-100 bg-blue-50/70 px-3 py-2 text-xs font-bold text-[#0B3C6F] transition hover:border-[#2F80ED] hover:bg-blue-100"
                              >
                                {category?.name ?? "استكشف الحل"}
                                <ArrowLeft className="size-3" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container py-16 sm:py-20">
          <div className="relative overflow-hidden bg-[#0B3C6F] px-6 py-10 text-white sm:px-10 sm:py-14 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-16 -top-20 size-64 rounded-full border border-white/10"
            />

            <div className="relative max-w-2xl">
              <span className="text-sm font-bold tracking-wider text-blue-200">
                HAVE A PROJECT IN MIND?
              </span>

              <h2 className="mt-4 text-2xl font-black leading-relaxed sm:text-3xl">
                دعنا نناقش احتياجات مشروعك
              </h2>

              <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                تواصل مع UG VENT للاستفسار عن المنتجات والحلول المناسبة
                لطبيعة منشأتك ومتطلباتها الفنية.
              </p>
            </div>

            <Link
              href="/contact"
              className="relative mt-7 inline-flex shrink-0 items-center gap-3 bg-white px-6 py-4 font-bold text-[#0B3C6F] transition hover:bg-blue-50 lg:mt-0"
            >
              اطلب عرض سعر
              <ArrowLeft className="size-5" />
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
