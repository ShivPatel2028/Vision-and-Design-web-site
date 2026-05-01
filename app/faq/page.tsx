'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { FAQS, SITE_CONFIG } from '@/lib/constants';

// Group FAQs for better organization on the dedicated page if needed, but since they are flat in constants, we will display them as a list.

export default function FAQPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-[#FDFBF7] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16161a] to-[#16161a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Support <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#1A1A1A] mb-6">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h1>
            <p className="text-black/60 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Everything you need to know about working with Vision And Design.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${openIdx === i ? 'border-[#C8A97E]/40 shadow-[0_0_20px_rgba(200,169,126,0.1)]' : 'border-black/5 hover:border-white/20'}`}>
                  <button
                    className="w-full flex items-center justify-between p-6 text-left group"
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                  >
                    <span className={`font-semibold pr-4 transition-colors duration-300 ${openIdx === i ? 'text-[#C8A97E]' : 'text-[#1A1A1A] group-hover:text-[#C8A97E]'}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${openIdx === i ? 'bg-[#C8A97E] text-black' : 'bg-white/5 text-[#1A1A1A]'}`}>
                       <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIdx === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-black/60 leading-relaxed border-t border-black/5 pt-4 mt-2">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-[#1A1A1A] mb-6">Still have <span className="text-gradient-gold">Questions?</span></h2>
            <p className="text-black/60 mb-10 text-lg">We are here to help. Reach out to us directly for any specific inquiries.</p>
            <div className="flex justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-10 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Support
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
