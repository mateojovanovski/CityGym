"use client";

import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function CookiesPage() {
  const { t, pick } = useI18n();

  function reset() {
    try {
      localStorage.removeItem("citygym-cookies");
      document.cookie = "citygym-cookies=;path=/;max-age=0";
    } catch {}
    window.location.reload();
  }

  return (
    <div>
      <PageHero title={t("cookies_policy")} image={IMG.treadmill} />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-sm leading-relaxed text-zinc-300 sm:px-6">
        <section className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="font-extrabold text-white">{pick("Што се колачиња?", "What are cookies?")}</h2>
          <p className="mt-2">
            {pick(
              "Колачињата се мали текстуални датотеки што сајтот ги зачувува во твојот прелистувач за да запомни поставки (јазик, согласност) и да ја мери посетеноста.",
              "Cookies are small text files the site stores in your browser to remember settings (language, consent) and measure visits."
            )}
          </p>
        </section>
        <section className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="font-extrabold text-white">{pick("Кои колачиња ги користиме", "Which cookies we use")}</h2>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-zinc-400">
                  <th className="py-2 pr-3">{pick("Име", "Name")}</th>
                  <th className="py-2 pr-3">{pick("Цел", "Purpose")}</th>
                  <th className="py-2">{pick("Траење", "Duration")}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { n: "citygym-lang", p: pick("Запаметен јазик", "Remembered language"), d: "1 година / year" },
                  { n: "citygym-cookies", p: pick("Твојата согласност", "Your consent"), d: "1 година / year" },
                  { n: "_ga (аналитика)", p: pick("Анонимна статистика (само со согласност)", "Anonymous stats (only with consent)"), d: "13 месеци / months" },
                ].map((r) => (
                  <tr key={r.n} className="border-b border-white/5">
                    <td className="py-2 pr-3 font-mono text-orange-300">{r.n}</td>
                    <td className="py-2 pr-3">{r.p}</td>
                    <td className="py-2">{r.d}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <section className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
          <h2 className="font-extrabold text-white">{pick("Управување со согласност", "Managing consent")}</h2>
          <p className="mt-2">
            {pick(
              "Сagласnosta можеш да ја промениш во секое време со бришење на зачуваните поставки — банерот повторно ќе се појави.",
              "You can change your consent at any time by deleting the saved settings — the banner will reappear."
            )}
          </p>
          <button onClick={reset} className="mt-4 rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-bold text-white hover:bg-orange-400">
            {pick("Ресетирај согласност 🍪", "Reset consent 🍪")}
          </button>
        </section>
      </article>
    </div>
  );
}
