"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConcentricArcs from "@/components/ConcentricArcs";
import LinkedInIcon from "@/components/LinkedInIcon";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Mail,
} from "lucide-react";

export default function SinglePageHome() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail("");
    }, 800);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1210]">
      <Header />

      {/* 1. HERO INSTITUCIONAL (Estilo Canary / Canastra - Clean & Minimal) */}
      <section className="relative bg-gradient-to-br from-[#4C0F16] via-[#3B0B11] to-[#5A1119] text-[#F7F2EC] pt-32 sm:pt-40 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 border-b border-[#F7F2EC]/10 overflow-hidden">
        <ConcentricArcs opacity={0.16} center="top-right" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-8 text-center sm:text-left">
          {/* Top Tagline Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#3B0B11]/90 text-[#D49B5E] border border-[#F7F2EC]/15 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-[#C77B3F] animate-pulse" />
            <span>Jornal Digital Independente</span>
          </div>

          {/* Canary-style Wordplay Headline */}
          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#F7F2EC] tracking-tight leading-[1.1]">
            A rodada antes da rodada. <br className="hidden sm:inline" />
            <span className="text-[#D49B5E]">A cobertura de quem ainda está construindo.</span>
          </h1>

          {/* Concise Institutional Statement */}
          <p className="text-lg sm:text-2xl text-[#D4C7BB] leading-relaxed max-w-3xl font-normal">
            O <strong>The Round</strong> investiga startups brasileiras de alto crescimento, fundos de venture capital e os bastidores de tecnologia no Brasil. Cético por padrão, sem releases corporativos.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <a
              href="#newsletter"
              className="w-full sm:w-auto font-['Plus_Jakarta_Sans'] font-bold text-base text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-8 py-4 rounded-xl transition-all shadow-lg flex items-center justify-center space-x-2 group"
            >
              <span>Assinar Newsletter</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#sobre"
              className="w-full sm:w-auto font-['Plus_Jakarta_Sans'] font-semibold text-sm text-[#F7F2EC]/90 hover:text-[#F7F2EC] bg-[#3B0B11]/80 hover:bg-[#3B0B11] border border-[#F7F2EC]/20 px-6 py-4 rounded-xl transition-all text-center"
            >
              Conheça o Jornal
            </a>
          </div>
        </div>
      </section>

      {/* 2. BARRA DE PROVA & LOGOS (Sleek Metrics Bar) */}
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

          {/* Logo Bar */}
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

      {/* 3. SEÇÃO: O QUE É O THE ROUND (#sobre) */}
      <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        <div className="space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C77B3F]">
            Posicionamento Institucional
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl text-[#1A1210]">
            Growth story, não victory lap.
          </h2>
          <p className="text-lg text-[#574F4B] leading-relaxed">
            Não somos um fundo de venture capital nem uma agência de relações públicas. O <strong>The Round</strong> é o veículo jornalístico criado para cobrir a economia de tecnologia no Brasil com sobriedade e independência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-[#1A1210]/10 pt-8">
          <div className="p-6 bg-white rounded-2xl border border-[#1A1210]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#4C0F16] text-[#F7F2EC] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#4C0F16]">
              Cético por Padrão
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Questionamos narrativas ufanistas. Todo dado citado no The Round é checado contra métricas operacionais e fontes cruzadas.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#1A1210]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#4C0F16] text-[#F7F2EC] flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#4C0F16]">
              Independência de Capital
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Não vendemos matérias pagas nem temos participação em fundos de VC. Nossa fidelidade é com a precisão dos fatos.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#1A1210]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#4C0F16] text-[#F7F2EC] flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#4C0F16]">
              Foco em Unit Economics
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Valuation é vaidade, margem é sanidade. Investigamos a eficiência operacional das empresas além do valor teórico dos aportes.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SEÇÃO: O QUE COBRIMOS (#escopo) - Clean Grid */}
      <section id="escopo" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F3F1EC] border-t border-b border-[#1A1210]/10">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C77B3F]">
              Escopo Editorial
            </span>
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1A1210]">
              O Que Cobrimos
            </h2>
            <p className="text-base text-[#574F4B] max-w-2xl">
              Nossa equipe concentra apuração exclusiva em quatro frentes do ecossistema de tecnologia:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1A1210]/10 space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
                01. Rodadas & M&A
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg sm:text-xl text-[#1A1210]">
                Aportes de Estágio Intermediário e Fusões
              </h3>
              <p className="text-sm text-[#574F4B] leading-relaxed">
                Termos reais de valuation, múltiplos de ARR, liquidação preferencial e governança pós-aporte em Série A, B e C.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1A1210]/10 space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
                02. Fundos de Venture Capital
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg sm:text-xl text-[#1A1210]">
                Teses de Alocação e Desdobramento de Capital
              </h3>
              <p className="text-sm text-[#574F4B] leading-relaxed">
                Mapeamento de <i>dry powder</i>, chamadas de capital com LPs e taxas reais de retorno distribuído (DPI/TVPI).
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1A1210]/10 space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
                03. Perfis de Founders
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg sm:text-xl text-[#1A1210]">
                A Operação Real dos Empreendedores
              </h3>
              <p className="text-sm text-[#574F4B] leading-relaxed">
                A trajetória sem glamour, o estilo de gestão e a realidade dos founders à frente de scale-ups brasileiras.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#1A1210]/10 space-y-2 shadow-sm">
              <span className="text-xs font-bold text-[#4C0F16] uppercase tracking-wider block">
                04. Análises & Investigação
              </span>
              <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-lg sm:text-xl text-[#1A1210]">
                Unit Economics e Reestruturações
              </h3>
              <p className="text-sm text-[#574F4B] leading-relaxed">
                Downrounds silenciosos, inadimplência em crédito B2B e ajustes de eficiência do mercado de tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SEÇÃO: COMO TRABALHAMOS (#linha-editorial) */}
      <section id="linha-editorial" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C77B3F]">
            Linha Editorial
          </span>
          <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-4xl text-[#1A1210]">
            Como Trabalhamos
          </h2>
        </div>

        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#1A1210]/10 shadow-sm space-y-8">
          <blockquote className="font-['Plus_Jakarta_Sans'] font-semibold text-xl sm:text-2xl text-[#4C0F16] leading-snug border-l-4 border-[#C77B3F] pl-6">
            "Não cobrimos anúncios de aportes para celebrar cheques no LinkedIn. Cobrimos rodadas para entender se a tese operacional se sustenta quando a poeira baixa."
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs sm:text-sm text-[#574F4B]">
            <div className="space-y-1">
              <strong className="text-[#1A1210] font-bold block text-base">Fonte Única no LinkedIn</strong>
              <p>O site é a matriz das matérias e o LinkedIn é nosso canal primário de distribuição direta.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1A1210] font-bold block text-base">Zero Releases Reciclados</strong>
              <p>Todas as informações são checadas com fontes operacionais e investidores.</p>
            </div>
            <div className="space-y-1">
              <strong className="text-[#1A1210] font-bold block text-base">Autoria Anônima</strong>
              <p>Conselho editorial independente focado 100% na veracidade dos fatos apurados.</p>
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
              Acompanhe as investigações, resumos executivos e novidades direto no seu feed.
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

      {/* 7. CAPTURA DE NEWSLETTER (#newsletter) */}
      <section id="newsletter" className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4C0F16] via-[#3B0B11] to-[#5A1119] text-[#F7F2EC] p-8 sm:p-14 border border-[#F7F2EC]/15 shadow-2xl space-y-8 text-center sm:text-left">
          <ConcentricArcs opacity={0.16} center="top-right" />

          <div className="relative z-10 space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2 bg-[#C77B3F]/20 text-[#D49B5E] border border-[#C77B3F]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Mail className="w-3.5 h-3.5" />
              <span>Newsletter Exclusiva do The Round</span>
            </div>

            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl text-[#F7F2EC] leading-tight tracking-tight">
              O briefing que a Faria Lima e os founders leem antes de abrir o mercado.
            </h2>

            <p className="text-base sm:text-lg text-[#D4C7BB] leading-relaxed">
              Todas as terças e quintas às 07h00, receba os bastidores de rodadas, movimentações de fundos de VC e análises do ecossistema.
            </p>
          </div>

          {/* Form */}
          <div className="relative z-10 pt-2">
            {submitted ? (
              <div className="bg-[#5A1119] border border-[#C77B3F] p-6 rounded-2xl max-w-lg flex items-center space-x-3 text-left shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-[#C77B3F] flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-base text-[#F7F2EC]">Inscrição Realizada com Sucesso!</h4>
                  <p className="text-xs text-[#D4C7BB]">
                    Você receberá a próxima edição da newsletter do The Round diretamente no seu e-mail.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row items-center gap-3 max-w-xl"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    required
                    placeholder="Digite seu melhor e-mail profissional..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#3B0B11]/90 text-[#F7F2EC] placeholder-[#D4C7BB]/50 px-4 py-4 rounded-xl border border-[#F7F2EC]/20 focus:outline-none focus:border-[#C77B3F] transition-all text-sm font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-8 py-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 flex-shrink-0 disabled:opacity-50"
                >
                  <span>{loading ? "Processando..." : "Assinar Agora"}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-6 pt-4 text-xs text-[#D4C7BB]/80 border-t border-[#F7F2EC]/10">
            <span className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C77B3F]" />
              <span>Sem spam. Cancele quando quiser com 1 clique.</span>
            </span>
            <span>•</span>
            <span className="font-semibold text-[#F7F2EC]">
              +14.200 leitores inscritos
            </span>
          </div>
        </div>
      </section>

      {/* 8. CANAL SEGURO DE PAUTAS ANÔNIMAS (#vazamentos) */}
      <section id="vazamentos" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
        <div className="p-8 sm:p-12 bg-[#4C0F16] text-[#F7F2EC] rounded-3xl relative overflow-hidden border border-[#F7F2EC]/15 shadow-xl">
          <ConcentricArcs opacity={0.12} center="bottom-left" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-[#C77B3F]/20 text-[#D49B5E] px-3 py-1 rounded-full text-xs font-bold border border-[#C77B3F]/40">
                <Lock className="w-3.5 h-3.5" />
                <span>Canal Seguro & Anônimo</span>
              </div>
              <h3 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-3xl text-[#F7F2EC]">
                Tem uma pauta, term sheet ou documento confidencial?
              </h3>
              <p className="text-sm sm:text-base text-[#D4C7BB] leading-relaxed">
                Garantimos o sigilo absoluto da fonte jornalística nos termos do Artigo 5º, XIV da Constituição Federal. Sua identidade nunca será divulgada.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col space-y-3">
              <a
                href="mailto:pautas@theround.com.br"
                className="w-full text-center bg-[#C77B3F] hover:bg-[#B06930] text-[#F7F2EC] font-bold text-sm py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>pautas@theround.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
