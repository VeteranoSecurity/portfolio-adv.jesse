import { ArrowUpRight, MessageCircle, Mail, ShieldCheck, Scale, Award, MapPin, Share2, Video } from 'lucide-react';
import foto2 from '@/assets/Foto 2.png';

export default function ProfileInsight() {
  return (
    <section id="insight" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Bio & Core Competencies */}
          <div className="lg:col-span-7 space-y-8">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono tracking-widest uppercase text-neutral-300">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>PERFIL PROFISSIONAL</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight font-serif">
              Jesse Marques, Advogado Criminalista & Especialista em Direito Penal
            </h2>

            {/* Main Description */}
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-sans">
              Advogado com atuação técnica e estratégica em todas as etapas do processo penal, destacando-se pela defesa criminal pautada em profundo conhecimento do Direito Penal e Processual Penal.
            </p>

            {/* Insight Boxes Grid */}
            <div className="space-y-4 pt-2">
              {/* Box 1: Competências Principais */}
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/40 transition-colors">
                <div className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold mb-2 flex items-center gap-2">
                  <Scale className="w-4 h-4 text-amber-400" />
                  <span>COMPETÊNCIAS PRINCIPAIS</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  • Defesa em ações penais<br />
                  • Tribunal do Júri<br />
                  • Execução penal e interposição de recursos aos Tribunais Superiores<br />
                  • Análise minuciosa de provas e identificação técnica de nulidades processuais
                </p>
              </div>

              {/* Box 2: Especialização & Psicologia Forense */}
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/40 transition-colors">
                <div className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>ESPECIALIZAÇÃO & ABORDAGEM INTERDISCIPLINAR</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  Especialista em Direito Penal e pós-graduando em Psicologia Forense, com abordagem interdisciplinar voltada à aplicação prática do conhecimento jurídico e psicológico na defesa dos direitos individuais.
                </p>
              </div>

              {/* Box 3: Abrangência & Atendimento */}
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/40 transition-colors">
                <div className="text-xs uppercase font-mono tracking-widest text-neutral-400 font-bold mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>ABRANGÊNCIA NACIONAL</span>
                </div>
                <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                  Estamos em Brasília/DF atendendo em todo o território nacional. Advocacia Criminal sem fronteiras.
                </p>
              </div>
            </div>

            {/* Bottom CTA Pill Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/5561984203515?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20confidencial."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between px-8 py-4 rounded-full bg-white text-black font-bold text-sm tracking-wider uppercase hover:bg-amber-400 transition-all duration-300 shadow-xl cursor-pointer group"
              >
                <span>AGENDAR CONSULTA CONFIDENCIAL</span>
                <ArrowUpRight className="w-5 h-5 ml-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Casper Lightman Style Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-neutral-950 border border-neutral-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Top Ambient Glow */}
              <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />

              {/* Avatar Section */}
              <div className="flex flex-col items-center text-center relative z-10 mb-8">
                <div className="relative w-36 h-36 rounded-full overflow-hidden p-1 bg-gradient-to-tr from-amber-500 via-amber-600 to-yellow-400 shadow-2xl mb-6">
                  <img
                    src={foto2}
                    alt="Jesse Marques"
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Jesse Marques
                </h3>
                <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mt-1 font-semibold">
                  ADVOGADO CRIMINALISTA • PSICOLOGIA FORENSE
                </div>

                <p className="text-xs text-neutral-400 mt-4 leading-relaxed max-w-sm font-sans">
                  Atuação técnica e estratégica voltada à defesa irrestrita dos direitos individuais e garantias constitucionais.
                </p>
              </div>

              {/* Social / Contact Links List */}
              <div className="space-y-3 relative z-10">
                {/* WhatsApp Link */}
                <a
                  href="https://wa.me/5561982573590?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20jur%C3%ADdico%20criminal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        WhatsApp Urgente
                      </div>
                      <div className="text-xs text-neutral-400">+55 (61) 98420-3515</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Instagram Link */}
                <a
                  href="https://www.instagram.com/dr.jesse_marques_matos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        Instagram
                      </div>
                      <div className="text-xs text-neutral-400">@dr.jesse_marques_matos</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* TikTok Link */}
                <a
                  href="https://www.tiktok.com/@dr.jesse_marques_matos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        TikTok
                      </div>
                      <div className="text-xs text-neutral-400">@dr.jesse_marques_matos</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Email Link */}
                <a
                  href="mailto:jesse.marques@advdf.com.br"
                  className="flex items-center justify-between p-4 rounded-xl bg-neutral-900/90 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900 transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-amber-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                        E-mail Direto
                      </div>
                      <div className="text-xs text-neutral-400">jesse.marques@advdf.com.br</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
