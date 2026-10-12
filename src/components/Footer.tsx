"use client";

import Link from "next/link";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

export default function Footer() {
  const { t, pick } = useI18n();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  async function subscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setMsg(t("newsletter_ok"));
        setEmail("");
      } else {
        const d = await res.json().catch(() => ({}));
        setMsg(d.error || "Error");
      }
    } catch {
      setMsg("Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-xl font-black text-white">
              CG
            </span>
            <span className="text-lg font-extrabold text-white">
              CITY<span className="text-orange-500">GYM</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{t("footer_about")}</p>
          <div className="mt-4 flex gap-2">
            {[
              { label: "Facebook", icon: "f" },
              { label: "Instagram", icon: "ig" },
              { label: "TikTok", icon: "tt" },
              { label: "YouTube", icon: "yt" },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                title={s.label}
                className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-xs font-bold text-zinc-300 transition hover:bg-orange-500 hover:text-white"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">{t("footer_links")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-orange-400" href="/za-nas">{t("nav_about")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/uslugi">{t("nav_services")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/cenovnik">{t("nav_pricing")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/tim">{t("nav_team")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/raspored">{t("nav_schedule")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/blog">{t("nav_blog")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/cesto-prasanja">{t("faq_title")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/admin">{t("nav_admin")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">{t("footer_programs")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-orange-400" href="/uslugi">💪 {pick("Фитнес и бодибилдинг", "Fitness & bodybuilding")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/uslugi">🔥 CrossFit</Link></li>
            <li><Link className="hover:text-orange-400" href="/uslugi">🧘 {pick("Јога и пилатес", "Yoga & pilates")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/uslugi">🥊 {pick("Бокс и кикбокс", "Boxing & kickbox")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/uslugi">🏋️ {pick("Персонален тренинг", "Personal training")}</Link></li>
            <li><Link className="hover:text-orange-400" href="/uslugi">🥗 {pick("Нутриционизам", "Nutrition")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-white">{t("newsletter_title")}</h4>
          <p className="mt-4 text-sm text-zinc-400">{t("newsletter_sub")}</p>
          <form onSubmit={subscribe} className="mt-3 flex gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("newsletter_ph")}
              className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-zinc-500 focus:border-orange-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="shrink-0 rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-white hover:bg-orange-400 disabled:opacity-60"
            >
              {loading ? "…" : t("newsletter_btn")}
            </button>
          </form>
          {msg && <p className="mt-2 text-xs text-emerald-400">{msg}</p>}
          <div className="mt-4 space-y-1.5 text-sm text-zinc-400">
            <p>📍 {pick("ул. Македонија бр. 12, 1000 Скопје", "12 Makedonija St, 1000 Skopje")}</p>
            <p>📞 +389 2 3111 222</p>
            <p>✉️ info@citygym.mk</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-zinc-500 sm:px-6 md:flex-row">
          <p>© {new Date().getFullYear()} City Gym Skopje. {t("footer_rights")}</p>
          <p className="text-zinc-600">{t("footer_student")}</p>
          <div className="flex gap-4">
            <Link href="/privatnost" className="hover:text-orange-400">{t("privacy")}</Link>
            <Link href="/uslovi" className="hover:text-orange-400">{t("terms")}</Link>
            <Link href="/kolacinja" className="hover:text-orange-400">{t("cookies_policy")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
