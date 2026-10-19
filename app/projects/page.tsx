
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpLeft,
  Building2,
  Factory,
  Warehouse,
  CarFront,
  Utensils,
  Construction,
  Images,
  MapPin,
  X,
} from "lucide-react";
import { Shell } from "@/components/site";

const projects = [
  {
    id: 1,
    title: "مول تجاري",
    location: "القاهرة",
    category: "commercial",
    categoryLabel: "مباني تجارية",
    system: "أنظمة التهوية وتوزيع الهواء",
    image:
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=85",
    description:
      "حلول تهوية للمساحات التجارية مع مراعاة توزيع الهواء وراحة المستخدمين.",
    icon: Building2,
  },
  {
    id: 2,
    title: "مصنع إنتاج",
    location: "العاشر من رمضان",
    category: "industrial",
    categoryLabel: "مصانع",
    system: "التهوية الصناعية وطرد الحرارة",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1200&q=85",
    description:
      "أنظمة تهوية مناسبة لبيئات التشغيل الصناعي وتجديد الهواء داخل المنشآت.",
    icon: Factory,
  },
  {
    id: 3,
    title: "جراج متعدد الأدوار",
    location: "مدينة نصر",
    category: "smoke",
    categoryLabel: "سحب الدخان",
    system: "تهوية الجراجات وسحب الدخان",
    image:
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=85",
    description:
      "حلول تهوية للجراجات المغلقة مع مراعاة متطلبات السلامة وتصميم النظام.",
    icon: CarFront,
  },
  {
    id: 4,
    title: "نفق مروري",
    location: "القاهرة",
    category: "smoke",
    categoryLabel: "سحب الدخان",
    system: "أنظمة التهوية وطرد الملوثات",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1200&q=85",
    description:
      "حلول تهوية للممرات والمنشآت المغلقة وفق متطلبات المشروع الهندسية.",
    icon: Construction,
  },
  {
    id: 5,
    title: "مطبخ مركزي",
    location: "الجيزة",
    category: "kitchen",
    categoryLabel: "مطابخ مركزية",
    system: "شفط الأبخرة والروائح",
    image:
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85",
    description:
      "حلول شفط وتهوية للمطابخ التجارية للتخلص من الأبخرة والحرارة.",
    icon: Utensils,
  },
  {
    id: 6,
    title: "مخازن لوجستية",
    location: "العبور",
    category: "industrial",
    categoryLabel: "مخازن",
    system: "تجديد الهواء والتهوية",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=85",
    description:
      "أنظمة تهوية للمساحات التخزينية تراعي طبيعة الاستخدام ومتطلبات التشغيل.",
    icon: Warehouse,
  },

  
  {
    id: 7,
    title: "مبنى إداري",
    location: "القاهرة الجديدة",
    category: "commercial",
    categoryLabel: "مباني تجارية",
    system: "التهوية وتكييف الهواء",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    description: "حلول تهوية للمباني الإدارية والمساحات المكتبية.",
    icon: Building2,
  },
  {
    id: 8,
    title: "مصنع صناعي",
    location: "مدينة صناعية",
    category: "industrial",
    categoryLabel: "مصانع",
    system: "طرد الحرارة وتجديد الهواء",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=85",
    description: "حلول تهوية للمنشآت الصناعية وبيئات التشغيل.",
    icon: Factory,
  },
  {
    id: 9,
    title: "موقف سيارات مغلق",
    location: "القاهرة",
    category: "smoke",
    categoryLabel: "سحب الدخان",
    system: "تهوية الجراجات",
    image:
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?auto=format&fit=crop&w=1200&q=85",
    description: "حلول تهوية للمواقف المغلقة وفق متطلبات المنشأة.",
    icon: CarFront,
  },
  {
    id: 10,
    title: "مركز تجاري",
    location: "الجيزة",
    category: "commercial",
    categoryLabel: "مباني تجارية",
    system: "توزيع الهواء والتهوية",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=85",
    description: "أنظمة تهوية للمساحات التجارية ومناطق حركة الزوار.",
    icon: Building2,
  },
  {
    id: 11,
    title: "مستودع تخزين",
    location: "العبور",
    category: "industrial",
    categoryLabel: "مخازن",
    system: "تجديد الهواء",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200&q=85",
    description: "حلول تهوية للمستودعات والمساحات اللوجستية.",
    icon: Warehouse,
  },
  {
    id: 12,
    title: "مطبخ تجاري",
    location: "القاهرة",
    category: "kitchen",
    categoryLabel: "مطابخ مركزية",
    system: "شفط الأبخرة والحرارة",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=85",
    description: "حلول شفط وتهوية للمطابخ التجارية.",
    icon: Utensils,
  },

];

const filters = [
  { id: "all", label: "كل المشاريع" },
  { id: "industrial", label: "المصانع والمخازن" },
  { id: "commercial", label: "المباني التجارية" },
  { id: "smoke", label: "سحب الدخان" },
  { id: "kitchen", label: "المطابخ المركزية" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] =
    useState<(typeof projects)[number] | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;

    return projects.filter(
      (project) => project.category === activeFilter
    );
  }, [activeFilter]);

  return (
        <Shell>

    <main dir="rtl" className="min-h-screen overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#082747]">
        <div className="absolute inset-0 -z-10">
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    poster="/images/projects-poster.jpg"
    aria-hidden="true"
    className="h-full w-full object-cover opacity-40"
  >
    <source src="/ventilation.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-gradient-to-l from-[#061D36] via-[#082747]/55 to-[#0B3C6F]/25" />
</div>

        <div className="container relative py-20 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            

            <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
              حلول هندسية
              <span className="mt-2 block text-[#6FB1FF]">
                تُنفَّذ على أرض الواقع
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              تعرّف على مجالات المشاريع التي تخدمها حلول التهوية
              الصناعية وسحب الدخان من UG VENT.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#project-gallery"
                className="inline-flex items-center gap-3 rounded-lg bg-[#2F80ED] px-6 py-3.5 font-bold text-white transition hover:bg-[#1D6FD4]"
              >
                استكشف المعرض
                <ArrowLeft size={18} />
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-6 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                ناقش مشروعك معنا
                <ArrowUpLeft size={18} />
              </Link>
            </div>
          </div>

          <div className="mt-14 border-t border-white/20 pt-6 text-sm text-slate-300">
            التهوية الصناعية
            <span className="mx-2 text-[#6FB1FF]">/</span>
            سحب الدخان
            <span className="mx-2 text-[#6FB1FF]">/</span>
            الحلول الهندسية
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        id="project-gallery"
        className="container scroll-mt-24 py-16 sm:py-20"
      >
        <div className="mb-10">
          <span className="text-sm font-bold tracking-wider text-[#2F80ED]">
            PROJECT PORTFOLIO
          </span>

          <h2 className="mt-3 text-3xl font-black text-[#0B3C6F] sm:text-4xl">
            معرض المشاريع
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base">
            تصفّح مجالات المشاريع وتعرّف على الأنظمة الهندسية
            المناسبة لكل منشأة.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-9 flex gap-2 overflow-x-auto pb-3">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                aria-pressed={isActive}
                className={`shrink-0 rounded-lg border px-4 py-3 text-sm font-bold transition ${
                  isActive
                    ? "border-[#0B3C6F] bg-[#0B3C6F] text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-[#2F80ED] hover:text-[#0B3C6F]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mb-6 flex items-center justify-between gap-3">
          <p className="text-sm text-slate-500">
            المشاريع حسب نوع المنشأة
          </p>

          <span className="rounded-md bg-[#F0F6FD] px-3 py-2 text-sm font-bold text-[#0B3C6F]">
            {filteredProjects.length} مشاريع
          </span>
        </div>


{/* Projects grid */}
<div className="grid grid-cols-2 items-stretch gap-3 sm:gap-5 lg:grid-cols-3">
  {filteredProjects.map((project) => {
    const Icon = project.icon;

    return (
      <article
        key={project.id}
        className="group flex min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-950/5 sm:rounded-2xl"
      >
        {/* Project image */}
        <button
          type="button"
          onClick={() => setSelectedProject(project)}
          aria-label={`عرض تفاصيل ${project.title}`}
          className="relative block aspect-[4/3] w-full shrink-0 overflow-hidden bg-slate-100 text-right"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#061D36]/75 via-transparent to-black/10" />

          {/* Category */}
          <span className="absolute right-2 top-2 max-w-[85%] truncate rounded-md bg-white/95 px-2 py-1 text-[10px] font-bold text-[#0B3C6F] shadow-sm sm:right-3 sm:top-3 sm:px-3 sm:py-1.5 sm:text-xs">
            {project.categoryLabel}
          </span>

          {/* Location */}
          <span className="absolute bottom-2 right-2 flex max-w-[90%] items-center gap-1.5 text-[10px] font-medium text-white sm:bottom-3 sm:right-3 sm:gap-2 sm:text-xs">
            <MapPin size={13} className="shrink-0 sm:size-4" />
            <span className="truncate">{project.location}</span>
          </span>

          {/* Image action */}
         
        </button>

        {/* Project content */}
        <div className="flex flex-1 flex-col p-3 sm:p-5">
          {/* Title and icon */}
          <div className="flex min-w-0 items-start gap-2 sm:gap-3">
            <div className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#EEF5FD] text-[#0B3C6F] sm:size-10 sm:rounded-xl">
              <Icon size={18} className="sm:size-5" />
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="break-words text-sm font-extrabold leading-6 text-[#0B3C6F] sm:text-lg sm:leading-7">
                {project.title}
              </h3>

              <p className="mt-0.5 text-[10px] leading-5 text-slate-400 sm:mt-1 sm:text-xs">
                {project.categoryLabel}
              </p>
            </div>
          </div>

          {/* System description */}
          <div className="mt-3 flex-1 border-t border-slate-100 pt-3 sm:mt-4 sm:pt-4">
            <p className="text-xs leading-6 text-slate-600 sm:text-sm sm:leading-7">
              {project.system}
            </p>
          </div>

          {/* Details button */}
          <button
            type="button"
            onClick={() => setSelectedProject(project)}
            className="mt-3 flex w-full items-center justify-between gap-1 rounded-lg bg-[#F3F7FC] px-2.5 py-2.5 text-xs font-bold text-[#0B3C6F] transition hover:bg-[#E5F0FF] sm:mt-4 sm:px-4 sm:py-3 sm:text-sm"
          >
            <span>تفاصيل </span>
            <ArrowLeft
              size={15}
              className="shrink-0 transition group-hover:-translate-x-1 sm:size-[18px]"
            />

            
          </button>
        </div>
      </article>
    );
  })}
</div>


        {filteredProjects.length === 0 && (
          <div className="rounded-xl border border-dashed border-slate-300 py-16 text-center text-slate-500">
            لا توجد مشاريع في هذا التصنيف حاليًا.
          </div>
        )}
      </section>

      {/* Contact CTA */}
      <section className="container pb-16 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl bg-[#082747] px-6 py-10 sm:px-10 sm:py-14">
          <div className="absolute -left-16 -top-20 size-64 rounded-full border-[40px] border-white/5" />

          <div className="relative flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="text-sm font-bold text-[#6FB1FF]">
                YOUR NEXT PROJECT
              </span>

              <h2 className="mt-3 text-2xl font-black leading-relaxed text-white sm:text-3xl">
                عندك مشروع يحتاج إلى حلول تهوية؟
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                تواصل مع فريق UG VENT لمناقشة متطلبات مشروعك
                واختيار الحل الهندسي المناسب.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#2F80ED] px-6 py-4 font-bold text-white transition hover:bg-[#1D6FD4]"
            >
              تواصل معنا
              <ArrowLeft size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project details modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#041426]/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            className="relative my-auto w-full max-w-2xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="إغلاق التفاصيل"
              className="absolute left-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white text-[#0B3C6F] shadow-lg transition hover:bg-slate-100"
            >
              <X size={20} />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="h-56 w-full object-cover sm:h-72"
            />

            <div className="p-6 sm:p-8">
              <span className="text-sm font-bold text-[#2F80ED]">
                {selectedProject.categoryLabel}
              </span>

              <h2
                id="project-dialog-title"
                className="mt-2 text-2xl font-black text-[#0B3C6F]"
              >
                {selectedProject.title}
              </h2>

              <p className="mt-3 flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={16} />
                {selectedProject.location}
              </p>

              <div className="mt-6 rounded-xl bg-[#F3F7FC] p-4">
                <p className="text-xs font-bold text-slate-400">
                  نوع النظام
                </p>

                <p className="mt-2 font-bold text-[#0B3C6F]">
                  {selectedProject.system}
                </p>
              </div>

              <p className="mt-5 text-sm leading-8 text-slate-600">
                {selectedProject.description}
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#0B3C6F] px-5 py-3 font-bold text-white transition hover:bg-[#2F80ED]"
              >
                استفسر عن مشروع مشابه
                <ArrowLeft size={18} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
     </Shell>
  );
}
