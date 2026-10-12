"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { SectionHead, Stars, BmiCalculator, IntensityDots } from "@/components/ui";
import { IMG, fallbackPrograms, fallbackTrainers, fallbackPricing, fallbackTestimonials } from "@/lib/fallback";

type Program = (typeof fallbackPrograms)[number];
type Trainer = (typeof fallbackTrainers)[number];
type Plan = (typeof fallbackPricing)[number];
type Testimonial = (typeof fallbackTestimonials)[number];
type Post = {
  id: number; slug: string; titleMk: string; titleEn: string;
  excerptMk: string; excerptEn: string; imageUrl: string;
  categoryMk: string | null; categoryEn: string | null;
  publishedAt: string | null; readingMin: number | null;
};

const programIcons: Record<string, string> = {
  dumbbell: "💪", fire: "🔥", lotus: "🧘", glove: "🥊", star: "🏋️", salad: "🥗",
};

export default function HomePage() {
  const { t, pick } = useI18n();
  const [programs, setPrograms] = useState<Program[]>(fallbackPrograms);
  const [trainers, setTrainers] = useState<Trainer[]>(fallbackTrainers);
  const [plans, setPlans] = useState<Plan[]>(fallbackPricing);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("/api/programs").then((r) => r.ok ? r.json() : null).then((d) => { if (d?.length) setPrograms(d); }).catch(() => {});
    fetch("/api/trainers").then((r) => r.ok ? r.json() : null).then((d) => { if (d?.length) setTrainers(d.slice(0, 4)); }).catch(() => {});
    fetch("/api/pricing").then((r) => r.ok ? r.json() : null).then((d) => { if (d?.length) setPlans(d); }).catch(() => {});
    fetch("/api/testimonials").then((r) => r.ok ? r.json() : null).then((d) => { if (d?.length) setTestimonials(d.slice(0, 3)); }).catch(() => {});
    fetch("/api/blog").then((r) => r.ok ? r.json() : null).then((d) => { if (d?.length) setPosts(d.slice(0, 3)); }).catch(() => {});
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-zinc-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-36">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-orange-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-orange-400" />
              {t("hero_badge")}
            </span>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              {t("hero_title_1")}{" "}
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                {t("hero_title_2")}
              </span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-300">{t("hero_sub")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/clenstvo"
                className="rounded-xl bg-orange-500 px-7 py-3.5 text-base font-bold text-white shadow-xl shadow-orange-500/30 transition hover:bg-orange-400 hover:shadow-orange-400/40"
              >
                {t("hero_cta1")} →
              </Link>
              <Link
                href="/cenovnik"
                className="rounded-xl border border-white/20 bg-white/5 px-7 py-3.5 text-base font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                {t("hero_cta2")}
              </Link>
            </div>
            <p className="mt-4 text-sm text-zinc-400">🎁 {t("hero_trial")}</p>
          </div>
        </div>
        {/* STATS */}
        <div className="relative border-t border-white/10 bg-zinc-950/80 backdrop-blur">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 px-4 sm:px-6 lg:grid-cols-4">
            {[
              { n: "2000+", l: t("stats_members") },
              { n: "15+", l: t("stats_trainers") },
              { n: "1200", l: t("stats_area") },
              { n: "14", l: t("stats_years") },
            ].map((s) => (
              <div key={s.l} className="px-4 py-6 text-center">
                <p className="text-3xl font-black text-orange-500 sm:text-4xl">{s.n}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-400">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHead title={t("services_title")} sub={t("services_sub")} />
          <Link href="/uslugi" className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/5">
            {t("services_all")} →
          </Link>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.slice(0, 6).map((p) => (
            <Link
              key={p.id}
              href="/uslugi"
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={p.imageUrl} alt={pick(p.titleMk, p.titleEn)} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <span className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-zinc-950/80 text-2xl backdrop-blur">
                  {programIcons[p.icon ?? "dumbbell"] ?? "💪"}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-extrabold text-white group-hover:text-orange-400">
                  {pick(p.titleMk, p.titleEn)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-zinc-400">{pick(p.descMk, p.descEn)}</p>
                <div className="mt-4 flex items-center justify-between">
                  <IntensityDots level={p.intensity ?? 3} />
                  <span className="text-sm font-bold text-orange-400">
                    {p.priceMonthly} ден/{pick("мес", "mo")}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="border-y border-white/10 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <SectionHead center title={t("features_title")} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { e: "🏋️", mk: "Врвна опрема", en: "Top equipment", dmk: "Technogym и Hammer Strength справи, реновирани 2024.", den: "Technogym & Hammer Strength machines, renovated 2024." },
              { e: "👨‍🏫", mk: "Експертски тренери", en: "Expert coaches", dmk: "15+ сертифицирани тренери со меѓународни лиценци.", den: "15+ certified coaches with international licenses." },
              { e: "🧖", mk: "Спа и сауна", en: "Spa & sauna", dmk: "Финска сауна, парна бања и зона за релаксација.", den: "Finnish sauna, steam bath and relaxation zone." },
              { e: "📱", mk: "Смарт апликација", en: "Smart app", dmk: "Резервации, следење прогрес и планови во џеб.", den: "Bookings, progress tracking and plans in your pocket." },
            ].map((f) => (
              <div key={f.en} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center transition hover:border-orange-500/40">
                <span className="text-4xl">{f.e}</span>
                <h3 className="mt-3 font-extrabold text-white">{pick(f.mk, f.en)}</h3>
                <p className="mt-2 text-sm text-zinc-400">{pick(f.dmk, f.den)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <SectionHead center title={t("pricing_title")} sub={t("pricing_sub")} />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {plans.map((pl) => (
            <div
              key={pl.id}
              className={`relative rounded-2xl border p-7 ${
                pl.popular
                  ? "border-orange-500 bg-gradient-to-b from-orange-500/15 to-zinc-900 shadow-xl shadow-orange-500/20"
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
                <span className="text-4xl font-black text-white">{pl.priceMkd}</span>
                <span className="ml-1 text-sm text-zinc-400">ден{pick(pl.periodMk, pl.periodEn)}</span>
              </p>
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
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-zinc-500">ℹ️ {t("pricing_note")}</p>
      </section>

      {/* TRAINERS */}
      <section className="border-y border-white/10 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHead title={t("trainers_title")} sub={t("trainers_sub")} />
            <Link href="/tim" className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/5">
              {t("trainers_all")} →
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((tr) => (
              <div key={tr.id} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40">
                <div className="relative h-64">
                  <img src={tr.imageUrl} alt={tr.name} loading="lazy" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="font-extrabold text-white">{tr.name}</h3>
                    <p className="text-xs font-semibold text-orange-400">{pick(tr.roleMk, tr.roleEn)}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4">
                  <Stars rating={tr.rating ?? 5} />
                  <span className="text-xs text-zinc-400">{tr.experienceYears} {t("trainers_exp")}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BMI + TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHead title={t("testimonials_title")} />
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((tm) => (
                <figure key={tm.id} className="flex flex-col rounded-2xl border border-white/10 bg-zinc-900 p-5">
                  <Stars rating={tm.rating ?? 5} />
                  <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-zinc-300">
                    “{pick(tm.textMk, tm.textEn)}”
                  </blockquote>
                  <figcaption className="mt-4 border-t border-white/10 pt-3">
                    <p className="text-sm font-bold text-white">{tm.name}</p>
                    <p className="text-xs text-orange-400">{tm.program}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <BmiCalculator />
        </div>
      </section>

      {/* BLOG PREVIEW */}
      {posts.length > 0 && (
        <section className="border-t border-white/10 bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHead title={t("blog_title")} sub={t("blog_sub")} />
              <Link href="/blog" className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/5">
                {t("blog_all")} →
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40">
                  <div className="h-44 overflow-hidden">
                    <img src={p.imageUrl} alt={pick(p.titleMk, p.titleEn)} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold text-orange-300">
                      {pick(p.categoryMk ?? "", p.categoryEn ?? "")}
                    </span>
                    <h3 className="mt-3 font-extrabold text-white group-hover:text-orange-400">{pick(p.titleMk, p.titleEn)}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{pick(p.excerptMk, p.excerptEn)}</p>
                    <span className="mt-3 inline-block text-sm font-bold text-orange-400">{t("blog_read")} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${IMG.dark})` }} />
        <div className="absolute inset-0 bg-orange-600/85" />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-black text-white sm:text-4xl">{t("cta_title")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/90">{t("cta_sub")}</p>
          <Link href="/clenstvo" className="mt-6 inline-block rounded-xl bg-zinc-950 px-8 py-3.5 font-bold text-white shadow-xl transition hover:bg-zinc-900">
            {t("cta_btn")} →
          </Link>
        </div>
      </section>
    </div>
  );
}
