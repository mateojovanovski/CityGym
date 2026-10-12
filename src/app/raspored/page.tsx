"use client";

import { useEffect, useMemo, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero, BookingModal, type BookingClass } from "@/components/ui";
import { IMG } from "@/lib/fallback";

type Row = BookingClass & {
  nameMk: string; nameEn: string;
  trainerName: string | null;
  intensity: number | null;
};

const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;

export default function SchedulePage() {
  const { t, pick } = useI18n();
  const [rows, setRows] = useState<Row[]>([]);
  const [day, setDay] = useState<number>(new Date().getDay() === 0 ? 6 : new Date().getDay() - 1);
  const [selected, setSelected] = useState<Row | null>(null);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    fetch("/api/schedule")
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setRows(Array.isArray(d) ? d : []))
      .catch(() => {});
  }, [refresh]);

  const filtered = useMemo(
    () => rows.filter((r) => r.dayOfWeek === day).sort((a, b) => a.startTime.localeCompare(b.startTime)),
    [rows, day]
  );

  return (
    <div>
      <PageHero title={t("schedule_title")} sub={t("schedule_sub")} image={IMG.spin} crumb={t("nav_schedule")} />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
          {dayKeys.map((k, i) => (
            <button
              key={k}
              onClick={() => setDay(i)}
              className={`rounded-xl px-1 py-3 text-center transition ${
                day === i
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "border border-white/10 bg-zinc-900 text-zinc-300 hover:border-orange-500/40"
              }`}
            >
              <span className="block text-xs font-bold uppercase sm:text-sm">{t(k)}</span>
              <span className="mt-0.5 hidden text-[11px] opacity-70 sm:block">
                {rows.filter((r) => r.dayOfWeek === i).length} {pick("тренинзи", "classes")}
              </span>
            </button>
          ))}
        </div>

        <h2 className="mt-8 text-xl font-black text-white">
          {t(dayKeys[day])} — {filtered.length} {pick("тренинзи", "classes")}
        </h2>

        {filtered.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-white/15 bg-zinc-900/50 p-10 text-center text-zinc-400">
            <p className="text-4xl">😴</p>
            <p className="mt-2 text-sm">
              {pick("Нема групни тренинзи овој ден. Теретаната е отворена за индивидуален тренинг!", "No group classes this day. The gym is open for individual training!")}
            </p>
          </div>
        ) : (
          <div className="mt-4 grid gap-3">
            {filtered.map((c) => {
              const free = (c.capacity ?? 20) - (c.bookedCount ?? 0);
              const full = free <= 0;
              return (
                <div
                  key={c.id}
                  className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
                >
                  <div className="flex items-center gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-orange-500/10 text-center">
                      <div>
                        <p className="text-sm font-black text-orange-400">{c.startTime}</p>
                        <p className="text-[11px] text-zinc-500">{c.endTime}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white">{pick(c.nameMk, c.nameEn)}</h3>
                      <p className="mt-0.5 text-xs text-zinc-400">
                        👤 {c.trainerName ?? "City Gym"} • 📍 {c.room} •{" "}
                        {"🔥".repeat(Math.max(1, Math.min(3, c.intensity ?? 2)))}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3 sm:justify-end">
                    <span className={`text-xs font-bold ${full ? "text-red-400" : "text-emerald-400"}`}>
                      {full ? t("schedule_full") : `${free} ${t("schedule_free")}`}
                    </span>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className={`h-full rounded-full ${full ? "bg-red-500" : "bg-emerald-500"}`}
                        style={{ width: `${Math.min(100, ((c.bookedCount ?? 0) / (c.capacity ?? 20)) * 100)}%` }}
                      />
                    </div>
                    <button
                      disabled={full}
                      onClick={() => setSelected(c)}
                      className="rounded-lg bg-orange-500 px-5 py-2 text-sm font-bold text-white hover:bg-orange-400 disabled:cursor-not-allowed disabled:bg-zinc-700 disabled:text-zinc-400"
                    >
                      {t("schedule_book")}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900 p-6 text-sm text-zinc-400">
          <p>
            {pick(
              "📌 Резервацијата е бесплатна за членови. Откажување најдоцна 3 часа пред тренинг. Дојди 10 минути порано со пешкир и вода!",
              "📌 Booking is free for members. Cancel at least 3 hours before class. Arrive 10 minutes early with a towel and water!"
            )}
          </p>
        </div>
      </section>

      {selected && (
        <BookingModal
          cls={selected}
          dayName={t(dayKeys[day])}
          onClose={() => setSelected(null)}
          onDone={() => setRefresh((r) => r + 1)}
        />
      )}
    </div>
  );
}
