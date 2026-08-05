import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Scale, Landmark, ShieldCheck, CheckCircle } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';

export const AboutSection: React.FC = () => {
  const credentials = [
    {
      title: 'Harvard Law School',
      detail: 'Juris Doctor (J.D.), Magna Cum Laude • Executive Law Review Editor',
      icon: <BookOpen className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'AV Preeminent® Highest Rating',
      detail: 'Highest Peer Rating for Legal Ability & Ethical Excellence (20+ Years)',
      icon: <ShieldCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'U.S. Supreme Court Bar',
      detail: 'Admitted to Practice before the U.S. Supreme Court & 2nd/9th Circuits',
      icon: <Landmark className="w-5 h-5 text-amber-400" />,
    },
    {
      title: 'Trial Lawyers College Fellow',
      detail: 'Executive Board Member, American College of Trial Lawyers',
      icon: <Award className="w-5 h-5 text-amber-400" />,
    },
  ];

  const timeline = [
    {
      year: '1992',
      title: 'Harvard Law Honors Graduate',
      description: 'Graduated Magna Cum Laude from Harvard Law School; clerked for Federal District Court Judge.',
    },
    {
      year: '2001',
      title: 'Landmark Securities Precedent',
      description: 'Secured total dismissal in $300M SEC enforcement trial, setting federal precedent for corporate officer immunity.',
    },
    {
      year: '2012',
      title: 'Founding Senior Partner',
      description: 'Established Valle & Associates as a premier boutique trial defense practice for high-stakes litigation.',
    },
    {
      year: '2023',
      title: '$180M Corporate Recovery',
      description: 'Lead trial counsel in multi-district antitrust litigation resulting in record $180M recovery.',
    },
  ];

  return (
    <section id="about" className="py-28 relative bg-slate-900/60 overflow-hidden">
      {/* Glow shapes */}
      <div className="pointer-events-none absolute top-1/3 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Authority Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow Border */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-amber-500/30 via-transparent to-blue-500/20 blur-xl" />

              <div className="relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 p-3 shadow-2xl">
                {/* SVG High-Tech Attorney Profile Graphic / Mock Portrait */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 flex flex-col justify-between p-8 border border-slate-800">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-lg bg-amber-500/20 border border-amber-500/30 text-amber-400">
                      <Scale className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 px-3 py-1 rounded-full bg-slate-900 border border-amber-500/30">
                      Master Counsel
                    </span>
                  </div>

                  <div className="my-auto text-center py-8">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1 shadow-lg shadow-amber-500/20 mb-4">
                      <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center font-serif text-3xl font-bold text-amber-400">
                        JV
                      </div>
                    </div>
                    <div className="font-serif text-2xl font-bold text-slate-100">
                      Jesse Valle, Esq.
                    </div>
                    <div className="text-xs text-amber-400 font-semibold tracking-wider uppercase mt-1">
                      Managing Trial Partner
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800/80 backdrop-blur-md">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-400">Courtroom Trial Hours</span>
                      <span className="font-mono font-bold text-amber-400">12,500+ Hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4">
              Authority & Credentials
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-100">
              Unrivaled Legal Experience.{' '}
              <span className="block gold-text-gradient italic">Uncompromising Integrity.</span>
            </h2>
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              With over three decades of trial experience in federal and state courts across the nation, Jesse Valle has earned a reputation for formidable courtroom strategy, razor-sharp analytical precision, and ironclad client discretion.
            </p>

            {/* Credentials Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((cred, idx) => (
                <SpotlightCard key={idx} className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 shrink-0">
                      {cred.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-100">{cred.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">{cred.detail}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll-Triggered Career Timeline */}
        <div className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-100">
              Career Milestones & Precedents
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              A decades-long legacy of landmark verdicts and legal triumphs.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical glowing beam line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-amber-500/20 via-amber-500/60 to-transparent hidden md:block" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <SpotlightCard className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-mono text-sm font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
                          {item.year}
                        </span>
                        <CheckCircle className="w-4 h-4 text-emerald-400" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-slate-100 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </SpotlightCard>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 hidden md:flex items-center justify-center w-8 h-8 rounded-full bg-slate-950 border-2 border-amber-500 shadow-lg shadow-amber-500/50">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  </div>

                  <div className="w-full md:w-1/2 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
