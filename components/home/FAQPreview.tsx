'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FAQPreview() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const preview = FAQS.slice(0, 4);

  return (
    <section className="section-padding bg-[#080808]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Frequently Asked"
          titleHighlight="Questions"
          description="Find quick answers to the most common questions about working with Vision And Design."
        />

        <div className="space-y-3">
          {preview.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-dark rounded-2xl border border-white/5 overflow-hidden hover:border-[#C8A97E]/20 transition-colors duration-300">
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left group"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="text-white font-medium pr-4 group-hover:text-[#C8A97E] transition-colors duration-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8A97E] shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {openIdx === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-5 text-white/60 text-sm leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center mt-10">
          <Link href="/faq" className="btn-outline-gold px-8 py-3 rounded-full text-sm inline-flex items-center gap-2">
            View All FAQs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
