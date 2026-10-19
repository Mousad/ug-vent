"use client";

import { useState } from "react";
import { Check, Mail, MapPin, Phone, Send, Clock, ExternalLink } from "lucide-react";
import { Shell, SectionTitle } from "@/components/site";

const address =
  "شارع مساكن زهراء مدينة نصر، مساكن الضباط، القاهرة، مصر";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(
    "شارع مساكن زهراء مدينة نصر مساكن الضباط، القاهرة، مصر"
  );

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <Shell>
      <section className="section-grid py-16 md:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="تواصل معنا"
            title="لنبدأ مشروعك"
            description="أرسل تفاصيل مشروعك وسيقوم فريقنا الهندسي بالتواصل معك."
          />

          <div className="grid gap-8 lg:grid-cols-[1.2fr_.8fr]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="soft-card p-6 md:p-8"
            >
              {sent ? (
                <div className="grid min-h-80 place-items-center text-center">
                  <div>
                    <div className="mx-auto grid size-16 place-items-center rounded-full bg-green-100 text-green-600">
                      <Check className="size-8" />
                    </div>
                    <h2 className="mt-5 text-2xl font-black text-[#0B3C6F]">
                      تم استلام طلبك
                    </h2>
                    <p className="mt-2 text-slate-600">
                      شكرًا لتواصلك معنا.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-5 font-bold text-[#2F80ED]"
                    >
                      إرسال طلب آخر
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="mb-6 text-xl font-black text-[#0B3C6F]">
                    اطلب عرض سعر
                  </h2>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="text-sm font-bold">
                      الاسم
                      <input
                        name="name"
                        required
                        autoComplete="name"
                        className="input mt-2"
                        placeholder="الاسم بالكامل"
                      />
                    </label>

                    <label className="text-sm font-bold">
                      الشركة
                      <input
                        name="company"
                        autoComplete="organization"
                        className="input mt-2"
                        placeholder="اسم الشركة"
                      />
                    </label>

                    <label className="text-sm font-bold">
                      الهاتف
                      <input
                        name="phone"
                        required
                        type="tel"
                        autoComplete="tel"
                        className="input mt-2"
                        placeholder="رقم الهاتف"
                      />
                    </label>

                    <label className="text-sm font-bold">
                      البريد الإلكتروني
                      <input
                        name="email"
                        required
                        type="email"
                        autoComplete="email"
                        className="input mt-2"
                        placeholder="name@example.com"
                      />
                    </label>

                    <label className="text-sm font-bold sm:col-span-2">
                      نوع المشروع
                      <input
                        name="project"
                        className="input mt-2"
                        placeholder="مصنع، جراج، مول، مطبخ مركزي..."
                      />
                    </label>

                    <label className="text-sm font-bold sm:col-span-2">
                      المنتج المطلوب
                      <input
                        name="product"
                        className="input mt-2"
                        placeholder="اسم المنتج أو الموديل"
                      />
                    </label>

                    <label className="text-sm font-bold sm:col-span-2">
                      تفاصيل المشروع
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="input mt-2"
                        placeholder="اكتب تفاصيل طلبك..."
                      />
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary mt-6 flex w-full items-center justify-center gap-2 sm:w-auto"
                  >
                    إرسال الطلب
                    <Send className="size-4" />
                  </button>

                  <p className="mt-3 text-xs leading-6 text-slate-400">
                    ملاحظة: النموذج حاليًا يعرض رسالة تأكيد فقط، ولا يرسل
                    البيانات إلى البريد الإلكتروني أو قاعدة بيانات حتى يتم
                    ربطه بخدمة إرسال.
                  </p>
                </>
              )}
            </form>

            <div className="flex flex-col gap-5">
              <div className="soft-card p-6 md:p-7">
                <span className="mb-4 grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]">
                  <Phone className="size-6" />
                </span>

                <h2 className="text-xl font-black text-[#0B3C6F]">
                  بيانات التواصل
                </h2>

                <div className="mt-6 flex flex-col gap-5">
                  <a
                    href="tel:+201008505000"
                    dir="ltr"
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-4 text-sm transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <span className="flex items-center gap-3" dir="rtl">
                      <Phone className="size-5 shrink-0 text-[#2F80ED]" />
                      <span className="font-bold text-slate-700">
                        010 08505000
                      </span>
                    </span>
                    <ExternalLink className="size-4 text-slate-400" />
                  </a>

                  <a
                    href="tel:+201008404000"
                    dir="ltr"
                    className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 p-4 text-sm transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <span className="flex items-center gap-3" dir="rtl">
                      <Phone className="size-5 shrink-0 text-[#2F80ED]" />
                      <span className="font-bold text-slate-700">
                        +20 10 08404000
                      </span>
                    </span>
                    <ExternalLink className="size-4 text-slate-400" />
                  </a>

                  <a
                    href="mailto:ug_hvac@yahoo.com"
                    className="flex items-center gap-3 rounded-xl border border-slate-100 p-4 text-sm transition hover:border-blue-200 hover:bg-blue-50/50"
                  >
                    <Mail className="size-5 shrink-0 text-[#2F80ED]" />
                    <span className="break-all font-medium text-slate-700">
                      ug_hvac@yahoo.com
                    </span>
                  </a>
                </div>
              </div>

              <div className="soft-card p-6 md:p-7">
                <span className="mb-4 grid size-12 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]">
                  <MapPin className="size-6" />
                </span>

                <h2 className="text-xl font-black text-[#0B3C6F]">
                  موقع الشركة
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600">
                  {address}
                </p>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0B3C6F] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#2F80ED]"
                >
                  <MapPin className="size-4" />
                  افتح الموقع على Google Maps
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
  <iframe
    title="موقع شركة UG VENT"
    src="https://maps.google.com/maps?q=Zahraa%20Nasr%20City%20Officers%20Housing%20Cairo%20Egypt&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="380"
    style={{ border: 0 }}
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    className="block w-full"
  />

  <a
    href="https://www.google.com/maps/search/?api=1&query=شارع+مساكن+زهراء+مدينة+نصر+مساكن+الضباط+القاهرة+مصر"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between gap-3 px-5 py-4 text-sm font-bold text-[#0B3C6F] transition hover:bg-blue-50"
  >
    <span>شارع مساكن زهراء، مساكن الضباط، مدينة نصر، القاهرة</span>
    <ExternalLink className="size-4 shrink-0 text-[#2F80ED]" />
  </a>
</div>

              <div className="soft-card flex items-start gap-4 p-6">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2F80ED]">
                  <Clock className="size-5" />
                </span>
                <div>
                  <h3 className="font-black text-[#0B3C6F]">ساعات العمل</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-500">
                    السبت – الخميس
                    <br />
                    9:00 صباحًا – 5:00 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}