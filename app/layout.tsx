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
  title: "Fajar Nasrulloh — Software Developer",
  description: "Portfolio of Fajar Nasrulloh, an Information Technology student building frontend and backend web applications.",
  keywords: ["Software Developer", "Next.js", "React", "TypeScript", "Web Development", "Developer Portfolio"],
  authors: [{ name: "Fajar Nasrulloh" }],
  openGraph: {
    title: "Fajar Nasrulloh — Software Developer",
    description: "Web development projects and technical work by Fajar Nasrulloh.",
    siteName: "Fajar Nasrulloh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajar Nasrulloh Portfolio",
    description: "Web development projects and technical work by Fajar Nasrulloh.",
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
