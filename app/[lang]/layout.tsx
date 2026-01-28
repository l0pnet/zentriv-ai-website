import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getDictionary } from "@/lib/get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Zentriv AI - Intelligent Solutions",
  description: "Custom machine learning models, enterprise SaaS platforms, and next-gen generative AI applications.",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "zh" }, { lang: "ja" }, { lang: "ko" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  // Await params here if using Next.js 15, but Next.js 14 params are usually static or awaited?
  // In Next.js 15 params is a promise. In 14 it's an object. 
  // To be safe for future/current (next 15 is current latest), await params if needed or treat as object.
  // However, create-next-app likely installed latest (15).
  // Let's assume 15 behavior or safe access.
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar dict={dict} lang={lang} />
        {children}
        <Footer dict={dict} lang={lang} />
      </body>
    </html>
  );
}
