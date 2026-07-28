"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, Tag, Calendar } from "lucide-react";
import { ARTICLES, Article } from "@/data/articles";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open search modal
          const searchBtn = document.querySelector('button[title*="Buscar"]');
          if (searchBtn) (searchBtn as HTMLButtonElement).click();
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const filtered = ARTICLES.filter(
      (art) =>
        art.title.toLowerCase().includes(q) ||
        art.subtitle.toLowerCase().includes(q) ||
        art.category.toLowerCase().includes(q) ||
        (art.companyName && art.companyName.toLowerCase().includes(q)) ||
        art.tags.some((t) => t.toLowerCase().includes(q))
    );
    setResults(filtered);
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#1A1210]/80 backdrop-blur-sm transition-opacity">
      <div className="bg-[#4C0F16] border border-[#F7F2EC]/20 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col text-[#F7F2EC] max-h-[80vh]">
        {/* Search Input Header */}
        <div className="p-4 border-b border-[#F7F2EC]/15 flex items-center space-x-3 bg-[#3B0B11]">
          <Search className="w-5 h-5 text-[#C77B3F]" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar por startup, fundo, founder, rodada ou palavra-chave..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-[#F7F2EC] placeholder-[#D4C7BB]/60 text-base font-medium focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs text-[#D4C7BB] hover:text-[#F7F2EC] bg-[#4C0F16] px-2 py-1 rounded"
            >
              Limpar
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1 text-[#D4C7BB] hover:text-[#F7F2EC] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List / Empty State */}
        <div className="p-4 overflow-y-auto space-y-3 flex-1">
          {query.trim() === "" ? (
            <div className="py-8 text-center text-[#D4C7BB]/70">
              <p className="text-sm font-medium">Digite algo para buscar no arquivo do <strong className="text-[#F7F2EC]">The Round</strong></p>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {["Kaszek", "Fintech", "Healthtech", "Bruno Albuquerque", "Downround", "Série B"].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="text-xs bg-[#3B0B11] hover:bg-[#C77B3F] text-[#F7F2EC] px-3 py-1.5 rounded-full border border-[#F7F2EC]/10 transition-colors"
                    >
                      #{tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="py-12 text-center text-[#D4C7BB]/80">
              <p className="text-base font-semibold">Nenhum resultado encontrado para "{query}"</p>
              <p className="text-xs mt-1 text-[#D4C7BB]/60">Tente buscar por termos mais genéricos como "Rodadas", "Kaszek" ou "IA".</p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-xs font-semibold text-[#C77B3F] uppercase tracking-wider px-1">
                {results.length} matéria{results.length > 1 ? "s" : ""} encontrada{results.length > 1 ? "s" : ""}
              </p>
              {results.map((article) => (
                <Link
                  key={article.id}
                  href={`/materia/${article.slug}`}
                  onClick={onClose}
                  className="block p-3.5 rounded-xl bg-[#3B0B11]/60 hover:bg-[#3B0B11] border border-[#F7F2EC]/10 hover:border-[#C77B3F]/50 transition-all group"
                >
                  <div className="flex items-center justify-between text-xs text-[#D4C7BB] mb-1">
                    <span className="font-semibold text-[#D49B5E] bg-[#4C0F16] px-2 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-[#C77B3F]" />
                      <span>{article.publishedAt}</span>
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#F7F2EC] group-hover:text-[#D49B5E] transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="text-xs text-[#D4C7BB]/80 line-clamp-2 mt-1">
                    {article.subtitle}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#3B0B11] border-t border-[#F7F2EC]/10 text-xs text-[#D4C7BB]/60 flex items-center justify-between px-4">
          <span>Pressione <kbd className="bg-[#4C0F16] text-[#F7F2EC] px-1 rounded">ESC</kbd> para fechar</span>
          <span>The Round Search Engine v1.0</span>
        </div>
      </div>
    </div>
  );
}
