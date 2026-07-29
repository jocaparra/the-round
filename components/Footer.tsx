import React from "react";
import { Mail, ArrowUpRight, Lock } from "lucide-react";
import ConcentricArcs from "./ConcentricArcs";
import LinkedInIcon from "./LinkedInIcon";

export default function Footer() {
  return (
    <footer className="relative bg-[#3B0B11] text-[#F7F2EC] border-t border-[#F7F2EC]/10 overflow-hidden pt-16 pb-12">
      <ConcentricArcs opacity={0.08} center="bottom-left" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#F7F2EC]/10">
          {/* Column 1: Brand & Positioning (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="inline-block">
              <span className="font-['Plus_Jakarta_Sans'] font-extrabold text-3xl tracking-tight text-[#F7F2EC]">
                the round
              </span>
            </a>
            <p className="text-sm text-[#D4C7BB]/80 leading-relaxed max-w-md">
              Jornal digital brasileiro sobre startups de alto crescimento, venture capital e o ecossistema de tecnologia. Cobertura cética por padrão, sem releases corporativos.
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

          {/* Column 2: Navegação (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C77B3F]">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#D4C7BB]/80">
              <li>
                <a href="#sobre" className="hover:text-[#F7F2EC] transition-colors">
                  O Jornal
                </a>
              </li>
              <li>
                <a href="#escopo" className="hover:text-[#F7F2EC] transition-colors">
                  O Que Cobrimos
                </a>
              </li>
              <li>
                <a href="#linha-editorial" className="hover:text-[#F7F2EC] transition-colors">
                  Linha Editorial
                </a>
              </li>
              <li>
                <a href="#newsletter" className="hover:text-[#F7F2EC] transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Pautas Anônimas (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C77B3F]">
              Pautas
            </h4>
            <ul className="space-y-2 text-sm text-[#D4C7BB]/80">
              <li>
                <a href="mailto:pautas@theround.com.br" className="hover:text-[#F7F2EC] transition-colors">
                  Envie uma Pauta
                </a>
              </li>
              <li>
                <a
                  href="#vazamentos"
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
              Newsletter
            </h4>
            <p className="text-xs text-[#D4C7BB]/80 leading-relaxed">
              O briefing que a Faria Lima e os founders leem antes de abrir o mercado.
            </p>
            <a
              href="#newsletter"
              className="inline-block text-xs font-bold text-[#F7F2EC] bg-[#C77B3F] hover:bg-[#B06930] px-4 py-2.5 rounded-lg transition-colors w-full text-center"
            >
              Assinar Newsletter
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D4C7BB]/50 gap-4">
          <p>© {new Date().getFullYear()} The Round Mídia & Jornalismo Ltda. Todos os direitos reservados.</p>
          <p className="text-center sm:text-right max-w-md">
            Veículo de jornalismo independente e anônimo. O The Round não comercializa análises pagas nem possui vínculo com fundos de venture capital.
          </p>
        </div>
      </div>
    </footer>
  );
}
