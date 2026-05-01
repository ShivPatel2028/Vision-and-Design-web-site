import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Home, Layers, Sparkles, Building } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Interior Design Services',
  description: 'Luxury interior design services — space planning, modern interiors, luxury room concepts, and commercial interior solutions.',
};

const styles = [
  { name: 'Modern Luxury', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=700&q=80', desc: 'Clean lines, premium materials, and sophisticated colour palettes.' },
  { name: 'Contemporary Minimal', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=700&q=80', desc: 'Less is more — functional beauty with refined simplicity.' },
  { name: 'Classic Elegance', img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=700&q=80', desc: 'Timeless interiors rich in craftsmanship and traditional warmth.' },
  { name: 'Commercial Spaces', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', desc: 'Productive, impressive office and retail environments that mean business.' },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'Understand your lifestyle, taste, and functional needs.' },
  { step: '02', title: 'Concept Design', desc: 'Mood boards, 3D layouts, and material selection.' },
  { step: '03', title: 'Detailed Planning', desc: 'Floor plans, furniture specs, and lighting design.' },
  { step: '04', title: 'Execution', desc: 'Vendor management, installation, and quality control.' },
  { step: '05', title: 'Reveal', desc: 'The big reveal — your dream space, perfectly realised.' },
];

export default function InteriorDesignPage() {
  return (
    <div className="bg-[#16161a] pt-20">
      {/* Cinematic editorial hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80" alt="Interior Design" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16161a] via-[#16161a]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent" />
        </div>
        {/* Floating room card */}
        <div className="absolute top-1/4 right-[6%] hidden lg:block z-10">
          <AnimatedSection direction="right">
            <div className="glass-dark rounded-2xl p-5 border border-[#8B5CF6]/20 animate-floating w-52">
              <div className="w-full h-24 rounded-lg overflow-hidden mb-3 relative">
                <Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=300&q=80" alt="Room" fill className="object-cover" sizes="200px" />
              </div>
              <div className="text-white text-sm font-semibold">Living Room</div>
              <div className="text-white/40 text-xs mt-1">Luxury Minimal</div>
              <div className="flex items-center gap-1 mt-2">
                {[1,2,3,4,5].map(s => <div key={s} className="w-3 h-0.5 rounded-full bg-[#C8A97E]" />)}
              </div>
            </div>
          </AnimatedSection>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Link href="/services" className="text-white/30 text-xs hover:text-[#C8A97E] transition-colors duration-200 mb-8 inline-block">← All Services</Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 mb-6">
              <Home className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span className="text-[#C8A97E] text-xs font-semibold tracking-widest uppercase">Interior Design</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[0.9] mb-6">
              Spaces That<br /><span className="text-gradient-gold">Inspire</span><br />& Delight
            </h1>
            <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
              We transform ordinary spaces into extraordinary environments — blending aesthetics, functionality, and personality into every interior we create.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Book Consultation
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                💬 Chat with Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Design Styles */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Design Styles" title="Interior" titleHighlight="Aesthetics" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {styles.map((s, i) => (
              <AnimatedSection key={s.name} delay={i * 0.1}>
                <div className="group glass-dark rounded-2xl overflow-hidden border border-white/5 hover:border-[#8B5CF6]/20 card-hover h-full">
                  <div className="img-zoom aspect-[4/5] relative">
                    <Image src={s.img} alt={s.name} fill className="object-cover" sizes="25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-display font-bold text-lg group-hover:text-[#C8A97E] transition-colors duration-300">{s.name}</h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-white/50 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury gallery row */}
      <section className="section-padding bg-[#1a1a1f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Our Work" title="Signature" titleHighlight="Projects" />
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-none">
            {[
              'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
              'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80',
              'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
              'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80',
              'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80',
            ].map((img, i) => (
              <div key={i} className="img-zoom flex-none w-72 h-96 snap-center rounded-2xl overflow-hidden relative">
                <Image src={img} alt={`Interior project ${i+1}`} fill className="object-cover" sizes="300px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="How We Work" title="Design" titleHighlight="Process" />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <AnimatedSection key={p.step} delay={i * 0.1}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-full glass-dark border border-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-4 group-hover:border-[#C8A97E]/50 transition-all duration-300">
                    <span className="text-[#C8A97E] font-display font-bold text-sm">{p.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-sm mb-2">{p.title}</h3>
                  <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
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
            <h2 className="text-4xl font-display font-bold text-white mb-4">Transform Your <span className="text-gradient-gold">Space Today</span></h2>
            <p className="text-white/50 mb-8">Book a free consultation and let's design your dream interior.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Book Consultation
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                Email for Portfolio
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
