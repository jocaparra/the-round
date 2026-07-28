"use client";

import React, { useState } from "react";
import { ARTICLES } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterBlock from "@/components/NewsletterBlock";
import ConcentricArcs from "@/components/ConcentricArcs";
import { Newspaper, ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  const categories = ["Todas", "Rodadas", "Fundos", "Perfis", "Análises"];

  const filteredArticles = ARTICLES.filter((a) => {
    if (selectedCategory === "Todas") return true;
    return a.category.toLowerCase() === selectedCategory.toLowerCase();
  });

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const paginatedArticles = filteredArticles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1210]">
      <Header />

      {/* Header Banner for News Tab */}
      <section className="relative bg-[#4C0F16] text-[#F7F2EC] pt-24 sm:pt-28 pb-12 px-4 sm:px-6 lg:px-8 border-b border-[#F7F2EC]/10 overflow-hidden">
        <ConcentricArcs opacity={0.12} center="top-right" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center space-x-2 bg-[#3B0B11] text-[#D49B5E] border border-[#F7F2EC]/10 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Central de Notícias</span>
          </div>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#F7F2EC]">
            Todas as Matérias & Coberturas
          </h1>

          <p className="text-base text-[#D4C7BB] max-w-2xl leading-relaxed">
            Consulte todo o arquivo jornalístico do The Round. Filtre por rodadas, teses de fundos, perfis de founders e investigações.
          </p>
        </div>
      </section>

      {/* Main News List Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1 w-full space-y-10">
        {/* Category Filters Pill Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#1A1210]/10 gap-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#857B75]">
            Filtrar Cobertura ({filteredArticles.length} matérias)
          </span>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive
                      ? "bg-[#4C0F16] text-[#F7F2EC] shadow-md"
                      : "bg-[#F3F1EC] text-[#574F4B] hover:bg-[#1A1210]/10"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Articles Grid */}
        {paginatedArticles.length === 0 ? (
          <div className="py-16 text-center text-[#574F4B]">
            <p className="text-lg font-medium">Nenhuma matéria encontrada nesta categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="standard" />
            ))}
          </div>
        )}

        {/* Simple Pagination Control */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-3 pt-8 border-t border-[#1A1210]/10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-[#F3F1EC] text-[#1A1210] hover:bg-[#4C0F16] hover:text-[#F7F2EC] disabled:opacity-40 transition-colors"
              title="Página Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <span className="text-xs font-semibold text-[#574F4B]">
              Página {currentPage} de {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-[#F3F1EC] text-[#1A1210] hover:bg-[#4C0F16] hover:text-[#F7F2EC] disabled:opacity-40 transition-colors"
              title="Próxima Página"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        <NewsletterBlock />
      </main>

      <Footer />
    </div>
  );
}
