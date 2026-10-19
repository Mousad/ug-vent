import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  Factory,
  Fan,
  ShieldCheck,
  Target,
  Eye,
  Users,
  Settings,
  Wrench,
  Wind,
  Building2,

  ClipboardCheck,
} from "lucide-react";

import AboutSectors from "@/components/about-sectors";
import { Shell } from "@/components/site";



export const metadata = {
  title: "من نحن | UG VENT",
  description:
    "تعرف على UG VENT، المتخصصة في حلول التهوية الصناعية وأنظمة شفط الدخان والاستشارات الهندسية.",
};

const values = [
  {
    icon: ShieldCheck,
    title: "الجودة والسلامة",
    description:
      "نهتم بجودة الأنظمة والمكونات ومراعاة متطلبات السلامة والمعايير الفنية المناسبة لكل مشروع.",
  },
  {
    icon: Target,
    title: "الدقة الهندسية",
    description:
      "نركز على فهم احتياجات المشروع واختيار الحلول المناسبة للتدفق والضغط وظروف التشغيل.",
  },
  {
    icon: Users,
    title: "الشراكة مع العملاء",
    description:
      "نعمل على بناء علاقات مهنية طويلة الأمد من خلال التواصل الواضح وفهم متطلبات كل عميل.",
  },
  {
    icon: Settings,
    title: "حلول عملية",
    description:
      "نقدم حلول تهوية مصممة لتناسب طبيعة المنشآت وتدعم كفاءة التشغيل وسهولة الصيانة.",
  },
];

const services = [
  {
    icon: Wind,
    title: "أنظمة التهوية الصناعية",
    description:
      "حلول لتجديد الهواء وتحسين حركة الهواء في المصانع والمنشآت التجارية والصناعية.",
  },
  {
    icon: Factory,
    title: "أنظمة شفط الدخان",
    description:
      "حلول هندسية لإدارة الدخان في المنشآت وفق متطلبات المشروع ومعايير السلامة ذات الصلة.",
  },
  {
    icon: ClipboardCheck,
    title: "الاستشارات الهندسية",
    description:
      "المساعدة في تحديد احتياجات التهوية ومراجعة متطلبات التشغيل واختيار النظام المناسب.",
  },
  {
    icon: Wrench,
    title: "الصيانة والدعم الفني",
    description:
      "دعم فني وخدمات صيانة للمساعدة في الحفاظ على أداء الأنظمة واستمرارية التشغيل.",
  },
];

export default function AboutPage() {
  return (
        <Shell>

     <>
     
      
    <main className="overflow-hidden bg-white text-slate-800">
       
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#061D35] text-white">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://i.pinimg.com/1200x/0a/48/98/0a48983b7cfce6a2eb3edfef517c7f0e.jpg"
            alt=""
            className="size-full object-cover opacity-35"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#061D35]/95 via-[#0B3C6F]/85 to-[#0B3C6F]/60" />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="container grid min-h-[440px] items-center gap-10 py-16 md:min-h-[500px] md:py-24 lg:grid-cols-[1.3fr_.7fr]">
          <div>
            

            
<h1 className="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
  مع <span className="text-[#6FB1FF]">UG VENT</span>
  <span className="mt-2 block">
    هواء أذكى، وأمان أعلى لمنشآتك
  </span>
</h1>


            <p className="mt-6 max-w-2xl text-base leading-8 text-blue-50/90 md:text-lg">
              نعمل في مجال أنظمة التهوية الصناعية وشفط الدخان، ونساعد عملاءنا
              على الوصول إلى حلول هندسية تناسب احتياجات مشاريعهم ومتطلبات
              التشغيل والسلامة.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2F80ED] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C6F]"
              >
                تواصل مع فريقنا
                <ArrowLeft className="size-4" />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#0B3C6F]"
              >
                استكشف منتجاتنا
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md">
              <Fan className="size-12 text-[#6FB1FF]" strokeWidth={1.3} />

              <p className="mt-6 text-sm font-bold tracking-widest text-blue-200">
                OUR APPROACH
              </p>

              <h2 className="mt-3 text-2xl font-black leading-relaxed">
                فهم الاحتياج، اختيار الحل، ودعم الأداء.
              </h2>

              <div className="mt-6 h-1 w-20 rounded-full bg-[#2F80ED]" />
            </div>
          </div>
        </div>
      </section>

      {/* نبذة عن الشركة */}
      <section className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 -z-10 size-2/3 rounded-2xl bg-blue-50" />

          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85"
            alt="عمل هندسي داخل بيئة صناعية"
            className="aspect-[5/4] w-full rounded-2xl object-cover shadow-lg"
            loading="lazy"
          />

          <div className="absolute bottom-5 right-5 rounded-xl border border-white/20 bg-[#0B3C6F]/95 p-4 text-white shadow-lg backdrop-blur">
            <p className="text-sm font-bold text-blue-200">
              UG VENT
            </p>
            <p className="mt-1 font-black">
              حلول تهوية متكاملة
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-black tracking-wider text-[#2F80ED]">
            من نحن
          </span>

          <h2 className="mt-3 text-3xl font-black leading-tight text-[#0B3C6F] md:text-4xl">
            شريكك في حلول التهوية وإدارة الدخان
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            في UG VENT، نركز على تقديم حلول التهوية الصناعية وشفط الدخان التي
            تراعي طبيعة كل منشأة ومتطلبات الاستخدام. نؤمن بأن الحل الهندسي
            الجيد يبدأ بفهم ظروف المشروع، ثم اختيار المعدات المناسبة ومراعاة
            الأداء والسلامة وسهولة الصيانة.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            نسعى إلى دعم عملائنا خلال مراحل المشروع المختلفة، بدءًا من فهم
            الاحتياجات الفنية، مرورًا باختيار الحلول والمنتجات، وصولًا إلى
            الدعم الفني والصيانة وفق نطاق العمل المتفق عليه.
          </p>

          <ul className="mt-7 space-y-3">
            {[
              "حلول تراعي متطلبات كل مشروع",
              "اهتمام بالمواصفات الفنية والسلامة",
              "دعم في اختيار المعدات المناسبة",
              "تواصل واضح خلال مراحل العمل",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#2F80ED]" />
                <span className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* الرؤية والرسالة */}
      <section className="bg-[#ffffff]">
        <div className="container py-16 md:py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-black text-[#2F80ED]">
              رؤيتنا ورسالتنا
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#0B3C6F] md:text-4xl">
              هدف واضح في كل مشروع
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              نعمل وفق نهج يوازن بين الاحتياج الفني وجودة الحل وكفاءة التشغيل.
            </p>
          </div>

          
<div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-6">
  {/* رؤيتنا */}
  <article className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6 md:p-9">
    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2F80ED] sm:size-14">
      <Eye className="size-6 sm:size-7" />
    </div>

    <h3 className="mt-4 text-lg font-black text-[#0B3C6F] sm:mt-6 sm:text-2xl">
      رؤيتنا
    </h3>

    <p className="mt-3 text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-8">
      أن نكون شريكًا موثوقًا في حلول التهوية الصناعية وإدارة الدخان،
      من خلال تقديم خيارات هندسية مدروسة تواكب احتياجات المنشآت
      وتدعم بيئات تشغيل أكثر كفاءة وأمانًا.
    </p>
  </article>

  {/* رسالتنا */}
  <article className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-6 md:p-9">
    <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2F80ED] sm:size-14">
      <Target className="size-6 sm:size-7" />
    </div>

    <h3 className="mt-4 text-lg font-black text-[#0B3C6F] sm:mt-6 sm:text-2xl">
      رسالتنا
    </h3>

    <p className="mt-3 text-xs leading-6 text-slate-600 sm:mt-4 sm:text-sm sm:leading-8">
      مساعدة عملائنا في اختيار وتنفيذ حلول تهوية مناسبة لمتطلبات
      مشاريعهم، مع الاهتمام بالمواصفات الفنية وجودة المنتجات
      والتواصل الفعّال والدعم الذي يحتاجونه.
    </p>
  </article>
</div>

        </div>
      </section>

      {/* قيمنا */}
     
<section className="container py-16  bg-[#ffffff] md:py-24">
  <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
    <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-black text-[#2F80ED]">
      
      ما يميز عملنا
    </span>

    <h2 className="mt-4 text-3xl font-black text-[#0B3C6F] md:text-4xl">
      القيم التي توجهنا
    </h2>

    <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
      مبادئ راسخة تقود أعمالنا وتوجّه قراراتنا نحو حلول هندسية موثوقة
      تحقق الجودة والكفاءة في كل مشروع.
    </p>
  </div>

  <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
    {values.map(({ icon: Icon, title, description }, index) => (
      <article
        key={title}
        className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5 sm:px-5 sm:py-8 md:rounded-3xl md:px-6"
      >
        

        {/* الأيقونة */}
        <div className="relative grid size-12 shrink-0 place-items-center rounded-2xl bg-blue-50 text-[#2F80ED] transition-all duration-300 group-hover:bg-[#0B3C6F] group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-900/15 sm:size-14">
          <Icon className="size-6 sm:size-7" strokeWidth={1.8} />
        </div>

        {/* خط زخرفي */}
        <div className="mt-4 h-1 w-8 rounded-full bg-blue-100 transition-all duration-300 group-hover:w-14 group-hover:bg-[#2F80ED] sm:mt-5" />

        <h3 className="mt-4 text-sm font-black leading-6 text-[#0B3C6F] sm:text-lg sm:leading-7">
          {title}
        </h3>

        <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
          {description}
        </p>

        {/* لمسة لونية أسفل البطاقة */}
        <div className="absolute inset-x-0 bottom-0 h-[3px] origin-center scale-x-0 bg-[#2F80ED] transition-transform duration-300 group-hover:scale-x-100" />
      </article>
    ))}
  </div>
</section>


    
{/* خدماتنا */}
<section className="relative overflow-hidden bg-[#ffffff] text-[#0B3C6F]">
  <div className="pointer-events-none absolute -left-24 top-20 size-72 rounded-full bg-blue-100/40 blur-3xl" />
  <div className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-blue-100/50 blur-3xl" />

  <div className="container relative py-16 md:py-24">
    {/* عنوان القسم */}
    <div className="mb-10 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-black text-[#2F80ED]">
          <span className="size-1.5 rounded-full bg-[#2F80ED]" />
          مجالات عملنا
        </span>

        <h2 className="mt-5 text-3xl font-black leading-tight text-[#0B3C6F] md:text-4xl lg:text-5xl">
          حلول تبدأ من احتياجك
          <span className="mt-2 block text-[#2F80ED]">
            ونتائج تُصمم لمشروعك
          </span>
        </h2>
      </div>

      <p className="max-w-xl text-sm leading-8 text-slate-600 md:text-base">
        من الدراسة الهندسية إلى التنفيذ والدعم الفني، نقدم خدمات تساعدك
        على اختيار حلول التهوية المناسبة، وتحقيق كفاءة تشغيلية أعلى
        وبيئة أكثر أمانًا لمنشأتك.
      </p>
    </div>

    {/* بطاقات الخدمات */}
    <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
      {services.map(({ icon: Icon, title, description }, index) => (
        <article
          key={title}
          className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#DFE9F3] bg-white p-4 shadow-[0_5px_20px_rgba(11,60,111,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_16px_40px_rgba(11,60,111,0.09)] sm:rounded-3xl sm:p-6 md:p-7"
        >
          {/* رقم الخدمة */}
          <div className="flex items-center justify-between">
            <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-[#2F80ED] transition-colors duration-300 group-hover:bg-[#0B3C6F] group-hover:text-white sm:size-14 sm:rounded-2xl">
              <Icon className="size-5 sm:size-7" strokeWidth={1.7} />
            </span>

            <span className="text-2xl font-black tracking-tight text-[#E5EDF6] transition-colors group-hover:text-blue-200 sm:text-3xl">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* تفاصيل الخدمة */}
          <h3 className="mt-5 text-sm font-black leading-6 text-[#0B3C6F] sm:mt-7 sm:text-lg sm:leading-7">
            {title}
          </h3>

          <p className="mt-3 text-xs leading-6 text-slate-500 sm:text-sm sm:leading-7">
            {description}
          </p>

          {/* مؤشر بصري */}
          <div className="mt-auto pt-5 sm:pt-7">
            <div className="h-[3px] w-8 rounded-full bg-[#DCEBFA] transition-all duration-300 group-hover:w-14 group-hover:bg-[#2F80ED]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 h-[3px] origin-right scale-x-0 bg-[#2F80ED] transition-transform duration-300 group-hover:scale-x-100" />
        </article>
      ))}
    </div>

    {/* رابط المنتجات */}
    <div className="mt-9 flex flex-col gap-4 rounded-2xl border border-blue-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
      <div>
        <h3 className="text-base font-black text-[#0B3C6F] sm:text-lg">
          تبحث عن الحل المناسب لمشروعك؟
        </h3>
        <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
          تعرّف على أنظمة ومنتجات UG VENT واكتشف الخيارات المتاحة.
        </p>
      </div>

      <Link
        href="/products"
        className="inline-flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-[#0B3C6F] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#2F80ED] sm:w-auto"
      >
        تعرف على منتجاتنا
        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
      </Link>
    </div>
  </div>
</section>

<AboutSectors />


  

      {/* CTA */}
     <section className="section-grid  bg-[#ffffff] overflow-hidden">
  <div className="container py-10 md:py-14">
    <div className="grid items-center gap-8 overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 shadow-sm sm:p-8 md:grid-cols-2 md:gap-10 md:p-10">

      {/* الصورة */}
      <div className="relative min-h-[200px] overflow-hidden rounded-2xl sm:min-h-[320px]">
        <img
          src="https://i.pinimg.com/1200x/1f/a4/30/1fa4302ed1980bfd50cd401ddff13e12.jpg"
          alt="مشروع هندسي لأنظمة التهوية الصناعية"
          loading="lazy"
          className="absolute inset-0 size-full object-cover transition-transform duration-700 hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#0B3C6F]/70 via-transparent to-transparent" />

        <div className="absolute bottom-5 right-5 left-5">
        

          <p className="mt-3 text-lg font-black leading-8 text-white sm:text-xl">
            حلول هندسية تبدأ من احتياجات مشروعك
          </p>
        </div>
      </div>

      {/* النص وزر التواصل */}
      <div className="text-center md:text-right">
        

        <h2 className="mt-5 text-2xl font-black leading-relaxed text-[#0B3C6F] md:text-3xl lg:text-4xl">
          لديك مشروع يحتاج إلى حل هندسي؟
        </h2>

        <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
          تواصل معنا لمناقشة متطلبات مشروعك، ودع فريقنا يساعدك في اختيار
          حلول التهوية الصناعية وطرد الدخان المناسبة لطبيعة منشأتك.
        </p>

        <div className="mt-6 flex justify-center md:justify-start">
          <Link href="/contact" className="btn-primary">
            تواصل معنا
            <ArrowLeft className="size-4" />
          </Link>
        </div>
      </div>

    </div>
  </div>
</section>
      
    </main>
     
    </>
     </Shell>
  );
}
