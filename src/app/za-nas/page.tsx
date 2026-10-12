"use client";

import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PageHero, SectionHead } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function AboutPage() {
  const { pick, t } = useI18n();

  const timeline = [
    { y: "2012", mk: "Отворање на првата сала од 300м² во центарот на Скопје со 3 тренери.", en: "Opening of the first 300m² hall in central Skopje with 3 coaches." },
    { y: "2015", mk: "Проширување на 700м², нова CrossFit зона и првите 500 членови.", en: "Expansion to 700m², new CrossFit zone and the first 500 members." },
    { y: "2018", mk: "Отворање на бокс сала со ринг и спа центар со сауна.", en: "Opening of the boxing hall with a ring and a spa center with sauna." },
    { y: "2021", mk: "Целосна реновација — Technogym опрема и 1000+ активни членови.", en: "Full renovation — Technogym equipment and 1000+ active members." },
    { y: "2024", mk: "1200м², 15 тренери, 2000+ членови и награда „Најдобра теретана“. ", en: "1200m², 15 coaches, 2000+ members and the 'Best Gym' award." },
  ];

  const values = [
    { e: "💪", mk: "Посветеност", en: "Dedication", dmk: "Резултатите доаѓаат со конзистентност — ние те држиме на пат.", den: "Results come with consistency — we keep you on track." },
    { e: "🤝", mk: "Заедница", en: "Community", dmk: "Не си само број на членарина — си дел од City Gym семејството.", den: "You're not just a membership number — you're part of the City Gym family." },
    { e: "🎯", mk: "Експертиза", en: "Expertise", dmk: "Секој тренер е сертифициран и се доусовршува секоја година.", den: "Every coach is certified and re-trained each year." },
    { e: "✨", mk: "Чистота", en: "Cleanliness", dmk: "Дезинфекција 3 пати дневно, вентилација и топла вода секогаш.", den: "Disinfection 3 times daily, ventilation and hot water always." },
  ];

  return (
    <div>
      <PageHero
        title={pick("За City Gym", "About City Gym")}
        sub={pick(
          "Од 2012 година ја градиме најсилната фитнес заедница во Македонија.",
          "Since 2012 we've been building the strongest fitness community in Macedonia."
        )}
        image={IMG.dark}
        crumb={t("nav_about")}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHead title={pick("Нашата приказна", "Our story")} />
            <div className="mt-4 space-y-4 leading-relaxed text-zinc-300">
              <p>
                {pick(
                  "City Gym започна во 2012 година како мала сала од 300м² со една визија — да донесеме светски фитнес стандард во Скопје. Денес, со 1200м² простор, најмодерна опрема и тим од 15 сертифицирани тренери, ние сме дом на над 2000 активни членови.",
                  "City Gym started in 2012 as a small 300m² hall with one vision — to bring world-class fitness standards to Skopje. Today, with 1200m² of space, state-of-the-art equipment and a team of 15 certified coaches, we are home to over 2000 active members."
                )}
              </p>
              <p>
                {pick(
                  "Нашата мисија е едноставна: да му помогнеме на секој човек — без разлика на возраст, пол или ниво — да ја открие радоста на движењето и да ја изгради најсилната верзија од себе.",
                  "Our mission is simple: to help every person — regardless of age, gender or level — discover the joy of movement and build the strongest version of themselves."
                )}
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { n: "2000+", l: t("stats_members") },
                { n: "40+", l: pick("Неделни тренинзи", "Weekly classes") },
                { n: "98%", l: pick("Задоволни членови", "Happy members") },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-zinc-900 p-4 text-center">
                  <p className="text-2xl font-black text-orange-500">{s.n}</p>
                  <p className="mt-1 text-xs text-zinc-400">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={IMG.weights} alt="Gym" className="h-64 w-full rounded-2xl object-cover" />
            <img src={IMG.crossfit} alt="CrossFit" className="mt-8 h-64 w-full rounded-2xl object-cover" />
            <img src={IMG.yoga} alt="Yoga" className="h-64 w-full rounded-2xl object-cover" />
            <img src={IMG.boxing} alt="Boxing" className="-mt-8 h-64 w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <SectionHead center title={pick("Нашите вредности", "Our values")} />
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.en} className="rounded-2xl border border-white/10 bg-zinc-900 p-6 text-center">
                <span className="text-4xl">{v.e}</span>
                <h3 className="mt-3 font-extrabold text-white">{pick(v.mk, v.en)}</h3>
                <p className="mt-2 text-sm text-zinc-400">{pick(v.dmk, v.den)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        <SectionHead center title={pick("Нашето патување", "Our journey")} />
        <div className="mt-8 space-y-0">
          {timeline.map((item, i) => (
            <div key={item.y} className="relative flex gap-5 pb-8 last:pb-0">
              {i < timeline.length - 1 && (
                <span className="absolute left-[27px] top-14 h-[calc(100%-3rem)] w-0.5 bg-orange-500/30" />
              )}
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-orange-500/40 bg-orange-500/10 text-sm font-black text-orange-400">
                {item.y.slice(2)}
              </span>
              <div className="rounded-2xl border border-white/10 bg-zinc-900 p-5 flex-1">
                <p className="font-black text-white">{item.y}</p>
                <p className="mt-1 text-sm text-zinc-300">{pick(item.mk, item.en)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/clenstvo" className="inline-block rounded-xl bg-orange-500 px-8 py-3.5 font-bold text-white shadow-xl shadow-orange-500/30 hover:bg-orange-400">
            {t("cta_btn")} →
          </Link>
        </div>
      </section>
    </div>
  );
}
