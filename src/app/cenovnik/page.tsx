"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PageHero, SectionHead } from "@/components/ui";
import { IMG, fallbackPricing } from "@/lib/fallback";

type Plan = (typeof fallbackPricing)[number];

export default function PricingPage() {
  const { t, pick } = useI18n();
  const [plans, setPlans] = useState<Plan[]>(fallbackPricing);
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    fetch("/api/pricing")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.length) setPlans(d); })
      .catch(() => {});
  }, []);

  const extras = [
    { mk: "Дневен влез", en: "Day pass", price: "300 ден" },
    { mk: "Персонален тренинг 1x", en: "Personal training 1x", price: "800 ден" },
    { mk: "Персонален тренинг 10x", en: "Personal training 10x", price: "7.000 ден" },
    { mk: "Нутриционистички план", en: "Nutrition plan", price: "2.500 ден" },
    { mk: "Масажа 45 мин", en: "Massage 45 min", price: "1.200 ден" },
    { mk: "Гостински влез", en: "Guest pass", price: "400 ден" },
  ];

  return (
    <div>
      <PageHero title={t("pricing_title")} sub={t("pricing_sub")} image={IMG.gym2} crumb={t("nav_pricing")} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex justify-center">
          <div className="flex items-center gap-1 rounded-full border border-white/15 bg-zinc-900 p-1">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-bold ${!annual ? "bg-orange-500 text-white" : "text-zinc-400"}`}
            >
              {pick("Месечно", "Monthly")}
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`rounded-full px-5 py-2 text-sm font-bold ${annual ? "bg-orange-500 text-white" : "text-zinc-400"}`}
            >
              {pick("Годишно −17%", "Annual −17%")}
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((pl) => {
            const price = annual ? Math.round(pl.priceMkd * 10) : pl.priceMkd;
            return (
              <div
                key={pl.id}
                className={`relative rounded-2xl border p-7 ${
                  pl.popular
                    ? "border-orange-500 bg-gradient-to-b from-orange-500/15 to-zinc-900 shadow-xl shadow-orange-500/20 lg:scale-105"
                    : "border-white/10 bg-zinc-900"
                }`}
              >
                {pl.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-4 py-1 text-xs font-bold uppercase text-white">
                    {t("pricing_popular")}
                  </span>
                )}
                <h3 className="text-lg font-black tracking-wide text-white">{pick(pl.nameMk, pl.nameEn)}</h3>
                <p className="mt-2">
                  <span className="text-5xl font-black text-white">{price.toLocaleString("mk-MK")}</span>
                  <span className="ml-1 text-sm text-zinc-400">
                    ден{pick(annual ? "/ годишно" : pl.periodMk, annual ? "/ yearly" : pl.periodEn)}
                  </span>
                </p>
                {annual && (
                  <p className="mt-1 text-xs font-bold text-emerald-400">
                    {pick("2 месеци гратис!", "2 months free!")}
                  </p>
                )}
                <ul className="mt-5 space-y-2.5 text-sm text-zinc-300">
                  {pick(pl.featuresMk, pl.featuresEn).split("|").map((f) => (
                    <li key={f} className="flex gap-2"><span className="text-emerald-400">✓</span> {f}</li>
                  ))}
                </ul>
                <Link
                  href="/clenstvo"
                  className={`mt-6 block rounded-xl py-3 text-center text-sm font-bold transition ${
                    pl.popular ? "bg-orange-500 text-white hover:bg-orange-400" : "border border-white/15 text-white hover:bg-white/5"
                  }`}
                >
                  {t("pricing_btn")}
                </Link>
              </div>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">ℹ️ {t("pricing_note")}</p>

        <div className="mt-12">
          <SectionHead title={pick("Дополнителни услуги", "Extra services")} />
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {extras.map((e) => (
              <div key={e.en} className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-900 px-5 py-4">
                <span className="text-sm font-semibold text-zinc-200">{pick(e.mk, e.en)}</span>
                <span className="text-sm font-black text-orange-400">{e.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900 p-6 text-sm leading-relaxed text-zinc-400">
          <h4 className="font-bold text-white">{pick("Напомени", "Notes")}</h4>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>{pick("Сите цени се со вклучен ДДВ.", "All prices include VAT.")}</li>
            <li>{pick("Членарината може да се замрзне до 30 дена годишно (со лекарска потврда и подолго).", "Membership can be frozen up to 30 days yearly (longer with a medical note).")}</li>
            <li>{pick("Плаќање: готовина, картичка или фактура за фирми.", "Payment: cash, card or invoice for companies.")}</li>
            <li>{pick("Откажување со 15 дена претходна најава.", "Cancellation with 15 days notice.")}</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
