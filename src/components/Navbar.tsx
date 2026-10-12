"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useI18n } from "@/lib/i18n";

const links = [
  { href: "/", key: "nav_home" },
  { href: "/za-nas", key: "nav_about" },
  { href: "/uslugi", key: "nav_services" },
  { href: "/cenovnik", key: "nav_pricing" },
  { href: "/tim", key: "nav_team" },
  { href: "/raspored", key: "nav_schedule" },
  { href: "/galerija", key: "nav_gallery" },
  { href: "/blog", key: "nav_blog" },
  { href: "/kontakt", key: "nav_contact" },
] as const;

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-xl font-black text-white shadow-lg shadow-orange-500/30">
            CG
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold tracking-tight text-white">
              CITY<span className="text-orange-500">GYM</span>
            </span>
            <span className="block text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-400">
              Skopje • 2012
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active =
              l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-lg px-2.5 py-2 text-[13px] font-semibold transition ${
                  active
                    ? "bg-orange-500/15 text-orange-400"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {t(l.key as never)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex overflow-hidden rounded-lg border border-white/10">
            {(["mk", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
                  lang === l
                    ? "bg-orange-500 text-white"
                    : "bg-transparent text-zinc-400 hover:text-white"
                }`}
                aria-label={l === "mk" ? "Македонски" : "English"}
              >
                {l === "mk" ? "МК" : "EN"}
              </button>
            ))}
          </div>
          <Link
            href="/clenstvo"
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400"
          >
            {t("nav_join")}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <div className="flex overflow-hidden rounded-lg border border-white/10">
            {(["mk", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-bold uppercase ${
                  lang === l ? "bg-orange-500 text-white" : "text-zinc-400"
                }`}
              >
                {l === "mk" ? "МК" : "EN"}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-zinc-200"
            aria-label="Menu"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-zinc-950 px-4 py-3 lg:hidden">
          <div className="grid gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  pathname === l.href
                    ? "bg-orange-500/15 text-orange-400"
                    : "text-zinc-200 hover:bg-white/5"
                }`}
              >
                {t(l.key as never)}
              </Link>
            ))}
            <Link
              href="/clenstvo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-lg bg-orange-500 px-3 py-3 text-center text-sm font-bold text-white"
            >
              {t("nav_join")}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
