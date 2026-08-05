import React from 'react';
import { Scale, ShieldCheck, Lock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSectionScroll = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-neutral-900 pt-16 pb-12 relative text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <Scale className="w-5 h-5" />
              </div>
              <span className="font-serif text-lg font-bold text-white tracking-wide">
                JESSE MARQUES
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              Advocacia Criminal técnica e estratégica em Brasília/DF e todo o território nacional.
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[10px] uppercase tracking-widest text-amber-400 font-mono">
              <Lock className="w-3 h-3" />
              <span>Sigilo Profissional</span>
            </div>
          </div>

          {/* Col 2: Áreas de Atuação */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-semibold mb-4">
              Áreas de Atuação
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li><a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-amber-400 transition-colors">Defesa em Ações Penais</a></li>
              <li><a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-amber-400 transition-colors">Tribunal do Júri</a></li>
              <li><a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-amber-400 transition-colors">Execução Penal & Recursos</a></li>
              <li><a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-amber-400 transition-colors">Análise de Provas & Nulidades</a></li>
              <li><a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-amber-400 transition-colors">Psicologia Forense Interdisciplinar</a></li>
            </ul>
          </div>

          {/* Col 3: Ética & Isenção */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-semibold mb-4">
              Ética & Transparência
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              As informações neste site têm caráter exclusivamente informativo, pautando-se pelo Código de Ética e Disciplina da OAB.
            </p>
          </div>

          {/* Col 4: Sede & Voltar ao Topo */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-semibold mb-4">
                Sede & Abrangência
              </h4>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Brasília/DF • Atendimento Nacional</span>
              </div>
            </div>

            <div className="mt-6 md:mt-0">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 hover:text-amber-400 hover:border-amber-500/40 transition-all cursor-pointer"
              >
                <span>Voltar ao Topo</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div>
            © {new Date().getFullYear()} Jesse Marques Advocacia Criminal. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-neutral-400">Política de Privacidade</a>
            <span>•</span>
            <a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-neutral-400">Termos de Uso</a>
            <span>•</span>
            <a href="#insight" onClick={(e) => handleSectionScroll(e, 'insight')} className="hover:text-neutral-400">OAB/DF</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
