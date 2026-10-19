
"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, CheckCircle2, X } from "lucide-react";

const sectors = [
  {
    number: "01",
    title: "المصانع والمنشآت الصناعية",
    description:
      "حلول تهوية صناعية تساعد على تجديد الهواء وتحسين بيئة العمل داخل المصانع والمنشآت الإنتاجية.",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    alt: "منشأة صناعية",
    details: [
      {
        title: "أنظمة التهوية الصناعية",
        text: "حلول لتجديد الهواء وتحسين تدفقه وفق طبيعة النشاط الصناعي.",
      },
      {
        title: "شفط الهواء وطرد الدخان",
        text: "حلول يتم اختيارها وفق متطلبات المنشأة والتصميم الهندسي.",
      },
      {
        title: "اختيار المعدات المناسبة",
        text: "تحديد الأنظمة والمراوح وفق احتياجات المشروع وظروف التشغيل.",
      },
    ],
  },
  {
    number: "02",
    title: "المراكز التجارية والمولات",
    description:
      "حلول تهوية للمساحات التجارية الكبيرة مع مراعاة متطلبات التشغيل وإدارة الدخان.",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=85",
    alt: "مركز تجاري حديث",
    details: [
      {
        title: "تهوية المساحات الواسعة",
        text: "أنظمة مناسبة للممرات والمناطق التجارية ذات الحركة المستمرة.",
      },
      {
        title: "أنظمة إدارة الدخان",
        text: "حلول مصممة وفق متطلبات المشروع ومعايير السلامة المعتمدة.",
      },
      {
        title: "تكامل الأنظمة",
        text: "اختيار المعدات بما يتوافق مع تصميم المبنى وبقية الأنظمة الهندسية.",
      },
    ],
  },
  {
    number: "03",
    title: "الجراجات ومواقف السيارات",
    description:
      "حلول لتهوية مواقف السيارات المغلقة والمساعدة في طرد العوادم وإدارة الدخان.",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=85",
    alt: "موقف سيارات",
    details: [
      {
        title: "طرد عوادم السيارات",
        text: "أنظمة تهوية تساعد على التخلص من الهواء الملوث داخل المواقف.",
      },
      {
        title: "مراوح Jet Fans",
        text: "حلول لتوجيه حركة الهواء داخل الجراجات وفق التصميم الهندسي.",
      },
      {
        title: "شفط الدخان",
        text: "أنظمة مخصصة لإدارة الدخان بحسب متطلبات السلامة والتصميم.",
      },
    ],
  },
  {
    number: "04",
    title: "المخازن والمنشآت الخدمية",
    description:
      "حلول تهوية للمخازن والمباني الخدمية والمساحات الكبيرة التي تحتاج إلى تدفق هواء مناسب.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    alt: "مخزن لوجستي",
    details: [
      {
        title: "تجديد الهواء",
        text: "حلول تهوية تتناسب مع مساحة المخزن وطبيعة استخدامه.",
      },
      {
        title: "توزيع الهواء",
        text: "اختيار المعدات وتوزيعها وفق احتياجات المساحة ومتطلبات التشغيل.",
      },
      {
        title: "حلول حسب طبيعة المنشأة",
        text: "مراعاة طبيعة التخزين والحرارة والظروف التشغيلية عند تصميم الحل.",
      },
    ],
  },
];

export default function AboutSectors() {
  const [selectedSector, setSelectedSector] = useState<number | null>(null);

  useEffect(() => {
    if (selectedSector === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedSector(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSector]);

  const activeSector =
    selectedSector === null ? null : sectors[selectedSector];

  return (
    <section
      id="sectors"
      className="relative overflow-hidden  bg-[#ffffff]"
    >
      <div className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="container relative py-16 md:py-24">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-[#2F80ED]">
            <span className="size-1.5 rounded-full bg-[#2F80ED]" />
            قطاعات نخدمها
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-[#0B3C6F] md:text-4xl lg:text-5xl">
            حلول لمختلف أنواع المنشآت
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-slate-600 md:text-base">
            نوفر حلول التهوية الصناعية وطرد الدخان لمجموعة متنوعة من المنشآت،
            مع مراعاة طبيعة كل مشروع واحتياجاته التشغيلية ومتطلبات السلامة.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {sectors.map((sector, index) => (
            <button
              key={sector.number}
              type="button"
              onClick={() => setSelectedSector(index)}
              aria-label={`عرض تفاصيل ${sector.title}`}
              className="group min-w-0 overflow-hidden rounded-2xl border border-[#DFE9F3] bg-white text-right shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-[#0B3C6F]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED] focus-visible:ring-offset-2 sm:rounded-3xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E8F0F8]">
                <img
                  src={sector.image}
                  alt={sector.alt}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061D36]/80 via-[#061D36]/10 to-transparent" />

                <span className="absolute right-3 top-3 rounded-lg border border-white/30 bg-[#0B3C6F]/80 px-2.5 py-1.5 text-xs font-black text-white backdrop-blur-sm sm:right-4 sm:top-4">
                  {sector.number}
                </span>

                <h3 className="absolute inset-x-3 bottom-3 text-sm font-black leading-6 text-white sm:inset-x-4 sm:bottom-4 sm:text-lg sm:leading-7">
                  {sector.title}
                </h3>
              </div>

              <div className="p-3.5 sm:p-5">
                <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
                  {sector.description}
                </p>

                <div className="mt-4 flex items-center justify-between gap-2 text-xs font-black text-[#2F80ED] sm:mt-5 sm:text-sm">
                  <span>اكتشف التفاصيل</span>
                  <ArrowLeft className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-1" />
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <h3 className="text-base font-black text-[#0B3C6F] sm:text-lg">
              مشروعك له متطلبات خاصة؟
            </h3>
            <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
              تواصل معنا لمناقشة احتياجات منشأتك واختيار الحل الهندسي المناسب.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B3C6F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#2F80ED] sm:w-auto"
          >
            تواصل مع فريقنا
            <ArrowLeft className="size-4" />
          </a>
        </div>
      </div>

      {activeSector && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#061D36]/75 p-3 backdrop-blur-sm sm:p-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedSector(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sector-modal-title"
            className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl sm:rounded-3xl"
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4">
              <span className="text-xs font-black text-[#2F80ED] sm:text-sm">
                تفاصيل القطاع
              </span>

              <button
                type="button"
                onClick={() => setSelectedSector(null)}
                aria-label="إغلاق نافذة التفاصيل"
                className="grid size-10 place-items-center rounded-full bg-slate-100 text-[#0B3C6F] transition hover:bg-blue-50 hover:text-[#2F80ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2F80ED]"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="grid max-h-[calc(100dvh-100px)] overflow-y-auto md:grid-cols-2 md:overflow-hidden">
              <div className="relative min-h-52 overflow-hidden bg-[#E8F0F8] sm:min-h-72 md:min-h-[500px]">
                <img
                  src={activeSector.image}
                  alt={activeSector.alt}
                  className="absolute inset-0 size-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061D36]/80 via-transparent to-transparent" />

                <span className="absolute right-4 top-4 rounded-lg border border-white/30 bg-[#0B3C6F]/80 px-3 py-2 text-sm font-black text-white backdrop-blur-sm">
                  {activeSector.number}
                </span>

                <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6">
                  <p className="text-sm font-bold text-blue-200">UG VENT</p>
                  <p className="mt-1 text-xl font-black leading-8 text-white sm:text-2xl">
                    {activeSector.title}
                  </p>
                </div>
              </div>

              <div className="p-5 sm:p-7 md:p-8">
                <span className="inline-flex rounded-full bg-blue-50 px-3 py-1.5 text-xs font-black text-[#2F80ED]">
                  حلول مصممة لمشروعك
                </span>

                <h3
                  id="sector-modal-title"
                  className="mt-4 text-xl font-black leading-8 text-[#0B3C6F] sm:text-2xl"
                >
                  {activeSector.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {activeSector.description}
                </p>

                <div className="my-5 h-px bg-slate-100" />

                <h4 className="text-sm font-black text-[#0B3C6F] sm:text-base">
                  الحلول التي يمكن أن تناسب منشأتك
                </h4>

                <div className="mt-4 space-y-4">
                  {activeSector.details.map((detail) => (
                    <div key={detail.title} className="flex gap-3">
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]">
                        <CheckCircle2 className="size-4" />
                      </span>

                      <div>
                        <h5 className="text-sm font-black leading-6 text-[#0B3C6F]">
                          {detail.title}
                        </h5>
                        <p className="mt-1 text-xs leading-6 text-slate-500 sm:text-sm">
                          {detail.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  onClick={() => setSelectedSector(null)}
                  className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#0B3C6F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
                >
                  طلب استشارة فنية
                  <ArrowLeft className="size-4" />
                </a>

                <p className="mt-3 text-center text-xs leading-6 text-slate-400">
                  يتم تحديد الحل النهائي وفق متطلبات المشروع والتصميم الهندسي.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
