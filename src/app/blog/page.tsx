"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

type Post = {
  id: number; slug: string; titleMk: string; titleEn: string;
  excerptMk: string; excerptEn: string; imageUrl: string;
  categoryMk: string | null; categoryEn: string | null;
  author: string | null; publishedAt: string | null; readingMin: number | null;
};

export default function BlogPage() {
  const { t, pick } = useI18n();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [cat, setCat] = useState("all");

  useEffect(() => {
    fetch("/api/blog")
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setPosts(Array.isArray(d) ? d : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const cats = ["all", ...Array.from(new Set(posts.map((p) => pick(p.categoryMk ?? "", p.categoryEn ?? "")).filter(Boolean)))];
  const list = cat === "all" ? posts : posts.filter((p) => pick(p.categoryMk ?? "", p.categoryEn ?? "") === cat);
  const [featured, ...rest] = list;

  return (
    <div>
      <PageHero title={t("blog_title")} sub={t("blog_sub")} image={IMG.treadmill} crumb={t("nav_blog")} />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        {cats.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-2 text-sm font-bold ${cat === c ? "bg-orange-500 text-white" : "border border-white/15 text-zinc-300 hover:bg-white/5"}`}
              >
                {c === "all" ? pick("Сите", "All") : c}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-72 animate-pulse rounded-2xl bg-zinc-900" />
            ))}
          </div>
        ) : list.length === 0 ? (
          <p className="mt-10 text-center text-zinc-400">
            {pick("Нема објави во моментов.", "No posts at the moment.")}
          </p>
        ) : (
          <>
            {featured && (
              <Link
                href={`/blog/${featured.slug}`}
                className="group mt-8 grid overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40 lg:grid-cols-2"
              >
                <div className="h-64 overflow-hidden lg:h-auto lg:min-h-[320px]">
                  <img src={featured.imageUrl} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-col justify-center p-7">
                  <span className="w-fit rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold text-orange-300">
                    ⭐ {pick(featured.categoryMk ?? "", featured.categoryEn ?? "")}
                  </span>
                  <h2 className="mt-3 text-2xl font-black text-white group-hover:text-orange-400 sm:text-3xl">
                    {pick(featured.titleMk, featured.titleEn)}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{pick(featured.excerptMk, featured.excerptEn)}</p>
                  <p className="mt-4 text-xs text-zinc-500">
                    👤 {featured.author} • 📅 {featured.publishedAt ? new Date(featured.publishedAt).toLocaleDateString("mk-MK") : ""} • ⏱ {featured.readingMin} {t("blog_min")}
                  </p>
                </div>
              </Link>
            )}

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition hover:border-orange-500/40"
                >
                  <div className="h-44 overflow-hidden">
                    <img src={p.imageUrl} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-bold text-orange-300">
                      {pick(p.categoryMk ?? "", p.categoryEn ?? "")}
                    </span>
                    <h3 className="mt-3 font-extrabold text-white group-hover:text-orange-400">
                      {pick(p.titleMk, p.titleEn)}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-400">{pick(p.excerptMk, p.excerptEn)}</p>
                    <p className="mt-3 text-xs text-zinc-500">
                      📅 {p.publishedAt ? new Date(p.publishedAt).toLocaleDateString("mk-MK") : ""} • ⏱ {p.readingMin} {t("blog_min")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
