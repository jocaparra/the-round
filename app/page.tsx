import React from "react";
import Link from "next/link";
import { ARTICLES } from "@/data/articles";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import NewsletterBlock from "@/components/NewsletterBlock";
import ConcentricArcs from "@/components/ConcentricArcs";
import LinkedInIcon from "@/components/LinkedInIcon";
import { ArrowRight, ArrowUpRight, ShieldCheck, CheckCircle, Flame, Building2 } from "lucide-react";

export default function InstitutionalHomePage() {
  // Pull 3 curated articles for the Home highlight section
  const curatedArticles = ARTICLES.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1210]">
      <Header />

      {/* 1. HERO INSTITUCIONAL (Scroll Único, Estilo Canastra/Canary) */}
      <section className="relative bg-gradient-to-br from-[#4C0F16] via-[#3B0B11] to-[#5A1119] text-[#F7F2EC] pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#F7F2EC]/10 overflow-hidden">
        <ConcentricArcs opacity={0.16} center="top-right" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-center sm:text-left">
          {/* Badge Tagline */}
          <div className="inline-flex items-center space-x-2 bg-[#3B0B11]/90 text-[#D49B5E] border border-[#F7F2EC]/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#C77B3F] animate-pulse" />
            <span>Jornal Digital Independente</span>
          </div>

          {/* Canary-style Wordplay Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F7F2EC] tracking-tight leading-[1.1]">
            A rodada antes da rodada. <br className="hidden sm:inline" />
            <span className="text-[#D49B5E]">A cobertura de quem ainda está construindo.</span>
          </h1>

          {/* Institutional Statement */}
          <p className="text-lg sm:text-2xl text-[#D4C7BB] leading-relaxed max-w-3xl font-normal">
            O <strong>The Round</strong> investiga startups brasileiras de alto crescimento, fundos de venture capital e os bastidores de tecnologia no Brasil. Cético por padrão, sem press release reciclado.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              href="/noticias"
              className="w-full sm:w-auto font-['Plus_Jakarta_Sans'] font-bold text-base text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span>Explorar Matérias Recentes</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/sobre"
              className="w-full sm:w-auto font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#F7F2EC]/90 hover:text-[#F7F2EC] bg-[#3B0B11]/80 hover:bg-[#3B0B11] border border-[#F7F2EC]/20 px-6 py-4 rounded-xl transition-all text-center"
            >
              Conheça o Manifesto
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE PROVA & LOGOS (Estilo Canastra Logo Bar) */}
      <section className="bg-[#3B0B11] text-[#F7F2EC] py-10 px-4 border-b border-[#F7F2EC]/10">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-6 text-center sm:text-left text-xs sm:text-sm text-[#D4C7BB]">
            <div className="space-y-0.5">
              <strong className="block font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F7F2EC]">
                +14.000
              </strong>
              <span>Executivos e founders no LinkedIn</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#F7F2EC]/10" />
            <div className="space-y-0.5">
              <strong className="block font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#D49B5E]">
                R$ 1.8 Bi+
              </strong>
              <span>Em rodadas de investimento investigadas</span>
            </div>
            <div className="hidden sm:block w-px h-10 bg-[#F7F2EC]/10" />
            <div className="space-y-0.5">
              <strong className="block font-['Plus_Jakarta_Sans'] text-2xl font-extrabold text-[#F7F2EC]">
                100%
              </strong>
              <span>Jornalismo cético e independente</span>
            </div>
          </div>

          {/* Logo Bar of Covered Entities */}
          <div className="pt-6 border-t border-[#F7F2EC]/10 flex flex-wrap items-center justify-center sm:justify-between gap-6 opacity-60 text-xs font-semibold uppercase tracking-widest text-[#D4C7BB]">
            <span>COBERTURA DE ECOSSISTEMA:</span>
            <span>Kaszek</span>
            <span>Monashees</span>
            <span>Canary</span>
            <span>Nexus Fintech</span>
            <span>Vortex Logistics</span>
            <span>Solaris</span>
          </div>
        </div>
      </section>

      {/* 3. BLOCO "O QUE COBRIMOS" (Texto Conciso, Sem Cards) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C77B3F]">
            Escopo Editorial
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1A1210]">
            O Que o The Round Cobre
          </h2>
          <p className="text-base text-[#574F4B] max-w-2xl">
            Sem cobertura corporativa genérica. Nossa equipe concentra apuração exclusiva em quatro frentes do ecossistema nacional:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#1A1210]/10 pt-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
              01. Rodadas & M&A
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#1A1210]">
              Aportes de Estágio Intermediário e Fusões
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Análise de captações de Série A, B e C com termos reais de valuation, múltiplos de ARR, proteções de liquidação e governança pós-aporte.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
              02. Fundos de Venture Capital
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#1A1210]">
              Teses de Alocação e Desdobramento de Capital
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Mapeamento do <i>dry powder</i> acumulado, dinâmicas de chamadas de capital com LPs e taxas de distribuição de retornos (DPI/TVPI).
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
              03. Perfis de Founders
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#1A1210]">
              A Operação Real dos Empreendedores
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Entrevistas aprofundadas com os fundadores à frente de scale-ups brasileiras. O estilo de gestão, a construção do time e os momentos de quase falência.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
              04. Análises & Investigação
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#1A1210]">
              Unit Economics e Reestruturações
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Investigações sobre downrounds silenciosos, inadimplência em fintechs B2B e o impacto das oscilações macroeconômicas na eficiência das startups.
            </p>
          </div>
        </div>
      </section>

      {/* 4. BLOCO "ÚLTIMAS MATÉRIAS" (Curado, Exatamente 3 Cards + CTA para Notícias) */}
      <section className="bg-[#F3F1EC] py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-[#1A1210]/10">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C77B3F] flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#C77B3F]" />
                <span>Arquivo Recente</span>
              </span>
              <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1A1210]">
                Últimas Matérias Publicadas
              </h2>
            </div>

            <Link
              href="/noticias"
              className="inline-flex items-center space-x-2 text-sm font-bold text-[#4C0F16] hover:text-[#C77B3F] transition-colors"
            >
              <span>Ver todas as notícias na aba dedicada</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Curated Article Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {curatedArticles.map((article) => (
              <ArticleCard key={article.id} article={article} variant="standard" />
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/noticias"
              className="inline-flex items-center space-x-2 bg-[#4C0F16] hover:bg-[#3B0B11] text-[#F7F2EC] font-bold text-sm px-8 py-3.5 rounded-xl transition-all shadow-md"
            >
              <span>Acessar a Central Completa de Notícias</span>
              <ArrowRight className="w-4 h-4 text-[#D49B5E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. BLOCO "COMO TRABALHAMOS" (Posicionamento Editorial & Voz) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C77B3F]">
            Linha Editorial
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1A1210]">
            Como Trabalhamos
          </h2>
          <p className="text-base text-[#574F4B]">
            Entenda os pilares jornalísticos que guiam cada apuração do The Round.
          </p>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#1A1210]/10 shadow-sm space-y-8">
          <blockquote className="font-['Plus_Jakarta_Sans'] font-semibold text-xl sm:text-2xl text-[#4C0F16] leading-snug border-l-4 border-[#C77B3F] pl-6">
            "Não cobrimos anúncios de aportes para celebrar cheques no LinkedIn. Cobrimos rodadas para entender se a tese operacional se sustenta quando a poeira baixa."
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm text-[#574F4B]">
            <div className="space-y-1">
              <strong className="text-[#1A1210] font-bold block text-base">Fonte Única do Site</strong>
              <p>Toda matéria é produzida em sua versão integral primeiro no site do The Round antes de gerar pílulas para redes sociais.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1A1210] font-bold block text-base">Zero Releases Reciclados</strong>
              <p>Nenhum texto é copiado de assessorias. Todas as informações são checadas com fontes operacionais e investidores.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1A1210] font-bold block text-base">Independência Comercial</strong>
              <p>Sem conteúdos patrocinados disfarçados de notícia. Nossa única fidelidade é com a precisão dos fatos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA DE LINKEDIN (Estilo Destaque Canastra) */}
      <section className="bg-gradient-to-r from-[#4C0F16] to-[#3B0B11] text-[#F7F2EC] py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-[#F7F2EC]/10">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D49B5E] inline-flex items-center gap-1.5">
              <LinkedInIcon className="w-4 h-4 text-[#D49B5E]" />
              <span>Canal Principal de Distribuição</span>
            </span>
            <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#F7F2EC]">
              Siga o The Round no LinkedIn
            </h3>
            <p className="text-sm text-[#D4C7BB] max-w-xl">
              Receba os alertas de novas investigações e resumos executivos diretamente no seu feed do LinkedIn.
            </p>
          </div>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-[#C77B3F] hover:bg-[#B06930] text-[#F7F2EC] font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg flex-shrink-0 group"
          >
            <LinkedInIcon className="w-5 h-5" />
            <span>Siga Nossa Página</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </section>

      {/* 7. NEWSLETTER BLOCK */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <NewsletterBlock />
      </section>

      <Footer />
    </div>
  );
}
