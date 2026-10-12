import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "City Gym Скопје — Теретана, фитнес, CrossFit, јога, бокс",
  description:
    "City Gym е модерна теретана во центарот на Скопје: фитнес, CrossFit, јога, бокс, персонален тренинг и нутриционизам. 1200м², 15+ тренери, 2000+ членови. Прв тренинг бесплатен!",
  keywords: ["теретана", "gym Skopje", "фитнес", "crossfit", "јога", "бокс", "City Gym"],
  openGraph: {
    title: "City Gym Скопје — Твојата најсилна верзија",
    description: "1200м² модерна опрема, 15+ тренери, 40+ неделни тренинзи. Прв тренинг бесплатен!",
    type: "website",
    locale: "mk_MK",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="mk">
      <body className="bg-zinc-950 text-zinc-100 antialiased">
        <I18nProvider>
          <Navbar />
          <main className="min-h-[60vh]">{children}</main>
          <Footer />
          <CookieBanner />
        </I18nProvider>
      </body>
    </html>
  );
}
