"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConcentricArcs from "@/components/ConcentricArcs";
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Star, Users } from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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

      {/* Main Newsletter Hero Capture */}
      <main className="pt-28 pb-20 flex-1 w-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full space-y-12">
          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4C0F16] via-[#3B0B11] to-[#5A1119] text-[#F7F2EC] p-8 sm:p-14 border border-[#F7F2EC]/15 shadow-2xl space-y-8 text-center sm:text-left">
            <ConcentricArcs opacity={0.16} center="top-right" />

            <div className="relative z-10 space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 bg-[#C77B3F]/20 text-[#D49B5E] border border-[#C77B3F]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Mail className="w-3.5 h-3.5" />
                <span>Newsletter Quinzenal & Semanal do The Round</span>
              </div>

              <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl text-[#F7F2EC] leading-tight tracking-tight">
                O briefing que a Faria Lima lê antes de abrir o mercado.
              </h1>

              <p className="text-base sm:text-lg text-[#D4C7BB] leading-relaxed">
                Todas as terças e quintas às 07h00, receba as investigações de rodadas, movimentações de fundos de VC e análises profundas sem filtro.
              </p>
            </div>

            {/* Form Box */}
            <div className="relative z-10 pt-2">
              {submitted ? (
                <div className="bg-[#5A1119] border border-[#C77B3F] p-6 rounded-2xl max-w-lg flex items-center space-x-3 text-left shadow-lg">
                  <CheckCircle2 className="w-8 h-8 text-[#C77B3F] flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-base text-[#F7F2EC]">Inscrição Realizada com Sucesso!</h4>
                    <p className="text-xs text-[#D4C7BB]">
                      Você receberá a próxima edição da newsletter do The Round na sua caixa de entrada.
                    </p>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
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
                <span>Gratuito. Cancele com 1 clique.</span>
              </span>
              <span>•</span>
              <span className="font-semibold text-[#F7F2EC]">
                +14.200 assinantes leitores
              </span>
            </div>
          </div>

          {/* Social Proof Testimonials */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#1A1210]/10 shadow-sm space-y-3">
              <div className="flex items-center space-x-1 text-[#C77B3F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#574F4B] italic leading-relaxed">
                "O The Round é a única newsletter brasileira sobre startups que eu abro na mesma hora em que chega. Conteúdo direto, sem o verniz de assessoria."
              </p>
              <div className="text-xs pt-2 border-t border-[#1A1210]/5">
                <strong className="text-[#1A1210] block font-bold">Sócio-gestor de VC</strong>
                <span className="text-[#857B75]">Faria Lima, São Paulo</span>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#1A1210]/10 shadow-sm space-y-3">
              <div className="flex items-center space-x-1 text-[#C77B3F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm text-[#574F4B] italic leading-relaxed">
                "Essencial para entender a realidade do mercado de capital de risco no Brasil. A leitura ideal antes de qualquer reunião de conselho."
              </p>
              <div className="text-xs pt-2 border-t border-[#1A1210]/5">
                <strong className="text-[#1A1210] block font-bold">Cofundador & CEO</strong>
                <span className="text-[#857B75]">Fintech Série B</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
