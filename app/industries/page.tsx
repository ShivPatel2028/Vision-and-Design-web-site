import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { INDUSTRIES, SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description: 'Explore the industries we serve including fashion, corporate, retail, and technology. Vision And Design delivers tailored creative solutions.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#16161a] pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16161a] to-[#16161a]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C8A97E]/5 rounded-full blur-[100px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Who We Help <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
              Industries We <span className="text-gradient-gold">Transform</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              We bring deep industry expertise combined with limitless creativity to elevate brands across diverse sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries Showcase */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {INDUSTRIES.map((ind, i) => (
              <div key={ind.id} className={`flex flex-col lg:flex-row gap-16 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <AnimatedSection direction={i % 2 === 0 ? 'left' : 'right'} className="w-full lg:w-1/2">
                  <div className="relative img-zoom rounded-2xl overflow-hidden aspect-[4/3] group border border-white/10">
                    <Image src={ind.image} alt={ind.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-[#C8A97E]/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </AnimatedSection>
                
                <AnimatedSection direction={i % 2 === 0 ? 'right' : 'left'} className="w-full lg:w-1/2">
                  <span className="text-[#C8A97E] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">0{i + 1} / Industry Focus</span>
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{ind.name}</h2>
                  <p className="text-white/60 text-lg leading-relaxed mb-8">{ind.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Core Solutions</h4>
                    <div className="flex flex-wrap gap-3">
                      {ind.services.map(s => (
                        <span key={s} className="px-4 py-2 rounded-full glass border border-white/5 text-sm text-white/70">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/portfolio`} className="inline-flex items-center gap-2 text-[#C8A97E] font-semibold hover:text-white transition-colors duration-300 group">
                    View Related Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </AnimatedSection>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1a1a1f]">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-white mb-6">Is Your Industry <span className="text-gradient-gold">Not Listed?</span></h2>
            <p className="text-white/60 mb-10 text-lg">We thrive on new challenges. Let's discuss how our creative approach can revolutionize your specific market.</p>
            <div className="flex justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-10 py-4 rounded-full text-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Let's Talk Strategy
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
