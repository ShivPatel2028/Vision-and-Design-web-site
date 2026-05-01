'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Phone } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { PORTFOLIO_ITEMS, SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

const categories = ['All', 'Branding', 'Digital Design', 'Events', 'Fashion', 'Interior', 'Construction'];

export default function PortfolioPage() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === active);

  return (
    <div className="bg-[#070707] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#070707] to-[#070707]" />
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C8A97E]/5 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Our Masterpieces <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
              Selected <span className="text-gradient-gold">Works</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              A curated showcase of our finest projects across branding, design, events, and construction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? 'bg-gradient-to-r from-[#C8A97E] to-[#b8895a] text-black shadow-[0_0_20px_rgba(200,169,126,0.3)]'
                    : 'glass border border-white/10 text-white/60 hover:text-white hover:border-[#C8A97E]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Masonry Grid */}
          <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence>
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                  className="break-inside-avoid"
                >
                  <div className="group relative rounded-2xl overflow-hidden img-zoom cursor-pointer border border-white/5 card-hover">
                    <div className="relative aspect-[4/5]">
                      <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <span className="inline-block px-3 py-1 rounded-full bg-[#C8A97E]/20 border border-[#C8A97E]/30 text-[#C8A97E] text-[10px] font-bold tracking-widest uppercase mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white font-display font-bold text-2xl mb-2">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-12 h-12 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-50 group-hover:scale-100">
                      <ExternalLink className="w-5 h-5 text-[#C8A97E]" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Impressed by <span className="text-gradient-gold">Our Work?</span></h2>
            <p className="text-white/60 mb-10 text-lg">Let's create something equally stunning for your brand. Reach out today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-10 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Start a Project
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
