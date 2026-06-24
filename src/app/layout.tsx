import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundCanvas from "@/components/BackgroundCanvas";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEKSPHIRE | Cloud, AI & Digital Innovation",
  description: "Premium AWS Cloud Solutions, AI Implementations, Cloud Migrations, and Custom Software Solutions for Enterprises, SaaS Companies, and Startups.",
  keywords: "AWS Solutions, AI Implementation, DevOps, Cloud Migration, Custom Software, Managed IT Services, SaaS Development, PromptForge AI",
  metadataBase: new URL("https://teksphire.com"),
  openGraph: {
    title: "TEKSPHIRE | Cloud, AI & Digital Innovation",
    description: "Enterprise AWS Cloud Solutions & AI Implementation Platform",
    url: "https://teksphire.com",
    siteName: "TEKSPHIRE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEKSPHIRE | Cloud, AI & Digital Innovation",
    description: "Enterprise AWS Cloud Solutions & AI Implementation Platform",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} h-full dark antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#05070f] text-slate-100 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
        <BackgroundCanvas />
        <Navbar />
        <main className="flex-grow relative z-10 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
