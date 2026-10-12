"use client";

import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

export default function TermsPage() {
  const { t, pick } = useI18n();
  return (
    <div>
      <PageHero title={t("terms")} image={IMG.dark} />
      <article className="mx-auto max-w-3xl space-y-6 px-4 py-12 text-sm leading-relaxed text-zinc-300 sm:px-6">
        <p className="text-xs text-zinc-500">{pick("Последна измена: септември 2025", "Last updated: September 2025")}</p>
        {[
          { hmk: "1. Општи одредби", hen: "1. General provisions", pmk: "Со купување членарина или користење на објектот, членот ги прифаќа овие услови. City Gym го задржува правото на измена на условите со претходна најава од 15 дена.", pen: "By purchasing a membership or using the facility, the member accepts these terms. City Gym reserves the right to change the terms with 15 days notice." },
          { hmk: "2. Членарина и плаќање", hen: "2. Membership & payment", pmk: "Членарината е персонална и непренослива. Се плаќа однапред — месечно, квартално или годишно. Задоцнето плаќање над 7 дена привремено го суспендира пристапот.", pen: "Membership is personal and non-transferable. Paid in advance — monthly, quarterly or yearly. Late payment over 7 days temporarily suspends access." },
          { hmk: "3. Правила на однесување", hen: "3. Code of conduct", pmk: "Задолжителни се: чисти патики, пешкир, враќање на теговите и бришење на справите. Забранети се: навредливо однесување, фотографирање на други без согласност и внесување алкохол.", pen: "Required: clean sneakers, towel, returning weights and wiping machines. Forbidden: offensive behavior, photographing others without consent, bringing alcohol." },
          { hmk: "4. Безбедност и здравје", hen: "4. Safety & health", pmk: "Членовите тренираат на сопствена одговорност. При здравствени проблеми консултирајте лекар пред тренинг. Персоналот е обучен за прва помош, а објектот е видео-надгледуван.", pen: "Members train at their own responsibility. With health issues consult a doctor before training. Staff is first-aid trained and the facility is video-monitored." },
          { hmk: "5. Откажување и рефундација", hen: "5. Cancellation & refunds", pmk: "Откажување со 15 дена најава. Рефундација на неискористен дел е можна само од медицински причини со потврда. Пробниот тренинг е бесплатен и без обврски.", pen: "Cancel with 15 days notice. Refund of unused part only for medical reasons with a note. The trial training is free with no obligations." },
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
