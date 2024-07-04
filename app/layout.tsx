import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/(header)/Header";
import Footer from "@/components/(footer)/Footer";

import { cn } from "@/lib/utils";

const jost = Jost({ subsets: ["cyrillic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Smiraks - надежный поставщик запчастей для мясной промышленности",
  description:
    "Запчасти напрямую из Европы. Отличные цены, быстрая доставка. Ведущие бренды",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head />
      <body
        className={cn(
          `min-h-svh antialiased bg-[hsl(var(--white))] text-[hsl(var(--blue))] ${jost.className} flex flex-col justify-between items-center`
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
