
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


/* ───────── شركاء UG VENT ───────── */

const partners = [
  { name: "Partner 1", logo: "https://systemvent-eg.com/uploads/vendors/1624974158.png" },
  { name: "Partner 2", logo: "https://i.pinimg.com/736x/1d/d2/a7/1dd2a7f35bfd0a782674f9463958f8be.jpg" },
  { name: "Partner 3", logo: "https://i.pinimg.com/1200x/57/b3/4f/57b34fdc9fce1f56b8953d0f299ba798.jpg" },
  { name: "Partner 4", logo: "https://i.pinimg.com/736x/e8/d5/a4/e8d5a4a0b426ea92b5f5c256b59ec26e.jpg" },
  { name: "Partner 5", logo: "https://i.pinimg.com/736x/c9/73/76/c97376fe79c2f2e9e848470b7f97e89e.jpg" },
  { name: "Partner 6", logo: "https://i.pinimg.com/1200x/4f/86/d2/4f86d2842cd956fe1ff3622fb1de7981.jpg" },
];

function PartnerTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...partners, ...partners, ...partners, ...partners];

 return (
  <div className="partners-marquee" dir="ltr">
    <div
      className={`partners-track ${
        reverse ? "partners-reverse" : ""
      }`}
    >
      {items.map((partner, index) => (
        <div
          key={`${partner.name}-${index}`}
          className="flex h-20 w-44 shrink-0 items-center justify-center px-1 sm:h-24 sm:w-52"
        >
          <img
            src={partner.logo}
            alt={partner.name}
            loading="lazy"
            className="h-16 w-full object-contain sm:h-20"
          />
        </div>
      ))}
    </div>
  </div>
);
}


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
     
<section className="border-b border-slate-200 bg-white text-[#0B3C6F]">
  <div className="container grid grid-cols-4 gap-1.5 py-4 sm:gap-4 sm:py-7">
    {stats.map(({ icon: Icon, value, label, long }) => (
      <div
        key={label}
        className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-[#0B3C6F]/10 bg-white px-0.5 py-3 text-center transition hover:bg-[#F4F7FB] sm:rounded-xl sm:px-4 sm:py-5"
      >
        <span className="mb-2 grid size-7 place-items-center rounded-full bg-[#2F80ED]/10 text-[#2F80ED] sm:mb-3 sm:size-12">
          <Icon
            className="size-3.5 sm:size-6"
            strokeWidth={1.8}
          />
        </span>

        <b
          className={`block max-w-full break-words font-black leading-tight text-[#0B3C6F] ${
            long
              ? "text-[9px] sm:text-base"
              : "text-[11px] sm:text-xl"
          }`}
        >
          {value}
        </b>

        <p className="mt-1 text-[8px] leading-4 text-[#0B3C6F]/75 sm:mt-2 sm:text-sm sm:leading-5">
          {label}
        </p>
      </div>
    ))}
  </div>
</section>


{/* ═══════════════ PARTNERS ═══════════════ */}





      {/* ═══════════════ 3. PRODUCTS ═══════════════ */}
    
     
{/* ═══════════════ 3. PRODUCT GROUPS ═══════════════ */}
<section className="bg-[#ffffff] py-10 sm:py-20 lg:py-24">
  <div className="container">
    <SectionTitle
      eyebrow=""
      title="استكشف حلول التهوية لدينا"
      description="حلول متخصصة للمشروعات الصناعية والتجارية."
    />

    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:gap-8">

      {/* INDUSTRIAL */}
      <Link
        href="/products/group/industrial"
        className="group relative isolate flex min-h-[280px] flex-col justify-end overflow-hidden rounded-xl bg-[#061B30] text-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-[460px] sm:rounded-2xl"
      >
        <img
          src="https://i.pinimg.com/736x/c2/97/09/c297096f81c47ced73a2d192a60acedb.jpg"
          alt="أنظمة ومراوح التهوية الصناعية"
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061B30] via-[#061B30]/65 to-[#061B30]/10" />

        <div className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-lg border border-white/20 bg-white/15 backdrop-blur sm:right-5 sm:top-5 sm:size-12 sm:rounded-xl">
          <Factory className="size-4 sm:size-6" />
        </div>

        <div className="p-3 sm:p-9">
          <span className="text-[8px] font-bold uppercase tracking-wider text-red-300 sm:text-xs sm:tracking-[0.2em]">
            Industrial
          </span>

          <h3 className="mt-2 text-sm font-black leading-relaxed sm:mt-3 sm:text-3xl lg:text-4xl">
            التهوية الصناعية
          </h3>

          <p className="mt-2 text-[10px] leading-5 text-blue-100 sm:mt-4 sm:max-w-md sm:text-sm sm:leading-8">
            حلول متخصصة للمصانع والمنشآت الصناعية والمخازن.
          </p>

          <div className="mt-3 flex items-center justify-between gap-1 border-t border-white/20 pt-3 sm:mt-6 sm:pt-5">
            <span className="text-[10px] font-bold sm:text-sm">
              استكشف الحلول
            </span>
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#D9252A] transition group-hover:bg-white group-hover:text-[#0B3C6F] sm:size-10">
              <ArrowLeft className="size-3.5 sm:size-5 transition group-hover:-translate-x-1" />
            </span>
          </div>
        </div>
      </Link>

      {/* COMMERCIAL */}
      <Link
       href="/products/group/commercial"
        className="group relative isolate flex min-h-[280px] flex-col justify-end overflow-hidden rounded-xl bg-[#061B30] text-white shadow-md transition duration-500 hover:-translate-y-1 hover:shadow-xl sm:min-h-[460px] sm:rounded-2xl"
      >
        <img
          src="https://supplyworldco.com/wp-content/uploads/2024/11/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8-%D8%A7%D9%84%D9%88%D8%AD%D8%AF%D8%A7%D8%AA-%D8%A7%D9%84%D8%B1%D8%A6%D9%8A%D8%B3%D9%8A%D8%A9-1024x585.jpg"
          alt="أنظمة التهوية التجارية"
          loading="lazy"
          className="absolute inset-0 -z-20 size-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061B30] via-[#061B30]/65 to-[#061B30]/10" />

        <div className="absolute right-2.5 top-2.5 grid size-8 place-items-center rounded-lg border border-white/20 bg-white/15 backdrop-blur sm:right-5 sm:top-5 sm:size-12 sm:rounded-xl">
          <Building2 className="size-4 sm:size-6" />
        </div>

        <div className="p-3 sm:p-9">
          <span className="text-[8px] font-bold uppercase tracking-wider text-blue-200 sm:text-xs sm:tracking-[0.2em]">
            Commercial
          </span>

          <h3 className="mt-2 text-sm font-black leading-relaxed sm:mt-3 sm:text-3xl lg:text-4xl">
            التهوية التجارية
          </h3>

          <p className="mt-2 text-[10px] leading-5 text-blue-100 sm:mt-4 sm:max-w-md sm:text-sm sm:leading-8">
            حلول متكاملة للمباني والمنشآت التجارية والمطاعم.
          </p>

          <div className="mt-3 flex items-center justify-between gap-1 border-t border-white/20 pt-3 sm:mt-6 sm:pt-5">
            <span className="text-[10px] font-bold sm:text-sm">
              استكشف الحلول
            </span>
            <span className="grid size-7 shrink-0 place-items-center rounded-full bg-[#2F80ED] transition group-hover:bg-white group-hover:text-[#0B3C6F] sm:size-10">
              <ArrowLeft className="size-3.5 sm:size-5 transition group-hover:-translate-x-1" />
            </span>
          </div>
        </div>
      </Link>

    </div>
  </div>
</section>


<section
  dir="rtl"
  className="overflow-hidden border-y border-slate-100 bg-white py-14 sm:py-20"
>
  <div className="container">
    <div className="mb-9 text-center sm:mb-12">
      <span className="text-xs font-bold tracking-wider text-[#2F80ED]">
        OUR PARTNERS
      </span>

      <h2 className="mt-3 text-2xl font-black text-[#0B3C6F] sm:text-4xl">
        شركاؤنا في النجاح
      </h2>

      <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
        نفخر بعلاقات التعاون والشراكة مع الشركات والمؤسسات
        التي نعمل معها لتحقيق أفضل الحلول.
      </p>
    </div>
  </div>

  <div className="flex flex-col gap-1 sm:gap-5">
    <PartnerTrack />
    
  </div>
</section>














    <section
  dir="rtl"
  className="relative isolate min-h-[400px] md:min-h-[600px] flex items-center justify-center overflow-hidden"
>
  {/* Background Image */}
  <div
    className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
    style={{
      backgroundImage:
        "url('https://www.ebmpapst.com/content/dam/ebm-papst/loc/americas/us/local-assets/USA-warehouse1.jpg')",
    }}
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 -z-10 bg-[#102a49]/65" />

  {/* Content */}
  <div className="mx-auto w-full max-w-7xl px-4 py-24 text-center text-white">

    <span className="mb-5 inline-block text-sm font-semibold tracking-wide text-[]">
      UG VENT
    </span>

    <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-relaxed md:text-5xl">
      خبرة متكاملة في حلول
      <span className="text-[#2f80ed]"> التهوية الصناعية</span>
    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/85 md:text-lg">
      نحن في UG VENT نقدم حلولاً متكاملة لأنظمة التهوية وسحب الدخان،
      من خلال منتجات عالية الجودة وخبرات متخصصة لتلبية احتياجات
      المشاريع الصناعية والتجارية وفق أعلى معايير الأداء والكفاءة.
    </p>

    <div className="mt-9">
      <a
        href="/about"
        className="inline-flex items-center justify-center gap-3 rounded-sm bg-[#0b3c6f] px-9 py-2 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-[#102a49]"
      >
       من نحن 
        <span className="text-lg">←</span>
      </a>
    </div>

  </div>
</section>

<section className="bg-white py-16 sm:py-24 lg:py-28">
  <div className="container">

    {/* Section Heading */}
    <div className="mb-12 max-w-3xl sm:mb-16">
      <span className="text-xs font-bold tracking-[0.15em] text-[#2F80ED] sm:text-sm">
        UG VENT — QUALITY & EXPERIENCE
      </span>

      <h2 className="mt-4 text-3xl font-black leading-tight text-[#0B3C6F] sm:text-4xl lg:text-5xl">
        خبرة هندسية تدعم
        <br className="hidden sm:block" />
        <span className="text-[#2F80ED]">جودة حلولنا</span>
      </h2>

      <p className="mt-5 max-w-2xl text-sm leading-8 text-slate-500 sm:text-base sm:leading-9">
        نوفر معدات وأنظمة تهوية للمشروعات الصناعية والتجارية،
        مع الاهتمام بالمواصفات الفنية وجودة المنتجات وملاءمتها
        لمتطلبات التشغيل.
      </p>
    </div>

    {/* Main Content */}
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">

      {/* Image */}
      <div className="relative min-h-[300px] overflow-hidden lg:col-span-7 lg:min-h-[480px]">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85"
          alt="الأعمال الهندسية والمعدات الصناعية"
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />

        <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#061B30]/80 to-transparent p-6 sm:p-9">
          <p className="text-xs font-bold tracking-wider text-blue-200">
            ENGINEERING & QUALITY
          </p>
          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
            حلول تهوية تلبي متطلبات المشاريع
          </h3>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-6 lg:col-span-5">

  <div className="border-t-2 border-[#0B3C6F] pt-4">
    <CalendarCheck className="size-5 text-[#2F80ED]" />
    <p className="mt-3 text-3xl font-black text-[#0B3C6F]">
      12 سنة
    </p>
    <h3 className="mt-2 text-sm font-bold text-[#0B3C6F]">
      خبرة في المجال
    </h3>
    <p className="mt-1 text-xs leading-6 text-slate-500">
      خبرة وفقاً للمعلومات المقدمة من الشركة.
    </p>
  </div>

  <div className="border-t border-slate-200 pt-4">
    <BadgeCheck className="size-5 text-[#2F80ED]" />
    <h3 className="mt-3 text-sm font-bold text-[#0B3C6F]">
      جودة المنتجات
    </h3>
    <p className="mt-2 text-xs leading-6 text-slate-500">
      معدات بمواصفات مناسبة للاستخدام.
    </p>
  </div>

  <div className="border-t border-slate-200 pt-4">
    <Factory className="size-5 text-[#2F80ED]" />
    <h3 className="mt-3 text-sm font-bold text-[#0B3C6F]">
      تطبيقات متنوعة
    </h3>
    <p className="mt-2 text-xs leading-6 text-slate-500">
      حلول للمشروعات الصناعية والتجارية.
    </p>
  </div>

  <div className="border-t border-slate-200 pt-4">
    <Gauge className="size-5 text-[#2F80ED]" />
    <h3 className="mt-3 text-sm font-bold text-[#0B3C6F]">
      مواصفات فنية
    </h3>
    <p className="mt-2 text-xs leading-6 text-slate-500">
      الاهتمام بالأداء واحتياجات التشغيل.
    </p>
  </div>

</div>
    </div>

    {/* Certifications */}
    <div className="mt-12 flex flex-col gap-5 border-y border-slate-200 py-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between sm:py-9">
      <div className="max-w-xl">
        <h3 className="text-lg font-black text-[#0B3C6F] sm:text-xl">
          شهادات واعتمادات الجودة
        </h3>
        <p className="mt-2 text-sm leading-7 text-slate-500">
          يتم عرض الشهادات والاعتمادات المعتمدة بعد مراجعة
          المستندات الرسمية ونطاق تطبيق كل شهادة.
        </p>
      </div>

      <div className="flex shrink-0 items-center gap-3 text-sm font-semibold text-[#0B3C6F]">
        <ShieldCheck className="size-7 text-[#2F80ED]" />
        <span>الجودة والامتثال الفني</span>
      </div>
    </div>

  </div>
</section>

{/* ═══════════════ 5. QUALITY & EXPERIENCE ═══════════════ */}



     
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
