import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="text-7xl">🏋️</p>
      <h1 className="mt-4 text-5xl font-black text-white">404</h1>
      <p className="mt-2 text-zinc-400">Страницата не е пронајдена / Page not found</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-orange-500 px-8 py-3 font-bold text-white hover:bg-orange-400"
      >
        ← Назад на почетна
      </Link>
    </div>
  );
}
