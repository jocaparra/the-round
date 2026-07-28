import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES, Article } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterBlock from "@/components/NewsletterBlock";
import ConcentricArcs from "@/components/ConcentricArcs";
import LinkedInIcon from "@/components/LinkedInIcon";
import {
  Calendar,
  Clock,
  Share2,
  ArrowLeft,
  CheckCircle2,
  Building2,
  DollarSign,
  Users,
  Award,
} from "lucide-react";

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = ARTICLES.filter(
    (a) => a.id !== article.id && (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
  ).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1210]">
      <Header />

      {/* Reader Mode Body Container */}
      <main className="pt-24 sm:pt-28 pb-16 flex-1 w-full">
        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-6">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-xs font-bold text-[#4C0F16] hover:text-[#C77B3F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar para a Home</span>
          </Link>
        </div>

        {/* Article Header & Title Area */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 mb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-[#574F4B]">
              <span className="font-bold bg-[#4C0F16] text-[#F7F2EC] px-3 py-1 rounded-full uppercase tracking-wider">
                {article.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#C77B3F]" />
                {article.publishedAt}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>

            <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1A1210] leading-[1.15] tracking-tight">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#574F4B] leading-relaxed font-normal">
              {article.subtitle}
            </p>

            {/* Author Byline & Social Share */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-6 border-t border-b border-[#1A1210]/10 py-4 gap-4">
              <div className="flex items-center space-x-3">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#4C0F16]/20"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#1A1210]">{article.author.name}</h4>
                  <p className="text-xs text-[#857B75]">{article.author.role}</p>
                </div>
              </div>

              {/* Share Buttons (LinkedIn Highlight) */}
              <div className="flex items-center space-x-2">
                <span className="text-xs font-semibold text-[#857B75]">Compartilhar:</span>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    `https://theround.com.br/materia/${article.slug}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-[#0077B5] hover:bg-[#005E93] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors shadow-sm"
                  title="Compartilhar no LinkedIn"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Main Cover Image / Hero Artwork */}
          <div className="mb-10 rounded-2xl overflow-hidden bg-[#4C0F16] border border-[#1A1210]/10 shadow-lg">
            {article.coverImage ? (
              <img
                src={article.coverImage}
                alt={article.title}
                className="w-full h-auto max-h-[500px] object-cover"
              />
            ) : (
              <div className="w-full h-80 flex items-center justify-center relative p-8 text-center">
                <ConcentricArcs opacity={0.2} center="center" />
                <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl text-[#F7F2EC] z-10">
                  the round
                </span>
              </div>
            )}
            {article.imageCaption && (
              <p className="text-xs text-[#574F4B] p-3 bg-[#F3F1EC] border-t border-[#1A1210]/5 italic">
                {article.imageCaption}
              </p>
            )}
          </div>

          {/* Key Metrics / Deal Summary Box (If available) */}
          {article.keyMetrics && (
            <div className="my-8 p-6 bg-[#F3F1EC] rounded-2xl border-l-4 border-[#4C0F16] space-y-4 shadow-sm">
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-[#4C0F16]" />
                <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg text-[#4C0F16]">
                  Ficha Técnica & Termos da Rodada — {article.companyName}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm pt-2">
                {article.keyMetrics.stage && (
                  <div className="bg-white p-3 rounded-xl border border-[#1A1210]/5">
                    <span className="text-xs text-[#857B75] block">Estágio</span>
                    <strong className="text-[#1A1210] font-bold">{article.keyMetrics.stage}</strong>
                  </div>
                )}
                {article.keyMetrics.amount && (
                  <div className="bg-white p-3 rounded-xl border border-[#1A1210]/5">
                    <span className="text-xs text-[#857B75] block">Valor do Aporte</span>
                    <strong className="text-[#4C0F16] font-bold">{article.keyMetrics.amount}</strong>
                  </div>
                )}
                {article.keyMetrics.leadInvestor && (
                  <div className="bg-white p-3 rounded-xl border border-[#1A1210]/5">
                    <span className="text-xs text-[#857B75] block">Lead Investor</span>
                    <strong className="text-[#1A1210] font-bold">{article.keyMetrics.leadInvestor}</strong>
                  </div>
                )}
                {article.keyMetrics.valuation && (
                  <div className="bg-white p-3 rounded-xl border border-[#1A1210]/5">
                    <span className="text-xs text-[#857B75] block">Valuation Pós</span>
                    <strong className="text-[#1A1210] font-bold">{article.keyMetrics.valuation}</strong>
                  </div>
                )}
                {article.keyMetrics.arr && (
                  <div className="bg-white p-3 rounded-xl border border-[#1A1210]/5">
                    <span className="text-xs text-[#857B75] block">Receita (ARR)</span>
                    <strong className="text-[#1A1210] font-bold">{article.keyMetrics.arr}</strong>
                  </div>
                )}
                {article.keyMetrics.headcount && (
                  <div className="bg-white p-3 rounded-xl border border-[#1A1210]/5">
                    <span className="text-xs text-[#857B75] block">Equipe</span>
                    <strong className="text-[#1A1210] font-bold">{article.keyMetrics.headcount}</strong>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Long Form Article Body */}
          <div
            className="prose-editorial max-w-none text-[#1A1210] font-normal"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-[#1A1210]/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-[#857B75] mr-2">Tópicos:</span>
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-[#F3F1EC] text-[#574F4B] px-3 py-1 rounded-full border border-[#1A1210]/5"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Author Bio Footer Box */}
          <div className="mt-8 p-6 bg-[#4C0F16] text-[#F7F2EC] rounded-2xl flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 border border-[#F7F2EC]/10">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#C77B3F]"
            />
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#F7F2EC]">
                {article.author.name}
              </h4>
              <p className="text-xs text-[#D49B5E]">{article.author.role}</p>
              <p className="text-xs text-[#D4C7BB] leading-relaxed">
                Cobre negócios, tecnologia e venture capital na América Latina. Ex-repórter de finanças.
              </p>
            </div>
          </div>
        </article>

        {/* Newsletter Inline Capture */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
          <NewsletterBlock />
        </div>

        {/* Related Articles Footer Grid */}
        {relatedArticles.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-[#1A1210]/10">
            <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl text-[#1A1210] mb-8">
              Leia Também no The Round
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel) => (
                <ArticleCard key={rel.id} article={rel} variant="standard" />
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
