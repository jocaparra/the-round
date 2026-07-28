"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import ConcentricArcs from "./ConcentricArcs";

export default function NewsletterBlock() {
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
    <section
      id="newsletter"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#4C0F16] via-[#3B0B11] to-[#5A1119] text-[#F7F2EC] p-8 sm:p-12 my-12 border border-[#F7F2EC]/15 shadow-2xl"
    >
      <ConcentricArcs opacity={0.15} center="top-right" />

      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 bg-[#C77B3F]/20 text-[#D49B5E] border border-[#C77B3F]/40 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Mail className="w-3.5 h-3.5" />
          <span>Newsletter Exclusiva do The Round</span>
        </div>

        <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-2xl sm:text-4xl leading-tight tracking-tight text-[#F7F2EC]">
          Jornalismo sobre startups sem press release e sem hype.
        </h2>

        <p className="text-base sm:text-lg text-[#D4C7BB] leading-relaxed max-w-2xl mx-auto">
          Todas as terças e quintas às 07h00, receba as investigações de rodadas, movimentações de fundos de VC e análises frias que a Faria Lima e o ecossistema leem antes de abrir o mercado.
        </p>

        {submitted ? (
          <div className="bg-[#5A1119]/90 border border-[#C77B3F] p-6 rounded-2xl max-w-md mx-auto flex items-center space-x-3 text-left animate-fade-in shadow-lg">
            <CheckCircle2 className="w-8 h-8 text-[#C77B3F] flex-shrink-0" />
            <div>
              <h4 className="font-bold text-base text-[#F7F2EC]">Assinatura confirmada!</h4>
              <p className="text-xs text-[#D4C7BB]">
                Você receberá a próxima edição da newsletter do The Round diretamente na sua caixa de entrada.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 max-w-lg mx-auto pt-2"
          >
            <div className="relative w-full">
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail profissional..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#3B0B11]/90 text-[#F7F2EC] placeholder-[#D4C7BB]/50 px-4 py-3.5 rounded-xl border border-[#F7F2EC]/20 focus:outline-none focus:border-[#C77B3F] transition-all text-sm font-medium"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto font-['Plus_Jakarta_Sans'] font-bold text-sm text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2 flex-shrink-0 disabled:opacity-50"
            >
              <span>{loading ? "Inscrevendo..." : "Inscrever-me"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        <div className="flex items-center justify-center space-x-6 pt-4 text-xs text-[#D4C7BB]/70">
          <span className="flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-[#C77B3F]" />
            <span>Sem spam. Cancele a qualquer momento com 1 clique.</span>
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline font-semibold text-[#F7F2EC]/90">
            +14.200 leitores recorrentes
          </span>
        </div>
      </div>
    </section>
  );
}
