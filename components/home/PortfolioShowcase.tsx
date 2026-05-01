'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '@/lib/constants';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';

const categories = ['All', 'Branding', 'Digital Design', 'Events', 'Fashion', 'Interior', 'Construction'];

export default function PortfolioShowcase() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === active);

  return (
    <section className="section-padding bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Work"
          title="Featured"
          titleHighlight="Portfolio"
          description="A curated selection of projects that showcase our creativity and commitment to excellence."
        />

        {/* Filter Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? 'bg-[#C8A97E] text-black'
                  : 'glass border border-white/10 text-white/60 hover:text-white hover:border-[#C8A97E]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl overflow-hidden img-zoom aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <span className="text-[#C8A97E] text-xs tracking-wider uppercase mb-1 block">{item.category}</span>
                  <h3 className="text-white font-display font-bold text-xl">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.description}</p>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <AnimatedSection className="text-center mt-12">
          <Link href="/portfolio" className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
            View Full Portfolio
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
