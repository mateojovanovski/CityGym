"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { PageHero } from "@/components/ui";
import { IMG } from "@/lib/fallback";

type Tab = "contact" | "bookings" | "trial" | "newsletter";

const endpoints: Record<Tab, string> = {
  contact: "/api/contact",
  bookings: "/api/bookings",
  trial: "/api/trial",
  newsletter: "/api/newsletter",
};

export default function AdminPage() {
  const { t, pick } = useI18n();
  const [tab, setTab] = useState<Tab>("contact");
  const [data, setData] = useState<Record<string, string | number | null | undefined>[]>([]);
  const [counts, setCounts] = useState<Record<Tab, number>>({ contact: 0, bookings: 0, trial: 0, newsletter: 0 });
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState(false);
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("citygym-admin") === "1") setAuthed(true);
    } catch {}
  }, []);

  useEffect(() => {
    if (!authed) return;
    setLoading(true);
    fetch(endpoints[tab])
      .then((r) => (r.ok ? r.json() : []))
      .then((d) => setData(Array.isArray(d) ? d : []))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, [tab, authed]);

  useEffect(() => {
    if (!authed) return;
    (Object.keys(endpoints) as Tab[]).forEach((k) => {
      fetch(endpoints[k])
        .then((r) => (r.ok ? r.json() : []))
        .then((d) => setCounts((c) => ({ ...c, [k]: Array.isArray(d) ? d.length : 0 })))
        .catch(() => {});
    });
  }, [authed]);

  function login(e: React.FormEvent) {
    e.preventDefault();
    if (pass === "admin123") {
      setAuthed(true);
      try { sessionStorage.setItem("citygym-admin", "1"); } catch {}
    } else {
      setErr(pick("Погрешна лозинка", "Wrong password"));
    }
  }

  const tabs: { id: Tab; mk: string; en: string; icon: string }[] = [
    { id: "contact", mk: "Пораки", en: "Messages", icon: "✉️" },
    { id: "bookings", mk: "Резервации", en: "Bookings", icon: "📅" },
    { id: "trial", mk: "Пријави за пробен", en: "Trial signups", icon: "🎁" },
    { id: "newsletter", mk: "Билтен", en: "Newsletter", icon: "📧" },
  ];

  function renderRow(row: Record<string, string | number | null | undefined>, i: number) {
    const date = row.createdAt || row.created_at;
    return (
      <div key={i} className="rounded-xl border border-white/10 bg-zinc-950 p-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="font-bold text-white">
            {row.name || row.fullName || row.email || `#${row.id}`}
          </p>
          <span className="text-xs text-zinc-500">
            {date ? new Date(String(date)).toLocaleString("mk-MK") : ""}
          </span>
        </div>
        <div className="mt-2 grid gap-1 text-sm text-zinc-300">
          {row.email ? <p>✉️ {row.email}</p> : null}
          {row.phone ? <p>📞 {row.phone}</p> : null}
          {row.subject ? <p>📌 {row.subject}</p> : null}
          {row.message ? <p className="mt-1 rounded-lg bg-white/5 p-2.5">💬 {row.message}</p> : null}
          {row.classId !== undefined && row.classId !== null ? <p>🏋️ Class ID: {String(row.classId)}</p> : null}
          {row.goal ? <p>🎯 {pick("Цел", "Goal")}: {row.goal}</p> : null}
          {row.preferredProgram ? <p>💪 {pick("Програма", "Program")}: {row.preferredProgram}</p> : null}
          {row.status ? (
            <p>
              <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-bold text-emerald-300">
                {row.status}
              </span>
            </p>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      <PageHero title={t("admin_title")} sub={t("admin_sub")} image={IMG.dark} crumb="Admin" />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {!authed ? (
          <form onSubmit={login} className="mx-auto max-w-sm rounded-2xl border border-white/10 bg-zinc-900 p-8 text-center">
            <p className="text-4xl">🔐</p>
            <h2 className="mt-3 text-lg font-black text-white">{pick("Најава за администратор", "Admin login")}</h2>
            <p className="mt-1 text-xs text-zinc-500">{pick("Демо лозинка: admin123", "Demo password: admin123")}</p>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="••••••••"
              className="mt-4 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 py-3 text-center text-white focus:border-orange-500 focus:outline-none"
            />
            {err && <p className="mt-2 text-sm text-red-400">{err}</p>}
            <button className="mt-3 w-full rounded-xl bg-orange-500 py-3 text-sm font-bold text-white hover:bg-orange-400">
              {pick("Најави се", "Login")}
            </button>
          </form>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {tabs.map((tb) => (
                <button
                  key={tb.id}
                  onClick={() => setTab(tb.id)}
                  className={`rounded-2xl border p-5 text-left transition ${
                    tab === tb.id ? "border-orange-500 bg-orange-500/10" : "border-white/10 bg-zinc-900 hover:border-orange-500/40"
                  }`}
                >
                  <p className="text-2xl">{tb.icon}</p>
                  <p className="mt-1 text-2xl font-black text-white">{counts[tb.id]}</p>
                  <p className="text-xs font-bold text-zinc-400">{pick(tb.mk, tb.en)}</p>
                </button>
              ))}
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-black text-white">
                {pick(tabs.find((x) => x.id === tab)!.mk, tabs.find((x) => x.id === tab)!.en)} ({data.length})
              </h2>
              {loading ? (
                <div className="mt-4 space-y-3">
                  {[1, 2, 3].map((i) => <div key={i} className="h-24 animate-pulse rounded-xl bg-zinc-900" />)}
                </div>
              ) : data.length === 0 ? (
                <p className="mt-4 rounded-xl border border-dashed border-white/15 p-8 text-center text-sm text-zinc-500">
                  {pick("Нема записи.", "No records.")}
                </p>
              ) : (
                <div className="mt-4 space-y-3">{data.map(renderRow)}</div>
              )}
            </div>
          </>
        )}
      </section>
    </div>
  );
}
