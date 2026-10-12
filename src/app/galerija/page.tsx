"use client";

import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

const photos = [
  { src: IMG.hero, mk: "Главна теретана", en: "Main gym floor" },
  { src: IMG.crossfit, mk: "CrossFit зона", en: "CrossFit zone" },
  { src: IMG.boxing, mk: "Бокс сала", en: "Boxing hall" },
  { src: IMG.yoga, mk: "Јога студио", en: "Yoga studio" },
  { src: IMG.weights, mk: "Слободни тегови", en: "Free weights" },
  { src: IMG.treadmill, mk: "Кардио зона", en: "Cardio zone" },
  { src: IMG.barbell, mk: "Powerlifting агол", en: "Powerlifting corner" },
  { src: IMG.dark, mk: "Функционален тренинг", en: "Functional training" },
  { src: IMG.gym2, mk: "Вечерен термин", en: "Evening session" },
];

export default function GalleryPage() {
  const { t, pick } = useI18n();
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div>
      <PageHero title={t("gallery_title")} sub={t("gallery_sub")} image={IMG.gym2} crumb={t("nav_gallery")} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {photos.map((p, i) => (
            <button
              key={p.src + i}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl ${i % 5 === 0 ? "col-span-2 row-span-2 h-64 sm:h-96" : "h-40 sm:h-56"}`}
            >
              <img
                src={p.src}
                alt={pick(p.mk, p.en)}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <span className="absolute bottom-3 left-4 text-sm font-bold text-white opacity-0 transition group-hover:opacity-100">
                {pick(p.mk, p.en)} 🔍
              </span>
            </button>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[90] grid place-items-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-xl text-white hover:bg-orange-500"
            aria-label="Close"
          >
            ✕
          </button>
          <button
            className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-xl text-white hover:bg-orange-500 sm:left-8"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}
            aria-label="Previous"
          >
            ←
          </button>
          <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[lightbox].src.replace("w=800", "w=1400")}
              alt={pick(photos[lightbox].mk, photos[lightbox].en)}
              className="max-h-[80vh] w-auto rounded-2xl object-contain"
            />
            <figcaption className="mt-3 text-center text-sm font-semibold text-zinc-300">
              {pick(photos[lightbox].mk, photos[lightbox].en)} • {lightbox + 1}/{photos.length}
            </figcaption>
          </figure>
          <button
            className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-xl text-white hover:bg-orange-500 sm:right-8"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}
            aria-label="Next"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
