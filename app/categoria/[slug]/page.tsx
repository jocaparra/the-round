import React from "react";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterBlock from "@/components/NewsletterBlock";
import ConcentricArcs from "@/components/ConcentricArcs";

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const CATEGORY_DESCRIPTIONS: Record<string, { title: string; subtitle: string }> = {
  rodadas: {
    title: "Rodadas de Investimento & M&A",
    subtitle: "Cobertura de Seed, Série A, Série B, captações de crédito e fusões & aquisições no ecossistema brasileiro.",
  },
  fundos: {
    title: "Fundos de Venture Capital",
    subtitle: "Movimentações de capital, novos veículos de investimento, relatórios de DPI/TVPI e estratégias dos VCs locais e globais.",
  },
  perfis: {
    title: "Perfis de Founders",
    subtitle: "Histórias sem glamour: a trajetória real, estilo de gestão e dilemas operacionais dos fundadores à frente das maiores startups do país.",
  },
  analises: {
    title: "Análises & Investigação",
    subtitle: "Jornalismo investigativo sobre unit economics, inadimplência, downrounds silenciosos e dinâmicas do mercado tech.",
  },
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const lowerSlug = slug.toLowerCase();

  const categoryMeta = CATEGORY_DESCRIPTIONS[lowerSlug];

  if (!categoryMeta) {
    notFound();
  }

  const categoryArticles = ARTICLES.filter(
    (a) => a.category.toLowerCase() === lowerSlug || (lowerSlug === "rodadas" && a.category === "Rodadas")
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1210]">
      <Header />

      {/* Category Header Banner */}
      <section className="relative bg-[#4C0F16] text-[#F7F2EC] pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#F7F2EC]/10 overflow-hidden">
        <ConcentricArcs opacity={0.12} center="top-right" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D49B5E] bg-[#3B0B11] px-3 py-1 rounded-full border border-[#F7F2EC]/10 inline-block">
            Seção Editorial
          </span>
          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F7F2EC]">
            {categoryMeta.title}
          </h1>
          <p className="text-base sm:text-lg text-[#D4C7BB] max-w-2xl leading-relaxed">
            {categoryMeta.subtitle}
          </p>
        </div>
      </section>

      {/* Category Articles Feed */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-12">
        {categoryArticles.length === 0 ? (
          <div className="py-16 text-center text-[#574F4B]">
            <p className="text-lg font-medium">Nenhuma matéria publicada nesta seção ainda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="standard" />
            ))}
          </div>
        )}

        <NewsletterBlock />
      </main>

      <Footer />
    </div>
  );
}
