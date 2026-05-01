import type { Metadata } from 'next';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { TESTIMONIALS, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Hear from our clients. See why leading brands and individuals choose Vision And Design for their creative needs.',
};

export default function TestimonialsPage() {
  return (
    <div className="bg-[#16161a] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16161a] to-[#16161a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Client Success <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
              Words from <span className="text-gradient-gold">Our Clients</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              The true measure of our success is the impact we create for those we work with.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Grid of Testimonials */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {TESTIMONIALS.map((t, i) => (
              <AnimatedSection key={t.id} delay={(i % 3) * 0.1} className="break-inside-avoid">
                <div className="glass-dark rounded-3xl p-8 border border-white/5 hover:border-[#C8A97E]/30 card-hover relative group">
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 group-hover:text-[#C8A97E]/10 transition-colors duration-500" />
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#C8A97E] text-[#C8A97E]" />
                    ))}
                  </div>
                  
                  <p className="text-white/80 text-lg leading-relaxed mb-8 relative z-10 font-medium">"{t.content}"</p>
                  
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#C8A97E]/30 group-hover:border-[#C8A97E] transition-colors duration-300 relative">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{t.name}</h4>
                      <p className="text-white/50 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a1a1f]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Ready to be our <span className="text-gradient-gold">Next Success Story?</span></h2>
            <div className="flex justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-10 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                Call Us Today
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
