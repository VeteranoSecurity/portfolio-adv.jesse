import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Building2, ShieldAlert, Cpu, Landmark, Sparkles, ChevronRight, X, CheckCircle2, PhoneCall } from 'lucide-react';
import { SpotlightCard } from './ui/SpotlightCard';
import { GlowButton } from './ui/GlowButton';

interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  highlights: string[];
  caseTypes: string[];
  trackRecord: string;
}

interface PracticeAreasProps {
  onSelectPractice?: (practice: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  const practices: PracticeArea[] = [
    {
      id: 'corporate',
      title: 'Corporate Litigation & Mergers',
      subtitle: 'Boardroom & Shareholder Disputes',
      description:
        'Decisive representation in high-stakes corporate disputes, breach of fiduciary duty litigation, derivative lawsuits, and cross-border M&A conflicts.',
      icon: <Building2 className="w-6 h-6 text-amber-400" />,
      highlights: [
        'Hostile Takeover & Shareholder Defense',
        'Breach of Fiduciary Duty Litigation',
        'International Arbitrations & Joint Ventures',
      ],
      caseTypes: ['M&A Disputes', 'Securities Fraud', 'Partnership Dissolution'],
      trackRecord: '$180M Settlement Secured for Fortune 500 Board',
    },
    {
      id: 'white-collar',
      title: 'White-Collar & Government Defense',
      subtitle: 'Federal & Regulatory Investigations',
      description:
        'Aggressive defense before the DOJ, SEC, FINRA, and federal grand juries. Specialized in financial crimes, FCPA violations, and antitrust allegations.',
      icon: <ShieldAlert className="w-6 h-6 text-amber-400" />,
      highlights: [
        'DOJ & SEC Grand Jury Subpoena Response',
        'FCPA & International Trade Enforcement',
        'Insider Trading & Financial Fraud Defense',
      ],
      caseTypes: ['SEC Enforcement', 'Tax & Treasury Investigations', 'RICO Allegations'],
      trackRecord: 'Complete Dismissal of Federal Indictment in 2024',
    },
    {
      id: 'ip-tech',
      title: 'Intellectual Property & Emerging Tech',
      subtitle: 'Patents, AI & Trade Secrets',
      description:
        'Protecting high-value intellectual assets, patent portfolio litigation, AI technology rights, and trade secret misappropriation claims.',
      icon: <Cpu className="w-6 h-6 text-amber-400" />,
      highlights: [
        'Multi-District Patent Infringement Trials',
        'Trade Secret Theft & Non-Compete Injunctions',
        'AI Copyright & Emerging Tech Governance',
      ],
      caseTypes: ['ITC Section 337 Actions', 'Software Patent Disputes', 'Biotech IP'],
      trackRecord: '$75M Jury Verdict in Federal Patent Infringement Action',
    },
    {
      id: 'wealth-estate',
      title: 'High-Net-Worth Estate & Asset Security',
      subtitle: 'Private Wealth & Trust Litigation',
      description:
        'Sophisticated asset protection strategies, complex probate disputes, trustee litigation, and wealth transfer security for high-net-worth families.',
      icon: <Landmark className="w-6 h-6 text-amber-400" />,
      highlights: [
        'Offshore & Domestic Trust Structuring',
        'Contested Probate & Will Litigation',
        'Family Office Governance & Asset Shields',
      ],
      caseTypes: ['Trustee Fiduciary Breach', 'Multi-Jurisdiction Estates', 'Tax Defense'],
      trackRecord: 'Successfully Defended $220M Family Estate Structure',
    },
    {
      id: 'constitutional',
      title: 'Appellate & Constitutional Advocacy',
      subtitle: 'Supreme Court & Federal Appeals',
      description:
        'Formidable appellate advocacy before Federal Circuit Courts and the U.S. Supreme Court, shaping legal precedents and constitutional jurisprudence.',
      icon: <Briefcase className="w-6 h-6 text-amber-400" />,
      highlights: [
        'U.S. Supreme Court Writs of Certiorari',
        'En Banc Circuit Court Rehearings',
        'Amicus Curiae Briefing & Strategy',
      ],
      caseTypes: ['Constitutional Due Process', 'Administrative Law Precedents', 'Federal Appeals'],
      trackRecord: '3 Landmark Precedents Established in Circuit Court',
    },
    {
      id: 'crisis-mgmt',
      title: 'Crisis Management & Executive Defense',
      subtitle: 'Immediate Reputation & Legal Shield',
      description:
        'Rapid-response legal mitigation for C-suite executives facing public allegations, congressional inquiries, and immediate regulatory crises.',
      icon: <Sparkles className="w-6 h-6 text-amber-400" />,
      highlights: [
        'Congressional Inquiry Preparedness',
        'C-Suite Reputation & Press Shielding',
        'Internal Corporate Special Committee Investigations',
      ],
      caseTypes: ['Whistleblower Defense', 'Congressional Subpoenas', 'Media Crises'],
      trackRecord: '100% Confidential Resolution Rate in C-Level Matters',
    },
  ];

  return (
    <section id="practice-areas" className="py-28 relative bg-slate-950/80">
      {/* Background radial highlight */}
      <div className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Core Specialties
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100"
          >
            Specialized Legal Practice Areas
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            Delivering unyielding advocacy across complex litigation sectors. Click any area to examine case methodologies and defense strategies.
          </motion.p>
        </div>

        {/* 21st.dev Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((practice, idx) => (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <SpotlightCard
                className="h-full flex flex-col justify-between cursor-pointer group"
                onClick={() => setSelectedPractice(practice)}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-amber-400 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-all">
                      {practice.icon}
                    </div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500 group-hover:text-amber-400/80 transition-colors">
                      {practice.subtitle}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-2xl font-bold text-slate-100 group-hover:text-amber-300 transition-colors mb-3">
                    {practice.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-3 leading-relaxed mb-6">
                    {practice.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {practice.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer CTA */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-400 group-hover:underline flex items-center gap-1">
                    Analyze Defense Strategy
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-slate-400 group-hover:text-slate-950 group-hover:bg-amber-400 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Practice Detail Interactive Modal */}
      <AnimatePresence>
        {selectedPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPractice(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-2xl bg-slate-900 border border-amber-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-auto"
            >
              <button
                onClick={() => setSelectedPractice(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
                  {selectedPractice.icon}
                </div>
                <div>
                  <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
                    {selectedPractice.subtitle}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-100">
                    {selectedPractice.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedPractice.description}
              </p>

              {/* Track Record Callout */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 mb-6">
                <div className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-semibold">
                  Key Track Record Highlight
                </div>
                <div className="text-base font-bold text-slate-100 mt-1">
                  {selectedPractice.trackRecord}
                </div>
              </div>

              {/* Key Defense Pillars */}
              <div className="mb-6">
                <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-3 font-semibold">
                  Core Defense Pillars
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedPractice.highlights.map((hl, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-slate-800">
                <GlowButton
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto"
                  icon={<PhoneCall className="w-4 h-4" />}
                  onClick={() => {
                    const practiceName = selectedPractice.title;
                    setSelectedPractice(null);
                    onSelectPractice?.(practiceName);
                  }}
                >
                  Request Consultation For This Specialty
                </GlowButton>
                <GlowButton
                  variant="ghost"
                  size="md"
                  className="w-full sm:w-auto"
                  onClick={() => setSelectedPractice(null)}
                >
                  Close Detail
                </GlowButton>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
