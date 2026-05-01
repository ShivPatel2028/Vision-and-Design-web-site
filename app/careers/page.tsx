import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowRight, Star, Heart, Zap, Award } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Vision And Design team. We are always looking for creative, passionate, and driven individuals to join our agency.',
};

const perks = [
  { icon: Heart, title: 'Creative Freedom', desc: 'We encourage bold ideas and give you the space to execute them.' },
  { icon: Zap, title: 'Dynamic Environment', desc: 'Work across diverse industries and exciting, high-profile projects.' },
  { icon: Award, title: 'Continuous Growth', desc: 'Learn from industry experts and elevate your professional skills.' },
  { icon: Star, title: 'Premium Culture', desc: 'A luxurious, modern, and supportive agency environment.' },
];

const openPositions = [
  { title: 'Senior Brand Strategist', dept: 'Branding', type: 'Full-time', location: 'Vadodara' },
  { title: 'UI/UX Designer', dept: 'Digital', type: 'Full-time', location: 'Vadodara / Remote' },
  { title: 'Event Coordinator', dept: 'Events', type: 'Full-time', location: 'Vadodara' },
  { title: 'Interior Architect', dept: 'Architecture', type: 'Full-time', location: 'Vadodara' },
];

export default function CareersPage() {
  return (
    <div className="bg-[#16161a] pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16161a] to-[#16161a]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 text-[#C8A97E] text-xs font-semibold tracking-[0.25em] uppercase mb-6">
              <span className="w-8 h-px bg-[#C8A97E]" /> Join Our Team <span className="w-8 h-px bg-[#C8A97E]" />
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-6">
              Shape the <span className="text-gradient-gold">Future</span> of Design
            </h1>
            <p className="text-white/60 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              We are constantly seeking brilliant minds and creative souls to craft world-class experiences with us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture Image */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 relative z-20">
        <AnimatedSection>
          <div className="w-full aspect-[21/9] rounded-3xl overflow-hidden img-zoom shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10 relative">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80" alt="Agency Culture" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
               <h2 className="text-4xl font-display font-bold text-white mb-2">Our Culture</h2>
               <p className="text-white/80 text-lg">Where passion meets perfection.</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Perks */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Why Join Us" title="Agency" titleHighlight="Perks" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-8 border border-white/5 card-hover text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-[#C8A97E]/10 mx-auto flex items-center justify-center mb-6">
                    <p.icon className="w-6 h-6 text-[#C8A97E]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{p.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions (No Forms, Direct Email) */}
      <section className="section-padding bg-[#1a1a1f]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Opportunities" title="Open" titleHighlight="Roles" />
          <div className="space-y-4">
            {openPositions.map((pos, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="glass-dark rounded-2xl p-6 md:p-8 border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group">
                  <div>
                    <div className="flex gap-3 mb-3">
                      <span className="px-3 py-1 rounded-full border border-[#C8A97E]/30 text-[#C8A97E] text-[10px] uppercase tracking-widest font-bold">
                        {pos.dept}
                      </span>
                      <span className="px-3 py-1 rounded-full border border-white/10 text-white/50 text-[10px] uppercase tracking-widest font-bold">
                        {pos.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white group-hover:text-[#C8A97E] transition-colors">{pos.title}</h3>
                    <p className="text-white/40 text-sm mt-2 flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> {pos.location}</p>
                  </div>
                  <a href={`mailto:${SITE_CONFIG.email}?subject=Application for ${pos.title}`} className="shrink-0 btn-outline-gold px-6 py-3 rounded-full text-sm flex items-center gap-2">
                    Apply via Email <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-16 text-center">
             <p className="text-white/50 mb-4">Don't see a role that fits? We're always open to meeting talented people.</p>
             <a href={`mailto:${SITE_CONFIG.email}`} className="text-[#C8A97E] font-semibold hover:text-white transition-colors underline underline-offset-4 decoration-[#C8A97E]/30">
               Send us your portfolio anyway
             </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

import { MapPin } from 'lucide-react';
