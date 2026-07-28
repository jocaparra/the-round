import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConcentricArcs from "@/components/ConcentricArcs";
import NewsletterBlock from "@/components/NewsletterBlock";
import LinkedInIcon from "@/components/LinkedInIcon";
import { ShieldCheck, Target, Award, Lock, Mail, ArrowUpRight } from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Rodrigo Mendonça",
      role: "Editor-Chefe & Co-fundador",
      bio: "Ex-Valor Econômico e Ex-Bloomberg. Cobertura de venture capital e private equity há mais de 10 anos.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Guilherme Siqueira",
      role: "Editor de Investigações & M&A",
      bio: "Especialista em unit economics, direito societário e reestruturações de cap tables complexos.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Camila Paes",
      role: "Repórter Especial de Perfis",
      bio: "Dedicada a contar a história real dos founders antes e depois da captação de cheques institucionais.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Lucas Vasconcelos",
      role: "Analista de Dados & Infografia",
      bio: "Responsável por mapear a liquidez real de fundos de VC e múltiplos de valuation na América Latina.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#1A1210]">
      <Header />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-[#4C0F16] via-[#3B0B11] to-[#5A1119] text-[#F7F2EC] pt-28 pb-20 px-4 sm:px-6 lg:px-8 border-b border-[#F7F2EC]/10 overflow-hidden">
        <ConcentricArcs opacity={0.15} center="top-right" />

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D49B5E] bg-[#3B0B11] px-4 py-1.5 rounded-full border border-[#F7F2EC]/15 inline-block">
            Manifesto Editorial
          </span>

          <h1 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#F7F2EC] tracking-tight leading-tight">
            Growth story, não victory lap.
          </h1>

          <p className="text-lg sm:text-xl text-[#D4C7BB] leading-relaxed max-w-3xl mx-auto font-normal">
            O <strong>The Round</strong> nasceu para cobrir o ecossistema brasileiro de tecnologia com o ceticismo profissional que um mercado adulto exige. Sem press release reciclado, sem comemorações ingênuas de aportes.
          </p>
        </div>
      </section>

      {/* Core Editorial Values */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex-1 w-full space-y-20">
        {/* Section 1: The Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-[#1A1210]/10 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#4C0F16] text-[#F7F2EC] flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-xl text-[#4C0F16]">
              Cético por Padrão
            </h3>
            <p className="text-sm text-[#574F4B] leading-relaxed">
              Valorizamos o empreendedorismo real, mas questionamos narrativas fabulosas. Todo número citado no The Round é checado contra dados operacionais e fontes cruzadas.
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
              Não vendemos reportagens pagas nem possuímos cotas em fundos de venture capital. Nossa única obrigação financeira é com nossos leitores e assinantes.
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
              O valuation de hoje só importa se a margem de amanhã existir. Olhamos para a eficiência de capital com a mesma atenção dedicada ao crescimento de receita.
            </p>
          </div>
        </section>

        {/* Section 2: Team Grid */}
        <section id="equipe" className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl text-[#1A1210]">
              Quem Faz o The Round
            </h2>
            <p className="text-sm text-[#574F4B]">
              Jornalistas e analistas com bagagem no mercado financeiro e nas principais redações do país.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-[#1A1210]/10 p-5 text-center space-y-3 hover:shadow-md transition-shadow"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-2 border-[#4C0F16]/20 shadow-sm"
                />
                <div>
                  <h4 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-[#1A1210]">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#C77B3F] font-semibold mt-0.5">{member.role}</p>
                </div>
                <p className="text-xs text-[#574F4B] leading-relaxed pt-1 border-t border-[#1A1210]/5">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Whistleblower / Anonymous Tip Line */}
        <section id="vazamentos" className="p-8 sm:p-12 bg-[#4C0F16] text-[#F7F2EC] rounded-3xl relative overflow-hidden border border-[#F7F2EC]/15 shadow-xl">
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
                Garantimos o sigilo absoluto da fonte jornalística nos termos do Artigo 5º, XIV da Constituição Federal. Sua identidade nunca será revelada.
              </p>
            </div>

            <div className="md:col-span-4 flex flex-col space-y-3">
              <a
                href="mailto:pautas@theround.com.br"
                className="w-full text-center bg-[#C77B3F] hover:bg-[#B06930] text-[#F7F2EC] font-bold text-sm py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center space-x-2"
              >
                <Mail className="w-4 h-4" />
                <span>pautas@theround.com.br</span>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[#3B0B11] hover:bg-[#5A1119] text-[#F7F2EC] font-semibold text-xs py-2.5 px-4 rounded-xl border border-[#F7F2EC]/15 transition-all flex items-center justify-center space-x-2"
              >
                <LinkedInIcon className="w-3.5 h-3.5 text-[#D49B5E]" />
                <span>Contato via LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        <NewsletterBlock />
      </main>

      <Footer />
    </div>
  );
}
