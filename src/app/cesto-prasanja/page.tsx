"use client";

import { useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function FaqPage() {
  const { t, pick } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      qmk: "Дали сум почетник — можам ли да тренирам кај вас?",
      qen: "I'm a beginner — can I train with you?",
      amk: "Апсолутно! Околу 60% од нашите членови почнале како целосни почетници. Секој нов член добива бесплатна фитнес проценка и воведен план, а тренерите на сала се секогаш достапни за помош.",
      aen: "Absolutely! About 60% of our members started as complete beginners. Every new member gets a free fitness assessment and an intro plan, and floor coaches are always available to help.",
    },
    {
      qmk: "Кое е работното време?",
      qen: "What are the working hours?",
      amk: "Пон–Пет 06:00–23:00, Сабота 08:00–20:00, Недела 09:00–15:00. Рецепцијата работи секој ден 08–22ч. За членови со ЕЛИТА пакет има 24/7 пристап со картичка.",
      aen: "Mon–Fri 06:00–23:00, Saturday 08:00–20:00, Sunday 09:00–15:00. Reception works daily 08–22h. ELITE members get 24/7 card access.",
    },
    {
      qmk: "Што ми треба за прв тренинг?",
      qen: "What do I need for my first training?",
      amk: "Спортска опрема, чисти патики за внатре, пешкир и шише вода. Се друго (проценка, план, туш, сауна, сеф) е обезбедено од нас.",
      aen: "Sports clothes, clean indoor sneakers, a towel and a water bottle. Everything else (assessment, plan, shower, sauna, locker) is provided by us.",
    },
    {
      qmk: "Дали можам да ја замрзнам членарина?",
      qen: "Can I freeze my membership?",
      amk: "Да — до 30 дена годишно бесплатно (одмор, патување), а со лекарска потврда и подолго. Замрзнувањето се најавува на рецепција или на info@citygym.mk.",
      aen: "Yes — up to 30 days per year free (vacation, travel), longer with a medical note. Notify the reception or info@citygym.mk.",
    },
    {
      qmk: "Како се резервира групен тренинг?",
      qen: "How do I book a group class?",
      amk: "Преку страницата Распоред на сајтот, преку мобилната апликација или на рецепција. Откажување најдоцна 3 часа пред почеток.",
      aen: "Via the Schedule page on the website, the mobile app or at the reception. Cancel at least 3 hours before start.",
    },
    {
      qmk: "Дали има попусти?",
      qen: "Are there discounts?",
      amk: "Студенти, ученици и пензионери −15%, семеен пакет (2+ члена) −15%, а годишната членарина носи 2 месеци гратис. Фирми со 10+ вработени добиваат корпоративна понуда.",
      aen: "Students and pensioners −15%, family package (2+ members) −15%, annual membership brings 2 months free. Companies with 10+ employees get a corporate offer.",
    },
    {
      qmk: "Дали има шкафчиња и тушеви?",
      qen: "Are there lockers and showers?",
      amk: "Да — модерни соблекувални со дневни сефови (бесплатно), тушеви со топла вода, фенови, финска сауна и парна бања.",
      aen: "Yes — modern locker rooms with free daily lockers, hot showers, hair dryers, Finnish sauna and steam bath.",
    },
    {
      qmk: "Дали работите со деца?",
      qen: "Do you work with kids?",
      amk: "Да — имаме детски групи за бокс (8–14 год.) и пливање преку партнер, како и тинејџерски фитнес со тренер (14–17 год. со согласност од родител).",
      aen: "Yes — kids boxing groups (8–14 y.) and teen fitness with a coach (14–17 y. with parental consent).",
    },
  ];

  return (
    <div>
      <PageHero title={t("faq_title")} image={IMG.barbell} crumb="FAQ" />

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={`overflow-hidden rounded-2xl border transition ${isOpen ? "border-orange-500/40 bg-zinc-900" : "border-white/10 bg-zinc-900/60"}`}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-white">{pick(f.qmk, f.qen)}</span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-lg transition ${isOpen ? "bg-orange-500 text-white" : "bg-white/5 text-zinc-400"}`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-zinc-300">
                    {pick(f.amk, f.aen)}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center">
          <p className="text-sm text-zinc-300">
            {pick("Не го најде одговорот? Пиши ни — одговараме истиот ден.", "Didn't find the answer? Write to us — we reply the same day.")}
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link href="/kontakt" className="rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-orange-400">
              {t("nav_contact")}
            </Link>
            <Link href="/clenstvo" className="rounded-xl border border-white/20 px-6 py-2.5 text-sm font-bold text-white hover:bg-white/5">
              {t("nav_join")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
