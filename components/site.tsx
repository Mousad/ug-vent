
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Fan,
  Phone,
  ArrowLeft,
  ChevronDown,
  MessageCircle,
  House,
  Building2,
  Package,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { categories } from "@/data/products";

const nav = [
  ["/", "الرئيسية"],
  ["/about", "من نحن"],
  ["/products", "المنتجات"],
  ["/smoke-extraction", "حلول شفط الدخان"],
  ["/applications", "التطبيقات"],
  ["/services", "الخدمات"],
  ["/projects", "المشاريع"],
  ["/contact", "اتصل بنا"],
] as const;

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="UG VENT - الصفحة الرئيسية"
      className="flex items-center gap-3 font-black tracking-tight text-[#0B3C6F]"
    >
      <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#0b3c6f] text-white">
        <Fan className="size-6 animate-spin-slow" />
      </span>

      <span className="text-xl leading-tight">
        UG<b className="text-[#0b3c6f]">VENT</b>
      </span>
    </Link>
  );
}

/* عنصر التنقل في الشريط السفلي */
function BottomItem({
  href,
  label,
  icon: Icon,
  active,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{
    className?: string;
    strokeWidth?: number;
  }>;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={`relative flex h-full flex-col items-center justify-center gap-1 transition active:scale-95 ${
        active
          ? "text-[#2F80ED]"
          : "text-slate-500 hover:text-[#2F80ED]"
      }`}
    >
      {active && (
        <span className="absolute top-0 h-[3px] w-8 rounded-b-full bg-[#2F80ED]" />
      )}

      <Icon
        className="size-[22px]"
        strokeWidth={active ? 2.2 : 1.8}
      />

      <span className="text-[10px] font-bold">{label}</span>
    </Link>
  );
}

function MobileBottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  // الرئيسية تعرض المشاريع في المنتصف،
  // وبقية الصفحات تعرض الرئيسية.
  const isHome = pathname === "/";
  const centerHref = isHome ? "/projects" : "/";
  const centerLabel = isHome ? "المشاريع" : "الرئيسية";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // إخفاء الشريط السفلي عند ظهور Footer.
  useEffect(() => {
    const footer = document.querySelector("footer");

    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.01,
      }
    );

    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  // إغلاق القائمة بزر Escape ومنع تمرير الصفحة خلفها.
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const active = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      {/* القائمة الجانبية */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden ${
          open ? "visible" : "invisible pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="إغلاق القائمة"
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-[#061B30]/55 backdrop-blur-[3px] transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          dir="rtl"
          aria-label="القائمة الرئيسية"
          className={`absolute right-0 top-0 flex h-full w-[min(85%,360px)] flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-5">
            <Logo />

            <button
              type="button"
              aria-label="إغلاق القائمة"
              onClick={() => setOpen(false)}
              className="grid size-10 place-items-center rounded-xl bg-slate-100 text-[#0B3C6F] transition hover:bg-blue-50"
            >
              <X className="size-5" />
            </button>
          </div>

          <div className="px-5 pt-6">
            

            <nav className="flex flex-col gap-1">
              {nav.map(([href, label], index) => {
                const selected = active(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-bold transition ${
                      selected
                        ? "bg-blue-50 text-[#2F80ED]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#2F80ED]"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`grid size-8 place-items-center rounded-lg text-xs ${
                          selected
                            ? "bg-[#2F80ED] text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {label}
                    </span>

                    {selected && (
                      <span className="size-2 rounded-full bg-[#2F80ED]" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="mt-auto p-5">
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B3C6F] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
            >
              اطلب عرض سعر
            </Link>

            <p className="mt-4 text-center text-xs text-slate-400">
              Integrated Industrial Ventilation Systems
            </p>
          </div>
        </aside>
      </div>

      {/* شريط التنقل السفلي للموبايل */}
      <nav
        dir="rtl"
        aria-label="التنقل السريع"
        aria-hidden={footerVisible}
        className={`fixed inset-x-0 bottom-0 z-[60] overflow-visible border-t border-slate-200/80 bg-white/95 shadow-[0_-8px_30px_rgba(11,60,111,0.08)] backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
          footerVisible
            ? "pointer-events-none translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <div className="grid h-[64px] grid-cols-5 items-stretch px-2">
          {/* 1 - القائمة */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="فتح القائمة"
            aria-expanded={open}
            className="flex h-full flex-col items-center justify-center gap-1 text-slate-500 transition hover:text-[#2F80ED] active:scale-95"
          >
            <Menu className="size-[22px]" strokeWidth={1.8} />
            <span className="text-[10px] font-bold">القائمة</span>
          </button>

          {/* 2 - المنتجات */}
          <BottomItem
            href="/products"
            label="المنتجات"
            icon={Package}
            active={active("/products")}
          />

          {/* 3 - العنصر الأوسط */}
          <Link
            href={centerHref}
            aria-label={centerLabel}
            className="relative flex h-full flex-col items-center justify-end pb-2"
          >
            <span className="absolute -top-6 left-1/2 grid size-[58px] -translate-x-1/2 place-items-center rounded-full border-[5px] border-white bg-[#2F80ED] text-white shadow-[0_8px_22px_rgba(47,128,237,0.4)] transition duration-300 hover:bg-[#0B3C6F] active:scale-90">
              {isHome ? (
                <Building2
                  className="size-6"
                  strokeWidth={2}
                />
              ) : (
                <House
                  className="size-6"
                  strokeWidth={2}
                />
              )}
            </span>

            <span className="whitespace-nowrap text-[10px] font-bold text-[#0B3C6F]">
              {centerLabel}
            </span>
          </Link>

          {/* 4 - من نحن */}
          <BottomItem
            href="/about"
            label="من نحن"
            icon={Building2}
            active={active("/about")}
          />

          {/* 5 - اتصل بنا */}
          <BottomItem
            href="/contact"
            label="اتصل بنا"
            icon={Phone}
            active={active("/contact")}
          />
        </div>

        <div className="h-[env(safe-area-inset-bottom)] bg-white" />
      </nav>
    </>
  );
}

export function Header() {
  return (
    <>
      {/* النافبار العلوي */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
        {/* الموبايل */}
        <div className="flex h-[68px] items-center justify-center px-4 lg:hidden">
          <Logo />
        </div>

        {/* الكمبيوتر */}
        <div className="mx-auto hidden h-20 max-w-7xl items-center justify-between px-5 lg:flex">
          <Logo />

          <nav className="flex items-center gap-5 xl:gap-6">
            {nav.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="group flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-slate-600 transition hover:text-[#2F80ED]"
              >
                {label}

                {href === "/products" && (
                  <ChevronDown className="size-3 transition-transform group-hover:rotate-180" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-3">
            <Link
              href="/contact"
              className="rounded-lg bg-[#0B3C6F] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
            >
              اطلب عرض سعر
            </Link>

            <button
              type="button"
              aria-label="تغيير اللغة"
              className="rounded-md border border-slate-200 px-2 py-1 text-xs font-bold text-[#0B3C6F] transition hover:border-[#2F80ED]"
            >
              AR / EN
            </button>
          </div>
        </div>
      </header>

      <MobileBottomNav />
    </>
  );
}

export function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden bg-[#082747] text-white"
    >
      <div className="pointer-events-none absolute -left-24 top-10 size-64 rounded-full bg-blue-500/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-8">
        {/* Brand */}
        <div className="border-b border-white/10 py-8 sm:py-10 lg:py-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div className="min-w-0">
              <div className="[&_a]:!text-white [&_small]:!text-blue-200">
                <Logo />
              </div>

              <p className="mt-3 max-w-xl text-[13px] leading-7 text-blue-100/70 sm:text-sm">
                حلول متكاملة للتهوية الصناعية وطرد الدخان، بجودة هندسية
                تجمع بين كفاءة الأداء وسلامة المنشآت.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-[#082747] transition hover:bg-blue-50 sm:w-auto"
            >
              تواصل مع فريقنا
              <ArrowLeft className="size-4" />
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 border-b border-white/10 py-8 sm:gap-10 sm:py-10 lg:grid-cols-4">
          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-extrabold sm:text-base">
              روابط سريعة
            </h3>

            <div className="mb-4 h-0.5 w-8 rounded-full bg-[#55A5FF]" />

            <nav className="flex flex-col items-start gap-3.5">
              {nav.slice(0, 5).map(([href, label]) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] leading-6 text-blue-100/70 transition hover:text-white sm:text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="min-w-0">
            <h3 className="mb-4 text-sm font-extrabold sm:text-base">
              منتجاتنا
            </h3>

            <div className="mb-4 h-0.5 w-8 rounded-full bg-[#55A5FF]" />

            <nav className="flex flex-col items-start gap-3.5">
              {categories.slice(0, 4).map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}`}
                  className="text-[13px] leading-6 text-blue-100/70 transition hover:text-white sm:text-sm"
                >
                  {category.title}
                </Link>
              ))}

              <Link
                href="/products"
                className="mt-1 inline-flex items-center gap-1.5 text-[13px] font-bold text-[#8CC5FF] transition hover:text-white sm:text-sm"
              >
                كل المنتجات
                <ArrowLeft className="size-3.5" />
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2 py-5 text-center sm:flex-row sm:justify-between sm:text-right">
          <p className="text-[11px] leading-6 text-blue-100/50 sm:text-xs">
            © {new Date().getFullYear()} UG VENT — جميع الحقوق محفوظة
          </p>

          <Link
            href="/contact"
            className="text-[11px] text-blue-100/60 transition hover:text-white sm:text-xs"
          >
            حلول التهوية الصناعية وطرد الدخان
          </Link>
        </div>
      </div>
    </footer>
  );
}

export function WhatsApp() {
  return (
    <a
      aria-label="تواصل معنا عبر واتساب"
      href="https://wa.me/201228404000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 left-4 z-30 grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20BA5A] sm:left-5 sm:size-14 lg:bottom-5"
    >
      <FaWhatsapp className="size-7 sm:size-8" />
    </a>
  );
}

export function Shell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pb-24 lg:pb-0">{children}</main>
      <WhatsApp />
      <Footer />
    </>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <span className="mb-3 inline-block text-xs font-bold uppercase tracking-[.2em] text-[#2F80ED]">
        {eyebrow || "UG VENT"}
      </span>

      <h2 className="text-3xl font-black text-[#0B3C6F] md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 leading-8 text-slate-600">
          {description}
        </p>
      )}
    </div>
  );
}

export function FanGraphic({
  dark = false,
}: {
  dark?: boolean;
}) {
  return (
    <div
      className={`blueprint relative grid aspect-square max-w-md place-items-center overflow-hidden rounded-[2rem] border ${
        dark
          ? "border-white/15 bg-white/5"
          : "border-blue-100 bg-blue-50"
      }`}
    >
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(#2f80ed22 1px,transparent 1px),linear-gradient(90deg,#2f80ed22 1px,transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative grid size-52 place-items-center rounded-full border-2 border-[#2F80ED] md:size-64">
        <Fan
          className="size-32 animate-spin-slow text-[#2F80ED] md:size-40"
          strokeWidth={1}
        />

        <div className="absolute size-5 rounded-full bg-[#0B3C6F]" />
      </div>

      <span
        className={`absolute bottom-5 right-6 text-xs font-bold tracking-[.25em] ${
          dark ? "text-blue-200" : "text-slate-400"
        }`}
      >
        UG / AIRFLOW 01
      </span>
    </div>
  );
}
