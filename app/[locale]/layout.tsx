import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ReviewPrompt } from "@/components/layout/ReviewPrompt";
import { locales, defaultLocale, type Locale } from "@/lib/translations";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "ModularBox - Custom Container Solutions | 3D Configurator",
  description: "Design and customize modular containers in real-time with our revolutionary 3D configurator. Living spaces, offices, storage, and specialized units.",
  keywords: "modular containers, custom containers, 3D configurator, shipping containers, container homes, office containers",
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  const locale = params?.locale || defaultLocale;

  return (
    <html lang={locale} className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="pt-16 md:pt-28">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <ReviewPrompt />
      </body>
    </html>
  );
}
