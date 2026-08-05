import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Gavel, Scale, Lock } from 'lucide-react';
import { GlowButton } from './ui/GlowButton';

interface HeroSectionProps {
  onOpenConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenConsultation }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const metrics = [
    { label: 'High-Stakes Verdicts & Settlements', value: '$550M+', icon: <Award className="w-5 h-5 text-amber-400" /> },
    { label: 'Master Trial & Appellate Practice', value: '32+ Years', icon: <Gavel className="w-5 h-5 text-amber-400" /> },
    { label: 'Strategic Case Success Rate', value: '99.2%', icon: <ShieldCheck className="w-5 h-5 text-amber-400" /> },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* 21st.dev Ambient Lighting & Glow Orbs */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Status Pill Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 backdrop-blur-md mb-8 shadow-lg shadow-amber-500/5">
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-200">
              Confidential Attorney-Client Defense
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          </motion.div>

          {/* Staggered Typography Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-100 leading-[1.05]"
          >
            Defending Rights.{' '}
            <span className="block mt-2 gold-text-gradient font-normal italic">
              Engineering Justice.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Senior trial counsel providing unrelenting representation in complex corporate litigation, criminal defense, and high-net-worth legal disputes with total discretion.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <GlowButton
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto"
            >
              Request Confidential Assessment
            </GlowButton>
            <a href="#practice-areas" className="w-full sm:w-auto">
              <GlowButton variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Practice Areas
              </GlowButton>
            </a>
          </motion.div>

          {/* Trust Authority Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium"
          >
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              <span>Supreme Court Admitted</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>AV Preeminent® Rated Attorney</span>
            </div>
            <span className="text-slate-700 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Top 100 Trial Lawyers National Fellow</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 21st.dev Floating Metric Cards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-panel rounded-2xl p-6 relative overflow-hidden group border-slate-800/80 hover:border-amber-500/40"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                <span className="text-xs uppercase font-mono tracking-widest text-slate-500">
                  Verified Metric
                </span>
              </div>
              <div className="font-serif text-4xl sm:text-5xl font-bold text-slate-100 gold-text-gradient">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-slate-400 font-medium">
                {metric.label}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
