"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function MembershipPage() {
  const { t, pick } = useI18n();
  const [form, setForm] = useState({
    fullName: "", email: "", phone: "", goal: "slabeenje", preferredProgram: "fitness", message: "",
  });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const goals = [
    { id: "slabeenje", mk: "Слабеење", en: "Weight loss" },
    { id: "masa", mk: "Мускулна маса", en: "Muscle gain" },
    { id: "kondicija", mk: "Кондиција", en: "Conditioning" },
    { id: "zdravje", mk: "Здравје и рекреација", en: "Health & recreation" },
    { id: "sport", mk: "Спортски перформанси", en: "Sports performance" },
  ];
  const progs = [
    { id: "fitness", mk: "Фитнес", en: "Fitness" },
    { id: "crossfit", mk: "CrossFit", en: "CrossFit" },
    { id: "yoga", mk: "Јога/Пилатес", en: "Yoga/Pilates" },
    { id: "boxing", mk: "Бокс", en: "Boxing" },
    { id: "personal", mk: "Персонален тренинг", en: "Personal training" },
  ];

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (form.fullName.trim().length < 3) return setErr(t("form_required"));
    if (!form.email.includes("@")) return setErr(t("form_email_invalid"));
    if (form.phone.trim().length < 6) return setErr(t("form_required"));
    setLoading(true);
    try {
      const res = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) setErr(d.error || "Error");
      else setOk(true);
    } catch {
      setErr("Error");
    } finally {
      setLoading(false);
    }
  }

  const input =
    "w-full rounded-lg border border-white/10 bg-zinc-950 px-3.5 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none";

  return (
    <div>
      <PageHero title={t("membership_title")} sub={t("membership_sub")} image={IMG.muscle} crumb={t("nav_join")} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
            {ok ? (
              <div className="grid place-items-center py-14 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-3xl">🎉</div>
                  <h2 className="mt-4 text-2xl font-black text-white">{t("trial_success")}</h2>
                  <p className="mt-2 text-sm text-zinc-400">
                    {pick("Провери ја е-поштата — испративме детали за твојот термин.", "Check your email — we sent details about your slot.")}
                  </p>
                  <button onClick={() => { setOk(false); setForm({ fullName: "", email: "", phone: "", goal: "slabeenje", preferredProgram: "fitness", message: "" }); }} className="mt-6 rounded-lg border border-white/15 px-6 py-2.5 text-sm font-bold text-white hover:bg-white/5">
                    {pick("Нова пријава", "New application")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <h2 className="text-xl font-black text-white">🎁 {t("trial_btn")}</h2>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("book_name")} *</span>
                  <input value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} className={input} placeholder="Петар Петровски" />
                </label>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_email")} *</span>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="petar@email.com" />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_phone")} *</span>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="070 123 456" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("goal")}</span>
                    <select value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} className={input}>
                      {goals.map((g) => <option key={g.id} value={g.id}>{pick(g.mk, g.en)}</option>)}
                    </select>
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("program")}</span>
                    <select value={form.preferredProgram} onChange={(e) => setForm({ ...form, preferredProgram: e.target.value })} className={input}>
                      {progs.map((g) => <option key={g.id} value={g.id}>{pick(g.mk, g.en)}</option>)}
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_message")}</span>
                  <textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input} placeholder={pick("Претходно искуство, повреди, префериран термин...", "Previous experience, injuries, preferred time...")} />
                </label>
                {err && <p className="text-sm font-semibold text-red-400">⚠️ {err}</p>}
                <button type="submit" disabled={loading} className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 disabled:opacity-60">
                  {loading ? "…" : t("trial_btn") + " 🎁"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
              <h3 className="text-lg font-black text-white">{pick("Што добиваш бесплатно?", "What do you get for free?")}</h3>
              <ul className="mt-3 space-y-2.5 text-sm text-zinc-200">
                {[
                  pick("1 бесплатен тренинг по избор (теретана или групен)", "1 free training of choice (gym or group)"),
                  pick("Анализа на состав на тело (InBody)", "Body composition analysis (InBody)"),
                  pick("Консултација со тренер (30 мин)", "Coach consultation (30 min)"),
                  pick("Препорака за програма и исхрана", "Program & nutrition recommendation"),
                  pick("Разглед на целиот објект + сауна", "Full facility tour + sauna"),
                ].map((f) => <li key={f} className="flex gap-2"><span className="text-emerald-400">✓</span> {f}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="font-black text-white">{pick("Како функционира?", "How does it work?")}</h3>
              <ol className="mt-3 space-y-3 text-sm text-zinc-300">
                {[
                  pick("1. Пополни ја формата — трае 1 минута", "1. Fill the form — takes 1 minute"),
                  pick("2. Те контактираме во 24ч за термин", "2. We contact you within 24h for a slot"),
                  pick("3. Доаѓаш со опрема — ние правиме се друго", "3. You come with gear — we handle the rest"),
                ].map((s) => <li key={s} className="rounded-lg bg-white/5 px-4 py-3">{s}</li>)}
              </ol>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <img src={IMG.kettle} alt="Training" className="h-52 w-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
