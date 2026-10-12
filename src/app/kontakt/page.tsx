"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function ContactPage() {
  const { t, pick } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setErr("");
    if (form.name.trim().length < 2) return setErr(t("form_required"));
    if (!form.email.includes("@")) return setErr(t("form_email_invalid"));
    if (form.message.trim().length < 5) return setErr(t("form_required"));
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) setErr(d.error || "Error");
      else {
        setOk(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      }
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
      <PageHero title={t("contact_title")} sub={t("contact_sub")} image={IMG.hero} crumb={t("nav_contact")} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3 rounded-2xl border border-white/10 bg-zinc-900 p-6 sm:p-8">
            {ok ? (
              <div className="grid place-items-center py-16 text-center">
                <div>
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/15 text-3xl">✅</div>
                  <h2 className="mt-4 text-2xl font-black text-white">{t("contact_success")}</h2>
                  <button
                    onClick={() => setOk(false)}
                    className="mt-6 rounded-lg border border-white/15 px-6 py-2.5 text-sm font-bold text-white hover:bg-white/5"
                  >
                    {pick("Нова порака", "New message")}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_name")} *</span>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={input} placeholder="Петар Петровски" />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_email")} *</span>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={input} placeholder="petar@email.com" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_phone")}</span>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={input} placeholder="070 123 456" />
                  </label>
                  <label className="block">
                    <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_subject")}</span>
                    <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={input}>
                      <option value="">{pick("— Избери —", "— Select —")}</option>
                      <option value="clenarina">{pick("Членарина", "Membership")}</option>
                      <option value="personal">{pick("Персонален тренинг", "Personal training")}</option>
                      <option value="grupni">{pick("Групни тренинзи", "Group classes")}</option>
                      <option value="firma">{pick("Корпоративна соработка", "Corporate")}</option>
                      <option value="drugo">{pick("Друго", "Other")}</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wide text-zinc-400">{t("contact_message")} *</span>
                  <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={input} placeholder={pick("Како можеме да ти помогнеме?", "How can we help?")} />
                </label>
                {err && <p className="text-sm font-semibold text-red-400">⚠️ {err}</p>}
                <button type="submit" disabled={loading} className="w-full rounded-xl bg-orange-500 py-3.5 font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-400 disabled:opacity-60 sm:w-auto sm:px-10">
                  {loading ? "…" : t("contact_send") + " ✉️"}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="font-extrabold text-white">📍 {t("contact_address")}</h3>
              <p className="mt-2 text-sm text-zinc-300">
                {pick("ул. Македонија бр. 12, 1000 Скопје", "12 Makedonija St, 1000 Skopje")}
                <br />
                {pick("ТЦ Олимпико, 2 кат", "Olympico Mall, 2nd floor")}
              </p>
              <div className="mt-3 space-y-1.5 text-sm text-zinc-300">
                <p>📞 <a href="tel:+38923111222" className="hover:text-orange-400">+389 2 3111 222</a></p>
                <p>📱 <a href="tel:+38970123456" className="hover:text-orange-400">+389 70 123 456</a></p>
                <p>✉️ <a href="mailto:info@citygym.mk" className="hover:text-orange-400">info@citygym.mk</a></p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
              <h3 className="font-extrabold text-white">🕐 {t("contact_hours")}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex justify-between"><span className="text-zinc-400">{t("hours_week")}</span><b className="text-white">06:00 – 23:00</b></li>
                <li className="flex justify-between"><span className="text-zinc-400">{t("hours_sat")}</span><b className="text-white">08:00 – 20:00</b></li>
                <li className="flex justify-between"><span className="text-zinc-400">{t("hours_sun")}</span><b className="text-white">09:00 – 15:00</b></li>
              </ul>
              <p className="mt-3 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-300">
                🟢 {pick("Рецепција: секој ден 08–22ч", "Reception: daily 08–22h")}
              </p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="City Gym map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=21.4155%2C41.9905%2C21.4455%2C42.0055&layer=mapnik&marker=42.0%2C21.43"
                className="h-56 w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
