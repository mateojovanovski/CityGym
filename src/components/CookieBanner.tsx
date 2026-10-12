"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };

export default function CookieBanner() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({ necessary: true, analytics: true, marketing: false });

  useEffect(() => {
    try {
      const v = localStorage.getItem("citygym-cookies");
      if (!v) {
        const timer = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function save(p: Prefs) {
    try {
      localStorage.setItem("citygym-cookies", JSON.stringify({ ...p, ts: Date.now() }));
      document.cookie = `citygym-cookies=${encodeURIComponent(JSON.stringify(p))};path=/;max-age=31536000`;
    } catch {}
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-[100] sm:inset-x-6 sm:bottom-6">
      <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-zinc-900/95 p-5 shadow-2xl shadow-black/60 backdrop-blur-md">
        <h3 className="text-base font-bold text-white">{t("cookie_title")}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">
          {t("cookie_text")}{" "}
          <Link href="/kolacinja" className="text-orange-400 underline">
            {t("cookies_policy")}
          </Link>
        </p>

        {customizing && (
          <div className="mt-3 space-y-2 rounded-xl bg-white/5 p-3 text-sm">
            <label className="flex items-center justify-between gap-3 text-zinc-300">
              <span>{t("cookie_necessary")}</span>
              <input type="checkbox" checked disabled className="h-4 w-4 accent-orange-500" />
            </label>
            <label className="flex items-center justify-between gap-3 text-zinc-300">
              <span>{t("cookie_analytics")}</span>
              <input
                type="checkbox"
                checked={prefs.analytics}
                onChange={(e) => setPrefs({ ...prefs, analytics: e.target.checked })}
                className="h-4 w-4 accent-orange-500"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-zinc-300">
              <span>{t("cookie_marketing")}</span>
              <input
                type="checkbox"
                checked={prefs.marketing}
                onChange={(e) => setPrefs({ ...prefs, marketing: e.target.checked })}
                className="h-4 w-4 accent-orange-500"
              />
            </label>
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            onClick={() => save({ necessary: true, analytics: true, marketing: true })}
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-400"
          >
            {t("cookie_accept")}
          </button>
          <button
            onClick={() => save({ necessary: true, analytics: false, marketing: false })}
            className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 hover:bg-white/5"
          >
            {t("cookie_reject")}
          </button>
          {customizing ? (
            <button
              onClick={() => save(prefs)}
              className="rounded-lg border border-orange-500/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300 hover:bg-orange-500/20"
            >
              {t("cookie_save")}
            </button>
          ) : (
            <button
              onClick={() => setCustomizing(true)}
              className="rounded-lg border border-white/15 px-4 py-2 text-sm font-semibold text-zinc-300 hover:bg-white/5"
            >
              {t("cookie_settings")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
