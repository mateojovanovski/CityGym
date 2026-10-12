"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PageHero, SectionHead, IntensityDots } from "@/components/ui";
import { IMG, fallbackPrograms } from "@/lib/fallback";

type Program = (typeof fallbackPrograms)[number] & { longMk?: string; longEn?: string };

const icons: Record<string, string> = {
  dumbbell: "💪", fire: "🔥", lotus: "🧘", glove: "🥊", star: "🏋️", salad: "🥗",
};

export default function ServicesPage() {
  const { t, pick } = useI18n();
  const [programs, setPrograms] = useState<Program[]>(fallbackPrograms);
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/programs")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.length) setPrograms(d); })
      .catch(() => {});
  }, []);

  const cats = [
    { id: "all", mk: "Сите", en: "All" },
    { id: "fitness", mk: "Фитнес", en: "Fitness" },
    { id: "crossfit", mk: "CrossFit", en: "CrossFit" },
    { id: "mind", mk: "Ум и тело", en: "Mind & body" },
    { id: "combat", mk: "Боречки", en: "Combat" },
    { id: "personal", mk: "Персонално", en: "Personal" },
    { id: "nutrition", mk: "Исхрана", en: "Nutrition" },
  ];

  const list = filter === "all" ? programs : programs.filter((p) => p.category === filter);

  return (
    <div>
      <PageHero
        title={t("services_title")}
        sub={t("services_sub")}
        image={IMG.barbell}
        crumb={t("nav_services")}
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                filter === c.id
                  ? "bg-orange-500 text-white"
                  : "border border-white/15 text-zinc-300 hover:bg-white/5"
              }`}
            >
              {pick(c.mk, c.en)}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {list.map((p) => {
            const open = openId === p.id;
            return (
              <article
                key={p.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40"
              >
                <div className="relative h-56">
                  <img src={p.imageUrl} alt={pick(p.titleMk, p.titleEn)} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                  <span className="absolute left-4 top-4 grid h-12 w-12 place-items-center rounded-xl bg-zinc-950/80 text-2xl backdrop-blur">
                    {icons[p.icon ?? "dumbbell"] ?? "💪"}
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-black text-white">
                    {p.priceMonthly} ден/{pick("мес", "mo")}
                  </span>
                  <h2 className="absolute bottom-3 left-5 right-5 text-2xl font-black text-white">
                    {pick(p.titleMk, p.titleEn)}
                  </h2>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-zinc-300">{pick(p.descMk, p.descEn)}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-zinc-400">
                    <span>⏱ {t("duration")}: <b className="text-white">{p.durationMin} {t("min")}</b></span>
                    <span className="flex items-center gap-2">{t("intensity")}: <IntensityDots level={p.intensity ?? 3} /></span>
                  </div>
                  {(p.longMk || p.longEn) && open && (
                    <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-zinc-300">
                      {pick(p.longMk ?? "", p.longEn ?? "")}
                    </p>
                  )}
                  <div className="mt-4 flex gap-2">
                    {(p.longMk || p.longEn) && (
                      <button
                        onClick={() => setOpenId(open ? null : p.id)}
                        className="flex-1 rounded-lg border border-white/15 py-2.5 text-sm font-bold text-white hover:bg-white/5"
                      >
                        {open ? "▲ " : "▼ "}
                        {pick("Детали", "Details")}
                      </button>
                    )}
                    <Link
                      href="/clenstvo"
                      className="flex-1 rounded-lg bg-orange-500 py-2.5 text-center text-sm font-bold text-white hover:bg-orange-400"
                    >
                      {t("nav_join")}
                    </Link>
                    <Link
                      href="/raspored"
                      className="flex-1 rounded-lg border border-orange-500/40 bg-orange-500/10 py-2.5 text-center text-sm font-bold text-orange-300 hover:bg-orange-500/20"
                    >
                      {t("nav_schedule")}
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-black text-white">
              {pick("Не знаеш која програма е за тебе?", "Not sure which program fits you?")}
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              {pick(
                "Закажи бесплатна консултација — ќе направиме анализа на тело, ќе поразговараме за целите и ќе ти препорачаме идеален план.",
                "Book a free consultation — we'll do a body analysis, discuss your goals and recommend the ideal plan."
              )}
            </p>
          </div>
          <div className="flex items-center gap-3 md:justify-end">
            <Link href="/clenstvo" className="rounded-xl bg-orange-500 px-6 py-3 text-sm font-bold text-white hover:bg-orange-400">
              {t("hero_cta1")}
            </Link>
            <Link href="/kontakt" className="rounded-xl border border-white/20 px-6 py-3 text-sm font-bold text-white hover:bg-white/5">
              {t("nav_contact")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
