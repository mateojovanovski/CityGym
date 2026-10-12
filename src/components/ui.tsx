"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export function PageHero({
  title,
  sub,
  image,
  crumb,
}: {
  title: string;
  sub?: string;
  image: string;
  crumb?: string;
}) {
  const { t } = useI18n();
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/85 to-zinc-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/60" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-orange-400">
          <Link href="/" className="hover:text-orange-300">{t("nav_home")}</Link>
          {crumb ? `  /  ${crumb}` : ""}
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        {sub && <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300">{sub}</p>}
      </div>
    </section>
  );
}

export function SectionHead({ title, sub, center }: { title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-2xl`}>
      <div className={`flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <span className="h-1 w-8 rounded-full bg-orange-500" />
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">City Gym</span>
        {center && <span className="h-1 w-8 rounded-full bg-orange-500" />}
      </div>
      <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-zinc-400">{sub}</p>}
    </div>
  );
}

export function Stars({ rating, size = "text-sm" }: { rating: number; size?: string }) {
  return (
    <span className={`${size} tracking-tight text-amber-400`} aria-label={`${rating}/5`}>
      {"★".repeat(Math.round(rating))}
      <span className="text-zinc-600">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

export function IntensityDots({ level }: { level: number }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={`h-1.5 w-5 rounded-full ${i <= level ? "bg-orange-500" : "bg-zinc-700"}`}
        />
      ))}
    </span>
  );
}

export function BmiCalculator() {
  const { t } = useI18n();
  const [h, setH] = useState("180");
  const [w, setW] = useState("80");
  const [result, setResult] = useState<number | null>(null);

  function calc() {
    const height = parseFloat(h) / 100;
    const weight = parseFloat(w);
    if (!height || !weight) return;
    setResult(weight / (height * height));
  }

  function label(bmi: number) {
    if (bmi < 18.5) return { mk: "Неухранетост", en: "Underweight", c: "text-sky-400" };
    if (bmi < 25) return { mk: "Нормална тежина", en: "Normal weight", c: "text-emerald-400" };
    if (bmi < 30) return { mk: "Прекумерна тежина", en: "Overweight", c: "text-amber-400" };
    return { mk: "Дебелина", en: "Obesity", c: "text-red-400" };
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
      <h3 className="text-xl font-extrabold text-white">📊 {t("bmi_title")}</h3>
      <p className="mt-1 text-sm text-zinc-400">{t("bmi_sub")}</p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <label className="block">
          <span className="text-xs font-semibold text-zinc-400">{t("bmi_height")}</span>
          <input
            type="number"
            value={h}
            onChange={(e) => setH(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2.5 text-white focus:border-orange-500 focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-xs font-semibold text-zinc-400">{t("bmi_weight")}</span>
          <input
            type="number"
            value={w}
            onChange={(e) => setW(e.target.value)}
            className="mt-1 w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2.5 text-white focus:border-orange-500 focus:outline-none"
          />
        </label>
      </div>
      <button
        onClick={calc}
        className="mt-4 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-bold text-white hover:bg-orange-400"
      >
        {t("bmi_calc")}
      </button>
      {result !== null && (
        <p className="mt-3 text-center text-sm text-zinc-300">
          {t("bmi_result")}:{" "}
          <span className={`text-lg font-black ${label(result).c}`}>
            {result.toFixed(1)} — {label(result).mk}
          </span>
        </p>
      )}
    </div>
  );
}

export type BookingClass = {
  id: number;
  nameMk: string;
  nameEn: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  room: string | null;
  capacity: number | null;
  bookedCount: number | null;
};

export function BookingModal({
  cls,
  dayName,
  onClose,
  onDone,
}: {
  cls: BookingClass;
  dayName: string;
  onClose: () => void;
  onDone: () => void;
}) {
  const { t, pick } = useI18n();
  const [form, setForm] = useState({ fullName: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (form.fullName.trim().length < 3) return setErr(t("form_required"));
    if (!form.email.includes("@")) return setErr(t("form_email_invalid"));
    if (form.phone.trim().length < 6) return setErr(t("form_required"));
    setLoading(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ classId: cls.id, ...form }),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) setErr(d.error || "Error");
      else {
        setOk(true);
        onDone();
      }
    } catch {
      setErr("Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={onClose}>
      <div
        className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {ok ? (
          <div className="text-center">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-500/15 text-2xl">✅</div>
            <h3 className="mt-3 text-xl font-extrabold text-white">{t("book_success")}</h3>
            <p className="mt-1 text-sm text-zinc-400">
              {pick(cls.nameMk, cls.nameEn)} • {dayName} {cls.startTime}
            </p>
            <button onClick={onClose} className="mt-5 w-full rounded-lg bg-orange-500 py-2.5 text-sm font-bold text-white hover:bg-orange-400">
              {t("book_close")}
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-extrabold text-white">{t("book_title")}</h3>
            <p className="mt-1 text-sm text-zinc-400">
              {pick(cls.nameMk, cls.nameEn)} • {dayName} {cls.startTime}–{cls.endTime} • {cls.room}
            </p>
            <form onSubmit={submit} className="mt-4 space-y-3">
              <input
                placeholder={t("book_name")}
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder={t("contact_email")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none"
              />
              <input
                placeholder={t("contact_phone")}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg border border-white/10 bg-zinc-950 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none"
              />
              {err && <p className="text-sm text-red-400">{err}</p>}
              <div className="flex gap-2">
                <button type="button" onClick={onClose} className="flex-1 rounded-lg border border-white/15 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-white/5">
                  {t("book_close")}
                </button>
                <button type="submit" disabled={loading} className="flex-1 rounded-lg bg-orange-500 py-2.5 text-sm font-bold text-white hover:bg-orange-400 disabled:opacity-60">
                  {loading ? "…" : t("schedule_book")}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
