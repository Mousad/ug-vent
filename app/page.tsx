
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  BadgeCheck,
  Building2,
  CalendarCheck,
  CheckCircle2,
  Factory,

 
  MessageCircle,

  Fan,
  Flame,
  Gauge,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Wind,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

import { Shell, SectionTitle } from "@/components/site";
import { categories } from "@/data/products";

/* ───────── شريط الإحصائيات ───────── */
/* راجع أرقام الأداء والشهادات مع العميل قبل النشر. */
const stats = [
  { icon: Flame, value: "400°C", label: "لمدة ساعتين", long: false },
  { icon: Wind, value: "95,000", label: "م³/ساعة تدفق هواء", long: false },
  { icon: ShieldCheck, value: "EN 12101-3", label: "و CE", long: true },
  { icon: Fan, value: "12+", label: "سنة خبرة", long: false },
];

/* ───────── صور المنتجات ───────── */
const images: Record<string, string> = {
  "axial-fans":
    "https://i.pinimg.com/736x/c2/97/09/c297096f81c47ced73a2d192a60acedb.jpg",
  "cabinet-smoke-fans":
    "https://i.pinimg.com/736x/d4/46/d7/d446d719414edd95f261e58952688cd9.jpg",
  "jet-fans":
    "https://i.pinimg.com/1200x/30/a4/af/30a4afe98a1d63f58185c73cad529336.jpg",
  "centrifugal-fans":
    "https://i.pinimg.com/736x/8f/12/cc/8f12cc1cf1bfc554fe0949e05664092d.jpg",
  "roof-fans":
    "https://i.pinimg.com/1200x/ed/2a/b5/ed2ab5f3fdabe1c79c2119a5d3e62c97.jpg",
  "duct-fans":
    "https://i.pinimg.com/1200x/83/ca/c5/83cac5801152dcc2d1bde5be1bbd744e.jpg",
};

const productIcons = [Fan, Flame, Wind, Gauge, Building2, Factory];

const badges: Record<string, string[]> = {
  "axial-fans": ["حتى 95,000 م³/س", "400–1250 مم"],
  "cabinet-smoke-fans": ["400°C / ساعتين", "300°C / ساعتين"],
  "jet-fans": ["EN 12101-3", "CE"],
  "centrifugal-fans": ["حتى 37,500 م³/س", "ضغط عالٍ"],
  "roof-fans": ["120°C تشغيل مستمر", "صيانة أقل"],
  "duct-fans": ["دائرية ومستطيلة", "تركيب سهل"],
};

/* ───────── بيانات التواصل ───────── */
const contact = {
  phone: "+201008404000",
  displayPhone: "+20 10 08404000",
  email: "ug_hvac@yahoo.com",
  address:
    "شارع مساكن زهراء مدينة نصر، مساكن الضباط، القاهرة، مصر",
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "شارع مساكن زهراء مدينة نصر مساكن الضباط، القاهرة، مصر"
    ),
};

export default function Home() {
  return (
    <Shell>
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B30]">
        <video
          aria-hidden="true"
          className="absolute inset-0 -z-30 size-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src="/ventilation.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 -z-20 bg-gradient-to-l from-[#061B30]/95 via-[#0B3C6F]/75 to-[#0B3C6F]/30" />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="container relative flex min-h-[540px] items-center py-16 sm:min-h-[600px] sm:py-20 lg:min-h-[640px]">
          <div className="max-w-2xl">
            <span className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-bold text-white backdrop-blur">
              هندسة الهواء تبدأ من هنا
            </span>

            <h1 className="text-3xl font-black leading-[1.4] text-white sm:text-5xl sm:leading-[1.3] lg:text-6xl">
              أنظمة التهوية الصناعية المتكاملة{" "}
              <span className="text-[#6FB1FF]">
                | حلول ذكية لشفط الدخان
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-blue-50/90 sm:text-lg sm:leading-9">
              حلول متخصصة في معدات التهوية الصناعية وطرد الدخان للمصانع
              والمخازن والمباني التجارية والجراجات، وفقاً لاحتياجات كل مشروع.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#2F80ED] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-blue-900/30 transition hover:bg-white hover:text-[#0B3C6F] sm:px-7"
              >
                اطلب عرض سعر
                <ArrowLeft className="size-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white hover:text-[#0B3C6F] sm:px-7"
              >
                تصفح المنتجات
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ 2. STATS ═══════════════ */}
     
<section className="border-b border-white/10 bg-[#0B3C6F] text-white">
  <div className="container grid grid-cols-4 gap-1.5 py-4 sm:gap-4 sm:py-7">
    {stats.map(({ icon: Icon, value, label, long }) => (
      <div
        key={label}
        className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-white/15 bg-white/[0.07] px-0.5 py-3 text-center transition hover:bg-white/[0.12] sm:rounded-xl sm:px-4 sm:py-5"
      >
        <span className="mb-2 grid size-7 place-items-center rounded-full bg-[#2F80ED] text-white sm:mb-3 sm:size-12">
          <Icon
            className="size-3.5 sm:size-6"
            strokeWidth={1.8}
          />
        </span>

        <b
          className={`block max-w-full break-words font-black leading-tight text-blue-100 ${
            long
              ? "text-[9px] sm:text-base"
              : "text-[11px] sm:text-xl"
          }`}
        >
          {value}
        </b>

        <p className="mt-1 text-[8px] leading-4 text-blue-50/90 sm:mt-2 sm:text-sm sm:leading-5">
          {label}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* ═══════════════ 3. PRODUCTS ═══════════════ */}
      <section className="container py-16 sm:py-20 lg:py-24">
        <SectionTitle
          eyebrow="حلولنا"
          title="كل ما تحتاجه لحركة هواء آمنة وفعالة"
          description="تعرّف على مجموعة معدات التهوية الصناعية وشفط الدخان، واختر الفئة الأقرب إلى متطلبات مشروعك."
        />

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {categories.slice(0, 6).map((category, index) => {
            const Icon = productIcons[index % productIcons.length];
            const image = images[category.slug];
            const tags = badges[category.slug] ?? [];

            return (
              <Link
                key={category.slug}
                href={"/products/" + category.slug}
                className="group flex w-[82%] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/10 sm:w-auto"
              >
                <div className="relative aspect-[16/12] overflow-hidden bg-[#F4F7FA]">
                  {image ? (
                    <img
                      src={image}
                      alt={category.title}
                      loading="lazy"
                      className="size-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 opacity-60"
                        style={{
                          backgroundImage:
                            "linear-gradient(#2f80ed1f 1px,transparent 1px),linear-gradient(90deg,#2f80ed1f 1px,transparent 1px)",
                          backgroundSize: "26px 26px",
                        }}
                      />
                      <div className="absolute inset-0 grid place-items-center">
                        <Icon className="size-20 text-[#2F80ED]/80 sm:size-24" strokeWidth={1} />
                      </div>
                    </>
                  )}

                  <span className="absolute right-4 top-4 grid size-10 place-items-center rounded-xl bg-white text-[#2F80ED] shadow-md transition group-hover:bg-[#2F80ED] group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.8} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-black text-[#0B3C6F] sm:text-xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    {category.description}
                  </p>

                  {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-blue-50 px-3 py-1 text-[11px] font-bold text-[#2F80ED]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0B3C6F] transition group-hover:text-[#2F80ED]">
                    استكشف المنتجات
                    <ArrowLeft className="size-4 transition group-hover:-translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-9 text-center sm:mt-10">
          <Link
            href="/products"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#0B3C6F] px-7 py-3 text-sm font-bold text-[#0B3C6F] transition hover:bg-[#0B3C6F] hover:text-white"
          >
            عرض كل المنتجات
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>

      {/* ═══════════════ 4. ABOUT US ═══════════════ */}
      <section className="overflow-hidden bg-[#F4F7FB] py-16 sm:py-20 lg:py-24">
        <div className="container">
          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14">
            {/* الصورة */}
            <div className="group relative">
              <div className="absolute -bottom-4 -left-4 hidden h-2/3 w-2/3 rounded-2xl border-2 border-[#2F80ED]/25 sm:block" />

              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#DCE7F2] shadow-xl shadow-blue-950/10">
                <img
                  src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=85"
                  alt="معدات وأعمال هندسية صناعية"
                  loading="lazy"
                  className="size-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B30]/55 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 left-4 flex items-end justify-between gap-3 text-white sm:bottom-6 sm:right-6 sm:left-6">
                  <div>
                    <p className="text-xs font-bold text-blue-100 sm:text-sm">
                      UG VENT
                    </p>
                    <p className="mt-1 text-lg font-black sm:text-2xl">
                      حلول التهوية الصناعية
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-white/25 bg-white/15 backdrop-blur">
                    <Factory className="size-6" />
                  </span>
                </div>
              </div>
            </div>

            {/* النص */}
            <div dir="rtl">
              <span className="inline-flex items-center gap-2 text-sm font-bold text-[#D9252A]">
                <span className="h-0.5 w-7 bg-[#D9252A]" />
                من نحن
              </span>

              <h2 className="mt-4 text-3xl font-black leading-[1.4] text-[#0B3C6F] sm:text-4xl lg:text-[42px]">
                شريكك في اختيار حلول التهوية المناسبة
              </h2>

              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
                تعمل UG VENT في توريد معدات وأنظمة التهوية الصناعية وشفط
                الدخان، وتساعد عملاءها على اختيار المنتجات التي تتوافق مع
                طبيعة المنشأة واحتياجات التشغيل والمواصفات الفنية للمشروع.
              </p>

              <p className="mt-3 text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
                نؤمن بأهمية وضوح المواصفات واختيار المعدات المناسبة لكل
                تطبيق، سواء للمرافق الصناعية أو المساحات التجارية أو أنظمة
                إدارة الدخان.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "توريد معدات التهوية الصناعية",
                  "حلول لتهوية المنشآت",
                  "معدات شفط الدخان",
                  "الاهتمام بالمواصفات الفنية",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#2F80ED]" />
                    <span className="text-sm font-semibold leading-6 text-[#183B5B]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#0B3C6F] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
                >
                  اكتشف الشركة
                  <ArrowLeft className="size-4" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-[#0B3C6F] transition hover:border-[#2F80ED] hover:text-[#2F80ED]"
                >
                  تواصل معنا
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ═══════════════ 5. QUALITY & EXPERIENCE ═══════════════ */}
<section className="relative overflow-hidden bg-white py-12 sm:py-20 lg:py-24">
  <div className="pointer-events-none absolute -left-24 top-20 size-56 rounded-full bg-blue-100/50 blur-3xl sm:size-72" />

  <div className="container relative">
    {/* العنوان */}
    <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-14">
      <span className="inline-flex items-center gap-2 text-xs font-bold text-[#D9252A] sm:text-sm">
        <span className="h-0.5 w-5 bg-[#D9252A] sm:w-7" />
        الجودة والخبرة
        <span className="h-0.5 w-5 bg-[#D9252A] sm:w-7" />
      </span>

      <h2 className="mt-3 text-2xl font-black leading-tight text-[#0B3C6F] sm:mt-4 sm:text-4xl lg:text-5xl">
        خبرة تدعم اختياراتك
      </h2>

      <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-9">
        نوفر معدات تهوية مناسبة للمشروعات، مع الاهتمام بالمواصفات الفنية
        وجودة المنتجات وملاءمتها لظروف التشغيل.
      </p>
    </div>

    {/* البطاقات */}
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {/* الخبرة */}
      <article className="group relative col-span-2 flex min-h-40 flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-[#0B3C6F] to-[#061B30] p-5 text-white shadow-md shadow-blue-950/10 sm:min-h-52 sm:p-7 lg:col-span-1">
        <div className="pointer-events-none absolute -bottom-12 -left-8 size-36 rounded-full border border-white/10 transition-transform duration-500 group-hover:scale-125" />

        <div className="relative flex items-center justify-between gap-2">
          <span className="grid size-10 place-items-center rounded-xl bg-white/10 sm:size-12">
            <CalendarCheck className="size-5 text-blue-200 sm:size-6" />
          </span>
          <span className="text-[10px] font-bold tracking-wider text-blue-200 sm:text-xs">
            EXPERIENCE
          </span>
        </div>

        <div className="relative mt-5 sm:mt-8">
          <p className="text-3xl font-black sm:text-4xl lg:text-5xl">
            12 سنة
          </p>
          <h3 className="mt-2 text-sm font-bold sm:mt-3 sm:text-base">
            من الخبرة في المجال
          </h3>
          <p className="mt-1 text-[11px] leading-5 text-blue-100 sm:mt-2 sm:text-xs sm:leading-6">
            وفقاً للمعلومات المقدمة من الشركة.
          </p>
        </div>
      </article>

      {/* جودة المنتجات */}
      <article className="flex min-w-0 flex-col rounded-2xl border border-slate-200/80 bg-[#F8FAFD] p-4 transition duration-300 hover:border-blue-200 hover:shadow-lg sm:min-h-52 sm:p-6 lg:p-7">
        <span className="grid size-10 place-items-center rounded-xl bg-blue-100 text-[#2F80ED] sm:size-12">
          <BadgeCheck className="size-5 sm:size-6" />
        </span>
        <h3 className="mt-4 text-sm font-black leading-6 text-[#0B3C6F] sm:mt-6 sm:text-lg">
          جودة المنتجات
        </h3>
        <p className="mt-2 text-xs leading-6 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
          الاهتمام بمواصفات المعدات وملاءمتها للاستخدام.
        </p>
      </article>

      {/* المواصفات الفنية */}
      <article className="flex min-w-0 flex-col rounded-2xl border border-slate-200/80 bg-[#F8FAFD] p-4 transition duration-300 hover:border-blue-200 hover:shadow-lg sm:min-h-52 sm:p-6 lg:p-7">
        <span className="grid size-10 place-items-center rounded-xl bg-blue-100 text-[#2F80ED] sm:size-12">
          <Gauge className="size-5 sm:size-6" />
        </span>
        <h3 className="mt-4 text-sm font-black leading-6 text-[#0B3C6F] sm:mt-6 sm:text-lg">
          مواصفات فنية
        </h3>
        <p className="mt-2 text-xs leading-6 text-slate-500 sm:mt-3 sm:text-sm sm:leading-7">
          مراعاة متطلبات الأداء والتطبيق عند اختيار المعدات.
        </p>
      </article>

      {/* التطبيقات */}
      <article className="col-span-2 flex min-w-0 flex-row items-start gap-4 rounded-2xl border border-slate-200/80 bg-[#F8FAFD] p-4 transition duration-300 hover:border-blue-200 hover:shadow-lg sm:min-h-48 sm:p-6 lg:col-span-2 lg:p-7">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-100 text-[#2F80ED] sm:size-12">
          <Factory className="size-5 sm:size-6" />
        </span>
        <div className="min-w-0">
          <h3 className="text-sm font-black leading-6 text-[#0B3C6F] sm:text-lg">
            تطبيقات متنوعة
          </h3>
          <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
            معدات للمشروعات الصناعية والتجارية وأنظمة التهوية وشفط الدخان.
          </p>
        </div>
      </article>
    </div>

    {/* الصور والاعتمادات */}
    <div className="mt-5 grid gap-4 sm:mt-7 md:grid-cols-[1.15fr_0.85fr]">
      {/* صورة الجودة */}
      <div className="group relative min-h-64 overflow-hidden rounded-2xl bg-[#E5EDF5] sm:min-h-80">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85"
          alt="عمل هندسي وفحص معدات"
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#061B30]/90 via-[#061B30]/20 to-transparent" />

        <div className="absolute bottom-0 right-0 left-0 p-5 text-white sm:p-7">
          <span className="text-[10px] font-bold tracking-wider text-blue-200 sm:text-xs">
            ENGINEERING & QUALITY
          </span>
          <h3 className="mt-2 text-xl font-black sm:text-2xl">
            الجودة تبدأ من التفاصيل
          </h3>
          <p className="mt-2 max-w-lg text-xs leading-6 text-blue-50 sm:text-sm sm:leading-7">
            يمكن تخصيص هذه المساحة لصور الفحص الفني أو المعدات أو المشاريع
            الحقيقية للشركة.
          </p>
        </div>
      </div>

      {/* الشهادات */}
      <div className="flex min-w-0 flex-col justify-center rounded-2xl border border-blue-100 bg-[#F0F6FD] p-5 sm:p-8">
        <span className="grid size-11 place-items-center rounded-xl bg-white text-[#2F80ED] shadow-sm sm:size-12">
          <ShieldCheck className="size-6 sm:size-7" />
        </span>

        <h3 className="mt-4 text-lg font-black leading-7 text-[#0B3C6F] sm:mt-5 sm:text-2xl sm:leading-8">
          شهادات واعتمادات الجودة
        </h3>

        <p className="mt-2 text-xs leading-7 text-slate-600 sm:mt-3 sm:text-sm sm:leading-8">
          تُعرض الاعتمادات وفقاً للشهادات الفعلية المتاحة لدى الشركة ونطاق
          تطبيق كل شهادة.
        </p>

        <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-100 bg-white p-3 sm:p-4">
          <ShieldCheck className="mt-0.5 size-4 shrink-0 text-[#2F80ED] sm:size-5" />
          <p className="text-[11px] leading-6 text-slate-500 sm:text-xs">
            ستُضاف أسماء الشهادات وشعاراتها بعد مراجعة المستندات الرسمية
            والتأكد من صلاحيتها.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


     
{/* ═══════════════ 6. CONTACT INFORMATION ═══════════════ */}
<section className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-20">
  <div className="container">
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white sm:rounded-3xl">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">

        {/* عنوان التواصل */}
        <div className="flex flex-col justify-center border-b border-slate-200 p-6 sm:p-9 lg:border-b-0 lg:border-l lg:p-12">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-[#D9252A]">
            <span className="h-0.5 w-6 bg-[#D9252A]" />
            تواصل معنا
          </span>

          <h2 className="mt-4 text-2xl font-black leading-[1.6] text-[#0B3C6F] sm:text-3xl lg:text-4xl">
            دعنا نساعدك في اختيار حل التهوية المناسب
          </h2>

          <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
            أخبرنا عن احتياجات مشروعك، وسنتواصل معك لمناقشة معدات التهوية
            الصناعية وشفط الدخان وطلب عرض سعر.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
  <a
    href={`https://wa.me/${contact.phone.replace("+", "").replace(/\s/g, "")}`}
    target="_blank"
    rel="noreferrer"
    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25d366] px-3 py-3 text-xs font-bold text-white transition hover:bg-[#082D53] sm:px-5 sm:text-sm"
  >
<SiWhatsapp className="size-4 shrink-0" />    <span>تواصل  </span>
  </a>

  <Link
    href="/contact"
    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-3 text-xs font-bold text-[#0B3C6F] transition hover:border-[#0B3C6F] hover:bg-slate-50 sm:px-5 sm:text-sm"
  >
    <span>تفاصيل التواصل</span>
    <ArrowLeft className="size-4 shrink-0" />
  </Link>
</div>

          <div className="mt-7 border-t border-slate-100 pt-5">
            <p className="text-xs leading-6 text-slate-500">
              للاستفسارات التجارية والفنية وطلبات عروض الأسعار.
            </p>
          </div>
        </div>

        {/* معلومات الاتصال */}
        <div className="p-4 sm:p-7 lg:p-9">
          

          {/* العنوان وخريطة Google Maps */}
<div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
  <div className="flex items-start gap-4 p-4 sm:p-5" dir="rtl">
    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[#EAF2FC] text-[#0B3C6F]">
      <MapPin className="size-5" />
    </span>

    <div className="min-w-0 flex-1">
      <p className="text-xs font-medium text-slate-500">
        عنوان الشركة
      </p>

      

    
    </div>
  </div>

  <div className="h-56 w-full border-t border-slate-200 sm:h-64">
    <iframe
      title="موقع شركة UG VENT على خرائط Google"
      src={`https://maps.google.com/maps?q=${encodeURIComponent(contact.address)}&output=embed`}
      className="size-full border-0"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  </div>
</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ═══════════════ 7. FINAL CTA ═══════════════ */}
      <section className="section-grid">
        <div className="container flex flex-col items-center justify-between gap-5 py-12 text-center md:flex-row md:text-right">
          <div>
            <h2 className="text-2xl font-black leading-tight text-[#0B3C6F] sm:text-3xl">
              ابدأ مشروعك مع UG VENT
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              أخبرنا بمتطلبات مشروعك لنساعدك في تحديد معدات التهوية المناسبة.
            </p>
          </div>

          <Link href="/contact" className="btn-primary">
            اطلب عرض سعر
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </section>
    </Shell>
  );
}
