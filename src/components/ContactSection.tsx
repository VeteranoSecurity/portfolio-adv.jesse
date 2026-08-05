import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MessageSquare, ShieldCheck, CheckCircle2, Send, Lock, Clock, MapPin } from 'lucide-react';
import { AnimatedInput, AnimatedTextArea } from './ui/AnimatedInput';
import { GlowButton } from './ui/GlowButton';
import { SpotlightCard } from './ui/SpotlightCard';

interface ContactSectionProps {
  initialPractice?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialPractice }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    practiceArea: initialPractice || 'Corporate Litigation & Mergers',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const practiceOptions = [
    'Corporate Litigation',
    'White-Collar Defense',
    'IP & Emerging Tech',
    'High-Net-Worth Estate',
    'Appellate Advocacy',
    'Crisis Management',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-28 relative bg-slate-950/90 overflow-hidden">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            <Lock className="w-3.5 h-3.5" />
            Confidential Consultation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-100"
          >
            Initiate Attorney Case Review
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-slate-400"
          >
            All communications are protected under strict Attorney-Client Privilege. Submit your matter for immediate confidential evaluation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Encrypted Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    24/7 Priority Emergency Defense
                  </h4>
                  <div className="text-xl font-bold text-slate-100 font-mono mt-0.5">
                    +1 (800) 555-VALLE
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct emergency line monitored around the clock for arrests, grand jury warrants, and immediate regulatory actions.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Encrypted Privilege Portal
                  </h4>
                  <div className="text-sm font-bold text-slate-100 font-mono mt-0.5">
                    confidential@vallelaw.com
                  </div>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                End-to-end encrypted inbox for case files, corporate briefs, and formal legal inquiries.
              </p>
            </SpotlightCard>

            <SpotlightCard className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                    Principal Offices
                  </h4>
                  <div className="text-sm font-bold text-slate-100 mt-0.5">
                    One Rockefeller Plaza, 28th Floor
                  </div>
                  <div className="text-xs text-slate-400">New York, NY 10020</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mon - Fri: 8:00 AM - 7:00 PM EST</span>
                </div>
                <span className="text-amber-400 font-semibold">Secure Valet</span>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Right Column: 21st.dev Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 mb-6">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-slate-100 mb-2">
                      Privileged Review Initiated
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you. Your consultation inquiry has been transmitted directly to Mr. Valle’s confidential queue. Senior counsel will review and respond within 2 hours.
                    </p>
                    <div className="mt-8">
                      <GlowButton
                        variant="outline"
                        size="md"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            email: '',
                            phone: '',
                            practiceArea: 'Corporate Litigation',
                            message: '',
                          });
                        }}
                      >
                        Submit Additional Legal Document
                      </GlowButton>
                    </div>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-slate-100">
                          Request Legal Assessment
                        </h3>
                        <p className="text-xs text-slate-400 mt-1">
                          Protected under Rule 1.6 Attorney-Client Privilege.
                        </p>
                      </div>
                      <ShieldCheck className="w-6 h-6 text-amber-400" />
                    </div>

                    {/* Legal Discipline Selector Chips */}
                    <div>
                      <label className="block text-xs uppercase font-mono tracking-widest text-slate-400 mb-3 font-semibold">
                        Select Primary Legal Discipline
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {practiceOptions.map((option) => {
                          const isSelected = formData.practiceArea === option;
                          return (
                            <button
                              type="button"
                              key={option}
                              onClick={() => setFormData({ ...formData, practiceArea: option })}
                              className={`relative px-3 py-2 text-xs rounded-xl font-medium transition-all duration-200 cursor-pointer ${
                                isSelected
                                  ? 'text-amber-300 font-bold'
                                  : 'text-slate-400 bg-slate-950/60 border border-slate-800 hover:border-slate-700'
                              }`}
                            >
                              {isSelected && (
                                <motion.span
                                  layoutId="activeChip"
                                  className="absolute inset-0 bg-amber-500/20 border border-amber-500/50 rounded-xl"
                                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                              )}
                              <span className="relative z-10">{option}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Inputs with floating micro-interactions */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <AnimatedInput
                        label="Full Name / Entity Title"
                        icon={<User className="w-4 h-4" />}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                      />
                      <AnimatedInput
                        label="Encrypted Email"
                        type="email"
                        icon={<Mail className="w-4 h-4" />}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <AnimatedInput
                      label="Direct Phone / Signal Contact"
                      type="tel"
                      icon={<Phone className="w-4 h-4" />}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />

                    <AnimatedTextArea
                      label="Executive Brief of Legal Matter (Strictly Confidential)"
                      icon={<MessageSquare className="w-4 h-4" />}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />

                    {/* Submit Button */}
                    <div className="pt-2">
                      <GlowButton
                        type="submit"
                        variant="primary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full"
                        icon={isSubmitting ? undefined : <Send className="w-5 h-5" />}
                      >
                        {isSubmitting ? 'Securing Privilege & Transmitting...' : 'Submit Confidential Legal Inquiry'}
                      </GlowButton>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
