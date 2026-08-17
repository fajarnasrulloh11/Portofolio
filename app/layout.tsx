import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fajar Nasrulloh — Portofolio",
  description: "Portfolio of Fajar Nasrulloh: Architecting ultra-performant Next.js web applications, high-scale RAG AI engines, and cloud distributed systems.",
  keywords: ["Full-Stack Engineer", "Next.js 16", "React 19", "AI Engineer", "TypeScript", "Tailwind CSS", "Developer Portfolio"],
  authors: [{ name: "Fajar Nasrulloh" }],
  openGraph: {
    title: "Fajar Nasrulloh — Full-Stack Architect & AI Engineer",
    description: "High-performance web applications, distributed systems, and modern AI engineering portfolio.",
    url: " ",
    siteName: "Fajar Nasrulloh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajar Nasrulloh Portfolio",
    description: "Full stack & Data Scientist",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#07080d] text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
