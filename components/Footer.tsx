import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Lock } from "lucide-react";
import ConcentricArcs from "./ConcentricArcs";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="relative bg-[#3B0B11] text-[#F7F2EC] border-t border-[#F7F2EC]/10 overflow-hidden pt-16 pb-12">
      <ConcentricArcs opacity={0.08} center="bottom-left" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F7F2EC]/10">
          {/* Column 1: Brand & Positioning (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl tracking-tight text-[#F7F2EC]">
                the round
              </span>
            </Link>
            <p className="text-sm text-[#D4C7BB]/80 leading-relaxed max-w-md">
              Jornal digital brasileiro independente sobre startups de alto crescimento, venture capital e economia de tecnologia. Jornalismo rigoroso, cético por padrão, sem releases corporativos.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold bg-[#4C0F16] hover:bg-[#C77B3F] text-[#F7F2EC] px-3.5 py-2 rounded-lg border border-[#F7F2EC]/15 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-[#D49B5E]" />
                <span>Siga no LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Column 2: Seções (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C77B3F]">
              Seções
            </h4>
            <ul className="space-y-2 text-sm text-[#D4C7BB]/80">
              <li>
                <Link href="/categoria/rodadas" className="hover:text-[#F7F2EC] transition-colors">
                  Rodadas & M&A
                </Link>
              </li>
              <li>
                <Link href="/categoria/fundos" className="hover:text-[#F7F2EC] transition-colors">
                  Fundos de VC
                </Link>
              </li>
              <li>
                <Link href="/categoria/perfis" className="hover:text-[#F7F2EC] transition-colors">
                  Perfis de Founders
                </Link>
              </li>
              <li>
                <Link href="/categoria/analises" className="hover:text-[#F7F2EC] transition-colors">
                  Análises & Investigação
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-[#F7F2EC] transition-colors">
                  Manifesto Editorial
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Redação & Pautas (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C77B3F]">
              Redação
            </h4>
            <ul className="space-y-2 text-sm text-[#D4C7BB]/80">
              <li>
                <Link href="/sobre#equipe" className="hover:text-[#F7F2EC] transition-colors">
                  Equipe Editorial
                </Link>
              </li>
              <li>
                <a href="mailto:redacao@theround.com.br" className="hover:text-[#F7F2EC] transition-colors">
                  Envie uma Pauta
                </a>
              </li>
              <li>
                <a
                  href="/sobre#vazamentos"
                  className="inline-flex items-center space-x-1 text-[#D49B5E] hover:underline"
                >
                  <Lock className="w-3 h-3 text-[#C77B3F]" />
                  <span>Dicas Anônimas</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Fast Signup (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C77B3F]">
              Newsletter Semanal
            </h4>
            <p className="text-xs text-[#D4C7BB]/80 leading-relaxed">
              O briefing essencial da Faria Lima e dos ecossistemas de tecnologia do país.
            </p>
            <a
              href="#newsletter"
              className="inline-block text-xs font-bold text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Assinar Gratuitamente
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D4C7BB]/50 gap-4">
          <p>© {new Date().getFullYear()} The Round Mídia & Jornalismo Ltda. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right max-w-md">
            Veículo independente. O The Round não comercializa análises pagas nem possui vínculo de capital com fundos de venture capital.
          </p>
        </div>
      </div>
    </footer>
  );
}
