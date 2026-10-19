
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  CheckCircle2,
  ClipboardCheck,
  DraftingCompass,
  Factory,
  Headset,
  Settings2,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Shell } from "@/components/site";

export const metadata = {
  title: "الخدمات الهندسية | UG VENT",
  description:
    "خدمات الاستشارات الهندسية وتصميم أنظمة التهوية الصناعية وطرد الدخان والتوريد والتركيب والصيانة من UG VENT.",
};

const services = [
  {
    number: "01",
    title: "الاستشارات الهندسية والتصميم",
    subtitle: "Engineering & Design",
    description:
      "نساعدك في اختيار الحل الهندسي المناسب لمشروعك، بدايةً من دراسة المتطلبات وحتى تصميم أنظمة التهوية وطرد الدخان بما يتوافق مع طبيعة المنشأة واحتياجاتها التشغيلية.",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1400&q=85",
    icon: DraftingCompass,
    features: [
      "دراسة متطلبات المشروع",
      "تصميم أنظمة التهوية",
      "دراسة تدفق الهواء والضغط",
      "إعداد المخططات الفنية",
    ],
    slug: "engineering-consulting",
  },
  {
    number: "02",
    title: "توريد المعدات والتركيب",
    subtitle: "Supply & Installation",
    description:
      "نوفر حلول التهوية الصناعية ومعدات طرد الدخان المناسبة للمشروعات المختلفة، مع دعم أعمال التركيب والتأكد من توافق الأنظمة مع المخططات والمواصفات المطلوبة.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85",
    icon: Factory,
    features: [
      "توريد معدات التهوية",
      "مراوح طرد الدخان",
      "أنظمة مجاري الهواء",
      "دعم التركيب والتشغيل",
    ],
    slug: "supply-installation",
  },
  {
    number: "03",
    title: "الصيانة والدعم الفني",
    subtitle: "Maintenance & Technical Support",
    description:
      "نساعد في الحفاظ على كفاءة أنظمة التهوية من خلال خدمات الفحص والصيانة والدعم الفني، بهدف تقليل الأعطال وتحسين الاعتمادية التشغيلية للمعدات.",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1400&q=85",
    icon: Wrench,
    features: [
      "فحص المعدات والأنظمة",
      "الصيانة الدورية",
      "تشخيص الأعطال",
      "الدعم الفني وقطع الغيار",
    ],
    slug: "maintenance-support",
  },
  {
    number: "04",
    title: "الحلول الهندسية المخصصة",
    subtitle: "Custom Engineering Solutions",
    description:
      "لكل منشأة متطلبات مختلفة. نعمل على دراسة ظروف الموقع وطبيعة الاستخدام لتطوير حلول تهوية صناعية تتناسب مع احتياجات المشروع ومتطلباته الفنية.",
    image:
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1400&q=85",
    icon: Settings2,
    features: [
      "دراسة ظروف الموقع",
      "حلول للمشروعات الخاصة",
      "تطوير التصاميم الهندسية",
      "مواءمة الأنظمة مع احتياجات المشروع",
    ],
    slug: "custom-solutions",
  },
];

const process = [
  {
    number: "01",
    title: "فهم احتياجاتك",
    description: "نحدد متطلبات المشروع وطبيعة المنشأة والتحديات الفنية.",
  },
  {
    number: "02",
    title: "الدراسة والتصميم",
    description: "ندرس الخيارات الفنية ونحدد الحل المناسب للمشروع.",
  },
  {
    number: "03",
    title: "التنفيذ والتوريد",
    description: "ندعم تنفيذ الحل وفق نطاق العمل والمواصفات المتفق عليها.",
  },
  {
    number: "04",
    title: "المتابعة والدعم",
    description: "نساعد في متابعة النظام وتقديم الدعم الفني حسب الحاجة.",
  },
];

export default function ServicesPage() {
  return (
    <Shell>
      <main dir="rtl" className="overflow-hidden bg-white text-[#102A49]">
        {/* Hero */}
        <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#082747] md:min-h-[620px]">
          <div className="absolute inset-0 -z-20">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2200&q=90"
              alt="بيئة عمل هندسية وصناعية"
              className="h-full w-full object-cover object-center"
            />
          </div>

          <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#061B32]/95 via-[#082747]/80 to-[#082747]/30" />

          <div className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
            <div className="max-w-3xl">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#6FB1FF]" />
                <span className="text-sm font-semibold tracking-[0.16em] text-[#A8D0FF]">
                  UG VENT / OUR SERVICES
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.45] text-white sm:text-5xl lg:text-7xl">
                حلول هندسية
                <br />
                <span className="text-[#6FB1FF]">
                  مصممة لأداء أفضل.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-9 text-white/75 sm:text-lg">
                من الدراسة والتصميم الهندسي إلى توريد المعدات والتركيب
                والصيانة، نقدم حلولًا لأنظمة التهوية الصناعية وطرد الدخان
                وفق متطلبات كل مشروع.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services-list"
                  className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#2F80ED] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1C6FD8]"
                >
                  اكتشف خدماتنا
                  <ArrowLeft size={18} />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center gap-3 border border-white/35 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  اطلب استشارة
                  <ArrowUpLeft size={18} />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 hidden h-2 w-1/3 bg-[#2F80ED] md:block" />
        </section>

        {/* Introduction */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:items-end lg:gap-20 lg:px-12">
            <div>
              <p className="mb-5 text-sm font-bold tracking-widest text-[#2F80ED]">
                WHAT WE DO
              </p>

              <h2 className="text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
                الأداء الهندسي يبدأ
                <br />
                <span className="text-[#2F80ED]">
                  من الحل الصحيح.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-9 text-slate-600 sm:text-lg">
                أنظمة التهوية الصناعية تحتاج إلى أكثر من مجرد معدات. إنها
                تحتاج إلى فهم دقيق للموقع، وتصميم مدروس، واختيار مناسب
                للمكونات، وتنفيذ يراعي متطلبات التشغيل والسلامة.
              </p>

              <p className="mt-4 text-base leading-9 text-slate-600 sm:text-lg">
                لذلك نركز على تقديم خدمات مترابطة تساعد عملاءنا على الوصول
                إلى حلول عملية تتناسب مع طبيعة منشآتهم وأهداف مشروعاتهم.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services-list" className="bg-[#F5F8FC] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="mb-14 flex flex-col gap-5 md:mb-20 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-4 text-sm font-bold tracking-widest text-[#2F80ED]">
                  OUR EXPERTISE
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                  خدماتنا الهندسية
                </h2>
              </div>

              <p className="max-w-lg text-base leading-8 text-slate-600">
                خدمات تغطي مراحل المشروع المختلفة، من الفكرة الأولى إلى
                التشغيل والمتابعة الفنية.
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                const reversed = index % 2 !== 0;

                return (
                  <article
                    key={service.slug}
                    className="group grid overflow-hidden bg-white lg:grid-cols-2"
                  >
                    <div
                      className={`relative min-h-[280px] overflow-hidden sm:min-h-[380px] lg:min-h-[490px] ${
                        reversed ? "lg:order-2" : ""
                      }`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#082747]/75 via-transparent to-transparent" />

                      <span className="absolute bottom-6 right-6 text-6xl font-bold text-white/90 sm:bottom-8 sm:right-8 sm:text-7xl">
                        {service.number}
                      </span>

                      <span className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center bg-white text-[#2F80ED] sm:left-8 sm:top-8 sm:h-16 sm:w-16">
                        <Icon size={28} strokeWidth={1.6} />
                      </span>
                    </div>

                    <div className="flex flex-col justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2F80ED] sm:text-sm">
                        {service.subtitle}
                      </p>

                      <h3 className="mt-4 text-2xl font-bold leading-relaxed sm:text-3xl">
                        {service.title}
                      </h3>

                      <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base sm:leading-9">
                        {service.description}
                      </p>

                      <div className="mt-7 grid gap-x-5 gap-y-4 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <div
                            key={feature}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2
                              size={19}
                              className="mt-1 shrink-0 text-[#2F80ED]"
                            />
                            <span className="text-sm leading-7 text-slate-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-9 border-t border-slate-100 pt-6">
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-3 text-sm font-bold text-[#102A49] transition hover:text-[#2F80ED]"
                        >
                          اكتشف تفاصيل الخدمة
                          <ArrowLeft
                            size={19}
                            className="transition-transform group-hover:-translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why UG VENT */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-12">
            <div>
              <p className="mb-4 text-sm font-bold tracking-widest text-[#2F80ED]">
                OUR APPROACH
              </p>

              <h2 className="text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
                نفكر في النظام
                <br />
                <span className="text-[#2F80ED]">كحل متكامل.</span>
              </h2>

              <p className="mt-6 text-base leading-9 text-slate-600">
                نجاح أنظمة التهوية لا يعتمد على مكوّن واحد، بل على التكامل
                بين التصميم والمعدات والتركيب والتشغيل. لهذا نولي اهتمامًا
                بالتفاصيل الفنية واحتياجات كل مشروع.
              </p>

              <Link
                href="/about"
                className="mt-8 inline-flex items-center gap-3 bg-[#082747] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
              >
                تعرف على UG VENT
                <ArrowLeft size={18} />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-[#F5F8FC] p-7 sm:p-8">
                <DraftingCompass
                  size={30}
                  className="text-[#2F80ED]"
                  strokeWidth={1.6}
                />
                <h3 className="mt-6 text-lg font-bold">
                  دراسة هندسية مدروسة
                </h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  فهم متطلبات الموقع قبل تحديد الحل المناسب.
                </p>
              </div>

              <div className="bg-[#F5F8FC] p-7 sm:mt-10 sm:p-8">
                <ShieldCheck
                  size={30}
                  className="text-[#2F80ED]"
                  strokeWidth={1.6}
                />
                <h3 className="mt-6 text-lg font-bold">
                  الاهتمام بالمواصفات
                </h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  مراعاة المعايير الفنية ومتطلبات المشروع.
                </p>
              </div>

              <div className="bg-[#F5F8FC] p-7 sm:p-8">
                <ClipboardCheck
                  size={30}
                  className="text-[#2F80ED]"
                  strokeWidth={1.6}
                />
                <h3 className="mt-6 text-lg font-bold">
                  تنظيم مراحل العمل
                </h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  تنسيق الخطوات من الدراسة إلى التنفيذ.
                </p>
              </div>

              <div className="bg-[#F5F8FC] p-7 sm:mt-10 sm:p-8">
                <Headset
                  size={30}
                  className="text-[#2F80ED]"
                  strokeWidth={1.6}
                />
                <h3 className="mt-6 text-lg font-bold">
                  دعم فني مستمر
                </h3>
                <p className="mt-3 text-sm leading-8 text-slate-600">
                  المساعدة الفنية وفق نطاق الخدمة المتفق عليه.
                </p>
              </div>
            </div>
          </div>
        </section>

      
{/* Process */}
<section className="relative overflow-hidden bg-[#082747] py-20 text-white sm:py-28">
  {/* Background decoration */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-[0.07]"
    style={{
      backgroundImage:
        "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
    {/* Heading */}
    <div className="mb-12 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-5 flex items-center gap-3">
          <span className="h-[2px] w-9 bg-[#6FB1FF]" />
          <span className="text-xs font-bold tracking-[0.2em] text-[#6FB1FF] sm:text-sm">
            HOW WE WORK
          </span>
        </div>

        <h2 className="text-3xl font-bold leading-relaxed sm:text-4xl lg:text-5xl">
          من المتطلبات إلى{" "}
          <span className="text-[#6FB1FF]">الحل.</span>
        </h2>
      </div>

      <p className="max-w-md text-sm leading-8 text-white/65 sm:text-base">
        نتبع خطوات واضحة ومدروسة لتحويل احتياجات مشروعك إلى حلول هندسية
        عملية، من التخطيط الأولي وحتى الدعم الفني.
      </p>
    </div>

    {/* Process Cards */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {process.map((item, index) => {
        const icons = [
          ClipboardCheck,
          DraftingCompass,
          Settings2,
          Headset,
        ];
        const Icon = icons[index];

        return (
          <div
            key={item.number}
            className="group relative flex min-h-[290px] flex-col overflow-hidden border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#6FB1FF]/60 hover:bg-white/[0.08] sm:min-h-[320px] sm:p-7"
          >
            {/* Top accent */}
            <div className="absolute right-0 top-0 h-[3px] w-0 bg-[#6FB1FF] transition-all duration-500 group-hover:w-full" />

            {/* Number and icon */}
            <div className="flex items-start justify-between">
              <span className="text-5xl font-light tracking-tight text-white/20 transition-colors duration-300 group-hover:text-[#6FB1FF] sm:text-6xl">
                {item.number}
              </span>

              <div className="flex h-12 w-12 items-center justify-center border border-[#6FB1FF]/25 bg-[#2F80ED]/10 text-[#6FB1FF] transition-all duration-300 group-hover:border-[#6FB1FF] group-hover:bg-[#2F80ED] group-hover:text-white">
                <Icon size={23} strokeWidth={1.6} />
              </div>
            </div>

            {/* Card content */}
            <div className="mt-9">
              <h3 className="text-lg font-bold leading-8 text-white sm:text-xl">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-8 text-white/60">
                {item.description}
              </p>
            </div>

            {/* Bottom indicator */}
            <div className="mt-auto flex items-center justify-between pt-7">
              <span className="text-[10px] font-semibold tracking-[0.18em] text-white/30">
                UG VENT / STEP {item.number}
              </span>

              <div className="flex h-8 w-8 items-center justify-center border border-white/10 text-[#6FB1FF] transition-all duration-300 group-hover:border-[#6FB1FF] group-hover:bg-[#2F80ED] group-hover:text-white">
                <ArrowLeft size={16} />
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Bottom note */}
    <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-xs leading-7 text-white/45 sm:text-sm">
        كل مرحلة تمهّد للمرحلة التالية ضمن مسار عمل متكامل.
      </p>

      <div className="flex items-center gap-2">
        <span className="h-2 w-2 bg-[#6FB1FF]" />
        <span className="text-xs font-medium text-white/65">
          ENGINEERING · DESIGN · EXECUTION
        </span>
      </div>
    </div>
  </div>
</section>


        {/* CTA */}
        <section className="px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-[#F0F5FB] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            <div className="absolute left-0 top-0 h-full w-2 bg-[#2F80ED]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="mb-4 text-sm font-bold tracking-widest text-[#2F80ED]">
                  LET&apos;S DISCUSS YOUR PROJECT
                </p>

                <h2 className="text-3xl font-bold leading-relaxed sm:text-4xl">
                  هل لديك مشروع يحتاج إلى حل هندسي؟
                </h2>

                <p className="mt-4 text-base leading-8 text-slate-600">
                  تواصل معنا لمناقشة متطلبات مشروعك والخدمة المناسبة له.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 bg-[#2F80ED] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#1C6FD8]"
              >
                تواصل معنا
                <ArrowLeft size={19} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Shell>
  );
}
