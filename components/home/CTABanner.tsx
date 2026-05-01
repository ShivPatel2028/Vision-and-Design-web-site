import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export default function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#C8A97E]/10 via-[#1A1A2E]/50 to-[#1a1a1f]" />
      
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8A97E]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#6366F1]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="glass rounded-3xl p-10 md:p-16 border border-[#C8A97E]/20 text-center relative overflow-hidden group shadow-[0_0_50px_rgba(200,169,126,0.05)]">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80')] opacity-[0.03] mix-blend-overlay group-hover:opacity-[0.06] transition-opacity duration-700" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a1a1f]/80" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
                <span className="w-8 h-px bg-[#C8A97E]" /> Start Your Journey <span className="w-8 h-px bg-[#C8A97E]" />
              </span>
              
              <h2 className="text-4xl md:text-6xl font-display font-black text-[#1A1A1A] mb-6 leading-tight">
                Ready to Create <br />
                <span className="text-gradient-gold">Something Extraordinary?</span>
              </h2>
              
              <p className="text-black/60 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Connect with our founders directly. Let's discuss your vision and craft a strategy that sets you apart.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-10 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group/btn">
                  <Phone className="w-4 h-4" /> Call Us Directly
                </a>
                <Link href="/contact" className="btn-outline-gold px-10 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2 group/btn2">
                  View Contact Details <ArrowRight className="w-4 h-4 group-hover/btn2:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
