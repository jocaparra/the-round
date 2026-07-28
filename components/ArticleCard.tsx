import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowUpRight } from "lucide-react";
import { Article } from "@/data/articles";
import ConcentricArcs from "./ConcentricArcs";

interface ArticleCardProps {
  article: Article;
  variant?: "standard" | "compact" | "horizontal" | "hero-side";
}

export default function ArticleCard({
  article,
  variant = "standard",
}: ArticleCardProps) {
  const categoryColors: Record<string, string> = {
    Rodadas: "bg-[#4C0F16] text-[#F7F2EC] border-[#C77B3F]/40",
    Fundos: "bg-[#3B0B11] text-[#D49B5E] border-[#D49B5E]/30",
    Perfis: "bg-[#7A1924] text-[#F7F2EC] border-[#F7F2EC]/20",
    Análises: "bg-[#C77B3F]/15 text-[#C77B3F] border-[#C77B3F]/30",
  };

  if (variant === "horizontal") {
    return (
      <Link
        href={`/materia/${article.slug}`}
        className="group flex flex-col md:flex-row bg-[#FAFAF8] hover:bg-white rounded-2xl border border-[#1A1210]/10 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#C77B3F]/40 p-4 sm:p-5 gap-5"
      >
        <div className="relative w-full md:w-56 h-48 md:h-auto rounded-xl overflow-hidden bg-[#4C0F16] flex-shrink-0">
          {article.coverImage ? (
            <img
              src={article.coverImage}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center relative p-4">
              <ConcentricArcs opacity={0.2} center="center" />
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-xl text-[#F7F2EC] z-10">
                the round
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span
                className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                  categoryColors[article.category] || "bg-[#4C0F16] text-[#F7F2EC]"
                }`}
              >
                {article.category}
              </span>
              <span className="text-xs text-[#857B75] flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#1A1210] group-hover:text-[#4C0F16] transition-colors leading-tight mb-2">
              {article.title}
            </h3>

            <p className="text-sm text-[#574F4B] line-clamp-2 leading-relaxed mb-4">
              {article.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-[#1A1210]/5 text-xs text-[#857B75]">
            <div className="flex items-center space-x-2">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="font-medium text-[#1A1210]">{article.author.name}</span>
            </div>
            <span>{article.publishedAt}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === "hero-side") {
    return (
      <Link
        href={`/materia/${article.slug}`}
        className="group block p-4 rounded-xl bg-[#3B0B11]/80 hover:bg-[#3B0B11] border border-[#F7F2EC]/10 hover:border-[#C77B3F]/50 transition-all duration-300"
      >
        <div className="flex items-center space-x-2 text-xs mb-2">
          <span className="text-[#D49B5E] font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <span className="text-[#D4C7BB]/40">•</span>
          <span className="text-[#D4C7BB]/70">{article.readTime}</span>
        </div>

        <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#F7F2EC] group-hover:text-[#D49B5E] transition-colors leading-snug line-clamp-2 mb-1.5">
          {article.title}
        </h4>

        <p className="text-xs text-[#D4C7BB]/70 line-clamp-2 leading-relaxed">
          {article.subtitle}
        </p>

        <div className="mt-3 flex items-center justify-between text-[11px] text-[#D4C7BB]/50 pt-2 border-t border-[#F7F2EC]/5">
          <span>{article.publishedAt}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#C77B3F] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </Link>
    );
  }

  // Standard Card (Vertical Grid)
  return (
    <Link
      href={`/materia/${article.slug}`}
      className="group flex flex-col bg-[#FAFAF8] hover:bg-white rounded-2xl border border-[#1A1210]/10 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-[#C77B3F]/40 h-full"
    >
      <div className="relative w-full h-52 bg-[#4C0F16] overflow-hidden flex-shrink-0">
        {article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative p-4">
            <ConcentricArcs opacity={0.25} center="top-right" />
            <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl text-[#F7F2EC] z-10">
              the round
            </span>
          </div>
        )}

        <div className="absolute top-3 left-3 z-10">
          <span
            className={`text-xs font-bold px-3 py-1 rounded-full border shadow-sm backdrop-blur-md ${
              categoryColors[article.category] || "bg-[#4C0F16] text-[#F7F2EC]"
            }`}
          >
            {article.category}
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-between flex-1 p-5 sm:p-6">
        <div>
          <div className="flex items-center space-x-2 text-xs text-[#857B75] mb-2">
            <Calendar className="w-3.5 h-3.5 text-[#C77B3F]" />
            <span>{article.publishedAt}</span>
            <span>•</span>
            <Clock className="w-3.5 h-3.5" />
            <span>{article.readTime}</span>
          </div>

          <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg sm:text-xl text-[#1A1210] group-hover:text-[#4C0F16] transition-colors leading-snug mb-2">
            {article.title}
          </h3>

          <p className="text-sm text-[#574F4B] line-clamp-3 leading-relaxed mb-4">
            {article.subtitle}
          </p>
        </div>

        <div className="pt-4 border-t border-[#1A1210]/5 flex items-center justify-between text-xs text-[#857B75]">
          <div className="flex items-center space-x-2">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-6 h-6 rounded-full object-cover"
            />
            <span className="font-medium text-[#1A1210]">{article.author.name}</span>
          </div>
          <span className="text-[#C77B3F] font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
            Ler matéria
            <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
