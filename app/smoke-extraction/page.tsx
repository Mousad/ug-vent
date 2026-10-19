
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  ShieldCheck,
  Wind,
  Building2,
  Factory,
  CarFront,
  Waves,
  Gauge,
  Thermometer,
  ClipboardCheck,
  DraftingCompass,
  Settings2,
  Headset,
  CheckCircle2,
  CircleDot,
} from "lucide-react";

import { Shell } from "@/components/site";

export const metadata = {
  title: "حلول شفط الدخان | UG VENT",
  description:
    "حلول هندسية لأنظمة شفط الدخان والتحكم فيه، ومراوح الجراجات والأنفاق والمباني الصناعية والتجارية من UG VENT.",
};

const applications = [
  {
    number: "01",
    title: "الجراجات والبدرومات",
    subtitle: "CAR PARK VENTILATION",
    description:
      "حلول تهوية وطرد دخان للجراجات المغلقة والبدرومات، مع إمكانية دمج مراوح الجت فان ومراوح الطرد وفق متطلبات التصميم.",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1100&q=85",
    icon: CarFront,
    features: [
      "أنظمة Jet Fans",
      "مراوح سحب وطرد الهواء",
      "توزيع الهواء داخل الجراج",
    ],
  },
  {
    number: "02",
    title: "الأنفاق",
    subtitle: "TUNNEL SMOKE CONTROL",
    description:
      "حلول تهوية الأنفاق وإدارة الدخان المصممة وفق طبيعة النفق ومتطلبات التشغيل والسلامة الخاصة بالمشروع.",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1100&q=85",
    icon: Waves,
    features: [
      "مراوح دفع الأنفاق",
      "أنظمة تدفق الهواء",
      "حلول حسب ظروف الموقع",
    ],
  },
  {
    number: "03",
    title: "المولات والمباني التجارية",
    subtitle: "COMMERCIAL BUILDINGS",
    description:
      "أنظمة تساعد على إدارة الدخان وتهوية المساحات التجارية، مع مراعاة تقسيمات المبنى وتكامل الأنظمة مع متطلبات السلامة.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1100&q=85",
    icon: Building2,
    features: [
      "أنظمة طرد الدخان",
      "مراوح الأسطح والكبائن",
      "التكامل مع تصميم المبنى",
    ],
  },
  {
    number: "04",
    title: "المصانع والمنشآت الصناعية",
    subtitle: "INDUSTRIAL FACILITIES",
    description:
      "حلول تهوية وطرد دخان للمنشآت الصناعية، يتم تحديدها بناءً على طبيعة النشاط والمساحات ومتطلبات التشغيل.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1100&q=85",
    icon: Factory,
    features: [
      "مراوح صناعية",
      "مجاري الهواء",
      "حلول للمساحات الكبيرة",
    ],
  },
];

const engineeringFeatures = [
  {
    icon: Thermometer,
    title: "مقاومة درجات الحرارة",
    description:
      "اختيار مراوح طرد الدخان وفق درجة الحرارة ومدة التشغيل المطلوبة في مواصفات المشروع.",
  },
  {
    icon: Gauge,
    title: "الأداء وتدفق الهواء",
    description:
      "تحديد معدلات تدفق الهواء والضغط المطلوبين وفق الحسابات الهندسية وظروف الموقع.",
  },
  {
    icon: ShieldCheck,
    title: "متطلبات السلامة",
    description:
      "مراعاة متطلبات السلامة والمعايير المعتمدة والمواصفات المطلوبة للمشروع.",
  },
];

const stages = [
  {
    number: "01",
    title: "دراسة المشروع",
    description:
      "فهم طبيعة المبنى والمساحة ومتطلبات التهوية والتحكم في الدخان.",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "التصميم الهندسي",
    description:
      "تحديد النظام المناسب والمعدات المطلوبة وفق البيانات المتاحة.",
    icon: DraftingCompass,
  },
  {
    number: "03",
    title: "التوريد والتنفيذ",
    description:
      "دعم توريد المعدات وتنفيذ الحل حسب نطاق العمل المتفق عليه.",
    icon: Settings2,
  },
  {
    number: "04",
    title: "الدعم الفني",
    description:
      "المتابعة الفنية وفق متطلبات التشغيل والخدمة المتفق عليها.",
    icon: Headset,
  },
];

export default function SmokePage() {
  return (
    <Shell>
      <main dir="rtl" className="overflow-hidden bg-white text-[#102A49]">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-[#082747] text-white">
          <div className="absolute inset-0 -z-20">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=90"
              alt="هندسة وتصميم الأنظمة الصناعية"
              className="h-full w-full object-cover object-center opacity-40"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#06182B] via-[#082747]/95 to-[#082747]/55" />

          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-12 lg:py-32">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#6FB1FF]" />
                <span className="text-xs font-bold tracking-[0.18em] text-[#A8D0FF] sm:text-sm">
                  FIRE & SMOKE SAFETY
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.5] sm:text-5xl lg:text-6xl xl:text-7xl">
                حلول متكاملة
                <br />
                <span className="text-[#6FB1FF]">
                  لإدارة الدخان.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-9 text-white/75 sm:text-lg">
                نصمم ونوفر حلول أنظمة شفط الدخان والتهوية للمباني
                التجارية والصناعية والجراجات والأنفاق، وفق احتياجات
                المشروع ومتطلبات السلامة ذات الصلة.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#2F80ED] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1C6FD8]"
                >
                  اطلب استشارة فنية
                  <ArrowLeft size={18} />
                </Link>

                <a
                  href="#applications"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/30 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  استكشف الحلول
                  <ArrowUpLeft size={18} />
                </a>
              </div>

              <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/60 sm:text-sm">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#6FB1FF]" />
                  تصميم حسب متطلبات المشروع
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#6FB1FF]" />
                  حلول للمنشآت المختلفة
                </span>
              </div>
            </div>

            {/* Technical visual */}
            <div className="relative mx-auto w-full max-w-[470px]">
              <div className="absolute -inset-4 border border-white/10" />

              <div className="relative overflow-hidden border border-white/15 bg-white/[0.05] p-5 backdrop-blur-sm sm:p-8">
                <div className="flex items-center justify-between border-b border-white/15 pb-5">
                  <div>
                    <p className="text-xs font-bold tracking-widest text-[#6FB1FF]">
                      ENGINEERING SYSTEMS
                    </p>
                    <h2 className="mt-2 text-lg font-bold sm:text-xl">
                      أنظمة طرد الدخان
                    </h2>
                  </div>
                  <Wind size={30} className="text-[#6FB1FF]" />
                </div>

                <div className="relative my-7 flex aspect-square items-center justify-center overflow-hidden border border-white/10 bg-[#061D35]/70">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(111,177,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(111,177,255,.5) 1px, transparent 1px)",
                      backgroundSize: "25px 25px",
                    }}
                  />

                  <div className="absolute h-[75%] w-[75%] rounded-full border border-dashed border-[#6FB1FF]/50" />
                  <div className="absolute h-[55%] w-[55%] rounded-full border border-[#6FB1FF]/35" />

                  <div className="relative flex h-36 w-36 flex-col items-center justify-center rounded-full border-2 border-[#6FB1FF] bg-[#0B3C6F]/80 shadow-[0_0_45px_rgba(47,128,237,0.18)] sm:h-44 sm:w-44">
                    <Wind size={42} strokeWidth={1.3} className="text-[#6FB1FF]" />
                    <span className="mt-3 text-center text-sm font-bold">
                      SMOKE
                      <br />
                      CONTROL
                    </span>
                  </div>

                  <span className="absolute right-3 top-3 text-[10px] tracking-widest text-white/45">
                    SYSTEM / 01
                  </span>
                  <span className="absolute bottom-3 left-3 text-[10px] tracking-widest text-white/45">
                    UG VENT
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-white/50">APPLICATION</p>
                    <p className="mt-2 text-sm font-bold">Smoke Extraction</p>
                  </div>
                  <div className="border border-white/10 bg-white/[0.04] p-4">
                    <p className="text-xs text-white/50">DESIGN APPROACH</p>
                    <p className="mt-2 text-sm font-bold">Project Specific</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-2 lg:items-end lg:gap-20 lg:px-12">
            <div>
              <p className="mb-4 text-sm font-bold tracking-widest text-[#2F80ED]">
                WHY SMOKE CONTROL?
              </p>

              <h2 className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                التحكم في الدخان
                <br />
                <span className="text-[#2F80ED]">
                  جزء أساسي من السلامة.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-9 text-slate-600 sm:text-lg">
                أثناء الحريق، يمكن أن يؤثر الدخان والحرارة على الرؤية
                وعمليات الإخلاء وسلامة المبنى. لذلك يجب دراسة نظام
                التحكم في الدخان ضمن التصميم العام للمشروع، وفق طبيعة
                الإشغال والاشتراطات الهندسية المعمول بها.
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-500">
                يتم تحديد نوع النظام ومواصفاته بعد مراجعة متطلبات المشروع
                والتصميم المعتمد؛ ولا يغني هذا الوصف عن التصميم الهندسي
                ومراجعة اشتراطات الحماية من الحريق.
              </p>
            </div>
          </div>
        </section>

        {/* APPLICATIONS */}
        <section id="applications" className="bg-[#F5F8FC] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm font-bold tracking-widest text-[#2F80ED]">
                  OUR APPLICATIONS
                </p>
                <h2 className="text-3xl font-black sm:text-4xl lg:text-5xl">
                  حلول لكل منشأة
                </h2>
              </div>

              <p className="max-w-lg text-sm leading-8 text-slate-600 sm:text-base">
                ندرس طبيعة كل موقع لاختيار الحلول المناسبة لمساحته
                وطريقة استخدامه ومتطلبات التشغيل والسلامة.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {applications.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.number}
                    className="group overflow-hidden border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#2F80ED]/40 hover:shadow-xl hover:shadow-[#082747]/5"
                  >
                    <div className="relative h-56 overflow-hidden sm:h-72">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#082747]/90 via-[#082747]/15 to-transparent" />

                      <span className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center border border-white/35 bg-[#082747]/70 text-white backdrop-blur-sm">
                        <Icon size={23} strokeWidth={1.6} />
                      </span>

                      <span className="absolute bottom-5 right-5 text-xs font-bold tracking-[0.16em] text-[#A8D0FF]">
                        {item.subtitle}
                      </span>

                      <span className="absolute bottom-4 left-5 text-4xl font-light text-white/65">
                        {item.number}
                      </span>
                    </div>

                    <div className="p-6 sm:p-8">
                      <h3 className="text-xl font-black text-[#102A49] sm:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-8 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                        {item.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-center gap-3 text-sm text-slate-700"
                          >
                            <CircleDot
                              size={16}
                              className="shrink-0 text-[#2F80ED]"
                            />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#2F80ED] transition hover:gap-5"
                      >
                        ناقش متطلبات مشروعك
                        <ArrowLeft size={18} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ENGINEERING FEATURES */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-sm font-bold tracking-widest text-[#2F80ED]">
                ENGINEERING CONSIDERATIONS
              </p>
              <h2 className="text-3xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
                التفاصيل الفنية تصنع الفرق.
              </h2>
              <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                يعتمد اختيار النظام على حسابات التصميم ومتطلبات السلامة
                وظروف التشغيل، وليس على نوع المروحة وحده.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
              {engineeringFeatures.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group relative border border-slate-200 bg-white p-7 transition duration-300 hover:border-[#2F80ED]/50 hover:shadow-lg sm:p-9"
                  >
                    <span className="absolute right-0 top-0 h-1 w-14 bg-[#2F80ED] transition-all duration-300 group-hover:w-full" />

                    <div className="flex items-center justify-between">
                      <div className="grid h-14 w-14 place-items-center bg-[#EEF5FF] text-[#2F80ED] transition-colors group-hover:bg-[#2F80ED] group-hover:text-white">
                        <Icon size={27} strokeWidth={1.6} />
                      </div>

                      <span className="text-4xl font-light text-slate-200">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-8 text-xl font-black">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS */}
      
<section className="relative overflow-hidden bg-[#082747] py-16 text-white sm:py-28">
  {/* Background Grid */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.06]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
      backgroundSize: "42px 42px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-12">
    {/* Section Heading */}
    <div className="mb-8 max-w-3xl sm:mb-16">
      <p className="mb-3 text-xs font-bold tracking-widest text-[#6FB1FF] sm:mb-4 sm:text-sm">
        HOW WE WORK
      </p>

      <h2 className="text-2xl font-black leading-relaxed sm:text-4xl lg:text-5xl">
        من الدراسة إلى
        <span className="text-[#6FB1FF]"> الحل المتكامل.</span>
      </h2>

      <p className="mt-3 max-w-2xl text-xs leading-7 text-white/65 sm:mt-5 sm:text-base sm:leading-8">
        خطوات منظمة لدراسة احتياجات المشروع وتحديد الحل الفني
        ومتابعة التنفيذ والدعم.
      </p>
    </div>

    {/* Process Cards */}
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {stages.map((stage) => {
        const Icon = stage.icon;

        return (
          <article
            key={stage.number}
            className="group relative flex min-h-[250px] flex-col overflow-hidden border border-white/10 bg-white/[0.04] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#6FB1FF]/60 hover:bg-white/[0.08] sm:min-h-[280px] sm:p-7 lg:hover:-translate-y-2"
          >
            {/* Top Hover Line */}
            <div className="absolute right-0 top-0 h-[3px] w-0 bg-[#6FB1FF] transition-all duration-500 group-hover:w-full" />

            {/* Number & Icon */}
            <div className="flex items-start justify-between gap-2">
              <span className="text-3xl font-light text-white/20 transition-colors group-hover:text-[#6FB1FF] sm:text-5xl">
                {stage.number}
              </span>

              <div className="grid h-9 w-9 shrink-0 place-items-center border border-[#6FB1FF]/30 bg-[#2F80ED]/10 text-[#6FB1FF] transition-colors group-hover:bg-[#2F80ED] group-hover:text-white sm:h-12 sm:w-12">
                <Icon size={20} strokeWidth={1.6} className="sm:hidden" />
                <Icon
                  size={23}
                  strokeWidth={1.6}
                  className="hidden sm:block"
                />
              </div>
            </div>

            {/* Text */}
            <h3 className="mt-5 text-sm font-bold leading-6 sm:mt-8 sm:text-lg">
              {stage.title}
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/60 sm:mt-3 sm:text-sm sm:leading-8">
              {stage.description}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-center gap-1.5 pt-5 text-[8px] tracking-[0.12em] text-white/35 sm:gap-2 sm:pt-6 sm:text-[10px] sm:tracking-[0.16em]">
              <span>UG VENT</span>
              <span className="h-px w-4 bg-[#6FB1FF]/50 sm:w-6" />
              <span>STEP {stage.number}</span>
            </div>
          </article>
        );
      })}
    </div>
  </div>
</section>


        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#F0F5FB] p-7 sm:p-12 lg:p-16">
            <div className="absolute bottom-0 right-0 h-full w-1 bg-[#2F80ED]" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 text-xs font-bold tracking-[0.18em] text-[#2F80ED] sm:text-sm">
                  LET&apos;S DISCUSS YOUR PROJECT
                </p>

                <h2 className="text-2xl font-black leading-relaxed sm:text-3xl lg:text-4xl">
                  هل تحتاج إلى نظام لإدارة الدخان في مشروعك؟
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  تواصل مع فريق UG VENT لمناقشة طبيعة المنشأة والمتطلبات
                  الفنية والحلول التي يمكن دراستها لمشروعك.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#2F80ED] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1C6FD8]"
              >
                تواصل مع فريقنا
                <ArrowLeft size={19} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
