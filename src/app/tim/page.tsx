"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PageHero, SectionHead, Stars } from "@/components/ui";
import { IMG, fallbackTrainers } from "@/lib/fallback";

type Trainer = (typeof fallbackTrainers)[number];

export default function TeamPage() {
  const { t, pick } = useI18n();
  const [trainers, setTrainers] = useState<Trainer[]>(fallbackTrainers);

  useEffect(() => {
    fetch("/api/trainers")
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => { if (d?.length) setTrainers(d); })
      .catch(() => {});
  }, []);

  return (
    <div>
      <PageHero title={t("trainers_title")} sub={t("trainers_sub")} image={IMG.trainer} crumb={t("nav_team")} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((tr) => (
            <article
              key={tr.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40"
            >
              <div className="relative h-80">
                <img src={tr.imageUrl} alt={tr.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/10 to-transparent" />
                <span className="absolute right-4 top-4 rounded-full bg-zinc-950/80 px-3 py-1 text-xs font-bold text-orange-300 backdrop-blur">
                  ⭐ {Number(tr.rating ?? 5).toFixed(1)}
                </span>
                <div className="absolute bottom-4 left-5 right-5">
                  <h2 className="text-xl font-black text-white">{tr.name}</h2>
                  <p className="text-sm font-semibold text-orange-400">{pick(tr.roleMk, tr.roleEn)}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm leading-relaxed text-zinc-300">{pick(tr.bioMk, tr.bioEn)}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tr.specialties.split(",").map((s) => (
                    <span key={s} className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-semibold text-zinc-300">
                      {s.trim()}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs text-zinc-400">
                  <span>📅 {tr.experienceYears} {t("trainers_exp")}</span>
                  <span>📸 {tr.instagram}</span>
                </div>
                <Link
                  href="/clenstvo"
                  className="mt-4 block rounded-lg border border-orange-500/40 bg-orange-500/10 py-2.5 text-center text-sm font-bold text-orange-300 hover:bg-orange-500/20"
                >
                  {pick("Закажи тренинг со ", "Book a session with ") + tr.name.split(" ")[0]}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center">
          <h3 className="text-xl font-black text-white">
            {pick("Сакаш да станеш дел од нашиот тим?", "Want to join our team?")}
          </h3>
          <p className="mx-auto mt-2 max-w-xl text-sm text-zinc-400">
            {pick(
              "Секогаш бараме страствени тренери. Испрати CV на kariera@citygym.mk и стани дел од најдобрата екипа.",
              "We're always looking for passionate coaches. Send your CV to kariera@citygym.mk and join the best crew."
            )}
          </p>
          <Link href="/kontakt" className="mt-4 inline-block rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-orange-400">
            {t("nav_contact")}
          </Link>
        </div>
      </section>
    </div>
  );
}
