import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Round — Jornalismo Independente de Startups e Venture Capital",
  description: "O jornal digital brasileiro sobre startups de alto crescimento, venture capital, rodadas, fundos, perfis de founders e investigações do ecossistema de tecnologia.",
  keywords: ["startups", "venture capital", "fundos de investimento", "rodadas de investimento", "founders", "tecnologia brasil", "the round"],
  openGraph: {
    title: "The Round — Startups, Venture Capital & Tecnologia",
    description: "Jornalismo cético por padrão, sem press release e sem hype.",
    url: "https://theround.com.br",
    siteName: "The Round",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Round",
    description: "Jornalismo cético por padrão sobre o ecossistema brasileiro de tecnologia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${jakarta.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1210]">
        {children}
      </body>
    </html>
  );
}
