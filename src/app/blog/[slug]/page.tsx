"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18n";

type Post = {
  id: number; slug: string; titleMk: string; titleEn: string;
  excerptMk: string; excerptEn: string; contentMk: string; contentEn: string;
  imageUrl: string; categoryMk: string | null; categoryEn: string | null;
  author: string | null; publishedAt: string | null; readingMin: number | null;
};

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const { t, pick } = useI18n();
  const [post, setPost] = useState<Post | null>(null);
  const [others, setOthers] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetch(`/api/blog/${slug}`)
      .then((r) => {
        if (r.status === 404) setNotFound(true);
        return r.ok ? r.json() : null;
      })
      .then((d) => { if (d) setPost(d); })
      .catch(() => {})
      .finally(() => setLoading(false));
    fetch("/api/blog")
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => { if (Array.isArray(d)) setOthers(d.filter((p: Post) => p.slug !== slug).slice(0, 3)); })
      .catch(() => {});
  }, [slug]);

  if (loading) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16">
        <div className="h-80 animate-pulse rounded-2xl bg-zinc-900" />
        <div className="mt-4 h-8 w-2/3 animate-pulse rounded bg-zinc-900" />
        <div className="mt-2 h-4 w-full animate-pulse rounded bg-zinc-900" />
      </div>
    );
  }

  if (notFound || !post) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-6xl">🔍</p>
        <h1 className="mt-4 text-2xl font-black text-white">{t("not_found")}</h1>
        <Link href="/blog" className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-bold text-white">
          ← {t("blog_all")}
        </Link>
      </div>
    );
  }

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${post.imageUrl})` }} />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/40" />
        <div className="relative mx-auto max-w-4xl px-4 pb-10 pt-24 sm:px-6">
          <Link href="/blog" className="text-sm font-bold text-orange-400 hover:text-orange-300">← {t("blog_all")}</Link>
          <div className="mt-3">
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white">
              {pick(post.categoryMk ?? "", post.categoryEn ?? "")}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
            {pick(post.titleMk, post.titleEn)}
          </h1>
          <p className="mt-4 text-sm text-zinc-300">
            👤 {post.author} • 📅 {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("mk-MK") : ""} • ⏱ {post.readingMin} {t("blog_min")}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <p className="border-l-4 border-orange-500 bg-orange-500/5 p-4 text-lg font-medium italic leading-relaxed text-zinc-200">
          {pick(post.excerptMk, post.excerptEn)}
        </p>
        <div className="mt-6 space-y-5 whitespace-pre-line text-[15px] leading-relaxed text-zinc-300">
          {pick(post.contentMk, post.contentEn)}
        </div>

        <div className="mt-10 flex flex-wrap gap-2 border-t border-white/10 pt-6">
          <span className="text-sm text-zinc-500">{pick("Сподели:", "Share:")}</span>
          {["Facebook", "Instagram", "X", "Viber"].map((s) => (
            <button key={s} className="rounded-lg border border-white/15 px-3 py-1.5 text-xs font-bold text-zinc-300 hover:border-orange-500/50 hover:text-orange-300">
              {s}
            </button>
          ))}
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-white/10 bg-zinc-900/50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
            <h2 className="text-xl font-black text-white">{pick("Прочитај и ова", "Read also")}</h2>
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <Link key={p.id} href={`/blog/${p.slug}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 hover:border-orange-500/40">
                  <div className="h-40 overflow-hidden">
                    <img src={p.imageUrl} alt="" loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white group-hover:text-orange-400">{pick(p.titleMk, p.titleEn)}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
