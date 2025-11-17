import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { ReviewPrompt } from "@/components/layout/ReviewPrompt";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <Header />
        <main className="pt-28">
          {children}
        </main>
        <Footer />
        <FloatingActions />
        <ReviewPrompt />
      </body>
    </html>
  );
}

