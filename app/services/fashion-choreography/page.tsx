import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Fashion Choreography Services',
  description: 'Expert fashion choreography — runway coordination, model management, fashion show planning, and editorial-style event choreography.',
};

const services = [
  { title: 'Runway Coordination', desc: 'End-to-end runway show management from model briefing to final walk.', img: 'https://images.unsplash.com/photo-1537832816519-689ad163238b?w=700&q=80' },
  { title: 'Model Management', desc: 'Curated model selection, training, and coordination for any fashion event.', img: 'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=700&q=80' },
  { title: 'Show Planning', desc: 'Comprehensive fashion show planning — music, lighting, staging, and choreography.', img: 'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?w=700&q=80' },
  { title: 'Event Choreography', desc: 'Creative choreography for brand events, product launches, and fashion galas.', img: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80' },
];

export default function FashionChoreographyPage() {
  return (
    <div className="bg-[#FDFBF7] pt-20">
      {/* Cinematic editorial hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1537832816519-689ad163238b?w=1800&q=80" alt="Fashion Choreography" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16161a] via-[#16161a]/70 to-[#16161a]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#16161a] via-transparent to-transparent" />
        </div>
        {/* Editorial floating tag */}
        <div className="absolute top-[20%] right-[10%] hidden lg:block z-10">
          <AnimatedSection direction="right">
            <div className="glass border border-[#F59E0B]/20 rounded-xl p-4 animate-floating">
              <div className="text-[10px] tracking-[0.3em] text-[#F59E0B] uppercase mb-1">Fashion Week</div>
              <div className="text-[#1A1A1A] font-display font-bold text-lg">Runway Ready</div>
              <div className="w-full h-px bg-gradient-to-r from-[#F59E0B] to-transparent mt-2" />
            </div>
          </AnimatedSection>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-2xl">
            <Link href="/services" className="text-black/30 text-xs hover:text-[#C8A97E] transition-colors duration-200 mb-8 inline-block">← All Services</Link>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/20 mb-6">
              <span className="text-[#F59E0B] text-xs font-semibold tracking-widest uppercase">Fashion Choreography</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-black text-[#1A1A1A] leading-[0.9] mb-6">
              Runway<br /><span className="text-gradient-gold">Perfection</span><br />Defined
            </h1>
            <p className="text-black/60 text-lg leading-relaxed mb-8 max-w-md">
              We bring fashion shows to life with expert choreography, precision model management, and a directorial eye that transforms every runway into art.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                <Phone className="w-4 h-4" /> Book a Show
              </a>
              <a href={`https://wa.me/${SITE_CONFIG.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center gap-2">
                💬 WhatsApp
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="What We Do" title="Fashion" titleHighlight="Services" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.1}>
                <div className="group glass rounded-2xl overflow-hidden border border-black/5 hover:border-[#F59E0B]/20 card-hover h-full">
                  <div className="img-zoom aspect-video relative">
                    <Image src={s.img} alt={s.title} fill className="object-cover" sizes="25vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1A1A1A] font-display font-bold text-lg mb-2 group-hover:text-[#C8A97E] transition-colors duration-300">{s.title}</h3>
                    <p className="text-black/50 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial split layout */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=500&q=80" alt="Fashion" fill className="object-cover" sizes="25vw" />
                </div>
                <div className="space-y-4 pt-8">
                  <div className="img-zoom rounded-2xl overflow-hidden aspect-[3/4]">
                    <Image src="https://images.unsplash.com/photo-1536766820879-059fec98ec0a?w=500&q=80" alt="Model" fill className="object-cover" sizes="25vw" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <span className="text-[#F59E0B] text-xs tracking-[0.25em] uppercase font-semibold block mb-4">Our Expertise</span>
              <h2 className="text-4xl font-display font-bold text-[#1A1A1A] mb-6">The Art of <span className="text-gradient-gold">Perfect Choreography</span></h2>
              <p className="text-black/60 leading-relaxed mb-4">
                Our fashion choreography team brings years of runway experience and an editorial eye to every show we direct. We understand the rhythm of fashion — how garments move, how models walk, and how the entire show comes together as a cohesive visual narrative.
              </p>
              <p className="text-black/60 leading-relaxed mb-8">
                From intimate brand shows to large-scale fashion weeks, we handle every technical and creative detail so that every moment on the runway is flawlessly executed.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[['50+', 'Shows Choreographed'], ['200+', 'Models Coordinated'], ['15+', 'Fashion Brands'], ['100%', 'On-Time Delivery']].map(([val, lbl]) => (
                  <div key={lbl} className="glass rounded-xl p-4 border border-black/5">
                    <div className="text-2xl font-display font-bold text-gradient-gold">{val}</div>
                    <div className="text-black/40 text-xs mt-1">{lbl}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto text-center px-4">
          <AnimatedSection>
            <h2 className="text-4xl font-display font-bold text-[#1A1A1A] mb-4">Ready for Your <span className="text-gradient-gold">Fashion Moment?</span></h2>
            <p className="text-black/50 mb-8">Connect with us to discuss your fashion show or event choreography.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${SITE_CONFIG.contact1.phone}`} className="btn-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" /> Call Dhwani
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="btn-outline-gold px-8 py-4 rounded-full text-sm inline-flex items-center justify-center gap-2">
                Email Us
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
