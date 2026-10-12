"use client";

import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function PrivacyPage() {
  const { t, pick } = useI18n();
  return (
    <div>
      <PageHero title={t("privacy")} image={IMG.hero} />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-sm leading-relaxed text-zinc-300 sm:px-6">
        <p className="text-xs text-zinc-500">{pick("Последна измена: септември 2025", "Last updated: September 2025")}</p>
        {[
          {
            hmk: "1. Кои податоци ги собираме", hen: "1. What data we collect",
            pmk: "При користење на сајтот и пријавување собираме: име и презиме, е-пошта, телефон, цел на тренирање и преферирана програма. Преку колачиња собираме анонимни статистички податоци за посетеност.",
            pen: "When using the site and signing up we collect: full name, email, phone, training goal and preferred program. Via cookies we collect anonymous visit statistics.",
          },
          {
            hmk: "2. Како ги користиме податоците", hen: "2. How we use the data",
            pmk: "Податоците се користат за: контакт и закажување термини, испраќање билтен (само со согласност), подобрување на услугите и законски обврски. Податоците никогаш не се продаваат на трети лица.",
            pen: "Data is used for: contact and scheduling, newsletter (only with consent), service improvement and legal obligations. Data is never sold to third parties.",
          },
          {
            hmk: "3. Колку ги чуваме", hen: "3. How long we keep them",
            pmk: "Контакт пораките се чуваат 2 години, податоците за членство за времетраење на договорот + 5 години (сметководствени прописи), а билтен претплатите до отпишување.",
            pen: "Contact messages are kept 2 years, membership data for the contract duration + 5 years (accounting rules), newsletter subscriptions until unsubscribe.",
          },
          {
            hmk: "4. Ваши права", hen: "4. Your rights",
            pmk: "Имате право на пристап, исправка, бришење, ограничување и преносливост на податоците, како и приговор. Барање испратете на privacy@citygym.mk — одговараме во рок од 30 дена.",
            pen: "You have the right to access, correct, delete, restrict and port your data, as well as to object. Send requests to privacy@citygym.mk — we reply within 30 days.",
          },
          {
            hmk: "5. Контакт", hen: "5. Contact",
            pmk: "City Gym ДОО Скопје, ул. Македонија бр. 12, 1000 Скопје. Е-пошта: privacy@citygym.mk, телефон: +389 2 3111 222.",
            pen: "City Gym DOO Skopje, 12 Makedonija St, 1000 Skopje. Email: privacy@citygym.mk, phone: +389 2 3111 222.",
          },
        ].map((s) => (
          <section key={s.hen} className="rounded-2xl border border-white/10 bg-zinc-900 p-6">
            <h2 className="font-extrabold text-white">{pick(s.hmk, s.hen)}</h2>
            <p className="mt-2">{pick(s.pmk, s.pen)}</p>
          </section>
        ))}
      </article>
    </div>
  );
}
